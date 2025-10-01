import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  ArrowLeft,
  CheckCircle,
  Palette,
  Users,
  TrendingUp,
  MessageSquare,
  BarChart,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';

const MLDCaseStudy = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-resgato-purple" />,
      title: 'Brand Revitalization',
      description:
        'Complete brand transformation to appeal to younger demographics while maintaining trust with existing customers.',
    },
    {
      icon: <Users className="h-8 w-8 text-resgato-purple" />,
      title: 'Audience Targeting',
      description:
        'Strategic targeting to reach millennial customers and expand market reach beyond traditional demographics.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-resgato-purple" />,
      title: 'Content Marketing',
      description:
        'Engaging content creation and distribution across multiple channels to build brand awareness and engagement.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: 'Social Media Strategy',
      description:
        'Comprehensive social media management and engagement strategies to build community and brand loyalty.',
    },
    {
      icon: <Target className="h-8 w-8 text-resgato-purple" />,
      title: 'Digital Advertising',
      description:
        'Targeted digital advertising campaigns including Google Ads and social media advertising.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: 'Performance Analytics',
      description:
        'Data-driven approach to measure and optimize campaign performance and ROI.',
    },
  ];

  const results = [
    'Significant increase in new demographic customers',
    'Substantial growth in social engagement',
    'Major improvement in brand sentiment',
    'Enhanced digital presence and brand perception',
    'Improved customer engagement across all channels',
    'Successful transition to modern marketing approaches',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Brand Transformation Case Study | Digital Marketing Success | Resgato"
        description="Discover how Resgato helped a traditional business achieve significant increase in new customers through strategic brand transformation and digital marketing."
        canonicalUrl="/case-studies/mld"
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
                  Brand Transformation Success Story
                </h1>
                <p className="mb-8 text-xl md:text-2xl">
                  A comprehensive brand transformation that successfully
                  modernized a traditional business's digital presence and
                  expanded their customer base.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Branding
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Digital Marketing
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Content Strategy
                  </span>
                  <span className="rounded-full bg-resgato-purple px-4 py-2 text-sm font-semibold">
                    Social Media
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
                  <OptimizedImage
                    src="/resgato-uploads/mld_homepage.png"
                    alt="MLD Homepage"
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
                  A traditional business needed to modernize their digital
                  presence to appeal to new demographics while maintaining the
                  trust and loyalty of their existing customer base. The
                  challenge was to transform their brand perception without
                  alienating their core audience.
                </p>
                <p className="mb-6 text-lg text-gray-600">
                  We implemented a comprehensive digital transformation strategy
                  that included brand revitalization, content marketing, social
                  media engagement, and targeted advertising to achieve
                  measurable results.
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Client Goals:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Appeal to millennial customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Modernize brand perception</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Increase social media engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>Maintain existing customer loyalty</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-lg bg-resgato-light-purple/30 p-8">
                  <h3 className="mb-6 text-2xl font-semibold">Challenge</h3>
                  <p className="mb-4 text-gray-700">
                    The business faced several challenges in modernizing their
                    brand:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Traditional brand perception limiting appeal to new
                        customers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Outdated digital presence and social media strategy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Need to balance modernization with existing customer
                        trust
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-resgato-purple" />
                      <span>
                        Limited engagement with new demographic segments
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/mld_meta.png"
                    alt="MLD Meta Strategy"
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
                Digital Marketing Services
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A comprehensive suite of digital marketing services designed to
                transform brand perception and drive customer engagement.
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
                A visual showcase of MLD's brand transformation and digital
                marketing success.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/mld_googleads.png"
                    alt="MLD Google Ads Campaign"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/mld_jackson.png"
                    alt="MLD Jackson Location"
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <OptimizedImage
                    src="/resgato-uploads/mld_blog.png"
                    alt="MLD Blog Content"
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
                Exceptional Results Achieved
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                The comprehensive brand transformation delivered measurable
                results that exceeded expectations.
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
                      Market Expansion
                    </h4>
                    <p className="text-gray-600">
                      Successfully attracted significantly more customers from
                      new demographics while maintaining existing customer
                      loyalty.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Social Media Success
                    </h4>
                    <p className="text-gray-600">
                      Achieved substantial growth in social engagement, building
                      a strong online community and brand presence.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Brand Perception Transformation
                    </h4>
                    <p className="text-gray-600">
                      Major improvement in brand sentiment, successfully
                      modernizing the brand image and market positioning.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Digital Presence Enhancement
                    </h4>
                    <p className="text-gray-600">
                      Significantly improved digital presence and brand
                      perception across all online channels and touchpoints.
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
              Ready to Transform Your Brand?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Let us help you revitalize your brand and achieve similar results
              with a comprehensive digital marketing strategy.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-resgato-purple hover:bg-resgato-purple/90"
              >
                <Link to="/contact">Start Your Brand Transformation</Link>
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

export default MLDCaseStudy;
