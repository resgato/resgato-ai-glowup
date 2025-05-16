
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";

// Mock blog post data
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "digital-marketing-trends-2025",
    title: "Digital Marketing Trends to Watch in 2025",
    excerpt: "Explore the emerging trends that will shape digital marketing strategies in 2025 and beyond.",
    cover: "/lovable-uploads/f9a3c237-dff6-4a0d-8cef-79a1946fd9f0.png",
    date: "May 12, 2025",
    author: "Taylor Brody",
    readTime: "5 min read",
    category: "Digital Marketing",
    content: "<h2>The Future of Digital Marketing</h2><p>As we move further into 2025, digital marketing continues to evolve at a rapid pace. The integration of artificial intelligence and machine learning has transformed how brands connect with consumers.</p><p>Personalization has reached new heights, with algorithms now capable of predicting consumer needs before they even arise. <strong>Voice search optimization</strong> is no longer optional but essential for visibility.</p><h3>Privacy-First Approaches</h3><p>Privacy-first marketing approaches have become the standard as consumers grow increasingly conscious of their digital footprint. Brands that successfully navigate these changes while maintaining authentic connections with their audience will lead the pack.</p><p>Video content continues to dominate across platforms, with short-form videos seeing particularly high engagement rates. The <a href='https://en.wikipedia.org/wiki/Metaverse' target='_blank'>metaverse</a> presents exciting new opportunities for brand experiences that blur the line between digital and physical.</p><p>As we navigate these trends, it's clear that adaptability remains the most valuable skill for marketers in this dynamic landscape.</p><img src='/lovable-uploads/f9a3c237-dff6-4a0d-8cef-79a1946fd9f0.png' alt='Digital Marketing Trends' />"
  },
  {
    id: 2,
    slug: "seo-best-practices-guide",
    title: "The Ultimate Guide to SEO Best Practices",
    excerpt: "Learn the essential SEO techniques that will help your website rank higher in search results.",
    cover: "/lovable-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png",
    date: "April 28, 2025",
    author: "Alex Morgan",
    readTime: "8 min read",
    category: "SEO",
    content: "<h2>Modern SEO Strategies</h2><p>Search Engine Optimization remains one of the most crucial aspects of digital marketing. As search algorithms become increasingly sophisticated, so too must our strategies for optimizing content.</p><p>The foundation of effective SEO still rests on <strong>quality content</strong> that genuinely answers user queries. However, technical aspects like page speed, mobile responsiveness, and proper schema markup have grown in importance.</p><h3>User Intent Analysis</h3><p>Keyword research has evolved beyond simple search volume metrics to include user intent analysis. Understanding whether a search query has informational, navigational, or transactional intent is key to creating content that resonates.</p><p><a href='https://moz.com/learn/seo/backlinks' target='_blank'>Backlink</a> quality continues to outweigh quantity, with a single link from a respected authority in your industry often providing more value than dozens of low-quality links.</p><p>User experience signals now factor heavily into rankings, making engagement metrics like bounce rate, time on page, and click-through rate essential considerations in your SEO strategy.</p><img src='/lovable-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png' alt='SEO Best Practices' /><p>Voice search optimization requires a shift in keyword strategy toward more conversational phrases and questions. Featured snippets have become prime real estate for visibility, making structured content that directly answers common questions highly valuable.</p>"
  },
  {
    id: 3,
    slug: "social-media-strategy-blueprint",
    title: "Social Media Strategy Blueprint for Businesses",
    excerpt: "A comprehensive framework for building and executing an effective social media marketing strategy.",
    cover: "/lovable-uploads/f9397a76-13f8-46c6-9197-106aa2658db0.png",
    date: "April 15, 2025",
    author: "Jordan Lee",
    readTime: "6 min read",
    category: "Social Media",
    content: "<h2>Building a Robust Social Media Strategy</h2><p>Developing a robust social media strategy begins with clearly defined objectives that align with broader business goals. Whether you're focused on brand awareness, community building, or direct conversions, your metrics should reflect these priorities.</p><p><strong>Audience research</strong> forms the backbone of effective strategy, informing everything from platform selection to content themes. Creating detailed audience personas helps ensure your content resonates with the right people at the right time.</p><h3>Content Planning</h3><p>Content planning should balance promotional material with value-driven posts that educate, entertain, or inspire. The <a href='https://www.socialmediaexaminer.com/how-to-use-80-20-rule-to-boost-business-social-media/' target='_blank'>80/20 rule</a> remains a good starting point—aim for 80% value-based content and 20% promotional.</p><p>Consistency in posting schedule and visual identity helps build recognition and trust. A content calendar and design templates can help maintain this consistency across platforms and team members.</p><img src='/lovable-uploads/f9397a76-13f8-46c6-9197-106aa2658db0.png' alt='Social Media Strategy' /><p>Community management has evolved from simple response handling to proactive engagement that builds genuine relationships. Allocating time for meaningful interactions with followers can significantly impact brand perception.</p><p>Data analysis should inform ongoing optimization, with regular reviews of performance metrics to identify successful patterns and areas for improvement. Being willing to pivot quickly based on these insights keeps your strategy agile and effective.</p>"
  }
];

// Create a namespace for type safety
export const blogService = {
  // Get all blog posts
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      // In a production environment, this would fetch from Supabase
      // For now, we're using mock data
      return mockBlogPosts;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  },

  // Get a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const post = mockBlogPosts.find(post => post.slug === slug);
      return post || null;
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      return null;
    }
  },

  // Get a single blog post by id
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      const post = mockBlogPosts.find(post => post.id === id);
      return post || null;
    } catch (error) {
      console.error(`Error fetching blog post with id ${id}:`, error);
      return null;
    }
  },

  // Create a new blog post
  async createPost(post: Omit<BlogPost, "id">): Promise<BlogPost | null> {
    try {
      // In a production environment, this would insert into Supabase
      // For mock purposes, we're just returning the first post
      return {
        ...post,
        id: Math.max(...mockBlogPosts.map(p => p.id)) + 1
      };
    } catch (error) {
      console.error("Error creating blog post:", error);
      return null;
    }
  },

  // Update an existing blog post
  async updatePost(id: number, post: Partial<BlogPost>): Promise<BlogPost | null> {
    try {
      // In a production environment, this would update in Supabase
      // For mock purposes, we're just returning the first post
      const existingPost = mockBlogPosts.find(p => p.id === id);
      if (!existingPost) return null;
      
      return {
        ...existingPost,
        ...post
      };
    } catch (error) {
      console.error(`Error updating blog post with id ${id}:`, error);
      return null;
    }
  },

  // Delete a blog post
  async deletePost(id: number): Promise<boolean> {
    try {
      // In a production environment, this would delete from Supabase
      return true;
    } catch (error) {
      console.error(`Error deleting blog post with id ${id}:`, error);
      return false;
    }
  }
};
