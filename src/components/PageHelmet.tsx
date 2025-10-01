import React from 'react';
import { Helmet } from 'react-helmet';

interface PageHelmetProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
}

const PageHelmet: React.FC<PageHelmetProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  image,
}) => {
  const siteUrl = 'https://resgato.com';
  const fullCanonicalUrl = canonicalUrl
    ? `${siteUrl}${canonicalUrl}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph / Facebook */}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      {fullCanonicalUrl && (
        <meta property="og:url" content={fullCanonicalUrl} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default PageHelmet;
