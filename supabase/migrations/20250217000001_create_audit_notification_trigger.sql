-- Drop existing trigger and function if they exist
drop trigger if exists on_audit_submission_created on public.audit_submissions;
drop function if exists public.handle_new_audit_submission();

-- Create a function to handle the trigger
create or replace function public.handle_new_audit_submission()
returns trigger as $$
declare
  service_role_key text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcHpneHF1anVxb3NkZXhucHBqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA4NjA4MywiZXhwIjoyMDU5NjYyMDgzfQ.4gGVfa2JpvlOQaouVYArBR_Urv9zh3CGzOKcFY-RQ';
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