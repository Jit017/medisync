# Healthcare Platform with AI-Powered Chatbot

This healthcare platform includes an AI-powered chatbot that can answer healthcare-related questions, assess symptoms, provide medication information, and help with appointment scheduling.

## Features

- **AI-Powered Healthcare Chatbot**: Powered by Hugging Face's Mistral-7B-Instruct model
- **Multi-language Support**: English, Spanish, French, and Chinese
- **Symptom Assessment**: Provides severity levels and medical advice
- **Medication Information**: Details about uses, side effects, and interactions
- **Appointment Scheduling**: Helps users book medical appointments
- **User Authentication**: Secure login for accessing personal health information

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Hugging Face API key (free tier available)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.example` and add your Hugging Face API key:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the project root directory:
   ```
   cd ..
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Using the Chatbot

The chatbot can answer various healthcare-related questions:

- **Symptoms**: Ask about symptoms like headache, fever, cough, etc.
- **Medications**: Inquire about medications like lisinopril, metformin, etc.
- **Conditions**: Learn about conditions like diabetes, hypertension, etc.
- **Appointments**: Schedule medical appointments
- **General Health**: Get information about nutrition, exercise, sleep, etc.

## API Integration

The chatbot uses Hugging Face's Mistral-7B-Instruct model to generate responses. The integration is handled through:

1. Frontend: `lib/chatbot-ai.ts` - Makes API calls to the backend
2. Backend: `utils/ai-api.ts` - Handles communication with Hugging Face API
3. Backend Controller: `controllers/chatbot.controller.ts` - Processes requests and responses

## Getting a Hugging Face API Key

1. Create a free account at [Hugging Face](https://huggingface.co/)
2. Go to your profile settings
3. Navigate to "Access Tokens"
4. Create a new token with read access
5. Copy the token and add it to your `.env` file

## Customization

You can customize the chatbot's behavior by:

1. Modifying the prompt in `backend/utils/ai-api.ts`
2. Adjusting the response parsing logic
3. Adding more healthcare knowledge to the local fallback in `lib/chatbot-ai.ts`
4. Changing the model in `backend/utils/ai-api.ts` to another free model from Hugging Face

## Security Considerations

- The Hugging Face API key is stored securely in the backend
- User authentication is required for accessing personal health information
- All API responses include appropriate medical disclaimers

## License

This project is licensed under the MIT License - see the LICENSE file for details. 