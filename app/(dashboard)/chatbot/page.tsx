"use client"

import React from 'react'
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Lock,
  MessageSquare,
  Send,
  Stethoscope,
  Calendar,
  Pill,
  MapPin,
  BookOpen,
  HeadsetIcon,
} from "lucide-react"
import { generateResponse } from "@/lib/chatbot-ai"
import { Message, UserData, AIResponse, UserContext } from "@/types/chatbot"

interface Translations {
  welcomeMessage: string;
  welcomeOptions: string[];
  chatbotTitle: string;
  chatbotDescription: string;
  inputPlaceholder: string;
  sendButton: string;
  emergencyServices: string;
  languageSelector: string;
  loginSuccess: string;
  loginOptions: string[];
}

interface TranslationMap {
  [key: string]: Translations;
}

type LanguageKey = keyof typeof translations;

// Translations for the UI elements and initial messages
const translations = {
  en: {
    welcomeMessage: "Hello! I'm Health Rakshak. How can I help you today?",
    welcomeOptions: [
      "Schedule an appointment",
      "Check my symptoms",
      "Medication reminders",
      "Find healthcare services",
      "Talk to a human",
    ],
    chatbotTitle: "Healthcare Assistant",
    chatbotDescription: "Ask questions about your health, appointments, or medications",
    inputPlaceholder: "Type your message here...",
    sendButton: "Send",
    emergencyServices: "Emergency Services",
    languageSelector: "Language",
    loginSuccess: "Welcome back! You're successfully logged in. How can I assist you today?",
    loginOptions: ["View my appointments", "Medication reminders", "Check symptoms", "Update my information"],
  },
  es: {
    welcomeMessage: "¡Hola! Soy Health Rakshak. ¿Cómo puedo ayudarte hoy?",
    welcomeOptions: [
      "Programar una cita",
      "Revisar mis síntomas",
      "Recordatorios de medicamentos",
      "Encontrar servicios de salud",
      "Hablar con un humano",
    ],
    chatbotTitle: "Asistente de Salud",
    chatbotDescription: "Haga preguntas sobre su salud, citas o medicamentos",
    inputPlaceholder: "Escribe tu mensaje aquí...",
    sendButton: "Enviar",
    emergencyServices: "Servicios de Emergencia",
    languageSelector: "Idioma",
    loginSuccess: "¡Bienvenido de nuevo! Has iniciado sesión correctamente. ¿Cómo puedo ayudarte hoy?",
    loginOptions: ["Ver mis citas", "Recordatorios de medicamentos", "Revisar síntomas", "Actualizar mi información"],
  },
  fr: {
    welcomeMessage: "Bonjour! Je suis Health Rakshak. Comment puis-je vous aider aujourd'hui?",
    welcomeOptions: [
      "Prendre rendez-vous",
      "Vérifier mes symptômes",
      "Rappels de médicaments",
      "Trouver des services de santé",
      "Parler à un humain",
    ],
    chatbotTitle: "Assistant de Santé",
    chatbotDescription: "Posez des questions sur votre santé, vos rendez-vous ou vos médicaments",
    inputPlaceholder: "Tapez votre message ici...",
    sendButton: "Envoyer",
    emergencyServices: "Services d'Urgence",
    languageSelector: "Langue",
    loginSuccess: "Bienvenue! Vous êtes connecté avec succès. Comment puis-je vous aider aujourd'hui?",
    loginOptions: ["Voir mes rendez-vous", "Rappels de médicaments", "Vérifier les symptômes", "Mettre à jour mes informations"],
  },
  zh: {
    welcomeMessage: "你好！我是 Health Rakshak。今天我能为您做些什么？",
    welcomeOptions: [
      "预约就诊",
      "检查症状",
      "用药提醒",
      "查找医疗服务",
      "联系人工服务",
    ],
    chatbotTitle: "健康助手",
    chatbotDescription: "询问有关您的健康、预约或药物的问题",
    inputPlaceholder: "在此输入您的消息...",
    sendButton: "发送",
    emergencyServices: "紧急服务",
    languageSelector: "语言",
    loginSuccess: "欢迎回来！您已成功登录。今天我能为您做些什么？",
    loginOptions: ["查看我的预约", "用药提醒", "检查症状", "更新我的信息"],
  },
} as const satisfies Record<string, Translations>;

// Add chat message translations
const chatTranslations = {
  en: {
    symptomResponse: "I understand you're not feeling well. Can you tell me more about your symptoms?",
    appointmentResponse: "I can help you schedule an appointment. What type of appointment would you like to schedule?",
    medicationResponse: "I'll help you with your medication reminders. Would you like to:",
    servicesResponse: "I can help you find healthcare services nearby. What type of service are you looking for?",
    humanSupportResponse: "I'll connect you with a healthcare representative. Please wait a moment.",
    defaultResponse: "How else can I assist you today?",
  },
  es: {
    symptomResponse: "Entiendo que no te sientes bien. ¿Puedes contarme más sobre tus síntomas?",
    appointmentResponse: "Puedo ayudarte a programar una cita. ¿Qué tipo de cita te gustaría programar?",
    medicationResponse: "Te ayudaré con los recordatorios de medicamentos. ¿Qué te gustaría hacer?",
    servicesResponse: "Puedo ayudarte a encontrar servicios de salud cercanos. ¿Qué tipo de servicio estás buscando?",
    humanSupportResponse: "Te conectaré con un representante de salud. Por favor, espera un momento.",
    defaultResponse: "¿En qué más puedo ayudarte hoy?",
  },
  fr: {
    symptomResponse: "Je comprends que vous ne vous sentez pas bien. Pouvez-vous m'en dire plus sur vos symptômes ?",
    appointmentResponse: "Je peux vous aider à prendre rendez-vous. Quel type de rendez-vous souhaitez-vous prendre ?",
    medicationResponse: "Je vais vous aider avec vos rappels de médicaments. Que souhaitez-vous faire ?",
    servicesResponse: "Je peux vous aider à trouver des services de santé à proximité. Quel type de service recherchez-vous ?",
    humanSupportResponse: "Je vais vous mettre en relation avec un représentant de santé. Veuillez patienter un moment.",
    defaultResponse: "Comment puis-je vous aider davantage aujourd'hui ?",
  },
  zh: {
    symptomResponse: "我理解您感觉不适。您能详细描述一下症状吗？",
    appointmentResponse: "我可以帮您预约。您想预约什么类型的就诊？",
    medicationResponse: "我来帮您设置用药提醒。您想要：",
    servicesResponse: "我可以帮您找到附近的医疗服务。您在寻找什么类型的服务？",
    humanSupportResponse: "我将为您转接医疗代表。请稍等片刻。",
    defaultResponse: "今天还有什么我可以帮您的吗？",
  },
} as const;

// Main Chatbot Component
const HealthcareChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: translations.en.welcomeMessage,
      sender: "bot",
      options: translations.en.welcomeOptions,
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    name: "",
    patientId: "",
    appointments: [],
    medications: [],
    medicalHistory: {},
    insuranceInfo: {},
  })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [language, setLanguage] = useState<LanguageKey>("en")

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Translate message based on selected language
  const translateMessage = (message: Message): Message => {
    if (message.key && message.sender === "bot") {
      return {
        ...message,
        text: chatTranslations[language][message.key as keyof typeof chatTranslations.en] || message.text,
      };
    }
    return message;
  };

  // Update useEffect to translate messages when language changes
  useEffect(() => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => translateMessage(message))
    );
  }, [language]);

  // Add message from user
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage: Message = { text: input, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    // Process the message using our AI model
    await processUserInput(input)
  }

  // Handle option button clicks
  const handleOptionClick = async (option: string) => {
    const userMessage: Message = { text: option, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    await processUserInput(option)
  }

  // Process user input and generate bot response using our AI model
  const processUserInput = async (text: string) => {
    setLoading(true)

    // Use our AI model to generate a response
    const userContext = {
      authenticated: isAuthenticated,
      userData: userData,
    }

    try {
      // Generate response using the AI model
      const aiResponse = await generateResponse(text, userContext);
      
      // Create bot response message
      const botResponse: Message = {
        text: aiResponse.response_text,
        sender: "bot",
        options: aiResponse.suggestions,
      };

      // Add severity indicator if present
      if (aiResponse.severity) {
        let severityColor = "text-green-500";
        let severityText = "Low severity";
        
        if (aiResponse.severity === "medium") {
          severityColor = "text-yellow-500";
          severityText = "Medium severity";
        } else if (aiResponse.severity === "high") {
          severityColor = "text-orange-500";
          severityText = "High severity";
        } else if (aiResponse.severity === "emergency") {
          severityColor = "text-red-500";
          severityText = "EMERGENCY - Seek immediate care";
        }
        
        botResponse.text += `\n\n**${severityText}**`;
      }
      
      // Add medical advice if present
      if (aiResponse.medicalAdvice) {
        botResponse.text += `\n\n**Medical Advice:** ${aiResponse.medicalAdvice}`;
      }
      
      // Add follow-up questions if present
      if (aiResponse.followUpQuestions && aiResponse.followUpQuestions.length > 0) {
        botResponse.text += "\n\n**Follow-up Questions:**";
        aiResponse.followUpQuestions.forEach(question => {
          botResponse.text += `\n- ${question}`;
        });
      }
      
      // Add disclaimer if present
      if (aiResponse.disclaimer) {
        botResponse.text += `\n\n*${aiResponse.disclaimer}*`;
      }

      setMessages((prevMessages) => [...prevMessages, botResponse]);

      // If this was a login intent, simulate authentication
      if (aiResponse.intent === "login") {
        handleLogin();
      }
    } catch (error) {
      console.error('Error processing user input:', error);
      
      // Add error message
      const errorMessage: Message = {
        text: "I'm sorry, but I'm currently experiencing technical difficulties. Please try again later or contact support.",
        sender: "bot",
        options: ["Contact support", "Try again later"],
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  // Handle login process
  const handleLogin = () => {
    // Simulate successful login
    setIsAuthenticated(true)
    setUserData({
      ...userData,
      name: "John Doe",
      patientId: "P12345",
      appointments: [{ date: "2025-03-20", time: "10:00 AM", provider: "Dr. Smith", type: "Annual Checkup" }],
      medications: [{ name: "Lisinopril", dosage: "10mg", frequency: "Once daily", refillDate: "2025-04-01" }],
    })

    const loginResponse: Message = {
      text: translations[language].loginSuccess,
      sender: "bot",
      options: translations[language].loginOptions,
    }

    setMessages((prevMessages) => [...prevMessages, loginResponse])
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{translations[language].chatbotTitle}</h1>

      <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              <CardTitle>{translations[language].chatbotTitle}</CardTitle>
            </div>
            <div className="flex flex-col items-end text-xs">
              <Badge variant="outline" className="bg-white/20 text-white border-white/30 flex items-center gap-1 mb-1">
                <Lock className="h-3 w-3" /> HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                End-to-End Encrypted
              </Badge>
            </div>
          </div>
          <CardDescription className="text-white/80">
            {translations[language].chatbotDescription}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[500px] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900/50">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 shadow-sm ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>

                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.options.map((option, optIndex) => (
                        <Button
                          key={optIndex}
                          onClick={() => handleOptionClick(option)}
                          variant="outline"
                          size="sm"
                          className="rounded-full bg-primary/5 hover:bg-primary/10 border-primary/20 text-sm"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex mb-4">
                <div className="max-w-[80%]">
                  <div className="rounded-2xl px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </CardContent>

        <CardFooter className="border-t p-4 bg-white dark:bg-gray-950">
          <form onSubmit={handleSendMessage} className="flex w-full gap-2">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={translations[language].inputPlaceholder}
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4 mr-2" /> {translations[language].sendButton}
            </Button>
          </form>
        </CardFooter>
      </Card>

      <div className="flex justify-between items-center mt-4 max-w-4xl mx-auto">
        <Button variant="destructive" className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> {translations[language].emergencyServices}
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{translations[language].languageSelector}:</span>
          <Select
            defaultValue={language}
            onValueChange={(value: LanguageKey) => setLanguage(value)}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

// Feature cards component
const FeatureCards = () => {
  const features: Feature[] = [
    {
      title: "Symptom Assessment",
      description: "Get preliminary insights about your symptoms and guidance on next steps",
      icon: Stethoscope,
      color: "bg-blue-500/10 text-blue-500 border-blue-200",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Appointment Management",
      description: "Schedule, view, reschedule or cancel your medical appointments",
      icon: Calendar,
      color: "bg-green-500/10 text-green-500 border-green-200",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Medication Reminders",
      description: "Get information about your medications and set up reminders",
      icon: Pill,
      color: "bg-purple-500/10 text-purple-500 border-purple-200",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Healthcare Locator",
      description: "Find nearby healthcare facilities, specialists, and emergency services",
      icon: MapPin,
      color: "bg-red-500/10 text-red-500 border-red-200",
      gradient: "from-red-500 to-rose-500",
    },
    {
      title: "Health Education",
      description: "Access reliable information about various health topics and conditions",
      icon: BookOpen,
      color: "bg-amber-500/10 text-amber-500 border-amber-200",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      title: "Human Support",
      description: "Connect with healthcare representatives when you need additional help",
      icon: HeadsetIcon,
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-200",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover-float"
        >
          {/* Gradient top border */}
          <div className={`h-1 w-full bg-gradient-to-r ${feature.gradient} animate-gradient-x`}></div>

          <div className="p-6">
            <div
              className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 animate-pulse-subtle`}
            >
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>

          {/* Subtle corner decoration */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  )
}

// Main page component
export default function ChatbotPage() {
  return (
    <>
      {/* Feature Showcase */}
      <div className="container mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Healthcare Assistant Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered healthcare companion designed to provide personalized assistance and information
          </p>
        </div>

        <FeatureCards />
      </div>

      <HealthcareChatbot />
    </>
  )
}