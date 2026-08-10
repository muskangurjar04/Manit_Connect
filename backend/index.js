import dotenv from "dotenv";
dotenv.config();
console.log("INDEX URL:", process.env.SUPABASE_URL);

import express from "express";
import connectDB from "./libs/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import PlacementRoutes from "./routes/Placement.routes.js";
import AdminRoutes from "./routes/Admin.routes.js";
import FollowUpRoutes from "./routes/FollowUp.routes.js";
import cors from "cors";
import "./jobs/followUpReminder.js";

connectDB();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/placement", PlacementRoutes);
app.use("/admin", AdminRoutes);
app.use("/followup", FollowUpRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});