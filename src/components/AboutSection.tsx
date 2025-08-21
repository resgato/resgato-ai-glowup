import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="section-title">About Resgato</h2>
          <p className="mb-4 text-base text-gray-700 md:mb-6 md:text-lg">
            Resgato is a premier digital marketing agency specializing in local
            SEO, SMB marketing, and AI marketing services. We combine expert
            SEO, PPC, and content marketing strategies with fast, full-service
            web development to drive exceptional results for businesses across
            retail, automotive, home services, powersports, apps and more.
          </p>
          <p className="mb-4 text-base text-gray-700 md:mb-6 md:text-lg">
            Our team specializes in creating targeted campaigns that maximize
            ROI while our AI marketing experts leverage cutting-edge technology
            to optimize performance. With our integrated digital marketing
            solutions, we provide end-to-end management of your online presence,
            ensuring consistent brand messaging and optimal performance across
            all channels.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="bg-resgato-purple text-white hover:bg-resgato-deep-purple"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="space-y-3 md:space-y-6">
            <div className="rounded-lg bg-resgato-light-purple p-4 md:p-6">
              <h3 className="mb-1 text-lg font-semibold md:mb-2 md:text-xl">
                Our Mission
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                To be the most trusted partner for local SEO and SMB marketing,
                delivering innovative AI-powered solutions and fast web
                development that drive measurable business growth through expert
                management and strategic planning.
              </p>
            </div>
            <div className="rounded-lg bg-resgato-light-purple p-4 md:p-6">
              <h3 className="mb-1 text-lg font-semibold md:mb-2 md:text-xl">
                Our Vision
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                To revolutionize local SEO and SMB marketing by combining
                cutting-edge AI strategies with fast, full-service web
                development that consistently delivers exceptional ROI for
                businesses across diverse industries.
              </p>
            </div>
          </div>
          <div className="mt-3 space-y-3 sm:mt-6 md:mt-12 md:space-y-6">
            <div className="rounded-lg bg-resgato-light-purple p-4 md:p-6">
              <h3 className="mb-1 text-lg font-semibold md:mb-2 md:text-xl">
                Our Values
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 md:space-y-2 md:text-base">
                <li>Results-Driven</li>
                <li>Transparency</li>
                <li>Innovation</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div className="rounded-lg bg-resgato-light-purple p-4 md:p-6">
              <h3 className="mb-1 text-lg font-semibold md:mb-2 md:text-xl">
                Our Approach
              </h3>
              <p className="text-sm text-gray-700 md:text-base">
                Comprehensive local SEO and SMB marketing with AI-powered
                insights, strategic content creation, and fast web development
                that maximizes your marketing investment and drives sustainable
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
