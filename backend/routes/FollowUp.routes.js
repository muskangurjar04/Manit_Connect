import express from "express";
import { createFollowUp ,getDashboardStats,getMyFollowUps,getAllFollowUps ,} from "../controllers/FollowUpController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboardStats);

router.post("/", authMiddleware, createFollowUp);

router.get("/my", authMiddleware, getMyFollowUps);

router.get("/all", authMiddleware, getAllFollowUps);

export default router;