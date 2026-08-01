// All content below is sourced directly from Kundan Kumar Ojha's resume.
// Do not invent metrics, employers, or technologies not present in the source resume.

export const profile = {
  name: "Kundan Kumar Ojha",
  role: "Full Stack Java Developer",
  identity: "Backend Engineer",
  years: "3.5+",
  phone: "+91 7079371313",
  email: "kdojha115@gmail.com",
  linkedin: "https://linkedin.com/in/", // placeholder — update with real handle
  github: "https://github.com/", // placeholder — update with real handle
  location: "India",
  summary:
    "Full Stack Java Developer with 3.5 years of experience designing and developing scalable enterprise applications using Java, Spring Boot, Microservices, React.js, REST APIs, and MySQL. Experienced in building secure and high-performance applications across both frontend and backend layers, including responsive UI development, API integrations, authentication workflows, and distributed systems. Skilled in developing production-grade applications, optimizing performance, and collaborating across cross-functional agile teams.",
  titles: [
    "Full Stack Java Developer",
    "Backend Engineer",
    "Spring Boot Developer",
    "React Developer",
  ],
};

export const techStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Hibernate",
  "REST APIs",
  "Microservices",
  "React.js",
  "Next.js",
  "SQL Server",
  "MySQL",
  "JWT",
  "Git",
  "Jenkins",
  "Docker",
  "AWS",
];

export const metrics = [
  { value: "3.5+", label: "Years Experience", suffix: "" },
  { value: "95", label: "REST APIs Delivered", suffix: "+" },
  { value: "6", label: "Enterprise Projects", suffix: "+" },
  { value: "5000", label: "Concurrent Users Supported", suffix: "+" },
  { value: "70", label: "Manual Effort Reduced", suffix: "%" },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "FindiBankit",
    role: "Software Developer",
    period: "Feb 2025 – Present",
    summary:
      "Designing and maintaining scalable backend services for enterprise financial and booking platforms.",
    highlights: [
      "Designed, developed, and maintained scalable backend applications using Java, Spring Boot, Spring Security, Hibernate, and MS SQL Server for enterprise financial and booking platforms.",
      "Developed and integrated 35+ RESTful APIs for user authentication, authorization, booking management, payment processing, role-based access control (RBAC), and third-party integrations.",
      "Integrated external APIs for payment gateways, travel booking, and gift card services, ensuring secure communication and reliable transaction processing.",
      "Automated recurring business workflows using Spring Scheduler, reducing manual operational effort by 70% and improving system reliability.",
      "Collaborated with frontend developers to integrate backend services with React.js, delivering responsive and production-ready applications.",
      "Optimized SQL queries, improved API performance, resolved production issues, and participated in Agile ceremonies including sprint planning, code reviews, and deployments.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MS SQL Server", "React.js"],
  },
  {
    company: "Emo Matrix",
    role: "Backend Engineer",
    period: "Dec 2023 – Jan 2025",
    summary:
      "Built scalable backend services for communication, analytics, and enterprise business applications.",
    highlights: [
      "Developed scalable backend services using Java, Spring Boot, Spring Security, Hibernate, and MySQL for communication, analytics, and enterprise business applications.",
      "Designed and implemented 60+ REST APIs for authentication, user management, authorization, reporting, and real-time communication.",
      "Implemented secure authentication using JWT and role-based access control (RBAC) to protect enterprise applications.",
      "Integrated third-party services including Agora SDK, Razorpay, and Firebase APIs to support real-time communication, payment processing, and user authentication.",
      "Improved application performance by optimizing SQL queries, implementing exception handling, and debugging production issues to enhance system reliability.",
      "Collaborated with cross-functional teams following Agile methodology, Git-based version control, and code review best practices.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "JWT", "Agora SDK", "Razorpay", "Firebase"],
  },
  {
    company: "Paytm",
    role: "Software Engineer",
    period: "Nov 2022 – Nov 2023",
    summary:
      "Contributed to enterprise KYC and customer onboarding systems, focused on backend validation and release quality.",
    highlights: [
      "Contributed to enterprise KYC and customer onboarding systems by validating backend services, REST APIs, and database workflows.",
      "Performed API testing, SQL validation, regression testing, and production verification to ensure high-quality software releases.",
      "Worked closely with development teams to identify, reproduce, and resolve application defects across distributed systems.",
      "Utilized Jenkins, Kibana, Redash, and SQL for CI/CD support, log analysis, production monitoring, and release validation.",
    ],
    stack: ["Java", "REST APIs", "SQL", "Jenkins", "Kibana", "Redash"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tech: string[];
  apiCount?: string;
  points: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "flight-ticket-booking-platform",
    name: "Flight Ticket Booking Platform",
    tagline: "Real-time flight search, seat selection, and booking workflows.",
    tech: ["React.js", "REST APIs", "Spring Boot", "MSSQL"],
    apiCount: "25+",
    points: [
      "Developed a real-time flight booking platform supporting flight search, seat selection, baggage management, and booking workflows.",
      "Integrated 25+ REST APIs for booking, pricing, and seat management.",
    ],
  },
  {
    slug: "irctc-service",
    name: "IRCTC Service",
    tagline: "Ticket booking dashboards with PNR status and train schedules.",
    tech: ["React.js", "REST APIs"],
    points: [
      "Developed ticket booking dashboards with PNR status, train schedules, and transaction management.",
      "Integrated secure backend APIs and reusable UI components to improve booking performance and user experience.",
    ],
  },
  {
    slug: "insurance-services",
    name: "Insurance Services",
    tagline: "Policy issuance, claims, and renewal management modules.",
    tech: ["React.js", "REST APIs", "Spring Boot", "MSSQL"],
    apiCount: "10+",
    points: [
      "Developed insurance management modules supporting policy issuance, claims, and renewals.",
      "Designed 10+ REST APIs and automated scheduled workflows using Spring Scheduler, reducing manual effort by 40%.",
    ],
  },
  {
    slug: "gift-card-platform",
    name: "Gift Card Platform",
    tagline: "Secure issuance, redemption, and transaction processing.",
    tech: ["React.js", "REST APIs", "Spring Boot", "MSSQL"],
    apiCount: "10+",
    points: [
      "Built a secure gift card management platform supporting issuance, redemption, and transaction processing.",
      "Developed 10+ REST APIs, integrated third-party services, and automated scheduled jobs reducing manual effort by 70%.",
    ],
  },
  {
    slug: "goodpeople",
    name: "GoodPeople",
    tagline: "Backend services supporting 5K+ concurrent users.",
    tech: ["REST APIs", "Spring Boot", "MSSQL"],
    apiCount: "60+",
    points: [
      "Developed scalable backend services supporting 5K+ concurrent users using Spring Boot and MySQL.",
      "Built 60+ REST APIs and integrated Agora SDK and Razorpay for real-time communication and secure payments.",
      "Implemented JWT authentication, RBAC, and exception handling to improve application security and reliability.",
    ],
    links: [
      { label: "Website", href: "#" },
      { label: "Play Store", href: "#" },
    ],
  },
  {
    slug: "livecall",
    name: "LiveCall",
    tagline: "Call logging, analytics, and monitoring backend.",
    tech: ["REST APIs", "Spring Boot", "MSSQL"],
    points: [
      "Developed backend modules for call logging, analytics, monitoring, and reporting using Spring Boot.",
      "Implemented secure role-based access control and reporting dashboards, improving operational visibility by 35%.",
    ],
    links: [{ label: "Play Store", href: "#" }],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "SQL", "JavaScript"] },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT Authentication",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux / Context API",
      "Component-Based Architecture",
    ],
  },
  { title: "Database", items: ["MySQL", "SQL Server", "DBMS"] },
  { title: "Tools", items: ["Git", "GitHub", "Jenkins", "Postman", "Jira", "Maven"] },
  { title: "Cloud / DevOps", items: ["Docker (Basic)", "AWS Fundamentals"] },
  {
    title: "Concepts",
    items: [
      "CI/CD",
      "Distributed Systems",
      "API Integration",
      "Performance Optimization",
      "Agile / Scrum",
    ],
  },
];

export const achievements = [
  {
    title: "Google Kick Start 2021",
    detail: "Global Ranks — 3530 (Round E), 6131 (Round D), 7507 (Round F).",
  },
  {
    title: "CodeChef",
    detail: "Rated 3-Star coder with 1026 Global Rank.",
  },
  {
    title: "HackerRank",
    detail: "Earned badges in Java, SQL, and Problem Solving.",
  },
  {
    title: "Letter of Appreciation",
    detail: "Awarded at Emo Matrix.",
  },
];

export const education = {
  school: "G.L. Bajaj Group of Institutions",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "2018 – 2022",
};

export const whyHireMe = [
  {
    title: "Backend Specialist",
    detail: "3.5 years focused on Java, Spring Boot, and enterprise-grade backend systems.",
  },
  {
    title: "Enterprise Experience",
    detail: "Delivered production systems for financial, booking, and communication platforms.",
  },
  {
    title: "API Development",
    detail: "Designed and shipped 95+ REST APIs across authentication, payments, and RBAC.",
  },
  {
    title: "Performance Optimization",
    detail: "Reduced manual operational effort by up to 70% through query and workflow optimization.",
  },
  {
    title: "Business-Oriented Thinking",
    detail: "Ties backend decisions to measurable outcomes: reliability, effort saved, users supported.",
  },
  {
    title: "Cross-Functional Collaboration",
    detail: "Works closely with frontend, QA, and product teams inside Agile sprints.",
  },
];

export const engineeringPhilosophy = [
  { title: "Clean Architecture", detail: "Structuring services so responsibilities stay separated and testable." },
  { title: "Security First", detail: "Authentication, authorization, and RBAC treated as core requirements, not add-ons." },
  { title: "Performance", detail: "Query optimization and profiling as a routine part of shipping, not a fire drill." },
  { title: "Reliability", detail: "Exception handling and monitoring built in so production issues surface early." },
  { title: "Agile Collaboration", detail: "Sprint planning, code reviews, and deployments as a team rhythm." },
  { title: "Continuous Learning", detail: "Expanding from backend depth into full-stack and cloud fundamentals." },
];

export const process = [
  "Requirement Analysis",
  "Architecture & API Design",
  "Database Design",
  "Implementation",
  "Testing & Code Review",
  "Deployment",
  "Monitoring & Maintenance",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
