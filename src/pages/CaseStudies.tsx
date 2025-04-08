
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Boosting Conversion Rates by 320% for Axio Auto',
      industry: 'Automotive',
      tags: ['SEO', 'PPC', 'Conversion Rate Optimization'],
      imageUrl: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      summary: 'How we transformed a regional auto dealership into a market leader with strategic digital marketing initiatives focused on local SEO and targeted PPC campaigns.',
      results: ['320% increase in conversion rate', '215% growth in organic traffic', '47% reduction in customer acquisition cost']
    },
    {
      id: 2,
      title: 'Scaling E-commerce Revenue for The Daily Shifts',
      industry: 'E-commerce',
      tags: ['Email Marketing', 'Social Media', 'Analytics'],
      imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      summary: 'Strategic email campaigns and targeted social media advertising helped this mindfulness brand expand nationally and increase recurring revenue.',
      results: ['800% revenue growth', '375% increase in returning customers', '523% growth in email subscribers']
    },
    {
      id: 3,
      title: 'Revitalizing Brand Perception for MLD',
      industry: 'Retail',
      tags: ['Branding', 'Content Marketing', 'Social Media'],
      imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      summary: "Transforming a traditional retail chain's digital presence to appeal to younger demographics while maintaining trust with existing customers.",
      results: ['42% increase in millennial customers', '68% growth in social engagement', '3.2x improvement in brand sentiment']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Success Stories That Drive Results</h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8">Discover how we've helped businesses like yours transform their digital presence and achieve remarkable growth.</p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 md:py-24 bg-resgato-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-56 bg-gray-200">
                    <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-semibold text-resgato-blue mr-3">{study.industry}</span>
                      <div className="h-1 w-1 rounded-full bg-gray-300 mr-3"></div>
                      <span className="text-sm text-gray-600">{study.tags[0]}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.summary}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-resgato-blue rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a href="#" className="flex items-center justify-center">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Industries Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our proven strategies deliver results across a diverse range of business sectors.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
              {['E-commerce', 'SaaS & Technology', 'Healthcare', 'Finance', 'Education', 'Professional Services', 'Real Estate', 'Hospitality'].map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 text-center transition-all hover:border-resgato-blue hover:shadow-md"
                >
                  <h3 className="font-semibold text-lg">{industry}</h3>
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
