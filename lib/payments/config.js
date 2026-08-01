import "server-only";

function positiveInteger(value, fallback) {
  const parsed = Number(value ?? fallback);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) throw new Error("Payment amount configuration is invalid.");
  return parsed;
}

export function getPaymentConfig() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const paystackApiBaseUrl = process.env.PAYSTACK_API_BASE_URL || "https://api.paystack.co";
  // Keep the legacy misspelled key as a temporary fallback so existing deployments
  // do not break while their environment variable is corrected.
  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY || process.env.PAYSTACK_SECRET_KE;
  const paymentLinkSecret = process.env.PAYMENT_LINK_SECRET;
  const missing = [
    !siteUrl && "NEXT_PUBLIC_SITE_URL",
    !paystackApiBaseUrl && "PAYSTACK_API_BASE_URL",
    !paystackSecretKey && "PAYSTACK_SECRET_KEY",
    !paymentLinkSecret && "PAYMENT_LINK_SECRET",
  ].filter(Boolean);
  if (missing.length) {
    throw new Error(`Payment environment variables are missing: ${missing.join(", ")}.`);
  }

  return {
    siteUrl: new URL(siteUrl).origin,
    paystackApiBaseUrl: new URL(paystackApiBaseUrl).origin,
    paystackSecretKey,
    // Paystack signs webhook events with the account secret key.
    paystackWebhookSecret: paystackSecretKey,
    paymentLinkSecret,
    currency: (process.env.PAYSTACK_CURRENCY || "USD").toUpperCase(),
    repeatCommunityAmount: positiveInteger(process.env.COMMUNITY_REPEAT_PRICE_SUBUNIT, 99),
    personalAmount: positiveInteger(process.env.PERSONAL_INTERPRETATION_PRICE_SUBUNIT, 599),
  };
}
