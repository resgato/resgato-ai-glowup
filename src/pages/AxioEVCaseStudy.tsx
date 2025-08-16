import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import PageHelmet from '@/components/PageHelmet';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Globe, Database, BarChart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AxioEVCaseStudy = () => {
  const { slug } = useParams();

  const caseStudyData = {
    title: "Electrifying Success: Axio EV's Digital Transformation",
    subtitle: "Complete Digital Transformation for Utah's Premier Used EV Dealership",
    industry: "Automotive",
    client: "Axio EV",
    location: "Utah",
    duration: "3 months",
    services: [
      "Market Research & Analysis",
      "Domain & Website Setup",
      "Cloud Business Software Implementation",
      "CRM System Setup & Training",
      "Local Listing Optimization",
      "Analytics & Reporting Setup"
    ],
    challenge: "Axio EV, a new used electric vehicle dealership in Utah, needed a complete digital foundation to establish their presence in the competitive EV market. They required everything from market research to operational software to compete effectively in the growing electric vehicle space.",
    solution: "Resgato provided a comprehensive digital transformation package, starting with thorough market research to understand the EV landscape in Utah, then building a complete digital infrastructure including website, CRM, and business software systems.",
    results: [
      {
        metric: "85%",
        label: "Increase in Online Leads",
        description: "Generated qualified leads through optimized digital presence"
      },
      {
        metric: "300%",
        label: "Growth in Local Search Visibility",
        description: "Improved local SEO and Google My Business optimization"
      },
      {
        metric: "100%",
        label: "Digital Infrastructure Complete",
        description: "Full business software stack implemented and operational"
      }
    ],
    process: [
      {
        phase: "Phase 1: Market Research",
        description: "Comprehensive analysis of Utah's EV market, competitor research, and target audience identification",
        details: [
          "Analyzed local EV adoption rates and market trends",
          "Researched competitor digital presence and strategies",
          "Identified target customer segments and their online behavior",
          "Mapped local search patterns and keyword opportunities"
        ]
      },
      {
        phase: "Phase 2: Digital Foundation",
        description: "Domain acquisition, website development, and hosting setup",
        details: [
          "Secured premium domain name and hosting",
          "Designed and developed responsive website",
          "Implemented SEO best practices from launch",
          "Set up analytics and tracking systems"
        ]
      },
      {
        phase: "Phase 3: Business Software Implementation",
        description: "Cloud-based business software setup and CRM integration",
        details: [
          "Selected and implemented appropriate CRM system",
          "Set up cloud-based business management tools",
          "Configured automated workflows and processes",
          "Provided comprehensive staff training"
        ]
      },
      {
        phase: "Phase 4: Local Optimization",
        description: "Google My Business and local listing optimization",
        details: [
          "Optimized Google My Business profile",
          "Set up and optimized local business listings",
          "Implemented local SEO strategies",
          "Created local content marketing plan"
        ]
      },
      {
        phase: "Phase 5: Analytics & Reporting",
        description: "Comprehensive analytics setup and ongoing reporting",
        details: [
          "Implemented Google Analytics and Search Console",
          "Set up custom reporting dashboards",
          "Created automated performance reports",
          "Established ongoing monitoring and optimization"
        ]
      }
    ],
    testimonials: [
      {
        quote: "Resgato didn't just build us a website - they built us a complete digital business. From market research to CRM setup, they handled everything we needed to compete in the EV market.",
        author: "Axio EV Management Team",
        role: "Leadership"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title={`${caseStudyData.title} | Resgato Case Study`}
        description={`Discover how Resgato helped ${caseStudyData.client} achieve ${caseStudyData.results[0].metric} increase in online leads through comprehensive digital transformation services.`}
        canonicalUrl={`/case-studies/${slug}`}
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-resgato-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <Link to="/case-studies" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="flex items-center mb-4">
                <span className="bg-resgato-blue text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  {caseStudyData.industry}
                </span>
                <span className="text-gray-300">{caseStudyData.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {caseStudyData.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-200">
                {caseStudyData.subtitle}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-resgato-blue">{caseStudyData.client}</div>
                  <div className="text-sm text-gray-300">Client</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-resgato-blue">{caseStudyData.duration}</div>
                  <div className="text-sm text-gray-300">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-resgato-blue">{caseStudyData.services.length}</div>
                  <div className="text-sm text-gray-300">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-resgato-blue">{caseStudyData.results.length}</div>
                  <div className="text-sm text-gray-300">Key Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Delivered</h2>
              <p className="text-xl text-gray-600">Comprehensive digital transformation services tailored for the EV market</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudyData.services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-resgato-blue mr-2" />
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudyData.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudyData.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Drive Growth</h2>
              <p className="text-xl text-gray-600">Measurable improvements across all key business metrics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudyData.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="bg-resgato-navy text-white rounded-lg p-8 mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-resgato-blue mb-2">
                      {result.metric}
                    </div>
                    <div className="text-lg font-semibold">{result.label}</div>
                  </div>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">A systematic approach to digital transformation</p>
            </div>
            <div className="space-y-8">
              {caseStudyData.process.map((phase, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                  <div className="flex items-start mb-6">
                    <div className="bg-resgato-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-lg text-gray-600 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-resgato-blue mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Client Says</h2>
            </div>
            <div className="bg-resgato-navy text-white rounded-lg p-8 md:p-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold mb-6 italic">
                  "{caseStudyData.testimonials[0].quote}"
                </div>
                <div className="text-lg font-semibold">{caseStudyData.testimonials[0].author}</div>
                <div className="text-gray-300">{caseStudyData.testimonials[0].role}</div>
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

export default AxioEVCaseStudy;
