-- Add the service column to contact_submissions table if it doesn't exist
alter table public.contact_submissions 
add column if not exists service text;

-- Add the recaptcha_token column if it doesn't exist
alter table public.contact_submissions 
add column if not exists recaptcha_token text;
