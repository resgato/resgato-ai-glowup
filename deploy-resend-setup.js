import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  console.error('Please check your .env file and ensure all required variables are set.');
  process.exit(1);
}

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function deployResendSetup() {
  try {
    console.log('🚀 Setting up Resend email functionality...');

    // Step 1: Apply the database trigger migration
    console.log('📝 Applying database trigger...');
    const migrationPath = path.join(
      __dirname,
      'supabase',
      'migrations',
      '20250217000005_create_contact_email_trigger.sql'
    );
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    const { error: migrationError } = await supabase.rpc('exec_sql', {
      sql: migrationSQL,
    });

    if (migrationError) {
      console.error('❌ Migration error:', migrationError);
    } else {
      console.log('✅ Database trigger applied successfully');
    }

    // Step 2: Test the contact form submission
    console.log('🧪 Testing contact form submission...');
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          phone: '123-456-7890',
          message:
            'This is a test message to verify the email trigger is working.',
          service: 'SEO Services',
        },
      ])
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
