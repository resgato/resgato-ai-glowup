import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import { CalendarDays, FileText, PenTool, BarChart } from 'lucide-react'; 
import PageHelmet from '@/components/PageHelmet';

const ContentStrategy = () => {
  const contentStrategyFeatures = [
    {
      icon: <CalendarDays className="h-6 w-6 text-resgato-purple" />,
      title: "Content Calendar Planning",
      description: "Strategic planning of your content schedule to maintain consistency and maximize impact across all channels."
    },
    {
      icon: <FileText className="h-6 w-6 text-resgato-purple" />,
      title: "Content Creation",
      description: "Professional creation of engaging blog posts, articles, whitepapers, and other content formats tailored to your audience."
    },
    {
      icon: <PenTool className="h-6 w-6 text-resgato-purple" />,
      title: "Content Optimization",
      description: "Enhancement of existing content to improve SEO performance, readability, and conversion rates."
    },
    {
      icon: <BarChart className="h-6 w-6 text-resgato-purple" />,
      title: "Performance Analysis",
      description: "Detailed analysis of content performance metrics to continuously refine your content strategy."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Content Strategy Services | Utah Content Marketing Agency"
        description="Drive engagement and conversions with our expert content strategy services. We create compelling, SEO-optimized content that resonates with your Utah audience and achieves your business goals."
        canonicalUrl="/content-strategy"
      />
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="Content Strategy Services"
          description="Develop a comprehensive content strategy that engages your audience, supports your SEO efforts, and drives conversions."
          image="/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={contentStrategyFeatures}
        />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ContentStrategy;
