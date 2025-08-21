import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-resgato-navy to-resgato-blue py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-4xl">
          Ready to Transform Your Utah Business with Expert PPC & Digital
          Marketing?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-base md:mb-8 md:text-xl">
          Get in touch with our Salt Lake City team of digital marketing experts
          today and discover how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-4">
          <Button
            asChild
            className="bg-white px-6 py-4 text-base text-resgato-navy hover:bg-gray-100 md:px-8 md:py-6 md:text-lg"
          >
            <Link to="/contact">
              Get a Free PPC Audit
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button
            asChild
            className="bg-resgato-purple px-6 py-4 text-base text-white hover:bg-resgato-deep-purple md:px-8 md:py-6 md:text-lg"
          >
            <Link to="/contact">
              Talk to a Utah Ads Expert
              <Calendar className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white bg-transparent px-6 py-4 text-base text-white hover:bg-white/10 md:px-8 md:py-6 md:text-lg"
          >
            <a href="tel:+18017421540">Call (801) 742-1540</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
