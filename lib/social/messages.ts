import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import {
  messageForMessagingError,
  sortConversations,
  validateMessageBody,
  type ConversationSummary,
} from "@/lib/social/messageValidation";
import { isUserId } from "@/lib/social/postValidation";
import { requireUserId } from "@/lib/social/requireUser";

export const MESSAGES_READ_EVENT = "mms-messages-read";
const MESSAGE_PAGE_SIZE = 100;

export type ChatMessage = {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  createdAt: string;
  deletedAt: string | null;
};

export type ConversationPeer = {
  id: string;
  displayName: string;
  handle: string | null;
  avatarUrl: string | null;
  accountType: string | null;
};

/**
 * Inserts do not use `.select()`. PostgREST turns that into INSERT ... RETURNING,
 * which applies the SELECT policy to the new row. messages_select is safe for
 * that (it checks membership, not the new message), and the Postgres test covers
 * RETURNING. The client still skips it, matching posts and reports.
 */
export async function sendMessage(conversationId: string, rawBody: string): Promise<void> {
  if (!isUserId(conversationId)) {
    throw new Error("This conversation is unavailable.");
  }

  const parsed = validateMessageBody(rawBody);

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const userId = await requireUserId();
  const { error } = await supabase.from("messages").insert({
    id: crypto.randomUUID(),
    conversation_id: conversationId,
    sender_id: userId,
    body: parsed.body,
  });

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't send this message."));
  }
}

export async function deleteMessage(messageId: string): Promise<void> {
  if (!isUserId(messageId)) {
    throw new Error("This message is unavailable.");
  }

  const userId = await requireUserId();
  const { error } = await supabase
    .from("messages")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", messageId)
    .eq("sender_id", userId)
    .is("deleted_at", null);

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't delete this message."));
  }

  const { data, error: readError } = await supabase
    .from("messages")
    .select("id, deleted_at")
    .eq("id", messageId)
    .maybeSingle();

  if (readError || !data || typeof data.deleted_at !== "string") {
    throw new Error("Couldn't delete this message.");
  }
}

export async function startDirectMessage(otherUserId: string): Promise<string> {
  if (!isUserId(otherUserId)) {
    throw new Error("This profile is unavailable.");
  }

  const userId = await requireUserId();

  if (userId === otherUserId) {
    throw new Error("You can't message yourself.");
  }

  const { data, error } = await supabase.rpc("get_or_create_dm", {
    other_user: otherUserId,
  });

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't open this conversation."));
  }

  if (typeof data !== "string" || !isUserId(data)) {
    throw new Error("Couldn't open this conversation.");
  }

  return data;
}

export async function markConversationRead(conversationId: string): Promise<void> {
  if (!isUserId(conversationId)) {
    throw new Error("This conversation is unavailable.");
  }

  await requireUserId();
  const { error } = await supabase.rpc("mark_conversation_read", {
    conversation: conversationId,
  });

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't update this conversation."));
  }
}

export async function listConversations(): Promise<ConversationSummary[]> {
  await requireUserId();
  const { data, error } = await supabase
    .from("my_conversation_summaries")
    .select(
      "conversation_id, other_user_id, last_read_at, conversation_created_at, last_body, last_message_at, last_sender_id, last_deleted_at, unread_count"
    );

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't load messages."));
  }

  const rows = normalizeSummaries(data);
  const profiles = await loadProfiles(rows.map((row) => row.otherUserId));

  return sortConversations(
    rows.map((row) => {
      const profile = profiles.get(row.otherUserId);

      return {
        ...row,
        displayName: profile?.displayName ?? "Member",
        handle: profile?.handle ?? null,
        avatarUrl: profile?.avatarUrl ?? null,
        accountType: profile?.accountType ?? null,
      };
    })
  );
}

export async function listMessages(
  conversationId: string,
  before?: string
): Promise<{ messages: ChatMessage[]; hasMore: boolean }> {
  if (!isUserId(conversationId)) {
    throw new Error("This conversation is unavailable.");
  }

  await requireUserId();
  let query = supabase
    .from("messages")
    .select("id, conversation_id, sender_id, body, created_at, deleted_at")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: false })
    .limit(MESSAGE_PAGE_SIZE + 1);

  if (before) {
    query = query.lt("created_at", before);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't load this conversation."));
  }

  const rows = normalizeMessages(data);
  const hasMore = rows.length > MESSAGE_PAGE_SIZE;

  return {
    messages: rows.slice(0, MESSAGE_PAGE_SIZE).reverse(),
    hasMore,
  };
}

export async function loadConversationPeers(conversationId: string): Promise<ConversationPeer[]> {
  if (!isUserId(conversationId)) {
    throw new Error("This conversation is unavailable.");
  }

  const userId = await requireUserId();
  const { data, error } = await supabase
    .from("conversation_members")
    .select("user_id")
    .eq("conversation_id", conversationId);

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't load this conversation."));
  }

  const ids = normalizeIds(data).filter((id) => id !== userId);

  if (ids.length === 0) {
    return [];
  }

  const profiles = await loadProfiles(ids);

  return ids.map((id) => {
    const profile = profiles.get(id);

    return {
      id,
      displayName: profile?.displayName ?? "Member",
      handle: profile?.handle ?? null,
      avatarUrl: profile?.avatarUrl ?? null,
      accountType: profile?.accountType ?? null,
    };
  });
}

export function subscribeToMessages(
  onChange: () => void,
  conversationId?: string
): () => void {
  const channel = supabase.channel(
    `messages:${conversationId ?? "inbox"}:${crypto.randomUUID()}`
  );
  const config = conversationId
    ? {
        event: "*" as const,
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${conversationId}`,
      }
    : {
        event: "*" as const,
        schema: "public",
        table: "messages",
      };

  channel.on("postgres_changes", config, () => {
    onChange();
  });
  channel.subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

export function notifyMessagesRead(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(MESSAGES_READ_EVENT));
}

type ProfileBits = {
  displayName: string;
  handle: string | null;
  avatarUrl: string | null;
  accountType: string | null;
};

async function loadProfiles(ids: string[]): Promise<Map<string, ProfileBits>> {
  const unique = [...new Set(ids.filter((id) => isUserId(id)))];
  const profiles = new Map<string, ProfileBits>();

  if (unique.length === 0) {
    return profiles;
  }

  const { data, error } = await supabase
    .from("public_profiles")
    .select("id, handle, display_name, avatar_url, account_type")
    .in("id", unique);

  if (error) {
    throw new Error(messageForMessagingError(error, "Couldn't load messages."));
  }

  if (!Array.isArray(data)) {
    return profiles;
  }

  for (const row of data) {
    if (!row || typeof row !== "object") {
      continue;
    }

    const record = row as Record<string, unknown>;

    if (typeof record.id !== "string") {
      continue;
    }

    profiles.set(record.id, {
      displayName: typeof record.display_name === "string" ? record.display_name : "Member",
      handle: typeof record.handle === "string" ? record.handle : null,
      avatarUrl: safeImageUrl(typeof record.avatar_url === "string" ? record.avatar_url : null),
      accountType: typeof record.account_type === "string" ? record.account_type : null,
    });
  }

  return profiles;
}

function normalizeSummaries(value: unknown): ConversationSummary[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;

    if (
      typeof record.conversation_id !== "string" ||
      typeof record.other_user_id !== "string" ||
      typeof record.conversation_created_at !== "string"
    ) {
      return [];
    }

    const unread = Number(record.unread_count);

    return [
      {
        conversationId: record.conversation_id,
        otherUserId: record.other_user_id,
        displayName: "Member",
        handle: null,
        avatarUrl: null,
        accountType: null,
        lastBody: typeof record.last_body === "string" ? record.last_body : null,
        lastMessageAt: typeof record.last_message_at === "string" ? record.last_message_at : null,
        lastSenderId: typeof record.last_sender_id === "string" ? record.last_sender_id : null,
        lastDeletedAt: typeof record.last_deleted_at === "string" ? record.last_deleted_at : null,
        lastReadAt: typeof record.last_read_at === "string" ? record.last_read_at : null,
        unreadCount: Number.isFinite(unread) && unread > 0 ? Math.floor(unread) : 0,
        conversationCreatedAt: record.conversation_created_at,
      },
    ];
  });
}

function normalizeMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;

    if (
      typeof record.id !== "string" ||
      typeof record.conversation_id !== "string" ||
      typeof record.sender_id !== "string" ||
      typeof record.body !== "string" ||
      typeof record.created_at !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        conversationId: record.conversation_id,
        senderId: record.sender_id,
        body: record.body,
        createdAt: record.created_at,
        deletedAt: typeof record.deleted_at === "string" ? record.deleted_at : null,
      },
    ];
  });
}

function normalizeIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const id = (row as Record<string, unknown>).user_id;

    return typeof id === "string" && isUserId(id) ? [id] : [];
  });
}
