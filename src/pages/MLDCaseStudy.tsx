import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowLeft, CheckCircle, Palette, Users, TrendingUp, MessageSquare, BarChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const MLDCaseStudy = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-resgato-purple" />,
      title: "Brand Revitalization",
      description: "Complete brand transformation to appeal to younger demographics while maintaining trust with existing customers."
    },
    {
      icon: <Users className="h-8 w-8 text-resgato-purple" />,
      title: "Audience Targeting",
      description: "Strategic targeting to reach millennial customers and expand market reach beyond traditional demographics."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-resgato-purple" />,
      title: "Content Marketing",
      description: "Engaging content creation and distribution across multiple channels to build brand awareness and engagement."
    },
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: "Social Media Strategy",
      description: "Comprehensive social media management and engagement strategies to build community and brand loyalty."
    },
    {
      icon: <Target className="h-8 w-8 text-resgato-purple" />,
      title: "Digital Advertising",
      description: "Targeted digital advertising campaigns including Google Ads and social media advertising."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: "Performance Analytics",
      description: "Data-driven approach to measure and optimize campaign performance and ROI."
    }
  ];

  const results = [
    "42% increase in millennial customers",
    "68% growth in social engagement",
    "3.2x improvement in brand sentiment",
    "Enhanced digital presence and brand perception",
    "Improved customer engagement across all channels",
    "Successful transition to modern retail marketing"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="MLD Case Study | Brand Revitalization & Digital Transformation | Resgato"
        description="Discover how Resgato helped MLD revitalize their brand perception and achieve 42% increase in millennial customers through strategic digital marketing."
        canonicalUrl="/case-studies/mld"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <Link to="/case-studies" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Revitalizing Brand Perception for MLD
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  A comprehensive brand transformation that successfully modernized a traditional retail chain's digital presence and expanded their customer base.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Retail</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Branding</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Content Marketing</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Social Media</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                  <OptimizedImage 
                    src="/resgato-uploads/mld_homepage.png" 
                    alt="MLD Homepage" 
                    className="w-full h-auto"
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 mb-6">
                  MLD, a traditional retail chain, needed to modernize their digital presence to appeal to younger demographics 
                  while maintaining the trust and loyalty of their existing customer base. The challenge was to transform their 
                  brand perception without alienating their core audience.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We implemented a comprehensive digital transformation strategy that included brand revitalization, 
                  content marketing, social media engagement, and targeted advertising to achieve measurable results.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Appeal to millennial customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Modernize brand perception</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Increase social media engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Maintain existing customer loyalty</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-resgato-light-purple/30 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    MLD faced several challenges in modernizing their brand:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Traditional brand perception limiting appeal to younger customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Outdated digital presence and social media strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Need to balance modernization with existing customer trust</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Limited engagement with millennial demographic</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <OptimizedImage 
                    src="/resgato-uploads/mld_meta.png" 
                    alt="MLD Meta Strategy" 
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Marketing Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive suite of digital marketing services designed to transform brand perception and drive customer engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A visual showcase of MLD's brand transformation and digital marketing success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <OptimizedImage 
                    src="/resgato-uploads/mld_googleads.png" 
                    alt="MLD Google Ads Campaign" 
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <OptimizedImage 
                    src="/resgato-uploads/mld_jackson.png" 
                    alt="MLD Jackson Location" 
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <OptimizedImage 
                    src="/resgato-uploads/mld_blog.png" 
                    alt="MLD Blog Content" 
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Exceptional Results Achieved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The comprehensive brand transformation delivered measurable results that exceeded expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Results</h3>
                <ul className="space-y-4">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-resgato-purple mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-resgato-light-purple/30 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Strategic Impact</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Millennial Market Penetration</h4>
                    <p className="text-gray-600">Successfully attracted 42% more millennial customers while maintaining existing customer loyalty.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Social Media Success</h4>
                    <p className="text-gray-600">Achieved 68% growth in social engagement, building a strong online community.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Brand Perception Transformation</h4>
                    <p className="text-gray-600">3.2x improvement in brand sentiment, successfully modernizing the brand image.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-resgato-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you revitalize your brand and achieve similar results with a comprehensive digital marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-resgato-purple hover:bg-resgato-purple/90">
                <Link to="/contact">Start Your Brand Transformation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-resgato-navy">
                <Link to="/case-studies">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MLDCaseStudy;
