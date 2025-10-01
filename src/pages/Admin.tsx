import React, { useEffect, useState, useCallback } from 'react';
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
import { LogOut, MessageSquare, FileEdit, BookOpen, Plus } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

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
  const [session, setSession] = useState<Session | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [addingPosts, setAddingPosts] = useState(false);
  const [blogCount, setBlogCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [userName, setUserName] = useState('Admin');
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchTotalCount = useCallback(async () => {
    try {
      const { count, error } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;

      if (count !== null) {
        setTotalCount(count);
        setTotalPages(Math.max(1, Math.ceil(count / ITEMS_PER_PAGE)));
      }
    } catch (error) {
      console.error('Error fetching total count:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch total submission count',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchSubmissions = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        const from = (page - 1) * ITEMS_PER_PAGE;
        const to = from + ITEMS_PER_PAGE - 1;
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false })
          .range(from, to);

        if (error) throw error;
        setSubmissions(data || []);
      } catch (error) {
        console.error('Error fetching submissions:', error);
        toast({
          title: 'Error',
          description: 'Failed to fetch contact submissions',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    },
    [toast]
  );

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
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session) {
        navigate('/login');
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, currentPage, fetchSubmissions, fetchTotalCount]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleAddSamplePosts = async () => {
    setAddingPosts(true);
    try {
      const result = await addNewBlogPosts();
      if (result.success && result.results) {
        const successCount = result.results.filter(
          r => r.status === 'success'
        ).length;
        const skipCount = result.results.filter(
          r => r.status === 'skipped'
        ).length;

        toast({
          title: 'Blog Posts Added',
          description: `Successfully added ${successCount} new blog posts. ${skipCount} posts were skipped (already exist).`,
        });

        // Refresh blog count
        const posts = await blogService.getAllPosts();
        setBlogCount(posts.length);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message || 'Failed to add sample blog posts',
        });
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred while adding sample blog posts';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    } finally {
      setAddingPosts(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-grow items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-grow px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="mb-8 rounded-lg bg-gray-50 p-4">
          <p className="text-lg">
            Welcome, <span className="font-semibold">{userName}</span>
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contact Submissions</h3>
              <MessageSquare className="h-5 w-5 text-blue-500" />
            </div>
            <p className="mb-4 text-3xl font-bold">{contactCount}</p>
            <Button variant="outline" asChild className="w-full">
              <Link
                to="/admin/contacts"
                className="flex items-center justify-center gap-2"
              >
                <FileEdit className="h-4 w-4" />
                Manage Contacts
              </Link>
            </Button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Blog Posts</h3>
              <BookOpen className="h-5 w-5 text-blue-500" />
            </div>
            <p className="mb-4 text-3xl font-bold">{blogCount}</p>
            <Button variant="outline" asChild className="w-full">
              <Link
                to="/admin/blogs"
                className="flex items-center justify-center gap-2"
              >
                <FileEdit className="h-4 w-4" />
                Manage Blog Posts
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link to="/admin/blogs/new" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Blog Post
                </Link>
              </Button>
              <Button
                asChild
                className="w-full justify-start"
                variant="outline"
              >
                <Link to="/admin/blogs" className="flex items-center gap-2">
                  <FileEdit className="h-4 w-4" />
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
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></span>
                    Adding Sample Posts...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
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
