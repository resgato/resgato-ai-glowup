import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { blogService } from '@/services/blog';
import { BlogPost } from '@/types/blog';
import { addNewBlogPosts, migrateBlogPosts } from '@/utils/blogPostsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterAdminLink';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { AlertTriangle, Edit, Plus, Trash, BookPlus, Database } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [addingPosts, setAddingPosts] = useState(false);
  const [migratingPosts, setMigratingPosts] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      if (!sessionData.session) {
        navigate('/login');
        return;
      }
      
      const data = await blogService.getAllPosts();
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog posts. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }, [navigate, toast]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDeleteClick = (post: BlogPost) => {
    setPostToDelete(post);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    
    try {
      const success = await blogService.deletePost(postToDelete.id);
      
      if (success) {
        setPosts(posts.filter(post => post.id !== postToDelete.id));
        toast({
          title: "Success",
          description: `Post "${postToDelete.title}" has been deleted.`,
        });
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred while deleting the post";
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const handleAddSamplePosts = async () => {
    setAddingPosts(true);
    try {
      const result = await addNewBlogPosts();
      if (result?.results) {
        toast({
          title: "Success",
          description: `${result.results.length} sample posts added successfully`,
        });
        fetchPosts(); // Refresh the list
      } else {
        throw new Error("Failed to add sample posts");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add sample posts",
      });
    } finally {
      setAddingPosts(false);
    }
  };

  const handleMigratePosts = async () => {
    setMigratingPosts(true);
    try {
      await migrateBlogPosts();
      toast({
        title: "Success",
        description: "Blog posts migrated successfully",
      });
      fetchPosts(); // Refresh the list
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to migrate blog posts",
      });
    } finally {
      setMigratingPosts(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <div className="flex gap-4">
            <Button onClick={handleMigratePosts} disabled={migratingPosts} variant="outline" className="flex items-center gap-2">
              {migratingPosts ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700"></div>
                  Migrating Posts...
                </>
              ) : (
                <>
                  <Database className="h-4 w-4" />
                  Migrate Old Posts
                </>
              )}
            </Button>
            
            <Button onClick={handleAddSamplePosts} disabled={addingPosts} variant="outline" className="flex items-center gap-2">
              {addingPosts ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700"></div>
                  Adding Posts...
                </>
              ) : (
                <>
                  <BookPlus className="h-4 w-4" />
                  Add Sample Posts
                </>
              )}
            </Button>
            
            <Button asChild>
              <Link to="/admin/blogs/new" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Blog Post
              </Link>
            </Button>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-10 text-center">
            <h3 className="text-xl mb-2">No blog posts found</h3>
            <p className="text-gray-600 mb-4">Get started by adding your first blog post.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleAddSamplePosts} disabled={addingPosts} variant="outline" className="flex items-center gap-2">
                {addingPosts ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700"></div>
                    Adding Posts...
                  </>
                ) : (
                  <>
                    <BookPlus className="h-4 w-4" />
                    Add Sample Posts
                  </>
                )}
              </Button>
              <Button asChild>
                <Link to="/admin/blogs/new" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Blog Post
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.date}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                      >
                        <Link to={`/admin/blogs/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteClick(post)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
      
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{postToDelete?.title}"? 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default BlogAdmin;
