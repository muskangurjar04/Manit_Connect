import express from 'express'
import  { register,login ,SendOTP,
  VerifyEmail,} from '../controllers/Auth.js'

import authMiddleware from "../middleware/authMiddleware.js";

const AuthRoutes = express.Router()

AuthRoutes.post('/register',register)
AuthRoutes.post("/sendotp",SendOTP);
AuthRoutes.post("/verifyemail",VerifyEmail)
AuthRoutes.post("/login", login);

AuthRoutes.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default AuthRoutes;