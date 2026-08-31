"use client";

import { useState } from "react";
import {
  createPromotionalContent,
} from "@/lib/promotionalContentService";
import { uploadImage } from "@/lib/uploadImage";

type Props = {
  consultantId: string;
  onCreated: () => void;
};

export default function AddPromotionalContent({
  consultantId,
  onCreated,
}: Props) {
  const [showForm, setShowForm] =
    useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [imagePreview, setImagePreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError(
        "Please enter a title."
      );
      return;
    }

    try {
      setLoading(true);

      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImage(
          imageFile,
          "consultant-promotional-content"
        );
      }

      await createPromotionalContent({
        consultantId,

        title: title.trim(),

        description:
          description.trim() || undefined,

        imageUrl: imageUrl || undefined,
      });

      // Clear form

      setTitle("");
      setDescription("");
      setImageFile(null);
      setImagePreview("");

      // Close form

      setShowForm(false);

      // Refresh content

      onCreated();

    } catch (error) {
      console.error(error);

      setError(
        "Could not create promotional content. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

      {/* Add / Close button */}

      <button
        type="button"
        onClick={() =>
          setShowForm((prev) => !prev)
        }
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
      >
        {showForm
          ? "✕ Close Form"
          : "➕ Add Promotional Content"}
      </button>


      {/* Form */}

      {showForm && (
        <div className="mt-6">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Add Promotional Content
            </h2>

            <p className="mt-2 text-slate-600">
              Showcase your consultancy,
              services, achievements and
              promotional campaigns.
            </p>
          </div>


          {/* Error */}

          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              {error}
            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >

            {/* Image */}

            <div>

              <label className="mb-2 block font-semibold text-slate-700">
                Promotional Image
              </label>

              {imagePreview && (
                <div className="mb-4">
                  <img
                    src={imagePreview}
                    alt="Promotional preview"
                    className="h-32 w-32 rounded-2xl border border-slate-200 object-cover shadow-sm"
                  />
                </div>
              )}

              <label className="inline-block cursor-pointer rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-200">

                📷 Choose Image

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file =
                      e.target.files?.[0];

                    if (!file) return;

                    setImageFile(file);

                    setImagePreview(
                      URL.createObjectURL(file)
                    );
                  }}
                  className="hidden"
                />

              </label>

              <p className="mt-2 text-sm text-slate-500">
                JPG, PNG or WebP. Optional.
              </p>

            </div>


            {/* Title */}

            <div>

              <label className="mb-2 block font-semibold text-slate-700">
                Title *
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Study in Finland"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Description */}

            <div>

              <label className="mb-2 block font-semibold text-slate-700">
                Description
              </label>

              <textarea
                rows={5}
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                placeholder="Tell students about this promotion, service or achievement..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Adding..."
                : "Add Promotional Content"}
            </button>

          </form>

        </div>
      )}

    </div>
  );
}