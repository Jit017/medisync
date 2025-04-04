import express from "express"
import { processChatbotMessage, getChatbotHistory } from "../controllers/chatbot.controller"
import { authenticate } from "../middleware/auth"

const router = express.Router()

// Process a chatbot message (public route)
router.post("/message", processChatbotMessage)

// Get chatbot conversation history (authenticated route)
router.get("/history", authenticate, getChatbotHistory)

export default router

