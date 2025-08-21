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

const ServiceHero = ({
  title,
  description,
  image,
  features,
}: ServiceHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-700">{description}</p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md lg:items-start"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="h-auto max-w-full rounded-lg object-cover shadow-lg"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
