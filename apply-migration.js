import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function applyMigration() {
  const client = new Client({
    host: 'db.bopzgxqujuqosdexnppj.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'KBksgoYEuxZakYvE',
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    console.log('Connecting to database...');
    await client.connect();
    console.log('Connected successfully!');

    // Read the migration file
    const migrationPath = path.join(
      __dirname,
      'supabase',
      'migrations',
      '20250217000004_create_contact_submissions.sql'
    );
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    console.log('Applying migration...');
    await client.query(migrationSQL);
    console.log('Migration applied successfully!');

    // Verify the table was created
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'contact_submissions'
    `);

    if (result.rows.length > 0) {
      console.log('✅ contact_submissions table created successfully!');
    } else {
      console.log('❌ Table creation failed');
    }

    // Check RLS policies
    const policies = await client.query(`
      SELECT policyname, permissive, roles, cmd, qual, with_check
      FROM pg_policies 
      WHERE tablename = 'contact_submissions'
    `);

    console.log('RLS Policies created:');
    policies.rows.forEach(policy => {
      console.log(
        `- ${policy.policyname}: ${policy.cmd} for ${policy.roles.join(', ')}`
      );
    });
  } catch (error) {
    console.error('Error applying migration:', error.message);
  } finally {
    await client.end();
  }
}

applyMigration();
