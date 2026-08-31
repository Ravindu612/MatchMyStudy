import { supabase } from "./supabase";
import { consultants } from "@/data/consultants";
import { getCurrentUser } from "@/lib/auth";

export async function getConsultants() {
  const { data, error } = await supabase
    .from("consultants")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getConsultantBySlug(slug: string) {
  const { data, error } = await supabase
    .from("consultants")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function saveConsultant(consultant: any) {
  const { data, error } = await supabase
    .from("consultants")
    .insert([
      {
        id: consultant.id,
        slug: consultant.slug,
        name: consultant.name,

        logo: consultant.logo,
        banner: consultant.banner,

        verified: false,
        rating: 0,
        reviews: 0,

        city: consultant.city,
        country: consultant.country,
        home_country: consultant.homeCountry,

        destination_countries:
          consultant.destinationCountries,

        services:
          consultant.services,

        partner_universities:
          consultant.partnerUniversities,

        phone: consultant.phone,
        email: consultant.email,
        website: consultant.website,

        address: consultant.address,
        established: consultant.established,
        description: consultant.description,

        gallery: consultant.gallery,

        contact_person:
          consultant.contactPerson,

        maps: consultant.maps,
        facebook: consultant.facebook,
        instagram: consultant.instagram,
        linkedin: consultant.linkedin,
        youtube: consultant.youtube,

        featured: false,
        approved: false,
        created_by_consultant: true,
        is_pro: false,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Save consultant error:", error);
    throw error;
  }

  return data;
}

export async function updateConsultant(
  id: string,
  updates: Record<string, any>
) {
  const { data, error } = await supabase
    .from("consultants")
    .update(updates)
    .eq("id", id)
    .select("*");

  if (error) {
    console.error("Update consultant error:", error);
    throw error;
  }

  console.log("UPDATED ROWS:", data);

  if (!data || data.length === 0) {
    throw new Error(
      "The update request succeeded, but no consultant row was updated."
    );
  }

  return data[0];
}

export async function deleteConsultant(id: string) {
  const { data, error } = await supabase
    .from("consultants")
    .delete()
    .eq("id", id)
    .select("id");

  if (error) {
    console.error("Delete consultant error:", error);
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error(
      "The delete request succeeded, but no consultant row was deleted."
    );
  }

  return data[0];
}

export async function submitConsultantClaim(claim: {
  consultantId: string;
  consultantName: string;
  name: string;
  email: string;
  phone: string;
  companyRole: string;
  message: string;
}) {
  const user = await getCurrentUser();

if (!user) {
  throw new Error(
    "You must be logged in to submit a claim."
  );
}
  const { data, error } = await supabase
    .from("consultant_claims")
    .insert([
      {
        consultant_id: claim.consultantId,
        consultant_name: claim.consultantName,
        name: claim.name,
        email: claim.email,
        phone: claim.phone,
        company_role: claim.companyRole,
        message: claim.message,
        status: "pending",
        claimant_id: user.id,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Submit claim error:", error);
    throw error;
  }

  return data;
}

export async function approveConsultantClaim(
  claimId: string,
  consultantId: string
) {
    // Get the claim first so we know who submitted it
  const { data: existingClaim, error: getClaimError } =
    await supabase
      .from("consultant_claims")
      .select("*")
      .eq("id", claimId)
      .single();

  if (getClaimError) {
    console.error(
      "Get claim before approval error:",
      getClaimError
    );

    throw getClaimError;
  }

  if (!existingClaim.claimant_id) {
    throw new Error(
      "This claim does not have a claimant ID."
    );
  }

  const claimantId = existingClaim.claimant_id;

  // Find the manual consultant
  const manualConsultant = consultants.find(
    (c) => c.id === consultantId
  );

  // ------------------------------------------------
  // CASE 1: This is a manually created consultant
  // ------------------------------------------------

  if (manualConsultant) {
    // Check whether this consultant already exists
    // in Supabase using the slug.
    const { data: existingConsultant, error: findError } =
      await supabase
        .from("consultants")
        .select("id, slug")
        .eq("slug", manualConsultant.slug)
        .maybeSingle();

    if (findError) {
      console.error(
        "Find existing consultant error:",
        findError
      );

      throw findError;
    }

    let consultant;

    // If it doesn't exist, create it
    if (!existingConsultant) {
      const { data: newConsultant, error: insertError } =
        await supabase
          .from("consultants")
          .insert({
            slug: manualConsultant.slug,
            name: manualConsultant.name,

            logo: manualConsultant.logo,
            banner: manualConsultant.banner,

            verified: manualConsultant.verified,

            rating: manualConsultant.rating,
            reviews: manualConsultant.reviews,

            city: manualConsultant.city,
            country: manualConsultant.country,

            home_country:
              manualConsultant.homeCountry,

            destination_countries:
              manualConsultant.destinationCountries,

            services:
              manualConsultant.services,

            partner_universities:
              manualConsultant.partnerUniversities,

            phone: manualConsultant.phone,
            email: manualConsultant.email,
            website: manualConsultant.website,
            address: manualConsultant.address,

            contact_person:
              manualConsultant.contactPerson,

            maps: manualConsultant.maps,
            facebook: manualConsultant.facebook,
            instagram: manualConsultant.instagram,
            linkedin: manualConsultant.linkedin,
            youtube: manualConsultant.youtube,

            established:
              manualConsultant.established,

            description:
              manualConsultant.description,

            gallery:
              manualConsultant.gallery,

            // Important
claimed: true,

// The consultant who successfully claimed
// this manual profile is now the owner.
owner_id: claimantId,

// This profile was originally
// manually created by MatchMyStudy
created_by_consultant: false,

// Keep Pro disabled until purchased
is_pro: false,
          })
          .select()
          .single();

      if (insertError) {
        console.error(
          "Create consultant after claim approval error:",
          insertError
        );

        throw insertError;
      }

      consultant = newConsultant;
    } else {
      // It already exists.
      // Just mark it as claimed.
     const { data: updatedConsultant, error: updateError } =
  await supabase
    .from("consultants")
    .update({
      claimed: true,
      owner_id: claimantId,
    })
    .eq("id", existingConsultant.id)
    .select()
    .single();

      if (updateError) {
        console.error(
          "Update claimed consultant error:",
          updateError
        );

        throw updateError;
      }

      consultant = updatedConsultant;
    }

    // Finally mark the claim as approved
    const { data: claim, error: claimError } =
      await supabase
        .from("consultant_claims")
        .update({
          status: "approved",
        })
        .eq("id", claimId)
        .select()
        .single();

    if (claimError) {
      console.error(
        "Approve claim error:",
        claimError
      );

      throw claimError;
    }

    return {
      claim,
      consultant,
    };
  }

  // ------------------------------------------------
  // CASE 2: Consultant already exists in Supabase
  // ------------------------------------------------

  const { data: consultant, error: consultantError } =
  await supabase
    .from("consultants")
    .update({
      claimed: true,
      owner_id: claimantId,
    })
    .eq("id", consultantId)
    .select()
    .single();

  if (consultantError) {
    console.error(
      "Update consultant claim error:",
      consultantError
    );

    throw consultantError;
  }

  const { data: claim, error: claimError } =
    await supabase
      .from("consultant_claims")
      .update({
        status: "approved",
      })
      .eq("id", claimId)
      .select()
      .single();

  if (claimError) {
    console.error(
      "Approve claim error:",
      claimError
    );

    throw claimError;
  }

  return {
    claim,
    consultant,
  };
}

export async function rejectConsultantClaim(
  claimId: string
) {
  const { data, error } = await supabase
    .from("consultant_claims")
    .update({
      status: "rejected",
    })
    .eq("id", claimId)
    .select()
    .single();

  if (error) {
    console.error(
      "Reject claim error:",
      error
    );
    throw error;
  }

  return data;
}

export async function getConsultantClaims() {
  const { data, error } = await supabase
    .from("consultant_claims")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Get consultant claims error:",
      error
    );
    return [];
  }

  return data;
}

export async function getClaimForConsultant(
  consultantId: string
) {
  const { data, error } = await supabase
    .from("consultant_claims")
    .select("*")
    .eq("consultant_id", consultantId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error(
      "Get consultant claim error:",
      error
    );

    return null;
  }

  return data;
}

export async function cancelConsultantPro(
  consultantId: string
) {
  const { data, error } = await supabase
    .from("consultants")
    .update({
      is_pro: false,
      pro_cancelled_at: new Date().toISOString(),
    })
    .eq("id", consultantId)
    .select("*")
    .single();

  if (error) {
    console.error(
      "Cancel consultant Pro error:",
      error
    );

    throw error;
  }

  return data;
}