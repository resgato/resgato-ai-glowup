import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
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
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testContactForm() {
  try {
    console.log('🧪 Testing contact form functionality...');

    // Test 1: Check if the trigger exists
    console.log('1️⃣ Checking if trigger exists...');
    const { data: triggerData, error: triggerError } = await supabase.rpc(
      'exec_sql',
      {
        sql: `select trigger_name, event_manipulation, action_statement
              from information_schema.triggers
              where trigger_name = 'on_contact_submission_created';`,
      }
    );

    if (triggerError) {
      console.error('❌ Error checking trigger:', triggerError);
    } else {
      console.log('✅ Trigger found:', triggerData);
    }

    // Test 2: Submit a test contact form
    console.log('2️⃣ Submitting test contact form...');
    const { data: submissionData, error: submissionError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          phone: '123-456-7890',
          message:
            'This is a test message to verify the email trigger is working properly.',
          service: 'SEO Services',
        },
      ])
      .select();

    if (submissionError) {
      console.error('❌ Contact form submission failed:', submissionError);
    } else {
      console.log('✅ Contact form submitted successfully:', submissionData);

      // Wait a moment for the trigger to process
      console.log('⏳ Waiting for email trigger to process...');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Clean up test data
      console.log('3️⃣ Cleaning up test data...');
      const { error: deleteError } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('email', 'test@example.com');

      if (deleteError) {
        console.error('❌ Error cleaning up test data:', deleteError);
      } else {
        console.log('✅ Test data cleaned up');
      }
    }

    console.log('');
    console.log('🎉 Contact form test complete!');
    console.log('');
    console.log(
      '📧 Check your email at help@resgato.com for the test notification.'
    );
    console.log('🔗 Test the live form at: https://www.resgato.com/contact');
  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
}

testContactForm();
