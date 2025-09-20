import express from "express";
import { addPersonalDetails, getPersonalDetails } from "../controllers/personalDetailsController.js";

const router = express.Router();

router.post("/", addPersonalDetails);
router.get("/", getPersonalDetails);

export default router;
