alter table public.dream_submissions
  add column if not exists submission_type text not null default 'Community',
  add column if not exists consent boolean not null default false,
  add column if not exists published_at timestamptz,
  add column if not exists email_sent boolean not null default false,
  add column if not exists premium_interpretation text;

update public.dream_submissions
set submission_type = 'Community'
where submission_type is null;

update public.dream_submissions
set payment_status = 'Free'
where payment_status is null;

alter table public.dream_submissions
  alter column payment_status set default 'Free',
  alter column payment_status set not null;

alter table public.dream_submissions
  drop constraint if exists dream_submissions_submission_type_check,
  add constraint dream_submissions_submission_type_check
    check (submission_type in ('Community', 'Premium')),
  drop constraint if exists dream_submissions_payment_status_check,
  add constraint dream_submissions_payment_status_check
    check (payment_status in ('Free', 'Pending', 'Paid', 'Refunded'));

create index if not exists dream_submissions_priority_created_at_idx
  on public.dream_submissions (submission_type desc, created_at desc);

comment on column public.dream_submissions.submission_type is
  'Community submissions may be published; Premium submissions remain private.';
comment on column public.dream_submissions.premium_interpretation is
  'Private interpretation content for Premium submissions only.';
