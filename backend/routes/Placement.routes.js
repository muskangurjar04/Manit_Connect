import express from "express";

import upload from "../middleware/upload.js";

import { submitPlacement } from "../controllers/Placement.controller.js";

const router = express.Router();

router.post(
  "/submit",
  upload.single("offerLetter"),
  submitPlacement
);

export default router;