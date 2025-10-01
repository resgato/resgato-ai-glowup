import React from 'react';
import { CheckCircle, Target, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SEOStrategy = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Building Your SEO Equity
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            SEO is a marketing strategy that ultimately takes more time than
            other channels, but it is one that builds you equity. The more you
            put in today, the more you can expect to get out of it in the
            future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border border-resgato-light-purple/50 shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Long-Term Investment</h3>
              <p className="text-gray-600">
                Unlike paid advertising that stops when you stop funding it, SEO
                continues to deliver results over time, providing ongoing value
                and reducing your customer acquisition costs.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-resgato-light-purple/50 shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Sustainable Growth</h3>
              <p className="text-gray-600">
                SEO builds a foundation for sustainable business growth by
                targeting users actively searching for your products or
                services, resulting in higher quality leads.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-resgato-light-purple/50 shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Measurable Results</h3>
              <p className="text-gray-600">
                Our comprehensive reporting allows you to track key metrics like
                organic traffic growth, keyword rankings, and conversion rates
                to measure your SEO ROI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOStrategy;
