import { NextResponse } from "next/server";
import { getPaymentConfig } from "@/lib/payments/config";

export function GET(request) {
  const reference = new URL(request.url).searchParams.get("reference") || "";
  const statusUrl = new URL("/submit-dream/payment-status", getPaymentConfig().siteUrl);
  if (reference) statusUrl.searchParams.set("reference", reference);
  return NextResponse.redirect(statusUrl);
}
