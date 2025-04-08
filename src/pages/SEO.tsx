import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { Search, ArrowRight, BarChart, LineChart, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, LineChart as RechartLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Link } from 'react-router-dom';

const SEO = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">The SEO Agency</span> For You
                </h1>
                <p className="text-xl text-gray-700 max-w-lg">
                  SEO stands for search engine optimization, but you probably already knew that. In simple terms, it means the process of improving your site to increase its visibility on search engines.
                </p>
                <p className="text-lg text-gray-700 max-w-lg">
                  With a strong SEO strategy, your business can own top keywords on Google and ultimately get organic traffic and more conversions from your website, at no cost in the future.
                </p>
                <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
                  <Link to="/contact">
                    Get a Free SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
                <div className="bg-resgato-light-purple w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Search className="text-resgato-deep-purple h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Comprehensive SEO Solutions</h2>
                <p className="text-gray-600 mb-6">Our data-driven approach focuses on what matters most: driving qualified traffic that converts into customers.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Keyword Research & Strategy</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">On-Page SEO Optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Technical SEO & Site Structure</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Content Strategy & Creation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Strategy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Your SEO Equity</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SEO is a marketing strategy that ultimately takes more time than other channels, but it is one that builds you equity. The more you put in today, the more you can expect to get out of it in the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-resgato-light-purple/50 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Long-Term Investment</h3>
                  <p className="text-gray-600">
                    Unlike paid advertising that stops when you stop funding it, SEO continues to deliver results over time, providing ongoing value and reducing your customer acquisition costs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-resgato-light-purple/50 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
                  <p className="text-gray-600">
                    SEO builds a foundation for sustainable business growth by targeting users actively searching for your products or services, resulting in higher quality leads.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-resgato-light-purple/50 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-resgato-light-purple text-resgato-deep-purple">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
                  <p className="text-gray-600">
                    Our comprehensive reporting allows you to track key metrics like organic traffic growth, keyword rankings, and conversion rates to measure your SEO ROI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
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
        
        {/* Services Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to improve your search rankings and drive sustainable organic growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Research & Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive audit of your website, competitive landscape, and target keyword opportunities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                <p className="text-gray-600">
                  Creation of a tailored SEO roadmap with specific recommendations and priorities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Executing on-page, technical, and content optimizations to improve search visibility.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-resgato-light-purple/30 rounded-lg p-6 shadow-md">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-resgato-purple font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Monitoring & Refinement</h3>
                <p className="text-gray-600">
                  Continuous tracking of results and ongoing optimization to maximize performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
