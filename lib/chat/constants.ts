export const CHAT_MODEL = "openai/gpt-5.4-nano";

export const ASSISTANT_UNAVAILABLE_MESSAGE =
  "The assistant is unavailable right now. Please try again in a moment.";

export function friendlyChatError(message: string): string {
  const text = message.trim();

  if (
    !text ||
    text.length > 400 ||
    text.startsWith("{") ||
    text.startsWith("[") ||
    /\b429\b|rate limit/i.test(text)
  ) {
    return ASSISTANT_UNAVAILABLE_MESSAGE;
  }

  return text;
}

export const MAX_USER_MESSAGE_CHARS = 1000;
export const MAX_USER_MESSAGES = 12;
export const MAX_MESSAGES = 24;
export const MAX_REQUEST_BYTES = 100_000;
export const DAILY_MESSAGE_LIMIT = 30;
export const DAILY_LEAD_LIMIT = 8;

export const LIMIT_REACHED_MESSAGE =
  "You've reached today's limit of 30 messages. You can start again tomorrow, or browse consultants and ask one to contact you.";

export const CONVERSATION_LIMIT_MESSAGE =
  "This chat has reached its length limit. Start a new chat to keep going.";

export const MESSAGE_TOO_LONG = "Please keep each message under 1,000 characters.";

export const LEAD_LIMIT_MESSAGE =
  "You've sent several contact requests today. Please try again tomorrow, or use the contact page.";

export const CHAT_UNAVAILABLE_MESSAGE =
  "The assistant is temporarily unavailable. Please try again later, or browse the consultants directory.";
