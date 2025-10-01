import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Search,
  Mail,
  BarChart,
  MessageSquare,
  Users,
  Calendar,
  Bot,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from 'lucide-react';

const PlatformsWeSupport = () => {
  const platforms = [
    {
      icon: <Search className="h-8 w-8 text-resgato-purple" />,
      name: 'Google',
      description: 'Search, Ads, Analytics, and more',
    },
    {
      icon: <Facebook className="h-8 w-8 text-resgato-purple" />,
      name: 'Facebook',
      description: 'Ads, Business Manager, and Pages',
    },
    {
      icon: <Instagram className="h-8 w-8 text-resgato-purple" />,
      name: 'Instagram',
      description: 'Business profiles and advertising',
    },
    {
      icon: <Twitter className="h-8 w-8 text-resgato-purple" />,
      name: 'Twitter',
      description: 'Promoted tweets and analytics',
    },
    {
      icon: <Linkedin className="h-8 w-8 text-resgato-purple" />,
      name: 'LinkedIn',
      description: 'B2B marketing and lead generation',
    },
    {
      icon: <Youtube className="h-8 w-8 text-resgato-purple" />,
      name: 'YouTube',
      description: 'Video marketing and advertising',
    },
    {
      icon: <Mail className="h-8 w-8 text-resgato-purple" />,
      name: 'Email Platforms',
      description: 'Mailchimp, HubSpot, and more',
    },
    {
      icon: <Bot className="h-8 w-8 text-resgato-purple" />,
      name: 'AI Tools',
      description: 'ChatGPT, Midjourney, and more',
    },
  ];

  return (
    <section className="section-container">
      <div className="mb-8 text-center md:mb-16">
        <h2 className="section-title">Platforms We Support</h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          We're experts in managing and optimizing campaigns across all major
          digital marketing platforms.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            className="border border-resgato-light-purple shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">{platform.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{platform.name}</h3>
              <p className="text-sm text-gray-600">{platform.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PlatformsWeSupport;
