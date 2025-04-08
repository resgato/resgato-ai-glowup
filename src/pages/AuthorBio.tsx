
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  FileText, 
  Mail, 
  MapPin, 
  Twitter,
  Linkedin,
  ArrowLeft
} from 'lucide-react';

interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: React.ReactNode;
  photoUrl: string;
  location: string;
  email: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
  experience: {
    years: number;
    specialties: string[];
  };
  recentPosts: {
    id: number;
    slug: string;
    title: string;
    date: string;
    readTime: string;
  }[];
}

// Author data
const authors: Record<string, Author> = {
  "taylor-brody": {
    id: "taylor-brody",
    name: "Taylor Brody",
    role: "Senior Digital Marketing Strategist",
    bio: "Digital Marketing Specialist with over 10 years of experience helping businesses in Utah grow their online presence.",
    longBio: (
      <>
        <p className="mb-4">
          Taylor Brody is a seasoned digital marketing strategist with over a decade of experience in helping businesses 
          transform their online presence and achieve measurable growth through data-driven strategies.
        </p>
        <p className="mb-4">
          After earning a degree in Marketing from the University of Utah, Taylor began his career at a 
          national digital agency where he managed campaigns for Fortune 500 clients. This experience 
          provided him with a deep understanding of marketing best practices across various industries 
          and scales.
        </p>
        <p className="mb-4">
          In 2015, Taylor decided to focus his expertise on helping local businesses in the Salt Lake City 
          area compete effectively in the digital space. Since joining Resgato, he has led the digital 
          marketing department with a focus on creating tailored, results-oriented campaigns that 
          combine SEO, content marketing, PPC, and social media strategies.
        </p>
        <p className="mb-4">
          Taylor's approach is rooted in his belief that effective marketing requires both analytical 
          thinking and creative problem-solving. He is known for his ability to translate complex marketing 
          concepts into clear, actionable plans that align with each client's unique business goals.
        </p>
        <p>
          When he's not optimizing campaigns or analyzing metrics, Taylor enjoys hiking in Utah's 
          beautiful national parks, experimenting with photography, and volunteering with local 
          tech education initiatives aimed at bringing digital literacy to underserved communities.
        </p>
      </>
    ),
    photoUrl: "/lovable-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png",
    location: "Salt Lake City, UT",
    email: "taylor.brody@resgato.com",
    socialLinks: {
      twitter: "https://twitter.com/taylorbrody",
      linkedin: "https://linkedin.com/in/taylorbrody"
    },
    experience: {
      years: 10,
      specialties: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing Strategy",
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Marketing Analytics & Reporting"
      ]
    },
    recentPosts: [
      {
        id: 7,
        slug: "find-marketing-agency-salt-lake-city",
        title: "How to Find the Best Digital Marketing Agency Near You in Salt Lake City",
        date: "April 8, 2025",
        readTime: "7 min read"
      },
      {
        id: 1,
        slug: "future-digital-marketing-2025",
        title: "The Future of Digital Marketing in 2025 and Beyond",
        date: "April 5, 2025",
        readTime: "8 min read"
      },
      {
        id: 2,
        slug: "seo-tactics-2025",
        title: "7 Proven SEO Tactics That Actually Work in 2025",
        date: "April 1, 2025",
        readTime: "6 min read"
      }
    ]
  }
};

const AuthorBio = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const author = authorId ? authors[authorId] : null;

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Author Not Found</h1>
            <p className="mb-6">Sorry, the author you're looking for doesn't exist in our database.</p>
            <Button asChild>
              <Link to="/blog" className="bg-resgato-blue hover:bg-resgato-navy text-white">
                Back to Blog
              </Link>
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
        <section className="bg-resgato-navy text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm mb-6">
              <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-transparent transition-colors p-0">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            <div className="md:flex md:items-center md:gap-12">
              <div className="mb-8 md:mb-0 md:w-1/3">
                <div className="relative w-48 h-48 mx-auto md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={author.photoUrl} 
                    alt={`${author.name} portrait`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{author.name}</h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-6">{author.role}</p>
                
                <div className="flex flex-wrap gap-y-3 gap-x-6 text-gray-200 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{author.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{author.experience.years}+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>{author.recentPosts.length} Articles</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {author.socialLinks.twitter && (
                    <a 
                      href={author.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-resgato-navy p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {author.socialLinks.linkedin && (
                    <a 
                      href={author.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-resgato-navy p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  <a 
                    href={`mailto:${author.email}`}
                    className="bg-white text-resgato-navy p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">About Taylor</h2>
                <div className="prose prose-lg max-w-none">
                  {author.longBio}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Areas of Expertise</h3>
                  <ul className="space-y-2">
                    {author.experience.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-resgato-blue/10 text-resgato-blue p-1 rounded mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Taylor</h3>
                  <Button asChild className="w-full bg-resgato-blue hover:bg-resgato-navy text-white mb-4">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <p className="text-gray-600 text-sm">
                    Interested in working with Taylor? Get in touch to discuss 
                    how he can help your business grow online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Recent Articles by {author.name}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {author.recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="inline-flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 hover:text-resgato-blue transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-resgato-blue font-medium hover:text-resgato-navy transition-colors"
                    >
                      Read Article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-resgato-blue text-resgato-blue hover:bg-resgato-blue hover:text-white">
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthorBio;
