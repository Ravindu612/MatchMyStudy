"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin/claims", label: "Claims" },
  { href: "/admin/verification", label: "Verification" },
  { href: "/admin/moderation", label: "Moderation" },
] as const;

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin" className="flex flex-wrap gap-2">
      {LINKS.map((link) => {
        const current = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current ? "page" : undefined}
            className={
              current
                ? "rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
