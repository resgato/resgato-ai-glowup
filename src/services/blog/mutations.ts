
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { checkAuth, transformBlogPostData } from './api';

/**
 * Create a new blog post
 */
export const createPost = async (post: Omit<BlogPost, 'id'>): Promise<BlogPost | null> => {
  try {
    // Check if user is authenticated
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      console.error('User not authenticated');
      return null;
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          cover: post.cover,
          date: post.date,
          author: post.author,
          readTime: post.readTime,
          category: post.category,
          content: post.content
        }
      ])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating blog post:', error);
      return null;
    }

    return transformBlogPostData(data);
  } catch (error) {
    console.error('Error in createPost:', error);
    return null;
  }
};

/**
 * Update an existing blog post
 */
export const updatePost = async (id: number, post: Partial<BlogPost>): Promise<BlogPost | null> => {
  try {
    // Check if user is authenticated
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      console.error('User not authenticated');
      return null;
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        cover: post.cover,
        date: post.date,
        author: post.author,
        readTime: post.readTime,
        category: post.category,
        content: post.content
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating blog post:', error);
      return null;
    }

    return transformBlogPostData(data);
  } catch (error) {
    console.error('Error in updatePost:', error);
    return null;
  }
};

/**
 * Delete a blog post
 */
export const deletePost = async (id: number): Promise<boolean> => {
  try {
    // Check if user is authenticated
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      console.error('User not authenticated');
      return false;
    }
    
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

