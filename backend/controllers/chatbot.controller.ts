import type { Request, Response } from "express"
import { createError } from "../utils/error.js"
import { generateAIResponse } from "../utils/ai-api.js"

// Process a chatbot message
export const processChatbotMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json(createError(400, "Message is required"))
    }

    // Get user context if authenticated
    const userContext = req.user
      ? {
          authenticated: true,
          userData: {
            id: req.user.id,
            role: req.user.role,
          }
        }
      : { authenticated: false }

    // Generate response using the AI API
    const response = await generateAIResponse(message, userContext)

    res.status(200).json({
      success: true,
      response,
    })
  } catch (error: any) {
    res.status(500).json(createError(500, error.message))
  }
}

// Get chatbot conversation history
export const getChatbotHistory = async (req: Request, res: Response) => {
  try {
    // In a real implementation, you would store and retrieve conversation history from a database
    // For this example, we'll return a placeholder response

    res.status(200).json({
      success: true,
      message: "Chatbot history would be retrieved here in a real implementation",
      history: [],
    })
  } catch (error: any) {
    res.status(500).json(createError(500, error.message))
  }
}

