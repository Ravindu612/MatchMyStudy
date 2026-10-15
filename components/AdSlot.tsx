"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT } from "@/lib/consentConfig";

/**
 * Manual AdSense unit. Renders nothing unless the page is allowed to
 * show ads and NEXT_PUBLIC_ADSENSE_SLOT is set. Thin pages pass
 * allowAds={false}, so no slot is rendered there. Auto ads on those
 * pages are paused in the head script.
 */
export default function AdSlot({
  allowAds,
  className = "",
}: {
  allowAds: boolean;
  className?: string;
}) {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

  useEffect(() => {
    if (!allowAds || !slot) return;

    const queue = (window.adsbygoogle ||=
      [] as unknown as NonNullable<Window["adsbygoogle"]>);

    try {
      queue.push({});
    } catch {
      // A second push during fast refresh throws; the unit is already requested.
    }
  }, [allowAds, slot]);

  if (!allowAds || !slot) return null;

  return (
    <aside aria-label="Advertisement" className={className}>
      <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
