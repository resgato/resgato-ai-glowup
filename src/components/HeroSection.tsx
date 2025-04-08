
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Marketing with <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">AI-Powered</span> Strategies
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              Resgato helps businesses leverage artificial intelligence to create data-driven marketing campaigns that deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white px-8 py-6 text-lg">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-resgato-purple text-resgato-purple hover:bg-resgato-light-purple px-8 py-6 text-lg">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up animate-delay-100">
              <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-resgato-deep-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Leverage AI to analyze customer data and extract actionable insights.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up animate-delay-200">
              <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-resgato-deep-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and customer behaviors with AI-powered predictive models.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up animate-delay-300">
              <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-resgato-deep-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Optimize campaigns for international markets with AI localization.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up animate-delay-400">
              <div className="bg-resgato-light-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-resgato-deep-purple h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Content</h3>
              <p className="text-gray-600">Create customized marketing messages for individual customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
