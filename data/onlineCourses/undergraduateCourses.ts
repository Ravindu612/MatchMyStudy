export type UndergraduateCourse = {
  title: string;
  provider: string;
  subject: string;
  description: string;
  url: string;
  isFree: boolean;
  certificate?: string;
};

export const undergraduateCourses: UndergraduateCourse[] = [
  {
    title: "Single Variable Calculus",
    provider: "MIT OpenCourseWare",
    subject: "Mathematics",
    description:
      "A foundational undergraduate calculus course covering differentiation, integration, applications, and infinite series. Designed for independent study with lectures, problem sets, exams, and supporting materials.",
    url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Fundamentals of Biology",
    provider: "MIT OpenCourseWare",
    subject: "Biology",
    description:
      "An introductory undergraduate biology course covering fundamental concepts in biology and providing a foundation for further study in the life sciences.",
    url: "https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Principles of Microeconomics",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "An introductory undergraduate course covering supply and demand, consumer behavior, firms, market structures, international trade, and economic policy.",
    url: "https://ocw.mit.edu/courses/14-01sc-principles-of-microeconomics-fall-2011/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Introduction to Solid-State Chemistry",
    provider: "MIT OpenCourseWare",
    subject: "Chemistry",
    description:
      "An undergraduate introduction to solid-state chemistry emphasizing the relationship between chemical structure, properties, and materials.",
    url: "https://ocw.mit.edu/courses/3-091-introduction-to-solid-state-chemistry-fall-2018/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Classical Mechanics",
    provider: "MIT OpenCourseWare",
    subject: "Physics",
    description:
      "An undergraduate physics course introducing the principles of classical mechanics and the mathematical tools used to analyze physical systems.",
    url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },
];