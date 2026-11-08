import { bearerToken } from "@/lib/account/session";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { getStripe } from "@/lib/stripe";
import { readLanguageStudyConfig } from "./config";
import type { ServiceDeps } from "./service";
import { getLanguageStudyStore } from "./supabaseStore";
import { emptyStudyState, type StudyState } from "./types";

export async function loadStudyContext(): Promise<{
  userId: string | null;
  state: StudyState;
  storageReady: boolean;
}> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { userId: null, state: emptyStudyState(), storageReady: true };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      return { userId: null, state: emptyStudyState(), storageReady: true };
    }

    const loaded = await getLanguageStudyStore().load(data.user.id);

    if (!loaded.ok) {
      return { userId: data.user.id, state: emptyStudyState(), storageReady: false };
    }

    return { userId: data.user.id, state: loaded.state, storageReady: true };
  } catch {
    return { userId: null, state: emptyStudyState(), storageReady: true };
  }
}

export async function readOptionalUser(request: Request): Promise<
  | { ok: true; userId: string | null }
  | { ok: false; status: number; message: string }
> {
  const token = bearerToken(request);

  if (!token) {
    return { ok: true, userId: null };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return {
      ok: false,
      status: 503,
      message: "Sign-in is not configured. Nothing was saved or unlocked.",
    };
  }

  const client = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await client.auth.getUser(token);

  if (error || !data.user) {
    return {
      ok: false,
      status: 401,
      message: "Your login session has expired. Sign in again.",
    };
  }

  return { ok: true, userId: data.user.id };
}

export function serviceDeps(): ServiceDeps {
  const stripe = getStripe();

  return {
    config: readLanguageStudyConfig(process.env),
    store: getLanguageStudyStore(),
    now: () => new Date(),
    ids: () => ({
      attemptId: crypto.randomUUID(),
      ledgerId: crypto.randomUUID(),
      orderId: crypto.randomUUID(),
    }),
    stripe: stripe
      ? {
          async retrievePrice(priceId: string) {
            const price = await stripe.prices.retrieve(priceId);

            return {
              currency: price.currency,
              unitAmount: price.unit_amount,
              recurring: Boolean(price.recurring),
            };
          },
          async createSession(input) {
            const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matchmystudy.com";
            const session = await stripe.checkout.sessions.create(
              {
                mode: "payment",
                line_items: [{ price: input.priceId, quantity: 1 }],
                success_url: `${site}/language-study/${input.skill}/${input.language}?purchase=pending`,
                cancel_url: `${site}/language-study/${input.skill}/${input.language}?purchase=cancelled`,
                client_reference_id: input.orderId,
                metadata: {
                  kind: "language_study",
                  orderId: input.orderId,
                  userId: input.userId,
                  product: input.product,
                  skill: input.skill,
                  language: input.language,
                  examVariant: input.examVariant ?? "",
                },
              },
              { idempotencyKey: input.idempotencyKey }
            );

            if (!session.url) {
              throw new Error("Stripe did not return a Checkout URL.");
            }

            return { id: session.id, url: session.url };
          },
        }
      : null,
  };
}
