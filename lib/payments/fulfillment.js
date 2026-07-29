import "server-only";

import { persistDreamSubmission } from "@/lib/dreamSubmissions";
import { getDreamSubmission, getDreamSubmissionByPaymentReference, updateDreamSubmission } from "@/lib/repositories/dreamSubmissions";
import { getPaymentIntent, updatePaymentIntent } from "@/lib/repositories/paymentIntents";

export async function fulfillSuccessfulPayment(paymentData) {
  const reference = String(paymentData.reference || "");
  const intent = await getPaymentIntent(reference);
  if (!intent) throw new Error("Unknown payment reference.");
  if (intent.fulfilled_at) return intent;

  const paidEmail = String(paymentData.customer?.email || paymentData.email || "").toLowerCase();
  if (
    paymentData.status !== "success" ||
    Number(paymentData.amount) !== intent.amount ||
    String(paymentData.currency || "").toUpperCase() !== intent.currency ||
    paidEmail !== intent.email.toLowerCase()
  ) {
    throw new Error("Payment details do not match the stored intent.");
  }

  const verifiedAt = new Date().toISOString();
  await updatePaymentIntent(reference, { status: "Paid", verified_at: verifiedAt });

  if (intent.kind === "RepeatCommunity") {
    const existing = await getDreamSubmissionByPaymentReference(reference);
    if (!existing) {
      await persistDreamSubmission({
        ...intent.submission_payload,
        submissionType: "Community",
        paymentStatus: "Paid",
        paymentProvider: "Paystack",
        paymentReference: reference,
        paymentAmount: intent.amount,
        paymentCurrency: intent.currency,
        paymentVerifiedAt: verifiedAt,
        priority: "Community",
      });
    }
  } else if (intent.kind === "Personal") {
    if (intent.submission_payload) {
      const existing = await getDreamSubmissionByPaymentReference(reference);
      if (!existing) {
        await persistDreamSubmission({
          ...intent.submission_payload,
          submissionType: "Personal",
          paymentStatus: "Paid",
          paymentProvider: "Paystack",
          paymentReference: reference,
          paymentAmount: intent.amount,
          paymentCurrency: intent.currency,
          paymentVerifiedAt: verifiedAt,
          priority: "Premium",
        });
      }
    } else {
      const submission = await getDreamSubmission(intent.submission_id);
      if (!submission || submission.email.toLowerCase() !== intent.email.toLowerCase()) {
        throw new Error("Personal interpretation submission does not match the payment intent.");
      }
      if (!(submission.submission_type === "Personal" && submission.payment_status === "Paid")) {
        await updateDreamSubmission(submission.id, {
          submissionType: "Personal",
          paymentStatus: "Paid",
          paymentProvider: "Paystack",
          paymentReference: reference,
          paymentAmount: intent.amount,
          paymentCurrency: intent.currency,
          paymentVerifiedAt: verifiedAt,
          priority: "Premium",
        });
      }
    }
  } else {
    throw new Error("Unsupported payment intent kind.");
  }

  return updatePaymentIntent(reference, { fulfilled_at: new Date().toISOString() });
}
