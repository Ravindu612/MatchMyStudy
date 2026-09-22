export type PostgraduateCourse = {
  title: string;
  provider: string;
  subject: string;
  description: string;
  url: string;
  isFree: boolean;
  certificate?: string;
};

export const postgraduateCourses: PostgraduateCourse[] = [
  {
    title: "Database Systems",
    provider: "MIT OpenCourseWare",
    subject: "Computer Science",
    description:
      "A graduate-level introduction to database systems covering relational models, schema normalization, query optimization, transactions, and database system foundations.",
    url: "https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Program Analysis",
    provider: "MIT OpenCourseWare",
    subject: "Software Engineering",
    description:
      "A graduate seminar exploring program analysis techniques used in software engineering, including static analysis, type systems, model checking, and dynamic analysis.",
    url: "https://ocw.mit.edu/courses/6-883-program-analysis-fall-2005/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Knowledge-Based Applications Systems",
    provider: "MIT OpenCourseWare",
    subject: "Artificial Intelligence",
    description:
      "Explore the development of knowledge-based applications and systems, including artificial intelligence techniques, application-domain knowledge, and system development principles.",
    url: "https://ocw.mit.edu/courses/6-871-knowledge-based-applications-systems-spring-2005/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Network Optimization",
    provider: "MIT OpenCourseWare",
    subject: "Computer Science & Optimization",
    description:
      "A graduate-level course covering network flows and optimization techniques with applications in transportation, logistics, manufacturing, computer science, project management, and finance.",
    url: "https://ocw.mit.edu/courses/15-082j-network-optimization-fall-2010/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "The Software Business",
    provider: "MIT OpenCourseWare",
    subject: "Business & Technology",
    description:
      "A graduate-level course examining software businesses, entrepreneurship, technology management, product development, and the challenges of working in software-intensive companies.",
    url: "https://ocw.mit.edu/courses/15-358-the-software-business-fall-2005/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Information Technology Essentials",
    provider: "MIT OpenCourseWare",
    subject: "Information Technology",
    description:
      "Explore fundamental information technology concepts including networks, distributed computing, operating systems, software development, databases, security, enterprise applications, and electronic commerce.",
    url: "https://ocw.mit.edu/courses/15-561-information-technology-essentials-spring-2005/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },
];