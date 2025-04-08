
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Resgato's AI marketing strategies helped us increase our conversion rates by 45% in just three months. Their team is incredibly knowledgeable and responsive.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc."
    },
    {
      quote: "The predictive analytics provided by Resgato gave us insights we never thought possible. We've been able to anticipate market trends and stay ahead of our competition.",
      author: "Michael Chen",
      position: "CEO",
      company: "Horizon Digital"
    },
    {
      quote: "Working with Resgato transformed our content strategy. Their AI-powered approach helped us create personalized content that resonates with our audience.",
      author: "Emily Rodriguez",
      position: "Head of Content",
      company: "Global Media Group"
    }
  ];

  return (
    <section className="bg-resgato-light-purple/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Resgato's AI marketing solutions have helped businesses achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-none h-full">
              <CardContent className="p-8">
                <svg className="h-10 w-10 text-resgato-purple mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-2zm12 0v6c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6V8h-2z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
