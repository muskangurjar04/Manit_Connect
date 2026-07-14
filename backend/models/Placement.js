import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    enrollmentNo: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    jobRole: {
      type: String,
      required: true,
    },

    package: {
      type: Number,
      required: true,
    },

    placementType: {
      type: String,
      enum: ["Full Time", "6 Month Internship","2 Month Internship","PPO"],
      required: true,
    },

    placementMode: {
       type: String,
       enum: ["On Campus","Off Campus",],
       required: true,
    },
    
    offerLetter: {
      type: String,
      default: "",
    },

    remarks: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },

    rejectionReason: {
      type: String,
      default: "",
    },

    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Placement", placementSchema);