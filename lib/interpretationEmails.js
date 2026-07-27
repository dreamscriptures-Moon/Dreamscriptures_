import "server-only";

import { Resend } from "resend";
import { getPaymentConfig } from "@/lib/payments/config";
import { createPersonalPaymentToken } from "@/lib/payments/intents";

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function buildCommunityInterpretationEmail(submission) {
  const firstName = submission.name.trim().split(/\s+/)[0];
  const paymentUrl = new URL("/api/payments/personal", getPaymentConfig().siteUrl);
  paymentUrl.searchParams.set("submission", submission.id);
  paymentUrl.searchParams.set("token", createPersonalPaymentToken(submission));

  return `
    <!doctype html><html lang="en"><body style="margin:0;background:#f7f4ee;color:#2a2a2a;font-family:Arial,sans-serif;">
      <div style="max-width:620px;margin:0 auto;padding:32px 16px;"><div style="overflow:hidden;border:1px solid #e1dcd5;border-radius:20px;background:#ffffff;">
        <div style="padding:28px 32px;background:#1a1a1a;color:#ffffff;"><div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8c7a0;">DreamScriptures</div><h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:normal;">Your interpretation is ready</h1></div>
        <div style="padding:28px 32px;font-size:15px;line-height:1.7;color:#3a3a3a;">
          <p style="margin:0 0 18px;">Hi ${escapeHtml(firstName)},</p>
          <p style="margin:0 0 22px;">Your dream helped inspire a new DreamScriptures interpretation.</p>
          <p style="margin:0 0 28px;"><a href="${escapeHtml(submission.interpretation_url)}" style="display:inline-block;border-radius:999px;background:#1a1a1a;color:#ffffff;padding:12px 20px;text-decoration:none;font-weight:bold;">Read the interpretation</a></p>
          <section style="border-top:1px solid #eee9e2;padding-top:26px;">
            <h2 style="margin:0 0 12px;font-family:Georgia,serif;font-size:24px;font-weight:normal;">Want a Personal Dream Interpretation?</h2>
            <p style="margin:0 0 14px;">Your published interpretation is written to help many people who share similar dreams.</p>
            <p style="margin:0 0 14px;">If you would like a much deeper interpretation written specifically for <strong>YOUR</strong> dream, you can request a Personal Dream Interpretation.</p>
            <p style="margin:0 0 8px;">Includes:</p>
            <div style="margin:0 0 18px;line-height:1.9;">• Psychological Perspective<br>• Symbolic Perspective<br>• Spiritual Perspective<br>• Biblical Perspective (when appropriate)<br>• Reflection Questions<br>• Practical Action Steps</div>
            <p style="margin:0 0 16px;"><strong>Delivery:</strong><br>3–5 business days</p>
            <p style="margin:0 0 16px;"><strong>Price: $5.99</strong></p>
            <a href="${escapeHtml(paymentUrl.toString())}" style="display:inline-block;border-radius:999px;background:#1a1a1a;color:#ffffff;padding:12px 20px;text-decoration:none;font-weight:bold;">Request Personal Dream Interpretation</a>
          </section>
        </div>
      </div></div>
    </body></html>`;
}

export async function sendCommunityInterpretationEmail(submission) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!resendApiKey || !from) throw new Error("Resend environment variables are not configured.");
  const result = await new Resend(resendApiKey).emails.send({ from, to: submission.email, subject: "Your DreamScriptures interpretation is ready", html: buildCommunityInterpretationEmail(submission) });
  if (result.error) throw result.error;
  return result.data;
}
