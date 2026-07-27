import { NextResponse } from "next/server";
import { fulfillSuccessfulPayment } from "@/lib/payments/fulfillment";
import { verifyPaystackWebhook } from "@/lib/payments/paystack";

export async function POST(request) {
  const rawBody = await request.text();
  if (!verifyPaystackWebhook(rawBody, request.headers.get("x-paystack-signature"))) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (event.event !== "charge.success") return NextResponse.json({ received: true });

  try {
    await fulfillSuccessfulPayment(event.data);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Paystack webhook fulfillment failed:", error);
    return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
  }
}
