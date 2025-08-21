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
      'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-contact-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwODYwODMsImV4cCI6MjA1OTY2MjA4M30.sa4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ',
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
