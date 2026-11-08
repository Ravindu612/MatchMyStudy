import { isPreviewTask, practiceTaskAccess } from "./access";
import type { LanguageStudyConfig } from "./config";
import { assessPurchase } from "./config";
import {
  findListeningTask,
  findMock,
  findPracticeTask,
  lockedPracticeCount,
} from "./content";
import { gradeQuestions, gradeWriting, parseSelfReview } from "./grade";
import { savePracticeSubmission } from "./ledger";
import type { LanguageStudyStore } from "./store";
import { PREVIEW_NOTICE } from "./rubric";
import type {
  AttemptFeedback,
  ExamVariant,
  LanguageCode,
  OrderProduct,
  Skill,
  StudyState,
} from "./types";
import { EXAM_VARIANTS, LANGUAGE_CODES, SKILLS } from "./types";

export type ServiceResult = {
  status: number;
  body: Record<string, unknown>;
};

type IdBundle = { attemptId: string; ledgerId: string; orderId: string };

export type ServiceDeps = {
  config: LanguageStudyConfig;
  store: LanguageStudyStore;
  now: () => Date;
  ids: () => IdBundle;
  stripe?: {
    createSession: (input: {
      priceId: string;
      userId: string;
      orderId: string;
      product: OrderProduct;
      skill: Skill;
      language: LanguageCode;
      examVariant: ExamVariant | null;
      credits: number;
      idempotencyKey: string;
    }) => Promise<{ id: string; url: string }>;
  } | null;
};

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function denied(
  status: number,
  code: string,
  message: string,
  extra: Record<string, unknown> = {}
): ServiceResult {
  return {
    status,
    body: {
      ok: false,
      code,
      message,
      charged: false,
      unlocked: false,
      feedback: null,
      ...extra,
    },
  };
}

function isSkill(value: unknown): value is Skill {
  return typeof value === "string" && SKILLS.includes(value as Skill);
}

function isLanguage(value: unknown): value is LanguageCode {
  return typeof value === "string" && LANGUAGE_CODES.includes(value as LanguageCode);
}

function isVariant(value: unknown): value is ExamVariant {
  return typeof value === "string" && EXAM_VARIANTS.includes(value as ExamVariant);
}

function record(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function parseAnswers(value: unknown): Record<string, string | string[]> {
  const source = record(value) ?? {};
  const answers: Record<string, string | string[]> = {};

  for (const [key, answer] of Object.entries(source)) {
    if (typeof answer === "string") {
      answers[key] = answer;
    } else if (Array.isArray(answer) && answer.every((item) => typeof item === "string")) {
      answers[key] = answer;
    }
  }

  return answers;
}

async function readyState(
  store: LanguageStudyStore,
  userId: string
): Promise<{ ok: true; state: StudyState } | ServiceResult> {
  const loaded = await store.load(userId);

  if (!loaded.ok) {
    return denied(
      503,
      "storage_unavailable",
      "Your answers were not scored because practice could not be saved. Apply the language study migration and set the server database key before counted practice can run. Nothing was counted, charged, or unlocked."
    );
  }

  return loaded;
}

function feedbackBody(
  feedback: AttemptFeedback,
  extra: Record<string, unknown>
): ServiceResult {
  return {
    status: 200,
    body: {
      ok: true,
      charged: false,
      unlocked: false,
      feedback,
      ...extra,
    },
  };
}

export async function handleAttempt(
  deps: ServiceDeps,
  input: { userId: string | null; body: unknown }
): Promise<ServiceResult> {
  const body = record(input.body);

  if (!body || typeof body.taskId !== "string") {
    return denied(400, "invalid_request", "Choose a task and submit it again.");
  }

  const mode = body.mode;
  const task = findPracticeTask(body.taskId) ?? null;
  const mock =
    task === null
      ? findMockFromId(body.taskId)
      : null;

  if (!task && !mock) {
    return denied(404, "not_found", "That practice item is not in the library.");
  }

  if (mode === "preview") {
    if (input.userId) {
      return handleCountedAttempt(deps, input.userId, body, task, mock);
    }

    if (!task || !isPreviewTask(task)) {
      return denied(
        401,
        "sign_in_required",
        "Sign in to take this task. A preview is only the first task in each skill and language, and it does not enforce the free allowance."
      );
    }

    const graded = gradeTask(task, body);

    if (!graded.ok) {
      return denied(400, "invalid_response", graded.message);
    }

    return feedbackBody(graded.feedback, {
      preview: true,
      enforced: false,
      previewNotice: PREVIEW_NOTICE,
    });
  }

  if (!input.userId) {
    return denied(
      401,
      "sign_in_required",
      "Sign in so this attempt can be counted on the server. The preview does not enforce the free allowance."
    );
  }

  return handleCountedAttempt(deps, input.userId, body, task, mock);
}

function findMockFromId(taskId: string) {
  const match = /^mock-(reading|writing|listening)-(en|fi)-(ielts|toefl|pte|yki)$/.exec(taskId);

  if (!match) {
    return null;
  }

  return findMock(match[1] as Skill, match[2] as LanguageCode, match[3] as ExamVariant);
}

function gradeTask(
  task: NonNullable<ReturnType<typeof findPracticeTask>>,
  body: Record<string, unknown>
): { ok: true; feedback: AttemptFeedback } | { ok: false; message: string } {
  if (task.skill === "writing") {
    const review = parseSelfReview(body.selfReview);

    if (!review.ok) {
      return review;
    }

    if (typeof body.essay !== "string") {
      return { ok: false, message: "Write a response before submitting." };
    }

    return gradeWriting(task, body.essay, review.ratings);
  }

  const listening = task.skill === "listening" ? task : null;

  return {
    ok: true,
    feedback: gradeQuestions(task.questions, parseAnswers(body.answers), task.skill, {
      scriptReview: listening?.script,
      openedScript: body.openedScript === true,
    }),
  };
}

async function handleCountedAttempt(
  deps: ServiceDeps,
  userId: string,
  body: Record<string, unknown>,
  task: ReturnType<typeof findPracticeTask>,
  mock: ReturnType<typeof findMock>
): Promise<ServiceResult> {
  const loaded = await readyState(deps.store, userId);

  if ("status" in loaded) {
    return loaded;
  }

  if (mock) {
    return submitMock(deps, userId, loaded.state, mock, body);
  }

  if (!task) {
    return denied(404, "not_found", "That practice item is not in the library.");
  }

  const probe = savePracticeSubmission(loaded.state, {
    userId,
    skill: task.skill,
    language: task.language,
    taskId: task.id,
    access: task.access,
    freeCap: deps.config.freeTasksPerSkillPerLanguage,
    response: {},
    feedback: null,
    scoreCorrect: null,
    scoreTotal: null,
    now: deps.now(),
    ids: { attemptId: "probe", ledgerId: "probe" },
  });

  if (!probe.ok) {
    return denyPractice(deps.config, probe.reason, task.skill, task.language);
  }

  if (probe.alreadySubmitted && probe.attempt.feedback) {
    return feedbackBody(probe.attempt.feedback, {
      preview: false,
      enforced: true,
      alreadySubmitted: true,
    });
  }

  const graded = gradeTask(task, body);

  if (!graded.ok) {
    return denied(400, "invalid_response", graded.message);
  }

  const ids = deps.ids();
  const saved = await deps.store.savePractice({
    userId,
    skill: task.skill,
    language: task.language,
    taskId: task.id,
    access: task.access,
    freeCap: deps.config.freeTasksPerSkillPerLanguage,
    response:
      task.skill === "writing"
        ? { essay: typeof body.essay === "string" ? body.essay : "", selfReview: body.selfReview }
        : { answers: parseAnswers(body.answers), openedScript: body.openedScript === true },
    feedback: graded.feedback,
    scoreCorrect: graded.feedback.scoringKind === "objective" ? graded.feedback.correct : null,
    scoreTotal: graded.feedback.scoringKind === "objective" ? graded.feedback.total : null,
    now: deps.now(),
    ids: { attemptId: ids.attemptId, ledgerId: ids.ledgerId },
  });

  if (!saved.ok) {
    if (saved.reason === "storage_unconfigured" || saved.reason === "storage_error") {
      return denied(
        503,
        "storage_unavailable",
        "Your answers were not scored because practice could not be saved. Nothing was counted, charged, or unlocked."
      );
    }

    return denyPractice(deps.config, saved.reason, task.skill, task.language);
  }

  if (saved.alreadySubmitted && saved.attempt.feedback) {
    return feedbackBody(saved.attempt.feedback, {
      preview: false,
      enforced: true,
      alreadySubmitted: true,
    });
  }

  const refreshed = await deps.store.load(userId);

  return feedbackBody(saved.attempt.feedback ?? graded.feedback, {
    preview: false,
    enforced: true,
    alreadySubmitted: false,
    ...(refreshed.ok
      ? {
          allowance: allowanceSnapshot(
            deps,
            userId,
            refreshed.state,
            task.skill,
            task.language
          ),
        }
      : {}),
  });
}

function denyPractice(
  config: LanguageStudyConfig,
  reason: "free_cap" | "payment_required" | "not_open",
  skill: Skill,
  language: LanguageCode
): ServiceResult {
  if (reason === "free_cap") {
    return denied(
      403,
      "free_cap",
      `Free practice allowance reached. The provisional allowance is ${config.freeTasksPerSkillPerLanguage} submitted tasks for this skill and language. Purchase is not available yet, so no extra task was unlocked.`
    );
  }

  if (reason === "not_open") {
    return denied(
      403,
      "not_open",
      "This task stays locked until a paid credit is used to open it. No credit was used and the answers were not scored."
    );
  }

  return denied(
    403,
    "payment_required",
    `Another ${skill} task in ${language === "fi" ? "Finnish" : "English"} needs a paid credit. Purchase is not available yet. Nothing was charged or unlocked.`
  );
}

function allowanceSnapshot(
  deps: ServiceDeps,
  userId: string,
  state: StudyState,
  skill: Skill,
  language: LanguageCode
) {
  const used = state.attempts.filter(
    (attempt) =>
      attempt.userId === userId &&
      attempt.skill === skill &&
      attempt.language === language &&
      attempt.mode === "practice" &&
      attempt.creditSource === "free" &&
      attempt.submittedAt
  ).length;

  return {
    freeUsed: used,
    freeCap: deps.config.freeTasksPerSkillPerLanguage,
    exceeded: used >= deps.config.freeTasksPerSkillPerLanguage,
    provisional: true,
  };
}

async function submitMock(
  deps: ServiceDeps,
  userId: string,
  state: StudyState,
  mock: NonNullable<ReturnType<typeof findMock>>,
  body: Record<string, unknown>
): Promise<ServiceResult> {
  if (mock.availability.status !== "short_unofficial") {
    return denied(403, "variant_unavailable", mock.availability.reason);
  }

  const attempt = state.attempts.find(
    (item) => item.userId === userId && item.taskId === mock.id
  );

  if (attempt?.submittedAt && attempt.feedback) {
    return feedbackBody(attempt.feedback, {
      preview: false,
      enforced: true,
      alreadySubmitted: true,
    });
  }

  if (!attempt) {
    return denied(
      403,
      "payment_required",
      "This unofficial practice test is locked. Purchase is not available yet, so it was not started or scored."
    );
  }

  const bodyContent = mock.availability.body;
  let feedback: AttemptFeedback;
  let scoreCorrect: number | null = null;
  let scoreTotal: number | null = null;

  if (bodyContent.kind === "writing") {
    const review = parseSelfReview(body.selfReview);

    if (!review.ok) {
      return denied(400, "invalid_response", review.message);
    }

    if (typeof body.essay !== "string") {
      return denied(400, "invalid_response", "Write a response before submitting.");
    }

    const graded = gradeWriting(bodyContent, body.essay, review.ratings);

    if (!graded.ok) {
      return denied(400, "invalid_response", graded.message);
    }

    feedback = graded.feedback;
  } else {
    feedback = gradeQuestions(
      bodyContent.questions,
      parseAnswers(body.answers),
      mock.skill === "listening" ? "listening" : "reading",
      {
        scriptReview: bodyContent.script,
        openedScript: body.openedScript === true,
      }
    );
    scoreCorrect = feedback.correct;
    scoreTotal = feedback.total;
  }

  const saved = await deps.store.saveMock({
    userId,
    taskId: mock.id,
    response: body,
    feedback,
    scoreCorrect,
    scoreTotal,
    now: deps.now(),
  });

  if (!saved.ok && saved.reason === "expired" && saved.attempt?.feedback) {
    return feedbackBody(saved.attempt.feedback, {
      preview: false,
      enforced: true,
      expired: true,
    });
  }

  if (!saved.ok) {
    return denied(
      saved.reason === "storage_error" || saved.reason === "storage_unconfigured" ? 503 : 403,
      saved.reason === "expired" ? "expired" : "not_open",
      saved.reason === "expired"
        ? "Time is up. This attempt was not scored."
        : "This unofficial practice test is not open. Nothing was scored or unlocked."
    );
  }

  if (!saved.attempt.feedback) {
    return denied(500, "storage_error", "The attempt could not be read back. Nothing was unlocked.");
  }

  return feedbackBody(saved.attempt.feedback, {
    preview: false,
    enforced: true,
    alreadySubmitted: saved.alreadySubmitted,
  });
}

export async function handleOpen(
  deps: ServiceDeps,
  input: { userId: string | null; body: unknown }
): Promise<ServiceResult> {
  if (!input.userId) {
    return denied(401, "sign_in_required", "Sign in before opening a paid task or mock test.");
  }

  const body = record(input.body);

  if (!body || typeof body.taskId !== "string") {
    return denied(400, "invalid_request", "Choose an item to open.");
  }

  const loaded = await readyState(deps.store, input.userId);

  if ("status" in loaded) {
    return loaded;
  }

  const task = findPracticeTask(body.taskId);
  const mock = task ? null : findMockFromId(body.taskId);

  if (task?.access === "paid") {
    const access = practiceTaskAccess({
      task,
      userId: input.userId,
      storageReady: true,
      state: loaded.state,
      freeCap: deps.config.freeTasksPerSkillPerLanguage,
    });

    if (access === "locked") {
      return denied(403, "payment_required", "This task is locked. Purchase is not available yet, so it was not opened.");
    }

    if (access !== "needs_open" && access !== "practice" && access !== "completed") {
      return denied(403, "not_open", "This task cannot be opened.");
    }
  } else if (mock) {
    if (mock.availability.status !== "short_unofficial") {
      return denied(403, "variant_unavailable", mock.availability.reason);
    }
  } else {
    return denied(400, "invalid_request", "Only a locked practice task or a mock test needs to be opened.");
  }

  const ids = deps.ids();
  const opened = await deps.store.openItem({
    userId: input.userId,
    skill: task?.skill ?? mock!.skill,
    language: task?.language ?? mock!.language,
    taskId: task?.id ?? mock!.id,
    mode: mock ? "mock" : "practice",
    examVariant: mock ? mock.variant : null,
    durationSeconds: mock ? mock.minutes * 60 : null,
    now: deps.now(),
    ids: { attemptId: ids.attemptId, ledgerId: ids.ledgerId },
  });

  if (!opened.ok) {
    if (opened.reason === "storage_error" || opened.reason === "storage_unconfigured") {
      return denied(503, "storage_unavailable", "The item could not be opened. Nothing was charged or unlocked.");
    }

    return denied(
      403,
      opened.reason,
      opened.reason === "already_submitted"
        ? "This item was already submitted."
        : "No paid credit is available. Purchase is not available yet, so nothing was opened or unlocked."
    );
  }

  return {
    status: 200,
    body: {
      ok: true,
      charged: false,
      unlocked: false,
      opened: true,
      created: opened.created,
      feedback: null,
      message: opened.created
        ? "One paid credit was used to open this item. Payment was not taken on this step."
        : "This item is already open.",
    },
  };
}

export async function handleSpeech(
  deps: ServiceDeps,
  input: { userId: string | null; body: unknown }
): Promise<ServiceResult> {
  const body = record(input.body);

  if (!body || typeof body.taskId !== "string") {
    return denied(400, "invalid_request", "Choose a listening item first.");
  }

  const task = findListeningTask(body.taskId);
  const mock = task ? null : findMockFromId(body.taskId);
  const mockScript =
    mock && mock.availability.status === "short_unofficial" && mock.availability.body.kind === "objective"
      ? mock.availability.body.script
      : null;

  if (!task && !mockScript) {
    return denied(404, "not_found", "This item does not have a speech preview.");
  }

  if (task && isPreviewTask(task) && !input.userId) {
    return speechOk(task.script, task.audioLang);
  }

  if (!input.userId) {
    return denied(401, "sign_in_required", "Sign in to play this listening item.");
  }

  const loaded = await readyState(deps.store, input.userId);

  if ("status" in loaded) {
    return loaded;
  }

  if (task) {
    const access = practiceTaskAccess({
      task,
      userId: input.userId,
      storageReady: true,
      state: loaded.state,
      freeCap: deps.config.freeTasksPerSkillPerLanguage,
    });

    if (access === "practice" || access === "completed" || access === "preview") {
      return speechOk(task.script, task.audioLang);
    }

    return denied(403, "not_open", "The script stays hidden until this listening task is open.");
  }

  const attempt = loaded.state.attempts.find(
    (item) => item.userId === input.userId && item.taskId === mock!.id
  );

  if (!attempt || !mockScript || !mock) {
    return denied(403, "payment_required", "The speech preview stays locked until the mock test is open.");
  }

  const audioLang =
    mock.availability.status === "short_unofficial" && mock.availability.body.kind === "objective"
      ? mock.availability.body.audioLang ?? "en-GB"
      : "en-GB";

  return speechOk(mockScript, audioLang);
}

function speechOk(script: string, lang: string): ServiceResult {
  return {
    status: 200,
    body: {
      ok: true,
      charged: false,
      unlocked: false,
      script,
      lang,
      disclosure:
        "Browser text-to-speech preview of an original script. Not a studio recording and not a secured exam.",
    },
  };
}

export async function handleCheckout(
  deps: ServiceDeps,
  input: { userId: string | null; body: unknown }
): Promise<ServiceResult> {
  if (!input.userId) {
    return denied(401, "sign_in_required", "Sign in before starting a purchase. Nothing was charged.");
  }

  const body = record(input.body);
  const product = body?.product;
  const skill = body?.skill;
  const language = body?.language;
  const idempotencyKey = body?.idempotencyKey;

  if (product !== "task_batch" && product !== "mock_test") {
    return denied(400, "invalid_request", "Choose a task batch or a mock test.");
  }

  if (!isSkill(skill) || !isLanguage(language) || typeof idempotencyKey !== "string" || !UUID.test(idempotencyKey)) {
    return denied(400, "invalid_request", "The purchase request is incomplete.");
  }

  const variant = body?.examVariant;
  const examVariant = product === "mock_test" ? (isVariant(variant) ? variant : null) : null;

  if (product === "mock_test" && !examVariant) {
    return denied(400, "invalid_request", "Choose a mock test variant.");
  }

  const mock = examVariant ? findMock(skill, language, examVariant) : null;

  if (product === "mock_test" && !mock) {
    return denied(404, "not_found", "That mock test is not in the library.");
  }

  const assessment = assessPurchase(deps.config, product, {
    lockedPracticeTasks: lockedPracticeCount(skill, language),
    variantAvailable: mock ? mock.availability.status === "short_unofficial" : true,
  });

  if (!assessment.available) {
    return denied(409, assessment.code, assessment.message);
  }

  const loaded = await readyState(deps.store, input.userId);

  if ("status" in loaded) {
    return loaded;
  }

  const ids = deps.ids();
  const created = await deps.store.createOrder({
    userId: input.userId,
    idempotencyKey,
    product,
    skill,
    language,
    examVariant,
    credits: assessment.credits,
    now: deps.now(),
    id: ids.orderId,
    blockIfEntitled: product === "mock_test",
    entitledTaskId: mock?.id,
  });

  if (!created.ok) {
    if (created.reason === "storage_error" || created.reason === "storage_unconfigured") {
      return denied(503, "storage_unavailable", "The purchase could not be started. Nothing was charged or unlocked.");
    }

    return denied(
      409,
      created.reason,
      created.reason === "already_entitled"
        ? "This mock test is already open or already purchased. A second checkout was not started."
        : "This purchase key was already used for a different item. Nothing was charged."
    );
  }

  if (created.order.status === "fulfilled") {
    return denied(
      409,
      "already_fulfilled",
      "This purchase was already recorded. Refresh your tasks. Nothing new was charged or unlocked."
    );
  }

  if (!created.created && created.order.checkoutUrl && created.order.stripeCheckoutSessionId) {
    return {
      status: 200,
      body: {
        ok: true,
        charged: false,
        unlocked: false,
        reused: true,
        url: created.order.checkoutUrl,
      },
    };
  }

  if (!deps.stripe) {
    return denied(503, "stripe_secret_missing", "Checkout is not configured. Nothing was charged or unlocked.");
  }

  const session = await deps.stripe.createSession({
    priceId: assessment.stripePriceId,
    userId: input.userId,
    orderId: created.order.id,
    product,
    skill,
    language,
    examVariant,
    credits: assessment.credits,
    idempotencyKey: `language-study-${created.order.id}`,
  });
  const attached = await deps.store.attachSession(created.order.id, session.id, session.url);

  if (!attached.ok) {
    return denied(503, "storage_unavailable", "Checkout could not be saved. Do not pay a session that was not confirmed. Nothing was unlocked.");
  }

  return {
    status: 200,
    body: {
      ok: true,
      charged: false,
      unlocked: false,
      reused: false,
      url: session.url,
    },
  };
}

export type WebhookEvent = {
  id: string;
  type: string;
  session?: {
    id: string;
    mode: string;
    paymentStatus: string;
    metadata: Record<string, string | undefined>;
  };
};

export async function handleWebhook(
  deps: ServiceDeps,
  input: {
    rawBody: string;
    signature: string | null;
    secret: string | null;
    constructEvent: (rawBody: string, signature: string, secret: string) => WebhookEvent;
  }
): Promise<ServiceResult> {
  if (!input.secret) {
    return denied(503, "webhook_unconfigured", "The language study webhook is not configured. Nothing was granted.");
  }

  if (!input.signature) {
    return denied(400, "missing_signature", "The webhook signature is missing. Nothing was granted.");
  }

  let event: WebhookEvent;

  try {
    event = input.constructEvent(input.rawBody, input.signature, input.secret);
  } catch {
    return denied(400, "invalid_signature", "The webhook signature could not be verified. Nothing was granted.");
  }

  if (event.type !== "checkout.session.completed" || event.session?.metadata.kind !== "language_study") {
    return {
      status: 200,
      body: { ok: true, ignored: true, granted: false, charged: false, unlocked: false },
    };
  }

  const session = event.session;
  const skill = session.metadata.skill;
  const language = session.metadata.language;
  const product = session.metadata.product;
  const variant = session.metadata.examVariant;

  if (
    !session.metadata.orderId ||
    !session.metadata.userId ||
    (product !== "task_batch" && product !== "mock_test") ||
    !isSkill(skill) ||
    !isLanguage(language)
  ) {
    return denied(400, "invalid_event", "The language study event is incomplete. Nothing was granted.");
  }

  const examVariant = variant && isVariant(variant) ? variant : null;
  const ids = deps.ids();
  const result = await deps.store.fulfill({
    orderId: session.metadata.orderId,
    eventId: event.id,
    sessionId: session.id,
    userId: session.metadata.userId,
    product,
    skill,
    language,
    examVariant,
    paymentStatus: session.paymentStatus,
    mode: session.mode,
    now: deps.now(),
    ledgerId: ids.ledgerId,
  });

  if (!result.ok) {
    const retry = result.reason === "not_found" || result.reason === "storage_error" || result.reason === "storage_unconfigured";

    return denied(
      retry ? 500 : 400,
      result.reason,
      "The payment was not granted. If money was taken, the webhook can be retried after the order is found."
    );
  }

  return {
    status: 200,
    body: {
      ok: true,
      granted: true,
      unlocked: true,
      duplicate: result.status === "already_fulfilled",
      charged: false,
    },
  };
}

export function publicTaskVisible(
  task: NonNullable<ReturnType<typeof findPracticeTask>>,
  userId: string | null,
  storageReady: boolean,
  state: StudyState,
  config: LanguageStudyConfig
) {
  return practiceTaskAccess({
    task,
    userId,
    storageReady,
    state,
    freeCap: config.freeTasksPerSkillPerLanguage,
  });
}
