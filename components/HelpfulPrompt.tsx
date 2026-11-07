import Link from "next/link";
import { helpfulPath } from "@/lib/siteFeedback";

type HelpfulPromptProps = {
  source: string;
  /** "section" is the home-page band. "inline" is a single text link. */
  variant?: "section" | "inline";
  className?: string;
};

export default function HelpfulPrompt({
  source,
  variant = "inline",
  className = "",
}: HelpfulPromptProps) {
  const href = helpfulPath(source);

  if (variant === "section") {
    return (
      <section
        aria-labelledby="helpful-prompt-heading"
        className={`border-t border-slate-200 bg-white px-6 py-16 ${className}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="helpful-prompt-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
          >
            Is MatchMyStudy helpful?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            Share a quick rating, or support the free study-abroad guides.
          </p>
          <Link
            href={href}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Is MatchMyStudy helpful?
          </Link>
        </div>
      </section>
    );
  }

  return (
    <p className={`mt-12 text-center text-sm text-slate-500 ${className}`}>
      <Link
        href={href}
        className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-400"
      >
        Is MatchMyStudy helpful?
      </Link>
    </p>
  );
}
