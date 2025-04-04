import mongoose, { type Document, Schema } from "mongoose"

export interface IConsultation extends Document {
  patient: mongoose.Types.ObjectId
  doctor: mongoose.Types.ObjectId
  appointment?: mongoose.Types.ObjectId
  startTime: Date
  endTime?: Date
  status: "scheduled" | "in-progress" | "completed" | "cancelled"
  notes?: string
  diagnosis?: string
  prescription?: string[]
  followUpRequired: boolean
  followUpDate?: Date
  createdAt: Date
  updatedAt: Date
}

const ConsultationSchema = new Schema<IConsultation>(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Patient is required"],
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
    },
    appointment: {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
    startTime: {
      type: Date,
      required: [true, "Start time is required"],
    },
    endTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["scheduled", "in-progress", "completed", "cancelled"],
      default: "scheduled",
    },
    notes: {
      type: String,
    },
    diagnosis: {
      type: String,
    },
    prescription: {
      type: [String],
    },
    followUpRequired: {
      type: Boolean,
      default: false,
    },
    followUpDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<IConsultation>("Consultation", ConsultationSchema)

