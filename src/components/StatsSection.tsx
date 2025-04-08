
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    {
      value: '11+',
      label: 'Years of Experience'
    },
    {
      value: '5',
      label: 'Industry Certifications'
    },
    {
      value: '100+',
      label: 'Satisfied Clients'
    },
    {
      value: '3',
      label: 'Core Services'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <p className="text-4xl md:text-5xl font-bold text-resgato-deep-purple mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
