import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { blogService } from '@/services/blog';
import { addNewBlogPosts } from '@/utils/blogPostsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterAdminLink';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  created_at: string;
};

const ITEMS_PER_PAGE = 5;

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      
      if (!data.session) {
        navigate('/login');
      } else {
        fetchSubmissions(currentPage);
        fetchTotalCount();
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session) {
        navigate('/login');
      }
    });
    
    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, currentPage]);
  
  const fetchTotalCount = async () => {
    try {
      const { count, error } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });
      
      if (!contactError && contactCount !== null) {
        setContactCount(contactCount);
      }
      
      // Count blog posts
      const posts = await blogService.getAllPosts();
      setBlogCount(posts.length);
      
      setLoading(false);
    };
    
    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleAddSamplePosts = async () => {
    setAddingPosts(true);
    try {
      const result = await addNewBlogPosts();
      if (result.success) {
        const successCount = result.results.filter(r => r.status === 'success').length;
        const skipCount = result.results.filter(r => r.status === 'skipped').length;
        
        toast({
          title: "Blog Posts Added",
          description: `Successfully added ${successCount} new blog posts. ${skipCount} posts were skipped (already exist).`,
        });
        
        // Refresh blog count
        const posts = await blogService.getAllPosts();
        setBlogCount(posts.length);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message || "Failed to add sample blog posts",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An error occurred while adding sample blog posts",
      });
    } finally {
      setAddingPosts(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <p className="text-lg">Welcome, <span className="font-semibold">{userName}</span></p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contact Submissions</h3>
              <MessageSquare className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold mb-4">{contactCount}</p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/admin/contacts" className="flex items-center justify-center gap-2">
                <FileEdit className="w-4 h-4" />
                Manage Contacts
              </Link>
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Blog Posts</h3>
              <BookOpen className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold mb-4">{blogCount}</p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/admin/blogs" className="flex items-center justify-center gap-2">
                <FileEdit className="w-4 h-4" />
                Manage Blog Posts
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button asChild className="w-full justify-start" variant="outline">
                <Link to="/admin/blogs/new" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create New Blog Post
                </Link>
              </Button>
              <Button asChild className="w-full justify-start" variant="outline">
                <Link to="/admin/blogs" className="flex items-center gap-2">
                  <FileEdit className="w-4 h-4" />
                  Edit Existing Blog Posts
                </Link>
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={handleAddSamplePosts}
                disabled={addingPosts}
              >
                {addingPosts ? (
                  <>
                    <span className="w-4 h-4 mr-2 rounded-full border-2 border-t-transparent border-blue-500 animate-spin"></span>
                    Adding Sample Posts...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Sample Blog Posts
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
