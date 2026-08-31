"use client";

import { useEffect, useState } from "react";
import Section from "./Section";
import { Consultant } from "@/types/consultant";
import {
  createConsultantReview,
  getConsultantReviews,
  getMyConsultantReview,
  type ConsultantReview,
} from "@/lib/reviewService";
import { supabase } from "@/lib/supabase";

type Props = {
  consultant: Consultant;
};

export default function ConsultantReviews({
  consultant,
}: Props) {
  const [reviews, setReviews] =
    useState<ConsultantReview[]>([]);

  const [averageRating, setAverageRating] =
    useState(0);

  const [reviewCount, setReviewCount] =
    useState(0);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [myReview, setMyReview] =
    useState<ConsultantReview | null>(null);

  const [showForm, setShowForm] =
    useState(false);

  const [rating, setRating] =
    useState(5);

  const [reviewText, setReviewText] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  async function loadReviews() {
    try {
      setLoading(true);
      setError("");

      const data =
        await getConsultantReviews(
          consultant.id
        );

      setReviews(data);

      if (data.length > 0) {
        const total = data.reduce(
          (sum, review) =>
            sum + Number(review.rating),
          0
        );

        const average =
          total / data.length;

        setAverageRating(
          Math.round(average * 10) / 10
        );

        setReviewCount(data.length);
      } else {
        setAverageRating(0);
        setReviewCount(0);
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsLoggedIn(true);

        const existingReview =
          await getMyConsultantReview(
            consultant.id
          );

        setMyReview(existingReview);
      } else {
        setIsLoggedIn(false);
        setMyReview(null);
      }
    } catch (error) {
      console.error(
        "Load consultant reviews error:",
        error
      );

      setError(
        "Could not load reviews."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      () => {
        loadReviews();
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [consultant.id]);

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    if (!isLoggedIn) {
      setError(
        "Please log in to write a review."
      );
      return;
    }

    if (!reviewText.trim()) {
      setError(
        "Please write a review."
      );
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await createConsultantReview(
        consultant.id,
        rating,
        reviewText
      );

      setReviewText("");
      setRating(5);
      setShowForm(false);

      await loadReviews();
    } catch (error: any) {
      console.error(
        "Submit review error:",
        error
      );

      if (
        error?.code === "23505"
      ) {
        setError(
          "You have already reviewed this consultant."
        );
      } else {
        setError(
          error?.message ||
            "Could not submit your review."
        );
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section
      title="Student Reviews"
      icon="⭐"
      gradient="linear-gradient(90deg,#EAB308,#F59E0B)"
    >
      {/* Rating summary */}

      <div className="mb-8 flex items-center gap-4">
        <span className="text-5xl">
          ⭐
        </span>

        <div>
          <h3 className="text-4xl font-bold">
            {reviewCount > 0
              ? averageRating.toFixed(1)
              : "0.0"}
          </h3>

          <p className="text-slate-500">
            {reviewCount}{" "}
            {reviewCount === 1
              ? "Review"
              : "Reviews"}
          </p>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      {/* Write review */}

      {isLoggedIn && !myReview && (
        <>
          {!showForm && (
            <div className="mb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setShowForm(true);
                  setError("");
                }}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                ✍️ Write a Review
              </button>
            </div>
          )}

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">
                Share your experience
              </h3>

              <p className="mt-1 text-slate-600">
                Rate this consultant from 0
                to 5.
              </p>

              {/* Rating */}

              <div className="mt-6">
                <label className="block font-semibold text-slate-700">
                  Rating
                </label>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[0, 1, 2, 3, 4, 5].map(
                    (value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setRating(value)
                        }
                        className={`rounded-xl px-4 py-3 font-bold transition ${
                          rating === value
                            ? "bg-blue-700 text-black"
                            : "bg-white text-slate-700 border border-black hover:bg-yellow-50"
                        }`}
                      >
                        {value} ⭐
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Review */}

              <div className="mt-6">
                <label className="block font-semibold text-slate-700">
                  Your Review
                </label>

                <textarea
                  value={reviewText}
                  onChange={(event) =>
                    setReviewText(
                      event.target.value
                    )
                  }
                  rows={5}
                  placeholder="Share your experience with this consultant..."
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Actions */}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Review"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setError("");
                  }}
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </>
      )}

      {/* Logged out */}

      {!isLoggedIn && (
        <div className="mb-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center">
          <div className="text-5xl mb-4">
            💬
          </div>

          <h3 className="text-xl font-bold">
            Want to share your experience?
          </h3>

          <p className="mt-2 text-slate-600">
            Log in to write a review.
          </p>
        </div>
      )}

      {/* Existing review */}

      {myReview && (
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="font-semibold text-blue-900">
            You have already reviewed this
            consultant.
          </p>

          <p className="mt-2 text-slate-700">
            Your rating:{" "}
            <strong>
              {myReview.rating} ⭐
            </strong>
          </p>
        </div>
      )}

      {/* Reviews */}

      {loading ? (
        <div className="rounded-2xl bg-slate-50 p-8 text-center text-slate-500">
          Loading reviews...
        </div>
      ) : reviews.length === 0 ? (
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center">
          <div className="mb-5 text-6xl">
            💬
          </div>

          <h3 className="text-2xl font-bold">
            No reviews yet
          </h3>

          <p className="mt-3 text-slate-600">
            Be the first to share your
            experience.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-slate-900">
            Latest Reviews
          </h3>

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-lg font-bold text-yellow-500">
                    {Number(
                      review.rating
                    ).toFixed(1)}{" "}
                    ⭐
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {new Date(
                      review.created_at
                    ).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-7 text-slate-700">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}