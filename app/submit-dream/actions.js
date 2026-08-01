"use server";

import { submitDream } from "@/lib/dreamSubmissions";

export async function submitDreamAction(_previousState, formData) {
  const invocationId = crypto.randomUUID();
  console.info("Dream submission server action started:", { invocationId });

  try {
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
      submissionType: formData.get("submissionType"),
    });

    if (!result.ok) {
      console.info("Dream submission server action returning error:", {
        invocationId,
        storageFailed: Boolean(result.storageFailed),
        deliveryFailed: Boolean(result.deliveryFailed),
        failureStage: result.failureStage || null,
        validationFields: Object.keys(result.errors || {}),
      });
      return {
        status: "error",
        message: result.failureStage?.startsWith("initializing_")
          ? "We couldn't start the secure payment right now. Your dream has not been submitted or charged. Please try again in a moment."
          : result.storageFailed
          ? "We couldn't save your dream right now. Please try again in a moment."
          : result.deliveryFailed
            ? "We couldn't send your dream right now. Please try again in a moment."
            : "Please check the highlighted fields and try again.",
        errors: result.errors,
      };
    }

    if (result.paymentRequired) {
      console.info("Dream submission server action returning payment details:", {
        invocationId,
      });
      return {
        status: "payment_required",
        message: "Payment is required to continue.",
        authorizationUrl: result.authorizationUrl,
        paymentKind: result.paymentKind,
        errors: {},
      };
    }

    console.info("Dream submission server action returning success:", {
      invocationId,
    });
    return {
      status: "success",
      submissionType: result.submission?.submissionType || "Community",
      message: "Your dream has been received.",
      errors: {},
    };
  } catch (error) {
    console.error("Dream submission server action threw unexpectedly:", {
      invocationId,
      errorName: error?.name || "Error",
      errorMessage: error?.message || String(error),
      digest: error?.digest,
    });
    throw error;
  }
}
