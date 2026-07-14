import express from "express";
import { createFollowUp } from "../controllers/FollowUpController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Follow-up
router.post("/",  createFollowUp);

export default router;