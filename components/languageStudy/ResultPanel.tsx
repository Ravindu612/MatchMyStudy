import type { AttemptFeedback } from "@/lib/languageStudy/types";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function ResultPanel({
  feedback,
  previewNotice,
  allowanceNote,
}: {
  feedback: AttemptFeedback;
  previewNotice?: string | null;
  allowanceNote?: string | null;
}) {
  return (
    <section
      aria-live="polite"
      className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-slate-900">Result</h2>
      <p className="mt-3 text-lg font-semibold text-slate-900">{feedback.label}</p>

      {previewNotice ? (
        <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-amber-950">{previewNotice}</p>
      ) : null}

      {feedback.scoringKind === "objective" ? (
        <div className="mt-4">
          <p className="text-slate-800">
            {feedback.correct} of {feedback.total} answers match the key.
          </p>
          <ol className="mt-4 space-y-4">
            {feedback.items.map((item, index) => (
              <li key={item.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">
                  {index + 1}. {item.prompt}
                </p>
                <p className="mt-2 text-slate-700">
                  {item.matched ? "Matches the key." : "Does not match the key."} Your answer:{" "}
                  {item.yourAnswer}
                </p>
                {item.matched ? null : (
                  <p className="mt-1 text-slate-700">Keyed answer: {item.keyedAnswer}</p>
                )}
                <p className="mt-2 text-slate-600">{item.explanation}</p>
              </li>
            ))}
          </ol>
          {feedback.scriptReview ? (
            <div className="mt-4 rounded-2xl border border-slate-200 p-4" lang="en">
              <h3 className="font-semibold text-slate-900">Script used for the answer check</h3>
              <p className="mt-2 whitespace-pre-wrap text-slate-700">{feedback.scriptReview}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      {feedback.scoringKind === "self_review" ? (
        <div className="mt-4">
          <p className="text-slate-800">{feedback.summary}</p>
          <p className="mt-3 text-slate-700">
            Word count: {feedback.wordCount}. Suggested range: {feedback.suggestedMin} to{" "}
            {feedback.suggestedMax} words. Word count is not a score.
          </p>
          <ul className="mt-4 space-y-3">
            {feedback.criteria.map((criterion) => (
              <li key={criterion.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">
                  {criterion.label}: {criterion.rating.replace("_", " ")}
                </p>
                <p className="mt-1 text-slate-600">{criterion.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {allowanceNote ? <p className="mt-4 text-slate-700">{allowanceNote}</p> : null}

      <a href="#language-study-next" className={`mt-6 inline-flex min-h-11 items-center font-semibold text-blue-700 ${focus}`}>
        Continue
      </a>
    </section>
  );
}
