"use server";
import { deliverContactMessage } from "@/lib/contactMessages";
import { validateContactMessage } from "@/lib/contactValidation";

export async function sendContactMessageAction(_previousState, formData) {
  const { message, errors, isBot } = validateContactMessage({ name: formData.get("name"), email: formData.get("email"), category: formData.get("category"), message: formData.get("message"), website: formData.get("website") });
  if (isBot) return { status: "success", errors: {}, values: {} };
  if (Object.keys(errors).length) return { status: "error", message: "Please check the highlighted fields and try again.", errors, values: message };
  try {
    await deliverContactMessage(message);
    return { status: "success", errors: {}, values: {} };
  } catch (error) {
    console.error("Contact form email delivery failed:", { errorName: error?.name || "Error", errorMessage: error?.message || String(error) });
    return { status: "error", message: "We couldn’t send your message right now. Please try again in a moment.", errors: {}, values: message };
  }
}
