import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
// Replace this with your service_role key from Supabase dashboard
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_ROLE_KEY_HERE';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Define unique, relevant images for each blog post
const blogImageMappings = [
  {
    slug: "how-to-find-marketing-agency",
    title: "How to Find the Right Marketing Agency",
    image: "/resgato-uploads/adagency.jpg", // Perfect for marketing agency guide
    reason: "Marketing agency office setting"
  },
  {
    slug: "where-to-host-a-website",
    title: "Where to Host a Website",
    image: "/resgato-uploads/axio-ev-building.jpg", // Modern building for hosting/tech
    reason: "Modern tech building representing hosting infrastructure"
  },
  {
    slug: "how-to-build-a-website",
    title: "How to Build a Website",
    image: "/resgato-uploads/aicoding.jpg", // Perfect for web development
    reason: "Coding and development environment"
  },
  {
    slug: "utah-ppc-agency-guide",
    title: "Utah PPC Agency Guide",
    image: "/resgato-uploads/digitalmarketingfirmsinutah.jpg", // Perfect for Utah PPC
    reason: "Utah digital marketing focus"
  },
  {
    slug: "plumber-marketing-guide",
    title: "Plumber Marketing Guide",
    image: "/resgato-uploads/55557fa0-302d-476b-a9c9-d36ce29e2da5.png", // Professional service image
    reason: "Professional service business"
  },
  {
    slug: "auto-dealer-marketing-strategies",
    title: "Auto Dealer Marketing Strategies",
    image: "/resgato-uploads/8dcb9d84-ae1e-40bf-8990-ca27bbddd0ff.png", // Automotive/business image
    reason: "Automotive industry focus"
  },
  {
    slug: "supercharge-your-software-companys-website-with-these-advanced-plugins",
    title: "Supercharge Your Software Company's Website",
    image: "/resgato-uploads/06a3fbfe-8265-4f20-934f-543d194bd0c0.png", // Tech/software image
    reason: "Software and technology focus"
  },
  {
    slug: "utah-realestate-marketing",
    title: "Utah Real Estate Marketing",
    image: "/resgato-uploads/utah-real-estate-marketing.png", // Perfect for real estate
    reason: "Real estate marketing specific"
  },
  {
    slug: "future-of-ai",
    title: "Future of AI in Digital Marketing",
    image: "/resgato-uploads/243ead37-eeb7-48b8-a28e-4ebac066badb.png", // AI/tech image
    reason: "AI and technology focus"
  },
  {
    slug: "email-marketing-strategy",
    title: "Email Marketing Strategies",
    image: "/resgato-uploads/6f391aed-1521-493a-ab6a-b226a0de270f.png", // Email marketing image
    reason: "Email marketing specific"
  },
  {
    slug: "importance-of-sms-marketing",
    title: "Why SMS Marketing Should Be Part of Your Digital Strategy",
    image: "/resgato-uploads/144eee65-8921-416b-9249-38ea50211b6e.png", // Mobile/messaging image
    reason: "Mobile messaging focus"
  },
  {
    slug: "digital-marketing-for-small-businesses",
    title: "Digital Marketing Strategies That Work for Small Businesses",
    image: "/resgato-uploads/c69e195b-c2c5-434c-be7b-ac3fb2ce1f7b.png", // Small business image
    reason: "Small business marketing focus"
  },
  {
    slug: "ppc-vs-performance-max",
    title: "PPC vs Performance Max",
    image: "/resgato-uploads/3f29c8f4-0489-47bd-ab86-13ed0a87031b.png", // PPC/advertising image
    reason: "PPC and advertising focus"
  },
  {
    slug: "seo-in-the-age-of-ai",
    title: "SEO in the Age of AI",
    image: "/resgato-uploads/f9397a76-13f8-46c6-9197-106aa2658db0.png", // SEO/AI image
    reason: "SEO and AI integration"
  },
  {
    slug: "seo-best-practices-guide",
    title: "SEO Best Practices Guide",
    image: "/resgato-uploads/f9a3c237-dff6-4a0d-8cef-79a1946fd9f0.png", // SEO optimization image
    reason: "SEO best practices focus"
  }
];

async function updateBlogImages() {
  try {
    console.log('🔄 Updating blog post images with unique, relevant images...');
    
    const results = [];
    
    for (const mapping of blogImageMappings) {
      try {
        console.log(`📝 Updating: ${mapping.title}`);
        console.log(`   New Image: ${mapping.image}`);
        console.log(`   Reason: ${mapping.reason}`);
        
        const { data, error } = await supabase
          .from('blog_posts')
          .update({
            cover: mapping.image
          })
          .eq('slug', mapping.slug)
          .select();
        
        if (error) {
          console.error(`❌ Error updating ${mapping.title}:`, error);
          results.push({
            slug: mapping.slug,
            status: 'error',
            message: error.message
          });
        } else {
          console.log(`✅ Successfully updated: ${mapping.title}`);
          results.push({
            slug: mapping.slug,
            status: 'success',
            message: 'Image updated successfully'
          });
        }
        
      } catch (error) {
        console.error(`❌ Error updating ${mapping.title}:`, error);
        results.push({
          slug: mapping.slug,
          status: 'error',
          message: error.message
        });
      }
    }
    
    console.log('🎉 Blog image update completed!');
    console.log('📊 Results:', results);
    
    return results;
    
  } catch (error) {
    console.error('❌ Error in updateBlogImages:', error);
  }
}

// Run the update
updateBlogImages();
