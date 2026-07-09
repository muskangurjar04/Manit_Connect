import express from "express";
import { createAdmin , createFaculty,createVolunteer,} from "../controllers/AdminController.js";

const AdminRoutes = express.Router();

AdminRoutes.post("/create-admin", createAdmin);
AdminRoutes.post("/create-faculty", createFaculty);
AdminRoutes.post("/create-volunteer", createVolunteer);
export default AdminRoutes;