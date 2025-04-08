
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Tag, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define the structure of a blog post
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  cover: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

// Create a map of blog posts
const blogPosts: Record<string, BlogPost> = {
  "find-marketing-agency-salt-lake-city": {
    id: 7,
    slug: "find-marketing-agency-salt-lake-city",
    title: "How to Find the Best Digital Marketing Agency Near You in Salt Lake City",
    excerpt: "Looking for a marketing agency near you? Discover how to choose the right partner for your business in the Salt Lake City area.",
    content: (
      <>
        <p className="text-lg mb-6">Looking for a marketing agency near you? Whether you're in Salt Lake City or the broader Utah area, finding the right partner can be the key to unlocking your business's growth. From full-service solutions to specialized offerings like SEO and online marketing, there are many factors to consider when choosing an agency.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Local Matters</h2>
        <p className="mb-6">When you're searching for a creative agency or marketing firm, one of the main benefits of hiring local is the personalized service. Agencies based in Salt Lake City understand the local market better than national firms. They can tailor strategies specifically to your industry and community. Whether it's localized SEO or ad agency campaigns that speak directly to Utah audiences, a local team has the pulse on what works.</p>
        
        <div className="my-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">A full-service marketing agency typically offers a wide array of services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>SEO:</strong> Search engine optimization is crucial for improving your website's visibility and attracting organic traffic.</li>
              <li><strong>PPC (pay-per-click) Advertising:</strong> Paid ads across platforms like Google or social media can quickly drive traffic and leads.</li>
              <li><strong>Social Media Management:</strong> Leveraging platforms like Facebook, Instagram, and LinkedIn to build your brand.</li>
              <li><strong>Email Marketing:</strong> Staying connected with your customers through regular, engaging content.</li>
              <li><strong>Creative Services:</strong> From branding to web design, a creative agency brings your vision to life.</li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png" 
              alt="Person working on digital marketing strategy" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        
        <p className="mb-8">By choosing a full-service marketing agency in Salt Lake City, you streamline your marketing efforts with one team that handles all aspects of your brand's growth.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What to Look for in a Marketing Firm</h2>
        <p className="mb-4">Finding the right marketing firm means aligning their expertise with your business goals. Here are some factors to consider:</p>
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">1. Proven Results</h3>
            <p>Look for a marketing agency that has a track record of delivering measurable results, especially in areas like SEO and online marketing.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">2. Industry Expertise</h3>
            <p>Some agencies specialize in certain industries, such as retail, healthcare, or tech. A creative agency with experience in your field can provide insights that others may miss.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">3. Transparency</h3>
            <p>Clear communication is essential. Make sure the agency provides regular reports and insights on your campaigns' performance.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">4. Adaptability</h3>
            <p>Marketing trends shift quickly. Your ad agency should be flexible enough to adjust campaigns in response to new data or changes in the market.</p>
          </div>
        </div>
        
        <div className="my-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/lovable-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png" 
              alt="Marketing professional analyzing campaigns" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">How Local SEO Can Drive Traffic</h2>
            <p className="mb-4">Local businesses rely on SEO to attract customers nearby. By targeting local keywords like "marketing agency near me" or "SEO services in Salt Lake City," you increase your chances of appearing in local search results.</p>
            <p>A strong online marketing strategy will include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Optimizing Google My Business listings.</li>
              <li>Localized keyword use in content.</li>
              <li>Building local backlinks and citations.</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of Digital Advertising</h2>
        <p className="mb-8">Digital advertising, especially through platforms like Google and Facebook, is an essential part of any marketing firm's strategy. These ads can be finely targeted to reach people in Utah or the Salt Lake City area who are actively looking for your services. With the right ad agency, your business can lower acquisition costs while increasing conversions.</p>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-3">Ready to Find Your Ideal Marketing Partner in Salt Lake City?</h3>
          <p className="mb-4">At Resgato, we combine local expertise with cutting-edge digital marketing strategies to help your business grow. Our full-service agency offers everything from SEO and PPC to creative services and email marketing.</p>
          <Button className="bg-resgato-blue hover:bg-resgato-navy text-white mt-2">
            Contact Us Today
          </Button>
        </div>
      </>
    ),
    cover: "/lovable-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png",
    date: "April 8, 2025",
    author: "Michael Chen",
    readTime: "7 min read",
    category: "Digital Marketing"
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? blogPosts[slug] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/blog')} className="bg-resgato-blue hover:bg-resgato-navy text-white">
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <button 
                onClick={() => navigate('/blog')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Blog
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-300 mb-6">
              <span className="flex items-center mr-4 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
              <span className="flex items-center mb-2">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-medium text-gray-700 mb-2">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-resgato-blue transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <Button onClick={() => navigate('/contact')} className="bg-resgato-blue hover:bg-resgato-navy text-white w-full sm:w-auto">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-600 mt-1">Digital Marketing Specialist at Resgato with over 10 years of experience helping businesses in Utah grow their online presence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
