import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { getPaymentConfig } from "@/lib/payments/config";

export async function initializePaystackTransaction({ email, amount, currency, reference, callbackPath, metadata }) {
  const config = getPaymentConfig();
  const response = await fetch(new URL("/transaction/initialize", config.paystackApiBaseUrl), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.paystackSecretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      amount: String(amount),
      currency,
      reference,
      callback_url: new URL(callbackPath, config.siteUrl).toString(),
      metadata,
    }),
    cache: "no-store",
  });
  const result = await response.json();
  if (!response.ok || !result.status || !result.data?.authorization_url) {
    throw new Error(`Paystack initialization failed: ${result.message || response.status}`);
  }
  return result.data;
}

export async function verifyPaystackTransaction(reference) {
  const config = getPaymentConfig();
  const response = await fetch(
    new URL(`/transaction/verify/${encodeURIComponent(reference)}`, config.paystackApiBaseUrl),
    {
      headers: { Authorization: `Bearer ${config.paystackSecretKey}` },
      cache: "no-store",
    }
  );
  const result = await response.json();
  if (!response.ok || !result.status || !result.data) {
    throw new Error(`Paystack verification failed: ${result.message || response.status}`);
  }
  return result.data;
}

export function verifyPaystackWebhook(rawBody, signature) {
  if (!signature) return false;
  const expected = createHmac("sha512", getPaymentConfig().paystackWebhookSecret)
    .update(rawBody)
    .digest("hex");
  const provided = String(signature);
  return provided.length === expected.length && timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}
