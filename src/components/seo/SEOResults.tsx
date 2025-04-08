
import React from 'react';
import { Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, LineChart as RechartLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';

const SEOResults = () => {
  const performanceData = [
    { month: 'Sep', clicks: 10, impressions: 150 },
    { month: 'Oct', clicks: 25, impressions: 500 },
    { month: 'Nov', clicks: 85, impressions: 1500 },
    { month: 'Dec', clicks: 150, impressions: 3000 },
    { month: 'Jan', clicks: 220, impressions: 4500 },
    { month: 'Feb', clicks: 250, impressions: 6000 },
    { month: 'Mar', clicks: 280, impressions: 7500 },
    { month: 'Apr', clicks: 350, impressions: 10000 },
    { month: 'May', clicks: 400, impressions: 14000 },
    { month: 'Jun', clicks: 500, impressions: 16000 },
  ];

  const statsCards = [
    { title: 'Total clicks', value: '58.1K', color: 'bg-blue-500', selected: true },
    { title: 'Total impressions', value: '2M', color: 'bg-purple-600', selected: true },
    { title: 'Average CTR', value: '2.9%', color: 'bg-white', selected: false },
    { title: 'Average position', value: '15.1', color: 'bg-white', selected: false },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Results You Can Expect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven SEO strategies have helped businesses of all sizes achieve significant growth in organic traffic and conversions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">More Visitors</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We identify relevant search keywords for your target demographic.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We optimize your website and online presence to maximize your potential for exposure.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We build out targeted content on your website to improve the traffic on your identified keywords.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-12 w-12 text-resgato-purple" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">More Conversions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">We help convert your new traffic into leads by creating compelling call-to-action's for the traffic.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">The new traffic will enter into your retargeting funnel and increase return on display advertising.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Your new content can increase PPC conversion rates and add more ammo to your content marketing strategies.</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Performance Data Visualization */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Sample SEO Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {statsCards.map((stat, index) => (
              <Card 
                key={index} 
                className={`${stat.selected ? stat.color : 'bg-white'} border-gray-200 shadow-sm`}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      checked={stat.selected} 
                      readOnly 
                      className="h-4 w-4 text-resgato-purple"
                    />
                    <span className={`ml-2 text-xs font-medium ${stat.selected && stat.color !== 'bg-white' ? 'text-white' : 'text-gray-600'}`}>
                      {stat.title}
                    </span>
                  </div>
                  <p className={`text-3xl font-bold ${stat.selected && stat.color !== 'bg-white' ? 'text-white' : 'text-gray-800'}`}>
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="h-[350px] mt-8">
            <ChartContainer config={{
              clicks: { label: 'Clicks', color: '#3b82f6' },
              impressions: { label: 'Impressions', color: '#8b5cf6' }
            }}>
              <RechartLineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis yAxisId="left" stroke="#3b82f6" orientation="left" />
                <YAxis yAxisId="right" stroke="#8b5cf6" orientation="right" />
                <ChartTooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Clicks"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="impressions" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                  name="Impressions"
                />
              </RechartLineChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOResults;
