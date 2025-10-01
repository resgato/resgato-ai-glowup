-- Drop existing trigger and function if they exist
drop trigger if exists on_audit_submission_created on public.audit_submissions;
drop function if exists public.handle_new_audit_submission();

-- Create a function to handle the trigger
create or replace function public.handle_new_audit_submission()
returns trigger as $$
declare
  service_role_key text := current_setting('app.settings.service_role_key', true);
  record_json jsonb;
begin
  -- Convert the NEW record to JSON
  record_json := to_jsonb(NEW);
  
  -- Call the Edge Function with the record directly
  perform
    net.http_post(
      url := 'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/send-audit-notification',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_role_key
      ),
      body := record_json
    );
  return NEW;
end;
$$ language plpgsql security definer;

-- Create the trigger
create trigger on_audit_submission_created
  after insert on public.audit_submissions
  for each row
  execute function public.handle_new_audit_submission(); 