import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Mail, BarChart, Link as LinkIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/resgato-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png" 
          alt="Axio EV - Electric Vehicle Dealership Success Story" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-resgato-light-purple/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-resgato-light-purple text-resgato-deep-purple text-sm font-semibold mb-4">
              🚗 Featured Success Story: Axio EV
            </div>
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
                <Link to="/case-studies/axio-ev-case-study">View Success Story</Link>
              </Button>
            </div>
          </div>
          
          {/* Featured Case Study Card */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative h-64">
                <img 
                  src="/resgato-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png" 
                  alt="Axio EV - Electric Vehicle Dealership" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Axio EV</h3>
                  <p className="text-sm opacity-90">Electric Vehicle Dealership</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Complete Digital Transformation</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    85% increase in online leads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    300% growth in local search visibility
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Full business software implementation
                  </div>
                </div>
                <Button asChild className="w-full bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  <Link to="/case-studies/axio-ev-case-study">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
