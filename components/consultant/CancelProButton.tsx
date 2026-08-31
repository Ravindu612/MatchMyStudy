"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cancelConsultantPro } from "@/lib/consultantService";

type Props = {
  consultantId: string;
};

export default function CancelProButton({
  consultantId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleCancel() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel your Pro subscription?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      await cancelConsultantPro(
        consultantId
      );

      router.push(
        `/consultants/${window.location.pathname.split("/").pop()}`
      );

      router.refresh();

    } catch (error) {
      console.error(
        "Cancel Pro error:",
        error
      );

      alert(
        "Could not cancel the Pro subscription. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCancel}
      disabled={loading}
      className="rounded-xl border border-red-200 bg-red-50 px-6 py-3 font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Cancelling..."
        : "Cancel Pro Subscription"}
    </button>
  );
}