import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars.join(', '));
  console.error('Please check your .env file and ensure all required variables are set.');
  process.exit(1);
}

async function testEdgeFunction() {
  try {
    console.log('🧪 Testing edge function directly...');

    const testData = {
      id: 'test-id-123',
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      phone: '123-456-7890',
      message: 'This is a direct test of the edge function.',
      service: 'SEO Services',
      created_at: new Date().toISOString(),
    };

    console.log('📤 Sending test data to edge function...');
    console.log('Data:', testData);

    const response = await fetch(
      `${process.env.SUPABASE_URL}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify(testData),
      }
    );

    console.log('📥 Response status:', response.status);
    console.log(
      '📥 Response headers:',
      Object.fromEntries(response.headers.entries())
    );

    const result = await response.text();
    console.log('📥 Response body:', result);

    if (response.ok) {
      console.log('✅ Edge function responded successfully!');
    } else {
      console.log('❌ Edge function returned an error');
    }
  } catch (error) {
    console.error('❌ Error testing edge function:', error.message);
  }
}

testEdgeFunction();
