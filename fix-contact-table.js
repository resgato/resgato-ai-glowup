import { createClient } from '@supabase/supabase-js';
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

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function fixContactTable() {
  try {
    console.log('🔧 Fixing contact_submissions table structure...');

    // SQL commands to fix the table
    const sqlCommands = [
      // Add missing columns
      `alter table public.contact_submissions add column if not exists service text;`,
      `alter table public.contact_submissions add column if not exists recaptcha_token text;`,

      // Verify table structure
      `select column_name, data_type, is_nullable 
       from information_schema.columns 
       where table_name = 'contact_submissions' 
       and table_schema = 'public'
       order by ordinal_position;`,
    ];

    // Execute each command
    for (let i = 0; i < sqlCommands.length; i++) {
      const sql = sqlCommands[i];
      console.log(`Executing command ${i + 1}/${sqlCommands.length}...`);

      if (sql.includes('select')) {
        // This is a query to check table structure
        const { data, error } = await supabase.rpc('exec_sql', { sql });

        if (error) {
          console.error(`Error checking table structure:`, error);
        } else {
          console.log('✅ Table structure:');
          console.table(data);
        }
      } else {
        // This is a DDL command
        const { error } = await supabase.rpc('exec_sql', { sql });

        if (error) {
          console.error(`Error executing command ${i + 1}:`, error);
        } else {
          console.log(`✅ Command ${i + 1} executed successfully`);
        }
      }
    }

    // Test inserting a record with all columns
    console.log('🧪 Testing table insert with all columns...');
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          phone: '123-456-7890',
          message: 'Test message with service field',
          service: 'SEO Services',
          recaptcha_token: 'test-token',
        },
      ])
      .select();

    if (testError) {
      console.error('❌ Test insert failed:', testError);
    } else {
      console.log('✅ Test insert successful:', testData);

      // Clean up test data
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('email', 'test@example.com');

      console.log('🧹 Test data cleaned up');
    }

    console.log('🎉 Contact table structure fixed!');
  } catch (error) {
    console.error('❌ Error fixing table:', error.message);
  }
}

fixContactTable();
