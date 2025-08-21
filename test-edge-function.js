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
      'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-contact-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA4NjA4MywiZXhwIjoyMDU5NjYyMDgzfQ.4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ',
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
