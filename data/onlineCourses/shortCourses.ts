export type OnlineCourse = {
  title: string;
  provider: string;
  category: string;
  description: string;
  url: string;
  isFree: boolean;
  certificate?: string;
};

export const shortCourses: OnlineCourse[] = [
  {
    title: "Google Skillshop",
    provider: "Google",
    category: "Digital Marketing & Analytics",
    description:
      "Free training and certifications covering Google Ads, Google Analytics, Google Marketing Platform, and other Google products.",
    url: "https://skillshop.exceedlms.com/student/catalog",
    isFree: true,
    certificate: "Certificates available for selected courses",
  },

  {
    title: "Google Analytics Academy",
    provider: "Google",
    category: "Analytics",
    description:
      "Learn Google Analytics and develop practical skills for measuring websites, apps, and digital marketing performance.",
    url: "https://analytics.google.com/analytics/academy/",
    isFree: true,
    certificate: "Certificate availability varies by course",
  },

  {
    title: "Google Cloud Skills Boost",
    provider: "Google Cloud",
    category: "Cloud & AI",
    description:
      "Develop cloud, artificial intelligence, data, and infrastructure skills through courses, hands-on labs, and learning paths.",
    url: "https://www.cloudskillsboost.google/",
    isFree: true,
    certificate: "Badges and credentials available for selected learning activities",
  },

  {
    title: "Google Play Academy",
    provider: "Google",
    category: "App Development & Mobile",
    description:
      "Learn about Android apps, Google Play, app quality, store optimization, and growing your app business.",
    url: "https://playacademy.exceedlms.com/student/catalog",
    isFree: true,
    certificate: "Certificate availability varies",
  },

  {
    title: "Google Developers Training",
    provider: "Google",
    category: "Programming & Development",
    description:
      "Explore learning resources covering Android, Firebase, Flutter, web development, machine learning, and other Google technologies.",
    url: "https://developers.google.com/learn",
    isFree: true,
    certificate: "Certificates or badges depend on the learning program",
  },

  {
    title: "Grow with Google",
    provider: "Google",
    category: "Digital Skills & Career Development",
    description:
      "Explore free learning resources covering digital skills, AI, career development, business, and job readiness.",
    url: "https://grow.google/learn/",
    isFree: true,
    certificate: "Certificate availability varies",
  },

    {
    title: "Microsoft Learn",
    provider: "Microsoft",
    category: "Cloud, AI & Technology",
    description:
      "Learn Azure, artificial intelligence, cybersecurity, Microsoft 365, Power Platform, and other Microsoft technologies through self-paced training.",
    url: "https://learn.microsoft.com/training/",
    isFree: true,
    certificate: "Achievements and credentials available for selected learning paths",
  },

  {
    title: "AWS Training & Certification",
    provider: "Amazon Web Services",
    category: "Cloud & DevOps",
    description:
      "Develop cloud, DevOps, artificial intelligence, machine learning, security, and infrastructure skills with AWS learning resources.",
    url: "https://aws.amazon.com/training/",
    isFree: true,
    certificate: "Digital badges and certifications are available depending on the learning path",
  },

  {
    title: "IBM SkillsBuild",
    provider: "IBM",
    category: "AI, Data & Technology",
    description:
      "Build practical skills in artificial intelligence, cybersecurity, cloud computing, data, and workplace skills through free learning resources.",
    url: "https://skillsbuild.org/",
    isFree: true,
    certificate: "Digital credentials available for selected learning activities",
  },

  {
    title: "Meta Blueprint",
    provider: "Meta",
    category: "Digital Marketing",
    description:
      "Learn about Facebook, Instagram, advertising, digital marketing, and Meta business tools through online learning resources.",
    url: "https://www.facebook.com/business/learn",
    isFree: true,
    certificate: "Certification availability varies",
  },

  {
    title: "Salesforce Trailhead",
    provider: "Salesforce",
    category: "CRM & Business Technology",
    description:
      "Learn Salesforce, CRM, automation, artificial intelligence, cloud technology, and business skills through interactive learning paths.",
    url: "https://trailhead.salesforce.com/",
    isFree: true,
    certificate: "Badges and credentials available",
  },

  {
    title: "Cisco Networking Academy",
    provider: "Cisco",
    category: "Networking & Cybersecurity",
    description:
      "Develop skills in networking, cybersecurity, Python, programming, and digital technologies through Cisco learning resources.",
    url: "https://www.netacad.com/",
    isFree: true,
    certificate: "Certificates available for selected courses",
  },

  {
    title: "HubSpot Academy",
    provider: "HubSpot",
    category: "Marketing, Sales & CRM",
    description:
      "Learn digital marketing, content marketing, sales, customer relationship management, and business growth.",
    url: "https://academy.hubspot.com/",
    isFree: true,
    certificate: "Certificates available for selected courses",
  },

    {
    title: "freeCodeCamp",
    provider: "freeCodeCamp",
    category: "Programming & Web Development",
    description:
      "Learn programming, web development, data analysis, machine learning, and other technical skills through free interactive courses and projects.",
    url: "https://www.freecodecamp.org/learn/",
    isFree: true,
    certificate: "Free certifications available for selected curricula",
  },

  {
    title: "Kaggle Learn",
    provider: "Kaggle",
    category: "Data Science & AI",
    description:
      "Build practical skills in Python, data visualization, machine learning, SQL, artificial intelligence, and data science.",
    url: "https://www.kaggle.com/learn",
    isFree: true,
    certificate: "Completion certificates available for selected courses",
  },

  {
    title: "MIT OpenCourseWare",
    provider: "MIT",
    category: "University & Academic Learning",
    description:
      "Access free MIT course materials covering computer science, engineering, mathematics, science, business, and many other academic subjects.",
    url: "https://ocw.mit.edu/",
    isFree: true,
    certificate: "Course materials are free; certificates are not generally provided",
  },

  {
    title: "Harvard CS50",
    provider: "Harvard University",
    category: "Computer Science & Programming",
    description:
      "Learn computer science and programming through Harvard's popular introductory CS50 courses, including programming, web development, Python, and artificial intelligence.",
    url: "https://cs50.harvard.edu/",
    isFree: true,
    certificate: "Free certificate options may depend on the learning platform",
  },

  {
    title: "OpenLearn",
    provider: "The Open University",
    category: "University & Academic Learning",
    description:
      "Explore free online courses across business, computing, languages, health, education, social sciences, science, and many other subjects.",
    url: "https://www.open.edu/openlearn/",
    isFree: true,
    certificate: "Statements of participation and digital badges available for selected courses",
  },

  {
    title: "Saylor Academy",
    provider: "Saylor Academy",
    category: "Education & Professional Skills",
    description:
      "Study free online courses covering business, computer science, mathematics, professional development, and other academic subjects.",
    url: "https://learn.saylor.org/",
    isFree: true,
    certificate: "Certificates available for selected courses",
  },

  {
    title: "MongoDB University",
    provider: "MongoDB",
    category: "Databases & Software Development",
    description:
      "Learn MongoDB, databases, application development, data management, and related developer skills through online courses.",
    url: "https://learn.mongodb.com/",
    isFree: true,
    certificate: "Completion certificates and badges available for selected courses",
  },

    {
    title: "CS50's Introduction to Computer Science",
    provider: "Harvard University",
    category: "Computer Science & Programming",
    description:
      "Harvard's introduction to computer science covering algorithms, data structures, C, Python, SQL, web programming, artificial intelligence, and software engineering.",
    url: "https://cs50.harvard.edu/x/",
    isFree: true,
    certificate:
      "Free CS50 Certificate available after completing the course requirements; verified certificates are also available for a fee.",
  },

  {
    title: "CS50's Introduction to Programming with Python",
    provider: "Harvard University",
    category: "Python & Programming",
    description:
      "Learn programming with Python, including functions, variables, conditionals, loops, exceptions, libraries, testing, file I/O, regular expressions, and object-oriented programming.",
    url: "https://cs50.harvard.edu/python/",
    isFree: true,
    certificate:
      "Free CS50 Certificate available after completing the course requirements; verified certificates are also available for a fee.",
  },

  {
    title: "CS50's Web Programming with Python and JavaScript",
    provider: "Harvard University",
    category: "Web Development",
    description:
      "Learn how to design and implement web applications using Python, JavaScript, SQL, Django, React, Bootstrap, APIs, testing, scalability, and security.",
    url: "https://cs50.harvard.edu/web/",
    isFree: true,
    certificate:
      "Free CS50 Certificate available after completing the course requirements; verified certificates are also available for a fee.",
  },

  {
    title: "CS50's Introduction to Cybersecurity",
    provider: "Harvard University",
    category: "Cybersecurity",
    description:
      "Learn how to secure accounts, data, systems, and software while understanding cybersecurity risks, privacy, threats, and security trade-offs.",
    url: "https://cs50.harvard.edu/cybersecurity/",
    isFree: true,
    certificate:
      "Free CS50 Certificate available after completing the course requirements; verified certificates are also available for a fee.",
  },

  {
    title: "CS50's Computer Science for Business",
    provider: "Harvard University",
    category: "Business & Technology",
    description:
      "Explore computer science and technology from a business perspective, including cloud computing, networking, privacy, scalability, security, web, mobile, and databases.",
    url: "https://cs50.harvard.edu/business/",
    isFree: true,
    certificate:
      "Free CS50 Certificate available after completing the course requirements; verified certificates are also available for a fee.",
  },

    {
    title: "Fortinet Training Institute — Free Cybersecurity Training",
    provider: "Fortinet",
    category: "Cybersecurity",
    description:
      "Learn cybersecurity and network security through Fortinet's self-paced training, covering security fundamentals, network security, Fortinet technologies, and other cybersecurity topics.",
    url: "https://training.fortinet.com/",
    isFree: true,
    certificate:
      "Course completion and certification options vary by Fortinet training program. Some certification exams and hands-on labs may require payment.",
  },

    {
    title: "Oracle Academy — Free Technology Learning Resources",
    provider: "Oracle Academy",
    category: "Cloud, Java & Databases",
    description:
      "Explore Oracle learning resources covering Java, databases, cloud computing, artificial intelligence, analytics, and other technology topics.",
    url: "https://academy.oracle.com/en/resources-resources-library.html",
    isFree: true,
    certificate:
      "Free learning resources are available. Full Oracle Academy learning benefits may require access through an eligible educational institution.",
  },

    {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    category: "Cybersecurity",
    description:
      "Learn the basics of cybersecurity, common threats, online safety, and the role of cybersecurity in protecting people, organizations, and data.",
    url: "https://www.netacad.com/courses/introduction-to-cybersecurity",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

  {
    title: "Networking Basics",
    provider: "Cisco",
    category: "Networking",
    description:
      "Learn fundamental networking concepts, including network devices, protocols, addressing, connectivity, and how modern networks operate.",
    url: "https://www.netacad.com/courses/networking-basics",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

  {
    title: "Introduction to Modern AI",
    provider: "Cisco",
    category: "Artificial Intelligence",
    description:
      "Explore fundamental concepts of modern artificial intelligence and learn how AI is used in today's technology environment.",
    url: "https://www.netacad.com/courses/introduction-to-modern-ai",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

  {
    title: "Introduction to Data Science",
    provider: "Cisco",
    category: "Data Science & AI",
    description:
      "Discover the fundamentals of data science, including how data is collected, analyzed, interpreted, and used to support decision-making.",
    url: "https://www.netacad.com/courses/introduction-to-data-science",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

  {
    title: "Python Essentials 1",
    provider: "Cisco",
    category: "Python & Programming",
    description:
      "Build foundational Python programming skills and learn the core concepts needed to start developing Python applications.",
    url: "https://www.netacad.com/courses/programming/pcap-programming-essentials-in-python",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

  {
    title: "Data Analytics Essentials",
    provider: "Cisco",
    category: "Data Analytics",
    description:
      "Develop foundational data analytics skills and learn how data can be prepared, analyzed, visualized, and used to communicate insights.",
    url: "https://www.netacad.com/courses/data-analytics-essentials",
    isFree: true,
    certificate:
      "Cisco course completion recognition may be available depending on the course and learning platform.",
  },

    {
    title: "Introduction to Cyber Security: Stay Safe Online",
    provider: "The Open University",
    category: "Cybersecurity",
    description:
      "Learn about common cyber security risks, how attacks can happen, and practical ways to protect yourself and your information online.",
    url: "https://www.open.edu/openlearn/science-maths-technology/computing-ict/introduction-cyber-security-stay-safe-online/content-section-overview",
    isFree: true,
    certificate:
      "Free digital badge may be available after meeting the course requirements.",
  },

  {
    title: "Lottery of Birth: Exploring Social Mobility",
    provider: "The Open University",
    category: "Social Sciences",
    description:
      "Explore social mobility and how factors such as family background, education, and social circumstances can influence people's opportunities.",
    url: "https://www.open.edu/openlearn/society-politics-law/sociology/lottery-birth-exploring-social-mobility/content-section-overview",
    isFree: true,
    certificate:
      "Statement of participation may be available after completing the course.",
  },

  {
    title: "Lottery of Birth: Exploring Inequality in the UK",
    provider: "The Open University",
    category: "Social Sciences",
    description:
      "Explore different forms of inequality and examine how social and economic circumstances can shape people's lives.",
    url: "https://www.open.edu/openlearn/society-politics-law/sociology/lottery-birth-exploring-inequality-uk/content-section-overview",
    isFree: true,
    certificate:
      "Statement of participation may be available after completing the course.",
  },

  {
    title: "Data Analysis: Visualisations in Excel",
    provider: "The Open University",
    category: "Data Analytics",
    description:
      "Develop practical data analysis skills and learn how to use Excel to work with data and create useful visualisations.",
    url: "https://www.open.edu/openlearn/science-maths-technology/mathematics-statistics/data-analysis-visualisations-excel/content-section-overview",
    isFree: true,
    certificate:
      "Free digital badge may be available after meeting the course requirements.",
  },

  {
    title: "Succeeding in Postgraduate Study",
    provider: "The Open University",
    category: "University & Academic Skills",
    description:
      "Develop skills and strategies that can help you succeed in postgraduate study, including academic learning and study approaches.",
    url: "https://www.open.edu/openlearn/education-development/succeeding-postgraduate-study/content-section-overview",
    isFree: true,
    certificate:
      "Statement of participation may be available after completing the course.",
  },
];