import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired)
    if (error.response && error.response.status === 401) {
      // Clear localStorage and redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  },
)

// Auth API
export const authAPI = {
  register: (userData: any) => api.post("/auth/register", userData),
  login: (credentials: any) => api.post("/auth/login", credentials),
  logout: () => api.post("/auth/logout"),
  getCurrentUser: () => api.get("/auth/me"),
}

// Appointment API
export const appointmentAPI = {
  getUserAppointments: (params?: any) => api.get("/appointments", { params }),
  getAppointmentById: (id: string) => api.get(`/appointments/${id}`),
  createAppointment: (appointmentData: any) => api.post("/appointments", appointmentData),
  updateAppointment: (id: string, appointmentData: any) => api.put(`/appointments/${id}`, appointmentData),
  cancelAppointment: (id: string) => api.patch(`/appointments/${id}/cancel`),
  getDoctorAvailability: (doctorId: string, date: string) =>
    api.get("/appointments/availability", { params: { doctorId, date } }),
}

// Medical Record API
export const medicalRecordAPI = {
  getPatientMedicalRecords: (patientId?: string) =>
    patientId ? api.get(`/medical-records/patient/${patientId}`) : api.get("/medical-records"),
  getMedicalRecordById: (id: string) => api.get(`/medical-records/${id}`),
  createMedicalRecord: (recordData: any) => api.post("/medical-records", recordData),
  updateMedicalRecord: (id: string, recordData: any) => api.put(`/medical-records/${id}`, recordData),
  deleteMedicalRecord: (id: string) => api.delete(`/medical-records/${id}`),
}

// Consultation API
export const consultationAPI = {
  getUserConsultations: () => api.get("/consultations"),
  getConsultationById: (id: string) => api.get(`/consultations/${id}`),
  createConsultation: (consultationData: any) => api.post("/consultations", consultationData),
  updateConsultation: (id: string, consultationData: any) => api.put(`/consultations/${id}`, consultationData),
  startVideoConsultation: (id: string) => api.post(`/consultations/${id}/start`),
  endVideoConsultation: (id: string) => api.post(`/consultations/${id}/end`),
}

// Emergency API
export const emergencyAPI = {
  getNearbyFacilities: (lat: number, lng: number, radius: number) =>
    api.get("/emergency/facilities/nearby", { params: { lat, lng, radius } }),
  getBloodBanks: () => api.get("/emergency/blood-banks"),
  getOxygenSuppliers: () => api.get("/emergency/oxygen-suppliers"),
  requestEmergencyAssistance: (requestData: any) => api.post("/emergency/assistance", requestData),
}

// Report API
export const reportAPI = {
  getUserReports: () => api.get("/reports"),
  getReportById: (id: string) => api.get(`/reports/${id}`),
  submitReport: (reportData: any) => api.post("/reports", reportData),
  updateReport: (id: string, reportData: any) => api.put(`/reports/${id}`, reportData),
}

// Chatbot API
export const chatbotAPI = {
  sendMessage: (message: string) => api.post("/chatbot/message", { message }),
  getChatHistory: () => api.get("/chatbot/history"),
}

// User API
export const userAPI = {
  getUserProfile: () => api.get("/users/profile"),
  updateUserProfile: (profileData: any) => api.put("/users/profile", profileData),
  changePassword: (passwordData: any) => api.put("/users/change-password", passwordData),
  getDoctors: () => api.get("/users/doctors"),
  getAllUsers: () => api.get("/users/all"), // Admin only
}

export default api

