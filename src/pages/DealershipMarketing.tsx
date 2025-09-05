import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Car, 
  Target, 
  BarChart3, 
  Video, 
  Share2, 
  FileText,
  CheckCircle,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Zap,
  Lightbulb,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DealershipMarketing = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-resgato-purple" />,
      title: "Search Engine Marketing",
      description: "Advanced SEM strategies that capture high-intent automotive shoppers through precision targeting and intelligent bid management.",
      features: [
        "SEM Segmented Campaigns",
        "Conquest Keyword Campaigns", 
        "Dynamic Search Campaigns",
        "Price Extension Campaigns",
        "Geo-Targeted Campaigns",
        "Customer Database Campaigns",
        "Re-Targeting Campaigns"
      ]
    },
    {
      icon: <Video className="h-8 w-8 text-resgato-purple" />,
      title: "Digital Video Marketing",
      description: "Compelling video content that showcases your inventory and drives engagement across YouTube, social platforms, and connected TV.",
      features: [
        "YouTube & Facebook Video Ads",
        "Programmatic Video Placement",
        "Premium OTT Solutions",
        "Connected TV Advertising",
        "Real-Time Bidding",
        "Hyper-Targeted Campaigns"
      ]
    },
    {
      icon: <Share2 className="h-8 w-8 text-resgato-purple" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and drive qualified leads through targeted audience engagement.",
      features: [
        "Engagement Ad Campaigns",
        "Traffic Targeting Campaigns",
        "Dynamic Targeting Campaigns",
        "Video View Ad Campaigns",
        "Offer Claim Campaigns",
        "Multi-Platform Management"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-resgato-purple" />,
      title: "Creative & Design Services",
      description: "Professional design solutions that elevate your brand and create compelling visual experiences that convert prospects into customers.",
      features: [
        "Email Blast Design",
        "Web Slider Design",
        "Digital Display Design",
        "Billboard Design",
        "Landing Page Design",
        "Campaign Branding"
      ]
    }
  ];

  const uniqueOpportunities = [
    {
      icon: <Target className="h-6 w-6 text-resgato-purple" />,
      title: "Quality Lead Generation",
      description: "Our advanced targeting identifies and captures high-intent automotive buyers who are ready to make purchasing decisions."
    },
    {
      icon: <Award className="h-6 w-6 text-resgato-purple" />,
      title: "Industry Specialization",
      description: "Deep automotive market knowledge combined with cutting-edge marketing expertise delivers unmatched results for dealerships."
    },
    {
      icon: <Users className="h-6 w-6 text-resgato-purple" />,
      title: "Dedicated Partnership",
      description: "We treat your dealership's success as our own, providing personalized attention and dedicated support throughout our partnership."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-resgato-purple" />,
      title: "Innovative Creative Solutions",
      description: "Our creative team develops breakthrough campaigns that maximize your marketing budget and create lasting brand impact."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-resgato-purple" />,
      title: "Analytics-Driven Strategy",
      description: "Every marketing decision is backed by comprehensive data analysis and real-time performance insights to optimize your campaigns."
    },
    {
      icon: <Car className="h-6 w-6 text-resgato-purple" />,
      title: "Automotive Market Mastery",
      description: "Our specialized focus on automotive marketing means you can concentrate on what you do best - selling vehicles while we handle the marketing."
    }
  ];

  const portfolioItems = [
    { 
      title: "New Car Dealer Creative Design", 
      category: "Creative Design",
      image: "/resgato-uploads/dealershipmarketing/newcardealer_creativedesign.png"
    },
    { 
      title: "Car Dealer Group SEO", 
      category: "SEO & Content",
      image: "/resgato-uploads/dealershipmarketing/cardealergroup_seo.png"
    },
    { 
      title: "New Car Dealer Video", 
      category: "Video Marketing",
      image: "/resgato-uploads/dealershipmarketing/newdealer_video.png"
    },
    { 
      title: "Motorcycle Dealer Email Marketing", 
      category: "Email Marketing",
      image: "/resgato-uploads/dealershipmarketing/motorcycledealer_emailmarketing.png"
    },
    { 
      title: "Used Car Dealer Sales Event", 
      category: "Event Marketing",
      image: "/resgato-uploads/dealershipmarketing/usedcardealer_salesevent.png"
    },
    { 
      title: "New Car Dealer Multi-Channel", 
      category: "Multi-Channel",
      image: "/resgato-uploads/dealershipmarketing/newcardealer_multichannel.png"
    },
    { 
      title: "Motorcycle Dealer Content Creation", 
      category: "Content Marketing",
      image: "/resgato-uploads/dealershipmarketing/motorcycledealers_contentcreation.png"
    },
    { 
      title: "Used Car Service Marketing", 
      category: "Service Marketing",
      image: "/resgato-uploads/dealershipmarketing/usedcar_servicemarketing.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Dealership Marketing Experts | Resgato | Automotive Marketing Agency"
        description="Resgato specializes in automotive dealership marketing with proven strategies for digital advertising, video marketing, social media, and creative design. Drive more sales with our data-driven approach."
        keywords="dealership marketing, automotive marketing agency, car dealership advertising, automotive digital marketing, dealership SEO, automotive PPC, car dealership social media"
        canonicalUrl="/dealershipmarketing"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-resgato-navy via-resgato-deep-purple to-resgato-purple">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                <Car className="mr-2 h-4 w-4" />
                Automotive Marketing Specialists
              </Badge>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Automotive Marketing Specialists
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Resgato delivers cutting-edge marketing solutions specifically designed for automotive dealerships. 
                Our data-driven approach combines advanced digital strategies with deep industry expertise to 
                accelerate your sales and maximize ROI.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-resgato-purple hover:bg-gray-100"
                >
                  <Link to="/contact">
                    Get a Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-black bg-white hover:bg-gray-100"
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Strengths */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resgato-navy">Why Choose Resgato</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our proven approach to automotive dealership success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <Car className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">Industry Expertise</h3>
                <p className="mt-2 text-gray-600">Specialized knowledge of automotive sales cycles and customer journey mapping</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <Target className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">Integrated Marketing</h3>
                <p className="mt-2 text-gray-600">Seamless campaigns across all touchpoints to maximize customer engagement</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <TrendingUp className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">Performance-Driven Results</h3>
                <p className="mt-2 text-gray-600">Custom strategies that deliver measurable growth and increased profitability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resgato-navy">Marketing Solutions</h2>
              <p className="mt-4 text-lg text-gray-600">
                Complete digital marketing ecosystem for automotive success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-xl text-resgato-navy">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Opportunities */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resgato-navy">Our Competitive Edge</h2>
              <p className="mt-4 text-lg text-gray-600">
                What makes Resgato the preferred choice for automotive dealerships
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {uniqueOpportunities.map((opportunity, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-resgato-navy mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resgato-navy">Success Stories</h2>
              <p className="mt-4 text-lg text-gray-600">
                Real results from our automotive marketing campaigns
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="group cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-square rounded-lg mb-4 overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-resgato-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/case-studies">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-resgato-purple">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Partner with Resgato to transform your dealership's marketing performance. 
              Our proven automotive marketing strategies deliver measurable results that 
              drive more sales, higher quality leads, and maximum return on your marketing investment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-resgato-purple hover:bg-gray-100"
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-black bg-white hover:bg-gray-100"
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DealershipMarketing;
