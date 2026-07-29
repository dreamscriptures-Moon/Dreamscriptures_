import { NextResponse } from "next/server";
import { getPaymentConfig } from "@/lib/payments/config";
import { fulfillSuccessfulPayment } from "@/lib/payments/fulfillment";
import { verifyPaystackTransaction } from "@/lib/payments/paystack";

export async function GET(request) {
  const reference = new URL(request.url).searchParams.get("reference") || "";
  const statusUrl = new URL("/submit-dream/payment-status", getPaymentConfig().siteUrl);
  if (reference) {
    statusUrl.searchParams.set("reference", reference);
    try {
      const payment = await verifyPaystackTransaction(reference);
      await fulfillSuccessfulPayment(payment);
    } catch (error) {
      console.error("Paystack callback verification failed:", error);
      statusUrl.searchParams.set("error", "verification");
    }
  }
  return NextResponse.redirect(statusUrl);
}
