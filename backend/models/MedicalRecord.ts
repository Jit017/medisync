import mongoose, { type Document, Schema } from "mongoose"

export interface IMedicalRecord extends Document {
  patient: mongoose.Types.ObjectId
  doctor: mongoose.Types.ObjectId
  recordType: "lab-result" | "prescription" | "diagnosis" | "imaging" | "vaccination" | "other"
  title: string
  date: Date
  description: string
  attachments?: string[]
  isPrivate: boolean
  createdAt: Date
  updatedAt: Date
}

const MedicalRecordSchema = new Schema<IMedicalRecord>(
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
    recordType: {
      type: String,
      enum: ["lab-result", "prescription", "diagnosis", "imaging", "vaccination", "other"],
      required: [true, "Record type is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    attachments: {
      type: [String],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<IMedicalRecord>("MedicalRecord", MedicalRecordSchema)

