import React from 'react';
import { Users, Target } from 'lucide-react';

const SEOResults = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Results You Can Expect
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our proven SEO strategies have helped businesses of all sizes
            achieve significant growth in organic traffic and conversions.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <div className="mb-6 flex items-center justify-center">
              <Users className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="mb-6 text-center text-2xl font-bold">
              More Visitors
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We identify relevant search keywords for your target
                  demographic.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We optimize your website and online presence to maximize your
                  potential for exposure.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We build out targeted content on your website to improve the
                  traffic on your identified keywords.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <div className="mb-6 flex items-center justify-center">
              <Target className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="mb-6 text-center text-2xl font-bold">
              More Conversions
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  We help convert your new traffic into leads by creating
                  compelling call-to-action's for the traffic.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  The new traffic will enter into your retargeting funnel and
                  increase return on display advertising.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-resgato-purple p-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Your new content can increase PPC conversion rates and add
                  more ammo to your content marketing strategies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOResults;
