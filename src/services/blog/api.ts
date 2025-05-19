import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { BlogServiceResponse } from './types';

/**
 * Base function to check authentication status
 */
export const checkAuth = async (): Promise<boolean> => {
  const { data: sessionData } = await supabase.auth.getSession();
  return !!sessionData.session;
};

interface RawBlogPostData {
  id: number;
  slug: string;
  title?: string;
  excerpt?: string;
  cover?: string;
  date?: string;
  author?: string;
  readTime?: string;
  category?: string;
  content?: string;
}

/**
 * Transform raw Supabase data to a BlogPost object
 */
export const transformBlogPostData = (data: RawBlogPostData): BlogPost => ({
  id: data.id,
  slug: data.slug,
  title: data.title || '',
  excerpt: data.excerpt || '',
  cover: data.cover || '',
  date: data.date || '',
  author: data.author || '',
  readTime: data.readTime || '',
  category: data.category || '',
  content: data.content || ''
});

export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};

