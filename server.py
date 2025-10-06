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
    print(website_text)

@app.route("/chat", methods=["POST"])
def chat():
    
    user_message = request.json.get("message")

    prompt = f"""
    our name is TerminalGPT,people can call you TG for short, you are a model that is deployed on a terminal so that the user can answer questions,
    whether it's about the PC's hardware or software, or about the laptop they're using, or more general curiosities such as why the sky is blue.
    You're a kind and gentle model, with a funny attitude.
    Website content: {website_text}

    Question: {user_message}
    """

    try:
        print("⚡ Generating response...", flush=True)
        with model.chat_session():
            answer = model.generate(prompt, max_tokens=200)
        print("✅ Generation complete")
    except Exception as e:
        answer = f"⚠️ Model error: {str(e)}"
        
    print("Sending response to frontend:", answer[:100])
    return jsonify({"response": answer})

if __name__ == "__main__":
    app.run(debug=True)
