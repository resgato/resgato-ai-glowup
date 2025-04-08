import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Bot, AlertCircle, Brain, Zap, Glasses, Cpu, TrendingUp, Workflow, BarChart3, Clock, DollarSign, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const AIConsulting = () => {
  const isMobile = useIsMobile();

  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-resgato-purple" />,
      title: 'Strategic AI Integration',
      description: 'Identify high-impact opportunities for AI adoption within your current business processes and develop a roadmap for implementation.'
    },
    {
      icon: <Zap className="h-8 w-8 text-resgato-purple" />,
      title: 'Performance Optimization',
      description: 'Fine-tune existing AI systems to improve accuracy, efficiency, and return on investment while reducing operational costs.'
    },
    {
      icon: <Glasses className="h-8 w-8 text-resgato-purple" />,
      title: 'AI Literacy Training',
      description: 'Empower your team with the knowledge and skills they need to work effectively with AI technologies and tools.'
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-resgato-purple" />,
      title: 'Ethical AI Deployment',
      description: 'Ensure your AI implementations adhere to best practices for data privacy, fairness, and transparency.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-resgato-purple" />,
      title: 'Vendor Selection',
      description: 'Navigate the complex landscape of AI providers and solutions to find the perfect match for your specific needs.'
    }
  ];

  const businessImpacts = [
    {
      icon: <DollarSign className="h-10 w-10 text-resgato-purple" />,
      title: "Increased Profit Margins",
      description: "AI-powered automation reduces operational costs by 25-40% while increasing output quality and consistency across business processes."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-resgato-purple" />,
      title: "Revenue Growth",
      description: "Intelligent algorithms can identify new revenue streams, optimize pricing strategies, and personalize customer experiences to drive sales."
    },
    {
      icon: <Clock className="h-10 w-10 text-resgato-purple" />,
      title: "Time Efficiency",
      description: "Automation of routine tasks frees up to 30% of employee time for higher-value creative and strategic work."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-resgato-purple" />,
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights, allowing you to make decisions based on predictive analytics rather than intuition."
    },
    {
      icon: <Workflow className="h-10 w-10 text-resgato-purple" />,
      title: "Process Optimization",
      description: "Identify and eliminate inefficiencies in your business processes through AI-powered analysis and continuous improvement."
    },
    {
      icon: <Shield className="h-10 w-10 text-resgato-purple" />,
      title: "Risk Reduction",
      description: "Predictive analysis helps identify potential issues before they occur, reducing business risk and preventing costly mistakes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resgato-navy to-resgato-blue text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Transform Your Business with <span className="text-resgato-light-purple">AI Consulting</span>
                </h1>
                <p className="text-lg md:text-xl">
                  Navigate the complex world of artificial intelligence with expert guidance tailored to your unique business challenges and opportunities.
                </p>
                <div className="pt-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-resgato-light-purple hover:bg-resgato-purple text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                  <Bot className="h-24 w-24 md:h-32 md:w-32 text-resgato-light-purple mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact Section - NEW */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-white to-resgato-light-purple/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">How AI Transforms Business Performance</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                AI is not just a technology upgrade—it's a fundamental shift in how businesses operate, compete, and grow their bottom line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {businessImpacts.map((impact, index) => (
                <Card key={index} className="border border-resgato-light-purple/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-resgato-light-purple/20 text-resgato-deep-purple">
                      {impact.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                    <p className="text-gray-600">{impact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our AI Consulting Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help businesses at every stage of AI adoption—from initial exploration to advanced implementation and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-resgato-light-purple/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A structured approach to help you navigate the AI landscape and implement solutions that deliver real business value.
              </p>
            </div>

            {isMobile ? (
              // Mobile view: Stacked cards
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Discovery & Assessment",
                    description: "We begin by understanding your business goals, challenges, and current state of AI readiness. This includes evaluating existing systems, data quality, and team capabilities."
                  },
                  {
                    step: 2,
                    title: "Strategic Planning",
                    description: "Based on the assessment, we develop a customized AI strategy that aligns with your business objectives and outlines specific use cases, expected outcomes, and implementation timelines."
                  },
                  {
                    step: 3,
                    title: "Solution Design",
                    description: "Our team designs AI solutions tailored to your needs, including selecting appropriate technologies, data requirements, integration approaches, and governance frameworks."
                  },
                  {
                    step: 4,
                    title: "Implementation Support",
                    description: "We guide you through the implementation process, providing technical expertise, vendor management assistance, and change management support to ensure successful adoption."
                  },
                  {
                    step: 5,
                    title: "Optimization & Scale",
                    description: "Once implemented, we help you measure results, refine your AI systems for better performance, and identify opportunities to scale successful solutions across your organization."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-resgato-purple">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-resgato-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
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
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-resgato-light-purple/30 transform -translate-x-1/2"></div>
                
                <div className="space-y-0">
                  {[
                    {
                      step: 1,
                      title: "Discovery & Assessment",
                      description: "We begin by understanding your business goals, challenges, and current state of AI readiness. This includes evaluating existing systems, data quality, and team capabilities."
                    },
                    {
                      step: 2,
                      title: "Strategic Planning",
                      description: "Based on the assessment, we develop a customized AI strategy that aligns with your business objectives and outlines specific use cases, expected outcomes, and implementation timelines."
                    },
                    {
                      step: 3,
                      title: "Solution Design",
                      description: "Our team designs AI solutions tailored to your needs, including selecting appropriate technologies, data requirements, integration approaches, and governance frameworks."
                    },
                    {
                      step: 4,
                      title: "Implementation Support",
                      description: "We guide you through the implementation process, providing technical expertise, vendor management assistance, and change management support to ensure successful adoption."
                    },
                    {
                      step: 5,
                      title: "Optimization & Scale",
                      description: "Once implemented, we help you measure results, refine your AI systems for better performance, and identify opportunities to scale successful solutions across your organization."
                    }
                  ].map((item, index) => (
                    <div key={index} className={`flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className={`bg-white p-6 rounded-lg shadow-md inline-block ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} hover:shadow-lg transition-shadow duration-300`}>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center justify-center relative">
                        <div className="w-12 h-12 bg-resgato-purple rounded-full flex items-center justify-center text-white font-bold z-10">
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
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our AI consulting services.
              </p>
            </div>

            <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general" className="text-base md:text-lg py-2 md:py-3">General</TabsTrigger>
                <TabsTrigger value="technical" className="text-base md:text-lg py-2 md:py-3">Technical</TabsTrigger>
                <TabsTrigger value="business" className="text-base md:text-lg py-2 md:py-3">Business</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What industries do you work with?</h3>
                  <p className="text-gray-600">We work with businesses across all industries, including healthcare, finance, retail, manufacturing, and more. Our AI consulting services are tailored to address the specific challenges and opportunities in your sector.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How long does the consulting process typically take?</h3>
                  <p className="text-gray-600">The timeline varies depending on the scope and complexity of your needs. Initial assessments can be completed in 2-4 weeks, while comprehensive strategy development and implementation support may extend over several months.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Do you offer ongoing support after the initial consultation?</h3>
                  <p className="text-gray-600">Yes, we offer flexible engagement models including ongoing advisory services, periodic check-ins, and dedicated support packages to ensure your AI initiatives continue to deliver value as your business evolves.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="technical" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What if we don't have quality data to work with?</h3>
                  <p className="text-gray-600">Data quality is crucial for AI success. Our consulting includes data readiness assessments and recommendations for data collection, cleaning, and governance to ensure you have the foundation needed for effective AI implementation.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Can you help with integrating AI into our existing systems?</h3>
                  <p className="text-gray-600">Absolutely. We specialize in designing AI solutions that integrate seamlessly with your existing technology stack, minimizing disruption while maximizing the value of your current investments.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Do you build custom AI solutions or recommend existing ones?</h3>
                  <p className="text-gray-600">We take a pragmatic approach based on your needs. Often, we recommend a mix of existing AI platforms for quick wins and custom solutions for unique challenges that provide competitive advantage.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="business" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How do you measure the success of AI initiatives?</h3>
                  <p className="text-gray-600">We establish clear KPIs aligned with your business objectives at the outset. These might include efficiency gains, cost reductions, revenue increases, customer satisfaction improvements, or other metrics relevant to your goals.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What's the typical ROI for AI investments?</h3>
                  <p className="text-gray-600">ROI varies widely depending on the use case, but our clients typically see returns within 6-12 months of implementation. During our assessment phase, we'll provide projected ROI estimates specific to your initiatives.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How can we prepare our team for AI adoption?</h3>
                  <p className="text-gray-600">Change management is crucial for successful AI adoption. Our consulting includes organizational readiness assessments, training recommendations, and communication strategies to ensure your team embraces new AI capabilities.</p>
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
