import { SendVerificationCode } from "../middleware/Email.js"
import Usermodel from "../models/User.js"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    try{
        const{email,name,password,enrollmentNo,
      branch, }=req.body
        if(!name || !email ||  !password ||!enrollmentNo || !branch){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
  const existingUser = await Usermodel.findOne({ email });

if (existingUser) {
  if (existingUser.isVerified) {
    return res.status(400).json({
      success: false,
      message: "Email already registered. Please Login."
    });
  }
  return res.status(400).json({
    success: false,
    message:
      "OTP already sent. Please verify your email.",
  });

  // resend OTP logic
}
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const hashedPassword = await bcryptjs.hash(password, 10);
      const user = new Usermodel({
             email,
             name,
             password: hashedPassword,
             enrollmentNo,
             branch,
             role:"Student",
             verificationCode: otp,
             verificationCodeExpires: Date.now() + 10 * 60 * 1000,
            });

          await user.save();
          await SendVerificationCode(email, otp);
        return res.status(201).json({
    success: true,
    message: "Student Registered successfully",
    email: user.email
});
    }catch(error){
        console.log(error)
        
        return res.status(500).json({success:false,message:"internal server error"})

    }
}

export const SendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.verificationCode = otp;

    user.verificationCodeExpires =
      Date.now() + 10 * 60 * 1000;

    user.otpAttempts = 0;

    await user.save();

    await SendVerificationCode(
      email,
      otp
    );

    return res.status(200).json({
      success: true,
      message: "Registration Successful. OTP sent to your email.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const VerifyEmail = async (req,res) => {
  try {
    const { email, code } = req.body;

    const user =
      await Usermodel.findOne({
        email,
      });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.otpAttempts >= 5) {
      return res.status(400).json({
        success: false,
        message:
          "Too many attempts. Request new OTP.",
      });
    }

    if (
      user.verificationCode !== code
    ) {
      user.otpAttempts += 1;

      await user.save();

      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (
      user.verificationCodeExpires <
      Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    user.isVerified = true;

    user.verificationCode =
      undefined;

    user.verificationCodeExpires =
      undefined;

    user.otpAttempts = 0;

    await user.save();

    return res.status(200).json({
    success: true,
    message: "Email Verified Successfully",
    user: {
        name: user.name,
        email: user.email,
        role: user.role,
    }
});
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    // Sirf Student aur Admin password se login karenge
    if (user.role !== "Student" && user.role !== "Admin") {
      return res.status(400).json({
        success: false,
        message: "Please login using OTP",
      });
    }

    const isMatch = await bcryptjs.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

     const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    user.lastLogin = new Date();
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
         id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};