import express from "express";
import { createPlacement, getPendingPlacements, verifyPlacement,rejectPlacement} from "../controllers/Placement.js";
import { getAllPlacements } from "../controllers/AllController.js";
const PlacementRoutes = express.Router();

PlacementRoutes.post("/create", createPlacement);
PlacementRoutes.get("/pending",getPendingPlacements);
PlacementRoutes.put("/verify/:id" , verifyPlacement);
PlacementRoutes.put("/reject/:id" , rejectPlacement);
PlacementRoutes.get("/all", getAllPlacements);
export default PlacementRoutes;