
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import { Trophy, Target, BarChart3, Users } from 'lucide-react';
import PageHelmet from '@/components/PageHelmet';
import { Link } from 'react-router-dom';

const UtahMarketingFirms = () => {
  const marketingFirmsFeatures = [
    {
      icon: <Trophy className="h-6 w-6 text-resgato-purple" />,
      title: "Award-Winning Utah Marketing",
      description: "Join Salt Lake City businesses achieving remarkable growth with our acclaimed digital marketing strategies."
    },
    {
      icon: <Target className="h-6 w-6 text-resgato-purple" />,
      title: "Targeted Local Campaigns",
      description: "Custom marketing solutions designed specifically for the unique Utah business landscape and local consumer behavior."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-resgato-purple" />,
      title: "Data-Driven Results",
      description: "We leverage advanced analytics to deliver measurable ROI and continuous performance improvement for Utah companies."
    },
    {
      icon: <Users className="h-6 w-6 text-resgato-purple" />,
      title: "Utah's Leading Digital Team",
      description: "Work with Salt Lake City's most experienced marketing professionals with deep local market knowledge."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Top Marketing Firms in Utah | Salt Lake City Digital Marketing Agency" 
        description="Partner with one of the leading marketing firms in Utah. Resgato delivers results-driven digital marketing, SEO, and advertising services in Salt Lake City and beyond." 
        keywords="marketing firms in utah, utah marketing firms, salt lake city marketing agency, digital marketing agency utah, seo utah, ad agency salt lake city, marketing utah"
        canonicalUrl="/utah-marketing-firms"
      />
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="Utah's Premier Marketing Firm"
          description="Resgato is one of the top-rated marketing firms in Utah, specializing in digital marketing, SEO, and advertising for Salt Lake City businesses and beyond."
          image="/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png"
          features={marketingFirmsFeatures}
        />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-resgato-navy">Why Choose Resgato Among Marketing Firms in Utah?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As a leading digital marketing agency in Salt Lake City, we combine industry expertise with local market insights to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-resgato-navy">Digital Marketing Excellence</h3>
                <p className="text-gray-700 mb-6">
                  Our Salt Lake City digital marketing team specializes in creating comprehensive strategies that drive business growth. From content creation to conversion optimization, we handle every aspect of your online presence.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Strategic marketing planning for Utah businesses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Brand development and positioning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Content marketing and social media management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-resgato-navy">Utah SEO & Ad Agency Services</h3>
                <p className="text-gray-700 mb-6">
                  Our specialized SEO and advertising services help Salt Lake City businesses increase visibility and attract more qualified leads through targeted campaigns.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Local SEO for Utah businesses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">PPC and paid social media campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-resgato-purple">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Conversion rate optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-resgato-navy">Serving Businesses Throughout Utah</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 py-4 px-6 rounded-lg">
                  <p className="font-medium">Salt Lake City</p>
                </div>
                <div className="bg-gray-100 py-4 px-6 rounded-lg">
                  <p className="font-medium">Provo</p>
                </div>
                <div className="bg-gray-100 py-4 px-6 rounded-lg">
                  <p className="font-medium">Ogden</p>
                </div>
                <div className="bg-gray-100 py-4 px-6 rounded-lg">
                  <p className="font-medium">Park City</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-resgato-navy">Our Utah Marketing Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive marketing solutions designed for Utah businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-resgato-navy">Digital Marketing</h3>
                <p className="text-gray-700 mb-4">Comprehensive digital marketing strategies tailored to your Utah business goals.</p>
                <Link to="/services" className="text-resgato-purple hover:text-resgato-deep-purple font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-resgato-navy">SEO Services</h3>
                <p className="text-gray-700 mb-4">Boost your visibility in Utah and beyond with our expert SEO strategies.</p>
                <Link to="/seo" className="text-resgato-purple hover:text-resgato-deep-purple font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-resgato-navy">PPC & Advertising</h3>
                <p className="text-gray-700 mb-4">Drive immediate traffic and leads with targeted paid advertising campaigns.</p>
                <Link to="/ppc" className="text-resgato-purple hover:text-resgato-deep-purple font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default UtahMarketingFirms;
