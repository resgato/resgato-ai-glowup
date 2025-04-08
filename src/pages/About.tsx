import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Taylor Brody',
      position: 'Founder & CEO',
      bio: 'Founded Resgato in 2012 with a vision to help businesses avoid digital obscurity. With over 18 years of experience in digital marketing, Taylor has led the agency to become a trusted partner for businesses across various industries.',
      image: '/lovable-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png'
    },
    {
      name: 'Parker Gardner',
      position: 'Head of Ad Operations',
      bio: 'Strategic advertising expert specializing in campaign management and optimization. Leverages data-driven insights to deliver exceptional ROI across multiple advertising platforms.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Sophia Chen',
      position: 'Chief AI Officer',
      bio: 'PhD in Machine Learning with extensive experience developing AI solutions for marketing applications. Leading our AI research and implementation to keep Resgato at the cutting edge of digital marketing technology.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Marcus Williams',
      position: 'Head of Marketing Strategy',
      bio: 'Former CMO with expertise in developing data-driven marketing strategies. Specializes in helping clients implement customized digital marketing solutions that deliver measurable results.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Olivia Rodriguez',
      position: 'Director of Client Success',
      bio: 'Dedicated to ensuring our clients achieve exceptional results through our tailored marketing solutions. Expert in measuring and optimizing ROI while maintaining strong client relationships.',
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
              Founded in 2012, we're a dedicated team of digital marketing experts based in Salt Lake City, Utah, committed to rescuing brands from obscurity.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Resgato Digital Marketing Agency was founded in 2012 by Taylor Brody in Salt Lake City, Utah. The name "Resgato" (pronounced 'res-gah-toe') means "to rescue" in Portuguese, reflecting our mission to help businesses avoid obscurity through effective digital marketing strategies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Since our inception, we've operated on the principle that every client and their customers are unique. This understanding has shaped our approach to digital marketing, where we tailor strategies to each client's specific needs rather than applying a one-size-fits-all solution.
              </p>
              <p className="text-lg text-gray-700">
                Today, Resgato is recognized as a strategic partner for businesses across various industries. We remain committed to our founding mission: elevating brands through well-rounded digital campaigns that deliver timely, realistic results aligned with our clients' budgets and focused on their long-term satisfaction.
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
                  <p className="text-gray-800"><span className="font-semibold">Personalized Approach:</span> We recognize the uniqueness of each client and their customers, tailoring our strategies accordingly.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Results-Driven:</span> Our focus is on delivering measurable outcomes that align with your business goals and budget.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Comprehensive Services:</span> From SEO and PPC to social media and email marketing, we offer a complete range of digital marketing solutions.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Strategic Partnership:</span> We position ourselves as an extension of your team, committed to your long-term success.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800"><span className="font-semibold">Local Expertise:</span> Based in Salt Lake City, we bring a deep understanding of both local and national markets.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of digital marketing services tailored to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-resgato-light-purple w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SEO Services & Consulting</h3>
                  <p className="text-gray-700 mb-5">
                    We believe SEO is essential for any online presence, regardless of business size. Our organic search strategies help improve your visibility, drive targeted traffic, and establish your brand as an authority in your industry.
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
                    Our customized pay-per-click campaigns are developed to lower cost per acquisition and increase return on investment. We handle consultation, planning, campaign creation, and ongoing optimization to ensure maximum ROI.
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
                    We develop automated email marketing programs using optimized capture forms, drip campaigns, segmentation, and strong copy. Our email strategies nurture leads, boost customer retention, and drive conversions.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/email-marketing">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts combines deep knowledge in digital marketing to deliver innovative solutions tailored to your business needs.
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
