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

  {
    title: "Microeconomic Theory I",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A half-semester graduate introduction to microeconomic theory for an economics Ph.D. program. Parts of the course teach material graduate students should know, and other parts introduce methodologies.",
    url: "https://ocw.mit.edu/courses/14-121-microeconomic-theory-i-fall-2015/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Microeconomic Theory II",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A graduate introduction to noncooperative game theory for students developing a background for research in applied economics and related disciplines, or specializing in economic theory. The course is open to students who have taken and passed 14.121.",
    url: "https://ocw.mit.edu/courses/14-122-microeconomic-theory-ii-fall-2002/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Microeconomic Theory III",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A graduate course on models of individual decision-making under certainty and uncertainty, with applications including risk sharing and financial markets, contracts and information economics, village economies and national development, money and credit, and trade, spatial economics, and differentiated commodities.",
    url: "https://ocw.mit.edu/courses/14-123-microeconomic-theory-iii-spring-2015/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Microeconomic Theory IV",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A graduate course on information and contract theory. It introduces decision making under uncertainty, risk sharing, moral hazard, adverse selection, mechanism design, and incomplete contracting.",
    url: "https://ocw.mit.edu/courses/14-124-microeconomic-theory-iv-spring-2017/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Game Theory",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A graduate treatment of non-cooperative solution concepts in game theory, including rationalizability and Nash, sequential, and stable equilibria. It also introduces cooperative solution concepts, including the Nash bargaining solution, the core, and the Shapley value, and develops corresponding non-cooperative foundations.",
    url: "https://ocw.mit.edu/courses/14-126-game-theory-spring-2016/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Dynamic Optimization & Economic Applications (Recursive Methods)",
    provider: "MIT OpenCourseWare",
    subject: "Economics",
    description:
      "A graduate course on recursive methods in economic dynamics. It covers deterministic and stochastic dynamic optimization using dynamic programming, the properties of the resulting dynamic systems, and a recursive method for repeated games used in contract theory and macroeconomics.",
    url: "https://ocw.mit.edu/courses/14-128-dynamic-optimization-economic-applications-recursive-methods-spring-2003/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Machine Learning",
    provider: "MIT OpenCourseWare",
    subject: "Machine Learning",
    description:
      "A graduate introductory course on machine learning that gives an overview of concepts, techniques, and algorithms, beginning with classification and linear regression and continuing through boosting, support vector machines, hidden Markov models, and Bayesian networks. Statistical inference is the underlying theme, and the course develops the ideas and intuition behind modern methods together with a more formal understanding of how, why, and when they work.",
    url: "https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Algorithms for Inference",
    provider: "MIT OpenCourseWare",
    subject: "Machine Learning",
    description:
      "A graduate-level introduction to the principles of statistical inference with probabilistic models defined using graphical representations. The material is a common foundation for work in machine learning, signal processing, artificial intelligence, computer vision, control, and communication, and the course presents contemporary approaches to problems of statistical inference.",
    url: "https://ocw.mit.edu/courses/6-438-algorithms-for-inference-fall-2014/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Mathematics of Machine Learning",
    provider: "MIT OpenCourseWare",
    subject: "Machine Learning",
    description:
      "A graduate course on machine learning as the automated identification of patterns in data, introducing the statistical and algorithmic developments in that field. It provides a mathematically rigorous introduction to those developments, with emphasis on methods and their analysis.",
    url: "https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Statistical Learning Theory and Applications",
    provider: "MIT OpenCourseWare",
    subject: "Statistics & Machine Learning",
    description:
      "An upper-level graduate course for students planning careers in computational neuroscience, focused on supervised learning from the perspective of modern statistical learning theory. It begins with multivariate function approximation from sparse data and develops regularization, including support vector machines for regression and classification, generalization bounds using stability and VC theory, boosting, and feature selection, with applications in computer vision, computer graphics, text classification, and bioinformatics.",
    url: "https://ocw.mit.edu/courses/9-520-statistical-learning-theory-and-applications-spring-2006/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Prediction: Machine Learning and Statistics",
    provider: "MIT OpenCourseWare",
    subject: "Statistics & Machine Learning",
    description:
      "A graduate course on prediction from data that presents a selection of the most important topics from machine learning and statistics. Parts of both fields aim at prediction from data, the study of generalization, which is the central topic of machine learning, statistics, and data mining.",
    url: "https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Machine Learning for Healthcare",
    provider: "MIT OpenCourseWare",
    subject: "Machine Learning & Healthcare",
    description:
      "A graduate introduction to machine learning in healthcare, including the nature of clinical data and the use of machine learning for risk stratification, disease progression modeling, precision medicine, diagnosis, subtype discovery, and improving clinical workflows.",
    url: "https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Finance Theory I",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course that introduces the core theory of modern financial economics and financial management, with a focus on capital markets and investments. Topics include the functions of capital markets and financial intermediaries, asset valuation, fixed-income securities, common stocks, capital budgeting, diversification and portfolio selection, equilibrium pricing of risky assets, the theory of efficient markets, and an introduction to derivatives and options.",
    url: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Finance Theory II",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course on the financial tools needed to make good business decisions. It presents the basic insights of corporate finance theory and emphasizes applying that theory to real business decisions through class discussion of lectures and business cases.",
    url: "https://ocw.mit.edu/courses/15-402-finance-theory-ii-spring-2003/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Investments",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course on financial theory and empirical evidence for making investment decisions. Topics include portfolio theory, equilibrium models of security prices (including the capital asset pricing model and the arbitrage pricing theory), the empirical behavior of security prices, market efficiency, performance evaluation, and behavioral finance.",
    url: "https://ocw.mit.edu/courses/15-433-investments-spring-2003/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Analytics of Finance",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course on the key quantitative methods of finance: financial econometrics and statistical inference for financial applications, dynamic optimization, Monte Carlo simulation, and stochastic (Itô) calculus, together with their computer implementation. Application areas include portfolio management, risk management, derivatives, and proprietary trading.",
    url: "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Business Analysis Using Financial Statements",
    provider: "MIT OpenCourseWare",
    subject: "Accounting",
    description:
      "A graduate-level MIT Sloan course on using financial information to value and analyze firms. It applies economics, accounting, and finance skills to problems drawn from business news, to show what financial reports contain, why firms report certain information, and how to use that information.",
    url: "https://ocw.mit.edu/courses/15-535-business-analysis-using-financial-statements-spring-2003/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Financial Management",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course on corporate finance and capital markets, emphasizing the financial aspects of managerial decisions. It covers the valuation of real and financial assets, risk management and financial derivatives, the trade-off between risk and expected return, and corporate financing and dividend policy, and draws on empirical research to guide those decisions.",
    url: "https://ocw.mit.edu/courses/15-414-financial-management-summer-2003/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },

  {
    title: "Practice of Finance: Advanced Corporate Risk Management",
    provider: "MIT OpenCourseWare",
    subject: "Finance",
    description:
      "A graduate-level MIT Sloan course on how corporations use the insights and tools of risk management, taught from the viewpoint of an end user of derivatives rather than a dealer. The focus is on using those insights and pricing models to improve operations, increase the value of real assets, or create the financial flexibility needed to implement a core strategy.",
    url: "https://ocw.mit.edu/courses/15-997-practice-of-finance-advanced-corporate-risk-management-spring-2009/",
    isFree: true,
    certificate:
      "MIT OpenCourseWare provides free course materials but does not issue academic credit or certificates.",
  },
];