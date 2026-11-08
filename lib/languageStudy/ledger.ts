import type {
  ExamVariant,
  LanguageCode,
  LedgerEntry,
  Skill,
  StoredAttempt,
  StoredOrder,
  StudyState,
} from "./types";

export const MOCK_SUBMIT_GRACE_MS = 45_000;

export function cloneState(state: StudyState): StudyState {
  return {
    attempts: state.attempts.map((attempt) => ({ ...attempt })),
    ledger: state.ledger.map((entry) => ({ ...entry })),
    orders: state.orders.map((order) => ({ ...order })),
  };
}

export function practiceCreditBalance(
  state: StudyState,
  userId: string,
  skill: Skill,
  language: LanguageCode
): number {
  return state.ledger
    .filter(
      (entry) =>
        entry.userId === userId &&
        entry.skill === skill &&
        entry.language === language &&
        entry.examVariant === null
    )
    .reduce((sum, entry) => sum + entry.amount, 0);
}

export function mockCreditBalance(
  state: StudyState,
  userId: string,
  skill: Skill,
  language: LanguageCode,
  variant: ExamVariant
): number {
  return state.ledger
    .filter(
      (entry) =>
        entry.userId === userId &&
        entry.skill === skill &&
        entry.language === language &&
        entry.examVariant === variant
    )
    .reduce((sum, entry) => sum + entry.amount, 0);
}

export function freeSubmissionsUsed(
  state: StudyState,
  userId: string,
  skill: Skill,
  language: LanguageCode
): number {
  return state.attempts.filter(
    (attempt) =>
      attempt.userId === userId &&
      attempt.skill === skill &&
      attempt.language === language &&
      attempt.mode === "practice" &&
      attempt.creditSource === "free" &&
      attempt.submittedAt !== null
  ).length;
}

export function findAttempt(
  state: StudyState,
  userId: string,
  taskId: string
): StoredAttempt | null {
  return (
    state.attempts.find((attempt) => attempt.userId === userId && attempt.taskId === taskId) ??
    null
  );
}

function addCreditUse(
  state: StudyState,
  attempt: StoredAttempt,
  ids: { ledgerId: string }
): void {
  const entry: LedgerEntry = {
    id: ids.ledgerId,
    userId: attempt.userId,
    skill: attempt.skill,
    language: attempt.language,
    examVariant: attempt.examVariant,
    amount: -1,
    orderId: null,
    attemptId: attempt.id,
  };

  state.ledger.push(entry);
}

export type OpenResult =
  | { ok: true; state: StudyState; attempt: StoredAttempt; created: boolean }
  | { ok: false; reason: "payment_required" | "already_submitted" };

export function openPaidItem(
  state: StudyState,
  input: {
    userId: string;
    skill: Skill;
    language: LanguageCode;
    taskId: string;
    mode: "practice" | "mock";
    examVariant: ExamVariant | null;
    durationSeconds: number | null;
    now: Date;
    ids: { attemptId: string; ledgerId: string };
  }
): OpenResult {
  const next = cloneState(state);
  const existing = findAttempt(next, input.userId, input.taskId);

  if (existing?.submittedAt) {
    return { ok: false, reason: "already_submitted" };
  }

  if (existing) {
    return { ok: true, state: next, attempt: existing, created: false };
  }

  const balance =
    input.mode === "mock" && input.examVariant
      ? mockCreditBalance(next, input.userId, input.skill, input.language, input.examVariant)
      : practiceCreditBalance(next, input.userId, input.skill, input.language);

  if (balance < 1) {
    return { ok: false, reason: "payment_required" };
  }

  const attempt: StoredAttempt = {
    id: input.ids.attemptId,
    userId: input.userId,
    skill: input.skill,
    language: input.language,
    taskId: input.taskId,
    mode: input.mode,
    examVariant: input.examVariant,
    creditSource: "paid",
    scoreCorrect: null,
    scoreTotal: null,
    response: {},
    feedback: null,
    durationSeconds: input.durationSeconds,
    startedAt: input.now.toISOString(),
    submittedAt: null,
  };

  next.attempts.push(attempt);
  addCreditUse(next, attempt, { ledgerId: input.ids.ledgerId });

  return { ok: true, state: next, attempt, created: true };
}

export type SavePracticeResult =
  | { ok: true; state: StudyState; attempt: StoredAttempt; alreadySubmitted: boolean }
  | { ok: false; reason: "free_cap" | "payment_required" | "not_open" };

export function savePracticeSubmission(
  state: StudyState,
  input: {
    userId: string;
    skill: Skill;
    language: LanguageCode;
    taskId: string;
    access: "free" | "paid";
    freeCap: number;
    response: unknown;
    feedback: StoredAttempt["feedback"];
    scoreCorrect: number | null;
    scoreTotal: number | null;
    now: Date;
    ids: { attemptId: string; ledgerId: string };
  }
): SavePracticeResult {
  const next = cloneState(state);
  const existing = findAttempt(next, input.userId, input.taskId);

  if (existing?.submittedAt) {
    return { ok: true, state: next, attempt: existing, alreadySubmitted: true };
  }

  if (input.access === "paid" && !existing) {
    return { ok: false, reason: "not_open" };
  }

  if (existing && existing.submittedAt === null) {
    existing.response = input.response;
    existing.feedback = input.feedback;
    existing.scoreCorrect = input.scoreCorrect;
    existing.scoreTotal = input.scoreTotal;
    existing.submittedAt = input.now.toISOString();

    return { ok: true, state: next, attempt: existing, alreadySubmitted: false };
  }

  const freeUsed = freeSubmissionsUsed(next, input.userId, input.skill, input.language);
  const paid = practiceCreditBalance(next, input.userId, input.skill, input.language);
  let creditSource: "free" | "paid";

  if (input.access === "free" && freeUsed < input.freeCap) {
    creditSource = "free";
  } else if (paid > 0) {
    creditSource = "paid";
  } else if (input.access === "free") {
    return { ok: false, reason: "free_cap" };
  } else {
    return { ok: false, reason: "payment_required" };
  }

  const attempt: StoredAttempt = {
    id: input.ids.attemptId,
    userId: input.userId,
    skill: input.skill,
    language: input.language,
    taskId: input.taskId,
    mode: "practice",
    examVariant: null,
    creditSource,
    scoreCorrect: input.scoreCorrect,
    scoreTotal: input.scoreTotal,
    response: input.response,
    feedback: input.feedback,
    durationSeconds: null,
    startedAt: input.now.toISOString(),
    submittedAt: input.now.toISOString(),
    };

  next.attempts.push(attempt);

  if (creditSource === "paid") {
    addCreditUse(next, attempt, { ledgerId: input.ids.ledgerId });
  }

  return { ok: true, state: next, attempt, alreadySubmitted: false };
}

export function mockDeadline(attempt: StoredAttempt): number | null {
  if (attempt.durationSeconds === null) {
    return null;
  }

  return Date.parse(attempt.startedAt) + attempt.durationSeconds * 1000 + MOCK_SUBMIT_GRACE_MS;
}

export type SaveMockResult =
  | { ok: true; state: StudyState; attempt: StoredAttempt; alreadySubmitted: boolean }
  | { ok: false; reason: "not_open" | "expired"; state?: StudyState; attempt?: StoredAttempt };

export function saveMockSubmission(
  state: StudyState,
  input: {
    userId: string;
    taskId: string;
    response: unknown;
    feedback: StoredAttempt["feedback"];
    scoreCorrect: number | null;
    scoreTotal: number | null;
    now: Date;
    expiredFeedback?: StoredAttempt["feedback"];
  }
): SaveMockResult {
  const next = cloneState(state);
  const existing = findAttempt(next, input.userId, input.taskId);

  if (!existing || existing.mode !== "mock") {
    return { ok: false, reason: "not_open" };
  }

  if (existing.submittedAt) {
    return { ok: true, state: next, attempt: existing, alreadySubmitted: true };
  }

  const deadline = mockDeadline(existing);

  if (deadline !== null && input.now.getTime() > deadline) {
    existing.feedback = input.expiredFeedback ?? {
      scoringKind: "unscored",
      officialScore: null,
      examScore: null,
      label: "Time is up. This attempt was not scored.",
    };
    existing.scoreCorrect = null;
    existing.scoreTotal = null;
    existing.submittedAt = input.now.toISOString();

    return { ok: false, reason: "expired", state: next, attempt: existing };
  }

  existing.response = input.response;
  existing.feedback = input.feedback;
  existing.scoreCorrect = input.scoreCorrect;
  existing.scoreTotal = input.scoreTotal;
  existing.submittedAt = input.now.toISOString();

  return { ok: true, state: next, attempt: existing, alreadySubmitted: false };
}

export function ordersMatch(
  order: StoredOrder,
  request: {
    product: StoredOrder["product"];
    skill: Skill;
    language: LanguageCode;
    examVariant: ExamVariant | null;
    credits: number;
  }
): boolean {
  return (
    order.product === request.product &&
    order.skill === request.skill &&
    order.language === request.language &&
    order.examVariant === request.examVariant &&
    order.credits === request.credits
  );
}

export type CreateOrderResult =
  | { ok: true; state: StudyState; order: StoredOrder; created: boolean }
  | { ok: false; reason: "conflict" | "already_entitled" };

export function createPendingOrder(
  state: StudyState,
  input: {
    userId: string;
    idempotencyKey: string;
    product: StoredOrder["product"];
    skill: Skill;
    language: LanguageCode;
    examVariant: ExamVariant | null;
    credits: number;
    now: Date;
    id: string;
    blockIfEntitled?: boolean;
    entitledTaskId?: string;
  }
): CreateOrderResult {
  const next = cloneState(state);

  if (input.blockIfEntitled && input.examVariant && input.entitledTaskId) {
    const balance = mockCreditBalance(
      next,
      input.userId,
      input.skill,
      input.language,
      input.examVariant
    );
    const attempt = findAttempt(next, input.userId, input.entitledTaskId);

    if (balance > 0 || attempt) {
      return { ok: false, reason: "already_entitled" };
    }
  }

  const existing = next.orders.find(
    (order) => order.userId === input.userId && order.idempotencyKey === input.idempotencyKey
  );

  if (existing) {
    if (
      !ordersMatch(existing, {
        product: input.product,
        skill: input.skill,
        language: input.language,
        examVariant: input.examVariant,
        credits: input.credits,
      })
    ) {
      return { ok: false, reason: "conflict" };
    }

    return { ok: true, state: next, order: existing, created: false };
  }

  const order: StoredOrder = {
    id: input.id,
    userId: input.userId,
    idempotencyKey: input.idempotencyKey,
    product: input.product,
    skill: input.skill,
    language: input.language,
    examVariant: input.examVariant,
    status: "pending",
    credits: input.credits,
    stripeCheckoutSessionId: null,
    stripeEventId: null,
    checkoutUrl: null,
    createdAt: input.now.toISOString(),
    fulfilledAt: null,
  };

  next.orders.push(order);

  return { ok: true, state: next, order, created: true };
}

export type FulfillResult =
  | { ok: true; state: StudyState; status: "fulfilled" | "already_fulfilled" }
  | { ok: false; reason: "not_found" | "mismatch" | "not_paid" | "duplicate_event" };

export function fulfillOrder(
  state: StudyState,
  input: {
    orderId: string;
    eventId: string;
    sessionId: string;
    userId: string;
    product: StoredOrder["product"];
    skill: Skill;
    language: LanguageCode;
    examVariant: ExamVariant | null;
    paymentStatus: string;
    mode: string;
    now: Date;
    ledgerId: string;
  }
): FulfillResult {
  const next = cloneState(state);
  const order = next.orders.find((item) => item.id === input.orderId);

  if (!order) {
    return { ok: false, reason: "not_found" };
  }

  if (input.mode !== "payment" || input.paymentStatus !== "paid") {
    return { ok: false, reason: "not_paid" };
  }

  if (
    order.userId !== input.userId ||
    order.product !== input.product ||
    order.skill !== input.skill ||
    order.language !== input.language ||
    order.examVariant !== input.examVariant
  ) {
    return { ok: false, reason: "mismatch" };
  }

  if (order.stripeCheckoutSessionId && order.stripeCheckoutSessionId !== input.sessionId) {
    return { ok: false, reason: "mismatch" };
  }

  if (order.status === "fulfilled") {
    return { ok: true, state: next, status: "already_fulfilled" };
  }

  if (next.orders.some((item) => item.stripeEventId === input.eventId)) {
    return { ok: false, reason: "duplicate_event" };
  }

  if (next.ledger.some((entry) => entry.orderId === order.id)) {
    order.status = "fulfilled";
    order.stripeEventId = input.eventId;
    order.fulfilledAt = order.fulfilledAt ?? input.now.toISOString();

    return { ok: true, state: next, status: "already_fulfilled" };
  }

  order.status = "fulfilled";
  order.stripeCheckoutSessionId = input.sessionId;
  order.stripeEventId = input.eventId;
  order.fulfilledAt = input.now.toISOString();
  next.ledger.push({
    id: input.ledgerId,
    userId: order.userId,
    skill: order.skill,
    language: order.language,
    examVariant: order.examVariant,
    amount: order.credits,
    orderId: order.id,
    attemptId: null,
  });

  return { ok: true, state: next, status: "fulfilled" };
}

/** Marks a checkout that ended without payment. Does not remove a granted credit. */
export function failCheckout(
  state: StudyState,
  orderId: string
): { ok: true; state: StudyState; status: "failed" | "left_fulfilled" | "missing" } {
  const next = cloneState(state);
  const order = next.orders.find((item) => item.id === orderId);

  if (!order) {
    return { ok: true, state: next, status: "missing" };
  }

  if (order.status === "fulfilled") {
    return { ok: true, state: next, status: "left_fulfilled" };
  }

  order.status = "failed";
  order.checkoutUrl = null;

  return { ok: true, state: next, status: "failed" };
}
