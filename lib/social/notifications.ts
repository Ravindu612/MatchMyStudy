import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import {
  isNotificationKind,
  notificationHref,
  notificationSentence,
  type NotificationKind,
} from "@/lib/social/notificationText";
import { isUserId } from "@/lib/social/postValidation";
import { requireUserId } from "@/lib/social/requireUser";
import { messageForSocialError } from "@/lib/social/socialErrors";

export const NOTIFICATIONS_CHANGED_EVENT = "mms-notifications-changed";

const PAGE_SIZE = 50;

export type AppNotification = {
  id: string;
  type: NotificationKind;
  text: string;
  href: string | null;
  readAt: string | null;
  createdAt: string;
  actorName: string;
  actorAvatarUrl: string | null;
};

/**
 * Writes do not chain `.select()`. PostgREST turns that into
 * UPDATE ... RETURNING. notifications_select is a recipient comparison and
 * the Postgres test covers RETURNING; the client still reads the row back
 * afterwards, matching messages and reports.
 */
export async function listNotifications(): Promise<AppNotification[]> {
  await requireUserId();
  const { data, error } = await supabase
    .from("notifications")
    .select(
      "id, actor_id, type, post_id, comment_id, conversation_id, profile_id, read_at, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(PAGE_SIZE);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load notifications."));
  }

  const rows = normalizeRows(data);
  const profiles = await loadProfiles(
    rows.flatMap((row) => [row.actorId, row.profileId].filter((id): id is string => id !== null))
  );

  return rows.map((row) => {
    const actor = row.actorId ? profiles.get(row.actorId) : undefined;
    const profile = row.profileId ? profiles.get(row.profileId) : undefined;
    const actorName = actor?.displayName ?? "Someone";

    return {
      id: row.id,
      type: row.type,
      text: notificationSentence(row.type, actorName),
      href: notificationHref({
        type: row.type,
        postId: row.postId,
        commentId: row.commentId,
        conversationId: row.conversationId,
        actorHandle: actor?.handle ?? null,
        profileHandle: profile?.handle ?? null,
      }),
      readAt: row.readAt,
      createdAt: row.createdAt,
      actorName,
      actorAvatarUrl: actor?.avatarUrl ?? null,
    };
  });
}

export async function countUnreadNotifications(): Promise<number> {
  await requireUserId();
  const { count, error } = await supabase
    .from("notifications")
    .select("id", { count: "exact", head: true })
    .is("read_at", null);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load notifications."));
  }

  return typeof count === "number" && count > 0 ? count : 0;
}

export async function markNotificationRead(id: string): Promise<void> {
  if (!isUserId(id)) {
    throw new Error("This notification is unavailable.");
  }

  const userId = await requireUserId();
  const { error } = await supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .eq("id", id)
    .eq("recipient_id", userId)
    .is("read_at", null);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't mark this notification as read."));
  }

  const { data, error: readError } = await supabase
    .from("notifications")
    .select("id, read_at")
    .eq("id", id)
    .maybeSingle();

  if (readError || !data || typeof data.read_at !== "string") {
    throw new Error("Couldn't mark this notification as read.");
  }
}

export async function markAllNotificationsRead(): Promise<void> {
  const userId = await requireUserId();
  const { error } = await supabase
    .from("notifications")
    .update({ read_at: new Date().toISOString() })
    .eq("recipient_id", userId)
    .is("read_at", null);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't mark notifications as read."));
  }

  const remaining = await countUnreadNotifications();

  if (remaining > 0) {
    throw new Error("Couldn't mark notifications as read.");
  }
}

export function subscribeToNotifications(userId: string, onChange: () => void): () => void {
  if (!isUserId(userId)) {
    return () => undefined;
  }

  const channel = supabase.channel(`notifications:${userId}:${crypto.randomUUID()}`);

  channel.on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "notifications",
      filter: `recipient_id=eq.${userId}`,
    },
    () => {
      onChange();
    }
  );
  channel.subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

export function notifyNotificationsChanged(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(NOTIFICATIONS_CHANGED_EVENT));
}

type ProfileBits = {
  displayName: string;
  handle: string | null;
  avatarUrl: string | null;
};

type NotificationRow = {
  id: string;
  type: NotificationKind;
  actorId: string | null;
  postId: string | null;
  commentId: string | null;
  conversationId: string | null;
  profileId: string | null;
  readAt: string | null;
  createdAt: string;
};

async function loadProfiles(ids: string[]): Promise<Map<string, ProfileBits>> {
  const unique = [...new Set(ids.filter((id) => isUserId(id)))];
  const profiles = new Map<string, ProfileBits>();

  if (unique.length === 0) {
    return profiles;
  }

  const { data, error } = await supabase
    .from("public_profiles")
    .select("id, handle, display_name, avatar_url")
    .in("id", unique);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load notifications."));
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
      displayName: typeof record.display_name === "string" ? record.display_name : "Someone",
      handle: typeof record.handle === "string" ? record.handle : null,
      avatarUrl: safeImageUrl(typeof record.avatar_url === "string" ? record.avatar_url : null),
    });
  }

  return profiles;
}

function normalizeRows(value: unknown): NotificationRow[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;
    const type = typeof record.type === "string" ? record.type : "";

    if (
      typeof record.id !== "string" ||
      !isUserId(record.id) ||
      !isNotificationKind(type) ||
      typeof record.created_at !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        type,
        actorId: uuidOrNull(record.actor_id),
        postId: uuidOrNull(record.post_id),
        commentId: uuidOrNull(record.comment_id),
        conversationId: uuidOrNull(record.conversation_id),
        profileId: uuidOrNull(record.profile_id),
        readAt: typeof record.read_at === "string" ? record.read_at : null,
        createdAt: record.created_at,
      },
    ];
  });
}

function uuidOrNull(value: unknown): string | null {
  return typeof value === "string" && isUserId(value) ? value : null;
}
