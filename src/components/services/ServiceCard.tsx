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

const ServiceCard = ({
  icon,
  title,
  description,
  details,
  link,
  benefits,
  isReversed = false,
}: ServiceCardProps) => {
  return (
    <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="mb-4 flex items-center">
          <div className="mr-4 rounded-lg bg-resgato-light-purple p-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
        </div>
        <p className="mb-6 text-xl text-gray-600">{description}</p>
        <p className="mb-6 text-gray-700">{details}</p>
        <Link to={link}>
          <Button className="bg-resgato-purple text-white hover:bg-resgato-deep-purple">
            Learn More
          </Button>
        </Link>
      </div>
      <div
        className={`rounded-xl bg-gradient-to-br from-resgato-purple/10 to-resgato-light-purple/30 p-8 shadow-lg ${isReversed ? 'lg:order-1' : ''}`}
      >
        <h4 className="mb-4 text-xl font-semibold">Benefits:</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
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
