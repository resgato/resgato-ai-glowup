// Test script to debug audit form submission
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bopzgxqujuqosdexnppj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODYwODMsImV4cCI6MjA1OTY2MjA4M30.sa4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ';

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
      'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-contact-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODYwODMsImV4cCI6MjA1OTY2MjA4M30.sa4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ',
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
