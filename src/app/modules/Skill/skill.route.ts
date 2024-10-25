// routes/skillRoutes.ts
import express from "express";
import { addSkill, getSkills } from "./skill.controller";

const router = express.Router();

// Add a new skill
router.post("/", addSkill);

// Get all skills
router.get("/", getSkills);


export const SkillRoutes = router;