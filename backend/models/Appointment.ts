import mongoose, { type Document, Schema } from "mongoose"

export interface IAppointment extends Document {
  patient: mongoose.Types.ObjectId
  doctor: mongoose.Types.ObjectId
  date: Date
  startTime: string
  endTime: string
  type: "in-person" | "virtual"
  status: "scheduled" | "confirmed" | "completed" | "cancelled" | "no-show"
  reason: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const AppointmentSchema = new Schema<IAppointment>(
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
    date: {
      type: Date,
      required: [true, "Appointment date is required"],
    },
    startTime: {
      type: String,
      required: [true, "Start time is required"],
    },
    endTime: {
      type: String,
      required: [true, "End time is required"],
    },
    type: {
      type: String,
      enum: ["in-person", "virtual"],
      default: "in-person",
    },
    status: {
      type: String,
      enum: ["scheduled", "confirmed", "completed", "cancelled", "no-show"],
      default: "scheduled",
    },
    reason: {
      type: String,
      required: [true, "Reason for appointment is required"],
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<IAppointment>("Appointment", AppointmentSchema)

