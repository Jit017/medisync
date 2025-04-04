import mongoose, { type Document, Schema } from "mongoose"

export interface IEmergencyFacility extends Document {
  name: string
  type: "hospital" | "urgent-care" | "pharmacy" | "blood-bank" | "oxygen-supplier"
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  location: {
    type: string
    coordinates: [number, number] // [longitude, latitude]
  }
  phone: string
  email?: string
  website?: string
  operatingHours: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  services: string[]
  isOpen24Hours: boolean
  hasEmergencyRoom: boolean
  acceptsInsurance: boolean
  insuranceNetworks?: string[]
  rating?: number
  createdAt: Date
  updatedAt: Date
}

const EmergencyFacilitySchema = new Schema<IEmergencyFacility>(
  {
    name: {
      type: String,
      required: [true, "Facility name is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["hospital", "urgent-care", "pharmacy", "blood-bank", "oxygen-supplier"],
      required: [true, "Facility type is required"],
    },
    address: {
      street: {
        type: String,
        required: [true, "Street address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
      },
      zipCode: {
        type: String,
        required: [true, "Zip code is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
        default: "USA",
      },
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: [true, "Coordinates are required"],
      },
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    operatingHours: {
      monday: String,
      tuesday: String,
      wednesday: String,
      thursday: String,
      friday: String,
      saturday: String,
      sunday: String,
    },
    services: {
      type: [String],
      required: [true, "Services are required"],
    },
    isOpen24Hours: {
      type: Boolean,
      default: false,
    },
    hasEmergencyRoom: {
      type: Boolean,
      default: false,
    },
    acceptsInsurance: {
      type: Boolean,
      default: true,
    },
    insuranceNetworks: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
)

// Create geospatial index for location-based queries
EmergencyFacilitySchema.index({ location: "2dsphere" })

export default mongoose.model<IEmergencyFacility>("EmergencyFacility", EmergencyFacilitySchema)

