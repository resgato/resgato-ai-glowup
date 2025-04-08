
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHero from '@/components/services/ServiceHero';
import CoreServices from '@/components/services/CoreServices';
import AdditionalServices from '@/components/services/AdditionalServices';
import ProcessSection from '@/components/services/ProcessSection';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero />
        <CoreServices />
        <AdditionalServices />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
