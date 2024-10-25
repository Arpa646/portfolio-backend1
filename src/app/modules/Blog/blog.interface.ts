// models/Blog.ts
export interface Blog {
  title: string;
  blogContent: string;
  image: string;
  author: string; // To store the blog author (optional)
  createdAt?: Date; // Automatically set on creation
  updatedAt?: Date; // Automatically set on updates
}
