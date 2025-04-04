# Setting Up Hugging Face API for the Healthcare Chatbot

This guide will help you set up a free Hugging Face API key to power the healthcare chatbot.

## Why Hugging Face?

Hugging Face provides free access to powerful open-source language models that can be used for various AI applications, including chatbots. The healthcare platform uses the Mistral-7B-Instruct model, which is a state-of-the-art language model that can understand and respond to healthcare-related queries.

## Getting a Free Hugging Face API Key

1. **Create a Hugging Face Account**
   - Go to [Hugging Face](https://huggingface.co/)
   - Click on "Sign Up" in the top right corner
   - Fill in your details and create an account
   - Verify your email address

2. **Generate an API Token**
   - Log in to your Hugging Face account
   - Click on your profile picture in the top right corner
   - Select "Settings" from the dropdown menu
   - In the left sidebar, click on "Access Tokens"
   - Click on "New token"
   - Give your token a name (e.g., "Healthcare Chatbot")
   - Select "read" access
   - Click on "Generate token"
   - Copy the generated token (you won't be able to see it again)

3. **Add the API Key to Your Project**
   - You can use the provided setup script:
     ```
     ./scripts/setup-huggingface.sh
     ```
   - Or manually edit the `backend/.env` file and add your token:
     ```
     HUGGINGFACE_API_KEY=your_token_here
     ```

## Free Tier Limitations

The free tier of Hugging Face Inference API has the following limitations:

- Rate limits: 30,000 requests per month
- Concurrent requests: 1 request at a time
- Model loading time: Models may take a few seconds to load if they haven't been used recently

These limitations are generally sufficient for development and small-scale applications. If you need higher limits, Hugging Face offers paid plans.

## Alternative Models

If you want to try different models, you can modify the `backend/utils/ai-api.ts` file to use a different model. Here are some recommended free models:

- `mistralai/Mistral-7B-Instruct-v0.2` (default)
- `meta-llama/Llama-2-7b-chat-hf`
- `google/flan-t5-large`
- `facebook/opt-1.3b`

To change the model, update the URL in the `generateAIResponse` function:

```typescript
const response = await axios.post(
  'https://api-inference.huggingface.co/models/YOUR_CHOSEN_MODEL',
  // ...
);
```

## Troubleshooting

If you encounter issues with the Hugging Face API:

1. **Rate Limiting**: If you see rate limit errors, wait a few minutes before trying again.
2. **Model Loading**: The first request to a model may take longer as it needs to be loaded.
3. **API Key Issues**: Ensure your API key is correctly set in the `.env` file.
4. **Response Format**: If the responses are not formatted correctly, you may need to adjust the prompt or parsing logic in `backend/utils/ai-api.ts`.

## Additional Resources

- [Hugging Face Documentation](https://huggingface.co/docs)
- [Mistral-7B-Instruct Model Card](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2)
- [Hugging Face Inference API Documentation](https://huggingface.co/docs/inference-endpoints/index) 