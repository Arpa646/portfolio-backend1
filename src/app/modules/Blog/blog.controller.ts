// controllers/BlogController.ts
import { Request, Response } from "express";
import { Blog } from "./blog.interface"; // Import the blog interface
import BlogModel from "./blog.model"; // Assuming this is a Mongoose model or similar

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  const { title, blogContent, image, author } = req.body;

  try {
    const newBlog: Blog = {
      title,
      blogContent,
      image,
      author,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save blog post in the database (using MongoDB as an example)
    const blog = new BlogModel(newBlog);
    await blog.save();

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

// Get all blog posts
export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error });
  }
};

// Get a blog post by ID
export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog", error });
  }
};

// Update a blog post
export const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, blogContent, image } = req.body;

  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      { title, blogContent, image, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

// Delete a blog post
export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};
