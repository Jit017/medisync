import express from "express"
import { register, login, getCurrentUser, logout } from "../controllers/auth.controller"
import { authenticate } from "../middleware/auth"

const router = express.Router()

// Public routes
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

// Protected routes
router.get("/me", authenticate, getCurrentUser)

export default router

