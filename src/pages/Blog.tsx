import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PageHelmet from '@/components/PageHelmet';

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
      cover: "/lovable-uploads/c69e195b-c2c5-434c-be7b-ac3fb2ce1f7b.png",
      date: "April 5, 2025",
      author: "Taylor Brody",
      readTime: "8 min read",
      category: "Digital Strategy",
      content: "The digital marketing landscape is evolving at an unprecedented pace. As we move further into 2025, businesses need to adapt to new technologies and shifting consumer behaviors. AI-powered marketing automation is no longer optional but essential for staying competitive. Privacy regulations continue to reshape how we collect and utilize customer data, pushing marketers to develop more transparent and consent-based strategies. Meanwhile, immersive experiences through AR and VR are creating new opportunities for brand engagement. This article explores the key trends that will define digital marketing success in the coming years."
    },
    {
      id: 2,
      slug: "seo-tactics-2025",
      title: "7 Proven SEO Tactics That Actually Work in 2025",
      excerpt: "With search algorithms constantly evolving, these seven strategies have consistently delivered results for our clients across various industries.",
      cover: "/lovable-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png",
      date: "April 1, 2025",
      author: "Parker Gardner",
      readTime: "6 min read",
      category: "SEO",
      content: "Search engine optimization continues to be a cornerstone of digital marketing, but the tactics that work are constantly changing. In this article, we share seven proven SEO strategies that are delivering results in 2025. From AI-optimized content creation to voice search optimization and semantic search understanding, these approaches will help you stay ahead of algorithm updates and drive organic traffic. We'll also discuss the growing importance of user experience signals and how they affect your rankings."
    },
    {
      id: 3,
      slug: "email-marketing-strategy",
      title: "How to Build an Email Marketing Strategy That Converts",
      excerpt: "Despite the rise of new channels, email marketing remains one of the highest-ROI activities. Learn our framework for creating email campaigns that engage and convert.",
      cover: "/lovable-uploads/3f29c8f4-0489-47bd-ab86-13ed0a87031b.png",
      date: "March 28, 2025",
      author: "Taylor Brody",
      readTime: "5 min read",
      category: "Email Marketing",
      content: "Email marketing continues to deliver the highest ROI of any digital channel when done right. This guide walks you through our proven framework for creating email campaigns that not only engage subscribers but drive measurable conversions. We cover list segmentation strategies, personalization techniques, automation workflows, and testing methodologies that will elevate your email performance. You'll learn how to craft compelling subject lines, create mobile-optimized designs, and develop content that resonates with your audience."
    },
    {
      id: 4,
      slug: "psychology-landing-pages",
      title: "The Psychology Behind High-Converting Landing Pages",
      excerpt: "Understanding user psychology is crucial for designing landing pages that convert. Discover the principles that guide effective landing page design.",
      cover: "/lovable-uploads/144eee65-8921-416b-9249-38ea50211b6e.png",
      date: "March 22, 2025",
      author: "Parker Gardner",
      readTime: "7 min read",
      category: "Conversion Optimization",
      content: "The difference between an average landing page and a high-converting one often comes down to psychological principles. This article explores the key psychological triggers that influence visitor behavior and decision-making. From color psychology and visual hierarchy to social proof and scarcity, we break down the elements that compel users to take action. You'll learn practical applications of these principles and see real-world examples of landing pages that effectively leverage psychology to drive conversions."
    },
    {
      id: 5,
      slug: "attribution-models",
      title: "Understanding Attribution Models: A Guide for Marketing Leaders",
      excerpt: "Choosing the right attribution model is essential for accurately measuring marketing effectiveness. This guide breaks down the options and helps you choose.",
      cover: "/lovable-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png",
      date: "March 15, 2025",
      author: "Taylor Brody",
      readTime: "9 min read",
      category: "Analytics",
      content: "In today's complex marketing ecosystem, understanding which channels and touchpoints contribute to conversions is challenging. This comprehensive guide explains different attribution models, from simple last-click approaches to sophisticated data-driven models. We'll help you understand the strengths and limitations of each model and provide a framework for selecting the right approach based on your business goals, customer journey complexity, and available data. The article includes practical implementation tips and case studies showing how proper attribution modeling improved marketing ROI."
    },
    {
      id: 6,
      slug: "social-media-strategy-2025",
      title: "Building a Social Media Strategy for 2025: Platforms, Content, and Measurement",
      excerpt: "Social media continues to evolve rapidly. Discover which platforms deserve your attention and how to create content that resonates with today's audiences.",
      cover: "/lovable-uploads/06a3fbfe-8265-4f20-934f-543d194bd0c0.png",
      date: "March 8, 2025",
      author: "Parker Gardner",
      readTime: "6 min read",
      category: "Social Media",
      content: "The social media landscape is more diverse and specialized than ever. This article provides a comprehensive framework for developing a social media strategy that aligns with your business objectives in 2025. We analyze the latest platform trends, audience demographics, and content formats that are gaining traction. You'll learn how to create platform-specific content strategies, leverage user-generated content, and implement measurement approaches that go beyond vanity metrics to demonstrate real business impact."
    },
    {
      id: 7,
      slug: "utah-real-estate-marketing",
      title: "9 Tips for Utah Real Estate Marketing",
      excerpt: "Explore expert insights and strategies to excel in Utah's real estate market in 2023.",
      cover: "/lovable-uploads/utah-real-estate-marketing.png",
      date: "April 10, 2025",
      author: "Taylor Brody",
      readTime: "10 min read",
      category: "Real Estate Marketing",
      content: "To help you excel in Utah's real estate market in 2023, we gathered insights from top industry professionals, including founders, CEOs, and digital marketers. From prioritizing your online presence to leveraging social media marketing, discover the top nine tips these experts shared to boost your real estate marketing strategy in the coming year."
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
    "Digital Marketing",
    "Real Estate Marketing"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet title="Blog" description="The latest strategies, trends, and insights from the world of digital marketing." />
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
                    <Link to="/author/taylor-brody" className="flex items-center group">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src="/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" alt={featuredPost.author} />
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
                    <Link to={`/author/${post.author.toLowerCase().replace(' ', '-')}`} className="flex items-center group">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage 
                          src={post.author === "Taylor Brody" 
                            ? "/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png" 
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
