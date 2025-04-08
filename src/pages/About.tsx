
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      bio: 'Over 15 years of experience in digital marketing and AI technology. Previously led marketing at tech giants before founding Resgato.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Sophia Chen',
      position: 'Chief AI Officer',
      bio: 'PhD in Machine Learning with extensive experience developing AI solutions for marketing applications. Leading our AI research and implementation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Marcus Williams',
      position: 'Head of Marketing Strategy',
      bio: 'Former CMO with expertise in developing data-driven marketing strategies. Specializes in helping clients implement AI marketing solutions.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Olivia Rodriguez',
      position: 'Director of Client Success',
      bio: 'Dedicated to ensuring our clients achieve exceptional results through our AI marketing solutions. Expert in measuring and optimizing ROI.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Resgato</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're a team of AI marketing experts dedicated to transforming businesses through innovative, data-driven strategies.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Resgato was founded in 2018 with a simple yet powerful vision: to bridge the gap between advanced AI technologies and practical marketing applications. We recognized that while artificial intelligence was transforming many industries, marketing teams were struggling to effectively implement these technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting with a small team of AI specialists and marketing experts, we began developing customized solutions that helped businesses harness the power of AI to enhance their marketing efforts. Our innovative approach quickly gained recognition, and our client base grew rapidly.
              </p>
              <p className="text-lg text-gray-700">
                Today, Resgato is a leading AI Marketing Consultancy, serving clients across various industries worldwide. We remain committed to our founding mission: empowering businesses with AI-driven marketing strategies that drive real results.
              </p>
            </div>
            <div className="bg-resgato-light-purple rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Resgato?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Specialized Expertise:</span> Our team consists of experts in both AI technology and marketing strategy.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Custom Solutions:</span> We develop tailored strategies specific to your business needs and goals.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Proven Results:</span> Our strategies have helped hundreds of businesses increase ROI and achieve sustainable growth.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Cutting-Edge Innovation:</span> We continuously research and integrate the latest advancements in AI technology.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Client-Centric Approach:</span> We prioritize understanding your unique challenges and objectives.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts combines deep knowledge in AI technology and marketing strategy to deliver innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-none shadow-lg overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-resgato-purple font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
