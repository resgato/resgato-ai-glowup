
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SEOHero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">The SEO Agency</span> For You
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              SEO stands for search engine optimization, but you probably already knew that. In simple terms, it means the process of improving your site to increase its visibility on search engines.
            </p>
            <p className="text-lg text-gray-700 max-w-lg">
              With a strong SEO strategy, your business can own top keywords on Google and ultimately get organic traffic and more conversions from your website, at no cost in the future.
            </p>
            <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
              <Link to="/contact">
                Get a Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
  );
};

export default SEOHero;
