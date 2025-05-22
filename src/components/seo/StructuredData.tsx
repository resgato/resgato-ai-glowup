import { BlogPost } from '@/types/blog';

interface StructuredDataProps {
  type: 'article' | 'breadcrumb' | 'localBusiness';
  article?: BlogPost;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export const StructuredData = ({ type, article, breadcrumbs }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'article':
        if (!article) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          image: article.cover,
          datePublished: article.date,
          author: {
            '@type': 'Person',
            name: article.author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Resgato',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.resgato.com/logo.png'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.resgato.com/blog/${article.slug}`
          }
        };

      case 'breadcrumb':
        if (!breadcrumbs) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item
          }))
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Resgato',
          description: 'Digital Marketing Agency specializing in SEO, PPC, and Content Strategy',
          url: 'https://www.resgato.com',
          logo: 'https://www.resgato.com/logo.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Main St',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            postalCode: '94105',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '37.7749',
            longitude: '-122.4194'
          },
          telephone: '+1-555-0123',
          sameAs: [
            'https://www.linkedin.com/company/resgato',
            'https://twitter.com/resgato',
            'https://www.facebook.com/resgato'
          ]
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}; 