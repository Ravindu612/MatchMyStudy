"use client";

import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import {
  NOTIFICATIONS_CHANGED_EVENT,
  countUnreadNotifications,
  subscribeToNotifications,
} from "@/lib/social/notifications";
import { isUserId } from "@/lib/social/postValidation";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotificationBell({
  hideWhenSignedOut = false,
}: {
  hideWhenSignedOut?: boolean;
}) {
  const pathname = usePathname() ?? "";
  const active = pathname === "/notifications" || pathname.startsWith("/notifications/");
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const stop = subscribeToBrowserSession((session) => {
      const nextId = session?.user?.id && isUserId(session.user.id) ? session.user.id : null;

      if (!cancelled) {
        setUserId(nextId);

        if (!nextId) {
          setUnread(0);
        }
      }
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }

    let cancelled = false;

    function reload() {
      void countUnreadNotifications()
        .then((count) => {
          if (!cancelled) {
            setUnread(count);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setUnread(0);
          }
        });
    }

    reload();
    const stop = subscribeToNotifications(userId, reload);

    function onChanged() {
      reload();
    }

    window.addEventListener(NOTIFICATIONS_CHANGED_EVENT, onChanged);

    return () => {
      cancelled = true;
      window.removeEventListener(NOTIFICATIONS_CHANGED_EVENT, onChanged);
      stop();
    };
  }, [userId]);

  if (hideWhenSignedOut && !userId) {
    return null;
  }

  const label = unread > 0 ? `Notifications, ${unread} unread` : "Notifications";
  const badge = unread > 99 ? "99+" : String(unread);

  return (
    <Link
      href="/notifications"
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full ${
        active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Bell className="h-5 w-5" aria-hidden="true" />
      {unread > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold leading-none text-white">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}
