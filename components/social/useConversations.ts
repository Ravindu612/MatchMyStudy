"use client";

import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import { messageForMessagingError } from "@/lib/social/messageValidation";
import type { ConversationSummary } from "@/lib/social/messageValidation";
import {
  MESSAGES_READ_EVENT,
  listConversations,
  subscribeToMessages,
} from "@/lib/social/messages";
import { isUserId } from "@/lib/social/postValidation";
import { useCallback, useEffect, useState } from "react";

export function useConversations() {
  const [viewerId, setViewerId] = useState<string | null | undefined>(undefined);
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async (userId: string) => {
    try {
      const next = await listConversations();
      setConversations(next);
      setStatus("ready");
      setError(null);
    } catch (loadError) {
      if (userId) {
        setStatus("error");
        setError(messageForMessagingError(loadError, "Couldn't load messages."));
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let generation = 0;

    const stop = subscribeToBrowserSession((session) => {
      const generationId = ++generation;
      const userId = session?.user?.id && isUserId(session.user.id) ? session.user.id : null;
      setViewerId(userId);

      if (!userId) {
        setConversations([]);
        setStatus("ready");
        setError(null);
        return;
      }

      void listConversations()
        .then((next) => {
          if (cancelled || generationId !== generation) {
            return;
          }

          setConversations(next);
          setStatus("ready");
          setError(null);
        })
        .catch((loadError: unknown) => {
          if (cancelled || generationId !== generation) {
            return;
          }

          setStatus("error");
          setError(messageForMessagingError(loadError, "Couldn't load messages."));
        });
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, []);

  useEffect(() => {
    if (!viewerId) {
      return;
    }

    const userId = viewerId;
    const stop = subscribeToMessages(() => {
      void reload(userId);
    });

    function onRead() {
      void reload(userId);
    }

    window.addEventListener(MESSAGES_READ_EVENT, onRead);

    return () => {
      window.removeEventListener(MESSAGES_READ_EVENT, onRead);
      stop();
    };
  }, [reload, viewerId]);

  return { viewerId, conversations, status, error, reload };
}
