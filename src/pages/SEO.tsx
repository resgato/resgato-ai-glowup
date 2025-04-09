
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import SEOHero from '@/components/seo/SEOHero';
import SEOStrategy from '@/components/seo/SEOStrategy';
import SEOResults from '@/components/seo/SEOResults';
import SEOProcess from '@/components/seo/SEOProcess';
import PageHelmet from '@/components/PageHelmet';

const SEO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet title="SEO Services" description="Improve your search engine rankings and drive organic traffic with our expert SEO services. We optimize your website for search engines to increase visibility and drive conversions." /> 

      <Navbar />
      <main className="flex-grow">
        <SEOHero />
        <SEOStrategy />
        <SEOResults />
        <SEOProcess />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
