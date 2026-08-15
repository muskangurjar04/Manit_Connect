import express from "express";
import { createFollowUp ,getDashboardStats,getMyFollowUps,getAllFollowUps ,runFollowUpReminder,} from "../controllers/FollowUpController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import reminderAuth from "../middleware/reminderAuth.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboardStats);

router.post("/", authMiddleware, createFollowUp);

router.get("/my", authMiddleware, getMyFollowUps);

router.get("/all", authMiddleware, getAllFollowUps);

router.get("/run-reminder", reminderAuth, runFollowUpReminder);

export default router;