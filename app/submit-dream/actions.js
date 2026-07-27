"use server";

import { redirect } from "next/navigation";
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
    consent: formData.get("consent"),
    // Premium will be enabled here only after a verified checkout session exists.
    submissionType: "Community",
  });

  if (!result.ok) {
    return {
      status: "error",
      message: result.storageFailed
        ? "We couldn't save your dream right now. Please try again in a moment."
        : result.deliveryFailed
          ? "We couldn't send your dream right now. Please try again in a moment."
          : "Please check the highlighted fields and try again.",
      errors: result.errors,
    };
  }

  if (result.paymentRequired) redirect(result.authorizationUrl);

  return {
    status: "success",
    message: "Your dream has been shared. Thank you for trusting us with it.",
    errors: {},
  };
}
