



// routes/BlogRoutes.ts
import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "./blog.controller";

const router = express.Router();

// Define blog routes
router.post("/", createBlog); // Create a new blog
router.get("/", getAllBlogs); // Get all blogs
router.get("/:id", getBlogById); // Get a single blog by ID
router.put("/blogs/:id", updateBlog); // Update a blog
router.delete("/blogs/:id", deleteBlog); // Delete a blog

export const BlogRoutes = router;