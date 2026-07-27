import { NextResponse } from "next/server";
import { getPaymentIntent } from "@/lib/repositories/paymentIntents";

export async function GET(request) {
  const reference = new URL(request.url).searchParams.get("reference") || "";
  const intent = await getPaymentIntent(reference);
  if (!intent || intent.status === "Paid" || !intent.authorization_url) {
    return NextResponse.redirect(new URL("/submit-dream/payment-status?error=retry", request.url));
  }
  return NextResponse.redirect(intent.authorization_url);
}
