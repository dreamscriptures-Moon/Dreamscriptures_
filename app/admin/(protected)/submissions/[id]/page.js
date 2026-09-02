import Link from "next/link";
import { notFound } from "next/navigation";
import { getDreamSubmission } from "@/lib/repositories/dreamSubmissions";
import {
  publishDreamInterpretation,
  saveDreamSubmission,
  sendDreamSubmissionReply,
  setDreamSubmissionStatus,
} from "../../../actions";
import SendReplyButton from "./SendReplyButton";

const statuses = ["Pending", "Reviewed", "Published", "Rejected"];
const paymentStatuses = ["Free", "Pending", "Paid", "Refunded"];

function Field({ label, children }) {
  return <div><dt className="text-xs font-medium text-slate-500">{label}</dt><dd className="mt-1 break-words text-sm text-slate-900">{children ?? "—"}</dd></div>;
}

function Section({ title, children }) {
  return <section className="border-b border-slate-200 px-6 py-6 last:border-b-0"><h2 className="text-base font-semibold text-slate-900">{title}</h2><div className="mt-5">{children}</div></section>;
}

function StatusAction({ id, status, children, tone = "default" }) {
  const tones = tone === "danger"
    ? "border-red-200 text-red-700 hover:bg-red-50"
    : "border-slate-300 text-slate-700 hover:bg-slate-50";
  return <form action={setDreamSubmissionStatus}><input type="hidden" name="id" value={id} /><input type="hidden" name="status" value={status} /><button className={`w-full rounded-lg border px-4 py-2.5 text-sm font-medium transition ${tones}`}>{children}</button></form>;
}

export default async function SubmissionDetailPage({ params, searchParams }) {
  const { id } = await params;
  const flags = await searchParams;
  let submission;
  let dataError = false;
  try {
    submission = await getDreamSubmission(id);
  } catch (error) {
    dataError = true;
    console.error("Admin submission detail unavailable:", error);
  }
  if (dataError) {
    return <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Submission workspace</p><h1 className="mt-2 text-2xl font-semibold text-slate-950">Submission data is temporarily unavailable</h1><p className="mt-3 max-w-xl text-sm leading-6 text-amber-950">The private submission service could not be reached. No submission content was loaded. Check the server connection and try again.</p><Link href="/admin/submissions" className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white">Back to submissions</Link></section>;
  }
  if (!submission) notFound();

  const isPremium = submission.priority === "Premium";
  const dateTime = (value) => value ? new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)) : "—";

  return (
    <>
      <Link href="/admin/submissions" className="text-sm font-medium text-amber-800 hover:underline">← Back to submissions</Link>
      <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div><p className="text-sm text-slate-500">Dream Submission</p><h1 className="mt-1 text-3xl font-semibold">{submission.dream_title || "Untitled dream"}</h1></div>
        <div className="flex flex-wrap gap-2"><span className={`rounded-full px-3 py-1.5 text-sm font-semibold ${isPremium ? "bg-amber-100 text-amber-900" : "bg-slate-200 text-slate-700"}`}>{isPremium ? "⭐ Premium" : "☾ Community"}</span><span className={`rounded-full px-3 py-1.5 text-sm font-semibold ${isPremium ? "bg-amber-50 text-amber-800" : "bg-white text-slate-600"}`}>{isPremium ? "⭐⭐⭐ VIP" : "Community priority"}</span><span className="rounded-full bg-white px-3 py-1.5 text-sm font-medium shadow-sm">{submission.status}</span></div>
      </div>

      {flags.saved === "1" && <p className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Submission updated.</p>}
      {flags.published === "1" && <p className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Interpretation published and notification processed.</p>}
      {flags["reply-sent"] === "1" && <p role="status" className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Reply sent successfully to {submission.email}. The response remains saved with this submission.</p>}
      {flags.error === "invalid-url" && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Interpretation URL must begin with http:// or https://.</p>}
      {flags.error === "missing-url" && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"><strong className="font-semibold">Publishing needs a destination.</strong> Save the public interpretation URL below before using the publish action. Your private response draft is still safe.</p>}
      {flags.error === "premium-private" && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Personal interpretations are private and cannot be published publicly.</p>}
      {flags.error === "email-failed" && <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">The interpretation was published, but its email could not be sent. Use Publish Interpretation again to retry.</p>}
      {flags.error === "missing-response" && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Write a response before sending. Nothing was emailed.</p>}
      {flags.error === "reply-already-sent" && <p role="alert" className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">This reply has already been sent. It was not sent again.</p>}
      {flags.error === "reply-failed" && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">The response was saved, but the email could not be sent. Check the server email configuration and retry.</p>}

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <Section title="Dream Submission"><dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><Field label="Reference ID">{submission.reference_id}</Field><Field label="Submitted">{dateTime(submission.created_at)}</Field><Field label="Status">{submission.status}</Field><Field label="Payment Status">{submission.payment_status}</Field><Field label="Submission Type">{isPremium ? "⭐ Premium / Personal" : "☾ Community"}</Field><Field label="Priority"><span className={isPremium ? "font-semibold text-amber-800" : "text-slate-700"}>{isPremium ? "⭐⭐⭐ VIP" : "Community"}</span></Field></dl></Section>
          <Section title="Contact"><dl className="grid gap-5 sm:grid-cols-2"><Field label="Name">{submission.name}</Field><Field label="Email"><a href={`mailto:${submission.email}`} className="text-amber-800 hover:underline">{submission.email}</a></Field></dl></Section>
          <Section title="Dream"><dl className="space-y-5"><Field label="Dream Title">{submission.dream_title || "Untitled dream"}</Field><Field label="Original Dream"><p className="whitespace-pre-wrap text-[15px] leading-7 text-slate-700">{submission.dream_description}</p></Field></dl></Section>
          <Section title="Details"><dl className="grid gap-5 sm:grid-cols-2"><Field label="Symbols">{submission.symbols.join(", ") || "None"}</Field><Field label="Emotions">{submission.emotions.join(", ") || "None"}</Field><Field label="Custom Symbols">{submission.custom_symbols.join(", ") || "None"}</Field><Field label="Recurrence">{submission.recurrence || "Not provided"}</Field><Field label="Consent">{submission.consent ? "Yes" : "No"}</Field><Field label="Contact Permission">{submission.contact_permission === null ? "Not provided" : submission.contact_permission ? "Yes" : "No"}</Field></dl></Section>
          <form action={saveDreamSubmission}>
            <input type="hidden" name="id" value={submission.id} />
            <Section title="Internal Review">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Status<select name="status" defaultValue={submission.status} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2">{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
                <label className="block text-sm font-medium">Payment Status<select name="paymentStatus" defaultValue={submission.payment_status} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2">{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
                <label className="block text-sm font-medium sm:col-span-2">Response / interpretation draft<textarea name="adminResponse" rows="10" maxLength="30000" defaultValue={submission.admin_response || ""} placeholder="Write the thoughtful response you want to review or publish." className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 leading-7" /><span className="mt-1 block text-xs font-normal text-slate-500">Saved privately with this submission. It is not public until you deliberately publish through the existing workflow.</span></label>
                <label className="block text-sm font-medium sm:col-span-2">Internal Notes<textarea name="notes" rows="5" maxLength="10000" defaultValue={submission.notes || ""} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
                <label className="block text-sm font-medium sm:col-span-2">Interpretation URL<input name="interpretationUrl" type="url" defaultValue={submission.interpretation_url || ""} placeholder="https://…" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
              </div>
              <dl className="mt-6 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-2"><Field label="Published At">{dateTime(submission.published_at)}</Field><Field label="Publication Email Sent">{dateTime(submission.email_sent_at)}</Field><Field label="Direct Reply Sent">{dateTime(submission.reply_sent_at)}</Field><Field label="Reply Email ID">{submission.reply_email_id || "—"}</Field></dl>
              <div className="mt-6 flex flex-wrap items-center gap-3"><button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700">Save Changes</button><SendReplyButton action={sendDreamSubmissionReply} recipient={submission.email} sent={Boolean(submission.reply_sent_at)} /></div>
              <p className="mt-3 text-xs leading-5 text-slate-500">Send Reply saves this response first, then emails it only to the stored recipient address. You will be asked to confirm the address before sending.</p>
            </Section>
          </form>
        </div>

        <aside><section className="sticky top-6 rounded-xl border border-slate-200 bg-white p-5"><h2 className="text-lg font-semibold">⚡ Actions</h2><div className="mt-4 grid gap-3"><StatusAction id={submission.id} status="Reviewed">Mark Reviewed</StatusAction><form action={publishDreamInterpretation}><input type="hidden" name="id" value={submission.id} /><button disabled={isPremium} className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300">Publish Interpretation</button></form><StatusAction id={submission.id} status="Rejected" tone="danger">Reject Submission</StatusAction></div>{isPremium && <p className="mt-4 text-xs leading-relaxed text-slate-500">Personal interpretations remain private and cannot use the public publishing action.</p>}</section></aside>
      </div>
    </>
  );
}
