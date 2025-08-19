import React from 'react';
import PageHelmet from '@/components/PageHelmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const About = () => {
  const teamMembers = [
    {
      name: 'Taylor Brody',
      position: 'Founder & CEO',
      bio: 'Founded Resgato in 2012 with a vision to help businesses avoid digital obscurity. With over 18 years of experience in digital marketing, Taylor has led the agency to become a trusted partner for businesses across various industries.',
    },
    {
      name: 'Julian Ureña',
      position: 'Head of Ad Operations',
      bio: 'Strategic advertising expert specializing in campaign management and optimization. Leverages data-driven insights to deliver exceptional ROI across multiple advertising platforms.',
    },
    {
      name: 'Nitin Bhatnagar',
      position: 'SEO Manager',
      bio: 'Expert in search engine optimization with a passion for driving organic traffic and improving search rankings. Specializes in on-page and technical SEO to help clients achieve maximum visibility.',
    },
    {
      name: 'Carlos Piccardo',
      position: 'Social Media Marketing',
      bio: 'Creative social media strategist with expertise in building engaging brand presences across multiple platforms. Skilled in content creation, community management, and social advertising campaigns.',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHelmet 
        title="About Resgato | Utah's Award-Winning Digital Marketing & SEO Agency | Salt Lake City"
        description="Meet Resgato, Salt Lake City's trusted digital marketing partner. Our team of certified experts combines local market knowledge with cutting-edge strategies to deliver exceptional results for Utah businesses."
        canonicalUrl="/about"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">About Resgato | Utah's Premier Digital Marketing Agency</h1>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Utah's Premier <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Digital Marketing Agency & SEO Firm</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              As a leading marketing firm in Salt Lake City, we combine expert SEO, PPC, and content marketing strategies with professional management services to drive exceptional results for Utah businesses.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Resgato Digital Marketing Agency was founded in 2012 as a premier marketing firm in Salt Lake City, Utah. The name "Resgato" (pronounced 'res-gah-toe') means "to rescue" in Portuguese, reflecting our mission to help businesses avoid obscurity through effective digital marketing strategies and expert management services.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                As a full-service digital marketing agency, we've built our reputation on delivering comprehensive online marketing solutions that combine SEO expertise, strategic content marketing, and professional ad agency services. Our approach is tailored to each client's unique needs, ensuring maximum ROI and sustainable growth.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Today, Resgato stands as Utah's trusted digital marketing partner, offering end-to-end management of your online presence. From SEO optimization to content marketing and PPC campaigns, we provide the expertise and strategic planning needed to elevate your brand in the digital landscape.
              </p>
            </div>
            <div className="space-y-8">
              <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <OptimizedImage 
                  src="/resgato-uploads/headshot.jpeg" 
                  alt="Taylor Brody - Founder & CEO of Resgato Digital Marketing Agency"
                  className="w-full h-full object-cover"
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="section-title">Why Choose Resgato?</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                As Utah's premier digital marketing agency, we combine technical expertise with strategic thinking to deliver exceptional results for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Proven Experience</h3>
                <p className="text-gray-700">
                  With over a decade of experience in digital marketing, we've helped hundreds of businesses achieve their growth goals through strategic campaigns and expert management.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Clear Communication</h3>
                <p className="text-gray-700">
                  We believe in transparent, regular communication. Our team provides detailed reports and regular updates, ensuring you're always informed about your campaign's performance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">SMB Expertise</h3>
                <p className="text-gray-700">
                  We specialize in helping small and medium-sized businesses grow. Our strategies are tailored to your budget and goals, ensuring maximum ROI for your marketing investment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Technical Excellence</h3>
                <p className="text-gray-700">
                  Our team includes expert web developers and designers who ensure your digital presence is not just beautiful, but also technically sound and optimized for performance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Creative Design</h3>
                <p className="text-gray-700">
                  From stunning graphics to compelling content, our creative team crafts visually appealing materials that capture attention and drive engagement across all platforms.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-700">
                  We offer end-to-end digital marketing services, from SEO and PPC to content creation and social media management, all under one roof for seamless coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts combines deep knowledge in digital marketing to deliver innovative solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-resgato-purple font-medium mb-2 md:mb-3">{member.position}</p>
                    <p className="text-sm md:text-base text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="section-title">Our Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of digital marketing services tailored to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-resgato-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SEO Services & Consulting</h3>
                  <p className="text-gray-700 mb-5">
                    As a leading SEO firm in Utah, we provide comprehensive search engine optimization services that improve your visibility, drive targeted traffic, and establish your brand as an authority. Our expert management ensures your online presence reaches its full potential.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/seo">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-resgato-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">PPC & SEM</h3>
                  <p className="text-gray-700 mb-5">
                    Our ad agency team specializes in creating and managing targeted PPC campaigns that maximize ROI. We handle everything from consultation and planning to campaign creation and ongoing optimization, ensuring your marketing investment delivers exceptional results.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/ppc">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-resgato-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Social Media Marketing</h3>
                  <p className="text-gray-700 mb-5">
                    We assist in engaging with current audiences and identifying new ones, including automation to manage ongoing maintenance. Our strategies help build your brand presence and foster meaningful connections with your target audience.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/social-media-marketing">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-resgato-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Email Marketing</h3>
                  <p className="text-gray-700 mb-5">
                    We develop comprehensive email marketing programs with expert management of capture forms, drip campaigns, and segmentation. Our strategic approach to email marketing nurtures leads, boosts retention, and drives measurable results for your business.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/email-marketing">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8 md:mb-12">
              <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="aspect-[4/3] w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
              <OptimizedImage 
                src="/resgato-uploads/aicoding.jpg" 
                alt="Resgato's AI and coding expertise in action"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
