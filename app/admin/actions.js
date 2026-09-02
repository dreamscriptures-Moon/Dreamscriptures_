"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  clearAdminSession,
  createAdminSession,
  requireAdmin,
  verifyAdminPassword,
} from "@/lib/adminAuth";
import { sendAdminReplyEmail, sendCommunityInterpretationEmail } from "@/lib/interpretationEmails";
import { getDreamSubmission, updateDreamSubmission } from "@/lib/repositories/dreamSubmissions";

export async function loginAdmin(_state, formData) {
  try {
    if (!verifyAdminPassword(formData.get("password"))) {
      return { error: "Incorrect password." };
    }
    await createAdminSession();
  } catch (error) {
    console.error("Admin login configuration error:", error);
    return { error: "Admin access is not configured." };
  }
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function saveDreamSubmission(formData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  const notes = String(formData.get("notes") || "").trim().slice(0, 10000);
  const interpretationUrl = String(formData.get("interpretationUrl") || "").trim().slice(0, 2048);
  const adminResponse = String(formData.get("adminResponse") || "").trim().slice(0, 30000);
  const paymentStatus = String(formData.get("paymentStatus") || "");

  if (interpretationUrl && !/^https?:\/\//i.test(interpretationUrl)) {
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=invalid-url`);
  }

  await updateDreamSubmission(id, { status, notes, interpretationUrl, paymentStatus, adminResponse });
  revalidatePath("/admin");
  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
  redirect(`/admin/submissions/${encodeURIComponent(id)}?saved=1`);
}

export async function setDreamSubmissionStatus(formData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  await updateDreamSubmission(id, { status });
  revalidatePath("/admin");
  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
  redirect(`/admin/submissions/${encodeURIComponent(id)}?saved=1`);
}

export async function sendDreamSubmissionReply(formData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const adminResponse = String(formData.get("adminResponse") || "").trim().slice(0, 30000);

  if (!adminResponse) {
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=missing-response`);
  }

  let submission = await getDreamSubmission(id);
  if (!submission) redirect("/admin/submissions");
  if (submission.reply_sent_at) {
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=reply-already-sent`);
  }

  submission = await updateDreamSubmission(id, { adminResponse });

  try {
    const email = await sendAdminReplyEmail(submission);
    await updateDreamSubmission(id, {
      replySentAt: new Date().toISOString(),
      replyEmailId: email?.id || null,
    });
  } catch (error) {
    console.error("Admin reply delivery failed:", error);
    revalidatePath(`/admin/submissions/${id}`);
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=reply-failed`);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
  redirect(`/admin/submissions/${encodeURIComponent(id)}?reply-sent=1`);
}

export async function publishDreamInterpretation(formData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const submission = await getDreamSubmission(id);
  if (!submission) redirect("/admin/submissions");
  if (submission.submission_type !== "Community") {
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=premium-private`);
  }
  if (!submission.interpretation_url) {
    redirect(`/admin/submissions/${encodeURIComponent(id)}?error=missing-url`);
  }

  const publishedAt = submission.published_at || new Date().toISOString();
  await updateDreamSubmission(id, { status: "Published", publishedAt });

  if (!submission.email_sent_at) {
    try {
      await sendCommunityInterpretationEmail(submission);
      await updateDreamSubmission(id, { emailSentAt: new Date().toISOString() });
    } catch (error) {
      console.error("Interpretation email delivery failed:", error);
      revalidatePath(`/admin/submissions/${id}`);
      redirect(`/admin/submissions/${encodeURIComponent(id)}?error=email-failed`);
    }
  }

  revalidatePath("/admin");
  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
  redirect(`/admin/submissions/${encodeURIComponent(id)}?published=1`);
}
