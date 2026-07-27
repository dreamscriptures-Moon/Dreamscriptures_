import "server-only";

function positiveInteger(value, fallback) {
  const parsed = Number(value ?? fallback);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) throw new Error("Payment amount configuration is invalid.");
  return parsed;
}

export function getPaymentConfig() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const paystackApiBaseUrl = process.env.PAYSTACK_API_BASE_URL;
  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
  const paymentLinkSecret = process.env.PAYMENT_LINK_SECRET;
  if (!siteUrl || !paystackApiBaseUrl || !paystackSecretKey || !paymentLinkSecret) {
    throw new Error("Payment environment variables are not fully configured.");
  }

  return {
    siteUrl: new URL(siteUrl).origin,
    paystackApiBaseUrl: new URL(paystackApiBaseUrl).origin,
    paystackSecretKey,
    paystackWebhookSecret: process.env.PAYSTACK_WEBHOOK_SECRET || paystackSecretKey,
    paymentLinkSecret,
    currency: (process.env.PAYSTACK_CURRENCY || "USD").toUpperCase(),
    repeatCommunityAmount: positiveInteger(process.env.COMMUNITY_REPEAT_PRICE_SUBUNIT, 99),
    personalAmount: positiveInteger(process.env.PERSONAL_INTERPRETATION_PRICE_SUBUNIT, 599),
  };
}
