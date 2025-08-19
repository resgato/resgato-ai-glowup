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
      summary: 'Comprehensive digital transformation including marketing strategy, domain management, hosting, web development, logo design, and SEO optimization.',
      results: ['New professional website launched', 'Custom logo and brand identity created', 'SEO optimization for local search']
    },
    {
      id: 2,
      title: 'Comprehensive SEO & Digital Marketing for The Daily Shifts',
      industry: 'E-commerce',
      tags: ['SEO', 'Search Marketing', 'Analytics'],
      imageUrl: '/resgato-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png',
      summary: 'Complete SEO transformation including site optimization, search engine marketing, and targeted advertising campaigns for this mindfulness brand.',
      results: ['800% revenue growth', '375% increase in returning customers', '523% growth in email subscribers']
    },
    {
      id: 3,
      title: 'Revitalizing Brand Perception for MLD',
      industry: 'Retail',
      tags: ['Branding', 'Content Marketing', 'Social Media'],
      imageUrl: '/resgato-uploads/3f29c8f4-0489-47bd-ab86-13ed0a87031b.png',
      summary: "Transforming a traditional retail chain's digital presence to appeal to younger demographics while maintaining trust with existing customers.",
      results: ['42% increase in millennial customers', '68% growth in social engagement', '3.2x improvement in brand sentiment']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet title="Case Studies" description="Discover how Resgato has helped businesses like yours transform their digital presence and achieve remarkable growth." />
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
                    <OptimizedImage 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      <Link to={
                        study.id === 1 ? "/case-studies/yeti-plumbing" : 
                        study.id === 2 ? "/case-studies/daily-shifts" : 
                        "/contact"
                      } className="flex items-center justify-center">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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
              {['E-commerce', 'SaaS & Technology', 'Healthcare', 'Finance', 'Education', 'Professional Services', 'Real Estate', 'Home Services'].map((industry, index) => (
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
