
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

// Get all blog posts from database or fallback to mock data
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      return mockPosts;
    }
    
    // Transform the data from snake_case to camelCase for the readTime field
    return data.map(post => ({
      ...post,
      readTime: post.read_time
    })) as BlogPost[];
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return mockPosts;
  }
};

// Get a single blog post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error('Error fetching blog post:', error);
      return mockPosts.find(post => post.slug === slug) || null;
    }
    
    return {
      ...data,
      readTime: data.read_time
    } as BlogPost;
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return mockPosts.find(post => post.slug === slug) || null;
  }
};

// Get a single blog post by ID
export const getPostById = async (id: number): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching blog post by ID:', error);
      return mockPosts.find(post => post.id === id) || null;
    }
    
    return {
      ...data,
      readTime: data.read_time
    } as BlogPost;
  } catch (error) {
    console.error('Error in getPostById:', error);
    return mockPosts.find(post => post.id === id) || null;
  }
};

// Create a new blog post
export const createPost = async (post: Omit<BlogPost, 'id'>): Promise<BlogPost | null> => {
  try {
    // Convert readTime to read_time for database storage
    const dbPost = {
      ...post,
      read_time: post.readTime
    };
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([dbPost])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating blog post:', error);
      throw new Error(`Failed to create post: ${error.message}`);
    }
    
    return {
      ...data,
      readTime: data.read_time
    } as BlogPost;
  } catch (error) {
    console.error('Error in createPost:', error);
    throw error;
  }
};

// Update an existing blog post
export const updatePost = async (id: number, post: Partial<BlogPost>): Promise<BlogPost | null> => {
  try {
    // If readTime is included, convert to read_time for database
    const dbPost: any = { ...post };
    if (post.readTime) {
      dbPost.read_time = post.readTime;
      delete dbPost.readTime;
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update(dbPost)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating blog post:', error);
      throw new Error(`Failed to update post: ${error.message}`);
    }
    
    return {
      ...data,
      readTime: data.read_time
    } as BlogPost;
  } catch (error) {
    console.error('Error in updatePost:', error);
    throw error;
  }
};

// Delete a blog post
export const deletePost = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting blog post:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error in deletePost:', error);
    return false;
  }
};

export const blogService = {
  getAllPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
