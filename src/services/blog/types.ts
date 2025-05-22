
export interface RawBlogPostData {
  id: number;
  slug: string;
  title: string | null; // Changed from string | undefined to match database schema
  excerpt: string | null;
  cover: string | null;
  date: string | null;
  author: string | null;
  readTime: string | null;
  category: string | null;
  content: string | null;
}

export interface BlogServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
