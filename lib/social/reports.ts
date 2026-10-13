import { supabase } from "@/lib/supabase";
import { isUserId } from "@/lib/social/postValidation";
import { reportInsertRow, validateReportReason, type ReportTargetType } from "@/lib/social/reportValidation";
import { requireUserId } from "@/lib/social/requireUser";
import { messageForSocialError, socialErrorCode } from "@/lib/social/socialErrors";

/**
 * Insert a report without INSERT ... RETURNING.
 * PostgREST `.select()` after insert is RETURNING, and a select policy that
 * cannot see the new row fails the whole insert. The id is chosen here.
 * A separate read is not required: a rejected insert returns an error.
 */
export async function submitReport(input: {
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
}): Promise<void> {
  if (!isUserId(input.targetId)) {
    throw new Error("This content is unavailable.");
  }

  const parsed = validateReportReason(input.reason, "Add a reason before submitting.");

  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  const userId = await requireUserId();
  const ownerId = await visibleOwnerId(input.targetType, input.targetId);

  if (ownerId === userId) {
    throw new Error("You can't report your own content.");
  }

  const { error } = await supabase.from("reports").insert(
    reportInsertRow({
      id: crypto.randomUUID(),
      reporterId: userId,
      targetType: input.targetType,
      targetId: input.targetId,
      reason: parsed.reason,
    })
  );

  if (error) {
    if (socialErrorCode(error) === "23505") {
      throw new Error("You've already reported this.");
    }

    throw new Error(messageForSocialError(error, "Couldn't submit this report."));
  }
}

async function visibleOwnerId(
  targetType: ReportTargetType,
  targetId: string
): Promise<string> {
  if (targetType === "post") {
    const { data, error } = await supabase
      .from("posts")
      .select("author_id")
      .eq("id", targetId)
      .eq("status", "active")
      .is("deleted_at", null)
      .maybeSingle();

    if (error || typeof data?.author_id !== "string") {
      throw new Error("This post is unavailable.");
    }

    return data.author_id;
  }

  if (targetType === "comment") {
    const { data, error } = await supabase
      .from("comments")
      .select("author_id")
      .eq("id", targetId)
      .eq("status", "active")
      .is("deleted_at", null)
      .maybeSingle();

    if (error || typeof data?.author_id !== "string") {
      throw new Error("This comment is unavailable.");
    }

    return data.author_id;
  }

  if (targetType === "message") {
    const { data, error } = await supabase
      .from("messages")
      .select("sender_id")
      .eq("id", targetId)
      .is("deleted_at", null)
      .maybeSingle();

    if (error || typeof data?.sender_id !== "string") {
      throw new Error("This message is unavailable.");
    }

    return data.sender_id;
  }

  const { data, error } = await supabase
    .from("public_profiles")
    .select("id")
    .eq("id", targetId)
    .maybeSingle();

  if (error || typeof data?.id !== "string") {
    throw new Error("This profile is unavailable.");
  }

  return data.id;
}
