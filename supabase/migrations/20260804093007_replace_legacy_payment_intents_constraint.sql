alter table public.payment_intents
  drop constraint if exists payment_intents_check,
  drop constraint if exists payment_intents_payload_or_submission_check;

alter table public.payment_intents
  add constraint payment_intents_payload_or_submission_check
  check (
    (kind = 'RepeatCommunity' and submission_payload is not null and submission_id is null)
    or (kind = 'Personal' and (
      (submission_payload is not null and submission_id is null)
      or (submission_payload is null and submission_id is not null)
    ))
  ) not valid;

alter table public.payment_intents
  validate constraint payment_intents_payload_or_submission_check;

do $$
declare
  probe_submission_id uuid;
  probe_reference text := 'constraint_probe_' || gen_random_uuid()::text;
begin
  select id
  into probe_submission_id
  from public.dream_submissions
  order by created_at
  limit 1;

  if probe_submission_id is null then
    raise exception 'Cannot verify payment_intents constraint without a dream submission';
  end if;

  insert into public.payment_intents (
    reference,
    kind,
    email,
    amount,
    currency,
    status,
    submission_payload,
    submission_id
  ) values (
    probe_reference,
    'Personal',
    'constraint-probe@example.invalid',
    599,
    'USD',
    'Pending',
    null,
    probe_submission_id
  );

  delete from public.payment_intents
  where reference = probe_reference;
end $$;
