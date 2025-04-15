
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What PPC services do you offer in Utah?",
      answer: "Our Utah PPC services include Google Ads management, Microsoft Advertising, landing page optimization, conversion tracking & optimization, remarketing campaigns, and comprehensive PPC strategy development specifically tailored for local Utah businesses. We work with companies across Salt Lake City, Provo, Ogden, and throughout Utah to deliver results-driven paid advertising campaigns."
    },
    {
      question: "How much does PPC management cost in Utah?",
      answer: "Our PPC management services for Utah businesses typically range from $1,000-$5,000 monthly depending on campaign scale and ad spend. We structure our fees to ensure you receive maximum value and ROI from your PPC investment. We're transparent about our pricing and work with businesses of various sizes throughout Utah."
    },
    {
      question: "How long does it take to see results from PPC in Utah?",
      answer: "While initial results can be seen almost immediately, optimal performance for Utah PPC campaigns typically takes 2-3 months as we refine targeting, messaging, and bidding strategies based on data collected from your specific market and audience. The Utah market has its unique characteristics that we factor into our optimization process."
    },
    {
      question: "Do you work with specific industries in Utah?",
      answer: "Yes, we have experience working with a wide range of industries in Utah, including healthcare, legal, real estate, home services, ecommerce, technology, education, and more. We understand the competitive landscape for different sectors within the Utah market and tailor our PPC strategies accordingly."
    },
    {
      question: "What makes your Utah PPC services different from other agencies?",
      answer: "As a Utah-based agency, we have deep knowledge of the local market dynamics, consumer behavior, and competitive landscape. Our team consists of Google Ads certified specialists who focus solely on delivering measurable results through data-driven strategies, continuous optimization, and transparent reporting. We pride ourselves on being true partners in our clients' success, not just service providers."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions About Utah PPC Services</h2>
          <p className="text-xl text-gray-600">
            Common questions about our PPC management services for Utah businesses
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Have more questions about our Utah PPC services?
          </p>
          <p className="text-lg font-medium text-resgato-purple">
            <a href="/contact" className="hover:underline">Contact our Salt Lake City team today</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
