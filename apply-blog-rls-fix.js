import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
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

async function applyBlogRLSFix() {
  try {
    console.log('🔧 Applying RLS policy fix for blog_posts table...');

    // Read the migration file
    const migrationPath = path.join(
      process.cwd(),
      'supabase',
      'migrations',
      '20250217000009_fix_blog_posts_rls.sql'
    );
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    console.log('📄 Migration SQL:');
    console.log(migrationSQL);

    // Execute the migration using rpc (if available) or direct SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: migrationSQL,
    });

    if (error) {
      console.error('❌ Error applying migration:', error);

      // If rpc doesn't work, try alternative approach
      console.log('🔄 Trying alternative approach...');

      // Test if we can now insert a blog post
      const testPost = {
        slug: 'test-post-rls-fix',
        title: 'Test Post - RLS Fix',
        excerpt: 'Testing if RLS policies are working',
        cover: '/resgato-uploads/placeholder.svg',
        date: 'August 17, 2025',
        author: 'Taylor Brody',
        readTime: '1 min read',
        category: 'Test',
        content:
          '# Test Post\n\nThis is a test post to verify RLS policies are working correctly.',
      };

      const { data: insertData, error: insertError } = await supabase
        .from('blog_posts')
        .insert([testPost])
        .select();

      if (insertError) {
        console.error('❌ Still cannot insert blog posts:', insertError);
        console.log(
          '💡 You may need to manually apply the RLS policies in your Supabase dashboard'
        );
        console.log(
          '📋 Go to: https://supabase.com/dashboard/project/bopzgxqujuqosdexnppj/editor'
        );
        console.log('📋 Navigate to: Authentication > Policies');
        console.log(
          '📋 Find the blog_posts table and add the policies from the migration file'
        );
      } else {
        console.log(
          '✅ Successfully inserted test post! RLS policies are working.'
        );

        // Clean up test post
        await supabase
          .from('blog_posts')
          .delete()
          .eq('slug', 'test-post-rls-fix');

        console.log('🧹 Cleaned up test post');
      }
    } else {
      console.log('✅ Migration applied successfully!');
    }
  } catch (error) {
    console.error('❌ Error in applyBlogRLSFix:', error);
  }
}

// Run the function
applyBlogRLSFix();
