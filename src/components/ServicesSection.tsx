
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, FileText, Code, MessageSquare, Database, Compass } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-resgato-purple" />,
      title: 'AI Marketing Strategy',
      description: 'Develop comprehensive marketing strategies powered by AI technologies to reach your target audience more effectively.'
    },
    {
      icon: <FileText className="h-8 w-8 text-resgato-purple" />,
      title: 'AI Content Creation',
      description: 'Generate high-quality, tailored content for various marketing channels with our AI-powered content creation tools.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-resgato-purple" />,
      title: 'Predictive Analytics',
      description: 'Forecast market trends and customer behaviors using advanced AI models to stay ahead of the competition.'
    },
    {
      icon: <Compass className="h-8 w-8 text-resgato-purple" />,
      title: 'Customer Journey Optimization',
      description: 'Enhance the customer experience by using AI to analyze and optimize every touchpoint in the customer journey.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-resgato-purple" />,
      title: 'AI Chatbots & Assistants',
      description: 'Implement intelligent conversational agents to engage with customers, answer questions, and nurture leads 24/7.'
    },
    {
      icon: <Code className="h-8 w-8 text-resgato-purple" />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes with intelligent automation tools that save time and increase efficiency.'
    }
  ];

  return (
    <section className="section-container" id="services">
      <div className="text-center mb-16">
        <h2 className="section-title">Our AI Marketing Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage the power of artificial intelligence to transform your marketing efforts and drive exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border border-resgato-light-purple shadow-md hover:shadow-lg transition-all duration-300 h-full">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
