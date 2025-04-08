
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProcessSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How we implement AI marketing solutions to achieve your business goals.
        </p>
      </div>

      <Tabs defaultValue="discovery" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <TabsTrigger value="discovery" className="text-lg py-3">Discovery</TabsTrigger>
          <TabsTrigger value="strategy" className="text-lg py-3">Strategy</TabsTrigger>
          <TabsTrigger value="implementation" className="text-lg py-3">Implementation</TabsTrigger>
          <TabsTrigger value="optimization" className="text-lg py-3">Optimization</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discovery" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">1. Discovery & Analysis</h3>
          <p className="text-lg text-gray-700 mb-6">
            We begin by thoroughly understanding your business, industry, target audience, and marketing objectives. Our team conducts a comprehensive analysis of your current marketing efforts, collects and analyzes relevant data, and identifies opportunities for AI implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Business Analysis</h4>
              <p className="text-gray-700">In-depth review of your business model, objectives, and challenges.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Data Assessment</h4>
              <p className="text-gray-700">Evaluation of available data sources, quality, and potential use cases.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Opportunity Identification</h4>
              <p className="text-gray-700">Pinpointing areas where AI can drive the most significant improvements.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="strategy" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">2. Strategy Development</h3>
          <p className="text-lg text-gray-700 mb-6">
            Based on our discovery findings, we develop a customized AI marketing strategy tailored to your specific needs and goals. This includes selecting the most appropriate AI technologies, defining key performance indicators (KPIs), and creating a detailed implementation roadmap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Technology Selection</h4>
              <p className="text-gray-700">Identifying the most effective AI tools and platforms for your needs.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">KPI Definition</h4>
              <p className="text-gray-700">Establishing clear metrics to measure the success of AI implementations.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Implementation Planning</h4>
              <p className="text-gray-700">Creating a detailed roadmap for integrating AI into your marketing ecosystem.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="implementation" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">3. Implementation & Integration</h3>
          <p className="text-lg text-gray-700 mb-6">
            We execute the strategy by implementing the selected AI technologies and integrating them with your existing marketing systems. Our team provides training and support to ensure your team understands how to utilize these new tools effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Technology Deployment</h4>
              <p className="text-gray-700">Implementing and configuring AI solutions to match your requirements.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">System Integration</h4>
              <p className="text-gray-700">Connecting AI tools with your existing marketing technology stack.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Team Training</h4>
              <p className="text-gray-700">Equipping your team with the knowledge to leverage AI marketing tools.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="optimization" className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">4. Monitoring & Optimization</h3>
          <p className="text-lg text-gray-700 mb-6">
            After implementation, we continuously monitor the performance of your AI marketing initiatives, analyze results against the defined KPIs, and make data-driven adjustments to optimize performance and maximize ROI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Performance Monitoring</h4>
              <p className="text-gray-700">Tracking key metrics to assess the effectiveness of AI implementations.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Data Analysis</h4>
              <p className="text-gray-700">Interpreting results to identify trends, insights, and areas for improvement.</p>
            </div>
            <div className="bg-resgato-light-purple/50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Continuous Refinement</h4>
              <p className="text-gray-700">Making data-driven adjustments to optimize AI marketing performance.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProcessSection;
