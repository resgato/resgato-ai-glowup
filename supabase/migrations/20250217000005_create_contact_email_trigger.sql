-- Enable the http extension if not already enabled
create extension if not exists http with schema extensions;

-- Create the function to handle new contact submissions
create or replace function public.handle_new_contact_submission()
returns trigger as $$
begin
  -- Call the edge function to send email using net.http_post
  perform
    net.http_post(
      url := 'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-contact-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := to_jsonb(NEW)
    );
  return NEW;
end;
$$ language plpgsql security definer;

-- Create the trigger
drop trigger if exists on_contact_submission_created on public.contact_submissions;
create trigger on_contact_submission_created
  after insert on public.contact_submissions
  for each row
  execute function public.handle_new_contact_submission();
