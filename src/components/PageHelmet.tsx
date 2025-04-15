
import React from 'react';
import { Helmet } from 'react-helmet';

interface PageHelmetProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const PageHelmet: React.FC<PageHelmetProps> = ({ title, description, keywords, canonicalUrl }) => {
  const siteUrl = "https://resgato.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  
  return (
    <Helmet>
      <title>{title} - Resgato Marketing</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
    </Helmet>
  );
};

export default PageHelmet;
