import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get(
    "stripe-signature"
  );

  if (!signature) {
    return NextResponse.json(
      {
        error: "Missing Stripe signature.",
      },
      { status: 400 }
    );
  }

  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error(
      "STRIPE_WEBHOOK_SECRET is not configured."
    );

    return NextResponse.json(
      {
        error: "Stripe webhook is not configured.",
      },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    // IMPORTANT:
    // Stripe signature verification requires the raw request body.
    const body = await request.text();

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error(
      "Stripe webhook signature verification failed:",
      error
    );

    return NextResponse.json(
      {
        error: "Invalid Stripe webhook signature.",
      },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      // ------------------------------------------------
      // Checkout completed
      // ------------------------------------------------

      case "checkout.session.completed": {
        const session =
          event.data.object as Stripe.Checkout.Session;

        if (session.mode !== "subscription") {
          break;
        }

        const consultantId =
          session.metadata?.consultantId;

        if (!consultantId) {
          console.error(
            "Checkout session is missing consultantId metadata."
          );
          break;
        }

        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id;

        if (!subscriptionId) {
          console.error(
            "Checkout session is missing subscription ID."
          );
          break;
        }

        // Retrieve the subscription directly from Stripe
        // so we have the authoritative subscription details.
        const subscription =
          await stripe.subscriptions.retrieve(
            subscriptionId
          );

        await updateConsultantSubscription(
          subscription,
          consultantId
        );

        break;
      }

      // ------------------------------------------------
      // Subscription changed
      // ------------------------------------------------

      case "customer.subscription.updated": {
        const subscription =
          event.data.object as Stripe.Subscription;

        const consultantId =
          subscription.metadata?.consultantId;

        if (consultantId) {
          await updateConsultantSubscription(
            subscription,
            consultantId
          );
        } else {
          await updateSubscriptionUsingStripeId(
            subscription
          );
        }

        break;
      }

      // ------------------------------------------------
      // Subscription deleted / cancelled
      // ------------------------------------------------

      case "customer.subscription.deleted": {
        const subscription =
          event.data.object as Stripe.Subscription;

        const consultantId =
          subscription.metadata?.consultantId;

        if (consultantId) {
          await deactivateConsultantPro(
            consultantId,
            subscription
          );
        } else {
          await deactivateSubscriptionUsingStripeId(
            subscription
          );
        }

        break;
      }

      // ------------------------------------------------
      // Successful recurring payment
      // ------------------------------------------------

      case "invoice.paid": {
        const invoice =
          event.data.object as Stripe.Invoice;

        const subscriptionId =
          getInvoiceSubscriptionId(invoice);

        if (!subscriptionId) {
          break;
        }

        const subscription =
          await stripe.subscriptions.retrieve(
            subscriptionId
          );

        const consultantId =
          subscription.metadata?.consultantId;

        if (consultantId) {
          await updateConsultantSubscription(
            subscription,
            consultantId
          );
        } else {
          await updateSubscriptionUsingStripeId(
            subscription
          );
        }

        break;
      }

      // ------------------------------------------------
      // Payment failed
      // ------------------------------------------------

      case "invoice.payment_failed": {
        const invoice =
          event.data.object as Stripe.Invoice;

        const subscriptionId =
          getInvoiceSubscriptionId(invoice);

        if (!subscriptionId) {
          break;
        }

        const subscription =
          await stripe.subscriptions.retrieve(
            subscriptionId
          );

        const consultantId =
          subscription.metadata?.consultantId;

        if (consultantId) {
          await supabaseAdmin
            .from("consultants")
            .update({
              stripe_subscription_status:
                subscription.status,
            })
            .eq("id", consultantId);
        } else {
          await supabaseAdmin
            .from("consultants")
            .update({
              stripe_subscription_status:
                subscription.status,
            })
            .eq(
              "stripe_subscription_id",
              subscription.id
            );
        }

        break;
      }

      default:
        // Other Stripe events don't require action here.
        break;
    }

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error(
      "Stripe webhook processing error:",
      error
    );

    return NextResponse.json(
      {
        error: "Webhook processing failed.",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// Update consultant from Stripe subscription
// ======================================================

async function updateConsultantSubscription(
  subscription: Stripe.Subscription,
  consultantId: string
) {
  const priceId =
    subscription.items.data[0]?.price?.id;

  const plan =
    subscription.metadata?.plan ||
    getPlanFromPriceId(priceId);

  const isActive =
    subscription.status === "active" ||
    subscription.status === "trialing";

  const subscriptionData =
  subscription as Stripe.Subscription & {
    current_period_end?: number | null;
    current_period_start?: number | null;
  };

const currentPeriodEnd =
  subscriptionData.current_period_end
    ? new Date(
        subscriptionData.current_period_end * 1000
      ).toISOString()
    : null;

const currentPeriodStart =
  subscriptionData.current_period_start
    ? new Date(
        subscriptionData.current_period_start * 1000
      ).toISOString()
    : new Date().toISOString();

  const customerId =
    typeof subscription.customer === "string"
      ? subscription.customer
      : subscription.customer.id;

  const { error } = await supabaseAdmin
    .from("consultants")
    .update({
      is_pro: isActive,

      pro_plan: plan,

      pro_started_at: currentPeriodStart,

      pro_expires_at: currentPeriodEnd,

      stripe_customer_id: customerId,

      stripe_subscription_id:
        subscription.id,

      stripe_price_id: priceId ?? null,

      stripe_subscription_status:
        subscription.status,

      pro_cancelled_at:
        subscription.cancel_at_period_end
          ? new Date().toISOString()
          : null,
    })
    .eq("id", consultantId);

  if (error) {
    console.error(
      "Update consultant subscription error:",
      error
    );

    throw error;
  }

  console.log(
    `Consultant ${consultantId} subscription updated:`,
    {
      status: subscription.status,
      plan,
      isActive,
      subscriptionId: subscription.id,
    }
  );
}

// ======================================================
// Find consultant by Stripe subscription ID
// ======================================================

async function updateSubscriptionUsingStripeId(
  subscription: Stripe.Subscription
) {
  const { data: consultant, error } =
    await supabaseAdmin
      .from("consultants")
      .select("id")
      .eq(
        "stripe_subscription_id",
        subscription.id
      )
      .maybeSingle();

  if (error) {
    console.error(
      "Find consultant by Stripe subscription error:",
      error
    );

    throw error;
  }

  if (!consultant) {
    console.error(
      "No consultant found for Stripe subscription:",
      subscription.id
    );

    return;
  }

  await updateConsultantSubscription(
    subscription,
    consultant.id
  );
}

// ======================================================
// Deactivate Pro
// ======================================================

async function deactivateConsultantPro(
  consultantId: string,
  subscription: Stripe.Subscription
) {
  const { error } = await supabaseAdmin
    .from("consultants")
    .update({
      is_pro: false,

      stripe_subscription_status:
        subscription.status,

      pro_cancelled_at:
        new Date().toISOString(),

      pro_expires_at:
        subscription.ended_at
          ? new Date(
              subscription.ended_at * 1000
            ).toISOString()
          : new Date().toISOString(),
    })
    .eq("id", consultantId);

  if (error) {
    console.error(
      "Deactivate consultant Pro error:",
      error
    );

    throw error;
  }

  console.log(
    `Consultant ${consultantId} Pro subscription ended.`
  );
}

// ======================================================
// Deactivate using subscription ID
// ======================================================

async function deactivateSubscriptionUsingStripeId(
  subscription: Stripe.Subscription
) {
  const { data: consultant, error } =
    await supabaseAdmin
      .from("consultants")
      .select("id")
      .eq(
        "stripe_subscription_id",
        subscription.id
      )
      .maybeSingle();

  if (error) {
    console.error(
      "Find consultant for cancellation error:",
      error
    );

    throw error;
  }

  if (!consultant) {
    console.error(
      "No consultant found for cancelled subscription:",
      subscription.id
    );

    return;
  }

  await deactivateConsultantPro(
    consultant.id,
    subscription
  );
}

// ======================================================
// Invoice → subscription ID
// ======================================================

function getInvoiceSubscriptionId(
  invoice: Stripe.Invoice
): string | null {
  const invoiceAny =
    invoice as Stripe.Invoice & {
      subscription?: string | Stripe.Subscription | null;
    };

  const subscription =
    invoiceAny.subscription;

  if (!subscription) {
    return null;
  }

  return typeof subscription === "string"
    ? subscription
    : subscription.id;
}

// ======================================================
// Determine plan from Price ID
// ======================================================

function getPlanFromPriceId(
  priceId?: string
): string | null {
  if (
    priceId ===
    process.env.STRIPE_MONTHLY_PRICE_ID
  ) {
    return "monthly";
  }

  if (
    priceId ===
    process.env.STRIPE_YEARLY_PRICE_ID
  ) {
    return "annual";
  }

  return null;
}