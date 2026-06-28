import { SendVerificationCode } from "../middleware/Email.js"
import Usermodel from "../models/User.js"
import bcryptjs from 'bcryptjs'

export const register = async(req,res)=>{
    try{
        const{email,password,name,role }=req.body
        if(!email || !password || !name || !role ){
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

  // resend OTP logic
}
        const hashpassword=await bcryptjs.hashSync(password,10)
        const user = new Usermodel({
             email,
             password: hashpassword,
             name,
             role,
             
            });

          await user.save();
    //     const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    //     const user = new Usermodel({
    //         email,
    //         password:hashpassword,
    //         name,
    //         role,
    //         verificationCode
    //     })
    //     await user.save()
    //    await SendVerificationCode(user.email,verificationCode)
        return res.status(201).json({
    success: true,
    message: "Account created successfully",
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
      message: "OTP Sent Successfully",
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

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
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