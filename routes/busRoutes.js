import express from "express";
import { getBuses, deleteBus, addBus,getAvailableBuses } from "../controllers/busController.js";const router = express.Router();

router.get("/", getBuses);
router.post("/", addBus);
router.delete("/:id", deleteBus);
router.get("/available", getAvailableBuses);

export default router;
