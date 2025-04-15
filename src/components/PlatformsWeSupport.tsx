
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
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
            <svg 
              className="h-12 w-12 text-gray-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.69 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.56-3.53-5.91-.02-1.88.46-3.74 1.53-5.21 1.3-1.85 3.43-3.02 5.64-3.14.92-.03 1.83.22 2.62.69.63.38 1.15.89 1.6 1.47.01-1.42-.02-2.84.02-4.26.06-.53.2-1.04.45-1.5zM21.99 12.09c-.44-1.56-1.26-3-2.39-4.15a9.869 9.869 0 0 0-4.28-2.44A9.804 9.804 0 0 0 12.04 5h.02c-.01 1.45.01 2.9-.02 4.35-.14.57-.46 1.1-.9 1.49a3.34 3.34 0 0 1-1.11.7c-.66.22-1.36.18-2.02.1-.73-.1-1.43-.41-1.99-.86-1.24-1.03-1.92-2.66-1.83-4.28.08-1.56.75-3.08 1.86-4.15 1.41-1.41 3.42-2.09 5.41-1.92C16.22 1.25 18.89 3.27 20 5.84c.62 1.45.83 3.05.67 4.6-.11 1.19-.44 2.37-1.06 3.39-.77 1.26-1.95 2.29-3.3 2.9-.57.26-1.18.44-1.8.53v-3.48c.86-.26 1.66-.75 2.24-1.46.62-.75.98-1.71.96-2.68z" 
              fill="currentColor" 
            />
            <p className="mt-2 text-gray-600 font-medium">TikTok</p>
            {/* The text is accidentally inside the SVG */}
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

