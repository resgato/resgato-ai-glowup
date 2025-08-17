import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { blogService } from '@/services/blog';
import { BlogPost, mockBlogPosts } from '@/types/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Tag, User, Search, Filter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PageHelmet from '@/components/PageHelmet';
import { StructuredData } from '@/components/seo/StructuredData';
import { Helmet } from 'react-helmet';
import OptimizedImage from '@/components/OptimizedImage';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("date");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Try to fetch from database first, fallback to mock data
        let data = await blogService.getAllPosts();
        
        if (!data || data.length === 0) {
          // Use mock data if database is empty
          data = mockBlogPosts;
        }
        
        if (data && data.length > 0) {
          setPosts(data);
          setFeaturedPost(data[0]);
          
          // Extract unique categories
          const uniqueCategories = Array.from(
            new Set(data.map(post => post.category))
          ) as string[];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Fallback to mock data on error
        setPosts(mockBlogPosts);
        setFeaturedPost(mockBlogPosts[0]);
        const uniqueCategories = Array.from(
          new Set(mockBlogPosts.map(post => post.category))
        ) as string[];
        setCategories(uniqueCategories);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => post.id !== featuredPost?.id)
    .filter(post => selectedCategory === "All Categories" || post.category === selectedCategory)
    .filter(post => 
      searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

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

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet 
        title="Digital Marketing Blog | Expert Insights & Strategies | Resgato Utah"
        description="Explore our latest insights on digital marketing, SEO, PPC, and AI strategies. Stay updated with Resgato's expert analysis and industry trends."
        canonicalUrl="/blog"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">Resgato Blog | Digital Marketing Insights & Tips</h1>
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Digital Marketing Blog</h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8">The latest strategies, trends, and insights from the world of digital marketing.</p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 md:py-16 bg-resgato-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <OptimizedImage 
                      src={featuredPost.cover} 
                      alt={featuredPost.title} 
                      className="w-full h-56 md:h-full object-cover"
                      priority={true}
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                      <Link to={`/author/${featuredPost.author.toLowerCase().replace(' ', '-')}`} className="flex items-center group">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={featuredPost.author === "Taylor Brody" 
                            ? "/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" 
                            : "/placeholder.svg"} 
                            alt={featuredPost.author} 
                          />
                          <AvatarFallback>{featuredPost.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium group-hover:text-resgato-blue transition-colors">{featuredPost.author}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Recent Posts */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-resgato-blue focus:border-transparent w-full sm:w-64"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex gap-2">
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-resgato-blue focus:border-transparent"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option>All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index}>{category}</option>
                    ))}
                  </select>
                  
                  {/* Sort Options */}
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-resgato-blue focus:border-transparent"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Sort by Date</option>
                    <option value="title">Sort by Title</option>
                    <option value="category">Sort by Category</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Results Counter */}
            <div className="mb-6 text-sm text-gray-600">
              Showing {filteredPosts.length} of {posts.length} articles
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All Categories" && ` in ${selectedCategory}`}
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card 
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <OptimizedImage 
                        src={post.cover} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      <Link to={`/author/${post.author.toLowerCase().replace(' ', '-')}`} className="flex items-center group">
                        <Avatar className="w-6 h-6 mr-2">
                          <AvatarImage 
                            src={post.author === "Taylor Brody" 
                              ? "/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" 
                              : "/placeholder.svg"} 
                            alt={post.author} 
                          />
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="mr-3 group-hover:text-resgato-blue transition-colors">{post.author}</span>
                      </Link>
                      <span>•</span>
                      <span className="ml-3 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchQuery 
                      ? `No articles match your search for "${searchQuery}"`
                      : selectedCategory !== "All Categories"
                      ? `No articles found in the ${selectedCategory} category`
                      : "No articles available at the moment."
                    }
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                    className="text-resgato-blue hover:text-resgato-deep-purple font-medium"
                  >
                    Clear filters and try again
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <Link 
                to="/blog" 
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
