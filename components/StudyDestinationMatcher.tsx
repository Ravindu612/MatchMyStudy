"use client";

import { useState } from "react";

import { matcherQuestions } from "@/data/matcherQuestions";
import { matchCountries } from "@/lib/matchCountries";

import QuestionCard from "./matcher/QuestionCard";
import ResultCard from "./matcher/ResultCard";

export default function StudyDestinationMatcher() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [results, setResults] = useState<any[]>([]);

  const [finished, setFinished] = useState(false);

  const question = matcherQuestions[currentQuestion];

  function handleAnswer(answer: string) {
  const updatedAnswers = {
    ...answers,
    [question.id]: answer,
  };

  setAnswers(updatedAnswers);

  setTimeout(() => {
    if (currentQuestion === matcherQuestions.length - 1) {
      const matches = matchCountries(updatedAnswers);

      setResults(matches.slice(0, 5));

      setFinished(true);

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }, 300);
}

  function nextQuestion() {
    if (currentQuestion === matcherQuestions.length - 1) {
      const matches = matchCountries({
        ...answers,
        [question.id]: answers[question.id],
      });

      setResults(matches.slice(0, 5));

      setFinished(true);

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  if (finished) {
    return (
      <section className="max-w-5xl mx-auto py-20">

        <h1 className="text-4xl font-bold mb-4 text-center">

          🎯 Your Best Study Destinations

        </h1>

        <p className="text-center text-slate-600 mb-12">

          Based on your answers we found these countries.

        </p>

        <div className="space-y-6">

          {results.map((country) => (
           <ResultCard
    key={country.slug}
    name={country.name}
    score={country.score}
    description={country.description}
    href={country.href}
/>
          ))}

        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto py-20">

      <div className="mb-10">

        <div className="flex justify-between mb-3">

          <span className="font-semibold">

            Question {currentQuestion + 1} of {matcherQuestions.length}

          </span>

          <span>

            {Math.round(
              ((currentQuestion + 1) /
                matcherQuestions.length) *
                100
            )}
            %
          </span>

        </div>

        <div className="w-full h-3 rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  matcherQuestions.length) *
                100
              }%`,
            }}
          />

        </div>

      </div>

      <QuestionCard
        title={question.title}
        options={question.options}
        value={answers[question.id]}
        onSelect={handleAnswer}
      />

      <div className="flex justify-start mt-8">

  {currentQuestion > 0 && (
    <button
      onClick={previousQuestion}
      className="px-6 py-3 rounded-xl border border-slate-300"
    >
      ← Previous
    </button>
  )}

</div>

    </section>
  );
}