
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import PlatformsWeSupport from '@/components/PlatformsWeSupport';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Resgato | Leading Salt Lake City Marketing Agency & Utah PPC Services</title>
          <meta name="description" content="Resgato is a premier digital marketing agency in Salt Lake City, offering SEO, PPC, SEM services and digital strategy consulting for Utah businesses." />
          <meta name="keywords" content="salt lake city marketing agencies, utah ppc agency, digital marketing agency salt lake city, utah sem companies, salt lake city ppc agency, digital strategy consulting salt lake city, utah ppc consultant, marketing firms in utah" />
          <link rel="canonical" href="https://resgato.com" />
          <link rel="sitemap" type="application/xml" href="https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/generate-sitemap" />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Resgato Digital Marketing",
              "description": "Premier digital marketing agency in Salt Lake City, Utah specializing in PPC, SEO, and digital strategy",
              "url": "https://resgato.com",
              "logo": "https://resgato.com/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Salt Lake City",
                "addressRegion": "UT",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7608,
                "longitude": -111.8910
              },
              "telephone": "+1-801-555-0123",
              "sameAs": [
                "https://www.facebook.com/resgatodigital",
                "https://www.linkedin.com/company/resgato-digital",
                "https://twitter.com/resgatodigital"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "priceRange": "$$"
            }
          `}</script>
        </Helmet>
        
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <ServicesSection />
          <PlatformsWeSupport />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
