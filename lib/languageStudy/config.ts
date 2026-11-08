/**
 * Language Study product settings.
 *
 * This file is the only place that defines the provisional free allowance,
 * the paid batch size, prices, and whether checkout can run.
 *
 * The owner has not chosen prices, currency, the lasting free allowance, the
 * full language list, or a payment setup for this feature. The defaults below
 * are provisional: 3 submitted tasks per skill and language, a batch size of 1
 * (the library currently withholds one extra task per skill and language),
 * prices unset, and payments off.
 *
 * Optional environment overrides:
 * - LANGUAGE_STUDY_FREE_TASKS — integer 0 through 20
 * - LANGUAGE_STUDY_BATCH_SIZE — integer 1 through 50
 * - LANGUAGE_STUDY_CURRENCY — usd, eur, or gbp
 * - LANGUAGE_STUDY_BATCH_PRICE_MINOR — integer minor units, such as cents
 * - LANGUAGE_STUDY_MOCK_PRICE_MINOR — integer minor units
 * - STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID
 * - STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID
 * - LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET — dedicated endpoint secret
 * - LANGUAGE_STUDY_PAYMENTS_ENABLED — must be the exact string "true"
 *
 * Checkout stays off unless payments are explicitly enabled and currency,
 * price, Stripe Price id, STRIPE_SECRET_KEY, and the webhook secret are all
 * set. A task-batch purchase also stays off when the batch is larger than the
 * withheld tasks currently in the library. The existing consultant Stripe
 * secret does not, by itself, turn on language-study charges.
 */

export const PROVISIONAL_FREE_TASKS = 3;
export const PROVISIONAL_BATCH_SIZE = 1;
export const FREE_TASK_CAP_LIMIT = 20;
export const BATCH_SIZE_LIMIT = 50;

export const CURRENCIES = ["usd", "eur", "gbp"] as const;
export type StudyCurrency = (typeof CURRENCIES)[number];

export type LanguageStudyConfig = {
  /** True while the owner has not confirmed the allowance and prices. */
  provisional: true;
  freeTasksPerSkillPerLanguage: number;
  paidBatchSize: number;
  currency: StudyCurrency | null;
  taskBatchPriceMinor: number | null;
  mockPriceMinor: number | null;
  stripeTaskBatchPriceId: string | null;
  stripeMockPriceId: string | null;
  stripeSecretConfigured: boolean;
  webhookSecretConfigured: boolean;
  paymentsEnabledFlag: boolean;
};

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

function positiveInteger(value: string | undefined): number | null {
  if (!value || !/^\d+$/.test(value.trim())) {
    return null;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }

  return parsed;
}

function currency(value: string | undefined): StudyCurrency | null {
  const normalized = value?.trim().toLowerCase();

  if (normalized === "usd" || normalized === "eur" || normalized === "gbp") {
    return normalized;
  }

  return null;
}

function clean(value: string | undefined): string | null {
  const trimmed = value?.trim() ?? "";

  return trimmed.length > 0 ? trimmed : null;
}

export function readLanguageStudyConfig(
  env: Record<string, string | undefined>
): LanguageStudyConfig {
  return {
    provisional: true,
    freeTasksPerSkillPerLanguage: integerInRange(
      env.LANGUAGE_STUDY_FREE_TASKS,
      PROVISIONAL_FREE_TASKS,
      0,
      FREE_TASK_CAP_LIMIT
    ),
    paidBatchSize: integerInRange(
      env.LANGUAGE_STUDY_BATCH_SIZE,
      PROVISIONAL_BATCH_SIZE,
      1,
      BATCH_SIZE_LIMIT
    ),
    currency: currency(env.LANGUAGE_STUDY_CURRENCY),
    taskBatchPriceMinor: positiveInteger(env.LANGUAGE_STUDY_BATCH_PRICE_MINOR),
    mockPriceMinor: positiveInteger(env.LANGUAGE_STUDY_MOCK_PRICE_MINOR),
    stripeTaskBatchPriceId: clean(env.STRIPE_LANGUAGE_STUDY_BATCH_PRICE_ID),
    stripeMockPriceId: clean(env.STRIPE_LANGUAGE_STUDY_MOCK_PRICE_ID),
    stripeSecretConfigured: Boolean(clean(env.STRIPE_SECRET_KEY)),
    webhookSecretConfigured: Boolean(clean(env.LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET)),
    paymentsEnabledFlag: env.LANGUAGE_STUDY_PAYMENTS_ENABLED === "true",
  };
}

export const PAYMENT_NOT_READY_MESSAGE =
  "Purchase is not available yet. Prices have not been set and payments are not turned on. Nothing was charged, and no task or test was unlocked.";

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

  if (!config.paymentsEnabledFlag) {
    return {
      available: false,
      code: "payments_disabled",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
  }

  if (!config.currency) {
    return {
      available: false,
      code: "currency_unset",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
  }

  const priceMinor =
    product === "task_batch" ? config.taskBatchPriceMinor : config.mockPriceMinor;
  const stripePriceId =
    product === "task_batch"
      ? config.stripeTaskBatchPriceId
      : config.stripeMockPriceId;

  if (priceMinor === null) {
    return {
      available: false,
      code: "price_unset",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
  }

  if (!stripePriceId) {
    return {
      available: false,
      code: "stripe_price_missing",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
  }

  if (!config.stripeSecretConfigured) {
    return {
      available: false,
      code: "stripe_secret_missing",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
  }

  if (!config.webhookSecretConfigured) {
    return {
      available: false,
      code: "webhook_secret_missing",
      message: PAYMENT_NOT_READY_MESSAGE,
    };
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
