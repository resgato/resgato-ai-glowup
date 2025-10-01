import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';

const StatsSection = () => {
  const location = useLocation();

  // Default stats for general pages
  let stats = [
    {
      value: '13+',
      label: 'Years in Business',
    },
    {
      value: 'Millions',
      label: 'Impressions',
    },
    {
      value: '25k+',
      label: 'Leads Generated',
    },
    {
      value: '$500k+',
      label: 'Marketing Budget Managed',
    },
  ];

  // PPC-specific stats
  if (location.pathname === '/ppc') {
    stats = [
      {
        value: '$350 billion',
        label: 'Global PPC Spend',
      },
      {
        value: '6.42%',
        label: 'Average CTR',
      },
      {
        value: '$8',
        label: 'Profit per $1 Spent',
      },
      {
        value: '47%',
        label: 'Global Purchases Made Online',
      },
    ];
  }

  // Email Marketing specific stats
  if (location.pathname === '/email-marketing') {
    stats = [
      {
        value: '4.3B',
        label: 'Global Email Users',
      },
      {
        value: '333B',
        label: 'Daily Emails Sent',
      },
      {
        value: '$42',
        label: 'AverageROI per $1 Spent',
      },
      {
        value: '72%',
        label: 'Prefer Email for Business Communication',
      },
    ];
  }

  // Blog-specific stats
  if (location.pathname.includes('/blog')) {
    stats = [
      {
        value: '73%',
        label: 'Consumers Trust Content Marketing',
      },
      {
        value: '70%',
        label: 'Prefer Articles to Ads',
      },
      {
        value: '3x',
        label: 'More Leads Than Paid Search',
      },
      {
        value: '6x',
        label: 'Higher Conversion Rate',
      },
    ];
  }

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Our Impact By The Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-4 text-center md:p-6">
                <p className="mb-1 text-3xl font-bold text-resgato-deep-purple md:mb-2 md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 md:text-base">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
