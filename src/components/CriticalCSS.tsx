import React from 'react';

const CriticalCSS: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS for above-the-fold content */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Critical gradient styles */
        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }
        
        .from-white\/95 {
          --tw-gradient-from: rgb(255 255 255 / 0.95);
          --tw-gradient-to: rgb(255 255 255 / 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .via-white\/90 {
          --tw-gradient-to: rgb(255 255 255 / 0.9);
          --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.9), var(--tw-gradient-to);
        }
        
        .to-resgato-light-purple\/40 {
          --tw-gradient-to: rgb(147 197 253 / 0.4);
        }
        
        /* Critical text styles */
        .bg-gradient-to-r {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        
        .from-resgato-deep-purple {
          --tw-gradient-from: #4c1d95;
          --tw-gradient-to: rgb(76 29 149 / 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .to-resgato-purple {
          --tw-gradient-to: #7c3aed;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .text-transparent {
          color: transparent;
        }
        
        /* Critical layout styles */
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .overflow-hidden { overflow: hidden; }
        
        /* Critical spacing */
        .max-w-7xl { max-width: 80rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-28 { padding-top: 7rem; padding-bottom: 7rem; }
        
        /* Critical typography */
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        .font-bold { font-weight: 700; }
        .leading-tight { line-height: 1.25; }
        .text-center { text-align: center; }
        
        /* Critical responsive */
        @media (min-width: 640px) {
          .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
        
        @media (min-width: 768px) {
          .md\\:py-28 { padding-top: 7rem; padding-bottom: 7rem; }
          .md\\:text-5xl { font-size: 3rem; line-height: 1; }
          .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
        }
        
        @media (min-width: 1024px) {
          .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
        }
      `
    }} />
  );
};

export default CriticalCSS;
