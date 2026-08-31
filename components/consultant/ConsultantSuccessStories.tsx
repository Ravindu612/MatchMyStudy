"use client";

import { useEffect, useState } from "react";
import type { SuccessStory } from "@/types/successStory";
import {
  getSuccessStories,
  deleteSuccessStory,
} from "@/lib/successStoryService";

type Props = {
  consultantId: string;
  canManage: boolean;
  isPro: boolean;
};

export default function ConsultantSuccessStories({
  consultantId,
  canManage,
  isPro,
}: Props) {
  if (!isPro) {
  return null;
}
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deletingId, setDeletingId] =
  useState<string | null>(null);

  useEffect(() => {
    async function loadStories() {
      setLoading(true);

      const data = await getSuccessStories(consultantId);

      console.log("SUCCESS STORIES:", data);

      setStories(data);
      setLoading(false);
    }

    loadStories();
  }, [consultantId]);

  async function handleDelete(storyId: string) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this success story?"
  );

  if (!confirmed) {
    return;
  }

  try {
    setDeletingId(storyId);

    await deleteSuccessStory(storyId);

    setStories((prev) =>
      prev.filter((story) => story.id !== storyId)
    );

    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(stories.length - 3, 0))
    );
  } catch (error) {
    console.error(error);

    alert(
      "Could not delete the success story. Please try again."
    );
  } finally {
    setDeletingId(null);
  }
}

  if (loading) {
    return (
      <section className="mt-12 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-slate-500">
            Loading success stories...
          </p>
        </div>
      </section>
    );
  }

  if (stories.length === 0) {
    return null;
  }

  const visibleStories = stories.slice(
    currentIndex,
    currentIndex + 2
  );

  const canGoPrevious = currentIndex > 0;

  const canGoNext =
    currentIndex + 2 < stories.length;

  function handlePrevious() {
    setCurrentIndex((prev) =>
      Math.max(prev - 1, 0)
    );
  }

  function handleNext() {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, stories.length - 2)
    );
  }

  return (
    <section className="mt-12 px-4 sm:px-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
            ⭐ Student Success Stories
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Student Success Stories
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Discover the experiences of students who
            successfully achieved their study abroad goals
            with this consultancy.
          </p>

        </div>


        {/* Stories */}

        <div className="flex items-center gap-4">

          {/* Previous button */}

          <button
            type="button"
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            aria-label="Previous success stories"
            className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-blue-800 text-4xl text-slate-500 shadow-md transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
          >
            ‹‹
          </button>


          {/* Cards */}

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 md:grid-cols-2">

            {visibleStories.map((story) => (

              <article
                key={story.id}
                className="min-h-[300px] rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="p-6 md:p-7">

                  {/* Student information */}

                  <div className="flex items-start gap-5">

                    {/* Student image */}

                    {story.imageUrl ? (

                      <img
                        src={story.imageUrl}
                        alt={story.studentName}
                        className="h-32 w-32 flex-shrink-0 rounded-2xl border border-slate-200 object-cover"
                      />

                    ) : (

                      <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-4xl">
                        🎓
                      </div>

                    )}


                    {/* Student details */}

                    <div className="min-w-0 pt-1">

                      <h3 className="text-xl font-bold text-slate-900">
                        {story.studentName}
                      </h3>

                      {story.university && (
                        <p className="mt-3 font-semibold text-blue-700">
                          🎓 {story.university}
                        </p>
                      )}

                      {story.country && (
                        <p className="mt-2 text-slate-600">
                          🌍 {story.country}
                        </p>
                      )}

                      {story.program && (
                        <p className="mt-2 text-slate-600">
                          📚 {story.program}
                        </p>
                      )}

                    </div>

                  </div>


                  {/* Story text */}

                  <div className="mt-7 border-t border-slate-100 pt-6">

  <p className="text-base leading-7 text-slate-600">
    "{story.story}"
  </p>

  {/* Manage story */}

  {canManage && (
  <div className="mt-6 flex justify-end">

    <button
      type="button"
      onClick={() => handleDelete(story.id)}
      disabled={deletingId === story.id}
      className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {deletingId === story.id
        ? "Deleting..."
        : "🗑️ Delete"}
    </button>

  </div>
)}

</div>

                </div>

              </article>

            ))}

          </div>


          {/* Next button */}

          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next success stories"
            className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-4xl text-slate-500 shadow-md transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
          >
            ››
          </button>

        </div>


        {/* Mobile navigation */}

        {stories.length > 2 && (
          <div className="mt-6 flex justify-center gap-3 md:hidden">

            <button
              type="button"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 disabled:opacity-40"
            >
              ← Previous
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 disabled:opacity-40"
            >
              Next →
            </button>

          </div>
        )}

      </div>

    </section>
  );
}