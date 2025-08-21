import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Users,
  BarChart3,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import PageHelmet from '@/components/PageHelmet';
const SocialMediaMarketing = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      description:
        'Reach a broad audience with targeted ads, engaging content, and community building.',
      icon: <Users className="h-10 w-10 text-resgato-purple" />,
    },
    {
      name: 'Instagram',
      description:
        'Showcase your brand visually with compelling images, stories, and influencer partnerships.',
      icon: <Heart className="h-10 w-10 text-resgato-purple" />,
    },
    {
      name: 'LinkedIn',
      description:
        'Connect with professionals and businesses through thought leadership and B2B marketing.',
      icon: <MessageCircle className="h-10 w-10 text-resgato-purple" />,
    },
    {
      name: 'Twitter',
      description:
        'Engage in real-time conversations and share timely updates with your audience.',
      icon: <Share2 className="h-10 w-10 text-resgato-purple" />,
    },
    {
      name: 'TikTok',
      description:
        'Reach younger audiences with short-form, creative video content that showcases your brand personality.',
      icon: <TrendingUp className="h-10 w-10 text-resgato-purple" />,
    },
  ];

  const benefits = [
    'Increased brand awareness and recognition',
    'Direct engagement with your target audience',
    'Higher website traffic and improved SEO',
    'Enhanced customer loyalty and retention',
    'Competitive insight and market analysis',
    'Cost-effective compared to traditional marketing',
    'Real-time feedback and customer service opportunities',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Utah Social Media Marketing | Salt Lake City Social Media Agency"
        description="Transform your social media presence with Resgato's expert social media marketing services. We create engaging content and targeted campaigns that build your brand and drive conversions in Utah."
        canonicalUrl="/social-media-marketing"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold md:text-5xl">
                  Social Media{' '}
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                    Marketing
                  </span>
                </h1>
                <p className="text-xl text-gray-700">
                  Build brand awareness, engage with your audience, and drive
                  conversions through strategic social media marketing tailored
                  to your business goals.
                </p>
                <Button
                  asChild
                  className="bg-resgato-purple text-white hover:bg-resgato-deep-purple"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <BarChart3 className="mx-auto mb-6 h-40 w-40 text-resgato-purple" />
                <div className="text-center">
                  <p className="mb-2 text-lg font-medium">Did you know?</p>
                  <p className="text-gray-700">
                    Over 4.8 billion people use social media worldwide,
                    representing potential customers for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Platform Overview */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Platforms We Specialize In
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-700">
                Our team has expertise across all major social platforms,
                creating targeted strategies to maximize your ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {socialPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className="border-resgato-light-purple shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{platform.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{platform.name}</h3>
                    <p className="text-gray-700">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Our Social Media Marketing Process
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-700">
                We follow a proven methodology to deliver measurable results for
                your business.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="text-xl font-bold text-resgato-deep-purple">
                    1
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Research & Strategy</h3>
                <p className="text-gray-700">
                  We analyze your audience, competitors, and market to develop a
                  tailored strategy.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="text-xl font-bold text-resgato-deep-purple">
                    2
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Content Creation</h3>
                <p className="text-gray-700">
                  We develop engaging content that resonates with your audience
                  and reflects your brand.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="text-xl font-bold text-resgato-deep-purple">
                    3
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Community Management</h3>
                <p className="text-gray-700">
                  We actively engage with your audience, responding to comments
                  and messages promptly.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                  <span className="text-xl font-bold text-resgato-deep-purple">
                    4
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Analytics & Optimization
                </h3>
                <p className="text-gray-700">
                  We continuously monitor performance and refine our approach to
                  maximize results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">
                  Benefits of Social Media Marketing
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-resgato-light-purple">
                        <span className="text-xs font-bold text-resgato-deep-purple">
                          ✓
                        </span>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 bg-resgato-purple text-white hover:bg-resgato-deep-purple"
                >
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              <div className="rounded-lg bg-resgato-light-purple/30 p-8">
                <h3 className="mb-4 text-2xl font-bold">
                  Our Social Media Management Includes:
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4 shadow">
                    <h4 className="mb-1 font-bold">Platform Strategy</h4>
                    <p className="text-sm text-gray-700">
                      Customized approaches for each platform based on your
                      audience and goals.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow">
                    <h4 className="mb-1 font-bold">Content Calendar</h4>
                    <p className="text-sm text-gray-700">
                      Planned content schedule to ensure consistent posting and
                      maximum engagement.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow">
                    <h4 className="mb-1 font-bold">Paid Advertising</h4>
                    <p className="text-sm text-gray-700">
                      Strategic ad campaigns to reach targeted audiences and
                      drive specific actions.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow">
                    <h4 className="mb-1 font-bold">Performance Reporting</h4>
                    <p className="text-sm text-gray-700">
                      Regular insights and analytics to track ROI and optimize
                      future efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
