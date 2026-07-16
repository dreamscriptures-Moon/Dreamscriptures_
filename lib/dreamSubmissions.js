import "server-only";

import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function cleanList(values, maxItems = 20) {
  return [...new Set(values.map((value) => cleanText(value, 80)).filter(Boolean))]
    .slice(0, maxItems);
}

export function validateDreamSubmission(input = {}) {
  const submission = {
    dreamDescription: cleanText(input.dreamDescription, 10000),
    dreamTitle: cleanText(input.dreamTitle, 160),
    name: cleanText(input.name, 120),
    email: cleanText(input.email, 254),
    emotions: cleanList(input.emotions || []),
    symbols: cleanList(input.symbols || []),
    customSymbols: cleanList(
      String(input.customSymbols || "").split(","),
      12
    ),
    recurrence: cleanText(input.recurrence, 40),
    contactPermission: cleanText(input.contactPermission, 10),
  };

  const errors = {};

  if (!submission.dreamDescription) {
    errors.dreamDescription = "Please describe your dream before submitting.";
  }

  if (!submission.email) {
    errors.email = "Please enter your email address so we can contact you about your dream.";
  } else if (!emailPattern.test(submission.email)) {
    errors.email = "Please enter a valid email address.";
  }

  return { submission, errors };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function displayValue(value, fallback = "Not provided") {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : fallback;
  }

  return value || fallback;
}

function buildSubmissionEmail(submission) {
  const rows = [
    ["Dream Title", displayValue(submission.dreamTitle, "Untitled dream")],
    ["Dream Description", submission.dreamDescription],
    ["Name", displayValue(submission.name)],
    ["Email", displayValue(submission.email)],
    ["Selected Emotions", displayValue(submission.emotions, "None selected")],
    ["Selected Symbols", displayValue(submission.symbols, "None selected")],
    ["Custom Symbols", displayValue(submission.customSymbols, "None provided")],
    ["Recurring Dream", displayValue(submission.recurrence)],
    ["Contact Permission", displayValue(submission.contactPermission)],
    ["Submission Time", submission.submittedAt],
  ];

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f7f4ee;color:#2a2a2a;font-family:Arial,sans-serif;">
        <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
          <div style="overflow:hidden;border:1px solid #e1dcd5;border-radius:20px;background:#ffffff;">
            <div style="padding:28px 32px;background:#1a1a1a;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8c7a0;">DreamScriptures</div>
              <h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:normal;">New Dream Submission</h1>
            </div>
            <div style="padding:12px 32px 28px;">
              ${rows.map(([label, value]) => `
                <section style="padding:20px 0;border-bottom:1px solid #eee9e2;">
                  <h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;font-weight:normal;color:#8f743c;">${escapeHtml(label)}</h2>
                  <div style="font-size:15px;line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;">${escapeHtml(value)}</div>
                </section>
              `).join("")}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function submitDream(input) {
  const { submission, errors } = validateDreamSubmission(input);

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const completedSubmission = {
    ...submission,
    submittedAt: new Date().toISOString(),
  };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "DreamScriptures <onboarding@resend.dev>",
      to: "dreamscriptures@gmail.com",
      subject: "New Dream Submission",
      html: buildSubmissionEmail(completedSubmission),
    });

    if (error) {
      throw new Error(error.message || "Resend rejected the email request.");
    }
  } catch (error) {
    console.error("Failed to email dream submission:", error);
    return { ok: false, errors: {}, deliveryFailed: true };
  }

  return { ok: true, submission: completedSubmission };
}
