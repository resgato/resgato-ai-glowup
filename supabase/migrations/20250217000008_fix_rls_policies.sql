-- Fix RLS policies for contact_submissions table
-- Drop existing policies first
drop policy if exists "Allow public inserts" on public.contact_submissions;
drop policy if exists "Allow authenticated reads" on public.contact_submissions;
drop policy if exists "Allow authenticated updates" on public.contact_submissions;
drop policy if exists "Allow authenticated deletes" on public.contact_submissions;

-- Recreate the policies
-- Allow public inserts (anyone can submit contact forms)
create policy "Allow public inserts"
  on public.contact_submissions
  for insert
  to public
  with check (true);

-- Allow authenticated users to read
create policy "Allow authenticated reads"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Allow authenticated users to update
create policy "Allow authenticated updates"
  on public.contact_submissions
  for update
  to authenticated
  using (true);

-- Allow authenticated users to delete
create policy "Allow authenticated deletes"
  on public.contact_submissions
  for delete
  to authenticated
  using (true);

-- Ensure RLS is enabled
alter table public.contact_submissions enable row level security;
