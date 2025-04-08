
import React from 'react';
import { Helmet } from 'react-helmet';
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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Resgato | Leading Utah Marketing Agency & AI Solutions</title>
        <meta name="description" content="Resgato is Utah's premier digital marketing and AI agency. Our Utah-based team specializes in SEO, PPC, email marketing and AI consultancy services since 2012." />
        <meta name="keywords" content="Utah marketing agency, Utah AI agency, digital marketing Utah, SEO services Utah, PPC campaigns Utah, email marketing Utah" />
        <link rel="canonical" href="https://resgato.com" />
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
  );
};

export default Index;
