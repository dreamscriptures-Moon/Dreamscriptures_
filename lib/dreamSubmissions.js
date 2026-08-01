import "server-only";

import { randomBytes } from "node:crypto";
import { Resend } from "resend";
import { initializePersonalSubmissionPayment, initializeRepeatCommunityPayment } from "@/lib/payments/intents";
import { countCommunitySubmissionsByEmail, createDreamSubmission } from "@/lib/repositories/dreamSubmissions";

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
    dreamDescription: cleanText(input.dreamDescription, 3001),
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
    consent: input.consent === true || input.consent === "on",
    submissionType: input.submissionType === "Personal" ? "Personal" : "Community",
  };

  const errors = {};

  if (submission.dreamDescription.length < 100) {
    errors.dreamDescription =
      "Please provide a little more detail so we can better understand your dream.";
  } else if (submission.dreamDescription.length > 3000) {
    errors.dreamDescription =
      "Dream descriptions are limited to 3000 characters.";
  }

  if (!submission.name) {
    errors.name = "Please enter your name.";
  }

  if (!submission.email) {
    errors.email =
      "Please enter your email address so we can contact you about your dream.";
  } else if (!emailPattern.test(submission.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!submission.consent) {
    errors.consent = "Please confirm your consent before submitting your dream.";
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
    ["Reference ID", submission.referenceId],
    ["Dream Title", displayValue(submission.dreamTitle, "Untitled dream")],
    ["Dream Description", submission.dreamDescription],
    ["Name", displayValue(submission.name)],
    ["Email", displayValue(submission.email)],
    ["Selected Emotions", displayValue(submission.emotions, "None selected")],
    ["Selected Symbols", displayValue(submission.symbols, "None selected")],
    ["Custom Symbols", displayValue(submission.customSymbols, "None provided")],
    ["Recurring Dream", displayValue(submission.recurrence)],
    ["Contact Permission", displayValue(submission.contactPermission)],
    ["Submission Type", submission.submissionType],
    ["Consent", submission.consent ? "Yes" : "No"],
    ["Submission Time", submission.createdAt],
  ];

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f7f4ee;color:#2a2a2a;font-family:Arial,sans-serif;">
        <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
          <div style="overflow:hidden;border:1px solid #e1dcd5;border-radius:20px;background:#ffffff;">
            <div style="padding:28px 32px;background:#1a1a1a;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8c7a0;">
                DreamScriptures
              </div>
              <h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:normal;">
                New Dream Submission
              </h1>
            </div>

            <div style="padding:12px 32px 28px;">
              ${rows
                .map(
                  ([label, value]) => `
                <section style="padding:20px 0;border-bottom:1px solid #eee9e2;">
                  <h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:18px;font-weight:normal;color:#8f743c;">
                    ${escapeHtml(label)}
                  </h2>

                  <div style="font-size:15px;line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;">
                    ${escapeHtml(value)}
                  </div>
                </section>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function buildConfirmationEmail(submission) {
  const firstName = submission.name.split(/\s+/)[0];
  const premium = submission.submissionType === "Personal";
  const responseTime = premium ? "2–8 hours" : "24–72 hours";
  const heading = premium ? "Thank you for choosing DreamScriptures Premium" : "Your dream has been received";
  const queueCopy = premium
    ? "Your dream is now in our VIP Priority Queue for a private, personalized interpretation."
    : "Your dream is now in our Community Interpretation queue.";
  const benefits = premium
    ? `<p style="margin:0 0 10px;"><strong>Your Premium interpretation includes:</strong></p><ul style="margin:0 0 18px;padding-left:22px;"><li>Deeper symbolic and spiritual analysis</li><li>Rich biblical context where appropriate</li><li>Practical life application</li><li>One follow-up clarification question</li><li>A downloadable PDF and priority email delivery</li></ul>`
    : "";

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f7f4ee;color:#2a2a2a;font-family:Arial,sans-serif;">
        <div style="max-width:620px;margin:0 auto;padding:32px 16px;">
          <div style="overflow:hidden;border:1px solid #e1dcd5;border-radius:20px;background:#ffffff;">
            <div style="padding:28px 32px;background:#1a1a1a;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8c7a0;">DreamScriptures</div>
              <h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:30px;font-weight:normal;">${heading}</h1>
            </div>
            <div style="padding:28px 32px;font-size:15px;line-height:1.7;color:#3a3a3a;">
              <p style="margin:0 0 18px;">Hi ${escapeHtml(firstName)},</p>
              <p style="margin:0 0 18px;">Thank you for sharing your dream with DreamScriptures.</p>
              <p style="margin:0 0 18px;">${queueCopy}</p>
              <p style="margin:0 0 18px;">Your reference ID is <strong>${escapeHtml(submission.referenceId)}</strong>.</p>
              <p style="margin:0 0 18px;"><strong>Estimated response: ${responseTime}</strong></p>
              ${benefits}
              <p style="margin:0 0 18px;">We'll email you as soon as your interpretation is ready.</p>
              <p style="margin:0 0 10px;">In the meantime you may enjoy:</p>
              <ul style="margin:0 0 18px;padding-left:22px;"><li>Dream Dictionary</li><li>Dream Guides</li><li>Dream of the Day</li></ul>
              <p style="margin:0 0 18px;">Visit:<br><a href="https://dreamscriptures.com" style="color:#8f743c;">https://dreamscriptures.com</a></p>
              <p style="margin:0 0 18px;">Thank you for trusting DreamScriptures.</p>
              <p style="margin:0;">Warmly,<br><br>DreamScriptures</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateReferenceId() {
  const year = new Date().getUTCFullYear();
  const uniquePart = randomBytes(5).toString("hex").toUpperCase();
  return `DS-${year}-${uniquePart}`;
}

function getEmailError(result) {
  if (result.status === "rejected") {
    return result.reason;
  }

  return result.value.error || null;
}

export async function deliverDreamSubmissionEmails(completedSubmission) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!resendApiKey || !from) {
      throw new Error("Resend environment variables are not configured.");
    }

    const resend = new Resend(resendApiKey);
    const [adminEmail, confirmationEmail] = await Promise.allSettled([
      resend.emails.send({
        from,
        to: "dreamscriptures@gmail.com",
        subject: "New Dream Submission",
        html: buildSubmissionEmail(completedSubmission),
      }),
      resend.emails.send({
        from,
        to: completedSubmission.email,
        subject: "We've received your dream",
        html: buildConfirmationEmail(completedSubmission),
      }),
    ]);

    const adminEmailError = getEmailError(adminEmail);
    const confirmationEmailError = getEmailError(confirmationEmail);

    if (adminEmailError || confirmationEmailError) {
      console.error("Dream submission email delivery failed after database save:", {
        adminEmailError,
        confirmationEmailError,
      });
    }
  } catch (error) {
    console.error(
      "Dream submission email setup failed after database save:",
      error
    );
  }
}

export async function persistDreamSubmission(completedSubmission) {
  const stored = await createDreamSubmission(completedSubmission);
  await deliverDreamSubmissionEmails(completedSubmission);
  return stored;
}

export async function submitDream(input) {
  const { submission, errors } = validateDreamSubmission(input);

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const completedSubmission = {
    ...submission,
    referenceId: generateReferenceId(),
    createdAt: new Date().toISOString(),
  };

  let processingStage = "checking_previous_submissions";

  try {
    if (submission.submissionType === "Personal") {
      processingStage = "initializing_personal_payment";
      const payment = await initializePersonalSubmissionPayment(completedSubmission);
      return { ok: true, paymentRequired: true, paymentKind: "Personal", ...payment };
    }

    const previousCommunitySubmissions = await countCommunitySubmissionsByEmail(submission.email);
    if (previousCommunitySubmissions > 0) {
      processingStage = "initializing_repeat_payment";
      const payment = await initializeRepeatCommunityPayment(completedSubmission);
      return { ok: true, paymentRequired: true, paymentKind: "RepeatCommunity", ...payment };
    }

    processingStage = "inserting_dream_submission";
    await persistDreamSubmission(completedSubmission);
  } catch (error) {
    console.error("Dream submission processing failed:", {
      stage: processingStage,
      referenceId: completedSubmission.referenceId,
      errorName: error?.name || "Error",
      errorMessage: error?.message || String(error),
      status: error?.status,
      details: error?.details,
      environment: {
        hasSupabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
        hasSupabaseServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
        hasPaystackApiBaseUrl: Boolean(process.env.PAYSTACK_API_BASE_URL),
        hasPaystackSecretKey: Boolean(process.env.PAYSTACK_SECRET_KEY),
        hasPaymentLinkSecret: Boolean(process.env.PAYMENT_LINK_SECRET),
        hasSiteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
        hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
        hasResendFromEmail: Boolean(process.env.RESEND_FROM_EMAIL),
      },
    });
    return {
      ok: false,
      errors: {},
      storageFailed: true,
      failureStage: processingStage,
    };
  }

  return {
    ok: true,
    submission: completedSubmission,
  };
}
