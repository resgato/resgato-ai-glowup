
import { BlogPost } from '@/types/blog';

export type BlogServiceResponse<T> = {
  data: T | null;
  error: Error | null;
};

