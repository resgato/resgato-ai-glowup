
import React from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const ServiceHero = ({ title, description, image, features }: ServiceHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">{title}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-center lg:text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={image} 
              alt={title}
              className="max-w-full h-auto rounded-lg shadow-lg object-cover" 
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
