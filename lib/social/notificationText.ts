import { HANDLE_PATTERN } from "@/lib/social/profileValidation";
import { isUserId } from "@/lib/social/postValidation";

export const NOTIFICATION_TYPES = [
  "like",
  "comment",
  "follow",
  "message",
  "report_resolved",
] as const;

export type NotificationKind = (typeof NOTIFICATION_TYPES)[number];

export type NotificationLinkInput = {
  type: NotificationKind;
  postId: string | null;
  commentId: string | null;
  conversationId: string | null;
  actorHandle: string | null;
  profileHandle: string | null;
};

export function isNotificationKind(value: string): value is NotificationKind {
  return (NOTIFICATION_TYPES as readonly string[]).includes(value);
}

export function notificationSentence(type: NotificationKind, actorName: string): string {
  const name = actorName.trim() || "Someone";

  switch (type) {
    case "like":
      return `${name} liked your post`;
    case "comment":
      return `${name} commented on your post`;
    case "follow":
      return `${name} started following you`;
    case "message":
      return `${name} sent you a message`;
    case "report_resolved":
      return "Your report was reviewed";
  }
}

export function notificationHref(input: NotificationLinkInput): string | null {
  switch (input.type) {
    case "like":
      return postHref(input.postId, null);
    case "comment":
      return postHref(input.postId, input.commentId);
    case "follow":
      return profileHref(input.actorHandle);
    case "message":
      return conversationHref(input.conversationId);
    case "report_resolved":
      if (input.conversationId) {
        return conversationHref(input.conversationId);
      }

      if (input.postId) {
        return postHref(input.postId, input.commentId);
      }

      return profileHref(input.profileHandle);
  }
}

function postHref(postId: string | null, commentId: string | null): string | null {
  if (!postId || !isUserId(postId)) {
    return null;
  }

  if (commentId && isUserId(commentId)) {
    return `/post/${postId}#comment-${commentId}`;
  }

  return `/post/${postId}`;
}

function conversationHref(conversationId: string | null): string | null {
  if (!conversationId || !isUserId(conversationId)) {
    return null;
  }

  return `/messages/${conversationId}`;
}

function profileHref(handle: string | null): string | null {
  const trimmed = handle?.trim() ?? "";

  if (!HANDLE_PATTERN.test(trimmed)) {
    return null;
  }

  return `/u/${encodeURIComponent(trimmed)}`;
}
