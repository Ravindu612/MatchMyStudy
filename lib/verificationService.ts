import { supabase } from "@/lib/supabase";
import type {
  VerificationApplication,
} from "@/types/verificationApplication";


export async function createVerificationApplication(
  consultantId: string,
  applicantId: string
): Promise<VerificationApplication> {

  const { data, error } = await supabase
    .from(
      "consultant_verification_applications"
    )
    .insert({
      consultant_id: consultantId,
      applicant_id: applicantId,
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    console.error(
      "Create verification application error:",
      error
    );

    throw error;
  }

  return {
    id: data.id,

    consultantId:
      data.consultant_id,

    applicantId:
      data.applicant_id,

    status:
      data.status,

    submittedAt:
      data.submitted_at,

    reviewedAt:
      data.reviewed_at ??
      undefined,

    reviewedBy:
      data.reviewed_by ??
      undefined,

    rejectionReason:
      data.rejection_reason ??
      undefined,
  };
}


export async function getVerificationApplication(
  consultantId: string
): Promise<VerificationApplication | null> {

  const { data, error } = await supabase
    .from(
      "consultant_verification_applications"
    )
    .select("*")
    .eq(
      "consultant_id",
      consultantId
    )
    .order("submitted_at", {
      ascending: false,
    })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error(
      "Get verification application error:",
      error
    );

    return null;
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,

    consultantId:
      data.consultant_id,

    applicantId:
      data.applicant_id,

    status:
      data.status,

    submittedAt:
      data.submitted_at,

    reviewedAt:
      data.reviewed_at ??
      undefined,

    reviewedBy:
      data.reviewed_by ??
      undefined,

    rejectionReason:
      data.rejection_reason ??
      undefined,
  };
}

export async function getAllVerificationApplications() {
  const { data, error } = await supabase
    .from("consultant_verification_applications")
    .select(`
      *,
      consultants (
        id,
        name,
        slug,
        logo,
        email,
        city,
        country,
        owner_id,
        is_pro
      )
    `)
    .order("submitted_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Get verification applications error:",
      error
    );

    throw error;
  }

  return data ?? [];
}


export async function approveVerificationApplication(
  applicationId: string,
  consultantId: string,
  adminId: string
) {
  /*
   * First approve the application.
   */

  const { error: applicationError } =
    await supabase
      .from(
        "consultant_verification_applications"
      )
      .update({
        status: "approved",
        reviewed_at: new Date().toISOString(),
        reviewed_by: adminId,
        rejection_reason: null,
      })
      .eq("id", applicationId);

  if (applicationError) {
    console.error(
      "Approve application error:",
      applicationError
    );

    throw applicationError;
  }

  /*
   * Then mark the consultant as verified.
   */

  const { error: consultantError } =
    await supabase
      .from("consultants")
      .update({
        verified: true,
      })
      .eq("id", consultantId);

  if (consultantError) {
    console.error(
      "Verify consultant error:",
      consultantError
    );

    throw consultantError;
  }
}


export async function rejectVerificationApplication(
  applicationId: string,
  adminId: string,
  rejectionReason: string
) {
  const { error } = await supabase
    .from(
      "consultant_verification_applications"
    )
    .update({
      status: "rejected",
      reviewed_at: new Date().toISOString(),
      reviewed_by: adminId,
      rejection_reason:
        rejectionReason || null,
    })
    .eq("id", applicationId);

  if (error) {
    console.error(
      "Reject application error:",
      error
    );

    throw error;
  }
}