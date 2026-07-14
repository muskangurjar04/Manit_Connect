import mongoose from "mongoose";

const followUpSchema = new mongoose.Schema(
  {
    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    hrName: {
      type: String,
      required: true,
      trim: true,
    },

    interactionType: {
      type: String,
      enum: [
        "Phone Call",
        "Email",
        "LinkedIn",
        "WhatsApp",
        "Meeting",
      ],
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Initial Contact Made",
        "Waiting for Reply",
        "Interested",
        "Not Interested",
        "Interview Scheduled",
        "Placement Confirmed",
      ],
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },

    nextFollowUp: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FollowUp = mongoose.model("FollowUp", followUpSchema);

export default FollowUp;