
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Search, ArrowRight, BarChart, LineChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">SEO Services</span> That Drive Real Growth
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  Essential optimization for brands of all sizes with an online presence. Our expert SEO services help businesses get started in the right direction with sustainable growth strategies.
                </p>
                <Button className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  Get a Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Search className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Comprehensive SEO Solutions</h2>
                <p className="text-gray-600 mb-6">Our data-driven approach focuses on what matters most: driving qualified traffic that converts into customers.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Keyword Research & Strategy</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">On-Page SEO Optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Technical SEO & Site Structure</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Content Strategy & Creation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to improve your search rankings and drive sustainable organic growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Research & Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive audit of your website, competitive landscape, and target keyword opportunities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                <p className="text-gray-600">
                  Creation of a tailored SEO roadmap with specific recommendations and priorities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Executing on-page, technical, and content optimizations to improve search visibility.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Monitoring & Refinement</h3>
                <p className="text-gray-600">
                  Continuous tracking of results and ongoing optimization to maximize performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Real Businesses</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our SEO strategies have helped businesses of all sizes achieve significant growth in organic traffic and conversions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <TrendingUp className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">215%</h3>
                <p className="text-center text-gray-600">Average increase in organic traffic for our clients within 6 months</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <BarChart className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">78%</h3>
                <p className="text-center text-gray-600">Improvement in search engine rankings for target keywords</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <LineChart className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">43%</h3>
                <p className="text-center text-gray-600">Increase in conversion rates from organic search traffic</p>
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

export default SEO;
