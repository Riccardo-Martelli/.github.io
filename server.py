#!/usr/bin/env python3

from flask import Flask, request, jsonify
from flask_cors import CORS
from gpt4all import GPT4All
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

# Load model
model = GPT4All("Meta-Llama-3-8B-Instruct.Q4_0.gguf", model_path="./model")

# Load website content
with open("index.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")
    parts = []
    for tag in soup.find_all(["h1", "h2","h3", "p","tr"]):
        text = tag.get_text(" ", strip=True)
        if text:
            parts.append(text)

    website_text = " ".join(parts)

chat_history = []

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    chat_history.append(f"User: {user_message}")

    # Build prompt with history
    prompt = f"""
    Your name is TerminalGPT, people call you TG for short. You are kind, funny, and helpful.
    If a "User:" is present then it follows the user has messaged you before, to evaluate the number of previous messages, count how many "User:" are in the chat history.
    If there more than one "User:"  do not introduce your self, answer directly.
    You are an assistant for the website of Riccardo Martelli. You will answer questions about the content of the website. Do not say stuff like "According to Riccardo Martelli's website", just answer directly.
    Use the website content to answer the user's questions. If the answer is not in the website content, politely inform the user that you don't have that information.
    Always answer in a concise manner. Riccardo conducts research in Theoretical Physics specifically in General Relativity, he generated new solutions of Einstein's field equations and studied their properties. Riccardo is passionate about teaching and science communication.
    Website content: {website_text}

    {chr(10).join(chat_history)}
    TG:"""

    try:
        with model.chat_session() as session:
            answer = session.generate(prompt, max_tokens=200)
        chat_history.append(f"TG: {answer}")
    except Exception as e:
        answer = f"⚠️ Model error: {str(e)}"

    return jsonify({"response": answer+"\n"})                                                                                      

if __name__ == "__main__":
    app.run(debug=True)
