import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';
import OptimizedImage from '@/components/OptimizedImage';
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Complete Digital Transformation for Yeti Plumbing',
      industry: 'Home Services',
      tags: ['Web Development', 'SEO', 'Branding'],
      imageUrl: '/resgato-uploads/calltheyeti_1.jpg',
      summary:
        'Comprehensive digital transformation including marketing strategy, domain management, hosting, web development, logo design, and SEO optimization.',
      results: [
        'New professional website launched',
        'Custom logo and brand identity created',
        'SEO optimization for local search',
      ],
    },
    {
      id: 2,
      title: 'Comprehensive SEO & Digital Marketing for The Daily Shifts',
      industry: 'E-commerce',
      tags: ['SEO', 'Search Marketing', 'Analytics'],
      imageUrl: '/resgato-uploads/tds2.jpeg',
      summary:
        'Complete SEO transformation including site optimization, search engine marketing, and targeted advertising campaigns for this mindfulness brand.',
      results: [
        '800% revenue growth',
        '375% increase in returning customers',
        '523% growth in email subscribers',
      ],
    },
    {
      id: 3,
      title: 'Brand Transformation Success Story',
      industry: 'Business Services',
      tags: ['Branding', 'Digital Marketing', 'Social Media'],
      imageUrl: '/resgato-uploads/mld_homepage.png',
      summary:
        "Transforming a traditional business's digital presence to appeal to new demographics while maintaining trust with existing customers.",
      results: [
        'Significant increase in new customers',
        'Substantial growth in social engagement',
        'Major improvement in brand sentiment',
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Case Studies | Digital Marketing Success Stories | Resgato"
        description="Discover how Resgato has helped businesses like yours transform their digital presence and achieve remarkable growth."
        canonicalUrl="/case-studies"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Success Stories That Drive Results
              </h1>
              <p className="mb-8 max-w-2xl text-xl md:text-2xl">
                Discover how we've helped businesses like yours transform their
                digital presence and achieve remarkable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="bg-resgato-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="animate-fade-in overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-56 bg-gray-200">
                    <OptimizedImage
                      src={study.imageUrl}
                      alt={study.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center">
                      <span className="mr-3 text-sm font-semibold text-resgato-blue">
                        {study.industry}
                      </span>
                      <div className="mr-3 h-1 w-1 rounded-full bg-gray-300"></div>
                      <span className="text-sm text-gray-600">
                        {study.tags[0]}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{study.title}</h3>
                    <p className="mb-6 text-gray-600">{study.summary}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        to={
                          study.id === 1
                            ? '/case-studies/yeti-plumbing'
                            : study.id === 2
                              ? '/case-studies/daily-shifts'
                              : study.id === 3
                                ? '/case-studies/mld'
                                : '/contact'
                        }
                        className="flex items-center justify-center"
                      >
                        Read Full Case Study{' '}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 animate-fade-in text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Industries We Serve
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Our proven strategies deliver results across a diverse range of
                business sectors.
              </p>
            </div>

            <div
              className="grid animate-fade-in grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
              style={{ animationDelay: '150ms' }}
            >
              {[
                'E-commerce',
                'SaaS & Technology',
                'Healthcare',
                'Finance',
                'Education',
                'Professional Services',
                'Real Estate',
                'Home Services',
              ].map((industry, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-resgato-blue hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
