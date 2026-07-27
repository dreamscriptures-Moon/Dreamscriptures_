alter table public.dream_submissions
  add column if not exists email_normalized text,
  add column if not exists payment_provider text not null default 'Paystack',
  add column if not exists payment_reference text,
  add column if not exists payment_amount integer not null default 0,
  add column if not exists payment_currency text,
  add column if not exists payment_verified_at timestamptz,
  add column if not exists email_sent_at timestamptz,
  add column if not exists priority text not null default 'Community';

update public.dream_submissions
set email_normalized = lower(trim(email))
where email_normalized is null;

update public.dream_submissions
set submission_type = 'Personal', priority = 'Premium'
where submission_type = 'Premium';

update public.dream_submissions
set email_sent_at = coalesce(email_sent_at, published_at)
where email_sent = true;

alter table public.dream_submissions
  alter column email_normalized set not null,
  drop constraint if exists dream_submissions_submission_type_check,
  add constraint dream_submissions_submission_type_check
    check (submission_type in ('Community', 'Personal')),
  drop constraint if exists dream_submissions_priority_check,
  add constraint dream_submissions_priority_check
    check (priority in ('Community', 'Premium')),
  drop constraint if exists dream_submissions_payment_status_check,
  add constraint dream_submissions_payment_status_check
    check (payment_status in ('Free', 'Pending', 'Paid', 'Refunded')),
  drop constraint if exists dream_submissions_payment_amount_check,
  add constraint dream_submissions_payment_amount_check
    check (payment_amount >= 0);

create index if not exists dream_submissions_email_community_idx
  on public.dream_submissions (email_normalized, submission_type);

create unique index if not exists dream_submissions_payment_reference_idx
  on public.dream_submissions (payment_reference)
  where payment_reference is not null;

drop index if exists public.dream_submissions_priority_created_at_idx;
create index dream_submissions_priority_created_at_idx
  on public.dream_submissions (priority desc, created_at desc);

create table if not exists public.payment_intents (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  kind text not null check (kind in ('RepeatCommunity', 'Personal')),
  email text not null,
  amount integer not null check (amount > 0),
  currency text not null,
  status text not null default 'Pending' check (status in ('Pending', 'Paid', 'Failed')),
  submission_payload jsonb,
  submission_id uuid references public.dream_submissions(id) on delete restrict,
  authorization_url text,
  verified_at timestamptz,
  fulfilled_at timestamptz,
  created_at timestamptz not null default now(),
  check (
    (kind = 'RepeatCommunity' and submission_payload is not null and submission_id is null)
    or (kind = 'Personal' and submission_payload is null and submission_id is not null)
  )
);

alter table public.payment_intents enable row level security;

create index if not exists payment_intents_submission_id_idx
  on public.payment_intents (submission_id, created_at desc);

comment on table public.payment_intents is
  'Server-only temporary payment state. Fulfillment occurs only after a signed Paystack webhook.';
