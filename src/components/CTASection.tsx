
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Digital Marketing Strategy?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Get in touch with our team of digital marketing experts today and discover how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild className="bg-white text-resgato-deep-purple hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">
              Schedule a Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
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
