import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import { Wrench, Globe, Server, Shield, Clock, Settings } from 'lucide-react'; 
import PageHelmet from '@/components/PageHelmet';

const ITSupport = () => {
  const itSupportFeatures = [
    {
      icon: <Globe className="h-6 w-6 text-resgato-purple" />,
      title: "Website Hosting",
      description: "Reliable, fast, and secure website hosting solutions with 99.9% uptime guarantee, daily backups, and 24/7 monitoring for your Utah business."
    },
    {
      icon: <Wrench className="h-6 w-6 text-resgato-purple" />,
      title: "Domain Management",
      description: "Complete domain registration, renewal, and management services to ensure your online presence remains secure and accessible."
    },
    {
      icon: <Settings className="h-6 w-6 text-resgato-purple" />,
      title: "Managed Services",
      description: "Comprehensive managed IT services including server management, security updates, performance optimization, and technical support."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Website Hosting & IT Services | Utah's Premier Hosting & IT Company | Resgato"
        description="Professional website hosting, domain management, and managed IT services in Utah. We provide reliable hosting, domain services, and comprehensive IT management to keep your business online and secure."
        canonicalUrl="/it-support"
      />
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="Website Hosting & IT Services"
          description="Keep your business online and secure with our comprehensive hosting and IT services. We provide reliable website hosting, domain management, and managed IT solutions for Utah businesses."
          image="/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={itSupportFeatures}
        />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ITSupport;
