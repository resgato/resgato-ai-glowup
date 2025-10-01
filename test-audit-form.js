// Test script to debug audit form submission
import { createClient } from '@supabase/supabase-js';
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

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const testAuditFormSubmission = async () => {
  console.log('🧪 Testing audit form submission...');

  const testFormData = {
    businessName: 'Test Business',
    name: 'Test User',
    email: 'test@example.com',
    phone: '555-123-4567',
  };

  try {
    console.log('📤 Submitting test data to database...');

    // Test database insertion
    const { data: submissionData, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: testFormData.name,
          email: testFormData.email,
          company: testFormData.businessName,
          phone: testFormData.phone,
          message: `Local Business Marketing Audit Request\n\nBusiness: ${testFormData.businessName}\nContact: ${testFormData.name}\nEmail: ${testFormData.email}\nPhone: ${testFormData.phone}\n\nThis is a request for a free local business marketing audit.`,
          service: 'Local Business Marketing Audit',
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('❌ Database error:', dbError);
      return;
    }

    console.log('✅ Database submission successful:', submissionData);

    // Test email sending
    console.log('📧 Testing email sending...');
    const emailResponse = await fetch(
      `${process.env.SUPABASE_URL}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(submissionData),
      }
    );

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error('❌ Email error:', emailError);
    } else {
      console.log('✅ Email sent successfully');
    }
  } catch (error) {
    console.error('❌ Test error:', error);
  }
};

// Run the test
testAuditFormSubmission();
