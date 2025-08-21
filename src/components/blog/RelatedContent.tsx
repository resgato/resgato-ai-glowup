import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

interface RelatedContentProps {
  currentPost: BlogPost;
  relatedPosts: BlogPost[];
}

export const RelatedContent = ({
  currentPost,
  relatedPosts,
}: RelatedContentProps) => {
  const services = [
    {
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic',
      link: '/seo',
    },
    {
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid campaigns',
      link: '/ppc',
    },
    {
      title: 'Content Strategy',
      description: 'Create engaging content that converts',
      link: '/content-strategy',
    },
  ];

  return (
    <div className="mt-16 space-y-12">
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold transition-colors group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Service Links */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(service => (
            <Link
              key={service.title}
              to={service.link}
              className="block rounded-lg border p-6 transition-colors hover:border-blue-600"
            >
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
