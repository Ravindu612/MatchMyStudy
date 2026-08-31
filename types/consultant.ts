export interface Consultant {
  id: string;
  slug: string;

  name: string;

  logo: string;
  banner: string;

  verified: boolean;

  rating: number;
  reviews: number;

  city: string;
  country: string;
  homeCountry: string;

  destinationCountries: string[];

  services: string[];

  partnerUniversities: string[];

  phone: string;
  email: string;
  website: string;

  contactPerson?: string;

address?: string;

maps?: string;

facebook?: string;
instagram?: string;
linkedin?: string;
youtube?: string;

  established: string;

  description: string;

  gallery: string[];
  createdByConsultant?: boolean;
  isPro?: boolean;
  claimed?: boolean;
  proPlan?: "monthly" | "annual";
proStartedAt?: string;
proExpiresAt?: string;
ownerId?: string | null;
}