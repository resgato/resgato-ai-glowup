-- Create the audit_submissions table
create table public.audit_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  business_name text not null,
  business_website text,
  business_phone text,
  business_email text not null,
  business_address text,
  business_city text,
  business_state text,
  business_zip text,
  marketing_goals text,
  current_marketing_channels text,
  monthly_marketing_budget text,
  target_audience text,
  competitors text,
  additional_notes text
);

-- Enable Row Level Security
alter table public.audit_submissions enable row level security;

-- Create policy to allow inserts from anyone
create policy "Allow public inserts"
  on public.audit_submissions
  for insert
  to public
  with check (true);

-- Create policy to allow reads only to authenticated users
create policy "Allow authenticated reads"
  on public.audit_submissions
  for select
  to authenticated
  using (true); 