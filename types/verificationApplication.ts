export type VerificationStatus =
  | "pending"
  | "approved"
  | "rejected";

export interface VerificationApplication {
  id: string;

  consultantId: string;
  applicantId: string;

  status: VerificationStatus;

  submittedAt: string;

  reviewedAt?: string;

  reviewedBy?: string;

  rejectionReason?: string;
}