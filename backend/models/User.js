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
      default: null ,
    },

    enrollmentNo: {
   type: String,
   default: "",
   },

branch: {
  type: String,
  default: "",
},
 
    role: {
      type: String,
      enum: ["Student", "TPO Volunteer","TPO Faculty","Admin",],
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

lastLogin: {
  type: Date,
  default: null,
},

isActive: {
  type: Boolean,
  default: true,
},
  },
  {
    timestamps: true,
  }
);

const Usermodel = mongoose.model("user", userSchema);
export default Usermodel