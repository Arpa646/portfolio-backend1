import { Request, Response } from "express";
import Project from "./project.model"; // Assuming you have a Project schema/model

// Add a new project
export const addProject = async (req: Request, res: Response) => {
  try {
    const { title, description, image, link } = req.body;



    // Create the new project object
    const newProject = new Project({
      title,

      image,
      link,

    });

    // Save the project to the database
    const savedProject = await newProject.save();

    res.status(201).json({
      message: "Project added successfully",
      project: savedProject
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({
      message: "Failed to add experience",
      error: errorMessage
    });
  }
  
};
export const getProject = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find() // Populate user info if needed
        res.status(200).json(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects." });
      }
};
