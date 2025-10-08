from fastapi import APIRouter, Body
from transformers import pipeline

router = APIRouter()

# Load the model once at startup
email_generator = pipeline("text-generation", model="distilgpt2")

@router.post("/generate-email")
async def generate_email(prompt: str = Body(..., embed=True)):
    """Generate a professional email from a short prompt"""
    result = email_generator(
        f"Write a professional email about: {prompt}",
        max_length=150,
        num_return_sequences=1,
        temperature=0.7,
    )
    email_text = result[0]["generated_text"]
    return {"email": email_text.strip()}