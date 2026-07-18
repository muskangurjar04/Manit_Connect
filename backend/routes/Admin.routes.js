import express from "express";
import {
      createFirstAdmin,
      createUser,
  getDashboard,
  getUsers,
  updateUser,
  deleteUser,} from "../controllers/Admin.controller.js";

import authMiddleware from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js";

const router = express.Router();
router.post("/create-first-admin", createFirstAdmin);
// All Admin routes are protected
router.use(authMiddleware);
router.use(isAdmin);

// Dashboard
router.get("/dashboard", getDashboard);

// User Management
router.get("/users", getUsers);

router.post("/create-user", createUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;