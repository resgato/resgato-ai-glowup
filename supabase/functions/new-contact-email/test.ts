import { assertEquals, assertExists } from "https://deno.land/std@0.168.0/testing/asserts.ts"
import { handler } from './index.ts'

// Mock environment variables
const originalEnv = {
  SUPABASE_URL: Deno.env.get('SUPABASE_URL'),
  SUPABASE_SERVICE_ROLE_KEY: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
  RESEND_API_KEY: Deno.env.get('RESEND_API_KEY')
}

// Set test environment variables
Deno.env.set('SUPABASE_URL', 'https://bopzgxqujuqosdexnppj.supabase.co')
Deno.env.set('SUPABASE_SERVICE_ROLE_KEY', 'test-service-role-key')
Deno.env.set('RESEND_API_KEY', 'test-resend-key')

// Mock Supabase client
const mockSupabase = {
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: { id: 'test-id' }, error: null })
      })
    })
  })
}

// Mock Resend client
const mockResend = {
  emails: {
    send: () => Promise.resolve({ data: { id: 'test-email-id' }, error: null })
  }
}

// Test cases
const testCases = [
  {
    name: "Valid request",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer test-service-role-key",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business",
        name: "Test User",
        email: "test@example.com",
        phone: "123-456-7890"
      })
    }),
    expectedStatus: 200,
    expectedBody: {
      success: true,
      data: { id: 'test-id' }
    }
  },
  {
    name: "Missing authorization header",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business",
        name: "Test User",
        email: "test@example.com",
        phone: "123-456-7890"
      })
    }),
    expectedStatus: 401,
    expectedBody: {
      success: false,
      error: "Missing or invalid authorization header"
    }
  },
  {
    name: "Invalid authorization token",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer invalid-token",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business",
        name: "Test User",
        email: "test@example.com",
        phone: "123-456-7890"
      })
    }),
    expectedStatus: 401,
    expectedBody: {
      success: false,
      error: "Invalid authorization token"
    }
  },
  {
    name: "Missing required fields",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer test-service-role-key",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business"
        // Missing name, email, and phone
      })
    }),
    expectedStatus: 400,
    expectedBody: {
      success: false,
      error: "Missing required fields: name, email, phone"
    }
  },
  {
    name: "Invalid email format",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer test-service-role-key",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business",
        name: "Test User",
        email: "invalid-email",
        phone: "123-456-7890"
      })
    }),
    expectedStatus: 400,
    expectedBody: {
      success: false,
      error: "Invalid email format"
    }
  },
  {
    name: "Invalid JSON body",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer test-service-role-key",
        "Content-Type": "application/json"
      },
      body: "invalid-json"
    }),
    expectedStatus: 400,
    expectedBody: {
      success: false,
      error: "Invalid JSON in request body"
    }
  },
  {
    name: "Duplicate email submission",
    request: new Request("http://localhost:54321/functions/v1/new-contact-email", {
      method: "POST",
      headers: {
        "Authorization": "Bearer test-service-role-key",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        businessName: "Test Business",
        name: "Test User",
        email: "existing@example.com",
        phone: "123-456-7890"
      })
    }),
    expectedStatus: 409,
    expectedBody: {
      success: false,
      error: "A lead with this email already exists"
    },
    mockData: {
      existingLead: { id: "existing-id" }
    }
  }
]

// Run tests
for (const testCase of testCases) {
  Deno.test(testCase.name, async () => {
    // Override mock data if provided
    if (testCase.mockData?.existingLead) {
      mockSupabase.from = () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: testCase.mockData.existingLead, error: null })
          })
        })
      })
    }

    const response = await handler(testCase.request, { supabase: mockSupabase, resend: mockResend })
    
    assertEquals(response.status, testCase.expectedStatus)
    
    const responseBody = await response.json()
    assertEquals(responseBody.success, testCase.expectedBody.success)
    if (testCase.expectedBody.error) {
      assertEquals(responseBody.error, testCase.expectedBody.error)
    }
    if (testCase.expectedBody.data) {
      assertExists(responseBody.data)
    }
  })
}

// Clean up - restore original environment variables
if (originalEnv.SUPABASE_URL) Deno.env.set('SUPABASE_URL', originalEnv.SUPABASE_URL)
if (originalEnv.SUPABASE_SERVICE_ROLE_KEY) Deno.env.set('SUPABASE_SERVICE_ROLE_KEY', originalEnv.SUPABASE_SERVICE_ROLE_KEY)
if (originalEnv.RESEND_API_KEY) Deno.env.set('RESEND_API_KEY', originalEnv.RESEND_API_KEY) 