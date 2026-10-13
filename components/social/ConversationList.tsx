"use client";

import PersonAvatar from "@/components/social/PersonAvatar";
import { formatPostTime } from "@/lib/social/formatPostTime";
import {
  conversationPreview,
  filterConversations,
  totalUnread,
  type ConversationSummary,
} from "@/lib/social/messageValidation";
import { loginPathFor } from "@/lib/signupRole";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

type Props = {
  viewerId: string | null | undefined;
  conversations: ConversationSummary[];
  status: "loading" | "ready" | "error";
  error: string | null;
  activeId?: string;
  pathname: string;
};

export default function ConversationList({
  viewerId,
  conversations,
  status,
  error,
  activeId,
  pathname,
}: Props) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const visible = useMemo(
    () => filterConversations(conversations, query, viewerId ?? ""),
    [conversations, query, viewerId]
  );
  const unread = totalUnread(conversations);

  return (
    <section className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-slate-900">
          <Link href="/messages" className="hover:text-blue-700">
            Messages
          </Link>
        </h2>
        {unread > 0 ? (
          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
            {unread > 99 ? "99+" : unread}
          </span>
        ) : null}
      </div>
      <label className="sr-only" htmlFor={searchId}>
        Search chats
      </label>
      <input
        id={searchId}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search chats"
        disabled={viewerId === null || status === "loading"}
        className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-400 disabled:text-slate-500"
      />

      {status === "loading" || viewerId === undefined ? (
        <p className="mt-6 px-2 text-sm text-slate-500">Loading messages...</p>
      ) : null}

      {status === "ready" && viewerId === null ? (
        <div className="mt-6 rounded-xl bg-slate-50 px-4 py-8 text-center">
          <p className="text-sm leading-6 text-slate-500">Log in to see your messages.</p>
          <Link
            href={loginPathFor(pathname)}
            className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-6 text-sm text-red-700" role="alert">
          {error ?? "Couldn't load messages."}
        </p>
      ) : null}

      {status === "ready" && viewerId ? (
        visible.length === 0 ? (
          <p className="mt-6 rounded-xl bg-slate-50 px-4 py-8 text-center text-sm leading-6 text-slate-500">
            {conversations.length === 0
              ? "Direct messages will show up here."
              : "No chats match that search."}
          </p>
        ) : (
          <ul className="mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto">
            {visible.map((conversation) => {
              const active = conversation.conversationId === activeId;
              const preview = conversationPreview(conversation, viewerId);
              const when = conversation.lastMessageAt
                ? formatPostTime(conversation.lastMessageAt)
                : "";

              return (
                <li key={conversation.conversationId}>
                  <Link
                    href={`/messages/${conversation.conversationId}`}
                    className={`flex items-center gap-3 rounded-xl px-2 py-2 ${
                      active ? "bg-blue-50" : "hover:bg-slate-50"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <PersonAvatar
                      name={conversation.displayName}
                      imageUrl={conversation.avatarUrl}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-2">
                        <span
                          className={`truncate text-sm text-slate-900 ${
                            conversation.unreadCount > 0 ? "font-bold" : "font-semibold"
                          }`}
                        >
                          {conversation.displayName}
                        </span>
                        {when ? (
                          <span className="shrink-0 text-[11px] text-slate-400">{when}</span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-slate-500">{preview}</span>
                    </span>
                    {conversation.unreadCount > 0 ? (
                      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-bold text-white">
                        {conversation.unreadCount > 9 ? "9+" : conversation.unreadCount}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        )
      ) : null}
    </section>
  );
}
