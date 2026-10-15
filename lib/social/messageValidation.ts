import { messageForSocialError, socialErrorText } from "./socialErrors";

export const MESSAGE_BODY_MAX_LENGTH = 2000;

const KNOWN_MESSAGING_ERRORS = [
  "You can only message someone you follow or who follows you.",
  "Consultants can only message students who follow them or message them first.",
  "You can't message this account.",
  "You can't message yourself.",
  "This profile is unavailable.",
  "This conversation is unavailable.",
  "This message is unavailable.",
  "You can't report your own content.",
  "Messages can only be deleted.",
  "Direct messages have two participants.",
  "Only last_read_at can be updated.",
  "Log in to continue.",
] as const;

export function validateMessageBody(
  value: string
): { ok: true; body: string } | { ok: false; message: string } {
  const body = value.trim();

  if (!body) {
    return { ok: false, message: "Write a message before sending." };
  }

  if (body.length > MESSAGE_BODY_MAX_LENGTH) {
    return {
      ok: false,
      message: `Messages can be up to ${MESSAGE_BODY_MAX_LENGTH.toLocaleString("en-US")} characters.`,
    };
  }

  return { ok: true, body };
}

/**
 * Database rules raise these exact sentences. Pass them through.
 * Everything else stays on the generic fallback so a constraint name or
 * SQL detail is not shown in the UI.
 */
export function messageForMessagingError(error: unknown, fallback: string): string {
  const raw = socialErrorText(error);
  const known = KNOWN_MESSAGING_ERRORS.find((sentence) => raw.includes(sentence));

  if (known) {
    return known;
  }

  if (/messages_body_len/i.test(raw)) {
    return `Messages can be up to ${MESSAGE_BODY_MAX_LENGTH.toLocaleString("en-US")} characters.`;
  }

  return messageForSocialError(error, fallback);
}

export type ConversationSummary = {
  conversationId: string;
  otherUserId: string | null;
  displayName: string;
  handle: string | null;
  avatarUrl: string | null;
  accountType: string | null;
  lastBody: string | null;
  lastMessageAt: string | null;
  lastSenderId: string | null;
  lastDeletedAt: string | null;
  lastReadAt: string | null;
  unreadCount: number;
  conversationCreatedAt: string;
};

export function conversationPreview(
  item: Pick<
    ConversationSummary,
    "lastBody" | "lastMessageAt" | "lastSenderId" | "lastDeletedAt"
  >,
  viewerId: string
): string {
  if (!item.lastMessageAt) {
    return "No messages yet";
  }

  if (item.lastDeletedAt) {
    return item.lastSenderId === viewerId ? "You deleted a message" : "Message deleted";
  }

  const body = (item.lastBody ?? "").replace(/\s+/g, " ").trim();
  const text = body.length > 80 ? `${body.slice(0, 77)}...` : body;

  if (!text) {
    return "No messages yet";
  }

  if (item.lastSenderId === viewerId) {
    return `You: ${text}`;
  }

  if (item.lastSenderId === null) {
    return `Deleted user: ${text}`;
  }

  return text;
}

export function conversationSortTime(item: ConversationSummary): number {
  const parsed = Date.parse(item.lastMessageAt ?? item.conversationCreatedAt);

  return Number.isNaN(parsed) ? 0 : parsed;
}

export function sortConversations(items: ConversationSummary[]): ConversationSummary[] {
  return [...items].sort((a, b) => conversationSortTime(b) - conversationSortTime(a));
}

export function filterConversations(
  items: ConversationSummary[],
  query: string,
  viewerId: string
): ConversationSummary[] {
  const needle = query.trim().toLowerCase();

  if (!needle) {
    return items;
  }

  return items.filter((item) => {
    const preview = conversationPreview(item, viewerId).toLowerCase();

    return (
      item.displayName.toLowerCase().includes(needle) ||
      (item.handle ?? "").toLowerCase().includes(needle) ||
      preview.includes(needle)
    );
  });
}

export function totalUnread(items: ConversationSummary[]): number {
  return items.reduce((sum, item) => sum + (item.unreadCount > 0 ? item.unreadCount : 0), 0);
}
