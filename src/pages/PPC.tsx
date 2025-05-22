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
  DollarSign
} from 'lucide-react';
import PlatformsWeSupport from '@/components/PlatformsWeSupport';
import FAQSection from '@/components/FAQSection';

const PPC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet 
        title="Utah PPC Agency | Google Ads & PPC Marketing Services | Resgato"
        description="Expert PPC management services in Utah. Drive targeted traffic and maximize ROI with our data-driven Google Ads and PPC marketing strategies."
        canonicalUrl="/ppc"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Utah's Premier PPC Agency</span> for Results-Driven Campaigns
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  Based in Salt Lake City, our Google Ads certified experts create high-performance PPC campaigns that deliver measurable ROI for Utah businesses.
                </p>
                <p className="text-xl text-gray-700 max-w-lg">
                  We've helped local Utah companies reduce their cost-per-acquisition by an average of 37% while increasing conversions through strategic PPC management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                    <Link to="/contact">
                      Get a Free PPC Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-resgato-purple text-resgato-purple hover:bg-resgato-light-purple">
                    <Link to="/contact">
                      Talk to a Utah Ads Expert
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Utah PPC Management Specialists</h2>
                <p className="text-gray-600 mb-6">Our data-focused approach ensures your ad spend delivers maximum returns and qualified leads within the Utah market.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Google Ads & Microsoft Advertising</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Landing Page Optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Conversion Tracking & Optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Remarketing & Audience Targeting</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Utah PPC Services That Drive Business Growth</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create and manage targeted campaigns that generate measurable results for businesses throughout Salt Lake City and all of Utah.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/20 rounded-lg p-8 shadow-md flex flex-col">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conversion-Focused PPC Management</h3>
                <p className="text-gray-700 mb-4">
                  Our Utah PPC campaigns are meticulously designed to maximize conversions, not just clicks.
                </p>
                <p className="text-gray-700 flex-grow">
                  We optimize every campaign element—from keyword selection to ad copy and landing pages—to ensure your ad spend generates qualified leads and sales. Our Utah-based PPC specialists understand the local market dynamics and consumer behavior, helping your business achieve optimal results.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/20 rounded-lg p-8 shadow-md flex flex-col">
                <div className="mb-6">
                  <LineChart className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data-Driven Strategy & Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We leverage advanced analytics to continuously refine your PPC campaigns for maximum ROI.
                </p>
                <p className="text-gray-700 flex-grow">
                  Our PPC team conducts regular performance analyses, A/B testing of ad creatives, and strategic bid adjustments to improve campaign effectiveness over time. By continuously optimizing based on data insights, we ensure your Utah business achieves the lowest possible cost per acquisition while maximizing conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Utah PPC Management Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to creating successful paid advertising campaigns for Utah businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-resgato-deep-purple">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Campaign Audit & Strategy</h3>
                <p className="text-gray-700">
                  We analyze your existing campaigns or develop a new strategy based on your Utah market, competitors, and business goals.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-resgato-deep-purple">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ad Creative Development</h3>
                <p className="text-gray-700">
                  Our team creates compelling ad copy and designs that resonate with your Utah audience and drive high-quality clicks.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-resgato-deep-purple">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">A/B Testing & Optimization</h3>
                <p className="text-gray-700">
                  We continuously test different ad variations, landing pages, and targeting options to improve campaign performance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-resgato-deep-purple">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Reporting & Strategic Refinement</h3>
                <p className="text-gray-700">
                  Regular performance reports and strategy sessions ensure your PPC campaigns continue to evolve and improve over time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Image Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Utah's Most Trusted PPC Specialists</h2>
                <p className="text-lg text-gray-700">
                  Our team of Google Ads certified PPC experts in Salt Lake City has years of experience delivering successful campaigns for Utah businesses across multiple industries.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Google Ads & Microsoft Advertising certified strategists</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Specialized knowledge of the Utah market and consumer behavior</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Experienced in campaign management across diverse industries</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/resgato-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png" 
                  alt="Utah PPC experts at Resgato" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-[#7D9872]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Utah PPC Management Process</h2>
              <p className="text-xl max-w-3xl mx-auto">
                A proven approach that delivers results for businesses throughout Utah.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Step 1: Consultation & Planning</h3>
                <p className="mb-4 text-lg">Understanding your Utah business needs</p>
                <p className="text-md">
                  We begin with a comprehensive analysis of your business, competitors, and the Utah market to develop a tailored PPC strategy aligned with your specific goals and target audience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Step 2: Campaign Creation</h3>
                <p className="mb-4 text-lg">Building your Utah-focused campaigns</p>
                <p className="text-md">
                  Our team expertly builds your campaigns with meticulous attention to keyword research, ad copy development, and landing page optimization designed to convert Utah customers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Step 3: Optimization & Scaling</h3>
                <p className="mb-4 text-lg">Continuous improvement and growth</p>
                <p className="text-md">
                  We continuously monitor, analyze, and refine your campaigns based on performance data, implementing strategic adjustments to maximize ROI and scale your success in the Utah market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Utah PPC Performance Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our campaigns consistently deliver impressive results for Utah businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">37%</h3>
                <p className="text-center text-gray-600">Average reduction in cost per acquisition for our Utah clients</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <TrendingUp className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">64%</h3>
                <p className="text-center text-gray-600">Increase in conversion rate for Utah businesses through our optimization</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <DollarSign className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">185%</h3>
                <p className="text-center text-gray-600">Average return on ad spend (ROAS) for Utah PPC campaigns</p>
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
