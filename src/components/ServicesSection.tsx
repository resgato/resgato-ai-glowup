import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Search,
  Mail,
  BarChart,
  MessageSquare,
  Users,
  Calendar,
  Bot,
  Code,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Local SEO Services',
      description:
        'Essential local SEO optimization for businesses of all sizes. Our expert local SEO services help retail, automotive, home services, and other SMBs get found locally with sustainable growth strategies.',
      link: '/seo',
    },
    {
      icon: <BarChart className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'PPC & Google Ads Services',
      description:
        'Expert PPC management for SMBs with customized Google Ads campaigns focused on conversions, lower CPA, and increased ROI. Our team delivers measurable results across diverse industries.',
      link: '/ppc',
    },
    {
      icon: <Mail className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Email Marketing',
      description:
        'Personalized email campaigns that engage customers through audience segmentation, visually appealing designs, and performance monitoring to maximize ROI for your business.',
      link: '/email-marketing',
    },
    {
      icon: (
        <MessageSquare className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />
      ),
      title: 'Strategic Consulting',
      description:
        'Affordable retainer-based consulting with clear communication to help SMBs develop effective digital marketing strategies tailored to their specific industry and market.',
      link: '/strategic-consulting',
    },
    {
      icon: <Bot className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'AI Marketing Services',
      description:
        'As a leading AI marketing agency, we provide expert guidance to help your business leverage artificial intelligence for improved efficiency, customer insights, and competitive advantage.',
      link: '/ai-consulting',
    },
    {
      icon: <Users className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Social Media Marketing',
      description:
        'Strategic social media management across platforms with content creation, community engagement, and performance analytics to build your brand presence and drive engagement.',
      link: '/social-media-marketing',
    },
    {
      icon: <Calendar className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Content Strategy',
      description:
        "Comprehensive content planning and creation services that enhance your business's digital presence, engage your audience, and support your SEO and marketing goals.",
      link: '/content-strategy',
    },
    {
      icon: <Code className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Fast Web Development',
      description:
        'Fast, full-service web development that creates modern, responsive, and high-performing websites tailored to your business needs and goals with quick turnaround times.',
      link: '/website-development',
    },
    {
      icon: <Wrench className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Website Hosting & IT Services',
      description:
        'Professional website hosting, domain management, and managed IT services to keep your business online and running smoothly with reliable support.',
      link: '/it-support',
    },
  ];

  return (
    <section className="section-container" id="services">
      <div className="mb-8 text-center md:mb-16">
        <h2 className="section-title">
          Resgato's Premier Digital Marketing Services
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          Founded in 2012, Resgato delivers comprehensive local SEO, SMB
          marketing, and AI services to businesses across retail, automotive,
          home services, powersports, apps and more, optimizing your online
          presence and driving real business results.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="block h-full transition-transform hover:scale-105"
          >
            <Card className="h-full border border-resgato-light-purple shadow-md transition-all duration-300 hover:shadow-lg">
              <CardHeader className="p-4 md:p-6">
                <div className="mb-2 md:mb-4">{service.icon}</div>
                <CardTitle className="text-lg font-bold md:text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                <CardDescription className="text-sm text-gray-600 md:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
