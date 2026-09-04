import "server-only";
import { Resend } from "resend";
const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

function buildContactEmail(contact) {
  const rows = [["Visitor name", contact.name], ["Visitor email", contact.email], ["Contact category", contact.category], ["Message", contact.message]];
  return `<!doctype html><html lang="en"><body style="margin:0;background:#f7f4ee;color:#2a2a2a;font-family:Arial,sans-serif;"><div style="max-width:680px;margin:0 auto;padding:32px 16px;"><div style="overflow:hidden;border:1px solid #e1dcd5;border-radius:20px;background:#ffffff;"><div style="padding:28px 32px;background:#1a1a1a;color:#ffffff;"><div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8c7a0;">DreamScriptures</div><h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:normal;">Contact form submission</h1></div><div style="padding:12px 32px 28px;">${rows.map(([label, value]) => `<section style="padding:20px 0;border-bottom:1px solid #eee9e2;"><h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;font-weight:normal;color:#8f743c;">${escapeHtml(label)}</h2><div style="font-size:15px;line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;">${escapeHtml(value)}</div></section>`).join("")}</div></div></div></body></html>`;
}

export async function deliverContactMessage(contact) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "dreamscriptures@gmail.com";
  if (!resendApiKey || !from) throw new Error("Resend environment variables are not configured.");
  const result = await new Resend(resendApiKey).emails.send({ from, to, replyTo: contact.email, subject: `[DreamScriptures Contact] ${contact.category}`, html: buildContactEmail(contact) });
  if (result.error) throw result.error;
  return result.data;
}
