-- Create the marketing_audit_leads table if it doesn't exist
create table if not exists public.marketing_audit_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  business_name text not null,
  name text not null,
  business_email text not null,
  business_phone text not null,
  email_sent boolean default false,
  email_sent_at timestamp with time zone
);

-- Enable Row Level Security
alter table public.marketing_audit_leads enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Allow public inserts" on public.marketing_audit_leads;
drop policy if exists "Allow authenticated reads" on public.marketing_audit_leads;

-- Create policy to allow inserts from anyone
create policy "Allow public inserts"
  on public.marketing_audit_leads
  for insert
  to public
  with check (true);

-- Create policy to allow reads only to authenticated users
create policy "Allow authenticated reads"
  on public.marketing_audit_leads
  for select
  to authenticated
  using (true);

-- Add unique constraint on business_email to prevent duplicates (if it doesn't exist)
alter table public.marketing_audit_leads
  drop constraint if exists marketing_audit_leads_business_email_key;
alter table public.marketing_audit_leads
  add constraint marketing_audit_leads_business_email_key unique (business_email);
