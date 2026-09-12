import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    // --------------------------------------------------
    // 1. Get the user's Supabase access token
    // --------------------------------------------------

    const authorization = request.headers.get("authorization");

    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          error: "You must be logged in to subscribe to MatchMyStudy Pro.",
        },
        { status: 401 }
      );
    }

    const accessToken = authorization.replace("Bearer ", "");

    // --------------------------------------------------
    // 2. Verify the Supabase user
    // --------------------------------------------------

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(accessToken);

    if (userError || !user) {
      console.error("Stripe checkout authentication error:", userError);

      return NextResponse.json(
        {
          error: "Your login session is invalid or has expired.",
        },
        { status: 401 }
      );
    }

    // --------------------------------------------------
    // 3. Read the requested consultant and plan
    // --------------------------------------------------

    const body = await request.json();

    const slug = body?.slug;
    const plan = body?.plan;

    if (!slug || !plan) {
      return NextResponse.json(
        {
          error: "Consultant and subscription plan are required.",
        },
        { status: 400 }
      );
    }

    if (plan !== "monthly" && plan !== "annual") {
      return NextResponse.json(
        {
          error: "Invalid subscription plan.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 4. Decide the Stripe Price ID on the SERVER
    // --------------------------------------------------

    const priceId =
      plan === "monthly"
        ? process.env.STRIPE_MONTHLY_PRICE_ID
        : process.env.STRIPE_YEARLY_PRICE_ID;

    if (!priceId) {
      console.error(
        `Stripe Price ID missing for plan: ${plan}`
      );

      return NextResponse.json(
        {
          error: "Stripe subscription pricing is not configured.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // 5. Find the consultant
    // --------------------------------------------------

    const {
      data: consultant,
      error: consultantError,
    } = await supabase
      .from("consultants")
      .select(
  `
    id,
    slug,
    name,
    email,
    owner_id,
    claimed,
    created_by_consultant,
    is_pro,
    stripe_customer_id,
    stripe_subscription_id
  `
)
      .eq("slug", slug)
      .maybeSingle();

    if (consultantError) {
      console.error(
        "Get consultant for Stripe checkout error:",
        consultantError
      );

      return NextResponse.json(
        {
          error: "Unable to find the consultant profile.",
        },
        { status: 500 }
      );
    }

    if (!consultant) {
      return NextResponse.json(
        {
          error: "Consultant profile not found.",
        },
        { status: 404 }
      );
    }

    // --------------------------------------------------
    // 6. Make sure this user owns the consultant profile
    // --------------------------------------------------

    if (consultant.owner_id !== user.id) {
      return NextResponse.json(
        {
          error:
            "You are not authorized to manage this consultant profile.",
        },
        { status: 403 }
      );
    }

    // --------------------------------------------------
// 7. Check whether the profile is eligible for Pro
// --------------------------------------------------
//
// Consultant-created profiles already belong to their owner,
// so they do not need to go through the claim process.
//
// MatchMyStudy-created profiles must be claimed first.

const canPurchasePro =
  consultant.created_by_consultant === true ||
  consultant.claimed === true;

if (!canPurchasePro) {
  return NextResponse.json(
    {
      error:
        "This consultant profile must be claimed and approved before purchasing Pro.",
    },
    { status: 403 }
  );
}

    // --------------------------------------------------
    // 8. Prevent duplicate active subscriptions
    // --------------------------------------------------

    if (
      consultant.is_pro &&
      consultant.stripe_subscription_id
    ) {
      return NextResponse.json(
        {
          error:
            "This consultant profile already has an active Pro subscription.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 9. Create or reuse the Stripe Customer
    // --------------------------------------------------

    let customerId = consultant.stripe_customer_id;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email ?? consultant.email ?? undefined,
        name: consultant.name ?? undefined,

        metadata: {
          consultantId: consultant.id,
          consultantSlug: consultant.slug,
          ownerId: user.id,
        },
      });

      customerId = customer.id;

      // Save the Stripe Customer ID
      const { error: customerUpdateError } =
        await supabase
          .from("consultants")
          .update({
            stripe_customer_id: customerId,
          })
          .eq("id", consultant.id);

      if (customerUpdateError) {
        console.error(
          "Save Stripe customer ID error:",
          customerUpdateError
        );

        // Remove the newly created Stripe customer
        // reference from our flow if the database update fails.
        return NextResponse.json(
          {
            error:
              "Unable to connect the Stripe customer to your consultant profile.",
          },
          { status: 500 }
        );
      }
    }

    // --------------------------------------------------
    // 10. Create Stripe Checkout Session
    // --------------------------------------------------

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.matchmystudy.com";

    const checkoutSession =
      await stripe.checkout.sessions.create({
        mode: "subscription",

        customer: customerId,

        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],

        success_url:
          `${siteUrl}/consultants/${encodeURIComponent(
            consultant.slug
          )}?subscription=success`,

        cancel_url:
          `${siteUrl}/consultants/upgrade/${encodeURIComponent(
            consultant.slug
          )}?subscription=cancelled`,

        client_reference_id: consultant.id,

        metadata: {
          consultantId: consultant.id,
          consultantSlug: consultant.slug,
          ownerId: user.id,
          plan,
        },

        subscription_data: {
          metadata: {
            consultantId: consultant.id,
            consultantSlug: consultant.slug,
            ownerId: user.id,
            plan,
          },
        },
      });

    // --------------------------------------------------
    // 11. Return Checkout URL to the browser
    // --------------------------------------------------

    if (!checkoutSession.url) {
      return NextResponse.json(
        {
          error:
            "Stripe did not return a Checkout URL.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: checkoutSession.url,
    });
  } catch (error) {
    console.error(
      "Create Stripe Checkout Session error:",
      error
    );

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        {
          error:
            error.message ||
            "Stripe was unable to create the checkout session.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Something went wrong while creating the checkout session.",
      },
      { status: 500 }
    );
  }
}