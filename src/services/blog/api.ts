
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

/**
 * Transform raw Supabase data to a BlogPost object
 */
export const transformBlogPostData = (data: any): BlogPost => ({
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

