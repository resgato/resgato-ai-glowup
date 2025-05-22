import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import PageHelmet from '@/components/PageHelmet';
import { StructuredData } from '@/components/seo/StructuredData';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const UtahMarketingFirms = () => {
  const features = [
    {
      title: "Full-Service Digital Marketing",
      description: "From SEO to PPC, content strategy to social media management, we provide comprehensive digital marketing solutions tailored for Utah businesses.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Local Market Expertise",
      description: "Deep understanding of Utah's unique business landscape, from Salt Lake City to Provo and beyond.",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Proven Results",
      description: "Track record of helping Utah businesses grow through strategic digital marketing campaigns.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Dedicated Team",
      description: "Local experts who understand your business and market, committed to your success.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your visibility in search results and attract more qualified traffic to your website.",
      link: "/services/seo"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Targeted ad campaigns that drive immediate results and maximize your ROI.",
      link: "/services/ppc"
    },
    {
      title: "Content Marketing",
      description: "Engaging content that resonates with your audience and drives conversions.",
      link: "/services/content-strategy"
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all platforms.",
      link: "/services/social-media"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet 
        title="Top Marketing Firms in Utah | Resgato Digital Marketing Agency"
        description="Compare Utah's leading marketing agencies and find your perfect match. Our comprehensive guide helps you evaluate services, expertise, and results to make an informed decision for your business."
        canonicalUrl="/utah-marketing-firms"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Leading Marketing Firms in Utah
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Your trusted digital marketing partner in Salt Lake City, helping Utah businesses grow through strategic marketing solutions.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-resgato-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-resgato-blue/90 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Resgato as Your Utah Marketing Agency
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-resgato-blue mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Digital Marketing Services in Utah
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block group"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-resgato-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Utah's Premier Digital Marketing Agency
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  As a leading marketing firm in Utah, we understand the unique challenges and opportunities of doing business in the Beehive State. Our team of experts in Salt Lake City combines local market knowledge with cutting-edge digital marketing strategies to help your business thrive.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-resgato-blue mr-2 flex-shrink-0" />
                    <span>Deep understanding of Utah's business landscape</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-resgato-blue mr-2 flex-shrink-0" />
                    <span>Proven track record with local businesses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-resgato-blue mr-2 flex-shrink-0" />
                    <span>Customized strategies for Utah markets</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/resgato-uploads/digitalmarketingfirmsinutah.jpg" 
                  alt="Digital Marketing Agency in Utah"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default UtahMarketingFirms;
