import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UtahHeroSection from '@/components/UtahHeroSection';
import UtahServicesSection from '@/components/UtahServicesSection';
import UtahAboutSection from '@/components/UtahAboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import PlatformsWeSupport from '@/components/PlatformsWeSupport';
import PageHelmet from '@/components/PageHelmet';

const UtahMarketingAgency = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Utah Marketing Agency | Salt Lake City Digital Marketing Experts | SEO & PPC Services"
        description="Utah's leading marketing agency in Salt Lake City. Specialized in local business growth with proven SEO, PPC, and digital marketing strategies. Get your free marketing audit today."
        canonicalUrl="/utahmarketingagency"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">
          Utah Marketing Agency | Salt Lake City's Premier Digital Marketing
          Company
        </h1>
        <UtahHeroSection />
        <StatsSection />
        <UtahAboutSection />
        <UtahServicesSection />
        <PlatformsWeSupport />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default UtahMarketingAgency;
