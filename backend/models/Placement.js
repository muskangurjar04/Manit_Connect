import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    // studentName: {
    //   type: String,
    //   required: true,
    // },

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
      enum: ["On-Campus", "Off-Campus"],
      required: true,
    },

    joiningDate: {
      type: Date,
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