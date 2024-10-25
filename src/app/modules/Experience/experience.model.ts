// import mongoose, { Schema, Document } from "mongoose";
// import { IExperience } from "./experience.interface";

// // Define Mongoose document extending the interface
// interface IExperienceDocument extends IExperience, Document {}

// // Create the schema for Experience
// const ExperienceSchema: Schema<IExperienceDocument> = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   company: { type: String, required: true },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date, default: null },
//   location: { type: String, required: true },
 
// });

// // Create the Experience model
// const Experience = mongoose.model<IExperienceDocument>("Experience", ExperienceSchema);

// export default Experience;
import mongoose, { Schema, Document } from "mongoose";

// Define the interface for experience
export interface IExperience {
    title: string;
    description: string;
    company: string;
    startDate: Date;
    endDate: Date | null; // Can be null if the experience is ongoing
    location: string;
    // Assuming each experience is tied to a specific user (foreign key reference)
}

// Extend the interface with Mongoose Document
interface IExperienceDocument extends IExperience, Document {}

// Create the schema for Experience
const ExperienceSchema: Schema<IExperienceDocument> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, default: null },
    location: { type: String, required: true },
});

// Create the Experience model
const Experience = mongoose.model<IExperienceDocument>("Experience", ExperienceSchema);

export default Experience;
