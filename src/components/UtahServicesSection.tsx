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

const UtahServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Utah SEO Services',
      description:
        'Essential local SEO optimization for Utah brands of all sizes with an online presence. Our expert SEO services help Salt Lake City businesses get found locally with sustainable growth strategies.',
      link: '/seo',
    },
    {
      icon: <BarChart className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Salt Lake City PPC & Google Ads',
      description:
        'Expert PPC management for Utah businesses with customized Google Ads campaigns focused on conversions, lower CPA, and increased ROI. Our Salt Lake City PPC team delivers measurable results.',
      link: '/ppc',
    },
    {
      icon: <Mail className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Email Marketing for Utah Businesses',
      description:
        'Personalized email campaigns that engage Utah customers through audience segmentation, visually appealing designs, and performance monitoring to maximize ROI for Salt Lake City businesses.',
      link: '/email-marketing',
    },
    {
      icon: (
        <MessageSquare className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />
      ),
      title: 'Strategic Consulting in Utah',
      description:
        'Affordable retainer-based consulting with clear communication to help Utah businesses develop effective digital marketing strategies tailored to the Salt Lake City market.',
      link: '/strategic-consulting',
    },
    {
      icon: <Bot className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Utah AI Marketing Services',
      description:
        "As Utah's leading AI marketing agency, we provide expert guidance to help your Salt Lake City business leverage artificial intelligence for improved efficiency, customer insights, and competitive advantage.",
      link: '/ai-consulting',
    },
    {
      icon: <Users className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Social Media Marketing in Utah',
      description:
        'Strategic social media management across platforms with content creation, community engagement, and performance analytics to build your Utah brand presence in Salt Lake City.',
      link: '/social-media-marketing',
    },
    {
      icon: <Calendar className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Content Strategy for Utah',
      description:
        "Comprehensive content planning and creation services that enhance your Utah business's digital presence, engage your Salt Lake City audience, and support your SEO and marketing goals.",
      link: '/content-strategy',
    },
    {
      icon: <Code className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Salt Lake City Web Development',
      description:
        'Custom website development services that create modern, responsive, and high-performing websites tailored to your Utah business needs and Salt Lake City market goals.',
      link: '/website-development',
    },
    {
      icon: <Wrench className="h-7 w-7 text-resgato-purple md:h-8 md:w-8" />,
      title: 'Utah IT Services & Hosting',
      description:
        'Professional website hosting, domain management, and managed IT services to keep your Utah business online and running smoothly with local Salt Lake City support.',
      link: '/it-support',
    },
  ];

  return (
    <section className="section-container" id="services">
      <div className="mb-8 text-center md:mb-16">
        <h2 className="section-title">
          Utah's Premier Digital Marketing Services in Salt Lake City
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          Founded in 2012, Resgato delivers comprehensive digital marketing and
          AI services to businesses throughout Utah and Salt Lake City,
          optimizing your online presence and driving real business results for
          local Utah companies.
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

export default UtahServicesSection;
