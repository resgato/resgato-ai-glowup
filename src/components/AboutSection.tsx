import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div>
          <h2 className="section-title">About Resgato</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            As a leading marketing firm and digital marketing agency in Utah, Resgato combines expert SEO, PPC, and content marketing strategies with professional management services to drive exceptional results. Our comprehensive approach to online marketing has helped businesses across Salt Lake City achieve sustainable growth and market leadership.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Our ad agency team specializes in creating and managing targeted campaigns that maximize ROI while our content marketing experts craft compelling narratives that engage your audience. With our integrated digital marketing solutions, we provide end-to-end management of your online presence, ensuring consistent brand messaging and optimal performance across all channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="space-y-3 md:space-y-6">
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-700">
                To be Utah's most trusted digital marketing agency, delivering innovative SEO, PPC, and content marketing solutions that drive measurable business growth through expert management and strategic planning.
              </p>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-700">
                To revolutionize online marketing in Utah by combining cutting-edge digital strategies with expert management services that consistently deliver exceptional ROI for our clients.
              </p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-6 mt-3 sm:mt-6 md:mt-12">
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Values</h3>
              <ul className="text-sm md:text-base text-gray-700 list-disc list-inside space-y-1 md:space-y-2">
                <li>Results-Driven</li>
                <li>Transparency</li>
                <li>Innovation</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Approach</h3>
              <p className="text-sm md:text-base text-gray-700">
                Comprehensive digital marketing management with a focus on SEO optimization, strategic content creation, and data-driven PPC campaigns that maximize your marketing investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
