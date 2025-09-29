-- Add recaptcha_verified column to contact_submissions table
alter table public.contact_submissions 
add column recaptcha_verified boolean default false;

-- Add index for better performance when filtering by verification status
create index idx_contact_submissions_recaptcha_verified 
on public.contact_submissions(recaptcha_verified);

-- Add comment to explain the column
comment on column public.contact_submissions.recaptcha_verified is 'Indicates whether the reCAPTCHA token was successfully verified by the server';

