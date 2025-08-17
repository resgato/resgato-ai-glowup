import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Mail, BarChart, Link as LinkIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-resgato-light-purple/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Utah's Leading <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Digital Marketing Agency & SEO Firm</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              As a premier marketing firm in Salt Lake City, Resgato delivers comprehensive digital marketing solutions including SEO, PPC, content marketing, and strategic management services that drive measurable results for Utah businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white px-8 py-6 text-lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-resgato-purple text-resgato-purple hover:bg-resgato-light-purple px-8 py-6 text-lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
