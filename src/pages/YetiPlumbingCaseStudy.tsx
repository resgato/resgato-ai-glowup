import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowLeft, CheckCircle, Globe, Code, Search, Palette, Server, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const YetiPlumbingCaseStudy = () => {
  const services = [
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: "Marketing Strategy",
      description: "Developed a comprehensive digital marketing strategy tailored to the local plumbing market in Utah."
    },
    {
      icon: <Globe className="h-8 w-8 text-resgato-purple" />,
      title: "Domain Management",
      description: "Secured and configured the perfect domain name (CallTheYeti.com) for brand recognition and memorability."
    },
    {
      icon: <Server className="h-8 w-8 text-resgato-purple" />,
      title: "Website Hosting",
      description: "Set up reliable, fast hosting with 99.9% uptime guarantee and daily backups for business continuity."
    },
    {
      icon: <Code className="h-8 w-8 text-resgato-purple" />,
      title: "Web Development",
      description: "Built a custom, responsive website optimized for mobile users and local search visibility."
    },
    {
      icon: <Palette className="h-8 w-8 text-resgato-purple" />,
      title: "Logo Design",
      description: "Created a distinctive yeti-themed logo that stands out in the competitive plumbing industry."
    },
    {
      icon: <Search className="h-8 w-8 text-resgato-purple" />,
      title: "SEO Optimization",
      description: "Implemented local SEO strategies to improve search rankings for plumbing services in Utah."
    }
  ];

  const results = [
    "Professional website with modern design and mobile optimization",
    "Custom yeti-themed branding that differentiates from competitors",
    "Local SEO optimization for Utah plumbing market",
    "Reliable hosting and domain management setup",
    "Comprehensive digital marketing strategy implementation",
    "Enhanced online presence and brand recognition"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Yeti Plumbing Case Study | Complete Digital Transformation | Resgato"
        description="Discover how Resgato helped Yeti Plumbing achieve a complete digital transformation with marketing strategy, web development, logo design, and SEO optimization."
        canonicalUrl="/case-studies/yeti-plumbing"
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
                  Complete Digital Transformation for Yeti Plumbing
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  From concept to launch: A comprehensive digital transformation including marketing strategy, web development, branding, and SEO optimization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Home Services</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Web Development</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">SEO</span>
                  <span className="bg-resgato-purple px-4 py-2 rounded-full text-sm font-semibold">Branding</span>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage 
                  src="/resgato-uploads/calltheyeti_1.jpg" 
                  alt="Yeti Plumbing Website" 
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
                  Yeti Plumbing needed a complete digital transformation to establish a strong online presence in the competitive Utah plumbing market. 
                  The project required a comprehensive approach that would differentiate them from competitors while building trust with potential customers.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We provided a full-service solution that included strategic planning, technical implementation, and ongoing optimization to ensure 
                  their digital presence would drive real business results.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Establish a professional online presence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Differentiate from competitors with unique branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improve local search visibility for plumbing services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-resgato-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span>Generate qualified leads through digital marketing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OptimizedImage 
                  src="/resgato-uploads/calltheyeti_2.jpg" 
                  alt="Yeti Plumbing Services" 
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <OptimizedImage 
                  src="/resgato-uploads/calltheyeti_3.jpg" 
                  alt="Yeti Plumbing Branding" 
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Services Provided</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive digital transformation package that covered every aspect of their online presence.
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

        {/* Results */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Results Achieved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The comprehensive digital transformation delivered measurable results and positioned Yeti Plumbing for long-term success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Deliverables</h3>
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
                <h3 className="text-2xl font-semibold mb-6">Project Impact</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Brand Recognition</h4>
                    <p className="text-gray-600">The yeti theme and professional branding helped differentiate Yeti Plumbing from competitors in the local market.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Online Presence</h4>
                    <p className="text-gray-600">A modern, mobile-optimized website that provides a professional first impression for potential customers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local SEO</h4>
                    <p className="text-gray-600">Optimized for local search to capture customers searching for plumbing services in Utah.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-resgato-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Digital Transformation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with a comprehensive digital marketing strategy tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-resgato-purple hover:bg-resgato-purple/90">
                <Link to="/contact">Start Your Project</Link>
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

export default YetiPlumbingCaseStudy;
