export type UniversityTraits = {
  size: "small" | "medium" | "large";
  type: "university" | "uas";
  city: "small" | "medium" | "large";
  research: "low" | "medium" | "high";
  practical: "low" | "medium" | "high";
  english: "low" | "medium" | "high";
  ranking: "low" | "medium" | "high";
  international: "low" | "medium" | "high";
  fields: string[];
};

export const universityTraits: Record<string, UniversityTraits> = {
      // ===========================
  // FINLAND
  // ===========================

  "university-of-helsinki": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Law","Business","IT","Biology","Education"],
  },

  "aalto-university": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Business","Design","AI","IT"],
  },

  "tampere-university": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Medicine","Business","IT"],
  },

  "university-of-turku": {
    size: "large",
    type: "university",
    city: "medium",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Business","IT","Education"],
  },

  "university-of-oulu": {
    size: "large",
    type: "university",
    city: "medium",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","IT","AI","Medicine"],
  },

  "lut-university": {
    size: "medium",
    type: "university",
    city: "small",
    research: "high",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Business","Energy","AI"],
  },

  "university-of-eastern-finland": {
    size: "medium",
    type: "university",
    city: "small",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Medicine","Education","Business","IT"],
  },

  "university-of-jyvaskyla": {
    size: "medium",
    type: "university",
    city: "medium",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Education","Psychology","IT","Business"],
  },

  "hanken-school-of-economics": {
    size: "small",
    type: "university",
    city: "large",
    research: "medium",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Business","Economics","Finance"],
  },

  "university-of-vaasa": {
    size: "medium",
    type: "university",
    city: "small",
    research: "medium",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Business","Engineering","Energy","IT"],
  },

  "abo-akademi-university": {
    size: "small",
    type: "university",
    city: "medium",
    research: "medium",
    practical: "medium",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Business","Engineering","Education"],
  },

  "metropolia-university-of-applied-sciences": {
    size: "large",
    type: "uas",
    city: "large",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","IT","Business","Healthcare"],
  },

  "haaga-helia-university-of-applied-sciences": {
    size: "large",
    type: "uas",
    city: "large",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Business","IT","Hospitality","AI"],
  },

  "hamk-university-of-applied-sciences": {
    size: "medium",
    type: "uas",
    city: "medium",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "medium",
    fields: ["IT","Engineering","Business","Design","Healthcare"],
  },

  "lab-university-of-applied-sciences": {
    size: "medium",
    type: "uas",
    city: "medium",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Business","IT","Engineering","Design"],
  },

  "turku-university-of-applied-sciences": {
    size: "large",
    type: "uas",
    city: "medium",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Engineering","Business","Healthcare","IT"],
  },

  "jamk-university-of-applied-sciences": {
    size: "medium",
    type: "uas",
    city: "medium",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Cybersecurity","Engineering","Business","IT"],
  },

  "oulu-university-of-applied-sciences": {
    size: "medium",
    type: "uas",
    city: "medium",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "medium",
    fields: ["Engineering","IT","Healthcare"],
  },

  "arcada-university-of-applied-sciences": {
    size: "small",
    type: "uas",
    city: "large",
    research: "low",
    practical: "high",
    english: "high",
    ranking: "medium",
    international: "high",
    fields: ["Business","IT","Healthcare"],
  },

  // ===========================
  // CANADA
  // ===========================

  "university-of-toronto": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Engineering","Business","AI","Computer Science"],
  },

  "university-of-british-columbia": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Business","Computer Science","Forestry","Medicine"],
  },

  "mcgill-university": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Engineering","Business","Law"],
  },

  "university-of-waterloo": {
    size: "large",
    type: "university",
    city: "medium",
    research: "high",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Computer Science","AI","Mathematics"],
  },

  "university-of-alberta": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Medicine","Business"],
  },

  // ===========================
  // AUSTRALIA
  // ===========================

  "university-of-melbourne": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Business","Engineering","Law"],
  },

  "university-of-sydney": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Engineering","Business","Architecture"],
  },

  "unsw-sydney": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "high",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Computer Science","Business","AI"],
  },

  "monash-university": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Medicine","Engineering","Business","Pharmacy"],
  },

  "university-of-queensland": {
    size: "large",
    type: "university",
    city: "large",
    research: "high",
    practical: "medium",
    english: "high",
    ranking: "high",
    international: "high",
    fields: ["Engineering","Business","Agriculture","Medicine"],
  },
}