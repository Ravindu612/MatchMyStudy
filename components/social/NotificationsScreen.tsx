"use client";

import PersonAvatar from "@/components/social/PersonAvatar";
import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import { formatPostTime } from "@/lib/social/formatPostTime";
import {
  NOTIFICATIONS_CHANGED_EVENT,
  countUnreadNotifications,
  listNotifications,
  markAllNotificationsRead,
  markNotificationRead,
  notifyNotificationsChanged,
  subscribeToNotifications,
  type AppNotification,
} from "@/lib/social/notifications";
import { messageForSocialError } from "@/lib/social/socialErrors";
import { isUserId } from "@/lib/social/postValidation";
import { loginPathFor } from "@/lib/signupRole";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function NotificationsScreen() {
  const pathname = usePathname() ?? "/notifications";
  const router = useRouter();
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const [items, setItems] = useState<AppNotification[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [markingAll, setMarkingAll] = useState(false);
  const [unreadTotal, setUnreadTotal] = useState(0);

  const reload = useCallback(async () => {
    const [next, unread] = await Promise.all([listNotifications(), countUnreadNotifications()]);
    setItems(next);
    setUnreadTotal(unread);
    setStatus("ready");
    setError(null);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let generation = 0;

    const stop = subscribeToBrowserSession((session) => {
      const generationId = ++generation;
      const nextId = session?.user?.id && isUserId(session.user.id) ? session.user.id : null;
      setUserId(nextId);

      if (!nextId) {
        setItems([]);
        setUnreadTotal(0);
        setStatus("ready");
        setError(null);
        return;
      }

      void Promise.all([listNotifications(), countUnreadNotifications()])
        .then(([next, unread]) => {
          if (cancelled || generationId !== generation) {
            return;
          }

          setItems(next);
          setUnreadTotal(unread);
          setStatus("ready");
          setError(null);
        })
        .catch((loadError: unknown) => {
          if (cancelled || generationId !== generation) {
            return;
          }

          setStatus("error");
          setError(messageForSocialError(loadError, "Couldn't load notifications."));
        });
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

    const stop = subscribeToNotifications(userId, () => {
      void reload().catch((loadError: unknown) => {
        setStatus("error");
        setError(messageForSocialError(loadError, "Couldn't load notifications."));
      });
    });

    function onChanged() {
      void reload().catch(() => undefined);
    }

    window.addEventListener(NOTIFICATIONS_CHANGED_EVENT, onChanged);

    return () => {
      window.removeEventListener(NOTIFICATIONS_CHANGED_EVENT, onChanged);
      stop();
    };
  }, [reload, userId]);

  async function markOne(id: string): Promise<boolean> {
    setPendingId(id);
    setError(null);

    try {
      await markNotificationRead(id);
      setItems((current) =>
        current.map((item) =>
          item.id === id && !item.readAt ? { ...item, readAt: new Date().toISOString() } : item
        )
      );
      setUnreadTotal((current) => Math.max(0, current - 1));
      notifyNotificationsChanged();
      return true;
    } catch (markError) {
      setError(messageForSocialError(markError, "Couldn't mark this notification as read."));
      return false;
    } finally {
      setPendingId(null);
    }
  }

  async function markAll() {
    setMarkingAll(true);
    setError(null);

    try {
      await markAllNotificationsRead();
      const readAt = new Date().toISOString();
      setItems((current) => current.map((item) => ({ ...item, readAt: item.readAt ?? readAt })));
      setUnreadTotal(0);
      notifyNotificationsChanged();
    } catch (markError) {
      setError(messageForSocialError(markError, "Couldn't mark notifications as read."));
    } finally {
      setMarkingAll(false);
    }
  }

  async function openNotification(item: AppNotification) {
    if (!item.href) {
      return;
    }

    if (!item.readAt) {
      const marked = await markOne(item.id);

      if (!marked) {
        return;
      }
    }

    router.push(item.href);
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-lg font-bold text-slate-900">Notifications</h1>
        {userId && unreadTotal > 0 ? (
          <button
            type="button"
            onClick={() => void markAll()}
            disabled={markingAll || pendingId !== null}
            className="text-sm font-semibold text-blue-700 hover:underline disabled:opacity-50"
          >
            {markingAll ? "Marking..." : "Mark all read"}
          </button>
        ) : null}
      </div>

      {status === "loading" || userId === undefined ? (
        <p className="mt-6 text-sm text-slate-500">Loading notifications...</p>
      ) : null}

      {status === "ready" && userId === null ? (
        <div className="mt-6 rounded-xl bg-slate-50 px-4 py-8 text-center">
          <p className="text-sm leading-6 text-slate-500">Log in to see your notifications.</p>
          <Link
            href={loginPathFor(pathname)}
            className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      {status === "ready" && userId && items.length === 0 ? (
        <p className="mt-6 rounded-xl bg-slate-50 px-4 py-8 text-center text-sm leading-6 text-slate-500">
          You&apos;re all caught up. Likes, comments, follows, and messages will show up here.
        </p>
      ) : null}

      {status === "ready" && userId && items.length > 0 ? (
        <ul className="mt-4 divide-y divide-slate-100">
          {items.map((item) => {
            const unread = !item.readAt;

            return (
              <li key={item.id} className={unread ? "bg-blue-50/70" : undefined}>
                <div className="flex items-start gap-3 px-2 py-3">
                  <PersonAvatar
                    name={item.actorName}
                    imageUrl={item.actorAvatarUrl}
                    className="h-10 w-10 text-xs"
                  />
                  <div className="min-w-0 flex-1">
                    {item.href ? (
                      <button
                        type="button"
                        onClick={() => void openNotification(item)}
                        className="block text-left text-sm font-medium text-slate-900 hover:underline"
                      >
                        {item.text}
                      </button>
                    ) : (
                      <p className="text-sm font-medium text-slate-900">{item.text}</p>
                    )}
                    <time className="mt-1 block text-xs text-slate-500" dateTime={item.createdAt}>
                      {formatPostTime(item.createdAt)}
                    </time>
                  </div>
                  {unread ? (
                    <button
                      type="button"
                      onClick={() => void markOne(item.id)}
                      disabled={pendingId === item.id || markingAll}
                      className="shrink-0 text-xs font-semibold text-blue-700 hover:underline disabled:opacity-50"
                    >
                      {pendingId === item.id ? "Marking..." : "Mark read"}
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}
