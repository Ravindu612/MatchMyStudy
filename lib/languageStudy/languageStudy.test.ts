import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ITALKI_AFFILIATE_URL, ITALKI_CTA_LABEL, ITALKI_LINK_REL } from "../italki";
import {
  languageStudyHubCards,
  mockAccess,
  practiceTaskAccess,
  provisionalAllowanceText,
} from "./access";
import { assessPurchase, readLanguageStudyConfig } from "./config";
import {
  findListeningTask,
  findMock,
  findPracticeTask,
  lockedPracticeCount,
  mockQuestionCount,
  practiceTasks,
  practiceTasksFor,
} from "./content";
import { containsAnswerKey, gradeQuestions, gradeWriting, toPublicListening, toPublicReading } from "./grade";
import {
  createPendingOrder,
  fulfillOrder,
  freeSubmissionsUsed,
  openPaidItem,
  practiceCreditBalance,
  saveMockSubmission,
} from "./ledger";
import { MemoryLanguageStudyStore } from "./memoryStore";
import type { LanguageStudyStore } from "./store";
import { LANGUAGE_STUDY_HREF, languageStudySitemapPaths } from "./paths";
import { handleAttempt, handleCheckout, handleSpeech, handleWebhook } from "./service";
import { emptyStudyState, type SelfRating } from "./types";
import AttemptForm from "../../components/languageStudy/AttemptForm";
import Paywall from "../../components/languageStudy/Paywall";
import ResultPanel from "../../components/languageStudy/ResultPanel";

const now = new Date("2026-11-08T12:00:00.000Z");
const userId = "11111111-1111-4111-8111-111111111111";

function ids(prefix: string) {
  return {
    attemptId: `${prefix}-attempt`,
    ledgerId: `${prefix}-ledger`,
    orderId: `${prefix}-order`,
  };
}

function deps(
  store: LanguageStudyStore = new MemoryLanguageStudyStore(),
  config = readLanguageStudyConfig({})
) {
  let n = 0;

  return {
    config,
    store,
    now: () => now,
    ids: () => {
      n += 1;
      return ids(`id-${n}`);
    },
    stripe: null,
  };
}

function walk(dir: string, found: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      if (entry !== "node_modules" && entry !== ".next") {
        walk(path, found);
      }
    } else if (/\.(ts|tsx)$/.test(entry)) {
      found.push(path);
    }
  }

  return found;
}

test("launch prices are USD 1.99 and USD 4.99 and stay fixed", () => {
  const config = readLanguageStudyConfig({
    LANGUAGE_STUDY_CURRENCY: "eur",
    LANGUAGE_STUDY_BATCH_PRICE_MINOR: "500",
    LANGUAGE_STUDY_MOCK_PRICE_MINOR: "700",
    LANGUAGE_STUDY_BATCH_SIZE: "1",
  });

  assert.equal(config.freeTasksPerSkillPerLanguage, 3);
  assert.equal(config.paidBatchSize, 10);
  assert.equal(config.currency, "usd");
  assert.equal(config.taskBatchPriceMinor, 199);
  assert.equal(config.mockPriceMinor, 499);
  assert.equal(config.paymentsEnabledFlag, false);
  assert.match(provisionalAllowanceText(config), /free allowance is 3/);

  const purchase = assessPurchase(config, "task_batch", {
    lockedPracticeTasks: lockedPracticeCount("reading", "en"),
  });

  assert.equal(purchase.available, false);
  if (!purchase.available) {
    assert.equal(purchase.code, "payments_disabled");
    assert.match(purchase.message, /USD 1\.99/);
    assert.match(purchase.message, /10 additional practice tasks/);
    assert.match(purchase.message, /nothing was charged/i);
    assert.match(purchase.message, /nothing was unlocked/i);
    assert.match(purchase.message, /No subscription is created/);
    assert.match(purchase.message, /does not turn on Stripe Tax/);
  }
});

test("a consultant Stripe secret does not enable language study checkout", () => {
  const config = readLanguageStudyConfig({
    STRIPE_SECRET_KEY: "sk_test_example",
    STRIPE_WEBHOOK_SECRET: "whsec_consultant",
    LANGUAGE_STUDY_CURRENCY: "eur",
    LANGUAGE_STUDY_PAYMENTS_ENABLED: "true",
  });
  const purchase = assessPurchase(config, "mock_test", {
    lockedPracticeTasks: 1,
    variantAvailable: true,
  });

  assert.equal(purchase.available, false);
  if (!purchase.available) {
    assert.equal(purchase.code, "stripe_price_missing");
    assert.match(purchase.message, /USD 4\.99/);
    assert.match(purchase.message, /Nothing was charged|nothing was charged/);
  }
});

test("checkout stays off when the withheld library is smaller than the batch", () => {
  const config = readLanguageStudyConfig({
    LANGUAGE_STUDY_PAYMENTS_ENABLED: "true",
    LANGUAGE_STUDY_CURRENCY: "eur",
    LANGUAGE_STUDY_BATCH_PRICE_MINOR: "500",
    LANGUAGE_STUDY_MOCK_PRICE_MINOR: "700",
    LANGUAGE_STUDY_BATCH_SIZE: "10",
    STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID: "price_batch",
    STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID: "price_mock",
    STRIPE_SECRET_KEY: "sk_test_example",
    LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET: "whsec_language",
  });
  const purchase = assessPurchase(config, "task_batch", { lockedPracticeTasks: 1 });

  assert.equal(purchase.available, false);
  if (!purchase.available) {
    assert.equal(purchase.code, "library_smaller_than_batch");
  }
});

test("each skill and language has 3 free tasks and 10 paid tasks", () => {
  for (const skill of ["reading", "writing", "listening"] as const) {
    for (const language of ["en", "fi"] as const) {
      const tasks = practiceTasksFor(skill, language);

      assert.equal(tasks.length, 13, `${skill} ${language}`);
      assert.equal(tasks.filter((task) => task.access === "free").length, 3);
      assert.equal(lockedPracticeCount(skill, language), 10);
    }
  }

  assert.equal(practiceTasks.some((task) => !["en", "fi"].includes(task.language)), false);
});

test("listening tasks include a synthesized file and hide the script", () => {
  const task = findListeningTask("listening-en-5");

  assert.ok(task);
  const pub = toPublicListening(task);

  assert.equal(pub.audioSrc, "/language-study/audio/listening-en-5.mp3");
  assert.equal(containsAnswerKey(pub), false);
  assert.match(pub.audioNote, /eSpeak NG/);
  assert.match(pub.audioNote, /not a human recording/);
  assert.equal(existsSync(new URL("../../public/language-study/audio/listening-en-5.mp3", import.meta.url)), true);
  assert.equal(
    existsSync(new URL("../../public/language-study/audio/mock-listening-fi-yki.mp3", import.meta.url)),
    true
  );
});

test("every objective item has one keyed choice and no band claim", () => {
  for (const task of practiceTasks) {
    if (task.skill === "writing") {
      continue;
    }

    for (const question of task.questions) {
      assert.equal(
        question.choices.filter((choice) => choice.id === question.correctChoiceId).length,
        1
      );
      assert.doesNotMatch(question.explanation, /band\s*\d|official score|YKI level\s*[1-6]/i);
    }

    const publicTask = task.skill === "reading" ? toPublicReading(task) : toPublicListening(task);

    assert.equal(containsAnswerKey(publicTask), false);
    if (task.skill === "listening") {
      assert.equal("script" in publicTask, false);
    }
  }
});

test("reading and listening scores are raw marks with no official conversion", () => {
  const reading = findPracticeTask("reading-en-1");

  assert.ok(reading && reading.skill === "reading");
  const perfect = gradeQuestions(
    reading.questions,
    {
      "reading-en-1-q1": "a",
      "reading-en-1-q2": "c",
      "reading-en-1-q3": "b",
    },
    "reading"
  );

  assert.equal(perfect.correct, 3);
  assert.equal(perfect.total, 3);
  assert.equal(perfect.officialScore, null);
  assert.equal(perfect.examScore, null);
  assert.match(perfect.label, /not an official or certified score/i);

  const partial = gradeQuestions(reading.questions, { "reading-en-1-q1": "b" }, "reading");

  assert.equal(partial.correct, 0);
  assert.equal(partial.items[0]?.matched, false);
  assert.match(partial.items[0]?.explanation ?? "", /22:10/);

  const listening = findListeningTask("listening-fi-1");

  assert.ok(listening);
  const heard = gradeQuestions(
    listening.questions,
    {
      "listening-fi-1-q1": "b",
      "listening-fi-1-q2": "a",
      "listening-fi-1-q3": "a",
    },
    "listening",
    { openedScript: true, scriptReview: listening.script }
  );

  assert.equal(heard.correct, 3);
  assert.match(heard.label, /reading of the script/i);
  assert.match(heard.label, /not an official listening score/i);
});

test("PTE-style reorder scores only an exact order", () => {
  const mock = findMock("reading", "en", "pte");

  assert.ok(mock && mock.availability.status === "short_unofficial");
  assert.equal(mock.availability.body.kind, "objective");
  if (mock.availability.body.kind !== "objective") {
    return;
  }

  const exact = gradeQuestions(
    mock.availability.body.questions,
    {
      "mock-reading-en-pte-q1": "b",
      "mock-reading-en-pte-q2": "b",
      "mock-reading-en-pte-q3": ["s2", "s3", "s1"],
    },
    "reading"
  );
  const partialOrder = gradeQuestions(
    mock.availability.body.questions,
    { "mock-reading-en-pte-q3": ["s2", "s1", "s3"] },
    "reading"
  );

  assert.equal(exact.correct, 3);
  assert.equal(partialOrder.items.find((item) => item.id.endsWith("q3"))?.matched, false);
  assert.match(mock.scopeNote, /Partial credit is not used/);
  assert.match(mock.scopeNote, /not a PTE score/i);
  assert.doesNotMatch(mock.scopeNote, /equivalent to|band\s*\d|score of 90/i);
});

test("writing review is not an exam score and word count is not a mark", () => {
  const task = findPracticeTask("writing-en-1");

  assert.ok(task && task.skill === "writing");
  const tooShort = gradeWriting(task, "Too short.", {
    task: "met",
    organization: "met",
    development: "met",
    language: "met",
  });

  assert.equal(tooShort.ok, false);
  const ratings: Record<string, SelfRating> = {
    task: "met",
    organization: "partly",
    development: "not_yet",
    language: "met",
  };
  const review = gradeWriting(
    task,
    "Dear tutor, I missed yesterday because the night bus stopped early. I will read the notes today and send a summary. Which paragraph of the assignment should I redo first? Thank you, Mina.",
    ratings
  );

  assert.equal(review.ok, true);
  if (!review.ok) {
    return;
  }

  assert.equal(review.feedback.scoringKind, "self_review");
  assert.equal(review.feedback.examScore, null);
  assert.equal(review.feedback.officialScore, null);
  assert.equal(review.feedback.wordCountIsScore, false);
  assert.equal(review.feedback.label, "Self-review, not an exam score");
  assert.match(review.feedback.summary, /your own review/i);
  assert.doesNotMatch(JSON.stringify(review.feedback), /band\s*[0-9]|IELTS\s*[0-9]|TOEFL\s*[0-9]/i);
  assert.match(review.feedback.summary, /not an exam score, an AI score, or an official mark/);
});

test("signed-in free cap blocks another submission and does not reveal a score", async () => {
  const store = new MemoryLanguageStudyStore();
  const service = deps(store, readLanguageStudyConfig({ LANGUAGE_STUDY_FREE_TASKS: "1" }));
  const first = await handleAttempt(service, {
    userId,
    body: { mode: "practice", taskId: "reading-en-1", answers: { "reading-en-1-q1": "a" } },
  });

  assert.equal(first.status, 200);
  assert.equal(first.body.enforced, true);
  const repeat = await handleAttempt(service, {
    userId,
    body: { mode: "practice", taskId: "reading-en-1", answers: { "reading-en-1-q1": "b" } },
  });

  assert.equal(repeat.body.alreadySubmitted, true);
  assert.equal(freeSubmissionsUsed(store.state, userId, "reading", "en"), 1);
  const blocked = await handleAttempt(service, {
    userId,
    body: { mode: "practice", taskId: "reading-en-2", answers: { "reading-en-2-q1": "b" } },
  });

  assert.equal(blocked.status, 403);
  assert.equal(blocked.body.code, "free_cap");
  assert.equal(blocked.body.feedback, null);
  assert.equal(blocked.body.unlocked, false);
  assert.equal(blocked.body.charged, false);
  const paid = await handleAttempt(deps(store), {
    userId,
    body: { mode: "practice", taskId: "reading-en-4", answers: { "reading-en-4-q1": "b" } },
  });

  assert.equal(paid.status, 403);
  assert.equal(paid.body.feedback, null);
  assert.equal(store.state.attempts.some((attempt) => attempt.taskId === "reading-en-4"), false);
});

test("a paid credit opens once and a second open does not spend another credit", () => {
  const created = createPendingOrder(emptyStudyState(), {
    userId,
    idempotencyKey: "22222222-2222-4222-8222-222222222222",
    product: "task_batch",
    skill: "reading",
    language: "en",
    examVariant: null,
    credits: 1,
    now,
    id: "order-1",
  });

  assert.equal(created.ok, true);
  if (!created.ok) {
    return;
  }

  const granted = fulfillOrder(created.state, {
    orderId: "order-1",
    eventId: "evt-1",
    sessionId: "cs-1",
    userId,
    product: "task_batch",
    skill: "reading",
    language: "en",
    examVariant: null,
    paymentStatus: "paid",
    mode: "payment",
    now,
    ledgerId: "ledger-grant",
  });

  assert.equal(granted.ok, true);
  if (!granted.ok) {
    return;
  }

  const again = fulfillOrder(granted.state, {
    orderId: "order-1",
    eventId: "evt-1-replay",
    sessionId: "cs-1",
    userId,
    product: "task_batch",
    skill: "reading",
    language: "en",
    examVariant: null,
    paymentStatus: "paid",
    mode: "payment",
    now,
    ledgerId: "ledger-grant-2",
  });

  assert.equal(again.ok, true);
  if (!again.ok) {
    return;
  }

  assert.equal(again.status, "already_fulfilled");
  assert.equal(practiceCreditBalance(again.state, userId, "reading", "en"), 1);
  const first = openPaidItem(again.state, {
    userId,
    skill: "reading",
    language: "en",
    taskId: "reading-en-4",
    mode: "practice",
    examVariant: null,
    durationSeconds: null,
    now,
    ids: { attemptId: "open-1", ledgerId: "use-1" },
  });

  assert.equal(first.ok && first.created, true);
  if (!first.ok) {
    return;
  }

  const second = openPaidItem(first.state, {
    userId,
    skill: "reading",
    language: "en",
    taskId: "reading-en-4",
    mode: "practice",
    examVariant: null,
    durationSeconds: null,
    now,
    ids: { attemptId: "open-2", ledgerId: "use-2" },
  });

  assert.equal(second.ok && second.created, false);
  if (!second.ok) {
    return;
  }

  assert.equal(practiceCreditBalance(second.state, userId, "reading", "en"), 0);
  assert.equal(second.state.ledger.filter((entry) => entry.amount < 0).length, 1);
});

test("mock purchase replay does not grant a second credit and an unpaid event grants nothing", () => {
  const pending = createPendingOrder(emptyStudyState(), {
    userId,
    idempotencyKey: "33333333-3333-4333-8333-333333333333",
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    credits: 1,
    now,
    id: "mock-order",
    blockIfEntitled: true,
    entitledTaskId: "mock-reading-en-ielts",
  });

  assert.equal(pending.ok, true);
  if (!pending.ok) {
    return;
  }

  const unpaid = fulfillOrder(pending.state, {
    orderId: "mock-order",
    eventId: "evt-unpaid",
    sessionId: "cs-mock",
    userId,
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    paymentStatus: "unpaid",
    mode: "payment",
    now,
    ledgerId: "ledger-no",
  });

  assert.equal(unpaid.ok, false);
  if (unpaid.ok) {
    return;
  }

  assert.equal(unpaid.reason, "not_paid");
  const paid = fulfillOrder(pending.state, {
    orderId: "mock-order",
    eventId: "evt-paid",
    sessionId: "cs-mock",
    userId,
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    paymentStatus: "paid",
    mode: "payment",
    now,
    ledgerId: "ledger-yes",
  });

  assert.equal(paid.ok, true);
  if (!paid.ok) {
    return;
  }

  const mismatch = fulfillOrder(paid.state, {
    orderId: "mock-order",
    eventId: "evt-other",
    sessionId: "cs-mock",
    userId: "99999999-9999-4999-8999-999999999999",
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    paymentStatus: "paid",
    mode: "payment",
    now,
    ledgerId: "ledger-bad",
  });

  assert.equal(mismatch.ok, false);
  const duplicateKey = createPendingOrder(paid.state, {
    userId,
    idempotencyKey: "33333333-3333-4333-8333-333333333333",
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    credits: 1,
    now,
    id: "mock-order-2",
  });

  assert.equal(duplicateKey.ok && duplicateKey.created, false);
});

test("guest preview scores only the first task and does not claim an enforced cap", async () => {
  const result = await handleAttempt(deps(), {
    userId: null,
    body: {
      mode: "preview",
      taskId: "reading-fi-1",
      answers: { "reading-fi-1-q1": "b", "reading-fi-1-q2": "b", "reading-fi-1-q3": "c" },
    },
  });

  assert.equal(result.status, 200);
  assert.equal(result.body.preview, true);
  assert.equal(result.body.enforced, false);
  assert.match(String(result.body.previewNotice), /does not use or enforce the free allowance/);
  const hidden = await handleAttempt(deps(), {
    userId: null,
    body: { mode: "preview", taskId: "reading-fi-2", answers: {} },
  });

  assert.equal(hidden.status, 401);
  assert.equal(hidden.body.feedback, null);
  const speech = await handleSpeech(deps(), { userId: null, body: { taskId: "listening-en-2" } });

  assert.equal(speech.status, 401);
  assert.equal(speech.body.script, undefined);
  const previewSpeech = await handleSpeech(deps(), {
    userId: null,
    body: { taskId: "listening-en-1" },
  });

  assert.equal(previewSpeech.status, 200);
  assert.match(String(previewSpeech.body.script), /quiet reading room/);
  assert.match(String(previewSpeech.body.disclosure), /not a studio recording/i);
});

test("counted practice fails closed when storage is not configured", async () => {
  const result = await handleAttempt(
    deps({
      async load() {
        return { ok: false, reason: "storage_unconfigured" };
      },
      async savePractice() {
        throw new Error("should not save");
      },
      async openItem() {
        throw new Error("should not open");
      },
      async saveMock() {
        throw new Error("should not save");
      },
      async createOrder() {
        throw new Error("should not order");
      },
      async attachSession() {
        return { ok: true };
      },
      async fulfill() {
        throw new Error("should not fulfill");
      },
      async failCheckout() {
        return { ok: true as const, status: "missing" as const };
      },
    }),
    { userId, body: { mode: "practice", taskId: "reading-en-1", answers: { "reading-en-1-q1": "a" } } }
  );

  assert.equal(result.status, 503);
  assert.equal(result.body.feedback, null);
  assert.equal(result.body.unlocked, false);
});

test("default checkout does not create an order or a Stripe session", async () => {
  const store = new MemoryLanguageStudyStore();
  let stripeCalls = 0;
  const result = await handleCheckout(
    {
      ...deps(store),
      stripe: {
        async retrievePrice() {
          throw new Error("Stripe should not be called when checkout is disconnected");
        },
        async createSession() {
          stripeCalls += 1;
          return { id: "cs_test", url: "https://checkout.stripe.test/session" };
        },
      },
    },
    {
      userId,
      body: {
        product: "task_batch",
        skill: "reading",
        language: "en",
        idempotencyKey: "44444444-4444-4444-8444-444444444444",
      },
    }
  );

  assert.equal(result.status, 409);
  assert.equal(result.body.unlocked, false);
  assert.equal(result.body.charged, false);
  assert.equal(result.body.url, undefined);
  assert.equal(stripeCalls, 0);
  assert.equal(store.state.orders.length, 0);
});

test("mocked Stripe test mode rejects a Price that is not the launch amount", async () => {
  const store = new MemoryLanguageStudyStore();
  let created = 0;
  const result = await handleCheckout(
    {
      ...deps(
        store,
        readLanguageStudyConfig({
          LANGUAGE_STUDY_PAYMENTS_ENABLED: "true",
          STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID: "price_batch",
          STRIPE_SECRET_KEY: "sk_test_example",
          LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET: "whsec_language",
        })
      ),
      stripe: {
        async retrievePrice() {
          return { currency: "usd", unitAmount: 100, recurring: false };
        },
        async createSession() {
          created += 1;
          return { id: "cs_wrong", url: "https://checkout.stripe.test/wrong" };
        },
      },
    },
    {
      userId,
      body: {
        product: "task_batch",
        skill: "reading",
        language: "en",
        amount: 100,
        idempotencyKey: "88888888-8888-4888-8888-888888888888",
      },
    }
  );

  assert.equal(result.status, 409);
  assert.equal(result.body.code, "price_mismatch");
  assert.equal(result.body.unlocked, false);
  assert.equal(result.body.charged, false);
  assert.equal(created, 0);
  assert.equal(store.state.orders.length, 0);
});

test("configured checkout reuses one session and the webhook grants once", async () => {
  const store = new MemoryLanguageStudyStore();
  const config = readLanguageStudyConfig({
    LANGUAGE_STUDY_PAYMENTS_ENABLED: "true",
    LANGUAGE_STUDY_CURRENCY: "eur",
    LANGUAGE_STUDY_BATCH_PRICE_MINOR: "500",
    LANGUAGE_STUDY_MOCK_PRICE_MINOR: "700",
    STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID: "price_batch",
    STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID: "price_mock",
    STRIPE_SECRET_KEY: "sk_test_example",
    LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET: "whsec_language",
  });
  let stripeCalls = 0;
  let seenAmount = 0;
  const service = {
    ...deps(store, config),
    stripe: {
      async retrievePrice() {
        return { currency: "usd", unitAmount: 499, recurring: false };
      },
      async createSession(input: { expectedAmountMinor: number; priceId: string }) {
        stripeCalls += 1;
        seenAmount = input.expectedAmountMinor;
        assert.equal(input.priceId, "price_mock");
        return { id: "cs_live_test", url: "https://checkout.stripe.test/once" };
      },
    },
  };
  const body = {
    product: "mock_test",
    skill: "listening",
    language: "fi",
    examVariant: "yki",
    amount: 1,
    idempotencyKey: "55555555-5555-4555-8555-555555555555",
  };
  const first = await handleCheckout(service, { userId, body });
  const second = await handleCheckout(service, { userId, body });

  assert.equal(first.status, 200);
  assert.equal(first.body.unlocked, false);
  assert.equal(first.body.url, "https://checkout.stripe.test/once");
  assert.equal(seenAmount, 499);
  assert.equal(second.body.reused, true);
  assert.equal(stripeCalls, 1);
  assert.equal(store.state.orders.length, 1);
  const bad = await handleWebhook(service, {
    rawBody: "{}",
    signature: "bad",
    secret: "whsec_language",
    constructEvent() {
      throw new Error("bad signature");
    },
  });

  assert.equal(bad.status, 400);
  assert.equal(bad.body.unlocked, false);
  assert.equal(practiceCreditBalance(store.state, userId, "listening", "fi"), 0);
  const order = store.state.orders[0];
  const paid = await handleWebhook(service, {
    rawBody: "{}",
    signature: "signed",
    secret: "whsec_language",
    constructEvent() {
      return {
        id: "evt_paid",
        type: "checkout.session.completed",
        session: {
          id: "cs_live_test",
          mode: "payment",
          paymentStatus: "paid",
          metadata: {
            kind: "language_study",
            orderId: order?.id,
            userId,
            product: "mock_test",
            skill: "listening",
            language: "fi",
            examVariant: "yki",
          },
        },
      };
    },
  });
  const replay = await handleWebhook(service, {
    rawBody: "{}",
    signature: "signed",
    secret: "whsec_language",
    constructEvent() {
      return {
        id: "evt_paid",
        type: "checkout.session.completed",
        session: {
          id: "cs_live_test",
          mode: "payment",
          paymentStatus: "paid",
          metadata: {
            kind: "language_study",
            orderId: order?.id,
            userId,
            product: "mock_test",
            skill: "listening",
            language: "fi",
            examVariant: "yki",
          },
        },
      };
    },
  });

  assert.equal(paid.body.granted, true);
  assert.equal(replay.body.duplicate, true);
  const balance = store.state.ledger
    .filter((entry) => entry.examVariant === "yki")
    .reduce((sum, entry) => sum + entry.amount, 0);

  assert.equal(balance, 1);
  const secondPurchase = await handleCheckout(service, {
    userId,
    body: { ...body, idempotencyKey: "66666666-6666-4666-8666-666666666666" },
  });

  assert.equal(secondPurchase.status, 409);
  assert.equal(secondPurchase.body.code, "already_entitled");
  assert.equal(stripeCalls, 1);
});

test("unavailable exam variants cannot be started or described as full mocks", () => {
  for (const variant of ["toefl", "pte"] as const) {
    const mock = findMock("writing", "en", variant);

    assert.ok(mock);
    assert.equal(mock.availability.status, "unavailable");
    assert.equal(mockQuestionCount(mock), 0);
    assert.equal(
      mockAccess({ mock, userId, storageReady: true, state: emptyStudyState(), now: now.getTime() }),
      "unavailable"
    );
  }

  const pteListening = findMock("listening", "en", "pte");

  assert.ok(pteListening && pteListening.availability.status === "unavailable");
  assert.match(pteListening.availability.reason, /not offered/);
  const ielts = findMock("reading", "en", "ielts");

  assert.ok(ielts);
  assert.match(ielts.scopeNote, /not an IELTS band/);
  assert.match(ielts.instructions.join(" "), /no band conversion/i);
  const yki = findMock("reading", "fi", "yki");

  assert.ok(yki);
  assert.match(yki.scopeNote, /ei YKI-tasoa/);
});

test("a late mock submission is unscored", () => {
  const created = createPendingOrder(emptyStudyState(), {
    userId,
    idempotencyKey: "77777777-7777-4777-8777-777777777777",
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    credits: 1,
    now,
    id: "late-order",
    blockIfEntitled: true,
    entitledTaskId: "mock-reading-en-ielts",
  });

  assert.equal(created.ok, true);
  if (!created.ok) {
    return;
  }

  const granted = fulfillOrder(created.state, {
    orderId: "late-order",
    eventId: "evt-late",
    sessionId: "cs-late",
    userId,
    product: "mock_test",
    skill: "reading",
    language: "en",
    examVariant: "ielts",
    paymentStatus: "paid",
    mode: "payment",
    now,
    ledgerId: "ledger-late",
  });

  assert.equal(granted.ok, true);
  if (!granted.ok) {
    return;
  }

  const opened = openPaidItem(granted.state, {
    userId,
    skill: "reading",
    language: "en",
    taskId: "mock-reading-en-ielts",
    mode: "mock",
    examVariant: "ielts",
    durationSeconds: 60,
    now,
    ids: { attemptId: "late-attempt", ledgerId: "late-use" },
  });

  assert.equal(opened.ok, true);
  if (!opened.ok) {
    return;
  }

  const late = saveMockSubmission(opened.state, {
    userId,
    taskId: "mock-reading-en-ielts",
    response: {},
    feedback: {
      scoringKind: "objective",
      correct: 4,
      total: 4,
      officialScore: null,
      examScore: null,
      label: "should not be stored",
      items: [],
    },
    scoreCorrect: 4,
    scoreTotal: 4,
    now: new Date(now.getTime() + 120_000),
  });

  assert.equal(late.ok, false);
  if (late.ok || late.reason !== "expired" || !late.attempt?.feedback) {
    assert.fail("expected an unscored expiry");
  }

  assert.equal(late.attempt.feedback.scoringKind, "unscored");
  assert.match(late.attempt.feedback.label, /not scored/);
  assert.equal(
    mockAccess({
      mock: findMock("reading", "en", "ielts")!,
      userId,
      storageReady: true,
      state: late.state ?? opened.state,
      now: now.getTime() + 120_000,
    }),
    "expired"
  );
});

test("hub, homepage, and navigation keep the italki speaking link exact", () => {
  const cards = languageStudyHubCards();
  const speaking = cards.find((card) => card.external);

  assert.deepEqual(
    cards.map((card) => card.title),
    ["Practice Reading", "Practice Writing", "Practice Listening", ITALKI_CTA_LABEL]
  );
  assert.equal(speaking?.href, ITALKI_AFFILIATE_URL);
  assert.equal(speaking?.rel, ITALKI_LINK_REL);
  assert.equal(ITALKI_AFFILIATE_URL, "https://www.italki.com/affshare?ref=af34116223");
  const home = readFileSync(new URL("../../app/page.tsx", import.meta.url), "utf8");

  assert.match(home, /LANGUAGE_STUDY_HREF/);
  assert.doesNotMatch(home, /italki\.com/);
  assert.ok(languageStudySitemapPaths().includes(LANGUAGE_STUDY_HREF));
  assert.ok(languageStudySitemapPaths().includes("/language-study/reading/fi"));
  assert.equal(
    practiceTaskAccess({
      task: { id: "reading-en-2", access: "free", skill: "reading", language: "en" },
      userId: null,
      storageReady: true,
      state: emptyStudyState(),
      freeCap: 3,
    }),
    "sign_in"
  );
});

test("client code does not import the answer bank or store entitlements in the browser", () => {
  const roots = [
    new URL("../../components/languageStudy", import.meta.url),
    new URL("../../app/language-study", import.meta.url),
    new URL(".", import.meta.url),
  ];
  const files = roots.flatMap((root) => walk(root.pathname));

  for (const file of files) {
    if (file.endsWith(".test.ts") || file.endsWith(".test.tsx")) {
      continue;
    }

    const source = readFileSync(file, "utf8");

    assert.doesNotMatch(source, /localStorage/);
    if (source.includes('"use client"') || source.includes("'use client'")) {
      assert.doesNotMatch(source, /languageStudy\/content|languageStudy\/grade|languageStudy\/ledger|languageStudy\/service/);
    }
  }
});

test("task form, result, and paywall expose accessible names and no answer key", () => {
  const task = findPracticeTask("reading-en-1");

  assert.ok(task && task.skill === "reading");
  const form = renderToStaticMarkup(
    createElement(AttemptForm, {
      task: toPublicReading(task),
      mode: "preview",
      preview: true,
    })
  );

  assert.match(form, /<form/);
  assert.match(form, /<fieldset/);
  assert.match(form, /<legend/);
  assert.match(form, /Submit answers/);
  assert.equal(form.includes("correctChoiceId"), false);
  assert.equal(form.includes("The first sentence says"), false);
  const result = renderToStaticMarkup(
    createElement(ResultPanel, {
      feedback: gradeQuestions(task.questions, { "reading-en-1-q1": "a" }, "reading"),
      previewNotice: "Preview result. It is not saved and does not use or enforce the free allowance.",
    })
  );

  assert.match(result, /aria-live="polite"/);
  assert.match(result, /not an official or certified score/);
  assert.match(result, /Matches the key|Does not match the key/);
  const paywall = renderToStaticMarkup(
    createElement(Paywall, {
      title: "Free practice allowance reached",
      message:
        "Purchase is not available yet. Nothing was charged, and no task or test was unlocked.",
      product: "task_batch",
      skill: "reading",
      language: "en",
      actionLabel: "Check task batch purchase",
      showPurchase: true,
    })
  );

  assert.match(paywall, /Free practice allowance reached/);
  assert.match(paywall, /Nothing was charged/);
  assert.match(paywall, /Check task batch purchase/);
  assert.equal(paywall.includes("unlocked\":true"), false);
});
