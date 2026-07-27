import "server-only";

import { supabaseServer } from "@/lib/supabase/server";

const columns = "id,reference,kind,email,amount,currency,status,submission_payload,submission_id,authorization_url,verified_at,fulfilled_at,created_at";

export async function createPaymentIntent(intent) {
  const records = await supabaseServer.request("payment_intents", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      reference: intent.reference,
      kind: intent.kind,
      email: intent.email,
      amount: intent.amount,
      currency: intent.currency,
      status: "Pending",
      submission_payload: intent.submissionPayload || null,
      submission_id: intent.submissionId || null,
    }),
  });
  return records?.[0];
}

export async function getPaymentIntent(reference) {
  const params = new URLSearchParams({ select: columns, reference: `eq.${reference}`, limit: "1" });
  const records = await supabaseServer.request(`payment_intents?${params}`);
  return records?.[0] || null;
}

export async function updatePaymentIntent(reference, changes) {
  const params = new URLSearchParams({ reference: `eq.${reference}`, select: columns });
  const records = await supabaseServer.request(`payment_intents?${params}`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(changes),
  });
  return records?.[0] || null;
}
