
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { blogService } from '@/services/blogService';
import PageHelmet from '@/components/PageHelmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await blogService.getPostBySlug(slug);
        
        if (!data) {
          setError("Blog post not found");
          return;
        }
        
        setPost(data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
    
    // Scroll to top when navigating between blog posts
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-resgato-purple"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Error</h1>
            <p className="text-xl mb-8">{error || "Blog post not found"}</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title={`${post.title} | Resgato Digital`} 
        description={post.excerpt}
        image={post.cover}
      />
      <Navbar />
      <main className="flex-grow">
        <div 
          className="h-[40vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.cover})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div className="max-w-3xl text-white">
              <Button 
                variant="outline" 
                className="mb-6 bg-black bg-opacity-30 hover:bg-black hover:bg-opacity-50 border-white text-white"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  {post.category}
                </span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600">
                    Digital Marketing Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
