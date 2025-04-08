
import React from 'react';
import { TrendingUp, Eye, Globe, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AdditionalServices = () => {
  const additionalServices = [
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: 'Competitive Intelligence',
      description: 'Use AI to analyze competitor strategies and identify market opportunities.',
      link: '/contact'
    },
    {
      icon: <Eye className="h-8 w-8 text-resgato-purple" />,
      title: 'Sentiment Analysis',
      description: 'Monitor and analyze customer sentiment across digital channels.',
      link: '/contact'
    },
    {
      icon: <Globe className="h-8 w-8 text-resgato-purple" />,
      title: 'AI-Powered SEO',
      description: 'Optimize your website and content for search engines using AI techniques.',
      link: '/contact'
    },
    {
      icon: <Edit className="h-8 w-8 text-resgato-purple" />,
      title: 'Personalization Engines',
      description: 'Deliver tailored experiences to individual customers based on their preferences.',
      link: '/contact'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Additional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized AI marketing solutions to complement our core offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <Link key={index} to={service.link} className="block h-full transition-transform hover:scale-105">
              <Card className="border-resgato-light-purple shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
