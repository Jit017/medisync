"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { authAPI } from "./api"

// Define user type
interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  role: "patient" | "doctor" | "admin"
}

// Define auth context type
interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if (storedUser && token) {
          setUser(JSON.parse(storedUser))

          // Verify token is still valid by fetching current user
          const response = await authAPI.getCurrentUser()
          setUser(response.data.user)
        }
      } catch (err) {
        // Token is invalid, clear localStorage
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      const response = await authAPI.login({ email, password })

      // Save token and user to localStorage
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setUser(response.data.user)
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Register function
  const register = async (userData: any) => {
    try {
      setLoading(true)
      setError(null)

      const response = await authAPI.register(userData)

      // Save token and user to localStorage
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setUser(response.data.user)
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      setLoading(true)

      // Call logout API
      await authAPI.logout()

      // Clear localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("user")

      // Clear user state
      setUser(null)

      // Redirect to home page
      router.push("/")
    } catch (err: any) {
      setError(err.response?.data?.message || "Logout failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Clear error function
  const clearError = () => {
    setError(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

// HOC to protect routes
export const withAuth = (Component: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login")
      }
    }, [user, loading, router])

    if (loading) {
      return <div>Loading...</div>
    }

    return user ? <Component {...props} /> : null
  }

  return AuthenticatedComponent
}

// HOC to protect admin routes
export const withAdminAuth = (Component: React.ComponentType) => {
  const AdminComponent = (props: any) => {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.push("/login")
        } else if (user.role !== "admin") {
          router.push("/dashboard")
        }
      }
    }, [user, loading, router])

    if (loading) {
      return <div>Loading...</div>
    }

    return user && user.role === "admin" ? <Component {...props} /> : null
  }

  return AdminComponent
}

