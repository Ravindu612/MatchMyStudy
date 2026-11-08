"use client";

import { PREVIEW_NOTICE } from "@/lib/languageStudy/rubric";
import type {
  AttemptFeedback,
  PublicListening,
  PublicObjectiveMock,
  PublicQuestion,
  PublicReading,
  PublicWriting,
  PublicWritingMock,
} from "@/lib/languageStudy/types";
import { supabase } from "@/lib/supabase";
import { useEffect, useRef, useState } from "react";
import ResultPanel from "./ResultPanel";
import SpeechButton from "./SpeechButton";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

type PublicTask = PublicReading | PublicWriting | PublicListening | PublicObjectiveMock | PublicWritingMock;

function remainingSeconds(startedAt: string, minutes: number, now: number): number {
  const end = Date.parse(startedAt) + minutes * 60_000;

  return Math.max(0, Math.ceil((end - now) / 1000));
}

function clock(total: number): string {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function AttemptForm({
  task,
  mode,
  preview,
  startedAt,
  minutes,
}: {
  task: PublicTask;
  mode: "preview" | "practice" | "mock";
  preview: boolean;
  startedAt?: string | null;
  minutes?: number | null;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const submitted = useRef(false);
  const [feedback, setFeedback] = useState<AttemptFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [openedScript, setOpenedScript] = useState(false);
  const [previewNotice, setPreviewNotice] = useState<string | null>(null);
  const [allowanceNote, setAllowanceNote] = useState<string | null>(null);
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!startedAt || !minutes) {
      return;
    }

    const tick = () => {
      const next = remainingSeconds(startedAt, minutes, Date.now());
      setLeft(next);

      if (next <= 0 && !submitted.current) {
        submitted.current = true;
        formRef.current?.requestSubmit();
      }
    };

    tick();
    const id = window.setInterval(tick, 1000);

    return () => window.clearInterval(id);
  }, [startedAt, minutes]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (pending) {
      return;
    }

    setPending(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const answers: Record<string, string | string[]> = {};

    if ("questions" in task && task.questions) {
      for (const question of task.questions) {
        if (question.kind === "reorder") {
          answers[question.id] = form.getAll(`${question.id}[]`).map(String);
        } else {
          answers[question.id] = String(form.get(question.id) ?? "");
        }
      }
    }

    const selfReview: Record<string, string> = {};

    if ("criteria" in task && task.criteria) {
      for (const criterion of task.criteria) {
        selfReview[criterion.id] = String(form.get(criterion.id) ?? "");
      }
    }

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    const response = await fetch("/api/language-study/attempt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        mode,
        taskId: task.id,
        answers,
        essay: form.get("essay"),
        selfReview,
        openedScript,
      }),
    });
    const body = (await response.json()) as {
      message?: string;
      feedback?: AttemptFeedback | null;
      previewNotice?: string;
      allowance?: { exceeded?: boolean; freeUsed?: number; freeCap?: number };
    };

    setPending(false);

    if (!response.ok || !body.feedback) {
      setError(body.message ?? "The attempt was not saved.");
      submitted.current = false;
      return;
    }

    setFeedback(body.feedback);
    setPreviewNotice(body.previewNotice ?? (preview ? PREVIEW_NOTICE : null));

    if (body.allowance?.exceeded) {
      setAllowanceNote(
        `Free practice allowance reached. ${body.allowance.freeUsed} of ${body.allowance.freeCap} provisional free tasks are saved for this skill and language. Purchase is not available yet, so no extra task was unlocked.`
      );
    }
  }

  if (feedback) {
    return (
      <ResultPanel
        feedback={feedback}
        previewNotice={previewNotice}
        allowanceNote={allowanceNote}
      />
    );
  }

  const questions = "questions" in task ? task.questions : undefined;
  const passage = "passage" in task ? task.passage : undefined;
  const passageLang = "passageLang" in task ? task.passageLang : undefined;

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-8">
      {left !== null ? (
        <p className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">
          <span className="sr-only">Time remaining </span>
          <span aria-hidden="true">{clock(left)}</span>
          <span className="sr-only">{left} seconds remaining</span>
        </p>
      ) : null}

      {passage ? (
        <article lang={passageLang} className="rounded-3xl border border-slate-200 bg-white p-6 leading-8 text-slate-800 whitespace-pre-wrap">
          {passage}
        </article>
      ) : null}

      {"prompt" in task && task.prompt ? (
        <article lang={task.promptLang} className="rounded-3xl border border-slate-200 bg-white p-6 leading-8 text-slate-800">
          {task.prompt}
          <p className="mt-4 text-sm text-slate-600">
            Suggested length: {task.suggestedWords.min} to {task.suggestedWords.max} words. The
            suggestion is not a score.
          </p>
        </article>
      ) : null}

      {task.skill === "listening" ? (
        <SpeechButton
          taskId={task.id}
          audioSrc={"audioSrc" in task ? task.audioSrc : undefined}
          audioNote={"audioNote" in task ? task.audioNote : undefined}
          onScript={() => setOpenedScript(true)}
        />
      ) : null}

      {questions?.map((question, index) => (
        <QuestionFields key={question.id} question={question} index={index} />
      ))}

      {"criteria" in task && task.criteria ? (
        <div className="space-y-6">
          <label className="block" htmlFor="essay">
            <span className="font-semibold text-slate-900">Your response</span>
            <textarea
              id="essay"
              name="essay"
              required
              rows={10}
              lang={"promptLang" in task ? task.promptLang : "en"}
              className={`mt-2 w-full rounded-2xl border border-slate-300 p-4 text-slate-900 ${focus}`}
            />
          </label>
          {task.criteria.map((criterion) => (
            <fieldset key={criterion.id} className="rounded-2xl border border-slate-200 p-4">
              <legend className="px-1 font-semibold text-slate-900">{criterion.label}</legend>
              <p className="text-sm text-slate-600" id={`${criterion.id}-help`}>
                {criterion.description} This is your review, not an exam score.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-4" role="radiogroup" aria-describedby={`${criterion.id}-help`}>
                {(
                  [
                    ["met", "Met"],
                    ["partly", "Partly"],
                    ["not_yet", "Not yet"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className="inline-flex min-h-11 items-center gap-2">
                    <input type="radio" name={criterion.id} value={value} required className={focus} />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
      ) : null}

      {error ? (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-red-900">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={`inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-60 ${focus}`}
      >
        {pending ? "Submitting" : "Submit answers"}
      </button>
    </form>
  );
}

function QuestionFields({ question, index }: { question: PublicQuestion; index: number }) {
  if (question.kind === "reorder" && question.sentences) {
    return (
      <fieldset className="rounded-3xl border border-slate-200 bg-white p-6">
        <legend className="px-1 text-lg font-semibold text-slate-900">
          {index + 1}. {question.prompt}
        </legend>
        <p className="text-sm text-slate-600" id={`${question.id}-help`}>
          Choose the order. The item matches only when the full order is right. Partial credit is
          not used.
        </p>
        <ol className="mt-4 space-y-3" aria-describedby={`${question.id}-help`}>
          {question.sentences.map((sentence, position) => (
            <li key={sentence.id}>
              <label className="block font-medium text-slate-800" htmlFor={`${question.id}-${position}`}>
                Position {position + 1}
              </label>
              <select
                id={`${question.id}-${position}`}
                name={`${question.id}[]`}
                required
                defaultValue=""
                className={`mt-1 w-full rounded-xl border border-slate-300 bg-white p-3 ${focus}`}
              >
                <option value="" disabled>
                  Select a sentence
                </option>
                {question.sentences?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.text}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ol>
      </fieldset>
    );
  }

  return (
    <fieldset className="rounded-3xl border border-slate-200 bg-white p-6">
      <legend className="px-1 text-lg font-semibold text-slate-900">
        {index + 1}. {question.prompt}
      </legend>
      <div className="mt-4 space-y-3">
        {question.choices?.map((choice) => (
          <label key={choice.id} className="flex min-h-11 items-start gap-3 text-slate-800">
            <input
              type="radio"
              name={question.id}
              value={choice.id}
              required
              className={`mt-1 ${focus}`}
            />
            <span>{choice.text}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
