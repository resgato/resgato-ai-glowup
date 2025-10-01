import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  ArrowLeft,
  CheckCircle,
  Globe,
  Code,
  Search,
  Palette,
  Server,
  BarChart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const YetiPlumbingCaseStudy = () => {
  const services = [
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: 'Marketing Strategy',
      description:
        'Developed a comprehensive digital marketing strategy tailored to the local plumbing market in Utah.',
    },
    {
      icon: <Globe className="h-8 w-8 text-resgato-purple" />,
      title: 'Domain Management',
      description:
        'Secured and configured the perfect domain name (CallTheYeti.com) for brand recognition and memorability.',
    },
    {
      icon: <Server className="h-8 w-8 text-resgato-purple" />,
      title: 'Website Hosting',
      description:
        'Set up reliable, fast hosting with 99.9% uptime guarantee and daily backups for business continuity.',
    },
    {
      icon: <Code className="h-8 w-8 text-resgato-purple" />,
      title: 'Web Development',
      description:
        'Built a custom, responsive website optimized for mobile users and local search visibility.',
    },
    {
      icon: <Palette className="h-8 w-8 text-resgato-purple" />,
      title: 'Logo Design',
      description:
        'Created a distinctive yeti-themed logo that stands out in the competitive plumbing industry.',
    },
    {
      icon: <Search className="h-8 w-8 text-resgato-purple" />,
      title: 'SEO Optimization',
      description:
        'Implemented local SEO strategies to improve search rankings for plumbing services in Utah.',
    },
  ];

  const results = [
    'Professional website with modern design and mobile optimization',
    'Custom yeti-themed branding that differentiates from competitors',
    'Local SEO optimization for Utah plumbing market',
    'Reliable hosting and domain management setup',
    'Comprehensive digital marketing strategy implementation',
    'Enhanced online presence and brand recognition',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Yeti Plumbing Case Study | Complete Digital Transformation | Resgato"
        description="Discover how Resgato helped Yeti Plumbing achieve a complete digital transformation with marketing strategy, web development, logo design, and SEO optimization."
        canonicalUrl="/case-studies/yeti-plumbing"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-white hover:bg-white/10"
              >
                <Link to="/case-studies" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                  Complete Digital Transformation for Yeti Plumbing
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                  From concept to launch: A comprehensive digital transformation
                  including marketing strategy, web development, branding, and
                  SEO optimization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Home Services
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Web Development
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    SEO
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Branding
                  </span>
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
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Project Overview
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Yeti Plumbing needed a complete digital transformation to
                  establish a strong online presence in the competitive Utah
                  plumbing market. The project required a comprehensive approach
                  that would differentiate them from competitors while building
                  trust with potential customers.
                </p>
                <p className="mb-6 text-lg text-gray-600">
                  We provided a full-service solution that included strategic
                  planning, technical implementation, and ongoing optimization
                  to ensure their digital presence would drive real business
                  results.
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Establish a professional online presence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Differentiate from competitors with unique branding
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Improve local search visibility for plumbing services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Generate qualified leads through digital marketing
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Services Provided
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A comprehensive digital transformation package that covered
                every aspect of their online presence.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Results Achieved
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                The comprehensive digital transformation delivered measurable
                results and positioned Yeti Plumbing for long-term success.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">
                  Key Deliverables
                </h3>
                <ul className="space-y-4">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-resgato-purple" />
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-resgato-light-purple/30 p-8">
                <h3 className="mb-6 text-2xl font-semibold">Project Impact</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Brand Recognition
                    </h4>
                    <p className="text-gray-600">
                      The yeti theme and professional branding helped
                      differentiate Yeti Plumbing from competitors in the local
                      market.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Online Presence
                    </h4>
                    <p className="text-gray-600">
                      A modern, mobile-optimized website that provides a
                      professional first impression for potential customers.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Local SEO</h4>
                    <p className="text-gray-600">
                      Optimized for local search to capture customers searching
                      for plumbing services in Utah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-resgato-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready for Your Digital Transformation?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Let us help you achieve similar results with a comprehensive
              digital marketing strategy tailored to your business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-resgato-purple hover:bg-resgato-purple/90"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-resgato-navy"
              >
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
