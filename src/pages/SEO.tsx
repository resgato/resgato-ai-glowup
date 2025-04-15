
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
        title="Salt Lake City SEO Services" 
        description="Resgato offers expert SEO services in Salt Lake City. Improve your search engine rankings, drive organic traffic, and increase conversions with our Utah SEO specialists." 
        keywords="utah sem services, salt lake city seo agency, salt lake city digital marketing agency, seo services utah, local seo salt lake city"
        canonicalUrl="/seo"
      /> 

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
