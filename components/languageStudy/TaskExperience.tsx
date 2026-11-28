"use client";

import { useSavedFeedback } from "@/components/languageStudy/ProgressProvider";
import type { AttemptFeedback } from "@/lib/languageStudy/types";
import { readAccessToken } from "@/lib/languageStudy/browserProgress";
import Link from "next/link";
import { useEffect, useState } from "react";
import AttemptForm from "./AttemptForm";
import OpenButton, { CloseAttemptButton } from "./OpenButton";
import Paywall from "./Paywall";
import ResultPanel from "./ResultPanel";

type PublicTask = React.ComponentProps<typeof AttemptForm>["task"];

export default function TaskExperience({
  taskId,
  initialAccess,
  initialTask,
  initialFeedback,
  initialStartedAt,
  minutes,
  checkoutReady,
  paywall,
  loginHref,
  mode,
}: {
  taskId: string;
  initialAccess: string;
  initialTask: PublicTask | null;
  initialFeedback: AttemptFeedback | null;
  initialStartedAt?: string | null;
  minutes?: number | null;
  checkoutReady: boolean;
  paywall: {
    title: string;
    message: string;
    product: "task_batch" | "mock_test";
    skill: string;
    language: string;
    examVariant?: string | null;
    actionLabel: string;
  };
  loginHref: string;
  mode: "practice" | "mock";
}) {
  const [access, setAccess] = useState(initialAccess);
  const [task, setTask] = useState<PublicTask | null>(initialTask);
  const [feedback, setFeedback] = useState<AttemptFeedback | null>(initialFeedback);
  const [startedAt, setStartedAt] = useState<string | null>(initialStartedAt ?? null);
  const saved = useSavedFeedback(taskId);

  async function reload() {
    const token = await readAccessToken();

    if (!token) {
      return;
    }

    const response = await fetch("/api/language-study/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ taskId }),
    });

    if (!response.ok) {
      return;
    }

    const body = (await response.json()) as {
      access?: string;
      task?: PublicTask | null;
      feedback?: AttemptFeedback | null;
      startedAt?: string | null;
    };

    if (body.access) {
      setAccess(body.access);
    }

    if (body.task) {
      setTask(body.task);
    }

    if (body.feedback) {
      setFeedback(body.feedback);
    }

    if (body.startedAt) {
      setStartedAt(body.startedAt);
    }
  }

  useEffect(() => {
    let cancelled = false;

    void readAccessToken().then(async (token) => {

      if (!token || cancelled) {
        return;
      }

      const response = await fetch("/api/language-study/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId }),
      });

      if (!response.ok || cancelled) {
        return;
      }

      const body = (await response.json()) as {
        access?: string;
        task?: PublicTask | null;
        feedback?: AttemptFeedback | null;
        startedAt?: string | null;
      };

      if (cancelled) {
        return;
      }

      if (body.access) {
        setAccess(body.access);
      }

      if (body.task) {
        setTask(body.task);
      }

      if (body.feedback) {
        setFeedback(body.feedback);
      }

      if (body.startedAt) {
        setStartedAt(body.startedAt);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [taskId]);

  const done = access === "completed" || access === "result";
  const shown = feedback ?? (done || access === "practice" || access === "preview" ? saved : null);

  if (access === "expired") {
    return (
      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">Time is up</h2>
        <p className="mt-3 leading-7 text-slate-700">
          The clock has passed, including a short grace period for the submission to arrive. This
          attempt is not given a score.
        </p>
        {feedback ? <ResultPanel feedback={feedback} /> : <CloseAttemptButton taskId={taskId} />}
      </section>
    );
  }

  if (done && shown) {
    return (
      <ResultPanel
        feedback={shown}
        previewNotice={feedback ? "Saved in your account." : "Saved on this device."}
      />
    );
  }

  if ((access === "practice" || access === "preview") && saved) {
    return <ResultPanel feedback={saved} previewNotice="Saved on this device." />;
  }

  if ((access === "practice" || access === "preview" || access === "in_progress") && task) {
    return (
      <AttemptForm
        task={task}
        mode={access === "in_progress" ? "mock" : mode}
        preview={false}
        startedAt={access === "in_progress" ? startedAt : null}
        minutes={access === "in_progress" ? minutes : null}
      />
    );
  }

  if (access === "needs_open" || access === "start") {
    return (
      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">
          {access === "start" ? "Start the timed practice" : "Use one practice credit to open this task"}
        </h2>
        <p className="mt-3 text-slate-700">
          The questions stay hidden until a credit is used. Opening does not charge a card.
        </p>
        <OpenButton
          taskId={taskId}
          label={access === "start" ? "Start practice test" : "Open with one credit"}
          onOpened={() => {
            void reload();
          }}
        />
      </section>
    );
  }

  if (access === "storage_unavailable") {
    return (
      <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-950" role="status">
        This paid item cannot be saved yet. Nothing was scored and nothing was unlocked.
      </p>
    );
  }

  if (access === "unavailable") {
    return null;
  }

  return (
    <div className="mt-6">
      <Paywall
        title={checkoutReady ? paywall.title : "Coming soon"}
        message={paywall.message}
        product={paywall.product}
        skill={paywall.skill}
        language={paywall.language}
        examVariant={paywall.examVariant}
        actionLabel={paywall.actionLabel}
        showPurchase={checkoutReady && access !== "sign_in"}
      />
      {access === "sign_in" ? (
        <p className="mt-4">
          <Link href={loginHref} className="font-semibold text-blue-700">
            Sign in
          </Link>{" "}
          to buy this or to keep a result in your account. Free tasks can be saved in this browser
          without an account.
        </p>
      ) : null}
    </div>
  );
}
