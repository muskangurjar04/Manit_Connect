import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./libs/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import PlacementRoutes from "./routes/Placement.routes.js";
import cors from "cors";

connectDB();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/placement", PlacementRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});