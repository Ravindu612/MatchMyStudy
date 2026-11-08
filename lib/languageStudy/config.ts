/**
 * Language Study product settings.
 *
 * Launch prices were set by the owner on 8 Nov 2026 for this initial stage.
 * They are introductory prices the owner asked the implementation to choose
 * and then confirmed. They are not a market survey.
 *
 * - Currency is USD only.
 * - USD 1.99 (199 cents) buys 10 additional practice tasks in one skill and
 *   one language. One-time. Not a subscription.
 * - USD 4.99 (499 cents) buys one attempt at one short unofficial practice
 *   test for the selected language, skill, and exam style. Not a full exam.
 * - The free allowance remains 3 submitted tasks per skill and language.
 *
 * Amounts are constants. The browser cannot send a price. Env vars cannot
 * change 199 or 499. Checkout still does not run until Stripe Price ids,
 * the secret key, the language-study webhook secret, and
 * LANGUAGE_STUDY_PAYMENTS_ENABLED=true are present, and the Stripe Price
 * object matches these amounts. Creating those Stripe prices is a separate
 * owner step. This code does not create products or charge anyone.
 *
 * Optional environment values:
 * - LANGUAGE_STUDY_FREE_TASKS — integer 0 through 20, default 3
 * - STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID
 * - STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID
 * - LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET
 * - LANGUAGE_STUDY_PAYMENTS_ENABLED — exact string "true"
 * - STRIPE_SECRET_KEY — existing server secret; it does not by itself enable
 *   language-study checkout
 */

export const PROVISIONAL_FREE_TASKS = 3;
export const TASK_BATCH_SIZE = 10;
export const TASK_BATCH_PRICE_MINOR = 199;
export const MOCK_PRICE_MINOR = 499;
export const LAUNCH_CURRENCY = "usd" as const;
export const FREE_TASK_CAP_LIMIT = 20;
export const CURRENCIES = ["usd"] as const;
export type StudyCurrency = (typeof CURRENCIES)[number];

export type LanguageStudyConfig = {
  /** Free allowance remains the launch value of 3 unless LANGUAGE_STUDY_FREE_TASKS overrides it. */
  freeTasksPerSkillPerLanguage: number;
  paidBatchSize: typeof TASK_BATCH_SIZE;
  currency: typeof LAUNCH_CURRENCY;
  taskBatchPriceMinor: typeof TASK_BATCH_PRICE_MINOR;
  mockPriceMinor: typeof MOCK_PRICE_MINOR;
  stripeTaskBatchPriceId: string | null;
  stripeMockPriceId: string | null;
  stripeSecretConfigured: boolean;
  webhookSecretConfigured: boolean;
  paymentsEnabledFlag: boolean;
};

export const TAX_NOTE =
  "MatchMyStudy does not add tax and does not turn on Stripe Tax. The total for this checkout is the one-time price shown here. No subscription is created and the purchase does not renew. If a card payment page shows another figure, that is not a tax rate configured in this app.";

export function formatUsd(minor: number): string {
  const dollars = Math.floor(minor / 100);
  const cents = String(minor % 100).padStart(2, "0");

  return `USD ${dollars}.${cents}`;
}

export function productOffer(product: "task_batch" | "mock_test"): string {
  if (product === "task_batch") {
    return `${formatUsd(TASK_BATCH_PRICE_MINOR)} buys ${TASK_BATCH_SIZE} additional practice tasks in this one skill and language. Each credit opens one paid task that is not part of the free ${PROVISIONAL_FREE_TASKS}.`;
  }

  return `${formatUsd(MOCK_PRICE_MINOR)} buys one attempt at this short unofficial practice test. The page states how many items it has and how many minutes it runs. It is not a full public exam and it is not an official score.`;
}

export type PurchaseBlockCode =
  | "payments_disabled"
  | "price_unset"
  | "currency_unset"
  | "stripe_price_missing"
  | "stripe_secret_missing"
  | "webhook_secret_missing"
  | "library_smaller_than_batch"
  | "variant_unavailable";

export type PurchaseAssessment =
  | {
      available: false;
      code: PurchaseBlockCode;
      message: string;
    }
  | {
      available: true;
      currency: StudyCurrency;
      priceMinor: number;
      stripePriceId: string;
      credits: number;
    };

function integerInRange(
  value: string | undefined,
  fallback: number,
  min: number,
  max: number
): number {
  if (value === undefined || value.trim() === "") {
    return fallback;
  }

  if (!/^\d+$/.test(value.trim())) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    return fallback;
  }

  return parsed;
}

function clean(value: string | undefined): string | null {
  const trimmed = value?.trim() ?? "";

  return trimmed.length > 0 ? trimmed : null;
}

export function readLanguageStudyConfig(
  env: Record<string, string | undefined>
): LanguageStudyConfig {
  return {
    freeTasksPerSkillPerLanguage: integerInRange(
      env.LANGUAGE_STUDY_FREE_TASKS,
      PROVISIONAL_FREE_TASKS,
      0,
      FREE_TASK_CAP_LIMIT
    ),
    paidBatchSize: TASK_BATCH_SIZE,
    currency: LAUNCH_CURRENCY,
    taskBatchPriceMinor: TASK_BATCH_PRICE_MINOR,
    mockPriceMinor: MOCK_PRICE_MINOR,
    stripeTaskBatchPriceId: clean(env.STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID),
    stripeMockPriceId: clean(env.STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID),
    stripeSecretConfigured: Boolean(clean(env.STRIPE_SECRET_KEY)),
    webhookSecretConfigured: Boolean(clean(env.LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET)),
    paymentsEnabledFlag: env.LANGUAGE_STUDY_PAYMENTS_ENABLED === "true",
  };
}

export function checkoutNotConnectedMessage(product: "task_batch" | "mock_test"): string {
  return `${productOffer(product)} ${TAX_NOTE} Checkout is not connected yet, so nothing was charged and nothing was unlocked.`;
}

export function assessPurchase(
  config: LanguageStudyConfig,
  product: "task_batch" | "mock_test",
  options: { lockedPracticeTasks: number; variantAvailable?: boolean }
): PurchaseAssessment {
  if (product === "mock_test" && options.variantAvailable === false) {
    return {
      available: false,
      code: "variant_unavailable",
      message:
        "This test variant is not available. It cannot be purchased or started.",
    };
  }

  const priceMinor =
    product === "task_batch" ? config.taskBatchPriceMinor : config.mockPriceMinor;
  const stripePriceId =
    product === "task_batch"
      ? config.stripeTaskBatchPriceId
      : config.stripeMockPriceId;
  const blocked = checkoutNotConnectedMessage(product);

  if (!config.paymentsEnabledFlag) {
    return { available: false, code: "payments_disabled", message: blocked };
  }

  if (config.currency !== "usd" || (priceMinor !== 199 && priceMinor !== 499)) {
    return {
      available: false,
      code: "price_unset",
      message: "The server price is not the launch USD amount. Nothing was charged.",
    };
  }

  if (product === "task_batch" && priceMinor !== TASK_BATCH_PRICE_MINOR) {
    return {
      available: false,
      code: "price_unset",
      message: "The task batch price is not USD 1.99. Nothing was charged.",
    };
  }

  if (product === "mock_test" && priceMinor !== MOCK_PRICE_MINOR) {
    return {
      available: false,
      code: "price_unset",
      message: "The practice test price is not USD 4.99. Nothing was charged.",
    };
  }

  if (!stripePriceId) {
    return { available: false, code: "stripe_price_missing", message: blocked };
  }

  if (!config.stripeSecretConfigured) {
    return { available: false, code: "stripe_secret_missing", message: blocked };
  }

  if (!config.webhookSecretConfigured) {
    return { available: false, code: "webhook_secret_missing", message: blocked };
  }

  if (product === "task_batch" && options.lockedPracticeTasks < config.paidBatchSize) {
    return {
      available: false,
      code: "library_smaller_than_batch",
      message:
        "Purchase is not available yet. The extra task library is smaller than the configured batch, so checkout stays off. Nothing was charged, and no task was unlocked.",
    };
  }

  return {
    available: true,
    currency: config.currency,
    priceMinor,
    stripePriceId,
    credits: product === "task_batch" ? config.paidBatchSize : 1,
  };
}
