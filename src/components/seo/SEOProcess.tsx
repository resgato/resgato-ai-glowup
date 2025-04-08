
import React from 'react';

const SEOProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to improve your search rankings and drive sustainable organic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-resgato-purple font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Research & Analysis</h3>
            <p className="text-gray-600">
              Comprehensive audit of your website, competitive landscape, and target keyword opportunities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-resgato-purple font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
            <p className="text-gray-600">
              Creation of a tailored SEO roadmap with specific recommendations and priorities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-resgato-purple font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Implementation</h3>
            <p className="text-gray-600">
              Executing on-page, technical, and content optimizations to improve search visibility.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-resgato-purple font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Monitoring & Refinement</h3>
            <p className="text-gray-600">
              Continuous tracking of results and ongoing optimization to maximize performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
