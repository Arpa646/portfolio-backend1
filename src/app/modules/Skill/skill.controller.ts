import { Request, Response } from "express";
import Skill from "./skill.model"; // Assuming you have a Skill schema/model

// Add a new skill
export const addSkill = async (req: Request, res: Response) => {
  try {
    const {  iconUrl } = req.body;

    // Create the new skill object
    const newSkill = new Skill({
    
      iconUrl,
    });

    // Save the skill to the database
    const savedSkill = await newSkill.save();

    res.status(201).json({
      message: "Skill added successfully",
      skill: savedSkill,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({
      message: "Failed to add experience",
      error: errorMessage
    });
  }
  
};

// Get all skills
export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({
      message: "Failed to add experience",
      error: errorMessage
    });
  }
  
};
