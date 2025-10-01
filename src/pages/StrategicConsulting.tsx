import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  MessageSquare,
  ArrowRight,
  LineChart,
  PieChart,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHelmet from '@/components/PageHelmet';

const StrategicConsulting = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Strategic Marketing Consulting | Utah's Leading Digital Strategy Experts | Resgato"
        description="Affordable retainer-based consulting with clear communication to help businesses develop effective digital marketing strategies tailored to their unique needs."
        canonicalUrl="/strategic-consulting"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                    Strategic Consulting
                  </span>{' '}
                  For Business Growth
                </h1>
                <p className="max-w-lg text-xl text-gray-700">
                  Affordable retainer-based consulting with clear communication
                  to help businesses develop effective digital marketing
                  strategies tailored to their unique needs.
                </p>
                <Button
                  asChild
                  className="bg-resgato-purple text-white hover:bg-resgato-deep-purple"
                >
                  <Link to="/contact">
                    Schedule a Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="animate-fade-in rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <MessageSquare className="h-8 w-8 text-resgato-deep-purple" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  Expert Digital Strategy
                </h2>
                <p className="mb-6 text-gray-600">
                  Our strategic consulting services help businesses navigate the
                  digital landscape and achieve their marketing goals.
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
                    <p className="text-gray-700">Digital Marketing Audits</p>
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
                    <p className="text-gray-700">Competitive Analysis</p>
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
                    <p className="text-gray-700">Strategy Development</p>
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
                    <p className="text-gray-700">Implementation Roadmaps</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Consulting Approach
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                We provide structured, actionable guidance to transform your
                digital marketing strategy and drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-xl font-bold text-resgato-purple">
                    1
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Discovery</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your business, goals, target
                  audience, and current marketing efforts.
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-xl font-bold text-resgato-purple">
                    2
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Strategy Development</h3>
                <p className="text-gray-600">
                  Creating a tailored roadmap with specific recommendations
                  aligned with your business objectives.
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-xl font-bold text-resgato-purple">
                    3
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  Implementation Support
                </h3>
                <p className="text-gray-600">
                  Guidance and assistance during the execution phase to ensure
                  strategies are properly implemented.
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-white to-resgato-light-purple/30 p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-xl font-bold text-resgato-purple">
                    4
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">Ongoing Optimization</h3>
                <p className="text-gray-600">
                  Regular review of results and strategic adjustments to
                  maximize performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Consulting Services
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Our strategic consulting services are designed to address your
                specific marketing challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <LineChart className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-center text-xl font-bold">
                    Digital Marketing Audit
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600">
                    A comprehensive review of your current digital marketing
                    efforts, identifying strengths, weaknesses, and
                    opportunities for improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Website performance analysis
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        SEO and content evaluation
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Social media presence review
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <PieChart className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-center text-xl font-bold">
                    Strategy Development
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600">
                    Creation of a customized digital marketing strategy aligned
                    with your business goals, target audience, and competitive
                    landscape.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Channel selection and prioritization
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Budget allocation recommendations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        KPI definition and measurement plan
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="bg-resgato-deep-purple/10 p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <BarChart3 className="h-10 w-10 text-resgato-purple" />
                  </div>
                  <h3 className="text-center text-xl font-bold">
                    Ongoing Advisory
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600">
                    Regular consultation sessions to review performance, address
                    challenges, and adapt strategies as your business evolves.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Monthly strategy sessions
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Performance reporting and analysis
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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
                      <p className="text-sm text-gray-700">
                        Strategy refinement and optimization
                      </p>
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
