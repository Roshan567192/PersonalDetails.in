import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date, required: true },
  timeOfBirth: {
    hour: { type: Number },
    minute: { type: Number },
  },
  height: { type: String },
  weight: { type: String },
  nationality: { type: String },
  country: { type: String },
  astrologicalSign: { type: String }
}, { timestamps: true });

export default mongoose.model("PersonalDetails", personalDetailsSchema);
