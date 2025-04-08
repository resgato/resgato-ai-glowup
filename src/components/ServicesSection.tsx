
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Mail, BarChart, MessageSquare, Users, Calendar, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Utah SEO Services',
      description: 'Essential optimization for Utah brands of all sizes with an online presence. Our expert SEO services help local businesses get started in the right direction with sustainable growth strategies.',
      link: '/contact'
    },
    {
      icon: <BarChart className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'PPC Services',
      description: 'Customized PPC campaigns focused on conversions, lower cost per acquisition (CPA), and increased ROI for Utah businesses. We handle consultation, planning, campaign creation, and ongoing optimization.',
      link: '/contact'
    },
    {
      icon: <Mail className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that engage Utah customers through audience segmentation, visually appealing designs, and performance monitoring to maximize ROI.',
      link: '/contact'
    },
    {
      icon: <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Strategic Consulting',
      description: 'Affordable retainer-based consulting with clear communication to help Utah businesses develop effective digital marketing strategies tailored to the local market.',
      link: '/contact'
    },
    {
      icon: <Bot className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Utah AI Agency Services',
      description: 'As Utah\'s leading AI agency, we provide expert guidance to help your business leverage artificial intelligence for improved efficiency, customer insights, and competitive advantage in the local market.',
      link: '/contact'
    },
    {
      icon: <Users className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media management across platforms with content creation, community engagement, and performance analytics to build your Utah brand presence.',
      link: '/contact'
    },
    {
      icon: <Calendar className="h-7 w-7 md:h-8 md:w-8 text-resgato-purple" />,
      title: 'Content Strategy',
      description: 'Comprehensive content planning and creation services that enhance your Utah business\'s digital presence, engage your local audience, and support your SEO and marketing goals.',
      link: '/contact'
    }
  ];

  return (
    <section className="section-container" id="services">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="section-title">Utah's Premier Digital Marketing Services</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Founded in 2012, Resgato delivers comprehensive digital marketing and AI services to businesses throughout Utah, optimizing your online presence and driving real business results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="block h-full transition-transform hover:scale-105">
            <Card className="border border-resgato-light-purple shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="p-4 md:p-6">
                <div className="mb-2 md:mb-4">{service.icon}</div>
                <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <CardDescription className="text-gray-600 text-sm md:text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
