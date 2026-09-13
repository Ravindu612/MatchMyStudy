"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Consultant } from "@/types/consultant";
import { supabase } from "@/lib/supabase";
import { countries } from "@/data/countries";
import { uploadImage } from "@/lib/uploadImage";
import { getCurrentUser } from "@/lib/auth";


export default function ApplyConsultantPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
  consultancyName: "",
  website: "",
  contactPerson: "",
  email: "",
  phone: "",
  officeCountry: "",
  city: "",
  homeCountry: "",
  destinationCountries: [] as string[],
  services: [] as string[],
  description: "",
  maps: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  logo: null,
});

const [logoPreview, setLogoPreview] = useState("");
const [logoFile, setLogoFile] = useState<File | null>(null);
const [isSubmitting, setIsSubmitting] = useState(false);

const [partnerUniversities, setPartnerUniversities] = useState<string[]>([]);
const [universityInput, setUniversityInput] = useState("");

const [bannerPreview, setBannerPreview] = useState("");
const [bannerFile, setBannerFile] = useState<File | null>(null);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleLogoChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setLogoFile(file);

  const imageUrl = URL.createObjectURL(file);

  setLogoPreview(imageUrl);
};

const handleBannerChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setBannerFile(file);

  const imageUrl = URL.createObjectURL(file);

  setBannerPreview(imageUrl);
};

const handleServiceChange = (service: string) => {
  setFormData((prev) => ({
    ...prev,
    services: prev.services.includes(service)
      ? prev.services.filter((s) => s !== service)
      : [...prev.services, service],
  }));
};

const handleDestinationChange = (country: string) => {
  setFormData((prev) => ({
    ...prev,
    destinationCountries: prev.destinationCountries.includes(country)
      ? prev.destinationCountries.filter((c) => c !== country)
      : [...prev.destinationCountries, country],
  }));
};

const handleAddUniversity = () => {
  const university = universityInput.trim();

  if (!university) return;

  if (
    partnerUniversities.some(
      (item) => item.toLowerCase() === university.toLowerCase()
    )
  ) {
    alert("This university has already been added.");
    return;
  }

  setPartnerUniversities((prev) => [...prev, university]);
  setUniversityInput("");
};

const handleRemoveUniversity = (university: string) => {
  setPartnerUniversities((prev) =>
    prev.filter((item) => item !== university)
  );
};

const handleSubmit = async () => {
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    let logoUrl = "/images/consultants/default-logo.png";

  if (logoFile) {
    logoUrl = await uploadImage(
      logoFile,
      "consultant-logos"
    );
  }

  let bannerUrl = "/images/default-banner.jpg";

  if (bannerFile) {
    bannerUrl = await uploadImage(
      bannerFile,
      "consultant-banners"
    );
  }

  const consultant: Consultant = {
    id: crypto.randomUUID(),

    slug: formData.consultancyName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),

    name: formData.consultancyName,

    logo: logoUrl,

    banner: bannerUrl,

    verified: false,

    rating: 0,

    reviews: 0,

    city: formData.city,

    country: formData.officeCountry,

    homeCountry: formData.homeCountry,

    destinationCountries: formData.destinationCountries,

    services: formData.services,

    partnerUniversities: partnerUniversities,

    phone: formData.phone,

    email: formData.email,

    website: formData.website,

    contactPerson: formData.contactPerson,

    address: "",

    established: "",

    description: formData.description,

    gallery: [],

    maps: formData.maps,

    facebook: formData.facebook,

    instagram: formData.instagram,

    linkedin: formData.linkedin,

    youtube: formData.youtube,
  };

  const user = await getCurrentUser();

if (!user) {
  throw new Error(
  "You must be logged in to create a consultant profile."
);
}

  const { error } = await supabase
  .from("consultants")
  .insert([
    {
      slug: consultant.slug,
      name: consultant.name,
      logo: consultant.logo,
      banner: consultant.banner,
      verified: consultant.verified,
      rating: consultant.rating,
      reviews: consultant.reviews,
      city: consultant.city,
      country: consultant.country,
      home_country: consultant.homeCountry,
      destination_countries: consultant.destinationCountries,
      services: consultant.services,
      partner_universities: consultant.partnerUniversities,
      phone: consultant.phone,
      email: consultant.email,
      website: consultant.website,
      address: consultant.address,
      established: consultant.established,
      description: consultant.description,
      gallery: consultant.gallery,
      contact_person: consultant.contactPerson,
      maps: consultant.maps,
      facebook: consultant.facebook,
      instagram: consultant.instagram,
      linkedin: consultant.linkedin,
      youtube: consultant.youtube,
      featured: false,
      status: "pending",
      created_by_consultant: true,
      is_pro: false,
      owner_id: user.id
    },
  ]);

if (error) {
  console.error(error);

  if (error.code === "23505") {
    alert(
      "A consultancy with this name already exists. Please choose a different consultancy name."
    );
  } else {
    alert(error.message);
  }

  setIsSubmitting(false);
  return;
}

  console.log(consultant);

  router.push("/consultants/success");

  } catch (error) {
    console.error("Create consultant profile error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong while creating your profile."
    );
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-white">
  Create Your Consultancy Profile
</h1>

          <p className="mt-4 text-xl text-blue-100 max-w-2xl">
            Create your consultancy profile to reach thousands of students searching for trusted study abroad guidance. You can apply for verification after your profile is published.
          </p>

        </div>

      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">

  

  <div className="mt-8 grid md:grid-cols-2 gap-6">

  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Consultancy Name *
    </label>

    <input
      type="text"
      name="consultancyName"
      value={formData.consultancyName}
      onChange={handleChange}
      placeholder="Ex: ABC Study Abroad"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Website
    </label>

    <input
      type="url"
      name="website"
      value={formData.website}
      onChange={handleChange}
      placeholder="https://example.com"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Contact Person *
    </label>

    <input
      type="text"
      name="contactPerson"
      value={formData.contactPerson}
      onChange={handleChange}
      placeholder="John Smith"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Business Email *
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="info@example.com"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Phone Number
    </label>

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+44 123 456 789"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Office Location
  </h2>

  <div className="mt-6 grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        Office Country *
      </label>

      <select 
      name="officeCountry"
  value={formData.officeCountry}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-300 px-4 py-3">
         <option value="">Select Country</option>

  {[...countries]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((country) => (
      <option
        key={country.slug}
        value={country.name}
      >
        {country.name}
      </option>
    ))}
</select>
    </div>

    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        City *
      </label>

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="London"
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

  </div>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Student Markets
  </h2>

  <div className="mt-6">

    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Students' Home Country *
    </label>

    <select 
    name="homeCountry"
  value={formData.homeCountry}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-300 px-4 py-3">
       <option value="">Select Country</option>

  {[...countries]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((country) => (
      <option
        key={country.slug}
        value={country.name}
      >
        {country.name}
      </option>
    ))}
</select>

  </div>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Countries & Services
  </h2>

  <div className="mt-6 grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        Countries You Recruit For *
      </label>

      <div className="rounded-2xl border border-slate-300 bg-white shadow-sm">
  <div className="max-h-64 overflow-y-auto p-4">

    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-1">

      {[...countries]
        .filter((country) => country.status === "available")
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country) => (

          <label
            key={country.slug}
            className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition
              ${
                formData.destinationCountries.includes(country.name)
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
          >
            <input
              type="checkbox"
              checked={formData.destinationCountries.includes(country.name)}
              onChange={() => handleDestinationChange(country.name)}
              className="h-4 w-4"
            />

            <span className="text-sm">
              {country.name}
            </span>
          </label>

        ))}

    </div>

  </div>
</div>

    </div>

    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        Primary Service *
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-xl border border-slate-300 p-4">

  {[
    "Study Abroad Consultancy",
    "University Admission",
    "Student Visa",
    "Scholarship Assistance",
    "IELTS / PTE Coaching",
    "Accommodation Support",
    "SOP & LOR Assistance",
    "Career Counselling",
    "Education Loan Assistance",
    "Pre-Departure Support",
  ].map((service) => (
    <label
      key={service}
      className="flex items-center gap-3 cursor-pointer"
    >
      <input
        type="checkbox"
        checked={formData.services.includes(service)}
        onChange={() => handleServiceChange(service)}
        className="h-5 w-5 rounded border-slate-300"
      />

      <span>{service}</span>
    </label>
  ))}

</div>

    </div>

  </div>

</div>
<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Universities
  </h2>

  <p className="mt-2 text-sm text-slate-500">
    Add the universities your consultancy works with.
  </p>

  <div className="mt-6">

    <div className="flex gap-3">

      <input
        type="text"
        value={universityInput}
        onChange={(e) => setUniversityInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddUniversity();
          }
        }}
        placeholder="Enter university name"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <button
        type="button"
        onClick={handleAddUniversity}
        className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition"
      >
        + Add
      </button>

    </div>

    {partnerUniversities.length > 0 && (
      <div className="mt-4 space-y-2">

        {partnerUniversities.map((university) => (
          <div
            key={university}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
          >

            <span className="text-sm font-medium text-slate-700">
              {university}
            </span>

            <button
              type="button"
              onClick={() => handleRemoveUniversity(university)}
              className="ml-4 text-sm font-medium text-red-600 hover:text-red-700"
            >
              Remove
            </button>

          </div>
        ))}

      </div>
    )}

  </div>

</div>
<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    About Your Consultancy
  </h2>

  <div className="mt-6">

    <label className="block mb-2 text-sm font-semibold text-slate-700">
      Short Description *
    </label>

    <textarea
      rows={5}
      name="description"
      value={formData.description}
      onChange={handleChange}
      placeholder="Tell students about your consultancy, your experience and what makes you different."
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />

  </div>

</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Google Maps Link
  </h2>



    <div>

      <input
        type="url"
        name="maps"
        value={formData.maps}
        onChange={handleChange}
        placeholder="https://maps.google.com/..."
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />

    </div>

  </div>


<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Social Media
  </h2>

  <div className="mt-6 grid md:grid-cols-2 gap-6">

    <input
      name="facebook"
      value={formData.facebook}
      onChange={handleChange}
      placeholder="Facebook URL"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      name="instagram"
      value={formData.instagram}
      onChange={handleChange}
      placeholder="Instagram URL"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      name="linkedin"
      value={formData.linkedin}
      onChange={handleChange}
      placeholder="LinkedIn URL"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      name="youtube"
      value={formData.youtube}
      onChange={handleChange}
      placeholder="YouTube URL"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

  </div>

</div>
<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Upload Your Logo
  </h2>

<div className="mt-10 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition">

  {logoPreview ? (

    <img
      src={logoPreview}
      alt="Logo Preview"
      className="mx-auto mb-5 h-28 w-28 rounded-2xl border object-contain bg-white shadow"
    />

  ) : (

    <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-2xl bg-slate-100 text-5xl">
      🏢
    </div>

  )}

  <h3 className="text-lg font-bold text-slate-800">
    Consultancy Logo
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    PNG, JPG or SVG
    <br />
    Recommended size: 500 × 500 px
  </p>

  <label className="mt-6 inline-block cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">

    Choose Logo

    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setLogoFile(file);
  setLogoPreview(URL.createObjectURL(file));
}}
      className="hidden"
    />

  </label>

</div>
</div>

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    Upload Your Profile Banner
  </h2>

  <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition">

    {bannerPreview ? (

      <img
        src={bannerPreview}
        alt="Banner Preview"
        className="mx-auto mb-5 h-48 w-full max-w-3xl rounded-2xl border object-cover bg-white shadow"
      />

    ) : (

      <div className="mx-auto mb-5 flex h-48 w-full max-w-3xl items-center justify-center rounded-2xl bg-slate-100 text-5xl">
        🖼️
      </div>

    )}

    <h3 className="text-lg font-bold text-slate-800">
      Consultancy Profile Banner
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      PNG, JPG or WEBP
      <br />
      Recommended size: 1600 × 600 px
    </p>

    <label className="mt-6 inline-block cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">

      Choose Banner

      <input
        type="file"
        accept="image/*"
        onChange={handleBannerChange}
        className="hidden"
      />

    </label>

  </div>

</div>

<div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">

  <h3 className="font-bold text-blue-900 text-lg">
    🚀 You're almost there!
  </h3>

  <ul className="mt-4 space-y-2 text-sm text-slate-700">

    <li>✅ Your profile will be published immediately.</li>

    <li>⭐ You can apply for verification anytime after publishing.</li>

    <li>📷 You can update your logo and details later.</li>

    <li>💬 Students will be able to contact you through your profile.</li>

  </ul>


  <button
  type="button"
  onClick={handleSubmit}
  disabled={isSubmitting}
  className={`mt-5 inline-block rounded-xl px-6 py-3 text-white font-medium transition ${
    isSubmitting
      ? "cursor-not-allowed bg-blue-400 opacity-70"
      : "cursor-pointer bg-blue-600 hover:bg-blue-700"
  }`}
>
  {isSubmitting
    ? "Creating Profile..."
    : "🚀 Publish My Consultancy Profile"}
</button>

</div>

</section>

    </main>
  );
}