alter table public.dream_submissions
  add column if not exists admin_response text,
  add column if not exists reply_sent_at timestamptz,
  add column if not exists reply_email_id text;

comment on column public.dream_submissions.admin_response is
  'Private admin-written interpretation/response draft; not public until deliberately published.';

comment on column public.dream_submissions.reply_sent_at is
  'Timestamp when the protected admin Send Reply workflow successfully sent the saved response.';

comment on column public.dream_submissions.reply_email_id is
  'Resend email identifier returned for the protected admin reply.';
