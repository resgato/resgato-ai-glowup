
import { getAllPosts, getPostBySlug, getPostById } from './queries';
import { createPost, updatePost, deletePost } from './mutations';

export const blogService = {
  getAllPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost
};

export default blogService;

