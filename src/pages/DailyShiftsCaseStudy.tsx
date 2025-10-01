import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  ArrowLeft,
  CheckCircle,
  Search,
  BarChart,
  Target,
  Users,
  Eye,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const DailyShiftsCaseStudy = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-resgato-purple" />,
      title: 'Site Audit & Verifications',
      description:
        'Comprehensive technical SEO audit to identify and fix critical issues affecting search engine visibility and user experience.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: 'Keyword Research',
      description:
        'In-depth keyword analysis to identify high-value search terms and opportunities in the mindfulness and wellness market.',
    },
    {
      icon: <Target className="h-8 w-8 text-resgato-purple" />,
      title: 'Site Optimization',
      description:
        'Technical and on-page SEO optimization to improve search rankings and enhance user experience across all pages.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: 'Search Engine Marketing',
      description:
        'Strategic SEM campaigns to capture high-intent search traffic and drive qualified leads to the website.',
    },
    {
      icon: <Eye className="h-8 w-8 text-resgato-purple" />,
      title: 'Search, Display & Video Advertising',
      description:
        'Multi-channel advertising campaigns including search ads, display banners, and video content to maximize reach and engagement.',
    },
    {
      icon: <Users className="h-8 w-8 text-resgato-purple" />,
      title: 'Audience Creation & Remarketing',
      description:
        'Advanced audience segmentation and remarketing strategies to re-engage visitors and increase conversion rates.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-resgato-purple" />,
      title: 'Consulting & Creative Services',
      description:
        'Ongoing strategic consulting and creative support to optimize campaigns and maintain competitive advantage.',
    },
  ];

  const results = [
    'Creation of a Weekly Content Strategy',
    'Earned over 100k Organic Clicks in less than a year',
    'Achieved app sub $5 iOS App Installs',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="The Daily Shifts Case Study | Comprehensive SEO & Digital Marketing | Resgato"
        description="Discover how Resgato helped The Daily Shifts achieve 800% revenue growth through comprehensive SEO, search engine marketing, and targeted advertising campaigns."
        canonicalUrl="/case-studies/daily-shifts"
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
                  Comprehensive SEO & Digital Marketing for The Daily Shifts
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                  A complete digital transformation that propelled this
                  mindfulness brand to national success through strategic SEO
                  and multi-channel marketing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    E-commerce
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    SEO
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Search Marketing
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Analytics
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
                  <OptimizedImage
                    src="/resgato-uploads/tds1.png"
                    alt="The Daily Shifts Website"
                    className="h-auto w-full"
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
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
                  The Daily Shifts, a mindfulness and wellness brand, needed a
                  comprehensive digital marketing strategy to expand their reach
                  beyond local markets and compete effectively in the growing
                  wellness industry. The project required a multi-faceted
                  approach combining technical SEO, search engine marketing, and
                  targeted advertising to drive sustainable growth.
                </p>
                <p className="mb-6 text-lg text-gray-600">
                  We implemented a complete SEO and digital marketing solution
                  that addressed every aspect of their online presence, from
                  technical optimization to audience targeting and conversion
                  optimization.
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Expand national reach and market presence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Improve search engine visibility and rankings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Increase qualified traffic and conversions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Build sustainable revenue growth</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-lg bg-resgato-light-purple/30 p-8">
                  <h3 className="mb-6 text-2xl font-semibold">Challenge</h3>
                  <p className="mb-4 text-gray-700">
                    The Daily Shifts faced several challenges in the competitive
                    wellness market:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Limited online visibility in a crowded market</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Technical SEO issues affecting search rankings
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Need to reach national audience beyond local market
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Requirement for sustainable, scalable growth</span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds2.jpeg"
                    alt="The Daily Shifts SEO Strategy"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                SEO & Digital Marketing Services
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A comprehensive suite of SEO and digital marketing services
                designed to maximize online visibility and drive sustainable
                growth.
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

        {/* Project Gallery */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Project Gallery
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A visual showcase of The Daily Shifts' digital transformation
                and the comprehensive SEO and marketing work delivered.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds2.jpeg"
                    alt="The Daily Shifts SEO Optimization"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds3.png"
                    alt="The Daily Shifts Search Marketing"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds4.png"
                    alt="The Daily Shifts Analytics Dashboard"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds5.png"
                    alt="The Daily Shifts Campaign Performance"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds6.png"
                    alt="The Daily Shifts Marketing Results"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/tds7.png"
                    alt="The Daily Shifts Growth Metrics"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Remarkable Results Achieved
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                The comprehensive SEO and digital marketing strategy delivered
                exceptional results that transformed The Daily Shifts' business.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Key Results</h3>
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
                <h3 className="mb-6 text-2xl font-semibold">
                  Strategic Impact
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Content Strategy Success
                    </h4>
                    <p className="text-gray-600">
                      Implemented a comprehensive weekly content strategy that
                      drove consistent organic growth and engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Organic Traffic Growth
                    </h4>
                    <p className="text-gray-600">
                      Achieved over 100,000 organic clicks in less than a year,
                      demonstrating exceptional SEO performance and content
                      effectiveness.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Cost-Effective App Growth
                    </h4>
                    <p className="text-gray-600">
                      Successfully achieved iOS app installs at under $5 per
                      install, optimizing marketing spend and maximizing ROI.
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Let us help you achieve similar results with a comprehensive SEO
              and digital marketing strategy tailored to your business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-resgato-purple hover:bg-resgato-purple/90"
              >
                <Link to="/contact">Start Your SEO Project</Link>
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

export default DailyShiftsCaseStudy;
