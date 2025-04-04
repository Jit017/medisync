import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middleware/errorHandler.js"

// Routes
import authRoutes from "./routes/auth.routes"
import appointmentRoutes from "./routes/appointment.routes"
import medicalRecordRoutes from "./routes/medicalRecord.routes"
import consultationRoutes from "./routes/consultation.routes"
import emergencyRoutes from "./routes/emergency.routes"
import reportRoutes from "./routes/report.routes"
import chatbotRoutes from "./routes/chatbot.routes"
import userRoutes from "./routes/user.routes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/healthconnect"

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// API Routes
app.use("/api/auth", authRoutes)
app.use("/api/appointments", appointmentRoutes)
app.use("/api/medical-records", medicalRecordRoutes)
app.use("/api/consultations", consultationRoutes)
app.use("/api/emergency", emergencyRoutes)
app.use("/api/reports", reportRoutes)
app.use("/api/chatbot", chatbotRoutes)
app.use("/api/users", userRoutes)

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" })
})

// Error handling middleware
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app

