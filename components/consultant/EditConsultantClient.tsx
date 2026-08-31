"use client";

import { useEffect, useState } from "react";
import {
  getConsultantBySlug,
  updateConsultant,
  deleteConsultant,
} from "@/lib/consultantService";
import type { Consultant } from "@/types/consultant";
import { countries } from "@/data/countries";
import { uploadImage } from "@/lib/uploadImage";
import { useRouter } from "next/navigation";
import { consultants } from "@/data/consultants";
import ClaimProfile from "./ClaimProfile";

type Props = {
  slug: string;
};

export default function EditConsultantClient({ slug }: Props) {
    const router = useRouter();
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [formData, setFormData] = useState({
  name: "",
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
});

const [logoFile, setLogoFile] = useState<File | null>(null);
const [bannerFile, setBannerFile] = useState<File | null>(null);

const [logoPreview, setLogoPreview] = useState("");
const [bannerPreview, setBannerPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleLogoChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setLogoFile(file);
  setLogoPreview(URL.createObjectURL(file));
};

const handleBannerChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setBannerFile(file);
  setBannerPreview(URL.createObjectURL(file));
};

const handleDestinationChange = (country: string) => {
  setFormData((prev) => ({
    ...prev,
    destinationCountries:
      prev.destinationCountries.includes(country)
        ? prev.destinationCountries.filter(
            (c) => c !== country
          )
        : [
            ...prev.destinationCountries,
            country,
          ],
  }));
};

const handleServiceChange = (service: string) => {
  setFormData((prev) => ({
    ...prev,
    services: prev.services.includes(service)
      ? prev.services.filter(
          (s) => s !== service
        )
      : [
          ...prev.services,
          service,
        ],
  }));
};

const handleDelete = async () => {
  if (!consultant) return;

  const confirmed = window.confirm(
    "Are you sure you want to permanently delete this consultancy profile?"
  );

  if (!confirmed) return;

  try {
    setDeleting(true);

    await deleteConsultant(consultant.id);

    router.push("/consultants");
  } catch (error) {
    console.error("Delete profile error:", error);

    alert(
      "Could not delete the profile. Please try again."
    );

    setDeleting(false);
  }
};

  useEffect(() => {
    async function loadConsultant() {
      const data = await getConsultantBySlug(slug);

      if (data) {
        setConsultant({
          id: data.id,
          slug: data.slug,
          name: data.name,
          logo: data.logo,
          banner: data.banner,
          verified: data.verified,
          rating: data.rating,
          reviews: data.reviews,
          city: data.city,
          country: data.country,
          homeCountry: data.home_country,
          destinationCountries: data.destination_countries ?? [],
          services: data.services ?? [],
          partnerUniversities: data.partner_universities ?? [],
          phone: data.phone,
          email: data.email,
          website: data.website,
          address: data.address,
          contactPerson: data.contact_person,
          maps: data.maps,
          facebook: data.facebook,
          instagram: data.instagram,
          linkedin: data.linkedin,
          youtube: data.youtube,
          established: data.established,
          description: data.description,
          gallery: data.gallery ?? [],
        });

        setFormData({
  name: data.name ?? "",
  website: data.website ?? "",
  contactPerson: data.contact_person ?? "",
  email: data.email ?? "",
  phone: data.phone ?? "",

  officeCountry: data.country ?? "",
  city: data.city ?? "",

  homeCountry: data.home_country ?? "",

  destinationCountries:
    data.destination_countries ?? [],

  services:
    data.services ?? [],

  description:
    data.description ?? "",

  maps: data.maps ?? "",
  facebook: data.facebook ?? "",
  instagram: data.instagram ?? "",
  linkedin: data.linkedin ?? "",
  youtube: data.youtube ?? "",
});

setLogoPreview(data.logo ?? "");
setBannerPreview(data.banner ?? "");
      }

      setLoading(false);
    }

    loadConsultant();
  }, [slug]);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSave = async () => {
  if (!consultant) return;

  try {
    setSaving(true);

    let logoUrl = consultant.logo;
    let bannerUrl = consultant.banner;

    // Upload new logo only if the user selected one
    if (logoFile) {
      logoUrl = await uploadImage(
        logoFile,
        "consultant-logos"
      );
    }

    // Upload new banner only if the user selected one
    if (bannerFile) {
      bannerUrl = await uploadImage(
        bannerFile,
        "consultant-banners"
      );
    }

    const updated = await updateConsultant(
      consultant.id,
      {
        name: formData.name,
        website: formData.website,
        contact_person: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,

        country: formData.officeCountry,
        city: formData.city,

        home_country: formData.homeCountry,

        destination_countries:
          formData.destinationCountries,

        services:
          formData.services,

        description:
          formData.description,

        maps: formData.maps,
        facebook: formData.facebook,
        instagram: formData.instagram,
        linkedin: formData.linkedin,
        youtube: formData.youtube,

        logo: logoUrl,
        banner: bannerUrl,
      }
    );

    console.log("Updated consultant:", updated);

    setConsultant({
      ...consultant,
      logo: logoUrl,
      banner: bannerUrl,
      name: formData.name,
      website: formData.website,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      country: formData.officeCountry,
      city: formData.city,
      homeCountry: formData.homeCountry,
      destinationCountries:
        formData.destinationCountries,
      services: formData.services,
      description: formData.description,
      maps: formData.maps,
      facebook: formData.facebook,
      instagram: formData.instagram,
      linkedin: formData.linkedin,
      youtube: formData.youtube,
    });

    setLogoFile(null);
    setBannerFile(null);

    setShowSuccessMessage(true);

setTimeout(() => {
  setShowSuccessMessage(false);
}, 5000);
  } catch (error: any) {
  console.error("PROFILE UPDATE ERROR:", error);

  alert(
    error?.message ||
    error?.details ||
    error?.hint ||
    JSON.stringify(error)
  );
} finally {
    setSaving(false);
  }
};

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        Loading...
      </div>
    );
  }

  if (!consultant) {
  const manualConsultant = consultants.find(
    (c) => c.slug === slug
  );

  if (!manualConsultant) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Consultant not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ClaimProfile consultant={manualConsultant} />
      </div>
    </main>
  );
}

  return (
    
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-3xl font-bold">
          Edit Consultancy Profile
        </h1>

        <div className="mt-10 space-y-6">

  <div>
    <label className="block mb-2 font-semibold">
      Consultancy Name
    </label>

    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="block mb-2 font-semibold">
      Website
    </label>

    <input
      name="website"
      value={formData.website}
      onChange={handleChange}
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 font-semibold">
        Contact Person
      </label>

      <input
        name="contactPerson"
        value={formData.contactPerson}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Email
      </label>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 font-semibold">
        Phone
      </label>

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        City
      </label>

      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />

    </div>
    <div>
  <label className="block mb-2 font-semibold">
    Office Country
  </label>

  <select
    name="officeCountry"
    value={formData.officeCountry}
    onChange={(e) =>
      setFormData({
        ...formData,
        officeCountry: e.target.value,
      })
    }
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  >
    <option value="">Select country</option>

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
  <label className="block mb-2 font-semibold">
    Students' Home Country
  </label>

  <select
    name="homeCountry"
    value={formData.homeCountry}
    onChange={(e) =>
      setFormData({
        ...formData,
        homeCountry: e.target.value,
      })
    }
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  >
    <option value="">Select country</option>

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

<div className="mt-8">

  <label className="block mb-2 text-sm font-semibold text-slate-700">
    Countries You Recruit For
  </label>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-1">

    {[...countries]
      .filter((country) => country.status === "available")
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((country) => (
        <label
          key={country.slug}
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-50 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={formData.destinationCountries.includes(
              country.name
            )}
            onChange={() =>
              handleDestinationChange(country.name)
            }
            className="h-4 w-4"
          />

          <span className="text-sm">
            {country.name}
          </span>
        </label>
      ))}

  </div>

</div>

<div className="mt-8">

  <label className="block mb-2 text-sm font-semibold text-slate-700">
    Primary Services
  </label>

  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

    {[
      "University Applications",
      "Visa Assistance",
      "Career Guidance",
      "Scholarship Guidance",
      "Student Accommodation",
      "Test Preparation",
      "Pre-Departure Support",
      "Other",
    ].map((service) => (
      <label
        key={service}
        className="flex items-center gap-2 rounded-xl border border-slate-200 p-3 hover:bg-slate-50 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={formData.services.includes(service)}
          onChange={() =>
            handleServiceChange(service)
          }
          className="h-4 w-4"
        />

        <span className="text-sm">
          {service}
        </span>
      </label>
    ))}

  </div>

</div>

<div className="mt-8">

  <label className="block mb-2 font-semibold">
    About Your Consultancy
  </label>

  <textarea
    name="description"
    value={formData.description}
    onChange={(e) =>
      setFormData({
        ...formData,
        description: e.target.value,
      })
    }
    rows={6}
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
    placeholder="Tell students about your consultancy..."
  />

</div>

<div className="mt-8">

  <h2 className="text-xl font-bold text-slate-900">
    Online Presence
  </h2>

  <div className="mt-4 grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 font-semibold">
        Google Maps
      </label>

      <input
        name="maps"
        value={formData.maps}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Facebook
      </label>

      <input
        name="facebook"
        value={formData.facebook}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Instagram
      </label>

      <input
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        LinkedIn
      </label>

      <input
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        YouTube
      </label>

      <input
        name="youtube"
        value={formData.youtube}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
      />
    </div>

  </div>

</div>



    <div className="mt-10 grid md:grid-cols-2 gap-8">

  {/* Logo */}

  <div>
    <label className="block mb-2 font-semibold text-slate-700">
      Consultancy Logo
    </label>

    {logoPreview && (
      <div className="mb-4 flex justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <img
          src={logoPreview}
          alt="Consultancy logo"
          className="h-32 w-32 rounded-2xl object-contain"
        />
      </div>
    )}

    <input
      type="file"
      accept="image/png,image/jpeg,image/webp"
      onChange={handleLogoChange}
      className="block w-full rounded-xl border border-slate-300 px-4 py-3"
    />

    <p className="mt-2 text-sm text-slate-500">
      Upload a new logo to replace the current one.
    </p>
  </div>


</div>

{/* Banner */}

  <div>
    <label className="block mb-2 font-semibold text-slate-700">
      Consultancy Banner
    </label>

    {bannerPreview && (
      <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <img
          src={bannerPreview}
          alt="Consultancy banner"
          className="mx-auto mb-5 h-28 w-28 rounded-2xl border object-contain bg-white shadow"
    />
      </div>
    )}

    <input
      type="file"
      accept="image/png,image/jpeg,image/webp"
      onChange={handleBannerChange}
      className="block w-full rounded-xl border border-slate-300 px-4 py-3"
    />

    <p className="mt-2 text-sm text-slate-500">
      Upload a new banner image for your profile.
    </p>
  </div>

  <div className="mt-12 border-t border-slate-200 pt-8">

  {showSuccessMessage && (
    <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
        <span className="font-bold">
          ✓
        </span>
      </div>

      <p className="font-semibold">
        Profile updated successfully.
      </p>

    </div>
  )}

  <div className="flex justify-end">

    <button
      type="button"
      onClick={handleSave}
      disabled={saving}
      className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {saving
        ? "Saving Changes..."
        : "Save Changes →"}
    </button>

  </div>

</div>

  </div>

</div>

      </div>

      <div className="mt-12 flex justify-end border-t border-slate-200 pt-8">

  <button
    type="button"
    onClick={handleDelete}
    disabled={deleting}
    className="w-full rounded-xl border border-red-300 bg-red-50 px-6 py-3 font-semibold text-red-600 hover:bg-red-100 hover:border-red-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {deleting
      ? "Deleting Profile..."
      : "🗑️ Delete This Profile"}
  </button>
</div>

    </main>
  );
}