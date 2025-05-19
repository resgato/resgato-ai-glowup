
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogService } from '@/services/blog';
import { BlogPost as BlogPostType } from '@/types/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Calendar, Clock, Tag, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageHelmet from '@/components/PageHelmet';
import BlogContent from '@/components/blog/BlogContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        if (!slug) {
          setNotFound(true);
          return;
        }
        
        // Fetch current post
        const data = await blogService.getPostBySlug(slug);
        
        if (!data) {
          setNotFound(true);
          return;
        }
        
        setPost(data);
        
        // Fetch related posts in same category
        const allPosts = await blogService.getAllPosts();
        const related = allPosts
          .filter(p => p.category === data.category && p.id !== data.id)
          .slice(0, 3);
        
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    navigate('/404', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title={post.title} 
        description={post.excerpt}
        image={post.cover}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full h-72 md:h-96 lg:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${post.cover})`,
                filter: 'blur(2px)',
                transform: 'scale(1.05)',
              }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center text-sm mb-4">
                    <Link 
                      to="/blog" 
                      className="flex items-center text-white/80 hover:text-white transition-colors mr-4"
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back to Blog
                    </Link>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-sm text-white/80">
                    <Link to={`/author/${post.author.toLowerCase().replace(' ', '-')}`} className="flex items-center group mr-4">
                      <Avatar className="h-8 w-8 mr-2 border-2 border-white/20">
                        <AvatarImage 
                          src={post.author === "Taylor Brody" 
                            ? "/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" 
                            : "/placeholder.svg"} 
                          alt={post.author} 
                        />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="group-hover:underline">{post.author}</span>
                    </Link>
                    <span className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
              <article className="prose prose-lg max-w-none">
                <BlogContent content={post.content} />
              </article>
              
              <div className="mt-10 pt-8 border-t">
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-gray-200">
                    <AvatarImage 
                      src={post.author === "Taylor Brody" 
                        ? "/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" 
                        : "/placeholder.svg"} 
                      alt={post.author} 
                    />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-gray-500">Written by</p>
                    <Link 
                      to={`/author/${post.author.toLowerCase().replace(' ', '-')}`}
                      className="font-semibold text-lg hover:text-resgato-blue transition-colors"
                    >
                      {post.author}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card 
                    key={relatedPost.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.cover} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {relatedPost.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-resgato-blue transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link 
                        to={`/blog/${relatedPost.slug}`}
                        className="text-resgato-blue flex items-center hover:underline"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
