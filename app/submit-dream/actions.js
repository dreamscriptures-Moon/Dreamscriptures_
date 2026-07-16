"use server";

import { submitDream } from "@/lib/dreamSubmissions";

export async function submitDreamAction(_previousState, formData) {
  const result = await submitDream({
    dreamDescription: formData.get("dreamDescription"),
    dreamTitle: formData.get("dreamTitle"),
    name: formData.get("name"),
    email: formData.get("email"),
    emotions: formData.getAll("emotions"),
    symbols: formData.getAll("symbols"),
    customSymbols: formData.get("customSymbols"),
    recurrence: formData.get("recurrence"),
    contactPermission: formData.get("contactPermission"),
  });

  if (!result.ok) {
    return {
      status: "error",
      message: result.deliveryFailed
        ? "We couldn't send your dream right now. Please try again in a moment."
        : "Please check the highlighted fields and try again.",
      errors: result.errors,
    };
  }

  return {
    status: "success",
    message: "Your dream has been shared. Thank you for trusting us with it.",
    errors: {},
  };
}
