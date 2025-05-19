
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogService } from '@/services/blog';
import { BlogPost } from '@/types/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHelmet from '@/components/PageHelmet';

const AuthorBio = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Author information based on URL parameter
  const authorInfo = {
    'taylor-brody': {
      name: 'Taylor Brody',
      role: 'Digital Marketing Strategist',
      bio: 'Taylor Brody is a seasoned digital marketing strategist with over 10 years of experience helping businesses grow their online presence. Specializing in content marketing and SEO, Taylor has worked with brands across various industries to develop effective digital strategies.',
      avatar: '/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png',
    },
    'alex-morgan': {
      name: 'Alex Morgan',
      role: 'SEO Specialist',
      bio: 'Alex Morgan is an SEO expert with a passion for helping businesses improve their visibility in search engines. With a data-driven approach, Alex has helped numerous clients achieve significant improvements in their organic search rankings and traffic.',
      avatar: '/placeholder.svg',
    },
    'jordan-lee': {
      name: 'Jordan Lee',
      role: 'Social Media Manager',
      bio: 'Jordan Lee is a creative social media manager with expertise in building engaged online communities. With a background in both B2B and B2C marketing, Jordan understands how to tailor social media strategies to meet specific business goals.',
      avatar: '/placeholder.svg',
    },
    'resgato-team': {
      name: 'Resgato Team',
      role: 'Digital Marketing Experts',
      bio: 'The Resgato Team is a diverse group of digital marketing professionals with expertise spanning across SEO, content marketing, social media, and paid advertising. With their combined experience and specialized knowledge, they provide comprehensive insights into the ever-evolving digital landscape. The team works collaboratively to analyze trends, test new strategies, and deliver data-backed recommendations that help businesses stay ahead of the competition. Their collective approach ensures a holistic perspective on all marketing challenges.',
      avatar: '/lovable-uploads/c69e195b-c2c5-434c-be7b-ac3fb2ce1f7b.png',
    },
  };

  const currentAuthor = authorId ? authorInfo[authorId as keyof typeof authorInfo] : null;

  useEffect(() => {
    const fetchAuthorPosts = async () => {
      if (!authorId || !currentAuthor) {
        setError('Author not found');
        setLoading(false);
        return;
      }

      try {
        // Convert URL format (e.g., 'taylor-brody') to display name ('Taylor Brody')
        const authorName = currentAuthor.name;
        const authorPosts = await blogService.getPostsByAuthor(authorName);
        setPosts(authorPosts);
      } catch (err) {
        console.error('Error fetching author posts:', err);
        setError('Failed to load author posts');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorPosts();
  }, [authorId, currentAuthor]);

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

  if (error || !currentAuthor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Author Not Found</h2>
            <p className="mb-6">We couldn't find the author you're looking for.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-resgato-blue text-white px-6 py-3 rounded-lg"
            >
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title={`${currentAuthor.name} - Author Profile`} 
        description={`Learn more about ${currentAuthor.name}, ${currentAuthor.role} at Resgato Digital Marketing.`}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Author Bio Section */}
        <section className="bg-resgato-navy text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-36 w-36 md:h-52 md:w-52 border-4 border-white/20">
                <AvatarImage src={currentAuthor.avatar} alt={currentAuthor.name} />
                <AvatarFallback>{currentAuthor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{currentAuthor.name}</h1>
                <p className="text-xl text-white/80 mb-6">{currentAuthor.role}</p>
                <div className="max-w-2xl">
                  <p className="text-lg text-white/90">{currentAuthor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Author's Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-10">Articles by {currentAuthor.name}</h2>
            
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card 
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.cover} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <CardTitle className="text-lg hover:text-resgato-blue transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 flex items-center text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="ml-auto">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-resgato-blue flex items-center hover:underline"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600">No articles published yet by {currentAuthor.name}.</p>
                <Link to="/blog" className="mt-4 inline-block text-resgato-blue hover:underline">
                  Browse all blog posts
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorBio;
