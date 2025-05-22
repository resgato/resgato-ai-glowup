import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import PlatformsWeSupport from '@/components/PlatformsWeSupport';
import PageHelmet from '@/components/PageHelmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet 
        title="Resgato | Leading Salt Lake City Marketing Agency & Utah PPC Services"
        description="Utah's premier digital marketing and AI agency specializing in SEO, PPC, and AI solutions. Drive growth with our data-driven strategies and expert team."
        canonicalUrl="/"
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="inline-block bg-resgato-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-resgato-blue/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <PlatformsWeSupport />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
