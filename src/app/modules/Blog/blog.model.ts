// models/BlogModel.ts
import mongoose, { Schema, Document } from "mongoose";
import { Blog } from "./blog.interface";

// Create the blog schema using the Blog interface
const blogSchema: Schema = new Schema<Blog>({
  title: { type: String, required: true },
  blogContent: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the Mongoose model
const BlogModel = mongoose.model<Blog & Document>("Blog", blogSchema);
export default BlogModel;
