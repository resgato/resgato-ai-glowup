import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
// Replace this with your service_role key from Supabase dashboard
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'YOUR_SERVICE_ROLE_KEY_HERE';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkBlogImages() {
  try {
    console.log('🔍 Checking current blog posts and their images...');
    
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, cover')
      .order('id', { ascending: false });
    
    if (error) {
      console.error('❌ Error fetching blog posts:', error);
      return;
    }
    
    console.log(`📊 Found ${posts.length} blog posts:`);
    console.log('');
    
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Current Image: ${post.cover}`);
      console.log('');
    });
    
    // Check for duplicate images
    const imageCounts = {};
    posts.forEach(post => {
      imageCounts[post.cover] = (imageCounts[post.cover] || 0) + 1;
    });
    
    console.log('🔄 Image Usage Analysis:');
    Object.entries(imageCounts).forEach(([image, count]) => {
      if (count > 1) {
        console.log(`⚠️  ${image} is used by ${count} posts`);
      } else {
        console.log(`✅ ${image} is unique`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error in checkBlogImages:', error);
  }
}

// Run the check
checkBlogImages();
