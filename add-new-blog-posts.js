import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_ANON_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(
    'Missing required environment variables:',
    missingVars.join(', ')
  );
  console.error(
    'Please check your .env file and ensure all required variables are set.'
  );
  process.exit(1);
}

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to get current date in the required format
const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// New blog posts content
const newBlogPosts = [
  {
    slug: 'seo-in-the-age-of-ai',
    title: 'SEO in the Age of AI: Adapting to the New Digital Landscape',
    excerpt:
      'Discover how artificial intelligence is reshaping SEO strategies and what marketers need to do to stay ahead in this rapidly evolving digital landscape.',
    cover: '/resgato-uploads/3f29c8f4-0489-47bd-ab86-13ed0a87031b.png',
    date: getCurrentDate(),
    author: 'Taylor Brody',
    readTime: '7 min read',
    category: 'SEO',
    content: `# SEO in the Age of AI: Adapting to the New Digital Landscape

The digital marketing landscape is undergoing a seismic shift with the rise of artificial intelligence. As search engines become increasingly sophisticated, SEO professionals must adapt their strategies to remain effective in this new AI-driven world.

## How AI is Changing Search Engines

### The Evolution of Search Algorithms
Google's search algorithms have evolved dramatically over the past decade, moving from simple keyword matching to understanding user intent and context. With the introduction of AI systems like RankBrain and BERT, search engines now comprehend queries with near-human understanding.

This evolution means that traditional keyword-stuffing approaches are not just ineffective—they're counterproductive. Modern SEO requires content that genuinely answers user questions and provides valuable information.

### Voice Search and Conversational Queries
The proliferation of smart speakers and voice assistants has changed how people search. Users now phrase queries as complete questions rather than keyword fragments. Your SEO strategy needs to account for these conversational search patterns by incorporating natural language and question-based content.

## Content Strategies for AI-Powered Search

### E-E-A-T is More Important Than Ever
Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) have become crucial ranking factors. AI algorithms are increasingly skilled at identifying content that demonstrates these qualities.

To optimize for E-E-A-T:
- Showcase author credentials and expertise
- Back claims with data and reputable sources
- Maintain consistent content quality
- Build your brand's authority through thought leadership

### Semantic Content and Topic Clusters
Rather than focusing solely on individual keywords, develop comprehensive topic clusters that address all aspects of a subject. This approach signals to AI algorithms that your content provides thorough coverage of a topic.

## Technical SEO for AI Crawlers

### Schema Markup and Structured Data
Implementing structured data helps AI systems understand your content's context and purpose. This technical SEO element is no longer optional—it's essential for helping search engines categorize and feature your content appropriately.

### Page Experience and Core Web Vitals
AI algorithms increasingly factor user experience metrics into rankings. Optimizing your site's Core Web Vitals ensures that visitors have a positive experience, which in turn signals quality to search engines.

## The Future of SEO and AI

As AI continues to advance, we can expect even more sophisticated understanding of content quality, user intent, and value. The most successful SEO strategies will focus on genuinely serving user needs rather than manipulating algorithms.

Remember that while AI is changing the SEO landscape, the fundamental goal remains the same: creating valuable content that serves your audience's needs. Focus on that principle, and the technical adaptations will follow naturally.`,
  },
  {
    slug: 'ppc-vs-performance-max',
    title: 'PPC vs Performance Max: Choosing the Right Google Ads Strategy',
    excerpt:
      "Compare traditional PPC campaigns with Google's AI-driven Performance Max to determine which approach will deliver the best results for your business goals.",
    cover: '/resgato-uploads/ed070e05-2916-41ed-a436-8e0299973b40.png',
    date: getCurrentDate(),
    author: 'Taylor Brody',
    readTime: '6 min read',
    category: 'PPC',
    content: `# PPC vs Performance Max: Choosing the Right Google Ads Strategy

Digital advertisers face an important choice when planning their Google Ads campaigns: should they stick with traditional manual PPC campaign management or embrace Google's AI-driven Performance Max campaigns? This comprehensive comparison will help you make an informed decision for your business.

## Understanding the Fundamentals

### Traditional PPC Campaigns
PPC (Pay-Per-Click) advertising has been the backbone of digital advertising for decades. These campaigns give advertisers granular control over:

- Keyword selection and match types
- Ad copy variations
- Bid strategies by keyword
- Device targeting
- Audience segments

This level of control allows experienced PPC managers to fine-tune campaigns based on performance data.

### Performance Max Campaigns
Performance Max represents Google's shift toward AI-optimized advertising. These campaigns leverage machine learning to:

- Automatically show ads across all Google properties (Search, Display, YouTube, Gmail, Maps)
- Dynamically adjust bids and budgets to maximize conversion value
- Test different creative combinations to identify top performers
- Discover new audience segments beyond your manual targeting

## Key Differences in Campaign Management

### Control vs. Automation

**With traditional PPC:**
- You decide exactly which keywords trigger your ads
- You control which audiences see your ads
- You set specific bids for each keyword or ad group

**With Performance Max:**
- Google's AI chooses when and where to show your ads
- The system identifies and targets promising audience segments
- Automatic bidding optimizes toward your goal

### Performance Analysis
PPC campaigns provide clear visibility into keyword-level performance, making it easy to identify exactly what's working and what isn't. Performance Max offers broader insights but fewer granular details about precisely where your budget is going.

### Asset Requirements
Performance Max campaigns require more diverse creative assets:
- Multiple text headlines and descriptions
- Various image sizes and formats
- Video assets (optional but recommended)
- Structured data for shopping campaigns

## When to Choose Each Approach

### Choose Traditional PPC When:
- You need precise control over where ads appear
- You have specific keywords you want to target
- Brand safety is a paramount concern
- You want full transparency into performance metrics
- You're operating in a highly regulated industry

### Choose Performance Max When:
- You want to reach customers across multiple channels
- You have limited time for campaign management
- You're open to discovering new audience segments
- You have a diverse set of creative assets
- You're focused on conversion value over other metrics

## Implementing a Hybrid Strategy

Many businesses find that a combination of both approaches yields the best results. Use traditional PPC campaigns for your core branded keywords and high-intent searches, while leveraging Performance Max to expand reach and discover new opportunities.

## Next Steps

The choice between PPC and Performance Max isn't one-size-fits-all. The best approach depends on your business goals, resources, and comfort level with automation. By staying informed about both traditional and AI-powered advertising options, you'll be well-positioned to make strategic decisions that drive results for your business.`,
  },
  {
    slug: 'digital-marketing-for-small-businesses',
    title: 'Digital Marketing Strategies That Work for Small Businesses',
    excerpt:
      'Discover cost-effective digital marketing approaches that deliver real results for small businesses with limited budgets and resources.',
    cover: '/resgato-uploads/c69e195b-c2c5-434c-be7b-ac3fb2ce1f7b.png',
    date: getCurrentDate(),
    author: 'Taylor Brody',
    readTime: '8 min read',
    category: 'Small Business',
    content: `# Digital Marketing Strategies That Work for Small Businesses

Small businesses face unique challenges when it comes to digital marketing. Limited budgets, fierce competition, and resource constraints can make it difficult to gain traction online. However, with the right approach, small businesses can achieve impressive results without breaking the bank.

## Focus on Local SEO First

### Google Business Profile Optimization
For small businesses with physical locations, optimizing your Google Business Profile (formerly Google My Business) should be your top priority. This free tool drives local visibility and directly impacts your appearance in local searches and Google Maps.

Key optimization steps include:
- Completing every section of your profile
- Adding high-quality photos regularly
- Collecting and responding to reviews
- Posting updates about promotions or events
- Ensuring consistent NAP (Name, Address, Phone) information

### Local Content Development
Create content specifically tailored to your local community. This could include:
- Neighborhood guides
- Local event coverage
- Partnerships with other local businesses
- Community involvement stories

## Affordable Paid Advertising Approaches

### Targeted Social Media Advertising
Rather than trying to be everywhere, small businesses should focus on one or two platforms where their audience is most active. With budgets as low as $5-10 per day, you can run highly targeted campaigns that reach potential customers in your area.

### Smart Google Ads Strategies
For small businesses, we recommend:
- Starting with local service ads if available in your industry
- Focusing on high-intent, location-based keywords
- Setting tight geographic parameters
- Implementing conversion tracking to optimize spend

## Content Marketing on a Budget

### Quality Over Quantity
Instead of attempting to publish content daily, focus on creating fewer pieces of exceptional content. One comprehensive, valuable blog post per month is better than four mediocre weekly posts.

### Repurpose Everything
Get maximum value from your content by repurposing it into multiple formats:
- Turn blog posts into social media snippets
- Convert customer testimonials into case studies
- Transform how-to guides into video tutorials
- Compile related posts into downloadable guides

## Email Marketing: Your Most Valuable Channel

For small businesses, email marketing typically delivers the highest ROI of any digital channel. To maximize its effectiveness:
- Segment your list based on customer behavior
- Send personalized content that addresses specific needs
- Automate welcome sequences and follow-up emails
- Regularly clean your list to maintain high engagement rates

## Social Proof and Trust Building

### Leverage Customer Reviews
Actively collect and showcase reviews from satisfied customers. Research shows that 93% of consumers say online reviews impact their purchasing decisions.

### Share Your Story
As a small business, your unique story is a powerful differentiator. Share your journey, values, and mission to connect with customers who prefer supporting local businesses.

## Measuring What Matters

Small businesses can't afford to waste resources on ineffective marketing. Implement proper tracking to measure:
- Website traffic and its sources
- Conversion rates for key actions
- Cost per acquisition for new customers
- Return on ad spend for paid campaigns
- Email engagement metrics

## Next Steps for Your Small Business

Digital marketing success for small businesses comes from strategic focus rather than trying to compete with large corporations across every channel. By prioritizing local visibility, leveraging your unique advantages, and allocating resources efficiently, you can build a digital presence that drives sustainable growth.`,
  },
  {
    slug: 'importance-of-sms-marketing',
    title: 'Why SMS Marketing Should Be Part of Your Digital Strategy',
    excerpt:
      'Explore the unmatched open rates and engagement potential of SMS marketing and learn how to integrate it effectively with your other marketing channels.',
    cover: '/resgato-uploads/144eee65-8921-416b-9249-38ea50211b6e.png',
    date: getCurrentDate(),
    author: 'Taylor Brody',
    readTime: '5 min read',
    category: 'Mobile Marketing',
    content: `# Why SMS Marketing Should Be Part of Your Digital Strategy

In a world where digital inboxes are overflowing and social media feeds are crowded with content, SMS marketing stands out with its remarkable 98% open rates and near-immediate engagement. Yet many businesses still overlook this powerful channel. Here's why SMS deserves a place in your marketing mix and how to implement it effectively.

## The Undeniable Advantages of SMS Marketing

### Immediate Attention
While emails might sit unread for days or get filtered into promotional folders, text messages are typically read within 3 minutes of receipt. This makes SMS ideal for time-sensitive offers and important announcements.

### Exceptional Open Rates
SMS open rates hover around 98%, compared to email's average of 20-30%. This dramatic difference means your message is almost guaranteed to be seen.

### Higher Engagement
SMS messages have click-through rates as high as 45% when they contain links, far surpassing typical email and social media engagement rates.

### Direct Communication
SMS creates a direct line to your customer without algorithm changes or platform intermediaries affecting your reach.

## Integrating SMS with Your Existing Channels

### Email and SMS Synergy
Rather than viewing SMS as a replacement for email marketing, use them complementarily:
- Use email for longer, detailed content
- Use SMS for urgent updates and time-sensitive offers
- Send SMS reminders about important emails
- Allow customers to choose their preferred communication channel

### Website Integration
Implement SMS opt-ins on your website through:
- Pop-ups offering immediate discounts
- Checkout SMS subscription options
- Text-to-join keywords displayed on your site

### In-Store and Offline Promotion
For businesses with physical locations:
- Train staff to collect phone numbers at checkout
- Display text-to-join information prominently
- Offer exclusive in-store promotions for SMS subscribers

## SMS Marketing Best Practices

### Obtain Proper Consent
SMS marketing is subject to strict regulations. Always:
- Get explicit opt-in from customers
- Clearly state message frequency
- Make opt-out instructions simple
- Keep records of consent

### Timing and Frequency
Text messages feel more personal than other marketing channels:
- Limit messages to 2-4 per month in most cases
- Send during business hours (10am-8pm)
- Avoid early mornings, late evenings, and Sundays
- Consider time zones for nationwide campaigns

### Personalization and Segmentation
Just like other channels, personalized SMS campaigns perform better:
- Use the customer's name when appropriate
- Segment based on purchase history
- Send location-specific offers
- Create specialized flows for different customer journeys

## Measuring SMS Marketing Success

Track these key metrics to evaluate your SMS campaigns:
- Delivery rate
- Open rate (when available)
- Click-through rate for messages with links
- Conversion rate
- Opt-out rate
- ROI compared to other channels

## Getting Started with SMS Marketing

### Build Your List Ethically
Start collecting phone numbers through:
- Website opt-in forms
- In-store sign-ups
- Social media lead generation
- Exclusive content or discount offers

### Test and Optimize
Begin with a small segment of your audience to:
- Test different message formats
- Experiment with timing
- Try various calls-to-action
- Find your optimal sending frequency

### Integrate with Your CRM
Connect your SMS platform with your customer relationship management system to:
- Trigger automated messages based on customer behavior
- Track the customer journey across all touchpoints
- Create more personalized experiences

## Ready to Add SMS to Your Marketing Mix?

SMS marketing offers unmatched open rates and engagement, making it a valuable addition to any comprehensive marketing strategy. By following compliance best practices and integrating SMS with your existing channels, you can create more immediate and personal connections with your audience.`,
  },
  {
    slug: 'email-marketing-to-local-customers',
    title: 'Email Marketing Strategies for Connecting with Local Customers',
    excerpt:
      'Learn how to create email campaigns that resonate with your local customer base and drive foot traffic to your physical locations.',
    cover: '/resgato-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png',
    date: getCurrentDate(),
    author: 'Taylor Brody',
    readTime: '6 min read',
    category: 'Email Marketing',
    content: `# Email Marketing Strategies for Connecting with Local Customers

Email marketing remains one of the most effective digital channels, delivering an average ROI of $36 for every $1 spent. For businesses serving local markets, email offers unique opportunities to drive foot traffic and build community connections. Here's how to optimize your email marketing strategy for local customers.

## Understanding Local Email Marketing

### Why Local Is Different
Email marketing to local customers differs from national campaigns in several key ways:
- Content can reference local events and landmarks
- Promotions can drive immediate in-store visits
- Relationship building has both online and offline components
- Local competitors are often less sophisticated with email

### Setting Local-Focused Objectives
Your local email strategy should have clear goals such as:
- Driving foot traffic to your physical location
- Promoting local events or workshops
- Building community relationships
- Highlighting local partnerships
- Supporting regional causes

## Building a Quality Local Email List

### In-Store Collection Methods
For local businesses, in-person list building is often most effective:
- Point-of-sale email collection
- Fishbowl business card draws with clear opt-in messaging
- In-store tablets or kiosks for sign-ups
- Receipt-based incentives for joining your list

### Community Event Participation
Local events provide excellent opportunities to grow your email list:
- Sponsor community gatherings
- Host workshops or demonstrations
- Offer event-exclusive incentives for sign-ups
- Follow up promptly after the event

### Digital Local List Building
Even for local businesses, digital sign-up options are essential:
- Location-targeted social media ads
- Location-specific landing pages
- Google Business Profile sign-up links
- Locally focused lead magnets (e.g., "Ultimate Guide to [Your City's] Best [Your Industry]")

## Crafting Email Content That Resonates Locally

### Hyperlocal Content Ideas
- Neighborhood guides related to your products/services
- Staff spotlights featuring local team members
- Customer success stories from local clients
- Updates on community developments relevant to your business
- Local event calendars related to your industry

### Locally Relevant Promotions
Design offers that make sense for your local market:
- Weather-triggered promotions
- Local sports team performance-based discounts
- Community event tie-ins
- Neighborhood-specific offers
- Local holiday celebrations

## Segmentation for Local Audiences

### Geographic Micro-Segmentation
Even within your local market, segment by:
- Specific neighborhoods or zip codes
- Distance from your location(s)
- Local shopping patterns
- School districts or community boundaries

### Behavioral Segmentation
Track and segment based on:
- In-store vs. online purchasing behavior
- Frequency of visits to your location
- Participation in local events
- Engagement with local content

## Local Email Design Best Practices

### Mobile Optimization
Local customers often check email on-the-go, making mobile optimization crucial:
- Use single-column layouts
- Ensure buttons are thumb-friendly
- Keep subject lines under 40 characters
- Test rendering on multiple devices

### Local Visual Elements
Incorporate imagery that resonates with local customers:
- Photos of your actual location and staff
- Recognizable local landmarks
- Images from community events
- Seasonal visuals specific to your region

## Measuring Local Email Success

Beyond standard email metrics, track:
- In-store visits attributed to email campaigns
- Phone calls generated from emails
- Local event attendance from email promotion
- Cross-channel local engagement

## Integration with Other Local Marketing Channels

### Email and SMS Coordination
Combine email with SMS for time-sensitive local promotions:
- Send email with detailed information
- Follow up with SMS reminder closer to the event
- Use SMS for flash sales or immediate promotions

### Social Media Integration
Connect your email and social presence:
- Share user-generated content from local customers
- Promote your email list on location-targeted social ads
- Create exclusive local groups for email subscribers

### Direct Mail Coordination
For local businesses, coordinating email with direct mail can be highly effective:
- Send direct mail with email follow-up
- Use personalized URLs (PURLs) to track crossover
- Offer different but complementary promotions in each channel

## Next Steps for Local Email Marketing

Effective local email marketing creates meaningful connections with your community while driving measurable business results. By understanding your local audience, creating relevant content, and integrating with your other marketing efforts, you can build a loyal local customer base.`,
  },
];

async function addNewBlogPosts() {
  try {
    console.log('🚀 Adding new blog posts to the database...');

    // Add each blog post
    const results = [];

    for (const post of newBlogPosts) {
      console.log(`📝 Processing: ${post.title}`);

      // Check if post already exists
      const { data: existingPost } = await supabase
        .from('blog_posts')
        .select('slug')
        .eq('slug', post.slug)
        .single();

      if (existingPost) {
        console.log(`⏭️  Skipping: ${post.title} (already exists)`);
        results.push({
          slug: post.slug,
          status: 'skipped',
          message: 'Post with this slug already exists',
        });
        continue;
      }

      // Insert the new post
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([post])
        .select();

      if (error) {
        console.error(`❌ Error adding blog post "${post.title}":`, error);
        results.push({
          slug: post.slug,
          status: 'error',
          message: error.message,
        });
      } else {
        console.log(`✅ Successfully added: ${post.title}`);
        results.push({ slug: post.slug, status: 'success' });
      }
    }

    console.log('🎉 Blog post addition completed!');
    console.log('📊 Results:', results);

    return { success: true, results };
  } catch (error) {
    console.error('❌ Error adding new blog posts:', error);
    return { success: false, message: error.message };
  }
}

// Run the function
addNewBlogPosts();
