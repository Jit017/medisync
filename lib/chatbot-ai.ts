import { UserData } from "@/types/chatbot";

// Define the response structure
export interface AIResponse {
  response_text: string;
  suggestions?: string[];
  intent?: string;
  action?: string;
  severity?: "low" | "medium" | "high" | "emergency";
  followUpQuestions?: string[];
  medicalAdvice?: string;
  disclaimer?: string;
}

// Define the user context structure
export interface UserContext {
  authenticated: boolean;
  userData: UserData;
}

// Healthcare knowledge base
const healthcareKnowledge = {
  symptoms: {
    headache: {
      commonCauses: [
        "Stress",
        "Dehydration",
        "Lack of sleep",
        "Eye strain",
        "Sinus infection",
        "Migraine",
      ],
      severityIndicators: {
        low: ["Mild pain", "Occasional occurrence", "No other symptoms"],
        medium: ["Moderate pain", "Daily occurrence", "Sensitivity to light"],
        high: ["Severe pain", "Nausea", "Vomiting", "Vision changes"],
        emergency: ["Sudden severe pain", "Confusion", "Loss of consciousness", "Stiff neck", "Fever"],
      },
      triageLevel: {
        low: "Self-care recommended",
        medium: "Schedule a doctor's appointment",
        high: "Seek medical attention soon",
        emergency: "Seek emergency care immediately",
      },
      selfCare: [
        "Rest in a quiet, dark room",
        "Stay hydrated",
        "Take over-the-counter pain relievers",
        "Apply a cold or warm compress",
        "Practice stress-reduction techniques",
      ],
    },
    fever: {
      commonCauses: [
        "Viral infection",
        "Bacterial infection",
        "Inflammatory conditions",
        "Heat exhaustion",
        "Medication side effects",
      ],
      severityIndicators: {
        low: ["Mild fever (100.4°F/38°C)", "No other symptoms", "Improves with rest"],
        medium: ["Moderate fever (101-103°F/38.3-39.4°C)", "Mild symptoms", "Persists for 1-2 days"],
        high: ["High fever (103-105°F/39.4-40.6°C)", "Severe symptoms", "Persists for more than 3 days"],
        emergency: ["Very high fever (above 105°F/40.6°C)", "Seizures", "Difficulty breathing", "Confusion"],
      },
      triageLevel: {
        low: "Monitor and self-care",
        medium: "Schedule a doctor's appointment",
        high: "Seek medical attention soon",
        emergency: "Seek emergency care immediately",
      },
      selfCare: [
        "Rest and stay hydrated",
        "Take acetaminophen or ibuprofen",
        "Use a cool compress",
        "Monitor temperature regularly",
        "Stay home to avoid spreading infection",
      ],
    },
    cough: {
      commonCauses: [
        "Viral infection",
        "Allergies",
        "Asthma",
        "Acid reflux",
        "Post-nasal drip",
        "Smoking",
      ],
      severityIndicators: {
        low: ["Occasional cough", "No other symptoms", "Improves with self-care"],
        medium: ["Frequent cough", "Mild chest discomfort", "Persists for 1-2 weeks"],
        high: ["Severe coughing fits", "Chest pain", "Difficulty breathing", "Coughing up blood"],
        emergency: ["Severe difficulty breathing", "Blue lips or face", "Coughing up blood", "Loss of consciousness"],
      },
      triageLevel: {
        low: "Self-care recommended",
        medium: "Schedule a doctor's appointment",
        high: "Seek medical attention soon",
        emergency: "Seek emergency care immediately",
      },
      selfCare: [
        "Stay hydrated",
        "Use honey for soothing (adults only)",
        "Use a humidifier",
        "Try over-the-counter cough medicine",
        "Avoid irritants like smoke",
      ],
    },
    stomachPain: {
      commonCauses: [
        "Indigestion",
        "Gas",
        "Food poisoning",
        "Viral gastroenteritis",
        "Irritable bowel syndrome",
        "Appendicitis",
      ],
      severityIndicators: {
        low: ["Mild discomfort", "Occasional occurrence", "Improves with self-care"],
        medium: ["Moderate pain", "Daily occurrence", "Accompanied by mild symptoms"],
        high: ["Severe pain", "Nausea and vomiting", "Diarrhea", "Fever"],
        emergency: ["Sudden severe pain", "Rigid abdomen", "Blood in stool", "Difficulty breathing"],
      },
      triageLevel: {
        low: "Self-care recommended",
        medium: "Schedule a doctor's appointment",
        high: "Seek medical attention soon",
        emergency: "Seek emergency care immediately",
      },
      selfCare: [
        "Rest and stay hydrated",
        "Eat bland foods",
        "Avoid dairy, caffeine, and alcohol",
        "Use a heating pad",
        "Take over-the-counter antacids",
      ],
    },
    backPain: {
      commonCauses: [
        "Muscle strain",
        "Poor posture",
        "Herniated disc",
        "Arthritis",
        "Osteoporosis",
        "Kidney problems",
      ],
      severityIndicators: {
        low: ["Mild pain", "Occasional occurrence", "Improves with rest"],
        medium: ["Moderate pain", "Daily occurrence", "Limited mobility"],
        high: ["Severe pain", "Radiating pain", "Numbness or tingling", "Weakness"],
        emergency: ["Sudden severe pain", "Loss of bladder/bowel control", "Trauma", "Fever with pain"],
      },
      triageLevel: {
        low: "Self-care recommended",
        medium: "Schedule a doctor's appointment",
        high: "Seek medical attention soon",
        emergency: "Seek emergency care immediately",
      },
      selfCare: [
        "Rest and avoid heavy lifting",
        "Apply ice or heat",
        "Take over-the-counter pain relievers",
        "Practice good posture",
        "Do gentle stretching exercises",
      ],
    },
  },
  medications: {
    lisinopril: {
      uses: "Treatment of high blood pressure and heart failure",
      sideEffects: ["Dizziness", "Dry cough", "Fatigue", "Headache", "Nausea"],
      interactions: ["Potassium supplements", "Salt substitutes", "NSAIDs", "Lithium"],
      dosing: "Typically 10mg once daily, may be adjusted based on response",
      storage: "Store at room temperature away from moisture and heat",
    },
    metformin: {
      uses: "Treatment of type 2 diabetes",
      sideEffects: ["Nausea", "Diarrhea", "Stomach upset", "Metallic taste", "Lactic acidosis (rare)"],
      interactions: ["Contrast dyes", "Alcohol", "Certain diabetes medications", "Diuretics"],
      dosing: "Typically 500mg twice daily, may be increased gradually",
      storage: "Store at room temperature away from moisture and heat",
    },
    atorvastatin: {
      uses: "Lowering cholesterol and reducing risk of heart disease",
      sideEffects: ["Muscle pain", "Joint pain", "Digestive problems", "Liver problems", "Memory problems"],
      interactions: ["Grapefruit juice", "Certain antibiotics", "Antifungal medications", "HIV medications"],
      dosing: "Typically 10-20mg once daily, may be adjusted based on response",
      storage: "Store at room temperature away from moisture and heat",
    },
    amoxicillin: {
      uses: "Treatment of bacterial infections",
      sideEffects: ["Diarrhea", "Nausea", "Rash", "Yeast infection", "Allergic reactions"],
      interactions: ["Allopurinol", "Warfarin", "Probenecid", "Other antibiotics"],
      dosing: "Typically 250-500mg three times daily, may vary based on infection",
      storage: "Store at room temperature away from moisture and heat",
    },
    omeprazole: {
      uses: "Treatment of acid reflux, ulcers, and GERD",
      sideEffects: ["Headache", "Diarrhea", "Stomach pain", "Nausea", "Vitamin B12 deficiency (long-term)"],
      interactions: ["Clopidogrel", "Iron supplements", "Antifungal medications", "HIV medications"],
      dosing: "Typically 20mg once daily, may be adjusted based on condition",
      storage: "Store at room temperature away from moisture and heat",
    },
  },
  conditions: {
    diabetes: {
      description: "A chronic condition that affects how your body turns food into energy",
      types: ["Type 1", "Type 2", "Gestational", "Prediabetes"],
      symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Fatigue", "Blurred vision"],
      management: ["Blood sugar monitoring", "Healthy eating", "Regular physical activity", "Medication adherence", "Foot care"],
      complications: ["Heart disease", "Kidney damage", "Eye damage", "Nerve damage", "Foot problems"],
    },
    hypertension: {
      description: "High blood pressure that can lead to serious health problems if left untreated",
      symptoms: ["Often no symptoms", "Headaches", "Shortness of breath", "Nosebleeds", "Dizziness"],
      management: ["Lifestyle changes", "Medication adherence", "Regular monitoring", "Stress reduction", "Limiting sodium"],
      complications: ["Heart attack", "Stroke", "Kidney problems", "Eye problems", "Sexual dysfunction"],
    },
    asthma: {
      description: "A condition in which airways narrow and swell and produce extra mucus",
      symptoms: ["Shortness of breath", "Chest tightness", "Wheezing", "Coughing", "Difficulty sleeping"],
      triggers: ["Allergens", "Exercise", "Respiratory infections", "Air pollutants", "Weather changes"],
      management: ["Avoid triggers", "Use inhalers as prescribed", "Monitor symptoms", "Create an action plan", "Regular check-ups"],
      emergencySigns: ["Severe shortness of breath", "No improvement with rescue inhaler", "Blue lips or face", "Rapid breathing", "Chest pain"],
    },
    depression: {
      description: "A mood disorder that causes persistent feelings of sadness and loss of interest",
      symptoms: ["Persistent sadness", "Loss of interest in activities", "Changes in sleep or appetite", "Fatigue", "Feelings of worthlessness", "Difficulty concentrating"],
      types: ["Major depressive disorder", "Persistent depressive disorder", "Seasonal affective disorder", "Postpartum depression"],
      management: ["Psychotherapy", "Medication", "Lifestyle changes", "Support groups", "Regular exercise"],
      emergencySigns: ["Thoughts of death or suicide", "Self-harm", "Extreme agitation", "Psychosis", "Inability to care for oneself"],
    },
  },
  generalHealth: {
    nutrition: {
      balancedDiet: ["Fruits and vegetables", "Whole grains", "Lean proteins", "Healthy fats", "Limited processed foods"],
      hydration: "Aim for 8-10 glasses of water daily, more in hot weather or during exercise",
      vitamins: {
        vitaminD: "Important for bone health and immune function, found in sunlight and fatty fish",
        vitaminC: "Supports immune system and skin health, found in citrus fruits and vegetables",
        vitaminB12: "Essential for nerve function and blood formation, found in animal products",
        iron: "Necessary for blood health, found in red meat, beans, and fortified cereals",
      },
    },
    exercise: {
      benefits: ["Improved cardiovascular health", "Weight management", "Stronger muscles and bones", "Better mental health", "Increased energy"],
      recommendations: "150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, plus muscle-strengthening activities",
      types: ["Cardiovascular exercise", "Strength training", "Flexibility exercises", "Balance training", "High-intensity interval training"],
      precautions: ["Start slowly and gradually increase intensity", "Stay hydrated", "Use proper form", "Listen to your body", "Consult a healthcare provider if you have health concerns"],
    },
    sleep: {
      importance: "Essential for physical and mental health, immune function, and cognitive performance",
      recommendations: "7-9 hours of sleep per night for adults",
      tips: ["Maintain a consistent sleep schedule", "Create a relaxing bedtime routine", "Keep your bedroom cool and dark", "Limit screen time before bed", "Avoid caffeine and large meals close to bedtime"],
      commonProblems: ["Insomnia", "Sleep apnea", "Restless legs syndrome", "Narcolepsy", "Circadian rhythm disorders"],
    },
    mentalHealth: {
      importance: "Essential for overall well-being and quality of life",
      strategies: ["Regular exercise", "Healthy diet", "Adequate sleep", "Stress management", "Social connections", "Professional support when needed"],
      commonConditions: ["Anxiety", "Depression", "Stress", "PTSD", "ADHD", "Bipolar disorder"],
      resources: ["Mental health professionals", "Support groups", "Helplines", "Online resources", "Community programs"],
    },
  },
};

// Function to determine severity based on symptoms
function determineSeverity(symptom: string, description: string): "low" | "medium" | "high" | "emergency" {
  const symptomData = healthcareKnowledge.symptoms[symptom as keyof typeof healthcareKnowledge.symptoms];
  if (!symptomData) return "low";

  const lowerDesc = description.toLowerCase();
  
  // Check for emergency indicators
  if (symptomData.severityIndicators.emergency.some(indicator => 
    lowerDesc.includes(indicator.toLowerCase()))) {
    return "emergency";
  }
  
  // Check for high severity indicators
  if (symptomData.severityIndicators.high.some(indicator => 
    lowerDesc.includes(indicator.toLowerCase()))) {
    return "high";
  }
  
  // Check for medium severity indicators
  if (symptomData.severityIndicators.medium.some(indicator => 
    lowerDesc.includes(indicator.toLowerCase()))) {
    return "medium";
  }
  
  // Default to low severity
  return "low";
}

// Function to generate follow-up questions based on symptom
function generateFollowUpQuestions(symptom: string): string[] {
  const symptomData = healthcareKnowledge.symptoms[symptom as keyof typeof healthcareKnowledge.symptoms];
  if (!symptomData) return [];

  return [
    `How long have you been experiencing ${symptom}?`,
    `How would you rate the pain or discomfort on a scale of 1-10?`,
    `Are you experiencing any other symptoms along with ${symptom}?`,
    `Have you noticed any triggers that make your ${symptom} worse?`,
    `Have you tried any treatments or medications for your ${symptom}?`,
  ];
}

// Function to generate medical advice based on symptom and severity
function generateMedicalAdvice(symptom: string, severity: "low" | "medium" | "high" | "emergency"): string {
  const symptomData = healthcareKnowledge.symptoms[symptom as keyof typeof healthcareKnowledge.symptoms];
  if (!symptomData) return "Please consult with a healthcare provider for personalized advice.";

  const triageLevel = symptomData.triageLevel[severity];
  const selfCare = symptomData.selfCare.join(", ");
  
  return `${triageLevel}. ${selfCare}.`;
}

// Function to check if a message is healthcare-related
function isHealthcareRelated(text: string): boolean {
  const healthcareKeywords = [
    "health", "medical", "doctor", "symptom", "pain", "fever", "cough", "headache", 
    "stomach", "back", "appointment", "medication", "prescription", "pharmacy", 
    "emergency", "hospital", "clinic", "treatment", "diagnosis", "condition", 
    "disease", "infection", "virus", "bacteria", "allergy", "asthma", "diabetes", 
    "hypertension", "blood pressure", "cholesterol", "heart", "lung", "kidney", 
    "liver", "brain", "mental", "depression", "anxiety", "stress", "sleep", 
    "diet", "nutrition", "exercise", "fitness", "weight", "obesity", "cancer", 
    "covid", "vaccine", "immunization", "insurance", "healthcare", "wellness", 
    "wellbeing", "therapy", "counseling", "psychiatry", "psychology", "rehabilitation"
  ];
  
  const lowerText = text.toLowerCase();
  return healthcareKeywords.some(keyword => lowerText.includes(keyword));
}

// Main function to generate AI response
export async function generateResponse(text: string, context: UserContext): Promise<AIResponse> {
  try {
    // Check if the message is healthcare-related
    if (!isHealthcareRelated(text)) {
      return {
        response_text: "I'm designed to assist with healthcare-related questions only. Please ask me about health, symptoms, medications, or medical appointments.",
        suggestions: ["Check my symptoms", "Schedule an appointment", "Medication information", "Find healthcare services"],
        intent: "non_healthcare",
      };
    }

    const lowerText = text.toLowerCase();
    
    // Handle login/sign in requests
    if (lowerText.includes("login") || lowerText.includes("sign in")) {
      return {
        response_text: "I'll help you log in. Please provide your username and password.",
        intent: "login",
        action: "request_credentials",
      };
    }
    
    // Handle appointment requests
    if (lowerText.includes("appointment") || lowerText.includes("schedule") || lowerText.includes("book")) {
      if (!context.authenticated) {
        return {
          response_text: "To schedule an appointment, you'll need to log in first. Would you like to log in now?",
          suggestions: ["Yes, log me in", "No, I'll do it later"],
          intent: "appointment",
          action: "require_login",
        };
      }
      
      return {
        response_text: "I can help you schedule an appointment. What type of appointment would you like to schedule?",
        suggestions: ["General checkup", "Specialist consultation", "Follow-up appointment", "Emergency visit"],
        intent: "appointment",
        action: "schedule_appointment",
      };
    }
    
    // Handle medication requests
    if (lowerText.includes("medication") || lowerText.includes("pill") || lowerText.includes("drug") || lowerText.includes("prescription")) {
      if (!context.authenticated) {
        return {
          response_text: "To access your medication information, you'll need to log in first. Would you like to log in now?",
          suggestions: ["Yes, log me in", "No, I'll do it later"],
          intent: "medication",
          action: "require_login",
        };
      }
      
      // Check if user is asking about a specific medication
      for (const [medName, medInfo] of Object.entries(healthcareKnowledge.medications)) {
        if (lowerText.includes(medName.toLowerCase())) {
          return {
            response_text: `${medName} is used for ${medInfo.uses}. Common side effects include ${medInfo.sideEffects.join(", ")}. Would you like more specific information about this medication?`,
            suggestions: ["Side effects", "Interactions", "Dosing", "Storage"],
            intent: "medication_info",
            action: "provide_medication_info",
          };
        }
      }
      
      return {
        response_text: "I can help you with your medications. What would you like to know?",
        suggestions: ["View my medications", "Medication reminders", "Side effects", "Interactions"],
        intent: "medication",
        action: "medication_management",
      };
    }
    
    // Handle symptom assessment
    for (const [symptom, symptomData] of Object.entries(healthcareKnowledge.symptoms)) {
      if (lowerText.includes(symptom.toLowerCase())) {
        const severity = determineSeverity(symptom, text);
        const followUpQuestions = generateFollowUpQuestions(symptom);
        const medicalAdvice = generateMedicalAdvice(symptom, severity);
        
        return {
          response_text: `Based on your description of ${symptom}, I recommend ${medicalAdvice} Would you like to know more about common causes or when to seek emergency care?`,
          suggestions: ["Common causes", "When to seek emergency care", "Self-care tips", "Schedule an appointment"],
          intent: "symptom_assessment",
          severity,
          followUpQuestions,
          medicalAdvice,
          disclaimer: "This is general information only and not a substitute for professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.",
        };
      }
    }
    
    // Handle condition information requests
    for (const [condition, conditionData] of Object.entries(healthcareKnowledge.conditions)) {
      if (lowerText.includes(condition.toLowerCase())) {
        return {
          response_text: `${condition} is ${conditionData.description}. Common symptoms include ${conditionData.symptoms.join(", ")}. Would you like more information about management or complications?`,
          suggestions: ["Management strategies", "Complications", "Symptoms", "Treatment options"],
          intent: "condition_info",
          action: "provide_condition_info",
        };
      }
    }
    
    // Handle general health questions
    if (lowerText.includes("nutrition") || lowerText.includes("diet") || lowerText.includes("food") || lowerText.includes("eat")) {
      return {
        response_text: "A balanced diet includes fruits and vegetables, whole grains, lean proteins, and healthy fats. Would you like specific nutrition advice?",
        suggestions: ["Balanced diet tips", "Hydration", "Vitamins and minerals", "Special diets"],
        intent: "nutrition",
        action: "provide_nutrition_info",
      };
    }
    
    if (lowerText.includes("exercise") || lowerText.includes("workout") || lowerText.includes("fitness") || lowerText.includes("physical activity")) {
      return {
        response_text: "Regular exercise has many benefits including improved cardiovascular health, weight management, and better mental health. The recommendation is 150 minutes of moderate activity per week. Would you like specific exercise advice?",
        suggestions: ["Exercise types", "Getting started", "Exercise precautions", "Exercise benefits"],
        intent: "exercise",
        action: "provide_exercise_info",
      };
    }
    
    if (lowerText.includes("sleep") || lowerText.includes("insomnia") || lowerText.includes("rest")) {
      return {
        response_text: "Good sleep is essential for health. Most adults need 7-9 hours of sleep per night. Would you like tips for better sleep?",
        suggestions: ["Sleep tips", "Sleep problems", "Sleep hygiene", "Sleep disorders"],
        intent: "sleep",
        action: "provide_sleep_info",
      };
    }
    
    if (lowerText.includes("mental") || lowerText.includes("anxiety") || lowerText.includes("depression") || lowerText.includes("stress")) {
      return {
        response_text: "Mental health is as important as physical health. Strategies include regular exercise, healthy diet, adequate sleep, and stress management. Would you like more information about mental health?",
        suggestions: ["Mental health strategies", "Common conditions", "Resources", "When to seek help"],
        intent: "mental_health",
        action: "provide_mental_health_info",
      };
    }
    
    // Handle human support requests
    if (lowerText.includes("human") || lowerText.includes("person") || lowerText.includes("talk to someone") || lowerText.includes("representative")) {
      return {
        response_text: "I'll connect you with a healthcare representative who can provide more personalized assistance. Please wait a moment.",
        intent: "human_support",
        action: "transfer_to_human",
      };
    }
    
    // Default response for healthcare-related queries that don't match specific patterns
    return {
      response_text: "I understand you have a healthcare-related question. Could you please provide more details so I can better assist you?",
      suggestions: ["Check my symptoms", "Schedule an appointment", "Medication information", "Find healthcare services"],
      intent: "general_healthcare",
    };
  } catch (error) {
    console.error('Error in generateResponse:', error);
    return {
      response_text: "I'm sorry, but I'm currently experiencing technical difficulties. Please try again later or contact support.",
      suggestions: ["Contact support", "Try again later"],
      intent: "error",
    };
  }
}

