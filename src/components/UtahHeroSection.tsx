import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Mail,
  BarChart,
  Link as LinkIcon,
} from 'lucide-react';

const UtahHeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-resgato-light-purple/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in space-y-4 md:space-y-8">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Utah's Leading{' '}
              <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                Digital Marketing Agency in Salt Lake City
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-700">
              As Utah's premier marketing agency in Salt Lake City, Resgato
              delivers comprehensive digital marketing solutions including local
              SEO, PPC, content marketing, and AI services that drive measurable
              results for Utah businesses across retail, automotive, home
              services, and more throughout Salt Lake City.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="bg-resgato-purple px-8 py-6 text-lg text-white hover:bg-resgato-deep-purple"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-resgato-purple px-8 py-6 text-lg text-resgato-purple hover:bg-resgato-light-purple"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtahHeroSection;
