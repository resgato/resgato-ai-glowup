
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
    
    // Generate the sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://resgato.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://resgato.com/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://resgato.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://resgato.com/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://resgato.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add blog posts
    if (blogPosts) {
      for (const post of blogPosts) {
        sitemap += `
  <url>
    <loc>https://resgato.com/blog/${post.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    }
    
    // Add static service pages
    const servicePages = [
      'seo',
      'ppc',
      'email-marketing',
      'strategic-consulting',
      'ai-consulting',
      'social-media-marketing',
      'content-strategy',
      'utah-real-estate-marketing',
      'digital-strategy-consulting-salt-lake-city',
      'salt-lake-city-ppc-agency',
      'utah-sem-services'
    ];
    
    for (const page of servicePages) {
      sitemap += `
  <url>
    <loc>https://resgato.com/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }

    sitemap += `
</urlset>`;

    // Return the sitemap with proper headers and make sure there's no BOM or hidden characters
    return new Response(sitemap.trim(), { 
      headers: corsHeaders 
    });
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
