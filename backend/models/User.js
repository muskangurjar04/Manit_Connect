import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
 
    role: {
      type: String,
      enum: ["Student", "TPO Volunteer","TPO Faculty"],
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationCode: String,

verificationCodeExpires: Date,

otpAttempts: {
  type: Number,
  default: 0,
},
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("user", userSchema);
export default Usermodel