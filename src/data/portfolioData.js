export const personalInfo = {
  name: "Jeevan Kumar R",
  role: "Software Developer",
  rolesList: [
    "Software Developer",
    "Full-Stack Engineer",
    "Frontend Developer",
    "Python Developer",
    "AI / ML Enthusiast"
  ],
  status: "Available for Entry-Level Software Developer & AI Roles",
  bio: "Motivated Fresher Software Developer specializing in building responsive web applications, AI-driven solutions, and clean backend services using Python, JavaScript, React JS, HTML, CSS, AWS, Gen AI, and MySQL.",
  location: "Remote / Worldwide",
  yearsExperience: "2+",
  completedProjects: "3+",
  uptime: "100%",
  socials: {
    github: "https://github.com/Jeevankumar-coder-tech",
    linkedin: "https://www.linkedin.com/in/jeevan-kumar-r-87a801378/",
    email: "jeevanofficial2004@gmail.com"
  }
};

export const aboutMeData = {
  headline: "Motivated Fresher Software Developer eager to build impactful web applications and AI-driven solutions.",
  narrative: [
    "I am an enthusiastic and detail-oriented Fresher Software Developer and recent Information Technology graduate with a strong theoretical foundation in computer science and practical experience building web applications and AI integrations.",
    "Skilled in Python, HTML, CSS, JavaScript, React JS, AWS, Gen AI, and MySQL, I have developed hands-on academic and personal projects that emphasize clean code, responsive design, and intuitive user experiences. As an entry-level developer, I bring high adaptability, a rapid learning curve, and a passion for continuous skill enhancement to modern engineering teams."
  ],
  pillars: [
    {
      title: "Full-Stack Web Development",
      desc: "Building clean, mobile-responsive interfaces using React JS, JavaScript, HTML, and CSS, backed by reliable Python backend services and clean RESTful endpoints.",
      icon: "Layers"
    },
    {
      title: "Generative AI & Cloud Basics",
      desc: "Integrating modern Gen AI APIs, prompt engineering, and LLM-powered features into web apps, with foundational deployment on AWS cloud.",
      icon: "Cpu"
    },
    {
      title: "Database & Core CS Fundamentals",
      desc: "Applying solid computer science principles (DSA, OOP) and designing normalized MySQL databases with well-structured relational schemas and optimized queries.",
      icon: "Database"
    }
  ],
  techStack: [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "AWS",
    "Gen AI",
    "MySQL"
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Technical Education in Information Technology",
    institution: "Veltech Dr Rangarajan and Sagunthala R&D Institute of Science and Technology",
    period: "2022 — 2025",
    grade: "First Class with Distinction (CGPA: 8 / 10.0)",
    description: "Deep theoretical and practical foundation in computer science, system software, algorithmic complexity, and scalable distributed architectures.",
    coursework: [
      "Generative AI",
      "Database Management Systems (DBMS)",
      "python programming",
      "Software Development life cycle",
      "Data Science",
      "Cloud Computing"
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2023"
  },
  {
    title: "System Design & Distributed Systems Engineering",
    issuer: "Software Architecture Guild",
    year: "2024"
  }
];

export const projectsData = [
  {
    id: "hyperstream-telemetry",
    title: "HyperStream — Distributed Event Broker & Telemetry Engine",
    tagline: "High-throughput asynchronous event processor with Redis queues & PostgreSQL",
    category: "backend",
    featured: true,
    tags: ["Python", "AWS", "MySQL", "Gen AI"],
    description: "An asynchronous distributed event streaming pipeline capable of processing 25,000+ incoming webhooks per second. Features persistent dead-letter queues, worker concurrency pools, and automated retry policies with exponential backoff.",
    metrics: ["25k events/sec throughput", "Sub-15ms processing latency", "Zero message loss"],

  },
  {
    id: "cloudgate-api",
    title: "CloudGate — Microservices API Gateway & Identity Service",
    tagline: "High-performance edge reverse proxy with JWT auth & token-bucket rate limiting",
    category: "backend",
    featured: true,
    tags: ["Python", "AWS", "MySQL", "JavaScript"],
    description: "A secure microservices edge gateway handling cross-cutting concerns: cryptographic JWT verification, IP-based token bucket rate limiting, request validation, and dynamic reverse-proxy routing to downstream internal services.",
    metrics: ["<8ms proxy overhead", "10,000+ concurrent connections", "Automated health checks"],
 
  },
  {
    id: "nexus-workspace",
    title: "Nexus — Full-Stack Collaborative Data Workspace",
    tagline: "Real-time collaborative data management platform with WebSocket synchronization",
    category: "fullstack",
    featured: true,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "MySQL"],
    description: "A production full-stack collaborative workspace platform featuring real-time multi-user document state synchronization, optimistic UI updates, conflict resolution, and granular role-based access control (RBAC).",
    metrics: ["Real-time multi-user sync", "ACID compliant transactions", "Sub-50ms roundtrip"],

  }
];
