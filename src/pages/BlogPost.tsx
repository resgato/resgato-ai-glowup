import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogService } from '@/services/blog';
import { BlogPost as BlogPostType } from '@/types/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  Calendar,
  Clock,
  Tag,
  User,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageHelmet from '@/components/PageHelmet';
import BlogContent from '@/components/blog/BlogContent';
import { StructuredData } from '@/components/seo/StructuredData';
import { Helmet } from 'react-helmet';
import { RelatedContent } from '@/components/blog/RelatedContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        if (!slug) {
          setNotFound(true);
          return;
        }

        // Fetch current post
        const data = await blogService.getPostBySlug(slug);

        if (!data) {
          setNotFound(true);
          return;
        }

        setPost(data);

        // Fetch related posts in same category
        const allPosts = await blogService.getAllPosts();
        const related = allPosts
          .filter(p => p.category === data.category && p.id !== data.id)
          .slice(0, 3);

        setRelatedPosts(related);
      } catch (error) {
        console.error('Error:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-grow items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    navigate('/404', { replace: true });
    return null;
  }

  const filteredRelatedPosts = relatedPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <PageHelmet
        title={`${post.title} | Resgato Blog`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        image={post.cover}
      />

      <StructuredData type="article" article={post} />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', item: 'https://www.resgato.com' },
          { name: 'Blog', item: 'https://www.resgato.com/blog' },
          {
            name: post.title,
            item: `https://www.resgato.com/blog/${post.slug}`,
          },
        ]}
      />

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative">
            <div className="h-72 w-full overflow-hidden md:h-96 lg:h-[500px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${post.cover})`,
                  filter: 'blur(2px)',
                  transform: 'scale(1.05)',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-5xl px-4 text-white sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <div className="mb-4 flex items-center text-sm">
                      <Link
                        to="/blog"
                        className="mr-4 flex items-center text-white/80 transition-colors hover:text-white"
                      >
                        <ArrowLeft className="mr-1 h-4 w-4" />
                        Back to Blog
                      </Link>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-white">
                        {post.category}
                      </span>
                    </div>
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                      {post.title}
                    </h1>
                    <div className="flex items-center text-sm text-white/80">
                      <Link
                        to={`/author/${post.author.toLowerCase().replace(' ', '-')}`}
                        className="group mr-4 flex items-center"
                      >
                        <Avatar className="mr-2 h-8 w-8 border-2 border-white/20">
                          <AvatarImage
                            src={
                              post.author === 'Taylor Brody'
                                ? '/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png'
                                : '/placeholder.svg'
                            }
                            alt={post.author}
                          />
                          <AvatarFallback>
                            {post.author
                              .split(' ')
                              .map(n => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="group-hover:underline">
                          {post.author}
                        </span>
                      </Link>
                      <span className="mr-4 flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-white p-6 shadow-lg md:p-10">
                <article className="prose prose-lg max-w-none">
                  <BlogContent content={post.content} />
                </article>

                <div className="mt-10 border-t pt-8">
                  <div className="flex items-center">
                    <Avatar className="mr-4 h-12 w-12 border-2 border-gray-200">
                      <AvatarImage
                        src={
                          post.author === 'Taylor Brody'
                            ? '/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png'
                            : '/placeholder.svg'
                        }
                        alt={post.author}
                      />
                      <AvatarFallback>
                        {post.author
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-gray-500">Written by</p>
                      <Link
                        to={`/author/${post.author.toLowerCase().replace(' ', '-')}`}
                        className="text-lg font-semibold transition-colors hover:text-resgato-blue"
                      >
                        {post.author}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {filteredRelatedPosts.length > 0 && (
            <section className="bg-gray-50 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredRelatedPosts.map(relatedPost => (
                    <Card
                      key={relatedPost.id}
                      className="overflow-hidden transition-shadow hover:shadow-lg"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedPost.cover}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="mb-1 flex items-center text-xs text-gray-500">
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-600">
                            {relatedPost.category}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.date}</span>
                        </div>
                        <CardTitle className="text-xl transition-colors hover:text-resgato-blue">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="flex items-center text-resgato-blue hover:underline"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          <RelatedContent
            currentPost={post}
            relatedPosts={filteredRelatedPosts}
          />

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
