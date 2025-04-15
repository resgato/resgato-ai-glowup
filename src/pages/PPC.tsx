
import React from 'react';
import { Link } from 'react-router-dom';
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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Button } from '@/components/ui/button';
import PageHelmet from '@/components/PageHelmet';

const PPC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Salt Lake City PPC & SEM Services" 
        description="Maximize your ROI with our expert PPC management services in Salt Lake City. Our Utah PPC consultants deliver results-driven paid advertising campaigns." 
        keywords="salt lake city ppc agency, utah sem companies, utah ppc consultant, paid advertising salt lake city, sem services utah"
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
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">The PPC company</span> for you.
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  When it comes to digital advertising, there are a lot of options to pick from. Our approach is simple: create campaigns that will engage your ideal audience and help them convert into future customers, for the lowest CPA possible.
                </p>
                <p className="text-xl text-gray-700 max-w-lg">
                  We've accomplished this many times and guarantee that we'll lower your costs and boost your conversions.
                </p>
                <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  <Link to="/contact">
                    Get a Free PPC Analysis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What can a PPC Agency do for me?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create and manage campaigns that generate results without wasting your ad spend.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/20 rounded-lg p-8 shadow-md flex flex-col">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4">More Customers</h3>
                <p className="text-gray-700 mb-4">
                  Instead of just driving traffic to your website, our PPC services are based on conversion data.
                </p>
                <p className="text-gray-700 flex-grow">
                  We optimize our clients' PPC campaigns so they focus on conversions, not just impressions or clicks. Our goal is to find your ideal audience, then influence them to convert on your site. The data focused approach at Resgato means you will not only grow awareness of your brand but also find new customers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/20 rounded-lg p-8 shadow-md flex flex-col">
                <div className="mb-6">
                  <LineChart className="h-12 w-12 text-resgato-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Campaigns</h3>
                <p className="text-gray-700 mb-4">
                  We know you're different than your competitors, that's why our PPC campaigns are customized for each client.
                </p>
                <p className="text-gray-700 flex-grow">
                  Our PPC team develops unique and engaging content so your traffic converts. With our conversion-first approach, there won't be any waste in your PPC campaigns. With our experience in keyword research, competitor research and advanced expertise, we guarantee to provide you with PPC campaigns that will lower your CPA and increase your ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Image Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">A team of specialists working for your success</h2>
                <p className="text-lg text-gray-700">
                  Our PPC experts have years of experience crafting successful campaigns across multiple industries. We work collaboratively to ensure every aspect of your campaign is optimized for maximum performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Campaign strategists with industry-specific knowledge</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Copywriters who understand conversion psychology</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Data analysts monitoring and optimizing your campaigns</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png" 
                  alt="Team working on PPC campaigns" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PPC Process</h2>
              <p className="text-xl max-w-3xl mx-auto">
                A proven approach that delivers results at every stage.
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
                <p className="mb-4 text-lg">First, we need to talk...</p>
                <p className="text-md">
                  Our client relationships start with in-depth research and a consultation to analyze your business and choose which strategies will work best. Together we can plan the best approach for your PPC campaign.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Step 2: Campaign Creation</h3>
                <p className="mb-4 text-lg">Then we take action.</p>
                <p className="text-md">
                  Our team of experts put in the hours to set up and implement our digital strategies in your PPC account to achieve your goals. We'll build your campaigns from scratch and make sure you're positioned to receive the new traffic and leads.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Step 3: Launch, Optimize, Scale</h3>
                <p className="mb-4 text-lg">Finally, the best part.</p>
                <p className="text-md">
                  We'll walk you through your campaigns, one by one. With your approval, we'll launch and watch the leads roll in. You can expect regular updates of our optimizations and your results as our team works to optimize and scale.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-white">
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
        
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PPC;
