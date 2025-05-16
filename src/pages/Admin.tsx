
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterAdminLink';
import { Button } from '@/components/ui/button';
import { FileEdit, LogOut, MessageSquare, BookOpen } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [contactCount, setContactCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
        return;
      }

      setUserName(data.session.user.email || '');
      
      // Count contacts
      const { count: contactCount, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });
      
      if (!contactError && contactCount !== null) {
        setContactCount(contactCount);
      }
      
      // Count blog posts
      const { count: blogCount, error: blogError } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });
      
      if (!blogError && blogCount !== null) {
        setBlogCount(blogCount);
      }
      
      setLoading(false);
    };
    
    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
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
                  <BookOpen className="w-4 h-4" />
                  Create New Blog Post
                </Link>
              </Button>
              <Button asChild className="w-full justify-start" variant="outline">
                <Link to="/admin/blogs" className="flex items-center gap-2">
                  <FileEdit className="w-4 h-4" />
                  Edit Existing Blog Posts
                </Link>
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
