import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
// Replace this with your service_role key from Supabase dashboard
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_ROLE_KEY_HERE';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Define the specific SEO blog post image updates
const seoImageUpdates = [
  {
    slug: "seo-best-practices-guide",
    title: "SEO Best Practices Guide",
    image: "/resgato-uploads/seoatresgato.webp",
    reason: "SEO best practices specific image"
  },
  {
    slug: "seo-in-the-age-of-ai",
    title: "SEO in the Age of AI",
    image: "/resgato-uploads/seoai.jpg",
    reason: "SEO and AI integration specific image"
  }
];

async function updateSEOImages() {
  try {
    console.log('🔄 Updating SEO blog posts with specific images...');
    
    const results = [];
    
    for (const update of seoImageUpdates) {
      try {
        console.log(`📝 Updating: ${update.title}`);
        console.log(`   New Image: ${update.image}`);
        console.log(`   Reason: ${update.reason}`);
        
        const { data, error } = await supabase
          .from('blog_posts')
          .update({
            cover: update.image
          })
          .eq('slug', update.slug)
          .select();
        
        if (error) {
          console.error(`❌ Error updating ${update.title}:`, error);
          results.push({
            slug: update.slug,
            status: 'error',
            message: error.message
          });
        } else {
          console.log(`✅ Successfully updated: ${update.title}`);
          results.push({
            slug: update.slug,
            status: 'success',
            message: 'Image updated successfully'
          });
        }
        
      } catch (error) {
        console.error(`❌ Error updating ${update.title}:`, error);
        results.push({
          slug: update.slug,
          status: 'error',
          message: error.message
        });
      }
    }
    
    console.log('🎉 SEO image updates completed!');
    console.log('📊 Results:', results);
    
    return results;
    
  } catch (error) {
    console.error('❌ Error in updateSEOImages:', error);
  }
}

// Run the update
updateSEOImages();
