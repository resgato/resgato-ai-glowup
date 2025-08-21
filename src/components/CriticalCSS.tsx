import React from 'react';

const CriticalCSS = () => {
  const criticalStyles = `
    /* Critical CSS for above-the-fold content */
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Ensure smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Critical navigation styles */
    .sticky {
      position: sticky;
      top: 0;
      z-index: 50;
    }

    /* Critical button styles */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: all 0.2s;
      cursor: pointer;
    }

    /* Critical layout styles */
    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }

    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }

    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }

    /* Critical hero section styles */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    /* Critical text styles */
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 600;
      line-height: 1.25;
    }

    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 3rem;
        line-height: 1;
      }
    }

    /* Critical loading states */
    .loading {
      opacity: 0.6;
      pointer-events: none;
    }

    /* Critical focus styles for accessibility */
    *:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }

    /* Critical responsive utilities */
    .hidden {
      display: none;
    }

    @media (min-width: 768px) {
      .md\\:block {
        display: block;
      }
      
      .md\\:flex {
        display: flex;
      }
      
      .md\\:hidden {
        display: none;
      }
    }
  `;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalStyles,
      }}
    />
  );
};

export default CriticalCSS;
