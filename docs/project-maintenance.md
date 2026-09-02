# DreamScriptures Project Maintenance

This document is the current operational reference for maintaining and deploying DreamScriptures. Historical implementation, repair, audit, and benchmark material is retained under `archive/` and is not active project guidance.

## Local setup and validation

Install locked dependencies with `npm ci`, then use:

- `npm run dev` — local development server.
- `npm run lint` — ESLint validation.
- `npm run build` — production build and route generation.
- `npm run audit:related` — unresolved related-dream link audit.
- `npm run audit:dream-quality` — full library quality audit. Generated output is written to `reports/dream-quality-audit/` and may be archived after review.

Before deployment, run lint, the production build, both audits, and representative route checks for public, protected, sitemap, and robots routes.

## Environment and deployment

Required server configuration includes the Supabase URL and server-only service credential, admin password, Resend key/from address, payment configuration, and any public Supabase publishable key used by middleware. Use `.env.example` as the variable-name reference. Never commit `.env.local`, service-role credentials, Resend keys, payment secrets, or admin passwords.

Database changes live in `supabase/migrations/`. Apply pending migrations to the intended environment before deploying application code that selects new columns. In particular, the admin reply workflow expects `admin_response`, `reply_sent_at`, and `reply_email_id` on `public.dream_submissions`.

The Vercel project metadata remains local under `.vercel/`. Deploy the verified production build through the established Vercel project; do not publish repository documentation or archived artifacts as static assets.

## Admin and debug access

The admin session is HMAC-backed and stored in the HTTP-only `dreamscriptures_admin_session` cookie. It is SameSite strict, Secure in production, has a 12-hour lifetime, and uses `Path=/` so the same protected session reaches `/admin/*` and `/debug/*`. Cookie creation and logout expiration must retain matching attributes.

Protected routes include `/admin`, `/admin/submissions`, `/admin/submissions/[id]`, `/debug/dreams`, and `/debug/dream-list`. Admin layouts and both debug pages must continue to use `requireAdmin()`. Debug pages remain `noindex,nofollow`; robots directives are not a replacement for authentication.

The submission detail workspace saves private response drafts and can send a direct reply through the existing server-only Resend integration. The recipient must always come from the stored submission record. Successful sends record `reply_sent_at` and `reply_email_id`; Resend idempotency plus the stored timestamp prevents practical duplicates. Existing interpretation URLs may be included, but no public submission-result route should be created.

## Editorial and privacy boundaries

Use `docs/dream-page-editorial-standard.md` for page review, voice, safety, contextual interpretation, and non-predictive boundaries. Preserve strong pages and avoid padding, doorway pages, or pages created solely for keyword capture.

Analytics is aggregate-only. Compass events may contain step number, result count, match-quality band, perspective/symbol counts, and result rank/type. Search events may contain result count/bucket and a parameter-free result-click event. Do not send dream text or titles, search text, selections, destination slugs, saved dreams, journal content, or personally identifying information.

Review aggregate health approximately 1–2 weeks after launch and perform a deeper discovery/editorial/indexing review around 30 days. Do not draw conclusions from tiny samples. Use Vercel runtime logs and Search Console for runtime, 404/soft-404, redirect, sitemap, canonical, crawl, and indexing review.

## Repository hygiene

Active documentation belongs in `docs/`. Historical reports, audit snapshots, screenshots, and completed implementation records belong in `archive/`. Neither directory is a Next.js route or public asset location. Never place internal reports, credentials, private submissions, or environment snapshots under `public/`.

Editor history, temporary diagnostics, logs, build output, and generated audit output should not be committed. Keep application source, package scripts, migrations, configuration, and ongoing editorial guidance in their established locations.
