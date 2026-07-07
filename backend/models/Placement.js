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
      required: true,
    },

    joiningDate: {
      type: Date,
    },

    offerLetter: {
      type: String,
    },

    remarks: {
      type: String,
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

const Placement = mongoose.model("Placement", placementSchema);

export default Placement;