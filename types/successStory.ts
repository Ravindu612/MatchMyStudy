export interface SuccessStory {
  id: string;
  consultantId: string;

  studentName: string;
  university?: string;
  country?: string;
  program?: string;

  story: string;

  imageUrl?: string;

  createdAt: string;
  updatedAt: string;
}