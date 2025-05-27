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
      <PageHelmet 
        title="Utah SEO Services | #1 Local SEO Agency in Salt Lake City | Resgato"
        description="Expert SEO services in Utah that boost your local search rankings. Our data-driven approach helps Salt Lake City businesses increase organic traffic and generate more qualified leads."
        keywords="utah sem services, salt lake city seo agency, salt lake city digital marketing agency, seo services utah, local seo salt lake city"
        canonicalUrl="/seo"
      /> 

      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">Utah SEO Services | Salt Lake City SEO Agency</h1>
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
