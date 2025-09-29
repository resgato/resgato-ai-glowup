-- Fix RLS policies for contact_submissions table
-- Drop existing policies to recreate them
drop policy if exists "Allow public inserts" on public.contact_submissions;
drop policy if exists "Allow authenticated reads" on public.contact_submissions;
drop policy if exists "Allow authenticated updates" on public.contact_submissions;
drop policy if exists "Allow authenticated deletes" on public.contact_submissions;

-- Add recaptcha_verified column if it doesn't exist
alter table public.contact_submissions 
add column if not exists recaptcha_verified boolean default false;

-- Recreate policies with proper permissions
-- Allow anyone to insert contact submissions (public access)
create policy "Allow public inserts"
  on public.contact_submissions
  for insert
  to public
  with check (true);

-- Allow authenticated users to read all submissions
create policy "Allow authenticated reads"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Allow authenticated users to update submissions
create policy "Allow authenticated updates"
  on public.contact_submissions
  for update
  to authenticated
  using (true);

-- Allow authenticated users to delete submissions
create policy "Allow authenticated deletes"
  on public.contact_submissions
  for delete
  to authenticated
  using (true);

-- Ensure RLS is enabled
alter table public.contact_submissions enable row level security;

-- Add index for recaptcha_verified column
create index if not exists idx_contact_submissions_recaptcha_verified 
on public.contact_submissions(recaptcha_verified);

-- Add comment to explain the column
comment on column public.contact_submissions.recaptcha_verified is 'Indicates whether the reCAPTCHA token was successfully verified by the server';
