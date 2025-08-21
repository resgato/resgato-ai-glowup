import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SEOHero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                Salt Lake City's Premier
              </span>{' '}
              SEO & SEM Agency
            </h1>
            <p className="max-w-lg text-xl text-gray-700">
              Resgato provides expert SEO and SEM services to businesses
              throughout Utah. Our data-driven approach helps you dominate
              search results and drive valuable organic traffic.
            </p>
            <p className="max-w-lg text-lg text-gray-700">
              As a leading digital marketing agency in Salt Lake City, we craft
              customized SEO strategies that help your business own top keywords
              on Google and ultimately generate more leads and sales from your
              website.
            </p>
            <Button
              asChild
              className="bg-resgato-purple text-white hover:bg-resgato-deep-purple"
            >
              <Link to="/contact">
                Get a Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="animate-fade-in rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
              <Search className="h-8 w-8 text-resgato-deep-purple" />
            </div>
            <h2 className="mb-4 text-2xl font-bold">
              Utah SEM & SEO Solutions
            </h2>
            <p className="mb-6 text-gray-600">
              Our data-driven approach focuses on what matters most: driving
              qualified traffic that converts into customers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
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
                  Salt Lake City Keyword Research & Strategy
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
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
                <p className="text-gray-700">Local SEO for Utah Businesses</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
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
                  Technical SEO & Site Optimization
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
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
                  Utah SEM & PPC Campaign Management
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;
