export const profile = {
  name: "Akshaya Devi",
  title: "Java Full Stack Developer",
  location: "Chennai, Tamil Nadu",
  phone: "+91 8122641294",
  email: "muthukumarakshayadevi@gmail.com",
  github: "https://github.com/Akshayadevi05",
  
  linkedin: "https://linkedin.com/in/akshayadevimuthukumaran",
  resumeFile: "/Akshaya_Devi_Resume.pdf",
  summary:
    "Java Full Stack Developer skilled in Java, Spring Boot, React.js, REST APIs, and MySQL, with hands-on experience building end-to-end web applications. I focus on clean, maintainable code across the stack — from relational schema design to responsive React interfaces.",
};

export const skills = [
  {
    group: "Programming",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices"],
  },
  {
    group: "Database",
    items: ["MySQL"],
  },
  {
    group: "Concepts",
    items: ["OOP", "CRUD Operations", "JPA", "JPQL", "API Integration"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Eclipse/STS"],
  },
];

export const mainProject = {
  status: "MAIN PROJECT",
  name: "Smart Hospital Queue System",
  tagline:
    "A full-stack hospital management platform with real-time, priority-based queueing across four core modules.",
  tech: ["Java", "Spring Boot", "React.js", "MySQL", "JPA", "REST APIs"],
  points: [
    "Engineered a full-stack system spanning Patient, Department, Doctor and Queue modules with complete CRUD functionality across 15+ RESTful endpoints.",
    "Designed a priority-based queue algorithm with three urgency levels — NORMAL, PRIORITY, EMERGENCY — that resequences patients in real time.",
    "Built a four-state queue lifecycle (WAITING → SERVING → COMPLETED / CANCELLED) using Spring Data JPA and JPQL for efficient ordering and retrieval.",
    "Developed a responsive React.js dashboard with dedicated views for Patients, Departments, Doctors and Queue management, fully wired to the backend.",
    "Connected the app to a normalized MySQL schema, with global exception handling and input validation to protect data integrity.",
    "Structured the backend into controller, service and repository layers, and tested endpoints in Postman before frontend integration.",
  ],
  queueStates: ["WAITING", "SERVING", "COMPLETED", "CANCELLED"],
};

export const sideProjects = [
  {
    status: "SIDE PROJECT",
    name: "SkillSprint AI",
    tagline: "AI Career Roadmap Platform",
    description:
      "A career-roadmap platform that gives users a structured, personalized learning path toward their software development goals, with a planner and interview-prep space to organize the work.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    contributions: [
      "Built the frontend in React.js with reusable components and React Router navigation",
      "Designed responsive interfaces in HTML and CSS",
      "Implemented planner persistence with LocalStorage",
      "Developed the dashboard and interview-preparation features",
    ],
    github: "https://github.com/Akshayadevi05/SKILLSPRINT-AI",
  },
  {
    status: "SIDE PROJECT",
    name: "RoomCraft Pro",
    tagline: "Virtual Interior Designer",
    description:
      "A web-based virtual interior design tool for exploring and customizing room layouts through an interactive, component-driven interface.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Vite"],
    contributions: [
      "Built the application in React.js with reusable, interactive components",
      "Implemented dynamic UI updates and user interactions",
      "Designed responsive layouts in HTML and CSS",
      "Set up the project with Vite for fast development and builds",
    ],
    github: "https://github.com/Akshayadevi05/roomcraft-pro",
  },
];

export const experience = {
  role: "Java Full Stack Development — Intern",
  org: "SLA Institute",
  period: "Mar 2026 – Aug 2026",
  points: [
    "Learned Java, OOP, Spring Boot, REST APIs and microservices through practical full-stack development.",
    "Developed frontend applications using HTML, CSS, JavaScript, Bootstrap and React.js.",
    "Worked with MySQL for database management, SQL queries and CRUD operations.",
    "Practiced integrating frontend, backend, REST APIs and databases into complete applications.",
  ],
};

export const education = {
  degree: "B.Sc. Chemistry",
  school: "A.V.C College (Autonomous), Mannampandal",
  detail: "CGPA: 7.5 · 2022 – 2025",
};

export const certifications = [
  {
    name: "Application Developer – Web & Mobile (PMKVY 4.0)",
    date: "March 2025",
  },
  {
    name: "HTML, CSS, and JavaScript for Beginners — IBM Developer Skills Network",
    date: "July 2026",
  },
];
