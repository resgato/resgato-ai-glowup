import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

interface RelatedContentProps {
  currentPost: BlogPost;
  relatedPosts: BlogPost[];
}

export const RelatedContent = ({ currentPost, relatedPosts }: RelatedContentProps) => {
  const services = [
    {
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic',
      link: '/seo'
    },
    {
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid campaigns',
      link: '/ppc'
    },
    {
      title: 'Content Strategy',
      description: 'Create engaging content that converts',
      link: '/content-strategy'
    }
  ];

  return (
    <div className="mt-16 space-y-12">
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={post.cover} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Service Links */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link 
              key={service.title}
              to={service.link}
              className="block p-6 rounded-lg border hover:border-blue-600 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}; 