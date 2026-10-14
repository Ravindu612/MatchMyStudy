"use client";

import PersonAvatar from "@/components/social/PersonAvatar";
import ReportButton from "@/components/social/ReportButton";
import { formatPostTime } from "@/lib/social/formatPostTime";
import { MESSAGE_BODY_MAX_LENGTH, messageForMessagingError } from "@/lib/social/messageValidation";
import {
  deleteMessage,
  listMessages,
  loadConversationPeers,
  markConversationRead,
  notifyMessagesRead,
  sendMessage,
  subscribeToMessages,
  type ChatMessage,
  type ConversationPeer,
} from "@/lib/social/messages";
import { isUserId } from "@/lib/social/postValidation";
import { loginPathFor } from "@/lib/signupRole";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type Props = {
  conversationId: string;
  viewerId: string | null | undefined;
  pathname: string;
};

export default function ConversationThread({ conversationId, viewerId, pathname }: Props) {
  const inputId = useId();
  const bottomRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef(true);
  const [peers, setPeers] = useState<ConversationPeer[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">("loading");
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);

  const load = useCallback(async (userId: string) => {
    if (!isUserId(conversationId)) {
      setStatus("missing");
      return;
    }

    try {
      const [nextPeers, page] = await Promise.all([
        loadConversationPeers(conversationId),
        listMessages(conversationId),
      ]);

      if (nextPeers.length === 0) {
        setStatus("missing");
        setPeers([]);
        setMessages([]);
        return;
      }

      setPeers(nextPeers);
      setMessages(page.messages);
      setHasMore(page.hasMore);
      setStatus("ready");
      setError(null);

      try {
        await markConversationRead(conversationId);
        notifyMessagesRead();
      } catch {
        // The thread is still usable if the read marker fails.
      }
    } catch (loadError) {
      if (!userId) {
        return;
      }

      setStatus("error");
      setError(messageForMessagingError(loadError, "Couldn't load this conversation."));
    }
  }, [conversationId]);

  useEffect(() => {
    if (viewerId === undefined) {
      return;
    }

    if (!viewerId || !isUserId(conversationId)) {
      return;
    }

    let cancelled = false;

    void (async () => {
      try {
        const [nextPeers, page] = await Promise.all([
          loadConversationPeers(conversationId),
          listMessages(conversationId),
        ]);

        if (cancelled) {
          return;
        }

        if (!isUserId(conversationId) || nextPeers.length === 0) {
          setStatus("missing");
          return;
        }

        setPeers(nextPeers);
        setMessages(page.messages);
        setHasMore(page.hasMore);
        setStatus("ready");
        setError(null);
        await markConversationRead(conversationId).catch(() => undefined);
        notifyMessagesRead();
      } catch (loadError) {
        if (cancelled) {
          return;
        }

        setStatus("error");
        setError(messageForMessagingError(loadError, "Couldn't load this conversation."));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [conversationId, viewerId]);

  useEffect(() => {
    if (!viewerId || !isUserId(conversationId)) {
      return;
    }

    return subscribeToMessages(() => {
      void load(viewerId);
    }, conversationId);
  }, [conversationId, load, viewerId]);

  useEffect(() => {
    if (pinRef.current) {
      bottomRef.current?.scrollIntoView({ block: "end" });
    }
  }, [messages]);

  async function loadEarlier() {
    const oldest = messages[0]?.createdAt;

    if (!oldest) {
      return;
    }

    pinRef.current = false;

    try {
      const page = await listMessages(conversationId, oldest);
      setMessages((current) => [...page.messages, ...current]);
      setHasMore(page.hasMore);
    } catch (loadError) {
      setError(messageForMessagingError(loadError, "Couldn't load earlier messages."));
    }
  }

  async function submit() {
    if (!viewerId) {
      window.location.href = loginPathFor(pathname);
      return;
    }

    setSending(true);
    setError(null);
    pinRef.current = true;

    try {
      await sendMessage(conversationId, draft);
      setDraft("");
      await load(viewerId);
    } catch (sendError) {
      setError(messageForMessagingError(sendError, "Couldn't send this message."));
    } finally {
      setSending(false);
    }
  }

  async function remove(messageId: string) {
    if (!viewerId) {
      return;
    }

    setError(null);

    try {
      await deleteMessage(messageId);
      setPendingDelete(null);
      await load(viewerId);
    } catch (deleteError) {
      setError(messageForMessagingError(deleteError, "Couldn't delete this message."));
    }
  }

  const title = peers.map((peer) => peer.displayName).join(", ") || "Conversation";
  const subtitle = peers
    .map((peer) => (peer.handle ? `@${peer.handle}` : null))
    .filter(Boolean)
    .join(", ");

  return (
    <section className="flex h-full min-h-[70vh] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:min-h-0">
      <header className="flex items-center gap-3 bg-blue-600 px-3 py-3 text-white">
        <Link
          href="/messages"
          className="rounded-full p-1.5 hover:bg-white/10"
          aria-label="Back to messages"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        {peers[0] ? (
          <PersonAvatar
            name={peers[0].displayName}
            imageUrl={peers[0].avatarUrl}
            className="h-9 w-9 text-xs"
          />
        ) : null}
        <div className="min-w-0">
          <h1 className="truncate text-sm font-bold">{title}</h1>
          {subtitle ? <p className="truncate text-xs text-blue-100">{subtitle}</p> : null}
        </div>
      </header>

      {viewerId === undefined || (viewerId && isUserId(conversationId) && status === "loading") ? (
        <p className="px-4 py-8 text-sm text-slate-500">Loading conversation...</p>
      ) : null}

      {viewerId === null ? (
        <div className="px-4 py-10 text-center">
          <p className="text-sm text-slate-600">Log in to read this conversation.</p>
          <Link
            href={loginPathFor(pathname)}
            className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </div>
      ) : null}

      {viewerId && (!isUserId(conversationId) || status === "missing") ? (
        <p className="px-4 py-8 text-sm text-slate-600">This conversation is unavailable.</p>
      ) : null}

      {status === "error" && viewerId ? (
        <p className="px-4 py-8 text-sm text-red-700" role="alert">
          {error ?? "Couldn't load this conversation."}
        </p>
      ) : null}

      {status === "ready" && viewerId && isUserId(conversationId) ? (
        <>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {hasMore ? (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => void loadEarlier()}
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  Load earlier messages
                </button>
              </div>
            ) : null}
            {messages.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-500">No messages yet. Say hello.</p>
            ) : null}
            {messages.map((message) => {
              const mine = message.senderId === viewerId;
              const deleted = message.deletedAt !== null;

              return (
                <div key={message.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${mine ? "items-end" : "items-start"} flex flex-col`}>
                    <div
                      className={`rounded-2xl px-3 py-2 text-sm leading-6 ${
                        deleted
                          ? "bg-slate-100 italic text-slate-500"
                          : mine
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-800 shadow-sm"
                      }`}
                    >
                      {deleted ? "This message was deleted" : message.body}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 px-1">
                      <span className="text-[11px] text-slate-400">
                        {formatPostTime(message.createdAt)}
                      </span>
                      {mine && !deleted ? (
                        pendingDelete === message.id ? (
                          <span className="flex items-center gap-2 text-[11px] text-slate-500">
                            Delete this message?
                            <button
                              type="button"
                              onClick={() => void remove(message.id)}
                              className="font-semibold text-red-600"
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              onClick={() => setPendingDelete(null)}
                              className="font-semibold text-slate-500"
                            >
                              Cancel
                            </button>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setPendingDelete(message.id)}
                            className="text-[11px] font-semibold text-slate-500 hover:text-slate-800"
                          >
                            Delete
                          </button>
                        )
                      ) : null}
                      {!mine && !deleted ? (
                        <ReportButton
                          targetType="message"
                          targetId={message.id}
                          ownerId={message.senderId}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
          <form
            className="border-t border-slate-200 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              void submit();
            }}
          >
            <div className="flex items-end gap-2">
              <label className="sr-only" htmlFor={inputId}>
                Message
              </label>
              <textarea
                id={inputId}
                value={draft}
                rows={2}
                maxLength={MESSAGE_BODY_MAX_LENGTH}
                placeholder="Type a message..."
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void submit();
                  }
                }}
                className="min-h-11 flex-1 resize-y rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={sending || draft.trim().length === 0}
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
            <p className="mt-1 text-right text-[11px] text-slate-400">
              {draft.trim().length.toLocaleString("en-US")} / {MESSAGE_BODY_MAX_LENGTH.toLocaleString("en-US")}
            </p>
            {error ? (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </>
      ) : null}
    </section>
  );
}
