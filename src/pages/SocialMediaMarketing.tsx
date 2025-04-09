
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, BarChart3, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
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
      description: 'Reach a broad audience with targeted ads, engaging content, and community building.',
      icon: <Users className="h-10 w-10 text-resgato-purple" />
    },
    {
      name: 'Instagram',
      description: 'Showcase your brand visually with compelling images, stories, and influencer partnerships.',
      icon: <Heart className="h-10 w-10 text-resgato-purple" />
    },
    {
      name: 'LinkedIn',
      description: 'Connect with professionals and businesses through thought leadership and B2B marketing.',
      icon: <MessageCircle className="h-10 w-10 text-resgato-purple" />
    },
    {
      name: 'Twitter',
      description: 'Engage in real-time conversations and share timely updates with your audience.',
      icon: <Share2 className="h-10 w-10 text-resgato-purple" />
    },
    {
      name: 'TikTok',
      description: 'Reach younger audiences with short-form, creative video content that showcases your brand personality.',
      icon: <TrendingUp className="h-10 w-10 text-resgato-purple" />
    }
  ];

  const benefits = [
    'Increased brand awareness and recognition',
    'Direct engagement with your target audience',
    'Higher website traffic and improved SEO',
    'Enhanced customer loyalty and retention',
    'Competitive insight and market analysis',
    'Cost-effective compared to traditional marketing',
    'Real-time feedback and customer service opportunities'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet title="Social Media Marketing" description="Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing tailored to your business goals." />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Social Media <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Marketing</span>
                </h1>
                <p className="text-xl text-gray-700">
                  Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing tailored to your business goals.
                </p>
                <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-xl">
                <BarChart3 className="h-40 w-40 mx-auto text-resgato-purple mb-6" />
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Did you know?</p>
                  <p className="text-gray-700">Over 4.8 billion people use social media worldwide, representing potential customers for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Platform Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Platforms We Specialize In</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our team has expertise across all major social platforms, creating targeted strategies to maximize your ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => (
                <Card key={index} className="border-resgato-light-purple shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-700">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Social Media Marketing Process</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We follow a proven methodology to deliver measurable results for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-resgato-light-purple rounded-full flex items-center justify-center mb-4">
                  <span className="text-resgato-deep-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Strategy</h3>
                <p className="text-gray-700">We analyze your audience, competitors, and market to develop a tailored strategy.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-resgato-light-purple rounded-full flex items-center justify-center mb-4">
                  <span className="text-resgato-deep-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                <p className="text-gray-700">We develop engaging content that resonates with your audience and reflects your brand.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-resgato-light-purple rounded-full flex items-center justify-center mb-4">
                  <span className="text-resgato-deep-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Management</h3>
                <p className="text-gray-700">We actively engage with your audience, responding to comments and messages promptly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-resgato-light-purple rounded-full flex items-center justify-center mb-4">
                  <span className="text-resgato-deep-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics & Optimization</h3>
                <p className="text-gray-700">We continuously monitor performance and refine our approach to maximize results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits of Social Media Marketing</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-resgato-light-purple rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-resgato-deep-purple font-bold text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white mt-8">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              <div className="bg-resgato-light-purple/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Social Media Management Includes:</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-1">Platform Strategy</h4>
                    <p className="text-sm text-gray-700">Customized approaches for each platform based on your audience and goals.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-1">Content Calendar</h4>
                    <p className="text-sm text-gray-700">Planned content schedule to ensure consistent posting and maximum engagement.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-1">Paid Advertising</h4>
                    <p className="text-sm text-gray-700">Strategic ad campaigns to reach targeted audiences and drive specific actions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-1">Performance Reporting</h4>
                    <p className="text-sm text-gray-700">Regular insights and analytics to track ROI and optimize future efforts.</p>
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
