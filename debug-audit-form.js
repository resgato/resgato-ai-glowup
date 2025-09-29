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

async function debugAuditForm() {
  try {
    console.log('🔍 Debugging local business audit form...');

    // Test 1: Check if marketing_audit_leads table exists
    console.log('1️⃣ Checking marketing_audit_leads table...');
    const { data: tableData, error: tableError } = await supabase.rpc(
      'exec_sql',
      {
        sql: `select table_name 
              from information_schema.tables 
              where table_name = 'marketing_audit_leads' 
              and table_schema = 'public';`,
      }
    );

    if (tableError) {
      console.error('❌ Error checking table:', tableError);
    } else {
      console.log('✅ Table check result:', tableData);
    }

    // Test 2: Check table structure
    console.log('2️⃣ Checking table structure...');
    const { data: structureData, error: structureError } = await supabase.rpc(
      'exec_sql',
      {
        sql: `select column_name, data_type, is_nullable 
              from information_schema.columns 
              where table_name = 'marketing_audit_leads' 
              and table_schema = 'public'
              order by ordinal_position;`,
      }
    );

    if (structureError) {
      console.error('❌ Error checking structure:', structureError);
    } else {
      console.log('✅ Table structure:', structureData);
    }

    // Test 3: Try to insert a test record
    console.log('3️⃣ Testing database insert...');
    const testData = {
      business_name: 'Test Business',
      name: 'Test User',
      business_email: 'test@example.com',
      business_phone: '123-456-7890',
      email_sent: false,
    };

    const { data: insertData, error: insertError } = await supabase
      .from('marketing_audit_leads')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ Insert error:', insertError);
      console.error('❌ Error details:', {
        message: insertError.message,
        details: insertError.details,
        hint: insertError.hint,
        code: insertError.code,
      });
    } else {
      console.log('✅ Insert successful:', insertData);

      // Clean up test data
      await supabase
        .from('marketing_audit_leads')
        .delete()
        .eq('business_email', 'test@example.com');

      console.log('🧹 Test data cleaned up');
    }

    // Test 4: Check RLS policies
    console.log('4️⃣ Checking RLS policies...');
    const { data: policyData, error: policyError } = await supabase.rpc(
      'exec_sql',
      {
        sql: `select policyname, permissive, roles, cmd, qual, with_check
              from pg_policies 
              where tablename = 'marketing_audit_leads';`,
      }
    );

    if (policyError) {
      console.error('❌ Error checking policies:', policyError);
    } else {
      console.log('✅ RLS policies:', policyData);
    }
  } catch (error) {
    console.error('❌ Debug error:', error.message);
  }
}

debugAuditForm();
