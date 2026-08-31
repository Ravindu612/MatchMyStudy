"use client";

import { useEffect, useState } from "react";
import type { PromotionalContent } from "@/types/promotionalContent";
import {
  getPromotionalContent,
  deletePromotionalContent,
} from "@/lib/promotionalContentService";

type Props = {
  consultantId: string;
  canManage: boolean;
  isPro: boolean;
};

export default function ConsultantPromotionalContent({
  consultantId,
  canManage,
  isPro,
}: Props) {
  if (!isPro) {
  return null;
}
  const [content, setContent] = useState<
    PromotionalContent[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [deletingId, setDeletingId] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);

      const data =
        await getPromotionalContent(
          consultantId
        );

      setContent(data);
      setLoading(false);
    }

    loadContent();
  }, [consultantId]);

  async function handleDelete(
    contentId: string
  ) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this promotional content?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(contentId);

      await deletePromotionalContent(
        contentId
      );

      setContent((prev) =>
        prev.filter(
          (item) => item.id !== contentId
        )
      );
    } catch (error) {
      console.error(error);

      alert(
        "Could not delete the promotional content. Please try again."
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
            Loading promotional content...
          </p>
        </div>
      </section>
    );
  }

  /*
   * If there is no promotional content,
   * don't display the public section.
   */
  if (content.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 px-4 sm:px-6">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-sm font-bold text-purple-700">
            ⭐ Featured Content
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Consultancy Highlights
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Discover more about this consultancy,
            its services, achievements and special
            opportunities for international students.
          </p>

        </div>


        {/* Content grid */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {content.map((item) => (

            <article
              key={item.id}
              className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}

              {item.imageUrl ? (

                <div className="bg-white p-4">

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-56 w-full rounded-2xl object-cover"
                  />

                </div>

              ) : (

                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 text-6xl">
                  ⭐
                </div>

              )}


              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                )}


                {/* Management */}

                {canManage && (
                  <div className="mt-6 flex justify-end">

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      disabled={
                        deletingId === item.id
                      }
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === item.id
                        ? "Deleting..."
                        : "🗑️ Delete"}
                    </button>

                  </div>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}