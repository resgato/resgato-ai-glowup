
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { RawBlogPostData } from './types';

/**
 * Transform raw blog post data from the database into the BlogPost type
 */
export function transformBlogPostData(data: RawBlogPostData): BlogPost {
  return {
    id: data.id,
    slug: data.slug,
    title: data.title || '', // Handle null by providing empty string
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    date: data.date || '',
    author: data.author || '',
    readTime: data.readTime || '',
    category: data.category || '',
    content: data.content || ''
  };
}

/**
 * Check if user is authenticated for protected operations
 */
export async function checkAuth(): Promise<boolean> {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
}
