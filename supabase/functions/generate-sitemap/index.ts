
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";

// Define corsHeaders for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/xml; charset=utf-8',
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create a Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get all blog posts
    const { data: blogPosts, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .order('id', { ascending: false });
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?><error>Database error</error>`,
        { 
          status: 500, 
          headers: corsHeaders 
        }
      );
    }

    // Current date for lastmod
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Build the sitemap XML line by line with NO whitespace before XML declaration
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add main pages
    const mainPages = [
      { url: '/', priority: '1.0' },
      { url: '/about', priority: '0.8' },
      { url: '/services', priority: '0.9' },
      { url: '/contact', priority: '0.8' },
      { url: '/blog', priority: '0.8', changefreq: 'weekly' }
    ];
    
    for (const page of mainPages) {
      xml += `  <url>\n`;
      xml += `    <loc>https://resgato.com${page.url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq || 'monthly'}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Add blog posts
    if (blogPosts) {
      for (const post of blogPosts) {
        xml += `  <url>\n`;
        xml += `    <loc>https://resgato.com/blog/${post.slug}</loc>\n`;
        xml += `    <lastmod>${currentDate}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += `  </url>\n`;
      }
    }
    
    // Add static service pages
    const servicePages = [
      { url: 'seo', priority: '0.7' },
      { url: 'ppc', priority: '0.7' },
      { url: 'email-marketing', priority: '0.7' },
      { url: 'strategic-consulting', priority: '0.7' },
      { url: 'ai-consulting', priority: '0.7' },
      { url: 'social-media-marketing', priority: '0.7' },
      { url: 'content-strategy', priority: '0.7' },
      { url: 'utah-real-estate-marketing', priority: '0.7' },
      { url: 'utah-marketing-firms', priority: '0.8' },
      { url: 'digital-strategy-consulting-salt-lake-city', priority: '0.7' },
      { url: 'salt-lake-city-ppc-agency', priority: '0.7' },
      { url: 'utah-sem-services', priority: '0.7' }
    ];
    
    for (const page of servicePages) {
      xml += `  <url>\n`;
      xml += `    <loc>https://resgato.com/${page.url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += '</urlset>';

    // Using a new ResponseInit object to ensure proper headers
    const responseInit: ResponseInit = {
      headers: corsHeaders
    };

    // Create a new response with the XML content that has no whitespace issues
    return new Response(xml, responseInit);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><error>Server error</error>`,
      { 
        status: 500, 
        headers: corsHeaders 
      }
    );
  }
});
