
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { transformBlogPostData } from './api';
import { BlogServiceResponse } from './types';

/**
 * Get all blog posts from Supabase
 */
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('id', { ascending: false });
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }

    // Transform data to match BlogPost type
    const blogPosts = data.map(post => transformBlogPostData(post));
    
    return blogPosts;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    // Fall back to empty array if there's an error
    return [];
  }
};

/**
 * Get a single blog post by slug
 */
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error('Error fetching blog post by slug:', error);
      return null;
    }

    return transformBlogPostData(data);
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
  }
};

/**
 * Get a single blog post by ID
 */
export const getPostById = async (id: number): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching blog post by id:', error);
      return null;
    }

    return transformBlogPostData(data);
  } catch (error) {
    console.error('Error in getPostById:', error);
    return null;
  }
};

