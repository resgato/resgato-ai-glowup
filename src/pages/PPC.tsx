
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { BarChart, ArrowRight, LineChart, Target, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PPC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">PPC Campaigns</span> That Convert
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  Customized PPC campaigns focused on conversions, lower cost per acquisition (CPA), and increased ROI. We handle consultation, planning, campaign creation, and ongoing optimization.
                </p>
                <Button className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  Get a Free PPC Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Results-Driven PPC Management</h2>
                <p className="text-gray-600 mb-6">Our data-focused approach ensures your ad spend delivers maximum returns and qualified leads.</p>
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
        
        {/* Services Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PPC Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We build and optimize campaigns that generate quality leads and sales while reducing wasted spend.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Account Audit</h3>
                <p className="text-gray-600">
                  Thorough review of existing campaigns or comprehensive research for new campaigns.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy & Setup</h3>
                <p className="text-gray-600">
                  Creating campaign structure, ad groups, keywords, and compelling ad creative.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Optimization</h3>
                <p className="text-gray-600">
                  Ongoing refinement of bids, budgets, targeting, and ad performance to maximize ROI.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Reporting & Analysis</h3>
                <p className="text-gray-600">
                  Regular performance reviews and strategic recommendations for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PPC Performance Metrics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our campaigns consistently deliver impressive results that impact your bottom line.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">37%</h3>
                <p className="text-center text-gray-600">Average reduction in cost per acquisition for our clients</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <TrendingUp className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">64%</h3>
                <p className="text-center text-gray-600">Increase in conversion rate through ongoing optimization</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <DollarSign className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">185%</h3>
                <p className="text-center text-gray-600">Average return on ad spend (ROAS) across client campaigns</p>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PPC;
