"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { resourceGuides } from "@/data/resourceGuides";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function ResourcesMenu({
  variant,
  onNavigate,
}: {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname() ?? "";
  const [menu, setMenu] = useState({ path: pathname, open: false });
  const open = menu.path === pathname && menu.open;
  const rootRef = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const sectionActive = resourceGuides.some((item) =>
    isCurrent(pathname, item.href)
  );

  function closeMenu() {
    setMenu({ path: pathname, open: false });
  }

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenu({ path: pathname, open: false });
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu({ path: pathname, open: false });
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, pathname]);

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Resources
        </p>
        {resourceGuides.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            className="text-lg font-medium text-white transition hover:text-blue-400"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <li className="relative" ref={rootRef}>
      <button
        type="button"
        className={`bg-transparent font-medium transition hover:text-blue-400 ${focus} ${
          sectionActive ? "text-blue-400" : "text-slate-300"
        }`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setMenu({ path: pathname, open: !open })}
      >
        Resources
      </button>
      <div
        id={menuId}
        aria-label="Resources"
        hidden={!open}
        className="absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-xl"
      >
        <ul>
          {resourceGuides.map((item) => {
            const current = isCurrent(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={closeMenu}
                  className={`block rounded-xl px-3 py-2 hover:bg-slate-50 ${focus} ${
                    current ? "text-blue-700" : "text-slate-800"
                  }`}
                >
                  <span className="block text-sm font-semibold">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium text-slate-500">
                    {item.blurb}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
