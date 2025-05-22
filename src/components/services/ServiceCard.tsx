
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  link: string;
  benefits: string[];
  isReversed?: boolean;
}

const ServiceCard = ({ icon, title, description, details, link, benefits, isReversed = false }: ServiceCardProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="bg-resgato-light-purple rounded-lg p-4 mr-4">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        </div>
        <p className="text-xl text-gray-600 mb-6">{description}</p>
        <p className="text-gray-700 mb-6">{details}</p>
        <Link to={link}>
          <Button className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
            Learn More
          </Button>
        </Link>
      </div>
      <div className={`bg-gradient-to-br from-resgato-purple/10 to-resgato-light-purple/30 rounded-xl p-8 shadow-lg ${isReversed ? 'lg:order-1' : ''}`}>
        <h4 className="text-xl font-semibold mb-4">Benefits:</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-resgato-purple text-white rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-800">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
