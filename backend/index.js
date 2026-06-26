import express from 'express'
import dotenv from "dotenv"
import connectDB from "./libs/db.js"
import AuthRoutes from './routes/Auth.routes.js'
import cors from "cors";

dotenv.config()

connectDB()
const PORT=process.env.PORT || 8000
const app=express()
app.use(cors());
app.use(express.json())
app.use('/auth',AuthRoutes)

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})