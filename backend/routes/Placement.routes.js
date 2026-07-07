import express from "express";
import {
  submitPlacement,
  createPlacement,
  getPendingPlacements,
  verifyPlacement,
  rejectPlacement,
} from "../controllers/Placement.js";

import { getAllPlacements } from "../controllers/AllController.js";
import { getFacultyAnalytics } from "../controllers/FacultyController.js";

import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { isStudent } from "../middleware/roleMiddleware.js";

const PlacementRoutes = express.Router();

// Student submits placement
PlacementRoutes.post(
  "/submit",
  authMiddleware,
  isStudent,
  upload.single("offerLetter"),
  submitPlacement
);

// Volunteer
PlacementRoutes.post("/create", createPlacement);
PlacementRoutes.get("/pending", getPendingPlacements);

// Faculty
PlacementRoutes.put("/verify/:id", verifyPlacement);
PlacementRoutes.put("/reject/:id", rejectPlacement);
PlacementRoutes.get("/all", getAllPlacements);
PlacementRoutes.get("/faculty", getFacultyAnalytics);

export default PlacementRoutes;