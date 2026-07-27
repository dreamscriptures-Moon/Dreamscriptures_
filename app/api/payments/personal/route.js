import { NextResponse } from "next/server";
import { initializePersonalPayment, verifyPersonalPaymentToken } from "@/lib/payments/intents";
import { getDreamSubmission } from "@/lib/repositories/dreamSubmissions";

export async function GET(request) {
  const url = new URL(request.url);
  const submission = await getDreamSubmission(url.searchParams.get("submission") || "");
  if (!submission || !verifyPersonalPaymentToken(submission, url.searchParams.get("token"))) {
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
