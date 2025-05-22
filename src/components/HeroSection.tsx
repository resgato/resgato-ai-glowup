import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Mail, BarChart, Link as LinkIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Utah's Leading <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Digital Marketing Agency & SEO Firm</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              As a premier marketing firm in Salt Lake City, Resgato delivers comprehensive digital marketing solutions including SEO, PPC, content marketing, and strategic management services that drive measurable results for Utah businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white px-8 py-6 text-lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-resgato-purple text-resgato-purple hover:bg-resgato-light-purple px-8 py-6 text-lg">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 animate-fade-in">
            <Link 
              to="/seo" 
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-slide-up animate-delay-100 transition-transform hover:scale-105"
            >
              <div className="bg-resgato-light-purple w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Search className="text-resgato-deep-purple h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Salt Lake City SEO Services</h3>
              <p className="text-sm sm:text-base text-gray-600">Expert SEO management and optimization for Utah businesses seeking online growth.</p>
            </Link>
            <Link 
              to="/ppc" 
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-slide-up animate-delay-200 transition-transform hover:scale-105"
            >
              <div className="bg-resgato-light-purple w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <BarChart className="text-resgato-deep-purple h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Utah PPC & Google Ads Services</h3>
              <p className="text-sm sm:text-base text-gray-600">Professional ad agency services with proven ROI and conversion optimization.</p>
            </Link>
            <Link 
              to="/email-marketing" 
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-slide-up animate-delay-300 transition-transform hover:scale-105"
            >
              <div className="bg-resgato-light-purple w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Mail className="text-resgato-deep-purple h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Email Marketing</h3>
              <p className="text-sm sm:text-base text-gray-600">Personalized campaigns that engage Utah customers.</p>
            </Link>
            <Link 
              to="/strategic-consulting" 
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-slide-up animate-delay-400 transition-transform hover:scale-105"
            >
              <div className="bg-resgato-light-purple w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <LinkIcon className="text-resgato-deep-purple h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Digital Strategy Consulting</h3>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive online marketing management and strategic planning for Salt Lake City businesses.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
