-- Fix RLS policies for blog_posts table
-- Drop existing policies first (if they exist)
drop policy if exists "Allow public reads" on public.blog_posts;
drop policy if exists "Allow authenticated inserts" on public.blog_posts;
drop policy if exists "Allow authenticated updates" on public.blog_posts;
drop policy if exists "Allow authenticated deletes" on public.blog_posts;

-- Create new policies for blog_posts table

-- Allow public reads (anyone can read blog posts)
create policy "Allow public reads"
  on public.blog_posts
  for select
  to public
  using (true);

-- Allow authenticated users to insert new blog posts
create policy "Allow authenticated inserts"
  on public.blog_posts
  for insert
  to authenticated
  with check (true);

-- Allow authenticated users to update blog posts
create policy "Allow authenticated updates"
  on public.blog_posts
  for update
  to authenticated
  using (true);

-- Allow authenticated users to delete blog posts
create policy "Allow authenticated deletes"
  on public.blog_posts
  for delete
  to authenticated
  using (true);

-- Ensure RLS is enabled on blog_posts table
alter table public.blog_posts enable row level security;
