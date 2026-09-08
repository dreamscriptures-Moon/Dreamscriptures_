"use server";

import {
  SupabaseRequestError,
  supabaseServer,
} from "@/lib/supabase/server";

const RATINGS = new Set([1, 2, 3, 4, 5]);
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function submitDreamCompassFeedback(input) {
  const rating = Number(input?.rating);
  const feedbackToken = String(input?.feedbackToken || "").trim();
  const comment = String(input?.comment || "").trim();
  const resultSlug = String(input?.resultSlug || "").trim();

  if (!RATINGS.has(rating)) {
    return { status: "error", message: "Choose a rating before submitting." };
  }

  if (!UUID_PATTERN.test(feedbackToken)) {
    return { status: "error", message: "Please refresh the page and try again." };
  }

  if (comment.length > 1000) {
    return { status: "error", message: "Keep your feedback to 1,000 characters or fewer." };
  }

  if (resultSlug && !SLUG_PATTERN.test(resultSlug)) {
    return { status: "error", message: "Please refresh the page and try again." };
  }

  try {
    await supabaseServer.request("dream_compass_feedback", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        feedback_token: feedbackToken,
        rating,
        comment: comment || null,
        result_slug: resultSlug || null,
      }),
    });

    return { status: "success" };
  } catch (error) {
    if (error instanceof SupabaseRequestError && error.status === 409) {
      return { status: "success" };
    }

    console.error("Dream Compass feedback submission failed:", {
      errorName: error?.name || "Error",
      errorMessage: error?.message || String(error),
    });

    return {
      status: "error",
      message: "We couldn’t save your feedback right now. Please try again.",
    };
  }
}
