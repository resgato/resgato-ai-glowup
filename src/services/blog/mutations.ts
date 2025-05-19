
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { checkAuth, transformBlogPostData } from './api';

const SITEMAP_ENDPOINT = "https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/generate-sitemap";

/**
 * Trigger a sitemap update by pinging the sitemap endpoint
 * This is called after create/update/delete operations
 */
const triggerSitemapUpdate = async () => {
  try {
    // Simply ping the endpoint to regenerate the sitemap
    await fetch(SITEMAP_ENDPOINT, { 
      method: 'GET',
      cache: 'no-cache', // Ensure no caching
      headers: {
        'Accept': 'application/xml',
        'Cache-Control': 'no-cache'
      }
    });
    console.log('Sitemap update triggered');
  } catch (error) {
    // Log error but don't fail the main operation
    console.error('Failed to trigger sitemap update:', error);
  }
};

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

    // Trigger sitemap update after successful post creation
    await triggerSitemapUpdate();

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

    // Trigger sitemap update after successful post update
    await triggerSitemapUpdate();

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
    
    // Trigger sitemap update after successful post deletion
    await triggerSitemapUpdate();
    
    return true;
  } catch (error) {
    console.error('Error in deletePost:', error);
    return false;
  }
};
