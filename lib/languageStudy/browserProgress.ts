import { supabase } from "@/lib/supabase";
import type { AttemptFeedback } from "./types";

export async function readAccessToken(): Promise<string | undefined> {
  try {
    const { data } = await supabase.auth.getSession();

    return data.session?.access_token;
  } catch {
    return undefined;
  }
}

/** Device-only practice results. This key never stores credits, orders, or unlocks. */
export const BROWSER_PROGRESS_KEY = "matchmystudy.language-study.progress.v1";

export type BrowserAttempt = {
  taskId: string;
  submittedAt: string;
  feedback: AttemptFeedback;
};

export function browserProgressSnapshot(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(BROWSER_PROGRESS_KEY) ?? "";
}

export function subscribeBrowserProgress(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("language-study-progress", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("language-study-progress", onStoreChange);
  };
}

export function readBrowserProgress(): BrowserAttempt[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(BROWSER_PROGRESS_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is BrowserAttempt =>
        Boolean(item) &&
        typeof item === "object" &&
        typeof (item as BrowserAttempt).taskId === "string" &&
        typeof (item as BrowserAttempt).submittedAt === "string" &&
        Boolean((item as BrowserAttempt).feedback)
    );
  } catch {
    return [];
  }
}

export function writeBrowserAttempt(attempt: BrowserAttempt): void {
  if (typeof window === "undefined") {
    return;
  }

  const next = [
    attempt,
    ...readBrowserProgress().filter((item) => item.taskId !== attempt.taskId),
  ].slice(0, 200);

  window.localStorage.setItem(BROWSER_PROGRESS_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("language-study-progress"));
}
