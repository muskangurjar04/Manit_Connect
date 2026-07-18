import express from 'express'
import  { register,login ,SendOTP,
  VerifyEmail,sendLoginOTP,
  verifyLoginOTP,} from '../controllers/Auth.js'

import authMiddleware from "../middleware/authMiddleware.js";

const AuthRoutes = express.Router()

AuthRoutes.post('/register',register)
AuthRoutes.post("/sendotp",SendOTP);
AuthRoutes.post("/verifyemail",VerifyEmail)
AuthRoutes.post("/login", login);
AuthRoutes.post("/send-login-otp", sendLoginOTP);
AuthRoutes.post("/verify-login", verifyLoginOTP);

AuthRoutes.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default AuthRoutes;