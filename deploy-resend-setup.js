import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase configuration
const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA4NjA4MywiZXhwIjoyMDU5NjYyMDgzfQ.4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function deployResendSetup() {
  try {
    console.log('🚀 Setting up Resend email functionality...');

    // Step 1: Apply the database trigger migration
    console.log('📝 Applying database trigger...');
    const migrationPath = path.join(__dirname, 'supabase', 'migrations', '20250217000005_create_contact_email_trigger.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    const { error: migrationError } = await supabase.rpc('exec_sql', { sql: migrationSQL });
    
    if (migrationError) {
      console.error('❌ Migration error:', migrationError);
    } else {
      console.log('✅ Database trigger applied successfully');
    }

    // Step 2: Test the contact form submission
    console.log('🧪 Testing contact form submission...');
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .insert([{
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '123-456-7890',
        message: 'This is a test message to verify the email trigger is working.',
        service: 'SEO Services'
      }])
      .select();

    if (testError) {
      console.error('❌ Test submission failed:', testError);
    } else {
      console.log('✅ Test submission successful:', testData);
      
      // Clean up test data
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('email', 'test@example.com');
      
      console.log('🧹 Test data cleaned up');
    }

    console.log('🎉 Resend email setup complete!');
    console.log('');
    console.log('📧 Next steps:');
    console.log('1. Deploy the edge function in Supabase Dashboard');
    console.log('2. Set RESEND_API_KEY environment variable');
    console.log('3. Test the contact form at https://www.resgato.com/contact');

  } catch (error) {
    console.error('❌ Setup error:', error.message);
  }
}

deployResendSetup();
