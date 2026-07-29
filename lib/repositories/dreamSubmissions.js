import "server-only";

import { supabaseServer } from "@/lib/supabase/server";

const submissionColumns = [
  "id",
  "reference_id",
  "created_at",
  "name",
  "email",
  "email_normalized",
  "dream_title",
  "dream_description",
  "emotions",
  "symbols",
  "custom_symbols",
  "recurrence",
  "contact_permission",
  "consent",
  "status",
  "submission_type",
  "priority",
  "payment_status",
  "payment_provider",
  "payment_reference",
  "payment_amount",
  "payment_currency",
  "payment_verified_at",
  "interpretation_url",
  "notes",
  "published_at",
  "email_sent_at",
].join(",");

const allowedSortColumns = new Set([
  "created_at",
  "reference_id",
  "name",
  "dream_title",
  "status",
  "payment_status",
  "submission_type",
  "priority",
]);

const allowedStatuses = new Set(["Pending", "Reviewed", "Published", "Rejected"]);
const allowedPaymentStatuses = new Set(["Free", "Pending", "Paid", "Refunded"]);

function parseStoredList(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return String(value).split(",").map((item) => item.trim()).filter(Boolean);
  }
}

function normalizeSubmission(record) {
  if (!record) return null;
  return {
    ...record,
    emotions: parseStoredList(record.emotions),
    symbols: parseStoredList(record.symbols),
    custom_symbols: parseStoredList(record.custom_symbols),
  };
}

function buildListPath({ page = 1, pageSize = 20, status, search, sort = "priority", direction = "desc" } = {}) {
  const safePage = Math.max(1, Number(page) || 1);
  const safePageSize = Math.min(100, Math.max(1, Number(pageSize) || 20));
  const safeSort = allowedSortColumns.has(sort) ? sort : "priority";
  const safeDirection = direction === "asc" ? "asc" : "desc";
  const params = new URLSearchParams({
    select: submissionColumns,
    order: safeSort === "priority" ? `${safeSort}.${safeDirection},created_at.desc` : `${safeSort}.${safeDirection}`,
    offset: String((safePage - 1) * safePageSize),
    limit: String(safePageSize),
  });

  if (status && allowedStatuses.has(status)) params.set("status", `eq.${status}`);
  if (search) {
    const term = String(search).trim().replace(/[,*()]/g, " ").slice(0, 120);
    if (term) {
      params.set(
        "or",
        `(reference_id.ilike.*${term}*,name.ilike.*${term}*,email.ilike.*${term}*,dream_title.ilike.*${term}*)`
      );
    }
  }

  return `dream_submissions?${params}`;
}

function toDatabaseRecord(submission) {
  return {
    reference_id: submission.referenceId,
    created_at: submission.createdAt,
    name: submission.name,
    email: submission.email,
    email_normalized: submission.email.toLowerCase(),
    dream_title: submission.dreamTitle || null,
    dream_description: submission.dreamDescription,
    emotions: JSON.stringify(submission.emotions),
    symbols: JSON.stringify(submission.symbols),
    custom_symbols: JSON.stringify(submission.customSymbols),
    recurrence: submission.recurrence || null,
    contact_permission: submission.contactPermission
      ? submission.contactPermission === "Yes"
      : null,
    consent: submission.consent,
    status: "Pending",
    submission_type: submission.submissionType,
    payment_status: submission.paymentStatus || "Free",
    payment_provider: submission.paymentProvider || "Paystack",
    payment_reference: submission.paymentReference || null,
    payment_amount: submission.paymentAmount ?? 0,
    payment_currency: submission.paymentCurrency || null,
    payment_verified_at: submission.paymentVerifiedAt || null,
    priority: submission.priority || "Community",
    interpretation_url: null,
    notes: null,
    published_at: null,
    email_sent_at: null,
  };
}

export async function createDreamSubmission(submission) {
  const records = await supabaseServer.request("dream_submissions", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(toDatabaseRecord(submission)),
  });

  if (!Array.isArray(records) || !records[0]) {
    throw new Error("Supabase did not return the created dream submission.");
  }

  return records[0];
}

export async function listDreamSubmissions(options = {}) {
  const { data, count } = await supabaseServer.requestWithMetadata(
    buildListPath(options),
    { headers: { Prefer: "count=exact" } }
  );

  return {
    submissions: (data || []).map(normalizeSubmission),
    total: count || 0,
  };
}

export async function searchDreamSubmissions(search, options = {}) {
  return listDreamSubmissions({ ...options, search });
}

export async function countCommunitySubmissionsByEmail(email) {
  const params = new URLSearchParams({
    select: "id",
    email_normalized: `eq.${String(email).trim().toLowerCase()}`,
    submission_type: "eq.Community",
    limit: "1",
  });
  const result = await supabaseServer.requestWithMetadata(`dream_submissions?${params}`, {
    headers: { Prefer: "count=exact" },
  });
  return result.count || 0;
}

export async function getDreamSubmissionByPaymentReference(reference) {
  const params = new URLSearchParams({ select: submissionColumns, payment_reference: `eq.${reference}`, limit: "1" });
  const records = await supabaseServer.request(`dream_submissions?${params}`);
  return normalizeSubmission(records?.[0]);
}

export async function getDreamSubmission(id) {
  const params = new URLSearchParams({
    select: submissionColumns,
    id: `eq.${id}`,
    limit: "1",
  });
  const records = await supabaseServer.request(`dream_submissions?${params}`);
  return normalizeSubmission(records?.[0]);
}

export async function updateDreamSubmission(id, changes) {
  const update = {};
  if (changes.status !== undefined) {
    if (!allowedStatuses.has(changes.status)) throw new Error("Invalid submission status.");
    update.status = changes.status;
  }
  if (changes.notes !== undefined) update.notes = changes.notes || null;
  if (changes.interpretationUrl !== undefined) {
    update.interpretation_url = changes.interpretationUrl || null;
  }
  if (changes.paymentStatus !== undefined) {
    if (!allowedPaymentStatuses.has(changes.paymentStatus)) throw new Error("Invalid payment status.");
    update.payment_status = changes.paymentStatus;
  }
  if (changes.publishedAt !== undefined) update.published_at = changes.publishedAt;
  if (changes.emailSentAt !== undefined) update.email_sent_at = changes.emailSentAt;
  if (changes.submissionType !== undefined) update.submission_type = changes.submissionType;
  if (changes.priority !== undefined) update.priority = changes.priority;
  if (changes.paymentReference !== undefined) update.payment_reference = changes.paymentReference;
  if (changes.paymentAmount !== undefined) update.payment_amount = changes.paymentAmount;
  if (changes.paymentCurrency !== undefined) update.payment_currency = changes.paymentCurrency;
  if (changes.paymentProvider !== undefined) update.payment_provider = changes.paymentProvider;
  if (changes.paymentVerifiedAt !== undefined) update.payment_verified_at = changes.paymentVerifiedAt;

  const params = new URLSearchParams({ id: `eq.${id}`, select: submissionColumns });
  const records = await supabaseServer.request(`dream_submissions?${params}`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(update),
  });
  return normalizeSubmission(records?.[0]);
}

export async function getDreamSubmissionStats() {
  const now = new Date();
  const today = new Date(now);
  today.setUTCHours(0, 0, 0, 0);
  const week = new Date(today);
  week.setUTCDate(week.getUTCDate() - 6);

  async function count(filter = {}) {
    const params = new URLSearchParams({ select: "id", limit: "1" });
    Object.entries(filter).forEach(([key, value]) => params.set(key, value));
    const result = await supabaseServer.requestWithMetadata(
      `dream_submissions?${params}`,
      { method: "HEAD", headers: { Prefer: "count=exact" } }
    );
    return result.count || 0;
  }

  const [total, pending, reviewed, published, rejected, premium, community, todayCount, weekCount] =
    await Promise.all([
      count(),
      count({ status: "eq.Pending" }),
      count({ status: "eq.Reviewed" }),
      count({ status: "eq.Published" }),
      count({ status: "eq.Rejected" }),
      count({ priority: "eq.Premium" }),
      count({ submission_type: "eq.Community" }),
      count({ created_at: `gte.${today.toISOString()}` }),
      count({ created_at: `gte.${week.toISOString()}` }),
    ]);

  return { total, pending, reviewed, published, rejected, premium, community, today: todayCount, week: weekCount };
}
