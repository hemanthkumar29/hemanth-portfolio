export const personal = {
  name: "Hemanth Kumar",
  headline: "Aspiring Software Developer | DevOps & Cloud Enthusiast",
  location: "India",
  summary:
    "18 y/o B.Tech (EEE) student at Lendi Institute, building reliable systems, modern web apps, and automation pipelines. Passionate about Linux, cloud fundamentals, and pragmatic engineering.",
  story:
    "Curious engineer who learns by shipping. From NSS volunteering to hackathons, I gravitate to backend reliability, clean interfaces, and end-to-end ownership. Currently exploring production-grade CI/CD, infra-as-code, and secure APIs while strengthening data structures and algorithms.",
  contact: {
    email: "hemanth@example.com",
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
  },
  resumeUrl: "https://example.com/resume.pdf",
};

export const skills = [
  {
    title: "DevOps & Cloud",
    items: ["Linux", "Docker", "Git & GitHub", "CI/CD (GitHub Actions)", "AWS | Azure | GCP fundamentals", "Monitoring basics"],
  },
  {
    title: "Programming",
    items: ["TypeScript", "Node.js", "Next.js", "Python", "C", "Data Structures & Algorithms"],
  },
  {
    title: "Tools",
    items: ["Vercel", "PostgreSQL", "Prisma", "Redis", "NGINX", "Figma"],
  },
  {
    title: "AI / ML",
    items: ["OpenCV", "PyTorch basics", "TensorFlow basics", "ML pipelines", "Prompt design"],
  },
];

export const projects = [
  {
    title: "Conversational Image Recognition Chatbot",
    description:
      "Chat interface that accepts images, runs vision inference, and streams contextual responses.",
    stack: ["Next.js", "TypeScript", "Vision API", "Vector DB"],
    github: "https://github.com/your-github/image-chatbot",
    demo: "https://demo.example.com/image-chatbot",
    impact: "Reduced response latency to sub-1.2s with streaming and caching.",
  },
  {
    title: "Deepfake Face-Swap Detection System",
    description: "ML pipeline to flag manipulated media using frequency and artifact analysis.",
    stack: ["Python", "PyTorch", "FastAPI", "Docker"],
    github: "https://github.com/your-github/deepfake-detection",
    demo: "",
    impact: ">92% precision on curated benchmark; containerized for edge inference.",
  },
  {
    title: "Women Safety Analytics (Real-time threat detection)",
    description:
      "Real-time stream processing to detect anomalies, trigger alerts, and surface geospatial dashboards.",
    stack: ["Node.js", "WebSockets", "OpenCV", "PostgreSQL"],
    github: "https://github.com/your-github/women-safety-analytics",
    demo: "",
    impact: "Latency <800ms from detection to alert dispatch in tests.",
  },
  {
    title: "Geolocation Attendance Tracker",
    description: "Location-aware attendance with spoofing defenses and audit trails.",
    stack: ["Next.js", "PostgreSQL", "Clerk", "Map APIs"],
    github: "https://github.com/your-github/geolocation-attendance",
    demo: "",
    impact: "Cut manual reconciliation time by 60% via automated logs.",
  },
  {
    title: "Alumni Association Platform (Web + Mobile)",
    description: "Community hub with mentorship matching, events, and announcements.",
    stack: ["Next.js", "React Native", "Supabase", "Tailwind"],
    github: "https://github.com/your-github/alumni-platform",
    demo: "",
    impact: "Onboarded 200+ alumni in pilot; shipped responsive design system.",
  },
  {
    title: "Career Path Recommendation",
    description: "Recommender that maps strengths to learning roadmaps with curated resources.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Supabase"],
    github: "https://github.com/your-github/career-path-recommender",
    demo: "",
    impact: "Generated personalized tracks in <5s with cached embeddings.",
  },
  {
    title: "EEE Hub – Academic Resource Portal",
    description: "Centralized notes, labs, and exam prep utilities for EEE students.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Redis cache"],
    github: "https://github.com/your-github/eee-hub",
    demo: "",
    impact: "500+ monthly visits; improved navigation with semantic search.",
  },
];

export const experiences = [
  {
    title: "NSS Volunteer",
    timeline: "Ongoing",
    bullets: [
      "Led community initiatives, coordinated student teams, and ran logistics under tight timelines.",
      "Documented activities and outcomes with clear reports and stakeholder updates.",
    ],
  },
  {
    title: "Hackathons & College Tech Events",
    timeline: "2023 - Present",
    bullets: [
      "Built rapid prototypes with small teams: realtime dashboards, ML demos, and API-first backends.",
      "Optimized CI/CD for submission pipelines and streamlined deployments to Vercel.",
    ],
  },
];

export const certifications = [
  "NPTEL: Cloud Computing",
  "NPTEL: DevOps Foundations",
  "Linux, Git, Docker self-learning sprints",
  "Hands-on CI/CD with GitHub Actions",
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
