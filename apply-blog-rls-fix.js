import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Supabase configuration
const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODYwODMsImV4cCI6MjA1OTY2MjA4M30.sa4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ';

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
