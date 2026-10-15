"use client";

import { openCookieSettings } from "@/components/CookieConsent";

export default function CookieSettingsButton({
  className,
  children = "Cookie settings",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      {children}
    </button>
  );
}
