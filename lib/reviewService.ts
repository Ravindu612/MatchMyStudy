import { supabase } from "./supabase";

export type ConsultantReview = {
  id: string;
  consultant_id: string;
  user_id: string;
  rating: number;
  review: string;
  created_at: string;
  updated_at: string;
};

export async function getConsultantReviews(
  consultantId: string
) {
  const { data, error } = await supabase
    .from("consultant_reviews")
    .select("*")
    .eq("consultant_id", consultantId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Get consultant reviews error:",
      error
    );

    throw error;
  }

  return data as ConsultantReview[];
}

export async function getConsultantReviewSummary(
  consultantId: string
) {
  const reviews =
    await getConsultantReviews(consultantId);

  if (reviews.length === 0) {
    return {
      averageRating: 0,
      reviewCount: 0,
    };
  }

  const totalRating = reviews.reduce(
    (sum, review) =>
      sum + Number(review.rating),
    0
  );

  const averageRating =
    totalRating / reviews.length;

  return {
    averageRating:
      Math.round(averageRating * 10) / 10,
    reviewCount: reviews.length,
  };
}

export async function createConsultantReview(
  consultantId: string,
  rating: number,
  review: string
) {
  if (rating < 0 || rating > 5) {
    throw new Error(
      "Rating must be between 0 and 5."
    );
  }

  if (!review.trim()) {
    throw new Error(
      "Review cannot be empty."
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error(
      "You must be logged in to write a review."
    );
  }

  const { data, error } = await supabase
    .from("consultant_reviews")
    .insert({
      consultant_id: consultantId,
      user_id: user.id,
      rating,
      review: review.trim(),
    })
    .select("*")
    .single();

  if (error) {
    console.error(
      "Create consultant review error:",
      error
    );

    throw error;
  }

  return data as ConsultantReview;
}

export async function getMyConsultantReview(
  consultantId: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("consultant_reviews")
    .select("*")
    .eq("consultant_id", consultantId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error(
      "Get my consultant review error:",
      error
    );

    throw error;
  }

  return data as ConsultantReview | null;
}

export async function getConsultantAverageRating(
  consultantId: string
) {
  const reviews =
    await getConsultantReviews(consultantId);

  if (reviews.length === 0) {
    return {
      averageRating: 0,
      reviewCount: 0,
    };
  }

  const total = reviews.reduce(
    (sum, review) =>
      sum + Number(review.rating),
    0
  );

  const average =
    total / reviews.length;

  return {
    averageRating:
      Math.round(average * 10) / 10,
    reviewCount: reviews.length,
  };
}