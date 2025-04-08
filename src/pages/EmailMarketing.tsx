
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Mail, ArrowRight, Users, BarChart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmailMarketing = () => {
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
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Email Marketing</span> That Engages
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  Personalized email campaigns that engage customers through audience segmentation, visually appealing designs, and performance monitoring to maximize ROI.
                </p>
                <Button className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  Get Email Strategy Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Strategic Email Solutions</h2>
                <p className="text-gray-600 mb-6">Our comprehensive email marketing services drive engagement, nurture leads, and boost revenue.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Campaign Strategy & Planning</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">List Segmentation & Management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Automated Email Sequences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Performance Analytics & Optimization</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Email Marketing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create personalized email experiences that nurture relationships and drive conversions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Audience Analysis</h3>
                <p className="text-gray-600">
                  Understanding your customers and segmenting your email list for personalized targeting.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Campaign Design</h3>
                <p className="text-gray-600">
                  Creating engaging email content with compelling copy and visually appealing templates.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Automation Setup</h3>
                <p className="text-gray-600">
                  Implementing triggered email sequences based on customer behavior and journey stage.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Testing & Optimization</h3>
                <p className="text-gray-600">
                  Continuous improvement through A/B testing, performance analysis, and refinement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Types of Email Campaigns */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Email Marketing Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a full suite of email marketing services tailored to your business goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-resgato-purple mr-4" />
                  <h3 className="text-xl font-bold">Welcome & Onboarding Sequences</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Make a strong first impression with automated welcome emails that introduce new subscribers to your brand and guide them through their initial experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Personalized welcome sequences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Product education emails</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <BarChart className="h-8 w-8 text-resgato-purple mr-4" />
                  <h3 className="text-xl font-bold">Promotional Campaigns</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Drive sales and conversions with targeted promotional emails highlighting your products, services, special offers, and limited-time deals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Special offer announcements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Holiday and seasonal campaigns</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-resgato-purple mr-4" />
                  <h3 className="text-xl font-bold">Nurture & Educational Content</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Build relationships and establish authority through valuable content that educates your audience and positions your brand as an industry leader.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Industry insights and thought leadership</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">How-to guides and tutorials</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Mail className="h-8 w-8 text-resgato-purple mr-4" />
                  <h3 className="text-xl font-bold">Re-engagement Campaigns</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Win back inactive subscribers with targeted re-engagement campaigns designed to reignite interest and encourage repeat business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Win-back campaigns for inactive subscribers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">Exclusive offers for lapsed customers</p>
                  </li>
                </ul>
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

export default EmailMarketing;
