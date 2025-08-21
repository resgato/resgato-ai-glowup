import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import { Code, Smartphone, Globe, Zap, Shield, Palette } from 'lucide-react';
import PageHelmet from '@/components/PageHelmet';

const WebsiteDevelopment = () => {
  const websiteDevelopmentFeatures = [
    {
      icon: <Code className="h-6 w-6 text-resgato-purple" />,
      title: 'Custom Website Development',
      description:
        'Tailored website solutions built with modern technologies to meet your specific business needs and goals.',
    },
    {
      icon: <Smartphone className="h-6 w-6 text-resgato-purple" />,
      title: 'Responsive Design',
      description:
        'Mobile-first design approach ensuring your website looks and functions perfectly across all devices and screen sizes.',
    },
    {
      icon: <Globe className="h-6 w-6 text-resgato-purple" />,
      title: 'E-commerce Solutions',
      description:
        'Complete online store development with secure payment processing, inventory management, and customer experience optimization.',
    },
    {
      icon: <Zap className="h-6 w-6 text-resgato-purple" />,
      title: 'Performance Optimization',
      description:
        'Lightning-fast loading speeds and optimized performance to improve user experience and search engine rankings.',
    },
    {
      icon: <Shield className="h-6 w-6 text-resgato-purple" />,
      title: 'Security & Maintenance',
      description:
        'Ongoing security updates, backups, and maintenance to keep your website secure and running smoothly.',
    },
    {
      icon: <Palette className="h-6 w-6 text-resgato-purple" />,
      title: 'UI/UX Design',
      description:
        'User-centered design that creates intuitive, engaging experiences that convert visitors into customers.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Website Development Services | Utah's Top Web Development Agency | Resgato"
        description="Professional website development services in Utah. We create custom, responsive websites that drive conversions and grow your business. Get a modern, fast, and secure website."
        canonicalUrl="/website-development"
      />
      <Navbar />
      <main className="flex-grow">
        <ServiceHero
          title="Website Development Services"
          description="Build a powerful online presence with our expert website development services. We create custom, responsive websites that drive results for Utah businesses."
          image="/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={websiteDevelopmentFeatures}
        />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
