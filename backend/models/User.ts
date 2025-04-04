import mongoose, { type Document, Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  role: "patient" | "doctor" | "admin"
  dateOfBirth?: Date
  gender?: string
  phone?: string
  address?: {
    street?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  }
  medicalHistory?: {
    conditions?: string[]
    allergies?: string[]
    medications?: string[]
    surgeries?: string[]
  }
  emergencyContact?: {
    name?: string
    relationship?: string
    phone?: string
  }
  profileImage?: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
  generateAuthToken(): string
}

const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    medicalHistory: {
      conditions: [String],
      allergies: [String],
      medications: [String],
      surgeries: [String],
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String,
    },
    profileImage: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error: any) {
    next(error)
  }
})

// Compare password method
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

// Generate JWT token
UserSchema.methods.generateAuthToken = function (): string {
  return jwt.sign({ id: this._id, email: this.email, role: this.role }, process.env.JWT_SECRET || "your_jwt_secret", {
    expiresIn: "7d",
  })
}

export default mongoose.model<IUser>("User", UserSchema)

