
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  // Calculate years in business from 2012 to current year
  const yearsFounded = new Date().getFullYear() - 2012;
  
  const stats = [
    {
      value: `${yearsFounded}+`,
      label: 'Years in Business'
    },
    {
      value: '500+',
      label: 'Keywords Ranked'
    },
    {
      value: '200+',
      label: 'Satisfied Clients'
    },
    {
      value: '40%',
      label: 'Avg. Traffic Increase'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Our Impact By The Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <p className="text-3xl md:text-5xl font-bold text-resgato-deep-purple mb-1 md:mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
