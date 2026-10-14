import { supabase } from "@/lib/supabase";
import { isUserId } from "@/lib/social/postValidation";
import {
  assembleOpenReports,
  contentStatusPatch,
  reportDecisionPatch,
  validateReportReason,
  verificationPatch,
  type ModerationContentStatus,
  type OpenReportComment,
  type OpenReportMessage,
  type OpenReportPerson,
  type OpenReportPost,
  type OpenReportSource,
  type OpenReportView,
  type ReportDecision,
  type ReportTargetType,
} from "@/lib/social/reportValidation";
import { requireUserId } from "@/lib/social/requireUser";
import { messageForSocialError } from "@/lib/social/socialErrors";

const QUEUE_LIMIT = 100;

export type { OpenReportView };

/**
 * Open reports for an admin. Reads are separate statements.
 * Updates in this file also avoid UPDATE ... RETURNING and then read the row
 * back, because a select policy that rejects the new row fails the write.
 */
export async function listOpenReports(): Promise<OpenReportView[]> {
  const { data, error } = await supabase
    .from("reports")
    .select("id, reporter_id, target_type, target_id, reason, created_at, status")
    .eq("status", "open")
    .order("created_at", { ascending: true })
    .limit(QUEUE_LIMIT);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load reports."));
  }

  const reports = normalizeReports(data);

  if (reports.length === 0) {
    return [];
  }

  const postIds = idsFor(reports, "post");
  const commentIds = idsFor(reports, "comment");
  const messageIds = idsFor(reports, "message");
  const [posts, comments, messages] = await Promise.all([
    loadPosts(postIds),
    loadComments(commentIds),
    loadMessages(messageIds),
  ]);
  const people = await loadPeople([
    ...reports.map((report) => report.reporterId),
    ...reports.filter((report) => report.targetType === "profile").map((report) => report.targetId),
    ...posts.map((post) => post.authorId),
    ...comments.map((comment) => comment.authorId),
    ...messages.map((message) => message.senderId),
  ]);

  return assembleOpenReports({ reports, people, posts, comments, messages });
}

export async function moderateContent(input: {
  targetType: "post" | "comment";
  targetId: string;
  status: ModerationContentStatus;
  reason: string;
}): Promise<void> {
  if (!isUserId(input.targetId)) {
    throw new Error("This content is unavailable.");
  }

  const parsed = validateReportReason(
    input.reason,
    "Write a reason before hiding or removing this."
  );

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const adminId = await requireUserId();
  const table = input.targetType === "post" ? "posts" : "comments";
  const patch = contentStatusPatch(input.status);
  const { error } = await supabase.from(table).update(patch).eq("id", input.targetId);

  if (error) {
    throw new Error(
      messageForSocialError(
        error,
        input.targetType === "post" ? "Couldn't update this post." : "Couldn't update this comment."
      )
    );
  }

  const { data, error: readError } = await supabase
    .from(table)
    .select("id, status")
    .eq("id", input.targetId)
    .maybeSingle();

  if (readError || data?.status !== input.status) {
    throw new Error(
      input.targetType === "post" ? "Couldn't update this post." : "Couldn't update this comment."
    );
  }

  const decision = reportDecisionPatch({
    adminId,
    status: "actioned",
    note: parsed.reason,
  });
  const { error: reportError } = await supabase
    .from("reports")
    .update(decision)
    .eq("target_type", input.targetType)
    .eq("target_id", input.targetId)
    .eq("status", "open");

  if (reportError) {
    throw new Error(
      messageForSocialError(reportError, "The content was updated, but the report could not be closed.")
    );
  }

  const { data: stillOpen, error: stillError } = await supabase
    .from("reports")
    .select("id")
    .eq("target_type", input.targetType)
    .eq("target_id", input.targetId)
    .eq("status", "open");

  if (stillError || (Array.isArray(stillOpen) && stillOpen.length > 0)) {
    throw new Error("The content was updated, but the report could not be closed.");
  }
}

export async function decideReport(input: {
  reportId: string;
  decision: ReportDecision;
  note: string;
}): Promise<void> {
  if (!isUserId(input.reportId)) {
    throw new Error("This report is unavailable.");
  }

  const note = input.note.trim();
  const parsed =
    note.length === 0
      ? { ok: true as const, reason: null }
      : validateReportReason(note, "Write a reason.");

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const adminId = await requireUserId();
  const patch = reportDecisionPatch({
    adminId,
    status: input.decision,
    note: parsed.reason,
  });
  const { error } = await supabase
    .from("reports")
    .update(patch)
    .eq("id", input.reportId)
    .eq("status", "open");

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't update this report."));
  }

  const { data, error: readError } = await supabase
    .from("reports")
    .select("id, status")
    .eq("id", input.reportId)
    .maybeSingle();

  if (readError || data?.status !== input.decision) {
    throw new Error("Couldn't update this report.");
  }
}

export async function removeReportedMessage(messageId: string, reason: string): Promise<void> {
  if (!isUserId(messageId)) {
    throw new Error("This message is unavailable.");
  }

  const parsed = validateReportReason(
    reason,
    "Write a reason before removing this message."
  );

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const adminId = await requireUserId();
  const { error } = await supabase
    .from("messages")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", messageId)
    .is("deleted_at", null);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't remove this message."));
  }

  const { data, error: readError } = await supabase
    .from("messages")
    .select("id, deleted_at")
    .eq("id", messageId)
    .maybeSingle();

  if (readError || typeof data?.deleted_at !== "string") {
    throw new Error("Couldn't remove this message.");
  }

  const decision = reportDecisionPatch({
    adminId,
    status: "actioned",
    note: parsed.reason,
  });
  const { error: reportError } = await supabase
    .from("reports")
    .update(decision)
    .eq("target_type", "message")
    .eq("target_id", messageId)
    .eq("status", "open");

  if (reportError) {
    throw new Error(
      messageForSocialError(reportError, "The message was removed, but the report could not be closed.")
    );
  }

  const { data: stillOpen, error: stillError } = await supabase
    .from("reports")
    .select("id")
    .eq("target_type", "message")
    .eq("target_id", messageId)
    .eq("status", "open");

  if (stillError || (Array.isArray(stillOpen) && stillOpen.length > 0)) {
    throw new Error("The message was removed, but the report could not be closed.");
  }
}

export async function setProfileVerified(profileId: string, isVerified: boolean): Promise<void> {
  if (!isUserId(profileId)) {
    throw new Error("This profile is unavailable.");
  }

  await requireUserId();
  const patch = verificationPatch(isVerified);
  const { error } = await supabase.from("profiles").update(patch).eq("id", profileId);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't update verification."));
  }

  const { data, error: readError } = await supabase
    .from("profiles")
    .select("id, is_verified")
    .eq("id", profileId)
    .maybeSingle();

  if (readError || data?.is_verified !== isVerified) {
    throw new Error("Couldn't update verification.");
  }
}

function idsFor(reports: OpenReportSource[], targetType: ReportTargetType): string[] {
  return [
    ...new Set(
      reports.filter((report) => report.targetType === targetType).map((report) => report.targetId)
    ),
  ];
}

async function loadPosts(ids: string[]): Promise<OpenReportPost[]> {
  if (ids.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("posts")
    .select("id, body, author_id, status, deleted_at")
    .in("id", ids);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load reported posts."));
  }

  return normalizePosts(data);
}

async function loadComments(ids: string[]): Promise<OpenReportComment[]> {
  if (ids.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("comments")
    .select("id, body, author_id, post_id, status, deleted_at")
    .in("id", ids);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load reported comments."));
  }

  return normalizeComments(data);
}

async function loadMessages(ids: string[]): Promise<OpenReportMessage[]> {
  if (ids.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("messages")
    .select("id, body, sender_id, conversation_id, deleted_at")
    .in("id", ids);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load reported messages."));
  }

  return normalizeMessages(data);
}

async function loadPeople(ids: string[]): Promise<OpenReportPerson[]> {
  const unique = [...new Set(ids.filter((id) => isUserId(id)))];

  if (unique.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, handle, display_name, is_verified")
    .in("id", unique);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't load profiles."));
  }

  return normalizePeople(data);
}

function normalizeReports(value: unknown): OpenReportSource[] {
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
      typeof record.reporter_id !== "string" ||
      typeof record.target_type !== "string" ||
      typeof record.target_id !== "string" ||
      typeof record.reason !== "string" ||
      typeof record.created_at !== "string" ||
      record.status !== "open"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        reporterId: record.reporter_id,
        targetType: record.target_type,
        targetId: record.target_id,
        reason: record.reason,
        createdAt: record.created_at,
      },
    ];
  });
}

function normalizePosts(value: unknown): OpenReportPost[] {
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
      typeof record.body !== "string" ||
      typeof record.author_id !== "string" ||
      typeof record.status !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        body: record.body,
        authorId: record.author_id,
        status: record.status,
        deletedAt: typeof record.deleted_at === "string" ? record.deleted_at : null,
      },
    ];
  });
}

function normalizeComments(value: unknown): OpenReportComment[] {
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
      typeof record.body !== "string" ||
      typeof record.author_id !== "string" ||
      typeof record.post_id !== "string" ||
      typeof record.status !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        body: record.body,
        authorId: record.author_id,
        postId: record.post_id,
        status: record.status,
        deletedAt: typeof record.deleted_at === "string" ? record.deleted_at : null,
      },
    ];
  });
}

function normalizeMessages(value: unknown): OpenReportMessage[] {
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
      typeof record.body !== "string" ||
      typeof record.sender_id !== "string" ||
      typeof record.conversation_id !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        body: record.body,
        senderId: record.sender_id,
        conversationId: record.conversation_id,
        deletedAt: typeof record.deleted_at === "string" ? record.deleted_at : null,
      },
    ];
  });
}

function normalizePeople(value: unknown): OpenReportPerson[] {
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
      typeof record.handle !== "string" ||
      typeof record.display_name !== "string"
    ) {
      return [];
    }

    return [
      {
        id: record.id,
        handle: record.handle,
        displayName: record.display_name,
        isVerified: record.is_verified === true,
      },
    ];
  });
}
