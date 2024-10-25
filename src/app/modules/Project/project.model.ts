import mongoose, { Schema, Document } from "mongoose";
import { IProject } from "./project.interface";

// Define Mongoose document extending the interface
interface IProjectDocument extends IProject, Document {}

// Create the schema for Project
const ProjectSchema: Schema<IProjectDocument> = new mongoose.Schema({
  title: { type: String, required: true },

  image: { type: String, required: true },
  link: { type: String, required: true },

});

// Create the Project model
const Project = mongoose.model<IProjectDocument>("Project", ProjectSchema);

export default Project;
