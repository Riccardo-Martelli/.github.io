#!/usr/bin/env python3
import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from bs4 import BeautifulSoup
from huggingface_hub import InferenceClient
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)

# ----------------------------
# Configuration
# ----------------------------
client = InferenceClient(
    provider="hf-inference",
    api_key=os.getenv("HF_API_KEY", "")  # Get token from environment variable
)

# Choose your model here:
MODEL_ID = "microsoft/DialoGPT-medium"  # Good for conversational chat
# MODEL_ID = "google/flan-t5-large"     # Better for instruction following
# MODEL_ID = "distilbert-base-cased-distilled-squad"  # Best for exact answers

# ----------------------------
# Load website content
# ----------------------------
def load_website_content():
    try:
        with open("index.html", "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
            parts = []
            for tag in soup.find_all(["h1", "h2", "h3", "p", "li", "td"]):
                text = tag.get_text(" ", strip=True)
                if text and len(text) > 10:  # Filter out very short texts
                    parts.append(text)
        return " ".join(parts)
    except FileNotFoundError:
        return "Website content not available."

website_text = load_website_content()
chat_history = []
MAX_HISTORY = 6  # Keep last 3 exchanges

# ----------------------------
# Prompt Engineering
# ----------------------------
def build_prompt(user_message):
    # Keep only recent history
    global chat_history
    if len(chat_history) > MAX_HISTORY:
        chat_history = chat_history[-MAX_HISTORY:]
    
    chat_history.append(f"User: {user_message}")
    
    if "flan-t5" in MODEL_ID.lower():
        # Flan-T5 responds better to instruction format
        prompt = f"""
Answer the question based on the context below. Be concise and helpful.

Context: {website_text}

Question: {user_message}

Answer:
"""
    elif "distilbert" in MODEL_ID.lower():
        # DistilBERT QA format
        prompt = f"""
Use the following context to answer the question.

Context: {website_text}

Question: {user_message}

Answer:
"""
    else:
        # DialoGPT conversational format
        prompt = f"""
You are TerminalGPT, a helpful assistant for Riccardo Martelli's website.
Answer questions using ONLY the website content below. Be concise and friendly.

Website content: {website_text}

Recent conversation:
{chr(10).join(chat_history[-4:])}
TerminalGPT:
"""
    return prompt

# ----------------------------
# Chat endpoint
# ----------------------------
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").strip()
    
    if not user_message:
        return jsonify({"response": "Please enter a message."})
    
    prompt = build_prompt(user_message)
    
    try:
        # Call Hugging Face model
        result = client.text_generation(
            prompt,
            model=MODEL_ID,
            max_new_tokens=150,
            temperature=0.7,
            do_sample=True,
            return_full_text=False  # Don't repeat the prompt
        )
        
        # Clean up the response
        if isinstance(result, list):
            answer = result[0]["generated_text"]
        else:
            answer = str(result).strip()
        
        # Remove any repeated prompts from the response
        if "TerminalGPT:" in answer:
            answer = answer.split("TerminalGPT:")[-1].strip()
        
        chat_history.append(f"TerminalGPT: {answer}")
        
    except Exception as e:
        answer = f"I apologize, but I'm having trouble responding right now. Please try again shortly. Error: {str(e)}"
    
    return jsonify({"response": answer})

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy", "model": MODEL_ID})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)