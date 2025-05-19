
import { getAllPosts, getPostBySlug, getPostById, getPostsByAuthor } from './queries';
import { createPost, updatePost, deletePost } from './mutations';

export const blogService = {
  getAllPosts,
  getPostBySlug,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
};

export default blogService;
