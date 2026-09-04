export const CONTACT_CATEGORIES = ["General question", "Technical issue", "Feedback", "Partnership / collaboration", "Other"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cleanText = (value, maxLength) => String(value || "").trim().slice(0, maxLength);

export function validateContactMessage(input = {}) {
  const message = {
    name: cleanText(input.name, 121),
    email: cleanText(input.email, 255).toLowerCase(),
    category: cleanText(input.category, 50),
    message: cleanText(input.message, 5001),
    website: cleanText(input.website, 200),
  };
  const errors = {};

  if (message.name.length < 2) errors.name = "Please enter your name.";
  else if (message.name.length > 120) errors.name = "Name is limited to 120 characters.";
  if (!message.email) errors.email = "Please enter your email address.";
  else if (message.email.length > 254 || !emailPattern.test(message.email)) errors.email = "Please enter a valid email address.";
  if (!CONTACT_CATEGORIES.includes(message.category)) errors.category = "Please choose what we can help with.";
  if (message.message.length < 20) errors.message = "Please enter a message of at least 20 characters.";
  else if (message.message.length > 5000) errors.message = "Messages are limited to 5000 characters.";

  return { message, errors, isBot: Boolean(message.website) };
}
