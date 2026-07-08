export type Question = {
  id: string;
  title: string;
  options: string[];
};

export const matcherQuestions: Question[] = [
  {
    id: "degree",
    title: "What degree are you looking for?",
    options: [
      "Bachelor",
      "Master",
      "PhD",
    ],
  },

  {
    id: "field",
    title: "Which field interests you most?",
    options: [
      "IT",
      "Engineering",
      "Business",
      "Medicine",
      "AI",
      "Cybersecurity",
      "Education",
      "Hospitality",
    ],
  },

  {
    id: "tuition",
    title: "Preferred tuition fees?",
    options: [
      "Free",
      "Low",
      "Medium",
      "High",
      "Doesn't matter",
    ],
  },

  {
    id: "language",
    title: "Preferred study language?",
    options: [
      "English",
      "Both",
      "Local Language",
    ],
  },

  {
    id: "climate",
    title: "Preferred climate?",
    options: [
      "Cold",
      "Moderate",
      "Warm",
    ],
  },

  {
    id: "jobs",
    title: "How important are part-time jobs?",
    options: [
      "Excellent",
      "Good",
      "Not Important",
    ],
  },

  {
    id: "cost",
    title: "Preferred living cost?",
    options: [
      "Low",
      "Medium",
      "High",
    ],
  },

  {
    id: "pr",
    title: "Interested in post-study immigration opportunities?",
    options: [
      "Excellent",
      "Good",
      "Not Important",
    ],
  },
];