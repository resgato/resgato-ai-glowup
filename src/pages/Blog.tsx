import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { blogService } from '@/services/blog';
import { BlogPost, mockBlogPosts } from '@/types/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');

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
    .filter(
      post =>
        selectedCategory === 'All Categories' ||
        post.category === selectedCategory
    )
    .filter(
      post =>
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-grow items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
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
        <h1 className="sr-only">
          Resgato Blog | Digital Marketing Insights & Tips
        </h1>
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Digital Marketing Blog
              </h1>
              <p className="mb-8 max-w-2xl text-xl md:text-2xl">
                The latest strategies, trends, and insights from the world of
                digital marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="bg-resgato-white py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold">Featured Article</h2>
              <div className="animate-fade-in overflow-hidden rounded-lg bg-white shadow-md">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <OptimizedImage
                      src={featuredPost.cover}
                      alt={featuredPost.title}
                      className="h-56 w-full object-cover md:h-full"
                      priority={true}
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:w-3/5 md:p-8">
                    <div className="mb-3 flex items-center text-sm text-gray-500">
                      <span className="mr-4 inline-flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="mr-4 inline-flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                      <span className="inline-flex items-center">
                        <Tag className="mr-1 h-4 w-4" />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="transition-colors hover:text-resgato-blue"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="mb-6 text-gray-600">{featuredPost.excerpt}</p>
                    <div className="flex items-center">
                      <Link
                        to={`/author/${featuredPost.author.toLowerCase().replace(' ', '-')}`}
                        className="group flex items-center"
                      >
                        <Avatar className="mr-3 h-8 w-8">
                          <AvatarImage
                            src={
                              featuredPost.author === 'Taylor Brody'
                                ? '/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png'
                                : '/placeholder.svg'
                            }
                            alt={featuredPost.author}
                          />
                          <AvatarFallback>
                            {featuredPost.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium transition-colors group-hover:text-resgato-blue">
                          {featuredPost.author}
                        </span>
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h2 className="text-2xl font-bold">Recent Articles</h2>

              {/* Search and Filter Controls */}
              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-resgato-blue sm:w-64"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2">
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-resgato-blue"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
                    <option>All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index}>{category}</option>
                    ))}
                  </select>

                  {/* Sort Options */}
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-resgato-blue"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
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
              {selectedCategory !== 'All Categories' &&
                ` in ${selectedCategory}`}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className="group animate-fade-in overflow-hidden transition-all duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <OptimizedImage
                        src={post.cover}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="mb-1 flex items-center text-xs text-gray-500">
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <CardTitle className="text-xl transition-colors hover:text-resgato-blue">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex items-center pt-0 text-sm text-gray-500">
                      <Link
                        to={`/author/${post.author.toLowerCase().replace(' ', '-')}`}
                        className="group flex items-center"
                      >
                        <Avatar className="mr-2 h-6 w-6">
                          <AvatarImage
                            src={
                              post.author === 'Taylor Brody'
                                ? '/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png'
                                : '/placeholder.svg'
                            }
                            alt={post.author}
                          />
                          <AvatarFallback>
                            {post.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="mr-3 transition-colors group-hover:text-resgato-blue">
                          {post.author}
                        </span>
                      </Link>
                      <span>•</span>
                      <span className="ml-3 flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readTime}
                      </span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="mx-auto max-w-md">
                  <Search className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    No articles found
                  </h3>
                  <p className="mb-4 text-gray-500">
                    {searchQuery
                      ? `No articles match your search for "${searchQuery}"`
                      : selectedCategory !== 'All Categories'
                        ? `No articles found in the ${selectedCategory} category`
                        : 'No articles available at the moment.'}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Categories');
                    }}
                    className="font-medium text-resgato-blue hover:text-resgato-deep-purple"
                  >
                    Clear filters and try again
                  </button>
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center rounded-lg border-2 border-resgato-blue px-6 py-3 font-medium text-resgato-blue transition-colors hover:bg-resgato-blue hover:text-white"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl animate-fade-in px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Stay updated with the latest marketing insights, tips, and
              strategies delivered directly to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-resgato-blue"
              />
              <button className="rounded-lg bg-resgato-blue px-6 py-3 font-medium text-white transition-colors hover:bg-resgato-blue/90">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
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
