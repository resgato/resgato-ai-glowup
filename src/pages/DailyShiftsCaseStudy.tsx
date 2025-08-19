import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowLeft, CheckCircle, Search, BarChart, Target, Users, Eye, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const DailyShiftsCaseStudy = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-resgato-purple" />,
      title: "Site Audit & Verifications",
      description: "Comprehensive technical SEO audit to identify and fix critical issues affecting search engine visibility and user experience."
    },
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value search terms and opportunities in the mindfulness and wellness market."
    },
    {
      icon: <Target className="h-8 w-8 text-resgato-purple" />,
      title: "Site Optimization",
      description: "Technical and on-page SEO optimization to improve search rankings and enhance user experience across all pages."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: "Search Engine Marketing",
      description: "Strategic SEM campaigns to capture high-intent search traffic and drive qualified leads to the website."
    },
    {
      icon: <Eye className="h-8 w-8 text-resgato-purple" />,
      title: "Search, Display & Video Advertising",
      description: "Multi-channel advertising campaigns including search ads, display banners, and video content to maximize reach and engagement."
    },
    {
      icon: <Users className="h-8 w-8 text-resgato-purple" />,
      title: "Audience Creation & Remarketing",
      description: "Advanced audience segmentation and remarketing strategies to re-engage visitors and increase conversion rates."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-resgato-purple" />,
      title: "Consulting & Creative Services",
      description: "Ongoing strategic consulting and creative support to optimize campaigns and maintain competitive advantage."
    }
  ];

  const results = [
    "800% revenue growth through improved search visibility",
    "375% increase in returning customers via remarketing",
    "523% growth in email subscribers from targeted campaigns",
    "Significant improvement in organic search rankings",
    "Enhanced user experience and site performance",
    "Expanded national reach through multi-channel advertising"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="The Daily Shifts Case Study | Comprehensive SEO & Digital Marketing | Resgato"
        description="Discover how Resgato helped The Daily Shifts achieve 800% revenue growth through comprehensive SEO, search engine marketing, and targeted advertising campaigns."
        canonicalUrl="/case-studies/daily-shifts"
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
                  Comprehensive SEO & Digital Marketing for The Daily Shifts
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  A complete digital transformation that propelled this mindfulness brand to national success through strategic SEO and multi-channel marketing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">E-commerce</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">SEO</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Search Marketing</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Analytics</span>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage 
                  src="/resgato-uploads/tds1.png" 
                  alt="The Daily Shifts Website" 
                  className="rounded-lg shadow-2xl"
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
                  The Daily Shifts, a mindfulness and wellness brand, needed a comprehensive digital marketing strategy to expand their reach beyond local markets 
                  and compete effectively in the growing wellness industry. The project required a multi-faceted approach combining technical SEO, search engine marketing, 
                  and targeted advertising to drive sustainable growth.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We implemented a complete SEO and digital marketing solution that addressed every aspect of their online presence, from technical optimization 
                  to audience targeting and conversion optimization.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Expand national reach and market presence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improve search engine visibility and rankings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Increase qualified traffic and conversions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Build sustainable revenue growth</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-resgato-light-purple/30 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    The Daily Shifts faced several challenges in the competitive wellness market:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Limited online visibility in a crowded market</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technical SEO issues affecting search rankings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Need to reach national audience beyond local market</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Requirement for sustainable, scalable growth</span>
                    </li>
                  </ul>
                </div>
                <OptimizedImage 
                  src="/resgato-uploads/tds2.png" 
                  alt="The Daily Shifts SEO Strategy" 
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">SEO & Digital Marketing Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive suite of SEO and digital marketing services designed to maximize online visibility and drive sustainable growth.
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
                A visual showcase of The Daily Shifts' digital transformation and the comprehensive SEO and marketing work delivered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <OptimizedImage 
                  src="/resgato-uploads/tds2.png" 
                  alt="The Daily Shifts SEO Optimization" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <OptimizedImage 
                  src="/resgato-uploads/tds3.png" 
                  alt="The Daily Shifts Search Marketing" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-4">
                <OptimizedImage 
                  src="/resgato-uploads/tds4.png" 
                  alt="The Daily Shifts Analytics Dashboard" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <OptimizedImage 
                  src="/resgato-uploads/tds5.png" 
                  alt="The Daily Shifts Campaign Performance" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-4">
                <OptimizedImage 
                  src="/resgato-uploads/tds6.png" 
                  alt="The Daily Shifts Marketing Results" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <OptimizedImage 
                  src="/resgato-uploads/tds7.png" 
                  alt="The Daily Shifts Growth Metrics" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Remarkable Results Achieved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The comprehensive SEO and digital marketing strategy delivered exceptional results that transformed The Daily Shifts' business.
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
                    <h4 className="font-semibold text-lg mb-2">National Expansion</h4>
                    <p className="text-gray-600">Successfully expanded from local to national market through targeted SEO and advertising campaigns.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Revenue Growth</h4>
                    <p className="text-gray-600">Achieved 800% revenue growth through improved search visibility and conversion optimization.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Customer Retention</h4>
                    <p className="text-gray-600">375% increase in returning customers through effective remarketing and audience targeting.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email Marketing</h4>
                    <p className="text-gray-600">523% growth in email subscribers, building a valuable direct marketing channel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-resgato-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with a comprehensive SEO and digital marketing strategy tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-resgato-purple hover:bg-resgato-purple/90">
                <Link to="/contact">Start Your SEO Project</Link>
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

export default DailyShiftsCaseStudy;
