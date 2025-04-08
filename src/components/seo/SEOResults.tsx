import React from 'react';
import { Users, Target } from 'lucide-react';

const SEOResults = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Results You Can Expect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven SEO strategies have helped businesses of all sizes achieve significant growth in organic traffic and conversions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">More Visitors</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We identify relevant search keywords for your target demographic.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We optimize your website and online presence to maximize your potential for exposure.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We build out targeted content on your website to improve the traffic on your identified keywords.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">More Conversions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We help convert your new traffic into leads by creating compelling call-to-action's for the traffic.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">The new traffic will enter into your retargeting funnel and increase return on display advertising.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Your new content can increase PPC conversion rates and add more ammo to your content marketing strategies.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOResults;
