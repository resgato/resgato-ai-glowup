
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">About Resgato</h2>
          <p className="text-lg text-gray-700 mb-6">
            Resgato is a leading AI Marketing Consultancy that helps businesses harness the power of artificial intelligence to transform their marketing strategies. We combine cutting-edge AI technologies with deep marketing expertise to deliver exceptional results for our clients.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experienced consultants works closely with each client to understand their unique challenges and objectives, developing customized AI marketing solutions that drive growth, increase efficiency, and maximize ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-resgato-light-purple rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with AI-driven marketing strategies that drive meaningful results and sustainable growth.
              </p>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in AI marketing innovation, setting new standards of excellence in the industry.
              </p>
            </div>
          </div>
          <div className="space-y-6 mt-6 sm:mt-12">
            <div className="bg-resgato-light-purple rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Collaboration</li>
                <li>Excellence</li>
              </ul>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-gray-700">
                Data-driven, client-focused, and results-oriented to ensure maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
