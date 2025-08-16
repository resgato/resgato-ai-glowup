-- Create the contact_submissions table
create table public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text,
  phone text,
  message text not null,
  recaptcha_token text,
  service text
);

-- Enable Row Level Security
alter table public.contact_submissions enable row level security;

-- Create policy to allow inserts from anyone (public)
create policy "Allow public inserts"
  on public.contact_submissions
  for insert
  to public
  with check (true);

-- Create policy to allow reads only to authenticated users
create policy "Allow authenticated reads"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Create policy to allow updates only to authenticated users
create policy "Allow authenticated updates"
  on public.contact_submissions
  for update
  to authenticated
  using (true);

-- Create policy to allow deletes only to authenticated users
create policy "Allow authenticated deletes"
  on public.contact_submissions
  for delete
  to authenticated
  using (true);

-- Add indexes for better performance
create index idx_contact_submissions_created_at on public.contact_submissions(created_at desc);
create index idx_contact_submissions_email on public.contact_submissions(email);
