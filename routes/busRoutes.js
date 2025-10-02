import express from "express";
import { getBuses, deleteBus, addBus } from "../controllers/busController.js";const router = express.Router();

router.get("/", getBuses);
router.post("/", addBus);
router.delete("/:id", deleteBus);

export default router;
