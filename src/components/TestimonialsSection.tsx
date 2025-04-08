
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Taylor with Resgato Digital Marketing is phenomenal, he has helped our business SEO tremendously. Thanks guys!",
      author: "Mersadi Olson",
      date: "Aug 17, 2023",
      position: "",
      company: ""
    },
    {
      quote: "Working with Taylor has been so helpful! SEO and analytics can sometimes be tough to understand if you don't know what you're looking at - but Taylor really took the time to explain them both as well as educate our team on how to improve them. Having someone not only very knowledgable but professional to work with made something that once seemed so difficult much, much easier.",
      author: "Nicole Marriner",
      date: "Jul 26, 2021",
      position: "",
      company: ""
    },
    {
      quote: "Started working with Resgato at the end of 2020 and to this date, it's been one of the very best business decisions I've ever made. Taylor is extremely knowledgeable about the industry and was able to create a business plan for me and he executed flawlessly. Before resgato I was trying to gain a larger online presence and was wasting countless dollars floating into the dark unknown. As I type this today, I've received millions of impressions and have seen a steady increase in growth across my online platform. It's truly remarkable what this team can do.",
      author: "Doug Cartwright",
      date: "Dec 6, 2021",
      position: "",
      company: "",
      tags: ["Quality", "Professionalism", "Value"]
    },
    {
      quote: "After working with Taylor and the team at Resgato, I have to say that I am more than pleased with the service. They are timely, diligent, fast with communications and very creative!",
      author: "Miguel Angel Lacava Apolloni",
      date: "Jan 10, 2023",
      position: "",
      company: ""
    }
  ];

  return (
    <section className="bg-resgato-light-purple/30 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what real clients have to say about their experience working with Resgato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-none h-full transition-transform hover:shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-500 text-sm">{testimonial.date}</span>
                </div>
                <p className="text-gray-700 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.author}</p>
                  {testimonial.position && testimonial.company && (
                    <p className="text-gray-600 text-xs md:text-sm">{testimonial.position}, {testimonial.company}</p>
                  )}
                  {testimonial.tags && testimonial.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {testimonial.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-resgato-light-purple/50 text-resgato-deep-purple px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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
