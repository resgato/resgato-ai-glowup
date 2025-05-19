
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';

// Get all blog posts from Supabase
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*');
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }

    // Transform data to match BlogPost type if needed
    const blogPosts = data.map((post): BlogPost => ({
      id: post.id,
      slug: post.slug,
      title: post.title || '',
      excerpt: post.excerpt || '',
      cover: post.cover || '',
      date: post.date || '',
      author: post.author || '',
      readTime: post.readTime || '',
      category: post.category || '',
      content: post.content || ''
    }));
    
    return blogPosts;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    // Fall back to empty array if there's an error
    return [];
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
      console.error('Error fetching blog post by slug:', error);
      return null;
    }

    // Transform data to match BlogPost type if needed
    const post: BlogPost = {
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
    };
    
    return post;
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
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
      console.error('Error fetching blog post by id:', error);
      return null;
    }

    // Transform data to match BlogPost type
    const post: BlogPost = {
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
    };
    
    return post;
  } catch (error) {
    console.error('Error in getPostById:', error);
    return null;
  }
};

// Create a new blog post
export const createPost = async (post: Omit<BlogPost, 'id'>): Promise<BlogPost | null> => {
  try {
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

    // Return the newly created post with its ID
    return {
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
    };
  } catch (error) {
    console.error('Error in createPost:', error);
    return null;
  }
};

// Update an existing blog post
export const updatePost = async (id: number, post: Partial<BlogPost>): Promise<BlogPost | null> => {
  try {
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

    // Return the updated post
    return {
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
    };
  } catch (error) {
    console.error('Error in updatePost:', error);
    return null;
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
