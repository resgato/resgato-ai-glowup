
import React from 'react';
import { Database, FileText, BarChart, Compass, MessageSquare, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';

const CoreServices = () => {
  const mainServiceData = [
    {
      icon: <Database className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Marketing Strategy',
      description: 'Comprehensive marketing strategies powered by artificial intelligence.',
      details: 'Our AI Marketing Strategy service provides a tailored roadmap for leveraging artificial intelligence in your marketing efforts. We analyze your business objectives, target audience, and current marketing performance to develop a comprehensive strategy that incorporates the most relevant AI technologies. Our strategies are designed to enhance customer engagement, increase conversion rates, and maximize ROI.',
      link: '/ai-consulting',
      benefits: [
        "Tailored AI strategies aligned with your business goals",
        "Competitive advantage through innovative marketing approaches",
        "Improved targeting and audience segmentation",
        "Enhanced marketing ROI through data-driven decision making"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Content Creation',
      description: 'Generate high-quality, tailored content for various marketing channels.',
      details: 'Our AI Content Creation service utilizes advanced natural language processing and generation technologies to produce high-quality, engaging content for your marketing channels. From blog posts and social media content to email campaigns and product descriptions, our AI tools can generate content that resonates with your audience while maintaining your brand voice and style. This service helps you scale your content production efficiently while ensuring consistency and quality.',
      link: '/ai-consulting',
      benefits: [
        "Higher quality content that resonates with your audience",
        "Increased content production efficiency and scale",
        "Consistent brand voice across all content channels",
        "Content personalized to different audience segments"
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-resgato-purple" />,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and customer behaviors using advanced AI models.',
      details: 'Our Predictive Analytics service harnesses the power of machine learning algorithms to analyze historical data and forecast future trends, customer behaviors, and market changes. By identifying patterns and correlations in your data, we help you anticipate shifts in customer preferences, optimize inventory management, personalize marketing campaigns, and make data-driven decisions that keep you ahead of the competition.',
      link: '/strategic-consulting',
      benefits: [
        "Anticipate market trends before your competitors",
        "Optimize marketing spend based on predictive insights",
        "Reduce customer churn through early intervention",
        "Identify high-value opportunities for growth"
      ]
    },
    {
      icon: <Compass className="h-12 w-12 text-resgato-purple" />,
      title: 'Customer Journey Optimization',
      description: 'Enhance the customer experience across all touchpoints.',
      details: 'Our Customer Journey Optimization service uses AI to analyze and enhance every interaction between your brand and your customers. By mapping the customer journey and identifying pain points and opportunities for improvement, we develop strategies to deliver personalized experiences that drive engagement and loyalty. From initial awareness to post-purchase support, we help you create a seamless, satisfying journey that converts prospects into loyal customers.',
      link: '/strategic-consulting',
      benefits: [
        "Seamless customer experience across all touchpoints",
        "Higher conversion rates through optimized journeys",
        "Personalized customer interactions based on behavior",
        "Increased customer satisfaction and loyalty"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-resgato-purple" />,
      title: 'AI Chatbots & Assistants',
      description: 'Implement intelligent conversational agents to engage with customers.',
      details: 'Our AI Chatbots & Assistants service provides sophisticated conversational AI solutions that enhance customer service and engagement. We design, develop, and implement chatbots and virtual assistants that can handle customer inquiries, provide product recommendations, schedule appointments, and more—all while maintaining a natural, conversational tone. These AI-powered assistants work 24/7, ensuring your customers receive immediate support whenever they need it.',
      link: '/ai-consulting',
      benefits: [
        "24/7 customer support and engagement",
        "Reduced response time for customer inquiries",
        "Scalable customer service without increasing staff",
        "Consistent and accurate information delivery"
      ]
    },
    {
      icon: <Code className="h-12 w-12 text-resgato-purple" />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes with intelligent automation tools.',
      details: 'Our Marketing Automation service leverages AI to automate repetitive marketing tasks, streamline workflows, and improve efficiency. From email marketing and social media posting to lead scoring and nurturing, our automation solutions help you deliver the right message to the right audience at the right time. By automating routine tasks, your team can focus on strategy and creative work, leading to better results and resource optimization.',
      link: '/email-marketing',
      benefits: [
        "Increased marketing team productivity",
        "More effective lead nurturing and conversion",
        "Consistent execution of marketing campaigns",
        "Better allocation of team resources to strategic tasks"
      ]
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Core Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive suite of AI marketing services designed to transform your business.
        </p>
      </div>

      <div className="space-y-16">
        {mainServiceData.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            details={service.details}
            link={service.link}
            benefits={service.benefits}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
