import express from "express";
import { addProject,getProject } from "./project.controller";


const router = express.Router();

router.post("/", addProject);
router.get("/", getProject);

export const ProjectRoutes = router;
