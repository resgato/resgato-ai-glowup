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
        title="Resgato | Local SEO & SMB Marketing Agency | AI Marketing Services & Fast Web Development"
        description="Resgato specializes in local SEO, SMB marketing, and AI marketing services. Fast, full-service web development for retail, automotive, home services, powersports, apps and more. Get a free consultation today."
        canonicalUrl="/"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">
          Resgato | Local SEO & SMB Marketing Agency | AI Marketing Services
        </h1>
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
