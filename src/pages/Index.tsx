import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Resgato | Leading Utah Marketing Agency & AI Solutions</title>
          <meta name="description" content="Resgato delivers innovative digital marketing solutions with creative strategy, cutting-edge technology, and a passion for brand growth." />
          <meta name="keywords" content="Utah marketing agency, Utah AI agency, digital marketing Utah, SEO services Utah, PPC campaigns Utah, email marketing Utah" />
          <link rel="canonical" href="https://resgato.com" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        </Helmet>
        
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
