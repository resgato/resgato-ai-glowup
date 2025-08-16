import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase configuration
const supabaseUrl = 'https://bopzgxqujuqosdexnppj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA4NjA4MywiZXhwIjoyMDU5NjYyMDgzfQ.4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function applyMigration() {
  try {
    console.log('Applying migration via Supabase API...');

    // SQL commands to execute
    const sqlCommands = [
      // Create the contact_submissions table
      `create table if not exists public.contact_submissions (
        id uuid default gen_random_uuid() primary key,
        created_at timestamp with time zone default timezone('utc'::text, now()) not null,
        name text not null,
        email text not null,
        company text,
        phone text,
        message text not null,
        recaptcha_token text,
        service text
      );`,

      // Enable Row Level Security
      `alter table public.contact_submissions enable row level security;`,

      // Drop existing policies if they exist
      `drop policy if exists "Allow public inserts" on public.contact_submissions;`,
      `drop policy if exists "Allow authenticated reads" on public.contact_submissions;`,
      `drop policy if exists "Allow authenticated updates" on public.contact_submissions;`,
      `drop policy if exists "Allow authenticated deletes" on public.contact_submissions;`,

      // Create policies
      `create policy "Allow public inserts"
        on public.contact_submissions
        for insert
        to public
        with check (true);`,

      `create policy "Allow authenticated reads"
        on public.contact_submissions
        for select
        to authenticated
        using (true);`,

      `create policy "Allow authenticated updates"
        on public.contact_submissions
        for update
        to authenticated
        using (true);`,

      `create policy "Allow authenticated deletes"
        on public.contact_submissions
        for delete
        to authenticated
        using (true);`,

      // Create indexes
      `create index if not exists idx_contact_submissions_created_at on public.contact_submissions(created_at desc);`,
      `create index if not exists idx_contact_submissions_email on public.contact_submissions(email);`
    ];

    // Execute each SQL command
    for (let i = 0; i < sqlCommands.length; i++) {
      const sql = sqlCommands[i];
      console.log(`Executing command ${i + 1}/${sqlCommands.length}...`);
      
      const { data, error } = await supabase.rpc('exec_sql', { sql });
      
      if (error) {
        console.error(`Error executing command ${i + 1}:`, error);
      } else {
        console.log(`✅ Command ${i + 1} executed successfully`);
      }
    }

    // Test the table by trying to insert a test record
    console.log('Testing table access...');
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .insert([{
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message for RLS verification',
        company: 'Test Company'
      }])
      .select();

    if (testError) {
      console.error('❌ RLS test failed:', testError);
    } else {
      console.log('✅ RLS test passed! Table is accessible for public inserts');
      
      // Clean up test data
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('email', 'test@example.com');
    }

  } catch (error) {
    console.error('Error applying migration:', error.message);
  }
}

applyMigration();
