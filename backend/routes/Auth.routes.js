// console.log("Auth Routes Loaded");
import express from 'express'
import  { register,login } from '../controllers/Auth.js'
const AuthRoutes = express.Router()

AuthRoutes.post('/register',register)
// AuthRoutes.post("/sendotp",SendOTP);
// AuthRoutes.post("/verifyemail",VerifyEmail)
AuthRoutes.post("/login", login);
export default AuthRoutes