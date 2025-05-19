
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';

// Mock data as a fallback
const mockPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'digital-marketing-trends-2025',
    title: 'Digital Marketing Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends that will shape digital marketing strategies in 2025 and beyond.',
    cover: '/lovable-uploads/f9a3c237-dff6-4a0d-8cef-79a1946fd9f0.png',
    date: 'May 12, 2025',
    author: 'Taylor Brody',
    readTime: '5 min read',
    category: 'Digital Marketing',
    content: 'As we move further into 2025, digital marketing continues to evolve at a rapid pace. The integration of artificial intelligence and machine learning has transformed how brands connect with consumers.\n\nPersonalization has reached new heights, with algorithms now capable of predicting consumer needs before they even arise. Voice search optimization is no longer optional but essential for visibility.\n\nPrivacy-first marketing approaches have become the standard as consumers grow increasingly conscious of their digital footprint. Brands that successfully navigate these changes while maintaining authentic connections with their audience will lead the pack.\n\nVideo content continues to dominate across platforms, with short-form videos seeing particularly high engagement rates. The metaverse presents exciting new opportunities for brand experiences that blur the line between digital and physical.\n\nAs we navigate these trends, it\'s clear that adaptability remains the most valuable skill for marketers in this dynamic landscape.'
  },
  // ... more mock posts
];

// Get all blog posts - temporarily returning mock data only
export const getAllPosts = async (): Promise<BlogPost[]> => {
  console.log('Using mock blog posts data');
  return mockPosts;
};

// Get a single blog post by slug - temporarily using mock data
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  console.log('Using mock data for blog post by slug:', slug);
  return mockPosts.find(post => post.slug === slug) || null;
};

// Get a single blog post by ID - temporarily using mock data
export const getPostById = async (id: number): Promise<BlogPost | null> => {
  console.log('Using mock data for blog post by ID:', id);
  return mockPosts.find(post => post.id === id) || null;
};

// Create a new blog post - temporarily logging only
export const createPost = async (post: Omit<BlogPost, 'id'>): Promise<BlogPost | null> => {
  console.log('Create post called with:', post);
  console.log('Note: This would normally save to the database, but is using mock data for now');
  
  // Simulate creating a post with a new ID
  const newPost: BlogPost = {
    ...post,
    id: Math.max(...mockPosts.map(p => p.id)) + 1
  };
  
  return newPost;
};

// Update an existing blog post - temporarily logging only
export const updatePost = async (id: number, post: Partial<BlogPost>): Promise<BlogPost | null> => {
  console.log(`Update post called for ID ${id} with:`, post);
  console.log('Note: This would normally update the database, but is using mock data for now');
  
  const existingPost = mockPosts.find(p => p.id === id);
  if (!existingPost) {
    return null;
  }
  
  const updatedPost: BlogPost = {
    ...existingPost,
    ...post
  };
  
  return updatedPost;
};

// Delete a blog post - temporarily logging only
export const deletePost = async (id: number): Promise<boolean> => {
  console.log(`Delete post called for ID ${id}`);
  console.log('Note: This would normally delete from the database, but is using mock data for now');
  
  return true;
};

export const blogService = {
  getAllPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
