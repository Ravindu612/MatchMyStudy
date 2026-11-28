"use client";

import {
  browserProgressSnapshot,
  readAccessToken,
  readBrowserProgress,
  subscribeBrowserProgress,
} from "@/lib/languageStudy/browserProgress";
import type { AttemptFeedback } from "@/lib/languageStudy/types";
import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

type ProgressMap = Record<string, AttemptFeedback>;

const ProgressContext = createContext<ProgressMap>({});

export function useSavedFeedback(taskId: string): AttemptFeedback | null {
  const saved = useContext(ProgressContext);

  return saved[taskId] ?? null;
}

export default function ProgressProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(subscribeBrowserProgress, browserProgressSnapshot, () => "");
  const local = snapshot
    ? Object.fromEntries(readBrowserProgress().map((attempt) => [attempt.taskId, attempt.feedback]))
    : {};
  const [account, setAccount] = useState<ProgressMap>({});

  useEffect(() => {
    let cancelled = false;

    void readAccessToken().then(async (token) => {

      if (!token || cancelled) {
        return;
      }

      const response = await fetch("/api/language-study/progress", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok || cancelled) {
        return;
      }

      const body = (await response.json()) as {
        attempts?: { taskId: string; feedback: AttemptFeedback }[];
      };

      if (!cancelled) {
        setAccount(
          Object.fromEntries((body.attempts ?? []).map((attempt) => [attempt.taskId, attempt.feedback]))
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <ProgressContext.Provider value={{ ...local, ...account }}>{children}</ProgressContext.Provider>;
}
