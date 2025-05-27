import React, { useEffect } from 'react';
import PageHelmet from '@/components/PageHelmet';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');

  useEffect(() => {
    // Load Calendly script
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    head?.appendChild(script);

    // Load HubSpot chat widget script
    const hubspotScript = document.createElement('script');
    hubspotScript.setAttribute('type', 'text/javascript');
    hubspotScript.setAttribute('id', 'hs-script-loader');
    hubspotScript.setAttribute('async', 'true');
    hubspotScript.setAttribute('defer', 'true');
    hubspotScript.setAttribute('src', 'https://js.hs-scripts.com/9144894.js');
    head?.appendChild(hubspotScript);

    return () => {
      // Clean up scripts when component unmounts
      head?.removeChild(script);
      const hubspotScriptElement = document.getElementById('hs-script-loader');
      if (hubspotScriptElement && head?.contains(hubspotScriptElement)) {
        head?.removeChild(hubspotScriptElement);
      }
    };
  }, []);

    return (
        <div className="min-h-screen flex flex-col">
          <PageHelmet 
            title="Contact Resgato | Utah's Trusted Digital Marketing Partner"
            description="Ready to grow your Utah business? Get a free digital marketing consultation with Resgato's experts. We'll analyze your current strategy and provide actionable insights to improve your results."
            canonicalUrl="/contact"
          />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Resgato</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your marketing with AI? Our team is here to help you get started.
            </p>
          </div>
        </section>

        {/* Calendar Scheduling Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Schedule a Consultation</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Pick a time that works for you and let's discuss how we can help your business grow.
            </p>
            <div className="h-[650px] w-full overflow-hidden">
              <iframe 
                src="https://calendly.com/resgato/consultation?embed_domain=resgato.com&embed_type=Inline&month=2025-04"
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Calendly Scheduling"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you have questions about our services, want to schedule a consultation, or are ready to start your AI marketing journey, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-resgato-light-purple rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">(801) 742-1540</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-resgato-light-purple rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">help@resgato.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-resgato-light-purple rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">
                      Salt Lake City, Utah<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-resgato-light-purple rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-resgato-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-resgato-light-purple hover:bg-resgato-purple text-resgato-deep-purple hover:text-white rounded-full p-3 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-resgato-light-purple hover:bg-resgato-purple text-resgato-deep-purple hover:text-white rounded-full p-3 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-resgato-light-purple hover:bg-resgato-purple text-resgato-deep-purple hover:text-white rounded-full p-3 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/resgatomarketing" target="_blank" rel="noopener noreferrer" className="bg-resgato-light-purple hover:bg-resgato-purple text-resgato-deep-purple hover:text-white rounded-full p-3 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm initialService={service} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hidden iframe for HubSpot chat widget (fallback) */}
        <div className="hidden">
          <iframe 
            src="https://app.hubspot.com/conversations-visitor/9144894/threads/utk/fe43b4c07df24f5daaf09ec16c7bcbbe?uuid=3d2d3af714fd4762b4a292f7a9bd99b9&mobile=false&mobileSafari=false&hideWelcomeMessage=false&hstc=168135358.65115e8f3ea118c0217158e139fed27a.1743014580020.1743014580020.1744086411985.2&domain=resgato.com&inApp53=false&messagesUtk=fe43b4c07df24f5daaf09ec16c7bcbbe&url=https%3A%2F%2Fresgato.com%2Fconsultation%2F&inline=false&isFullscreen=false&globalCookieOptOut=&isFirstVisitorSession=false&isAttachmentDisabled=false&isInitialInputFocusDisabled=false&enableWidgetCookieBanner=false&isInCMS=false&hideScrollToButton=true&isIOSMobile=false&hubspotUtk=65115e8f3ea118c0217158e139fed27a" 
            id="hubspot-conversations-iframe" 
            title="Chat Widget" 
            allowFullScreen 
            data-test-id="chat-widget-iframe"
            style={{ display: 'none' }}
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
