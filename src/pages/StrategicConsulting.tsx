import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { MessageSquare, ArrowRight, LineChart, PieChart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHelmet from '@/components/PageHelmet';

const StrategicConsulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="Strategic Marketing Consulting | Utah's Leading Digital Strategy Experts | Resgato"
        description="Affordable retainer-based consulting with clear communication to help businesses develop effective digital marketing strategies tailored to their unique needs."
        canonicalUrl="/strategic-consulting"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Strategic Consulting</span> For Business Growth
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  Affordable retainer-based consulting with clear communication to help businesses develop effective digital marketing strategies tailored to their unique needs.
                </p>
                <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  <Link to="/contact">
                    Schedule a Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Expert Digital Strategy</h2>
                <p className="text-gray-600 mb-6">Our strategic consulting services help businesses navigate the digital landscape and achieve their marketing goals.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Digital Marketing Audits</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Competitive Analysis</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Strategy Development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Implementation Roadmaps</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide structured, actionable guidance to transform your digital marketing strategy and drive sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your business, goals, target audience, and current marketing efforts.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                <p className="text-gray-600">
                  Creating a tailored roadmap with specific recommendations aligned with your business objectives.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Implementation Support</h3>
                <p className="text-gray-600">
                  Guidance and assistance during the execution phase to ensure strategies are properly implemented.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Ongoing Optimization</h3>
                <p className="text-gray-600">
                  Regular review of results and strategic adjustments to maximize performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Consulting Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consulting Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic consulting services are designed to address your specific marketing challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="flex items-center justify-center mb-4">
                    <LineChart className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Digital Marketing Audit</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    A comprehensive review of your current digital marketing efforts, identifying strengths, weaknesses, and opportunities for improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Website performance analysis</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">SEO and content evaluation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Social media presence review</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="flex items-center justify-center mb-4">
                    <PieChart className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Strategy Development</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Creation of a customized digital marketing strategy aligned with your business goals, target audience, and competitive landscape.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Channel selection and prioritization</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Budget allocation recommendations</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">KPI definition and measurement plan</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Ongoing Advisory</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Regular consultation sessions to review performance, address challenges, and adapt strategies as your business evolves.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Monthly strategy sessions</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Performance reporting and analysis</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-resgato-light-purple text-resgato-purple rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">Strategy refinement and optimization</p>
                    </li>
                  </ul>
                </div>
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

export default StrategicConsulting;
