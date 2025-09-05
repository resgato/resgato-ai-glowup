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
      description: "Target your prospects with display ads based on the searches they perform across the web, more often, and more effectively with our keyword-level search retargeting.",
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
      description: "We create or adapt your video ads and deliver them where they matter most—YouTube, Facebook, OTT platforms, and beyond.",
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
      description: "Our social media marketing strategies cover all stages of the buyer's journey, with Facebook as our backbone for reaching people in micro-moments.",
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
      description: "From email blasts to billboard design, we create compelling visual content that drives engagement and conversions.",
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
      title: "Better Leads, More Sales",
      description: "We utilize an in-market target strategy to gain more leads lower in the sales funnel rather than grasping for higher funnel shoppers with a smaller chance of conversion."
    },
    {
      icon: <Award className="h-6 w-6 text-resgato-purple" />,
      title: "Automotive Specialized",
      description: "Our team combines advertising expertise with automotive industry insight, allowing Resgato to be like no other agency in the world."
    },
    {
      icon: <Users className="h-6 w-6 text-resgato-purple" />,
      title: "Service With A Smile",
      description: "We're unmatched in the industry when it comes to customer care and loyalty. Once you've hired us, your business is our business."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-resgato-purple" />,
      title: "Creative Brain Power",
      description: "You won't find a better creative team in the industry. We know media budgets only go so far, whereas great creative has endless reach."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-resgato-purple" />,
      title: "Data-Driven Evidence",
      description: "We make advertising decisions based on data, not 'a feeling.' Our analytics team spends hours each day breaking down digital market trends."
    },
    {
      icon: <Car className="h-6 w-6 text-resgato-purple" />,
      title: "We Know Cars. We Drive Sales",
      description: "We've spent years in automotive marketing so you can focus on selling cars. Our deep expertise delivers real results."
    }
  ];

  const portfolioItems = [
    { title: "Dealership Campaign 1", category: "Digital Marketing" },
    { title: "Auto Sales Campaign 2", category: "Video Production" },
    { title: "Service Department 3", category: "Social Media" },
    { title: "Used Car Lot 4", category: "PPC Campaigns" },
    { title: "New Vehicle Launch 5", category: "Creative Design" },
    { title: "Service Special 6", category: "Email Marketing" },
    { title: "Holiday Sale 7", category: "Multi-Channel" },
    { title: "Brand Awareness 8", category: "Brand Strategy" }
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
                Dealership Marketing Experts
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Resgato is an award-winning marketing agency specializing in automotive dealership marketing. 
                We focus on converting in-market shoppers through targeted digital campaigns, CRM optimization, 
                and attribution analytics.
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
              <h2 className="text-3xl font-bold text-resgato-navy">Key Strengths</h2>
              <p className="mt-4 text-lg text-gray-600">
                What sets us apart in automotive marketing
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <Car className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">Automotive Expertise</h3>
                <p className="mt-2 text-gray-600">Deep understanding of the automotive industry and consumer behavior</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <Target className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">Multi-Channel Strategy</h3>
                <p className="mt-2 text-gray-600">Integrated campaigns across digital, video, social, and traditional media</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <TrendingUp className="h-8 w-8 text-resgato-purple" />
                </div>
                <h3 className="text-xl font-semibold text-resgato-navy">ROI-Focused Solutions</h3>
                <p className="mt-2 text-gray-600">Creative solutions tailored to dealerships that deliver measurable results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-resgato-navy">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive marketing solutions for automotive dealerships
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
              <h2 className="text-3xl font-bold text-resgato-navy">Why Choose Resgato?</h2>
              <p className="mt-4 text-lg text-gray-600">
                We've spent years in automotive marketing so you can focus on selling cars
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
              <h2 className="text-3xl font-bold text-resgato-navy">Our Portfolio</h2>
              <p className="mt-4 text-lg text-gray-600">
                Check out our custom campaigns that combine eye-catching visuals and strategic messaging
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="group cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-resgato-light-purple to-resgato-purple rounded-lg mb-4 flex items-center justify-center">
                      <Car className="h-12 w-12 text-white" />
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
              Let's Drive Results Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              At Resgato, we don't just create campaigns—we deliver measurable outcomes. 
              With a proven track record in automotive marketing, we're here to help your 
              dealership sell more cars, generate quality leads, and maximize your advertising ROI.
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
