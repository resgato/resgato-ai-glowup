
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceHero from '@/components/services/ServiceHero';
import CoreServices from '@/components/services/CoreServices';
import AdditionalServices from '@/components/services/AdditionalServices';
import ProcessSection from '@/components/services/ProcessSection';
import { ArrowUpRight, Zap, BarChart3, TrendingUp, Lightbulb } from 'lucide-react';
import PageHelmet from '@/components/PageHelmet';
const Services = () => {
  const servicesFeatures = [
    {
      icon: <Zap className="h-6 w-6 text-resgato-purple" />,
      title: "AI-Powered Solutions",
      description: "Leverage the latest in artificial intelligence to optimize your marketing efforts and improve ROI."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-resgato-purple" />,
      title: "Data-Driven Strategies",
      description: "Make informed decisions based on comprehensive analytics and actionable insights."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-resgato-purple" />,
      title: "Growth-Focused Campaigns",
      description: "Accelerate your business growth with targeted campaigns designed to increase conversions."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-resgato-purple" />,
      title: "Innovative Approaches",
      description: "Stay ahead of the competition with cutting-edge marketing techniques and technologies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet title="Digital Marketing & AI Services" description="Discover how our AI-powered marketing solutions can help your business achieve exceptional results." />
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="Our AI Marketing Services"
          description="Discover how our AI-powered marketing solutions can help your business achieve exceptional results."
          image="/lovable-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={servicesFeatures}
        />
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
