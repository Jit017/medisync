import mongoose, { type Document, Schema } from "mongoose"

export interface IReport extends Document {
  submittedBy: mongoose.Types.ObjectId
  facilityName: string
  facilityType: "hospital" | "urgent-care" | "pharmacy" | "other"
  reportType: "complaint" | "feedback" | "suggestion" | "incident"
  title: string
  description: string
  date: Date
  location?: string
  status: "submitted" | "under-review" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "critical"
  attachments?: string[]
  assignedTo?: mongoose.Types.ObjectId
  resolution?: string
  createdAt: Date
  updatedAt: Date
}

const ReportSchema = new Schema<IReport>(
  {
    submittedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    facilityName: {
      type: String,
      required: [true, "Facility name is required"],
    },
    facilityType: {
      type: String,
      enum: ["hospital", "urgent-care", "pharmacy", "other"],
      required: [true, "Facility type is required"],
    },
    reportType: {
      type: String,
      enum: ["complaint", "feedback", "suggestion", "incident"],
      required: [true, "Report type is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      enum: ["submitted", "under-review", "resolved", "closed"],
      default: "submitted",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },
    attachments: {
      type: [String],
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    resolution: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model<IReport>("Report", ReportSchema)

