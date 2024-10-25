import { Request, Response } from "express";
import Experience from "./experience.model"; // Assuming you have an Experience schema/model

// Add a new experience
export const addExperience = async (req: Request, res: Response) => {
  try {
    const { title, description, company, startDate, endDate, location } = req.body;

    // Assuming req.user contains the authenticated user's ID
  

    // Create the new experience object
    const newExperience = new Experience({
      title,
      description,
      company,
      startDate,
      endDate,
      location,
     
    });

    // Save the experience to the database
    const savedExperience = await newExperience.save();

    res.status(201).json({
      message: "Experience added successfully",
      experience: savedExperience
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add experience",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
  
};
