import React from 'react';

const SEOProcess = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our SEO Process
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We follow a proven methodology to improve your search rankings and
            drive sustainable organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-xl font-bold text-resgato-purple">1</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">Research & Analysis</h3>
            <p className="text-gray-600">
              Comprehensive audit of your website, competitive landscape, and
              target keyword opportunities.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-xl font-bold text-resgato-purple">2</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">Strategy Development</h3>
            <p className="text-gray-600">
              Creation of a tailored SEO roadmap with specific recommendations
              and priorities.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-xl font-bold text-resgato-purple">3</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">Implementation</h3>
            <p className="text-gray-600">
              Executing on-page, technical, and content optimizations to improve
              search visibility.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-xl font-bold text-resgato-purple">4</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">Monitoring & Refinement</h3>
            <p className="text-gray-600">
              Continuous tracking of results and ongoing optimization to
              maximize performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
