"use client";

import ContactForm from "@/components/chat/ContactForm";
import MessageText from "@/components/chat/MessageText";
import { MAX_USER_MESSAGE_CHARS } from "@/lib/chat/constants";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "Which countries can I study in?",
  "Show master's programs in computer science",
  "Can a consultant contact me?",
];

const GREETING =
  "Hi. I can help you find countries, universities, programs, and consultants published on MatchMyStudy.";

function visibleError(error: Error): string {
  const message = error.message.trim();

  if (!message || message.length > 400 || message.startsWith("{") || message.startsWith("[")) {
    return "The assistant is unavailable right now. Please try again in a moment.";
  }

  return message;
}

type ContactToolPart = {
  type: string;
  toolCallId: string;
  state: string;
  input?: {
    intro?: string;
    countryOfInterest?: string;
    studyLevel?: string;
  };
  errorText?: string;
};

function contactTool(part: { type: string }): ContactToolPart | null {
  if (part.type !== "tool-showContactForm" || !("toolCallId" in part) || !("state" in part)) {
    return null;
  }

  return part as ContactToolPart;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [transport] = useState(() => new DefaultChatTransport({ api: "/api/chat" }));
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, setMessages, addToolOutput } = useChat({
    transport,
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) {
      return;
    }

    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const media = window.matchMedia("(max-width: 639px)");

    if (!media.matches) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open, status]);

  function ask(text: string) {
    const question = text.trim();

    if (!question || busy || question.length > MAX_USER_MESSAGE_CHARS) {
      return;
    }

    setInput("");
    void sendMessage({ text: question });
  }

  return (
    <>
      <button
        type="button"
        className={`fixed bottom-4 right-4 z-50 h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
          open ? "hidden sm:flex" : "flex"
        }`}
        aria-expanded={open}
        aria-controls="study-assistant-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close study assistant" : "Open study assistant"}</span>
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H9l-4 3.5V6.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open ? (
        <section
          id="study-assistant-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="study-assistant-title"
          className="fixed inset-0 z-[70] flex flex-col bg-white sm:inset-auto sm:bottom-24 sm:right-4 sm:h-[min(36rem,calc(100dvh-8rem))] sm:w-96 sm:overflow-hidden sm:rounded-3xl sm:border sm:border-slate-200 sm:shadow-2xl"
        >
          <header className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">MatchMyStudy</p>
              <h2 id="study-assistant-title" className="text-lg font-bold text-slate-900">
                Study assistant
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-full px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                onClick={() => {
                  setMessages([]);
                  setInput("");
                }}
              >
                New chat
              </button>
              <button
                type="button"
                className="rounded-full px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-100 sm:hidden"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="rounded-2xl bg-slate-100 px-3 py-2 text-sm leading-6 text-slate-800">
              <p>{GREETING}</p>
            </div>

            {messages.length === 0 ? (
              <div className="flex flex-col items-start gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-left text-sm font-medium text-blue-800 hover:bg-blue-100"
                    onClick={() => ask(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}

            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-8 rounded-2xl bg-blue-600 px-3 py-2 text-sm leading-6 text-white"
                    : "mr-4 space-y-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm leading-6 text-slate-800"
                }
              >
                {message.parts.map((part, index) => {
                  if (part.type === "text") {
                    if (!part.text) {
                      return null;
                    }

                    return message.role === "user" ? (
                      <p key={index} className="whitespace-pre-wrap break-words">
                        {part.text}
                      </p>
                    ) : (
                      <MessageText key={index} text={part.text} />
                    );
                  }

                  const tool = contactTool(part);

                  if (!tool) {
                    return null;
                  }

                  if (tool.state === "input-streaming") {
                    return (
                      <p key={tool.toolCallId} className="text-slate-500">
                        Opening a contact form…
                      </p>
                    );
                  }

                  if (tool.state === "input-available") {
                    return (
                      <ContactForm
                        key={tool.toolCallId}
                        intro={tool.input?.intro}
                        countryOfInterest={tool.input?.countryOfInterest}
                        studyLevel={tool.input?.studyLevel}
                        onSaved={() => {
                          void addToolOutput({
                            tool: "showContactForm",
                            toolCallId: tool.toolCallId,
                            output: "Saved. The student submitted the contact form.",
                          });
                        }}
                      />
                    );
                  }

                  if (tool.state === "output-available") {
                    return (
                      <p key={tool.toolCallId}>
                        Thanks. We saved your details and can follow up by email.
                      </p>
                    );
                  }

                  if (tool.state === "output-error") {
                    return (
                      <p key={tool.toolCallId} className="text-red-700">
                        {tool.errorText || "The contact form could not be opened."}
                      </p>
                    );
                  }

                  return null;
                })}
              </div>
            ))}

            {busy ? <p className="text-sm text-slate-500">Thinking…</p> : null}
            {error ? (
              <p role="alert" className="rounded-2xl bg-amber-50 px-3 py-2 text-sm text-amber-900">
                {visibleError(error)}
              </p>
            ) : null}
            <div ref={endRef} />
          </div>

          <form
            className="border-t border-slate-200 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              ask(input);
            }}
          >
            <label className="sr-only" htmlFor="study-assistant-input">
              Message the study assistant
            </label>
            <div className="flex items-end gap-2">
              <textarea
                id="study-assistant-input"
                ref={inputRef}
                rows={2}
                maxLength={MAX_USER_MESSAGE_CHARS}
                value={input}
                placeholder="Ask about countries, programs, or consultants"
                className="min-h-12 flex-1 resize-none rounded-2xl border border-slate-300 px-3 py-2 text-sm"
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    ask(input);
                  }
                }}
              />
              <button
                type="submit"
                disabled={busy || input.trim().length === 0}
                className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Answers use MatchMyStudy listings. For personal help, ask to be contacted.
            </p>
          </form>
        </section>
      ) : null}
    </>
  );
}
