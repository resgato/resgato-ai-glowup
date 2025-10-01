import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  Bot,
  AlertCircle,
  Brain,
  Zap,
  Glasses,
  Cpu,
  TrendingUp,
  Workflow,
  BarChart3,
  Clock,
  DollarSign,
  Shield,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import PageHelmet from '@/components/PageHelmet';

const AIConsulting = () => {
  const isMobile = useIsMobile();

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-resgato-purple" />,
      title: 'Strategic AI Integration',
      description:
        'Identify high-impact opportunities for AI adoption within your current business processes and develop a roadmap for implementation.',
    },
    {
      icon: <Zap className="h-8 w-8 text-resgato-purple" />,
      title: 'Performance Optimization',
      description:
        'Fine-tune existing AI systems to improve accuracy, efficiency, and return on investment while reducing operational costs.',
    },
    {
      icon: <Glasses className="h-8 w-8 text-resgato-purple" />,
      title: 'AI Literacy Training',
      description:
        'Empower your team with the knowledge and skills they need to work effectively with AI technologies and tools.',
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-resgato-purple" />,
      title: 'Ethical AI Deployment',
      description:
        'Ensure your AI implementations adhere to best practices for data privacy, fairness, and transparency.',
    },
    {
      icon: <Cpu className="h-8 w-8 text-resgato-purple" />,
      title: 'Vendor Selection',
      description:
        'Navigate the complex landscape of AI providers and solutions to find the perfect match for your specific needs.',
    },
  ];

  const businessImpacts = [
    {
      icon: <DollarSign className="h-10 w-10 text-resgato-purple" />,
      title: 'Increased Profit Margins',
      description:
        'AI-powered automation reduces operational costs by 25-40% while increasing output quality and consistency across business processes.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-resgato-purple" />,
      title: 'Revenue Growth',
      description:
        'Intelligent algorithms can identify new revenue streams, optimize pricing strategies, and personalize customer experiences to drive sales.',
    },
    {
      icon: <Clock className="h-10 w-10 text-resgato-purple" />,
      title: 'Time Efficiency',
      description:
        'Automation of routine tasks frees up to 30% of employee time for higher-value creative and strategic work.',
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-resgato-purple" />,
      title: 'Data-Driven Decisions',
      description:
        'Transform raw data into actionable insights, allowing you to make decisions based on predictive analytics rather than intuition.',
    },
    {
      icon: <Workflow className="h-10 w-10 text-resgato-purple" />,
      title: 'Process Optimization',
      description:
        'Identify and eliminate inefficiencies in your business processes through AI-powered analysis and continuous improvement.',
    },
    {
      icon: <Shield className="h-10 w-10 text-resgato-purple" />,
      title: 'Risk Reduction',
      description:
        'Predictive analysis helps identify potential issues before they occur, reducing business risk and preventing costly mistakes.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="AI Consulting Services | Utah's Leading AI Marketing Experts | Resgato"
        description="Navigate the complex world of artificial intelligence with expert guidance tailored to your unique business challenges and opportunities."
        canonicalUrl="/ai-consulting"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resgato-navy to-resgato-blue py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                  Transform Your Business with{' '}
                  <span className="text-resgato-light-purple">
                    AI Consulting
                  </span>
                </h1>
                <p className="text-lg md:text-xl">
                  Navigate the complex world of artificial intelligence with
                  expert guidance tailored to your unique business challenges
                  and opportunities.
                </p>
                <div className="pt-4">
                  <a
                    href="/contact"
                    className="inline-block transform rounded-lg bg-resgato-light-purple px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-resgato-purple hover:shadow-xl"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                  <Bot className="mx-auto h-24 w-24 text-resgato-light-purple md:h-32 md:w-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact Section - NEW */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/20 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                How AI Transforms Business Performance
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                AI is not just a technology upgrade—it's a fundamental shift in
                how businesses operate, compete, and grow their bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {businessImpacts.map((impact, index) => (
                <Card
                  key={index}
                  className="border border-resgato-light-purple/30 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple/20 text-resgato-deep-purple">
                      {impact.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{impact.title}</h3>
                    <p className="text-gray-600">{impact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Our AI Consulting Approach
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                We help businesses at every stage of AI adoption—from initial
                exploration to advanced implementation and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple/20">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Our Consulting Process
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                A structured approach to help you navigate the AI landscape and
                implement solutions that deliver real business value.
              </p>
            </div>

            {isMobile ? (
              // Mobile view: Stacked cards
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Discovery & Assessment',
                    description:
                      'We begin by understanding your business goals, challenges, and current state of AI readiness. This includes evaluating existing systems, data quality, and team capabilities.',
                  },
                  {
                    step: 2,
                    title: 'Strategic Planning',
                    description:
                      'Based on the assessment, we develop a customized AI strategy that aligns with your business objectives and outlines specific use cases, expected outcomes, and implementation timelines.',
                  },
                  {
                    step: 3,
                    title: 'Solution Design',
                    description:
                      'Our team designs AI solutions tailored to your needs, including selecting appropriate technologies, data requirements, integration approaches, and governance frameworks.',
                  },
                  {
                    step: 4,
                    title: 'Implementation Support',
                    description:
                      'We guide you through the implementation process, providing technical expertise, vendor management assistance, and change management support to ensure successful adoption.',
                  },
                  {
                    step: 5,
                    title: 'Optimization & Scale',
                    description:
                      'Once implemented, we help you measure results, refine your AI systems for better performance, and identify opportunities to scale successful solutions across your organization.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border-l-4 border-resgato-purple bg-white p-6 shadow-md"
                  >
                    <div className="mb-3 flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-resgato-purple font-bold text-white">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop view: Timeline
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 transform bg-resgato-light-purple/30 md:block"></div>

                <div className="space-y-0">
                  {[
                    {
                      step: 1,
                      title: 'Discovery & Assessment',
                      description:
                        'We begin by understanding your business goals, challenges, and current state of AI readiness. This includes evaluating existing systems, data quality, and team capabilities.',
                    },
                    {
                      step: 2,
                      title: 'Strategic Planning',
                      description:
                        'Based on the assessment, we develop a customized AI strategy that aligns with your business objectives and outlines specific use cases, expected outcomes, and implementation timelines.',
                    },
                    {
                      step: 3,
                      title: 'Solution Design',
                      description:
                        'Our team designs AI solutions tailored to your needs, including selecting appropriate technologies, data requirements, integration approaches, and governance frameworks.',
                    },
                    {
                      step: 4,
                      title: 'Implementation Support',
                      description:
                        'We guide you through the implementation process, providing technical expertise, vendor management assistance, and change management support to ensure successful adoption.',
                    },
                    {
                      step: 5,
                      title: 'Optimization & Scale',
                      description:
                        'Once implemented, we help you measure results, refine your AI systems for better performance, and identify opportunities to scale successful solutions across your organization.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
                    >
                      <div
                        className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                      >
                        <div
                          className={`inline-block rounded-lg bg-white p-6 shadow-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} transition-shadow duration-300 hover:shadow-lg`}
                        >
                          <h3 className="mb-2 text-xl font-bold">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="relative hidden items-center justify-center md:flex">
                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-purple font-bold text-white">
                          {item.step}
                        </div>
                      </div>
                      <div className="w-full md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Get answers to common questions about our AI consulting
                services.
              </p>
            </div>

            <Tabs defaultValue="general" className="mx-auto w-full max-w-4xl">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger
                  value="general"
                  className="py-2 text-base md:py-3 md:text-lg"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="py-2 text-base md:py-3 md:text-lg"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="py-2 text-base md:py-3 md:text-lg"
                >
                  Business
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    What industries do you work with?
                  </h3>
                  <p className="text-gray-600">
                    We work with businesses across all industries, including
                    healthcare, finance, retail, manufacturing, and more. Our AI
                    consulting services are tailored to address the specific
                    challenges and opportunities in your sector.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    How long does the consulting process typically take?
                  </h3>
                  <p className="text-gray-600">
                    The timeline varies depending on the scope and complexity of
                    your needs. Initial assessments can be completed in 2-4
                    weeks, while comprehensive strategy development and
                    implementation support may extend over several months.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    Do you offer ongoing support after the initial consultation?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer flexible engagement models including ongoing
                    advisory services, periodic check-ins, and dedicated support
                    packages to ensure your AI initiatives continue to deliver
                    value as your business evolves.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    What if we don't have quality data to work with?
                  </h3>
                  <p className="text-gray-600">
                    Data quality is crucial for AI success. Our consulting
                    includes data readiness assessments and recommendations for
                    data collection, cleaning, and governance to ensure you have
                    the foundation needed for effective AI implementation.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    Can you help with integrating AI into our existing systems?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We specialize in designing AI solutions that
                    integrate seamlessly with your existing technology stack,
                    minimizing disruption while maximizing the value of your
                    current investments.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    Do you build custom AI solutions or recommend existing ones?
                  </h3>
                  <p className="text-gray-600">
                    We take a pragmatic approach based on your needs. Often, we
                    recommend a mix of existing AI platforms for quick wins and
                    custom solutions for unique challenges that provide
                    competitive advantage.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="business" className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    How do you measure the success of AI initiatives?
                  </h3>
                  <p className="text-gray-600">
                    We establish clear KPIs aligned with your business
                    objectives at the outset. These might include efficiency
                    gains, cost reductions, revenue increases, customer
                    satisfaction improvements, or other metrics relevant to your
                    goals.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    What's the typical ROI for AI investments?
                  </h3>
                  <p className="text-gray-600">
                    ROI varies widely depending on the use case, but our clients
                    typically see returns within 6-12 months of implementation.
                    During our assessment phase, we'll provide projected ROI
                    estimates specific to your initiatives.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold">
                    How can we prepare our team for AI adoption?
                  </h3>
                  <p className="text-gray-600">
                    Change management is crucial for successful AI adoption. Our
                    consulting includes organizational readiness assessments,
                    training recommendations, and communication strategies to
                    ensure your team embraces new AI capabilities.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AIConsulting;
