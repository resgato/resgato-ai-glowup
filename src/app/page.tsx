import React from 'react';

export const metadata = {
  title:
    "Resgato | Utah's #1 Digital Marketing Agency in Salt Lake City | SEO & PPC Experts",
  description:
    "Utah's premier digital marketing agency in Salt Lake City. Expert SEO, PPC, and AI solutions that drive measurable growth. Get a free consultation with our certified marketing specialists.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-grow">
        <h1 className="py-20 text-center text-4xl font-bold">
          Welcome to Resgato
        </h1>
        <p className="text-center text-lg">Your digital marketing partner</p>
      </main>
    </div>
  );
}
