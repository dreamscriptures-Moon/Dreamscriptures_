import { NextResponse } from "next/server";
import { initializePersonalPayment, verifyPersonalPaymentToken } from "@/lib/payments/intents";
import { getDreamSubmission } from "@/lib/repositories/dreamSubmissions";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(request) {
  const url = new URL(request.url);
  const submissionId = url.searchParams.get("submission") || "";
  const token = url.searchParams.get("token");
  if (!UUID_PATTERN.test(submissionId) || !token) {
    return NextResponse.json({ error: "Invalid payment link." }, { status: 403 });
  }

  const submission = await getDreamSubmission(submissionId);
  if (!submission || !verifyPersonalPaymentToken(submission, token)) {
    return NextResponse.json({ error: "Invalid payment link." }, { status: 403 });
  }
  if (submission.submission_type === "Personal" && submission.payment_status === "Paid") {
    return NextResponse.redirect(new URL("/submit-dream/payment-status?already_paid=1", request.url));
  }

  try {
    const payment = await initializePersonalPayment(submission);
    return NextResponse.redirect(payment.authorizationUrl);
  } catch (error) {
    console.error("Personal payment initialization failed:", error);
    return NextResponse.redirect(new URL("/submit-dream/payment-status?error=initialization", request.url));
  }
}
