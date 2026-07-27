import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { getPaymentConfig } from "@/lib/payments/config";
import { initializePaystackTransaction } from "@/lib/payments/paystack";
import { createPaymentIntent, updatePaymentIntent } from "@/lib/repositories/paymentIntents";

function newReference(prefix) {
  return `${prefix}-${Date.now()}-${randomBytes(8).toString("hex")}`;
}

async function createAndInitialize(intent) {
  await createPaymentIntent(intent);
  const transaction = await initializePaystackTransaction({
    email: intent.email,
    amount: intent.amount,
    currency: intent.currency,
    reference: intent.reference,
    callbackPath: "/payments/paystack/callback",
    metadata: { payment_kind: intent.kind },
  });
  await updatePaymentIntent(intent.reference, { authorization_url: transaction.authorization_url });
  return { reference: intent.reference, authorizationUrl: transaction.authorization_url };
}

export async function initializeRepeatCommunityPayment(submission) {
  const config = getPaymentConfig();
  return createAndInitialize({
    reference: newReference("DS-COMMUNITY"),
    kind: "RepeatCommunity",
    email: submission.email,
    amount: config.repeatCommunityAmount,
    currency: config.currency,
    submissionPayload: submission,
  });
}

export async function initializePersonalPayment(submission) {
  const config = getPaymentConfig();
  return createAndInitialize({
    reference: newReference("DS-PERSONAL"),
    kind: "Personal",
    email: submission.email,
    amount: config.personalAmount,
    currency: config.currency,
    submissionId: submission.id,
  });
}

export function createPersonalPaymentToken(submission) {
  return createHmac("sha256", getPaymentConfig().paymentLinkSecret)
    .update(`${submission.id}:${submission.email.toLowerCase()}`)
    .digest("hex");
}

export function verifyPersonalPaymentToken(submission, token) {
  const expected = createPersonalPaymentToken(submission);
  return typeof token === "string" && token.length === expected.length && timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
