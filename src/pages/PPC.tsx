import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import PageHelmet from '@/components/PageHelmet';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart,
  Target,
  LineChart,
  Calendar,
  Settings,
  Rocket,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
import PlatformsWeSupport from '@/components/PlatformsWeSupport';
import FAQSection from '@/components/FAQSection';

const PPC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Utah PPC Services | Expert Google Ads Management | Salt Lake City's Top PPC Agency"
        description="Expert PPC management services in Utah. Drive targeted traffic and maximize ROI with our data-driven Google Ads and PPC marketing strategies."
        canonicalUrl="/ppc"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">
          Utah PPC Services | Salt Lake City PPC Agency
        </h1>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                    Utah's Premier PPC Agency
                  </span>{' '}
                  for Results-Driven Campaigns
                </h1>
                <p className="max-w-lg text-xl text-gray-700">
                  Based in Salt Lake City, our Google Ads certified experts
                  create high-performance PPC campaigns that deliver measurable
                  ROI for Utah businesses.
                </p>
                <p className="max-w-lg text-xl text-gray-700">
                  We've helped local Utah companies reduce their
                  cost-per-acquisition by an average of 37% while increasing
                  conversions through strategic PPC management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-resgato-purple text-white hover:bg-resgato-deep-purple"
                  >
                    <Link to="/contact">
                      Get a Free PPC Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-resgato-purple text-resgato-purple hover:bg-resgato-light-purple"
                  >
                    <Link to="/contact">Talk to a Utah Ads Expert</Link>
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <BarChart className="h-8 w-8 text-resgato-deep-purple" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  Utah PPC Management Specialists
                </h2>
                <p className="mb-6 text-gray-600">
                  Our data-focused approach ensures your ad spend delivers
                  maximum returns and qualified leads within the Utah market.
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
                      Google Ads & Microsoft Advertising
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
                    <p className="text-gray-700">Landing Page Optimization</p>
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
                      Conversion Tracking & Optimization
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
                      Remarketing & Audience Targeting
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Utah PPC Services That Drive Business Growth
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                We create and manage targeted campaigns that generate measurable
                results for businesses throughout Salt Lake City and all of
                Utah.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
              <div className="flex flex-col rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/20 p-8 shadow-md">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Conversion-Focused PPC Management
                </h3>
                <p className="mb-4 text-gray-700">
                  Our Utah PPC campaigns are meticulously designed to maximize
                  conversions, not just clicks.
                </p>
                <p className="flex-grow text-gray-700">
                  We optimize every campaign element—from keyword selection to
                  ad copy and landing pages—to ensure your ad spend generates
                  qualified leads and sales. Our Utah-based PPC specialists
                  understand the local market dynamics and consumer behavior,
                  helping your business achieve optimal results.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/20 p-8 shadow-md">
                <div className="mb-6">
                  <LineChart className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Data-Driven Strategy & Optimization
                </h3>
                <p className="mb-4 text-gray-700">
                  We leverage advanced analytics to continuously refine your PPC
                  campaigns for maximum ROI.
                </p>
                <p className="flex-grow text-gray-700">
                  Our PPC team conducts regular performance analyses, A/B
                  testing of ad creatives, and strategic bid adjustments to
                  improve campaign effectiveness over time. By continuously
                  optimizing based on data insights, we ensure your Utah
                  business achieves the lowest possible cost per acquisition
                  while maximizing conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Utah PPC Management Process
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A systematic approach to creating successful paid advertising
                campaigns for Utah businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="font-bold text-resgato-deep-purple">1</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Campaign Audit & Strategy
                </h3>
                <p className="text-gray-700">
                  We analyze your existing campaigns or develop a new strategy
                  based on your Utah market, competitors, and business goals.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="font-bold text-resgato-deep-purple">2</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Ad Creative Development
                </h3>
                <p className="text-gray-700">
                  Our team creates compelling ad copy and designs that resonate
                  with your Utah audience and drive high-quality clicks.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="font-bold text-resgato-deep-purple">3</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  A/B Testing & Optimization
                </h3>
                <p className="text-gray-700">
                  We continuously test different ad variations, landing pages,
                  and targeting options to improve campaign performance.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="font-bold text-resgato-deep-purple">4</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Reporting & Strategic Refinement
                </h3>
                <p className="text-gray-700">
                  Regular performance reports and strategy sessions ensure your
                  PPC campaigns continue to evolve and improve over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Image Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Utah's Most Trusted PPC Specialists
                </h2>
                <p className="text-lg text-gray-700">
                  Our team of Google Ads certified PPC experts in Salt Lake City
                  has years of experience delivering successful campaigns for
                  Utah businesses across multiple industries.
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
                      Google Ads & Microsoft Advertising certified strategists
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
                      Specialized knowledge of the Utah market and consumer
                      behavior
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
                      Experienced in campaign management across diverse
                      industries
                    </p>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/resgato-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png"
                  alt="Utah PPC experts at Resgato"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-[#7D9872] py-16">
          <div className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Utah PPC Management Process
              </h2>
              <p className="mx-auto max-w-3xl text-xl">
                A proven approach that delivers results for businesses
                throughout Utah.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Step 1: Consultation & Planning
                </h3>
                <p className="mb-4 text-lg">
                  Understanding your Utah business needs
                </p>
                <p className="text-md">
                  We begin with a comprehensive analysis of your business,
                  competitors, and the Utah market to develop a tailored PPC
                  strategy aligned with your specific goals and target audience.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Step 2: Campaign Creation
                </h3>
                <p className="mb-4 text-lg">
                  Building your Utah-focused campaigns
                </p>
                <p className="text-md">
                  Our team expertly builds your campaigns with meticulous
                  attention to keyword research, ad copy development, and
                  landing page optimization designed to convert Utah customers.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Step 3: Optimization & Scaling
                </h3>
                <p className="mb-4 text-lg">
                  Continuous improvement and growth
                </p>
                <p className="text-md">
                  We continuously monitor, analyze, and refine your campaigns
                  based on performance data, implementing strategic adjustments
                  to maximize ROI and scale your success in the Utah market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Utah PPC Performance Results
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Our campaigns consistently deliver impressive results for Utah
                businesses across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="mb-2 text-center text-3xl font-bold">37%</h3>
                <p className="text-center text-gray-600">
                  Average reduction in cost per acquisition for our Utah clients
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="mb-2 text-center text-3xl font-bold">64%</h3>
                <p className="text-center text-gray-600">
                  Increase in conversion rate for Utah businesses through our
                  optimization
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center justify-center">
                  <DollarSign className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="mb-2 text-center text-3xl font-bold">185%</h3>
                <p className="text-center text-gray-600">
                  Average return on ad spend (ROAS) for Utah PPC campaigns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Platforms We Support */}
        <PlatformsWeSupport />

        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PPC;
