import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // ------------------------------------------------
    // Get authentication token
    // ------------------------------------------------

    const authorization =
      request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          error: "You must be logged in.",
        },
        { status: 401 }
      );
    }

    const accessToken =
      authorization.replace("Bearer ", "");

    if (!accessToken) {
      return NextResponse.json(
        {
          error: "Missing access token.",
        },
        { status: 401 }
      );
    }

    // ------------------------------------------------
    // Verify the logged-in user with Supabase
    // ------------------------------------------------

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(
      accessToken
    );

    if (userError || !user) {
      console.error(
        "Cancel subscription authentication error:",
        userError
      );

      return NextResponse.json(
        {
          error: "Invalid or expired login session.",
        },
        { status: 401 }
      );
    }

    // ------------------------------------------------
    // Get consultant ID from request
    // ------------------------------------------------

    const body = await request.json();

    const consultantId =
      body?.consultantId;

    if (!consultantId) {
      return NextResponse.json(
        {
          error: "Consultant ID is required.",
        },
        { status: 400 }
      );
    }

    // ------------------------------------------------
    // Find consultant and verify ownership
    // ------------------------------------------------

    const { data: consultant, error: consultantError } =
      await supabaseAdmin
        .from("consultants")
        .select(
          "id, owner_id, stripe_subscription_id, stripe_subscription_status"
        )
        .eq("id", consultantId)
        .single();

    if (consultantError || !consultant) {
      console.error(
        "Find consultant for cancellation error:",
        consultantError
      );

      return NextResponse.json(
        {
          error: "Consultant profile not found.",
        },
        { status: 404 }
      );
    }

    // ------------------------------------------------
    // Security check:
    // The logged-in user must own this consultant.
    // ------------------------------------------------

    if (consultant.owner_id !== user.id) {
      console.error(
        "Unauthorized cancellation attempt:",
        {
          userId: user.id,
          consultantId,
        }
      );

      return NextResponse.json(
        {
          error:
            "You are not authorized to cancel this subscription.",
        },
        { status: 403 }
      );
    }

    // ------------------------------------------------
    // Check Stripe subscription ID
    // ------------------------------------------------

    const subscriptionId =
      consultant.stripe_subscription_id;

    if (!subscriptionId) {
      return NextResponse.json(
        {
          error:
            "No Stripe subscription was found for this consultant.",
        },
        { status: 400 }
      );
    }

    // ------------------------------------------------
    // Check current Stripe subscription
    // ------------------------------------------------

    const subscription =
      await stripe.subscriptions.retrieve(
        subscriptionId
      );

    if (
      subscription.status === "canceled"
    ) {
      return NextResponse.json({
        success: true,
        message:
          "The Stripe subscription is already cancelled.",
      });
    }

    // ------------------------------------------------
    // Cancel at the end of the current period
    // ------------------------------------------------

    const updatedSubscription =
      await stripe.subscriptions.update(
        subscriptionId,
        {
          cancel_at_period_end: true,
        }
      );

    console.log(
      "Stripe subscription scheduled for cancellation:",
      {
        consultantId,
        subscriptionId,
        cancelAtPeriodEnd:
          updatedSubscription.cancel_at_period_end,
      }
    );

    // ------------------------------------------------
    // IMPORTANT:
    // Do not manually set is_pro = false here.
    //
    // Stripe will send customer.subscription.updated.
    // The existing webhook will update Supabase.
    // ------------------------------------------------

    const subscriptionData =
  updatedSubscription as Stripe.Subscription & {
    current_period_end?: number | null;
  };

return NextResponse.json({
  success: true,
  cancelAtPeriodEnd:
    updatedSubscription.cancel_at_period_end,
  currentPeriodEnd:
    subscriptionData.current_period_end ?? null,
});
  } catch (error) {
    console.error(
      "Stripe cancellation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Could not schedule the subscription cancellation.",
      },
      { status: 500 }
    );
  }
}