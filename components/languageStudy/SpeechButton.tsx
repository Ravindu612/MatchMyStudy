"use client";

import { supabase } from "@/lib/supabase";
import { useRef, useState } from "react";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function SpeechButton({
  taskId,
  onScript,
}: {
  taskId: string;
  onScript: (script: string) => void;
}) {
  const scriptRef = useRef<string | null>(null);
  const [phase, setPhase] = useState<"idle" | "loading" | "playing" | "unsupported" | "error">(
    "idle"
  );
  const [showScript, setShowScript] = useState(false);
  const [script, setScript] = useState<string | null>(null);

  async function loadScript() {
    if (scriptRef.current) {
      return scriptRef.current;
    }

    setPhase("loading");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    const response = await fetch("/api/language-study/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ taskId }),
    });

    if (!response.ok) {
      setPhase("error");
      return null;
    }

    const body = (await response.json()) as { script?: string };

    if (!body.script) {
      setPhase("error");
      return null;
    }

    scriptRef.current = body.script;
    setPhase("idle");
    return body.script;
  }

  async function play() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setPhase("unsupported");
      return;
    }

    const text = await loadScript();

    if (!text) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setPhase("idle");
    utterance.onerror = () => setPhase("error");
    setPhase("playing");
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setPhase("idle");
  }

  async function revealScript() {
    const text = await loadScript();

    if (!text) {
      return;
    }

    setScript(text);
    setShowScript(true);
    onScript(text);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm leading-6 text-slate-700">
        Audio is a browser text-to-speech preview of an original script, not a studio recording.
        The words are sent to your browser when you press play. This is practice, not a secured
        listening exam.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={phase === "playing" ? stop : play}
          className={`inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white ${focus}`}
        >
          {phase === "loading" ? "Preparing audio" : phase === "playing" ? "Stop audio" : "Play audio preview"}
        </button>
        <button
          type="button"
          onClick={revealScript}
          className={`inline-flex min-h-11 items-center rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900 ${focus}`}
        >
          Read the script instead
        </button>
      </div>
      {phase === "unsupported" ? (
        <p role="alert" className="mt-3 text-slate-800">
          This browser does not offer text-to-speech. You can read the script, and a submitted
          result will be marked as a script review rather than a listening result.
        </p>
      ) : null}
      {phase === "error" ? (
        <p role="alert" className="mt-3 text-slate-800">
          The audio preview could not start. You can try again or read the script.
        </p>
      ) : null}
      {showScript && script ? (
        <p className="mt-3 whitespace-pre-wrap text-slate-800">{script}</p>
      ) : null}
    </div>
  );
}
