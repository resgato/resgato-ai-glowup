
import { mockBlogPosts, BlogPost } from "@/types/blog";
import { supabase } from "@/integrations/supabase/client";

// Create a namespace for type safety
export const blogService = {
  // Get all blog posts
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      // In a production environment, this would fetch from Supabase
      // For now, we're using mock data
      return mockBlogPosts;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  },

  // Get a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const post = mockBlogPosts.find(post => post.slug === slug);
      return post || null;
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      return null;
    }
  },

  // Get a single blog post by id
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      const post = mockBlogPosts.find(post => post.id === id);
      return post || null;
    } catch (error) {
      console.error(`Error fetching blog post with id ${id}:`, error);
      return null;
    }
  },

  // Create a new blog post
  async createPost(post: Omit<BlogPost, "id">): Promise<BlogPost | null> {
    try {
      // In a production environment, this would insert into Supabase
      // For mock purposes, we're just returning the first post
      return {
        ...post,
        id: Math.max(...mockBlogPosts.map(p => p.id)) + 1
      };
    } catch (error) {
      console.error("Error creating blog post:", error);
      return null;
    }
  },

  // Update an existing blog post
  async updatePost(id: number, post: Partial<BlogPost>): Promise<BlogPost | null> {
    try {
      // In a production environment, this would update in Supabase
      // For mock purposes, we're just returning the first post
      const existingPost = mockBlogPosts.find(p => p.id === id);
      if (!existingPost) return null;
      
      return {
        ...existingPost,
        ...post
      };
    } catch (error) {
      console.error(`Error updating blog post with id ${id}:`, error);
      return null;
    }
  },

  // Delete a blog post
  async deletePost(id: number): Promise<boolean> {
    try {
      // In a production environment, this would delete from Supabase
      return true;
    } catch (error) {
      console.error(`Error deleting blog post with id ${id}:`, error);
      return false;
    }
  }
};
