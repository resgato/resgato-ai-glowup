export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

// Mock data for blog posts to use until we set up the database
export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "digital-marketing-trends-2025",
    title: "Digital Marketing Trends to Watch in 2025",
    excerpt: "Explore the emerging trends that will shape digital marketing strategies in 2025 and beyond.",
    cover: "/resgato-uploads/f9a3c237-dff6-4a0d-8cef-79a1946fd9f0.png",
    date: "April 19, 2025",
    author: "Taylor Brody",
    readTime: "5 min read",
    category: "Digital Marketing",
    content: "As we move further into 2025, digital marketing continues to evolve at a rapid pace. The integration of artificial intelligence and machine learning has transformed how brands connect with consumers.\n\nPersonalization has reached new heights, with algorithms now capable of predicting consumer needs before they even arise. Voice search optimization is no longer optional but essential for visibility.\n\nPrivacy-first marketing approaches have become the standard as consumers grow increasingly conscious of their digital footprint. Brands that successfully navigate these changes while maintaining authentic connections with their audience will lead the pack.\n\nVideo content continues to dominate across platforms, with short-form videos seeing particularly high engagement rates. The metaverse presents exciting new opportunities for brand experiences that blur the line between digital and physical.\n\nAs we navigate these trends, it's clear that adaptability remains the most valuable skill for marketers in this dynamic landscape."
  },
  {
    id: 2,
    slug: "seo-best-practices-guide",
    title: "The Ultimate Guide to SEO Best Practices",
    excerpt: "Learn the essential SEO techniques that will help your website rank higher in search results.",
    cover: "/resgato-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png",
    date: "March 15, 2025",
    author: "Alex Morgan",
    readTime: "8 min read",
    category: "SEO",
    content: "Search Engine Optimization remains one of the most crucial aspects of digital marketing. As search algorithms become increasingly sophisticated, so too must our strategies for optimizing content.\n\nThe foundation of effective SEO still rests on quality content that genuinely answers user queries. However, technical aspects like page speed, mobile responsiveness, and proper schema markup have grown in importance.\n\nKeyword research has evolved beyond simple search volume metrics to include user intent analysis. Understanding whether a search query has informational, navigational, or transactional intent is key to creating content that resonates.\n\nBacklink quality continues to outweigh quantity, with a single link from a respected authority in your industry often providing more value than dozens of low-quality links.\n\nUser experience signals now factor heavily into rankings, making engagement metrics like bounce rate, time on page, and click-through rate essential considerations in your SEO strategy.\n\nVoice search optimization requires a shift in keyword strategy toward more conversational phrases and questions. Featured snippets have become prime real estate for visibility, making structured content that directly answers common questions highly valuable."
  },
  {
    id: 3,
    slug: "social-media-strategy-blueprint",
    title: "Social Media Strategy Blueprint for Businesses",
    excerpt: "A comprehensive framework for building and executing an effective social media marketing strategy.",
    cover: "/resgato-uploads/f9397a76-13f8-46c6-9197-106aa2658db0.png",
    date: "February 8, 2025",
    author: "Jordan Lee",
    readTime: "6 min read",
    category: "Social Media",
    content: "Developing a robust social media strategy begins with clearly defined objectives that align with broader business goals. Whether you're focused on brand awareness, community building, or direct conversions, your metrics should reflect these priorities.\n\nAudience research forms the backbone of effective strategy, informing everything from platform selection to content themes. Creating detailed audience personas helps ensure your content resonates with the right people at the right time.\n\nContent planning should balance promotional material with value-driven posts that educate, entertain, or inspire. The 80/20 rule remains a good starting point—aim for 80% value-based content and 20% promotional.\n\nConsistency in posting schedule and visual identity helps build recognition and trust. A content calendar and design templates can help maintain this consistency across platforms and team members.\n\nCommunity management has evolved from simple response handling to proactive engagement that builds genuine relationships. Allocating time for meaningful interactions with followers can significantly impact brand perception.\n\nData analysis should inform ongoing optimization, with regular reviews of performance metrics to identify successful patterns and areas for improvement. Being willing to pivot quickly based on these insights keeps your strategy agile and effective."
  }
];
