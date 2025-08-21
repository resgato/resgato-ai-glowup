import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHero from '@/components/services/ServiceHero';
import CoreServices from '@/components/services/CoreServices';
import AdditionalServices from '@/components/services/AdditionalServices';
import ProcessSection from '@/components/services/ProcessSection';
import {
  ArrowUpRight,
  Zap,
  BarChart3,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';
import PageHelmet from '@/components/PageHelmet';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesFeatures = [
    {
      icon: <Zap className="h-6 w-6 text-resgato-purple" />,
      title: 'Marketing Solutions',
      description:
        'Leverage the latest marketing technologies to optimize your marketing efforts and improve ROI.',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-resgato-purple" />,
      title: 'Data-Driven SEM Strategies',
      description:
        'Make informed decisions based on comprehensive analytics and actionable insights for your Utah business.',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-resgato-purple" />,
      title: 'Salt Lake City PPC Campaigns',
      description:
        'Accelerate your business growth with targeted pay-per-click campaigns designed to increase conversions.',
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-resgato-purple" />,
      title: 'Digital Strategy Consulting',
      description:
        'Stay ahead of the competition with cutting-edge marketing techniques and technologies.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Digital Marketing Services in Utah | Resgato's Complete Marketing Solutions | Salt Lake City"
        description="Comprehensive digital marketing services in Utah: SEO, PPC, social media, content strategy, and marketing solutions. Custom strategies that drive real business growth and ROI."
        keywords="salt lake city marketing agencies, digital marketing agency salt lake city, utah sem companies, salt lake city ppc agency, utah ppc consultant, digital strategy consulting salt lake city, marketing firms in utah, ad agency salt lake city"
        canonicalUrl="/services"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">
          Digital Marketing Services in Utah | Resgato
        </h1>
        <ServiceHero
          title="Digital Marketing Solutions"
          description="Discover how our marketing solutions can help your Utah business achieve exceptional results with our digital strategy consulting."
          image="/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={servicesFeatures}
        />
        <CoreServices />
        <AdditionalServices />

        <section className="bg-gray-50 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-resgato-navy">
                Specialized Utah Marketing Services
              </h2>
              <p className="mt-2 text-gray-600">
                Tailored solutions for specific industries and needs in Utah
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                to="/utah-marketing-firms"
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-resgato-navy">
                  Utah Marketing Firms
                </h3>
                <p className="mb-4 text-gray-600">
                  Learn why Resgato stands out among marketing firms in Utah
                  with our results-driven approach.
                </p>
                <span className="flex items-center text-resgato-purple">
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/utah-real-estate-marketing"
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-resgato-navy">
                  Utah Real Estate Marketing
                </h3>
                <p className="mb-4 text-gray-600">
                  Specialized marketing solutions for real estate professionals
                  throughout Utah.
                </p>
                <span className="flex items-center text-resgato-purple">
                  Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
