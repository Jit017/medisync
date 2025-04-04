export interface Appointment {
  date: string;
  time: string;
  provider: string;
  type: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  refillDate: string;
}

export interface UserData {
  name: string;
  patientId: string;
  appointments: Appointment[];
  medications: Medication[];
  medicalHistory: Record<string, any>;
  insuranceInfo: Record<string, any>;
}

export interface Message {
  text: string;
  sender: "user" | "bot";
  options?: string[];
  key?: string;
}

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

export interface UserContext {
  authenticated: boolean;
  userData: UserData;
} 