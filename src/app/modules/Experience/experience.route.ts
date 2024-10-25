import express from "express";
import { addExperience } from "./experience.controller";
// Assuming you have authentication middleware

const router = express.Router();

// Route to add a new experience, protected by authentication middleware
router.post("/", addExperience);

export const ExperienceRoutes = router;
