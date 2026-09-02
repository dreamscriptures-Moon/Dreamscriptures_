# Pre-Launch Admin & Debug Recovery

Date: 2026-09-01

## Root causes

### Admin dashboard and submissions

The admin session was valid and protected routes were reached, but both the dashboard and submissions page called the Supabase service-role REST client without an error boundary. In the current local environment the configured Supabase hostname could not be resolved (`fetch failed` / `ENOTFOUND`), so the server component failed with HTTP 500. This presented as an empty/broken dashboard rather than a useful operational state.

The existing authentication architecture was retained. `app/admin/(protected)/page.js` and `app/admin/(protected)/submissions/page.js` now catch repository failures, log only a server-side diagnostic, and render a non-sensitive temporary-unavailability message with empty data. Private submission fields and upstream error details are never sent to the browser.

### Debug dream list and audit

Both debug routes contained an explicit production-only `notFound()` guard. They therefore could not be used on a production build, even by an administrator. The routes now use the existing `requireAdmin()` gate and remain `noindex,nofollow`; they are available to authenticated internal users without becoming public discovery pages.

### Session sign-out

The session cookie is created with `path: /admin`, while `clearAdminSession()` previously used a path-less delete. Sign-out now expires the cookie using the same path and security attributes, making logout reliable across browsers.

## Files changed

- `lib/adminAuth.js` — path-matched session-cookie expiry.
- `app/admin/(protected)/page.js` — safe dashboard data fallback.
- `app/admin/(protected)/submissions/page.js` — safe submissions data fallback.
- `app/debug/dreams/page.js` — authenticated production access.
- `app/debug/dream-list/page.js` — authenticated production access.

## Authentication and data findings

- Unauthenticated requests to `/admin`, `/admin/submissions`, `/debug/dreams`, and `/debug/dream-list` redirect to `/admin/login`.
- `/admin/login` remains publicly reachable and is marked noindex.
- A valid admin session produced HTTP 200 for the dashboard, submissions list, and both debug routes.
- The Supabase service-role client remains server-only; credentials are not exposed in rendered output.
- With the local Supabase endpoint unavailable, the dashboard and list show a safe recovery message. Once the endpoint/DNS is available, the existing repository queries render live stats and submissions without further changes.

## Validation

- `npm.cmd run lint` — passed (only the existing large-file Babel de-optimisation note).
- `npm.cmd run build` — passed; 628 routes generated. `/admin`, `/admin/submissions`, `/debug/dreams`, and `/debug/dream-list` are dynamic routes.
- Related-link audit — passed; `rawUnresolvedCount: 0`.
- Dream-quality audit — passed with `readerTestFailures: 0`; current library snapshot: 370 indexed pages, P0 0, P1 44, P2 211, P3 99, P4 16.
- Route checks against the production build:
  - `/admin/login` → 200
  - unauthenticated protected routes → 307 to `/admin/login`
  - authenticated `/admin`, `/admin/submissions`, `/debug/dreams`, `/debug/dream-list` → 200
- Authenticated dashboard response visibly contained the safe Supabase-unavailable state; debug-list response contained the internal tool page.
- No indexing, canonical, redirect, or sitemap changes were made.

## Security considerations

Debug information is now protected by the same HMAC-backed admin session as submissions. Robots metadata remains `index: false, follow: false`; authentication, rather than robots directives alone, is the access control. Error messages are generic and do not disclose hostnames, query details, tokens, credentials, or submission data.

## Remaining limitations

The local environment cannot resolve the configured Supabase host, so live submission rows and counts could not be exercised end-to-end here. Production verification should include one authenticated read against the deployed Supabase endpoint and one controlled login/logout cycle. No credentials or private records were printed or captured during testing.

## Production verification follow-up

The production host is reachable at `www.dreamscriptures.com`: `/admin/login` returned 200 and unauthenticated `/admin` and `/admin/submissions` returned the expected 307 redirect to `/admin/login`. The deployed `/debug/dreams` and `/debug/dream-list` currently return 404, indicating that the recovery changes have not yet been deployed there.

An authenticated production dashboard/submissions read could not be completed from this environment: the local admin-session secret was rejected by production (redirect to login), and no production credential/session was supplied. The configured Supabase endpoint is also not DNS-resolvable from this environment. This is a launch limitation requiring a controlled production login and live Supabase read after deployment; authentication was not weakened and no production secrets or private records were accessed.

## Submission workspace repair follow-up

The previous recovery stopped at route protection and generic data fallbacks; it did not provide a response field or a detail-route error boundary. The `missing-url` state therefore appeared as an unhelpful raw/error experience when a community publication was attempted without a destination URL.

The detail workspace now has a deliberate admin layout separating submission, metadata, review state, private response draft, internal notes, errors, and actions. `missing-url` explains the required next step without hiding the error. A new private `admin_response` column and migration (`supabase/migrations/20260901120000_add_admin_response.sql`) support saving an interpretation/response draft from the protected workspace. The response is not public until an administrator uses the existing publication workflow.

Email delivery already exists through Resend for published community interpretation URLs. There is no separate arbitrary-reply composer or public submission-result route: the current workflow sends the existing published interpretation link. Premium submissions remain private. Actual response saving requires applying the new Supabase migration in the deployment environment.

`/debug/dream-list` was present in source but was unavailable on stale/older builds; it is now explicitly dynamic, admin-only, and noindex/nofollow. Authenticated local production-build checks returned 200 for all required routes; unauthenticated checks redirected to login.

The final validation reran lint, production build (627 routes), related-link audit (zero unresolved), and dream-quality audit (P0 0; reader-test failures 0). Live Supabase data and production authenticated retrieval remain launch limitations until the migration is applied and a controlled production login/read is completed.

## Local port 3000 follow-up

If `http://localhost:3000/debug/dreams` returns 404, check the running Next process before changing routes. The current `.next/server/app-paths-manifest.json` contains both debug routes, and a fresh server started from the current production build returned the expected unauthenticated 307 redirect to `/admin/login` for `/debug/dreams` and `/debug/dream-list`. Port 3000 was occupied by an older Next process/build that predated the restored routes. Stop/restart that development server (or run `npm.cmd run dev -- -p 3000`) to load the current route manifest; do not remove the route or weaken its admin gate.

## Protected Send Reply workflow

The protected submission detail page now supports a direct reply without changing the public interpretation workflow:

1. The administrator writes or edits the existing private `Response / interpretation draft`.
2. `Save Changes` continues to save the draft without sending it.
3. `Send Reply` displays a browser confirmation containing the submission's stored recipient email.
4. The protected server action reloads the submission by ID, rejects an empty response or an already-sent reply, and saves the submitted response before attempting delivery.
5. The existing server-only Resend module sends the saved response only to `submission.email`. If an existing `interpretation_url` is present, the established interpretation link is included; no new result route or link format is created.
6. On success, `reply_sent_at` and the returned Resend `reply_email_id` are saved and displayed. The action becomes disabled and a success banner confirms delivery.
7. On failure, the response remains saved and the page displays a retryable error. Provider details and secrets remain server-only.

Duplicate protection is provided by the persisted `reply_sent_at` check and the stable Resend idempotency key `admin-reply/<submission-id>`. If Resend succeeds but the status update is interrupted, a prompt retry within Resend's idempotency window returns the original send instead of creating a duplicate.

The existing unapplied admin-response migration now also adds `reply_sent_at` and `reply_email_id`. Apply `supabase/migrations/20260901120000_add_admin_response.sql` to the intended Supabase environment before exercising the workflow.

Security remains unchanged: the page and server action require the existing admin session, Resend credentials never enter client code, the recipient cannot be supplied by form data, and submission content remains private.

Validation on 2026-09-02:

- ESLint passed.
- The production build passed and generated all 627 static pages; protected admin routes remain dynamic.
- Static action review confirms `requireAdmin()` executes before submission lookup, save, or delivery.
- The confirmation UI, saved-response-first ordering, success/error states, sent timestamp/ID display, stored-recipient enforcement, and duplicate guards are present in the compiled implementation.
- A real local delivery was not triggered because the configured Supabase environment still rejects the service-role read and does not yet contain the admin-response migration columns. No real recipient was used as test data. End-to-end acceptance requires applying the migration, correcting the configured service-role credential, and using an authorized test submission/email.

## Admin session scope for debug routes

The admin session cookie now uses `Path=/` for both creation and expiration. The broader path is required because the same authenticated admin session protects `/admin/*`, `/debug/dreams`, and `/debug/dream-list`. The cookie remains HTTP-only, SameSite strict, secure in production, HMAC-backed, and limited to the existing 12-hour lifetime.

Both debug pages continue to call `requireAdmin()`; no route was made public and the authentication architecture is otherwise unchanged. Matching root paths on session creation and logout ensure that logout expires the actual cookie and removes access to both admin and debug routes.

Production-build validation on 2026-09-02 confirmed:

- With a valid admin session, `/admin`, `/admin/submissions`, `/debug/dreams`, and `/debug/dream-list` each returned 200.
- Without an admin session, all four routes returned 307 to `/admin/login`.
- The real logout server action returned 303 to `/admin/login` and emitted an expired root-scoped cookie (`Path=/`, `Max-Age=0`) with HttpOnly, SameSite strict, and production Secure attributes intact.
- After logout, all four protected routes again returned 307 to `/admin/login`.
- ESLint passed and the production build completed successfully with 627 static pages; both debug routes remain dynamic and protected.
