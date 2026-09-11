"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type UpgradeButtonProps = {
  slug: string;
  plan: "monthly" | "annual";
  children: React.ReactNode;
  className?: string;
};

export default function UpgradeButton({
  slug,
  plan,
  children,
  className = "",
}: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (loading) return;

    try {
      setLoading(true);

      // Get the current Supabase session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        alert("Please log in before subscribing to MatchMyStudy Pro.");
        setLoading(false);
        return;
      }

      // Call our secure server-side Stripe Checkout API
      const response = await fetch(
        "/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            slug,
            plan,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to start the Stripe checkout."
        );
      }

      if (!data?.url) {
        throw new Error(
          "Stripe did not return a checkout URL."
        );
      }

      // Redirect to Stripe-hosted Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Stripe checkout error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={`${className} ${
        loading
          ? "cursor-not-allowed opacity-70"
          : ""
      }`}
    >
      {loading ? "Opening Checkout..." : children}
    </button>
  );
}