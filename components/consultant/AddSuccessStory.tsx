"use client";

import { useState } from "react";
import { createSuccessStory } from "@/lib/successStoryService";
import { uploadImage } from "@/lib/uploadImage";

type Props = {
  consultantId: string;
  onCreated: () => void;
};

export default function AddSuccessStory({
  consultantId,
  onCreated,
}: Props) {
  const [showForm, setShowForm] = useState(false);

  const [studentName, setStudentName] =
    useState("");

  const [university, setUniversity] =
    useState("");

  const [country, setCountry] =
    useState("");

  const [program, setProgram] =
    useState("");

  const [story, setStory] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [imageFile, setImageFile] =
  useState<File | null>(null);

const [imagePreview, setImagePreview] =
  useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    let imageUrl = "";

if (imageFile) {
  imageUrl = await uploadImage(
    imageFile,
    "consultant-success-stories"
  );
}

    if (!studentName.trim()) {
      setError(
        "Please enter the student's name."
      );
      return;
    }

    if (!story.trim()) {
      setError(
        "Please enter the success story."
      );
      return;
    }

    try {
      setLoading(true);

      await createSuccessStory({
        consultantId,

        studentName:
          studentName.trim(),

        university:
          university.trim() || undefined,

        country:
          country.trim() || undefined,

        program:
          program.trim() || undefined,

        story:
          story.trim(),

        imageUrl,
      });

      setStudentName("");
      setUniversity("");
      setCountry("");
      setProgram("");
      setStory("");

      onCreated();
    } catch (error) {
      console.error(error);

      setError(
        "Could not create the success story. Please try again."
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
      onClick={() => setShowForm((prev) => !prev)}
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
    >
      {showForm
        ? "✕ Close Form"
        : "➕ Add Success Story"}
    </button>


    {/* Form */}

    {showForm && (
      <div className="mt-6">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Add Student Success Story
          </h2>

          <p className="mt-2 text-slate-600">
            Share a student's successful study
            abroad experience.
          </p>
        </div>


        {/* Error */}

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
            {error}
          </div>
        )}


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >

          {/* Success Story Photo */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Success Story Photo
            </label>

            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Success story preview"
                  className="h-32 w-32 rounded-2xl object-cover border border-slate-200"
                />
              </div>
            )}

            <label className="inline-block cursor-pointer rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-200 transition">
              📷 Choose Photo

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


          {/* Student name */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Student Name *
            </label>

            <input
              type="text"
              value={studentName}
              onChange={(e) =>
                setStudentName(e.target.value)
              }
              placeholder="Student name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>


          {/* University */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              University
            </label>

            <input
              type="text"
              value={university}
              onChange={(e) =>
                setUniversity(e.target.value)
              }
              placeholder="University name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>


          {/* Country */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Study Country
            </label>

            <input
              type="text"
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              placeholder="Finland"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>


          {/* Program */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Program
            </label>

            <input
              type="text"
              value={program}
              onChange={(e) =>
                setProgram(e.target.value)
              }
              placeholder="Bachelor's / Master's program"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>


          {/* Story */}

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Success Story *
            </label>

            <textarea
              rows={6}
              value={story}
              onChange={(e) =>
                setStory(e.target.value)
              }
              placeholder="Tell students about this student's successful journey..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>


          {/* Submit button */}

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Adding..."
              : "Add Success Story"}
          </button>

        </form>

      </div>
    )}

  </div>
);
}