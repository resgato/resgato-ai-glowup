-- Enable the http extension
create extension if not exists http with schema extensions;

-- Create the function to handle new marketing audit leads
create or replace function public.handle_new_marketing_audit_lead()
returns trigger as $$
begin
  perform
    http_post(
      'https://bopzgxqujuqosdexnppj.supabase.co/functions/v1/new-contact-email',
      json_build_object(
        'businessName', NEW.business_name,
        'name', NEW.name,
        'email', NEW.email,
        'phone', NEW.phone
      )::text,
      'application/json',
      array[
        array['Authorization', 'Bearer ' || current_setting('app.settings.anon_key', true)]
      ]
    );
  return NEW;
end;
$$ language plpgsql security definer;

-- Create the trigger
drop trigger if exists on_marketing_audit_lead_created on public.marketing_audit_leads;
create trigger on_marketing_audit_lead_created
  after insert on public.marketing_audit_leads
  for each row
  execute function public.handle_new_marketing_audit_lead(); 