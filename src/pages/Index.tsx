import React from 'react';
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
        title="Resgato | Utah's #1 Digital Marketing Agency in Salt Lake City | SEO & PPC Experts"
        description="Utah's premier digital marketing agency in Salt Lake City. Expert SEO, PPC, and AI solutions that drive measurable growth. Get a free consultation with our certified marketing specialists."
        canonicalUrl="/"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">Resgato | Utah's Premier Digital Marketing Agency in Salt Lake City</h1>
        <HeroSection />
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
