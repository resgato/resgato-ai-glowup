
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    id: 7,
    slug: "find-marketing-agency-salt-lake-city",
    title: "How to Find the Best Digital Marketing Agency Near You in Salt Lake City",
    excerpt: "Looking for a marketing agency near you? Discover how to choose the right partner for your business in the Salt Lake City area.",
    cover: "/lovable-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png",
    date: "April 8, 2025",
    author: "Taylor Brody",
    readTime: "7 min read",
    category: "Digital Marketing"
  };
  
  const posts = [
    {
      id: 1,
      slug: "future-digital-marketing-2025",
      title: "The Future of Digital Marketing in 2025 and Beyond",
      excerpt: "Explore emerging trends in AI-driven marketing, privacy-first strategies, and immersive content experiences that will shape the marketing landscape over the next decade.",
      cover: "/placeholder.svg",
      date: "April 5, 2025",
      author: "Taylor Brody",
      readTime: "8 min read",
      category: "Digital Strategy"
    },
    {
      id: 2,
      slug: "seo-tactics-2025",
      title: "7 Proven SEO Tactics That Actually Work in 2025",
      excerpt: "With search algorithms constantly evolving, these seven strategies have consistently delivered results for our clients across various industries.",
      cover: "/placeholder.svg",
      date: "April 1, 2025",
      author: "Taylor Brody",
      readTime: "6 min read",
      category: "SEO"
    },
    {
      id: 3,
      slug: "email-marketing-strategy",
      title: "How to Build an Email Marketing Strategy That Converts",
      excerpt: "Despite the rise of new channels, email marketing remains one of the highest-ROI activities. Learn our framework for creating email campaigns that engage and convert.",
      cover: "/placeholder.svg",
      date: "March 28, 2025",
      author: "Taylor Brody",
      readTime: "5 min read",
      category: "Email Marketing"
    },
    {
      id: 4,
      slug: "psychology-landing-pages",
      title: "The Psychology Behind High-Converting Landing Pages",
      excerpt: "Understanding user psychology is crucial for designing landing pages that convert. Discover the principles that guide effective landing page design.",
      cover: "/placeholder.svg",
      date: "March 22, 2025",
      author: "Taylor Brody",
      readTime: "7 min read",
      category: "Conversion Optimization"
    },
    {
      id: 5,
      slug: "attribution-models",
      title: "Understanding Attribution Models: A Guide for Marketing Leaders",
      excerpt: "Choosing the right attribution model is essential for accurately measuring marketing effectiveness. This guide breaks down the options and helps you choose.",
      cover: "/placeholder.svg",
      date: "March 15, 2025",
      author: "Taylor Brody",
      readTime: "9 min read",
      category: "Analytics"
    }
  ];
  
  const categories = [
    "Digital Strategy",
    "SEO",
    "Content Marketing",
    "Analytics",
    "Social Media",
    "Email Marketing",
    "Conversion Optimization",
    "Branding",
    "Digital Marketing"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Insights & Expertise</h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8">The latest strategies, trends, and insights from the world of digital marketing.</p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 md:py-16 bg-resgato-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={featuredPost.cover} 
                    alt={featuredPost.title} 
                    className="w-full h-56 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="inline-flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    <Link to={`/blog/${featuredPost.slug}`} className="hover:text-resgato-blue transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium">{featuredPost.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Posts */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              <div>
                <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-resgato-blue">
                  <option>All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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
                    <CardTitle className="text-xl hover:text-resgato-blue transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 text-sm text-gray-500 flex items-center">
                    <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                      <User className="h-3 w-3 text-gray-500" />
                    </div>
                    <span className="mr-3">{post.author}</span>
                    <span>•</span>
                    <span className="ml-3 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="#" 
                className="inline-flex items-center border-2 border-resgato-blue text-resgato-blue px-6 py-3 rounded-lg font-medium transition-colors hover:bg-resgato-blue hover:text-white"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">Stay updated with the latest marketing insights, tips, and strategies delivered directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-resgato-blue"
              />
              <button className="bg-resgato-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-resgato-blue/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
        
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
