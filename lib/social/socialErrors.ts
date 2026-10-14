type ErrorShape = {
  message?: string;
  code?: string;
};

export function socialErrorCode(error: unknown): string {
  if (error && typeof error === "object" && "code" in error) {
    const code = (error as ErrorShape).code;

    if (typeof code === "string") {
      return code;
    }
  }

  return "";
}

export function socialErrorText(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (error && typeof error === "object" && "message" in error) {
    const message = (error as ErrorShape).message;

    if (typeof message === "string") {
      return message;
    }
  }

  return "";
}

/**
 * Maps database and auth failures to a short message. Callers pass a
 * fallback that already says what failed ("Couldn't follow this account.").
 */
export function messageForSocialError(error: unknown, fallback: string): string {
  const raw = socialErrorText(error);

  if (/rate limit/i.test(raw)) {
    if (/comment/i.test(raw)) {
      return "You've commented a lot in the last hour. Try again later.";
    }

    if (/message/i.test(raw)) {
      return "You've sent a lot of messages in the last hour. Try again later.";
    }

    return "You're doing that too often. Try again later.";
  }

  if (/follows_no_self|can't follow yourself|cannot follow yourself/i.test(raw)) {
    return "You can't follow yourself.";
  }

  if (/comments_body_len/i.test(raw)) {
    return "Comments can be up to 2,000 characters.";
  }

  if (/messages_body_len/i.test(raw)) {
    return "Messages can be up to 2,000 characters.";
  }

  if (/reports_reason_len/i.test(raw)) {
    return "Reasons can be up to 1,000 characters.";
  }

  if (/reports_reporter_target_key/i.test(raw)) {
    return "You've already reported this.";
  }

  if (/jwt|not authenticated|auth session missing|invalid claim/i.test(raw)) {
    return "Log in to continue.";
  }

  return fallback;
}
