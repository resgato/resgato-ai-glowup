import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_ANON_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  console.error('Please check your .env file and ensure all required variables are set.');
  process.exit(1);
}

// Test script to debug email sending
const testEmailFunction = async () => {
  console.log('🧪 Testing email function...');

  const testData = {
    id: 'test-123',
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    phone: '555-1234',
    message: 'This is a test message for the local business audit form.',
    service: 'Local Business Marketing Audit',
    created_at: new Date().toISOString(),
  };

  try {
    console.log('📤 Sending test request to edge function...');
    const response = await fetch(
      `${process.env.SUPABASE_URL}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(testData),
      }
    );

    console.log('📥 Response status:', response.status);
    console.log(
      '📥 Response headers:',
      Object.fromEntries(response.headers.entries())
    );

    const responseText = await response.text();
    console.log('📥 Response body:', responseText);

    if (response.ok) {
      console.log('✅ Email function responded successfully');
    } else {
      console.log('❌ Email function failed:', response.status, responseText);
    }
  } catch (error) {
    console.error('❌ Error testing email function:', error);
  }
};

// Run the test
testEmailFunction();
