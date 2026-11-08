import { serviceDeps } from "@/lib/languageStudy/context";
import { handleWebhook, type WebhookEvent } from "@/lib/languageStudy/service";
import { getStripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import type Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = process.env.LANGUAGE_STUDY_STRIPE_WEBHOOK_SECRET?.trim() || null;
  const stripe = getStripe();
  const rawBody = await request.text();
  const result = await handleWebhook(serviceDeps(), {
    rawBody,
    signature: request.headers.get("stripe-signature"),
    secret: secret && stripe ? secret : secret && !stripe ? null : secret,
    constructEvent: (body, signature, webhookSecret) => {
      if (!stripe) {
        throw new Error("Stripe is not configured.");
      }

      const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

      if (event.type !== "checkout.session.completed") {
        return { id: event.id, type: event.type };
      }

      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata ?? {};
      const mapped: WebhookEvent = {
        id: event.id,
        type: event.type,
        session: {
          id: session.id,
          mode: session.mode ?? "",
          paymentStatus: session.payment_status ?? "",
          metadata,
        },
      };

      return mapped;
    },
  });

  return NextResponse.json(result.body, { status: result.status });
}
