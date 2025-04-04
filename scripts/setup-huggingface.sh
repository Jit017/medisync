#!/bin/bash

# Script to help users set up their Hugging Face API key

echo "Setting up Hugging Face API key for the Healthcare Platform"
echo "=========================================================="
echo ""
echo "This script will help you set up your Hugging Face API key for the chatbot."
echo "You'll need a free Hugging Face account to get an API key."
echo ""

# Check if .env file exists
if [ ! -f "backend/.env" ]; then
  echo "Creating .env file from .env.example..."
  cp backend/.env.example backend/.env
  echo ".env file created."
else
  echo ".env file already exists."
fi

# Prompt for Hugging Face API key
echo ""
echo "To get a Hugging Face API key:"
echo "1. Create a free account at https://huggingface.co/"
echo "2. Go to your profile settings"
echo "3. Navigate to 'Access Tokens'"
echo "4. Create a new token with read access"
echo "5. Copy the token"
echo ""
read -p "Enter your Hugging Face API key: " HF_API_KEY

# Update .env file with the API key
if [ ! -z "$HF_API_KEY" ]; then
  # Use sed to replace the API key in the .env file
  sed -i '' "s/HUGGINGFACE_API_KEY=.*/HUGGINGFACE_API_KEY=$HF_API_KEY/" backend/.env
  echo "Hugging Face API key updated in .env file."
else
  echo "No API key provided. Please update the .env file manually."
fi

echo ""
echo "Setup complete! You can now start the backend server with:"
echo "cd backend && npm run dev"
echo ""
echo "Then start the frontend with:"
echo "cd .. && npm run dev"
echo ""
echo "Visit http://localhost:3000 to use the chatbot." 