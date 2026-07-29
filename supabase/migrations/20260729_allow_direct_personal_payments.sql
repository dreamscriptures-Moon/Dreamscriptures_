do $$
declare
  constraint_name text;
begin
  select c.conname into constraint_name
  from pg_constraint c
  where c.conrelid = 'public.payment_intents'::regclass
    and c.contype = 'c'
    and pg_get_constraintdef(c.oid) like '%submission_payload%'
    and pg_get_constraintdef(c.oid) like '%submission_id%';

  if constraint_name is not null then
    execute format('alter table public.payment_intents drop constraint %I', constraint_name);
  end if;
end $$;

alter table public.payment_intents
  add constraint payment_intents_payload_or_submission_check
  check (
    (kind = 'RepeatCommunity' and submission_payload is not null and submission_id is null)
    or (kind = 'Personal' and (
      (submission_payload is not null and submission_id is null)
      or (submission_payload is null and submission_id is not null)
    ))
  );
