"use client";

import Image from "next/image";
import { useState } from "react";

type UniversityLogoProps = {
  name: string;
  src?: string | null;
  /**
   * Cards keep a 64×64 slot. The profile hero is shorter on small screens
   * and wider on desktop, matching the previous hero logo size.
   */
  variant?: "card" | "hero";
  /** Shown under the hero mark when the license requires attribution. */
  credit?: string | null;
};

const BOX = {
  card: "h-16 w-16",
  hero: "h-10 w-16 md:h-20 md:w-28",
} as const;

const SIZES = {
  card: "64px",
  hero: "(max-width: 768px) 64px, 112px",
} as const;

function initials(name: string) {
  const skip = new Set(["of", "the", "and", "de", "di", "for", "at", "in"]);
  const letters = name
    .split(/[^A-Za-z0-9]+/)
    .filter((word) => word && !skip.has(word.toLowerCase()))
    .slice(0, 3)
    .map((word) => word[0]!.toUpperCase());
  return letters.join("") || name.slice(0, 1).toUpperCase();
}

function isSvg(src: string) {
  const path = src.split(/[?#]/)[0]?.toLowerCase() ?? "";
  return path.endsWith(".svg");
}

/**
 * Shared university mark for cards and the profile hero.
 * Missing logos render nothing. A failed load keeps the same box and
 * shows initials so the card does not collapse or show a broken image.
 */
export default function UniversityLogo({
  name,
  src,
  variant = "card",
  credit,
}: UniversityLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!src) return null;

  const box = BOX[variant];

  return (
    <div
      className={
        variant === "hero"
          ? "inline-flex max-w-full flex-col items-start"
          : "inline-flex shrink-0"
      }
    >
      <div className={`relative shrink-0 overflow-hidden ${box}`}>
        {failed ? (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-500"
          >
            {initials(name)}
          </div>
        ) : (
          <Image
            src={src}
            alt={`${name} logo`}
            fill
            sizes={SIZES[variant]}
            loading="lazy"
            // Local SVGs are served unchanged. Next.js also skips the
            // optimizer when the path ends in .svg. dangerouslyAllowSVG
            // stays off; this app has no image Content-Security-Policy.
            unoptimized={isSvg(src)}
            className="object-contain"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {variant === "hero" && credit ? (
        <p className="mt-1 max-w-28 text-[10px] leading-snug text-slate-500 md:max-w-40">
          {credit}
        </p>
      ) : null}
    </div>
  );
}
