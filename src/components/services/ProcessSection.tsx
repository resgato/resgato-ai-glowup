
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProcessSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title">Our Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How we implement AI marketing solutions to achieve your business goals.
        </p>
      </div>

      <Tabs defaultValue="discovery" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <TabsTrigger value="discovery" className="text-lg py-3 transition-all duration-200">Discovery</TabsTrigger>
          <TabsTrigger value="strategy" className="text-lg py-3 transition-all duration-200">Strategy</TabsTrigger>
          <TabsTrigger value="implementation" className="text-lg py-3 transition-all duration-200">Implementation</TabsTrigger>
          <TabsTrigger value="optimization" className="text-lg py-3 transition-all duration-200">Optimization</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discovery" className="p-6 bg-white rounded-lg shadow-md border border-resgato-light-purple/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 pb-4 border-b border-resgato-light-purple/30">
            <div className="bg-resgato-blue/10 rounded-full p-3">
              <span className="text-2xl font-bold text-resgato-blue">1</span>
            </div>
            <h3 className="text-2xl font-bold text-resgato-navy">Discovery & Analysis</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We begin by thoroughly understanding your business, industry, target audience, and marketing objectives. Our team conducts a comprehensive analysis of your current marketing efforts, collects and analyzes relevant data, and identifies opportunities for AI implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Business Analysis</h4>
              <p className="text-gray-700">In-depth review of your business model, objectives, and challenges.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Data Assessment</h4>
              <p className="text-gray-700">Evaluation of available data sources, quality, and potential use cases.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Opportunity Identification</h4>
              <p className="text-gray-700">Pinpointing areas where AI can drive the most significant improvements.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="strategy" className="p-6 bg-white rounded-lg shadow-md border border-resgato-light-purple/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 pb-4 border-b border-resgato-light-purple/30">
            <div className="bg-resgato-blue/10 rounded-full p-3">
              <span className="text-2xl font-bold text-resgato-blue">2</span>
            </div>
            <h3 className="text-2xl font-bold text-resgato-navy">Strategy Development</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Based on our discovery findings, we develop a customized AI marketing strategy tailored to your specific needs and goals. This includes selecting the most appropriate AI technologies, defining key performance indicators (KPIs), and creating a detailed implementation roadmap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Technology Selection</h4>
              <p className="text-gray-700">Identifying the most effective AI tools and platforms for your needs.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">KPI Definition</h4>
              <p className="text-gray-700">Establishing clear metrics to measure the success of AI implementations.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Implementation Planning</h4>
              <p className="text-gray-700">Creating a detailed roadmap for integrating AI into your marketing ecosystem.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="implementation" className="p-6 bg-white rounded-lg shadow-md border border-resgato-light-purple/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 pb-4 border-b border-resgato-light-purple/30">
            <div className="bg-resgato-blue/10 rounded-full p-3">
              <span className="text-2xl font-bold text-resgato-blue">3</span>
            </div>
            <h3 className="text-2xl font-bold text-resgato-navy">Implementation & Integration</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We execute the strategy by implementing the selected AI technologies and integrating them with your existing marketing systems. Our team provides training and support to ensure your team understands how to utilize these new tools effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Technology Deployment</h4>
              <p className="text-gray-700">Implementing and configuring AI solutions to match your requirements.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">System Integration</h4>
              <p className="text-gray-700">Connecting AI tools with your existing marketing technology stack.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Team Training</h4>
              <p className="text-gray-700">Equipping your team with the knowledge to leverage AI marketing tools.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="optimization" className="p-6 bg-white rounded-lg shadow-md border border-resgato-light-purple/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 pb-4 border-b border-resgato-light-purple/30">
            <div className="bg-resgato-blue/10 rounded-full p-3">
              <span className="text-2xl font-bold text-resgato-blue">4</span>
            </div>
            <h3 className="text-2xl font-bold text-resgato-navy">Monitoring & Optimization</h3>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            After implementation, we continuously monitor the performance of your AI marketing initiatives, analyze results against the defined KPIs, and make data-driven adjustments to optimize performance and maximize ROI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Performance Monitoring</h4>
              <p className="text-gray-700">Tracking key metrics to assess the effectiveness of AI implementations.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Data Analysis</h4>
              <p className="text-gray-700">Interpreting results to identify trends, insights, and areas for improvement.</p>
            </div>
            <div className="bg-resgato-light-purple/10 p-6 rounded-lg border border-resgato-light-purple/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-resgato-navy">Continuous Refinement</h4>
              <p className="text-gray-700">Making data-driven adjustments to optimize AI marketing performance.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProcessSection;
