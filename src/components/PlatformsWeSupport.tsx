
import React from 'react';
import { Linkedin, Instagram, Facebook, TikTok } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PlatformsWeSupport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl uppercase tracking-widest text-gray-500 mb-12">
          Platforms We Support
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* LinkedIn */}
          <div className="flex flex-col items-center justify-center">
            <Linkedin className="h-12 w-12 text-gray-500" />
            <p className="mt-2 text-gray-600 font-medium">LinkedIn</p>
          </div>
          
          {/* Instagram */}
          <div className="flex flex-col items-center justify-center">
            <Instagram className="h-12 w-12 text-gray-500" />
            <p className="mt-2 text-gray-600 font-medium">Instagram</p>
          </div>
          
          {/* Google */}
          <div className="flex flex-col items-center justify-center">
            <svg 
              className="h-12 w-12 text-gray-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" 
              fill="currentColor" />
            </svg>
            <p className="mt-2 text-gray-600 font-medium">Google</p>
          </div>
          
          {/* Facebook */}
          <div className="flex flex-col items-center justify-center">
            <Facebook className="h-12 w-12 text-gray-500" />
            <p className="mt-2 text-gray-600 font-medium">Facebook</p>
          </div>
          
          {/* Microsoft Bing */}
          <div className="flex flex-col items-center justify-center">
            <svg 
              className="h-12 w-12 text-gray-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 0L4.5 2.25V16.5L10.5 14.25L16.5 16.5L22.5 14.25V0L16.5 2.25L10.5 0ZM10.5 13.05L4.5 15.143V2.25L10.5 4.5V13.05ZM16.5 15.143L10.5 13.05V4.5L16.5 2.25V15.143ZM22.5 13.05L16.5 15.143V2.25L22.5 0V13.05Z" 
              fill="currentColor" />
            </svg>
            <p className="mt-2 text-gray-600 font-medium">Microsoft Bing</p>
          </div>
          
          {/* TikTok */}
          <div className="flex flex-col items-center justify-center">
            <TikTok className="h-12 w-12 text-gray-500" />
            <p className="mt-2 text-gray-600 font-medium">TikTok</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Separator className="bg-gray-200" />
      </div>
    </section>
  );
};

export default PlatformsWeSupport;
