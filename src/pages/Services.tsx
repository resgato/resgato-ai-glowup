
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, FileText, Code, MessageSquare, Database, Compass, TrendingUp, Eye, Globe, Edit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: <Database className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Marketing Strategy',
      description: 'Comprehensive marketing strategies powered by artificial intelligence.',
      details: 'Our AI Marketing Strategy service provides a tailored roadmap for leveraging artificial intelligence in your marketing efforts. We analyze your business objectives, target audience, and current marketing performance to develop a comprehensive strategy that incorporates the most relevant AI technologies. Our strategies are designed to enhance customer engagement, increase conversion rates, and maximize ROI.',
      link: '/ai-consulting'
    },
    {
      icon: <FileText className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Content Creation',
      description: 'Generate high-quality, tailored content for various marketing channels.',
      details: 'Our AI Content Creation service utilizes advanced natural language processing and generation technologies to produce high-quality, engaging content for your marketing channels. From blog posts and social media content to email campaigns and product descriptions, our AI tools can generate content that resonates with your audience while maintaining your brand voice and style. This service helps you scale your content production efficiently while ensuring consistency and quality.',
      link: '/ai-consulting'
    },
    {
      icon: <BarChart className="h-12 w-12 text-resgato-purple" />,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and customer behaviors using advanced AI models.',
      details: 'Our Predictive Analytics service harnesses the power of machine learning algorithms to analyze historical data and forecast future trends, customer behaviors, and market changes. By identifying patterns and correlations in your data, we help you anticipate shifts in customer preferences, optimize inventory management, personalize marketing campaigns, and make data-driven decisions that keep you ahead of the competition.',
      link: '/strategic-consulting'
    },
    {
      icon: <Compass className="h-12 w-12 text-resgato-purple" />,
      title: 'Customer Journey Optimization',
      description: 'Enhance the customer experience across all touchpoints.',
      details: 'Our Customer Journey Optimization service uses AI to analyze and enhance every interaction between your brand and your customers. By mapping the customer journey and identifying pain points and opportunities for improvement, we develop strategies to deliver personalized experiences that drive engagement and loyalty. From initial awareness to post-purchase support, we help you create a seamless, satisfying journey that converts prospects into loyal customers.',
      link: '/strategic-consulting'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Chatbots & Assistants',
      description: 'Implement intelligent conversational agents to engage with customers.',
      details: 'Our AI Chatbots & Assistants service provides sophisticated conversational AI solutions that enhance customer service and engagement. We design, develop, and implement chatbots and virtual assistants that can handle customer inquiries, provide product recommendations, schedule appointments, and more—all while maintaining a natural, conversational tone. These AI-powered assistants work 24/7, ensuring your customers receive immediate support whenever they need it.',
      link: '/ai-consulting'
    },
    {
      icon: <Code className="h-12 w-12 text-resgato-purple" />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes with intelligent automation tools.',
      details: 'Our Marketing Automation service leverages AI to automate repetitive marketing tasks, streamline workflows, and improve efficiency. From email marketing and social media posting to lead scoring and nurturing, our automation solutions help you deliver the right message to the right audience at the right time. By automating routine tasks, your team can focus on strategy and creative work, leading to better results and resource optimization.',
      link: '/email-marketing'
    }
  ];

  const additionalServices = [
    {
      icon: <TrendingUp className="h-8 w-8 text-resgato-purple" />,
      title: 'Competitive Intelligence',
      description: 'Use AI to analyze competitor strategies and identify market opportunities.',
      link: '/strategic-consulting'
    },
    {
      icon: <Eye className="h-8 w-8 text-resgato-purple" />,
      title: 'Sentiment Analysis',
      description: 'Monitor and analyze customer sentiment across digital channels.',
      link: '/ai-consulting'
    },
    {
      icon: <Globe className="h-8 w-8 text-resgato-purple" />,
      title: 'AI-Powered SEO',
      description: 'Optimize your website and content for search engines using AI techniques.',
      link: '/seo'
    },
    {
      icon: <Edit className="h-8 w-8 text-resgato-purple" />,
      title: 'Personalization Engines',
      description: 'Deliver tailored experiences to individual customers based on their preferences.',
      link: '/email-marketing'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">AI Marketing</span> Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how our AI-powered marketing solutions can help your business achieve exceptional results.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI marketing services designed to transform your business.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-resgato-light-purple rounded-lg p-4 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  <p className="text-gray-700 mb-6">{service.details}</p>
                  <Link to={service.link}>
                    <Button className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className={`bg-gradient-to-br from-resgato-purple/10 to-resgato-light-purple/30 rounded-xl p-8 shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-xl font-semibold mb-4">Benefits:</h4>
                  <ul className="space-y-3">
                    {[...Array(4)].map((_, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-800">
                          {index === 0 && i === 0 && "Tailored AI strategies aligned with your business goals"}
                          {index === 0 && i === 1 && "Competitive advantage through innovative marketing approaches"}
                          {index === 0 && i === 2 && "Improved targeting and audience segmentation"}
                          {index === 0 && i === 3 && "Enhanced marketing ROI through data-driven decision making"}
                          
                          {index === 1 && i === 0 && "Higher quality content that resonates with your audience"}
                          {index === 1 && i === 1 && "Increased content production efficiency and scale"}
                          {index === 1 && i === 2 && "Consistent brand voice across all content channels"}
                          {index === 1 && i === 3 && "Content personalized to different audience segments"}
                          
                          {index === 2 && i === 0 && "Anticipate market trends before your competitors"}
                          {index === 2 && i === 1 && "Optimize marketing spend based on predictive insights"}
                          {index === 2 && i === 2 && "Reduce customer churn through early intervention"}
                          {index === 2 && i === 3 && "Identify high-value opportunities for growth"}
                          
                          {index === 3 && i === 0 && "Seamless customer experience across all touchpoints"}
                          {index === 3 && i === 1 && "Higher conversion rates through optimized journeys"}
                          {index === 3 && i === 2 && "Personalized customer interactions based on behavior"}
                          {index === 3 && i === 3 && "Increased customer satisfaction and loyalty"}
                          
                          {index === 4 && i === 0 && "24/7 customer support and engagement"}
                          {index === 4 && i === 1 && "Reduced response time for customer inquiries"}
                          {index === 4 && i === 2 && "Scalable customer service without increasing staff"}
                          {index === 4 && i === 3 && "Consistent and accurate information delivery"}
                          
                          {index === 5 && i === 0 && "Increased marketing team productivity"}
                          {index === 5 && i === 1 && "More effective lead nurturing and conversion"}
                          {index === 5 && i === 2 && "Consistent execution of marketing campaigns"}
                          {index === 5 && i === 3 && "Better allocation of team resources to strategic tasks"}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Additional Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI marketing solutions to complement our core offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <Link key={index} to={service.link} className="block h-full transition-transform hover:scale-105">
                  <Card className="border-resgato-light-purple shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we implement AI marketing solutions to achieve your business goals.
            </p>
          </div>

          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <TabsTrigger value="discovery" className="text-lg py-3">Discovery</TabsTrigger>
              <TabsTrigger value="strategy" className="text-lg py-3">Strategy</TabsTrigger>
              <TabsTrigger value="implementation" className="text-lg py-3">Implementation</TabsTrigger>
              <TabsTrigger value="optimization" className="text-lg py-3">Optimization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discovery" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">1. Discovery & Analysis</h3>
              <p className="text-lg text-gray-700 mb-6">
                We begin by thoroughly understanding your business, industry, target audience, and marketing objectives. Our team conducts a comprehensive analysis of your current marketing efforts, collects and analyzes relevant data, and identifies opportunities for AI implementation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Business Analysis</h4>
                  <p className="text-gray-700">In-depth review of your business model, objectives, and challenges.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Data Assessment</h4>
                  <p className="text-gray-700">Evaluation of available data sources, quality, and potential use cases.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Opportunity Identification</h4>
                  <p className="text-gray-700">Pinpointing areas where AI can drive the most significant improvements.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="strategy" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">2. Strategy Development</h3>
              <p className="text-lg text-gray-700 mb-6">
                Based on our discovery findings, we develop a customized AI marketing strategy tailored to your specific needs and goals. This includes selecting the most appropriate AI technologies, defining key performance indicators (KPIs), and creating a detailed implementation roadmap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Technology Selection</h4>
                  <p className="text-gray-700">Identifying the most effective AI tools and platforms for your needs.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">KPI Definition</h4>
                  <p className="text-gray-700">Establishing clear metrics to measure the success of AI implementations.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Implementation Planning</h4>
                  <p className="text-gray-700">Creating a detailed roadmap for integrating AI into your marketing ecosystem.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="implementation" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">3. Implementation & Integration</h3>
              <p className="text-lg text-gray-700 mb-6">
                We execute the strategy by implementing the selected AI technologies and integrating them with your existing marketing systems. Our team provides training and support to ensure your team understands how to utilize these new tools effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Technology Deployment</h4>
                  <p className="text-gray-700">Implementing and configuring AI solutions to match your requirements.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">System Integration</h4>
                  <p className="text-gray-700">Connecting AI tools with your existing marketing technology stack.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Team Training</h4>
                  <p className="text-gray-700">Equipping your team with the knowledge to leverage AI marketing tools.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="optimization" className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">4. Monitoring & Optimization</h3>
              <p className="text-lg text-gray-700 mb-6">
                After implementation, we continuously monitor the performance of your AI marketing initiatives, analyze results against the defined KPIs, and make data-driven adjustments to optimize performance and maximize ROI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Performance Monitoring</h4>
                  <p className="text-gray-700">Tracking key metrics to assess the effectiveness of AI implementations.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Data Analysis</h4>
                  <p className="text-gray-700">Interpreting results to identify trends, insights, and areas for improvement.</p>
                </div>
                <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Continuous Refinement</h4>
                  <p className="text-gray-700">Making data-driven adjustments to optimize AI marketing performance.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
