import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import type {
  CreateOrderResult,
  FulfillResult,
  OpenResult,
  SaveMockResult,
  SavePracticeResult,
} from "./ledger";
import type { LanguageStudyStore, LoadResult, StoreFailure } from "./store";
import {
  emptyStudyState,
  type AttemptFeedback,
  type ExamVariant,
  type LanguageCode,
  type Skill,
  type StoredAttempt,
  type StoredOrder,
  type StudyState,
} from "./types";

type Row = Record<string, unknown>;

function storageFailure(error: { code?: string; message?: string } | null): StoreFailure {
  const message = error?.message ?? "";
  const missing =
    error?.code === "42P01" ||
    error?.code === "PGRST205" ||
    error?.code === "42883" ||
    /does not exist|schema cache|could not find the function/i.test(message);

  return { ok: false, reason: missing ? "storage_unconfigured" : "storage_error" };
}

function asSkill(value: unknown): Skill {
  return value === "writing" || value === "listening" ? value : "reading";
}

function asLanguage(value: unknown): LanguageCode {
  return value === "fi" ? "fi" : "en";
}

function asVariant(value: unknown): ExamVariant | null {
  if (value === "ielts" || value === "toefl" || value === "pte" || value === "yki") {
    return value;
  }

  return null;
}

function mapAttempt(row: Row): StoredAttempt {
  const feedback = row.feedback;

  return {
    id: String(row.id),
    userId: String(row.user_id),
    skill: asSkill(row.skill),
    language: asLanguage(row.language_code),
    taskId: String(row.task_id),
    mode: row.mode === "mock" ? "mock" : "practice",
    examVariant: asVariant(row.exam_variant),
    creditSource: row.credit_source === "paid" ? "paid" : "free",
    scoreCorrect: typeof row.score_correct === "number" ? row.score_correct : null,
    scoreTotal: typeof row.score_total === "number" ? row.score_total : null,
    response: row.response ?? {},
    feedback:
      feedback && typeof feedback === "object" && !Array.isArray(feedback) && "scoringKind" in feedback
        ? (feedback as AttemptFeedback)
        : null,
    durationSeconds: typeof row.duration_seconds === "number" ? row.duration_seconds : null,
    startedAt: String(row.started_at),
    submittedAt: row.submitted_at ? String(row.submitted_at) : null,
  };
}

function mapOrder(row: Row): StoredOrder {
  const status =
    row.status === "fulfilled" || row.status === "expired" || row.status === "failed"
      ? row.status
      : "pending";

  return {
    id: String(row.id),
    userId: String(row.user_id),
    idempotencyKey: String(row.idempotency_key),
    product: row.product === "mock_test" ? "mock_test" : "task_batch",
    skill: asSkill(row.skill),
    language: asLanguage(row.language_code),
    examVariant: asVariant(row.exam_variant),
    status,
    credits: typeof row.credits === "number" ? row.credits : 0,
    stripeCheckoutSessionId: row.stripe_checkout_session_id
      ? String(row.stripe_checkout_session_id)
      : null,
    stripeEventId: row.stripe_event_id ? String(row.stripe_event_id) : null,
    checkoutUrl: row.checkout_url ? String(row.checkout_url) : null,
    createdAt: String(row.created_at),
    fulfilledAt: row.fulfilled_at ? String(row.fulfilled_at) : null,
  };
}

function jsonRecord(value: unknown): Row | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Row;
}

export class SupabaseLanguageStudyStore implements LanguageStudyStore {
  async load(userId: string): Promise<LoadResult> {
    const admin = getSupabaseAdmin();

    if (!admin) {
      return { ok: false, reason: "storage_unconfigured" };
    }

    const [attempts, ledger, orders] = await Promise.all([
      admin.from("language_study_attempts").select("*").eq("user_id", userId),
      admin.from("language_study_ledger").select("*").eq("user_id", userId),
      admin.from("language_study_orders").select("*").eq("user_id", userId),
    ]);
    const error = attempts.error ?? ledger.error ?? orders.error;

    if (error) {
      return storageFailure(error);
    }

    const state: StudyState = {
      attempts: (attempts.data ?? []).map((row) => mapAttempt(row as Row)),
      ledger: (ledger.data ?? []).map((row) => {
        const record = row as Row;

        return {
          id: String(record.id),
          userId: String(record.user_id),
          skill: asSkill(record.skill),
          language: asLanguage(record.language_code),
          examVariant: asVariant(record.exam_variant),
          amount: typeof record.amount === "number" ? record.amount : 0,
          orderId: record.order_id ? String(record.order_id) : null,
          attemptId: record.attempt_id ? String(record.attempt_id) : null,
        };
      }),
      orders: (orders.data ?? []).map((row) => mapOrder(row as Row)),
    };

    return { ok: true, state };
  }

  async savePractice(
    input: Parameters<LanguageStudyStore["savePractice"]>[0]
  ): Promise<SavePracticeResult | StoreFailure> {
    const data = await this.rpc("language_study_save_practice", {
      p_user_id: input.userId,
      p_skill: input.skill,
      p_language: input.language,
      p_task_id: input.taskId,
      p_access: input.access,
      p_free_cap: input.freeCap,
      p_response: input.response,
      p_feedback: input.feedback,
      p_score_correct: input.scoreCorrect,
      p_score_total: input.scoreTotal,
      p_attempt_id: input.ids.attemptId,
      p_ledger_id: input.ids.ledgerId,
    });

    if (!data.ok) {
      return data;
    }

    const status = String(data.row.status ?? "");
    const attempt = jsonRecord(data.row.attempt);

    if ((status === "recorded" || status === "existing") && attempt) {
      return {
        ok: true,
        state: emptyStudyState(),
        attempt: mapAttempt(attempt),
        alreadySubmitted: status === "existing",
      };
    }

    if (status === "free_cap" || status === "payment_required" || status === "not_open") {
      return { ok: false, reason: status };
    }

    return { ok: false, reason: "storage_error" };
  }

  async openItem(
    input: Parameters<LanguageStudyStore["openItem"]>[0]
  ): Promise<OpenResult | StoreFailure> {
    const data = await this.rpc("language_study_open_item", {
      p_user_id: input.userId,
      p_skill: input.skill,
      p_language: input.language,
      p_task_id: input.taskId,
      p_mode: input.mode,
      p_exam_variant: input.examVariant,
      p_duration_seconds: input.durationSeconds,
      p_attempt_id: input.ids.attemptId,
      p_ledger_id: input.ids.ledgerId,
    });

    if (!data.ok) {
      return data;
    }

    const status = String(data.row.status ?? "");
    const attempt = jsonRecord(data.row.attempt);

    if ((status === "opened" || status === "already_open") && attempt) {
      return {
        ok: true,
        state: emptyStudyState(),
        attempt: mapAttempt(attempt),
        created: status === "opened",
      };
    }

    if (status === "payment_required" || status === "already_submitted") {
      return { ok: false, reason: status };
    }

    return { ok: false, reason: "storage_error" };
  }

  async saveMock(
    input: Parameters<LanguageStudyStore["saveMock"]>[0]
  ): Promise<SaveMockResult | StoreFailure> {
    const data = await this.rpc("language_study_save_mock", {
      p_user_id: input.userId,
      p_task_id: input.taskId,
      p_response: input.response,
      p_feedback: input.feedback,
      p_score_correct: input.scoreCorrect,
      p_score_total: input.scoreTotal,
      p_now: input.now.toISOString(),
    });

    if (!data.ok) {
      return data;
    }

    const status = String(data.row.status ?? "");
    const attempt = jsonRecord(data.row.attempt);

    if ((status === "recorded" || status === "existing") && attempt) {
      return {
        ok: true,
        state: emptyStudyState(),
        attempt: mapAttempt(attempt),
        alreadySubmitted: status === "existing",
      };
    }

    if (status === "expired" && attempt) {
      return {
        ok: false,
        reason: "expired",
        state: emptyStudyState(),
        attempt: mapAttempt(attempt),
      };
    }

    if (status === "not_open") {
      return { ok: false, reason: "not_open" };
    }

    return { ok: false, reason: "storage_error" };
  }

  async createOrder(
    input: Parameters<LanguageStudyStore["createOrder"]>[0]
  ): Promise<CreateOrderResult | StoreFailure> {
    const data = await this.rpc("language_study_create_order", {
      p_user_id: input.userId,
      p_idempotency_key: input.idempotencyKey,
      p_product: input.product,
      p_skill: input.skill,
      p_language: input.language,
      p_exam_variant: input.examVariant,
      p_credits: input.credits,
      p_order_id: input.id,
      p_block_if_entitled: input.blockIfEntitled === true,
      p_entitled_task_id: input.entitledTaskId ?? null,
    });

    if (!data.ok) {
      return data;
    }

    const status = String(data.row.status ?? "");
    const order = jsonRecord(data.row.order);

    if ((status === "created" || status === "reused") && order) {
      return {
        ok: true,
        state: emptyStudyState(),
        order: mapOrder(order),
        created: status === "created",
      };
    }

    if (status === "conflict" || status === "already_entitled") {
      return { ok: false, reason: status };
    }

    return { ok: false, reason: "storage_error" };
  }

  async attachSession(orderId: string, sessionId: string, url: string) {
    const admin = getSupabaseAdmin();

    if (!admin) {
      return { ok: false as const, reason: "storage_unconfigured" as const };
    }

    const { error } = await admin
      .from("language_study_orders")
      .update({
        stripe_checkout_session_id: sessionId,
        checkout_url: url,
      })
      .eq("id", orderId)
      .eq("status", "pending");

    if (error) {
      return storageFailure(error);
    }

    return { ok: true as const };
  }

  async failCheckout(orderId: string) {
    const admin = getSupabaseAdmin();

    if (!admin) {
      return { ok: false as const, reason: "storage_unconfigured" as const };
    }

    const { data, error } = await admin
      .from("language_study_orders")
      .update({ status: "failed", checkout_url: null })
      .eq("id", orderId)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();

    if (error) {
      return storageFailure(error);
    }

    return { ok: true as const, status: data ? ("failed" as const) : ("missing" as const) };
  }

  async fulfill(
    input: Parameters<LanguageStudyStore["fulfill"]>[0]
  ): Promise<FulfillResult | StoreFailure> {
    const data = await this.rpc("language_study_fulfill_order", {
      p_order_id: input.orderId,
      p_event_id: input.eventId,
      p_session_id: input.sessionId,
      p_user_id: input.userId,
      p_product: input.product,
      p_skill: input.skill,
      p_language: input.language,
      p_exam_variant: input.examVariant,
      p_payment_status: input.paymentStatus,
      p_mode: input.mode,
      p_ledger_id: input.ledgerId,
    });

    if (!data.ok) {
      return data;
    }

    const status = String(data.row.status ?? "");

    if (status === "fulfilled" || status === "already_fulfilled") {
      return { ok: true, state: emptyStudyState(), status };
    }

    if (
      status === "not_found" ||
      status === "mismatch" ||
      status === "not_paid" ||
      status === "duplicate_event"
    ) {
      return { ok: false, reason: status };
    }

    return { ok: false, reason: "storage_error" };
  }

  private async rpc(
    name: string,
    args: Record<string, unknown>
  ): Promise<{ ok: true; row: Row } | StoreFailure> {
    const admin = getSupabaseAdmin();

    if (!admin) {
      return { ok: false, reason: "storage_unconfigured" };
    }

    const { data, error } = await admin.rpc(name, args);

    if (error) {
      return storageFailure(error);
    }

    const row = jsonRecord(data);

    if (!row) {
      return { ok: false, reason: "storage_error" };
    }

    return { ok: true, row };
  }
}

export function getLanguageStudyStore(): LanguageStudyStore {
  return new SupabaseLanguageStudyStore();
}
