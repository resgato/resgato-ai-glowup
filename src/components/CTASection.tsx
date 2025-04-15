
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-resgato-navy to-resgato-blue text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Ready to Transform Your Utah Business with Expert PPC & Digital Marketing?
        </h2>
        <p className="text-base md:text-xl max-w-2xl mx-auto mb-6 md:mb-8">
          Get in touch with our Salt Lake City team of digital marketing experts today and discover how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
          <Button asChild className="bg-white text-resgato-navy hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
            <Link to="/contact">
              Get a Free PPC Audit
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button asChild className="bg-resgato-purple text-white hover:bg-resgato-deep-purple px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
            <Link to="/contact">
              Talk to a Utah Ads Expert
              <Calendar className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
            <a href="tel:+18017421540">
              Call (801) 742-1540
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
