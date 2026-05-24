export const personal = {
  name: "Hemanth Kumar",
  headline: "MERN Stack Developer • DevOps • AI/ML Enthusiast",
  location: "Visakhapatnam",
  summary:
    "I build production-grade web applications with the MERN stack, automate infrastructure with modern DevOps practices, and explore the frontiers of AI/ML and Generative AI to create intelligent, scalable systems.",
  story:
    "Goal-driven full-stack developer who learns by shipping. From hackathons to production deployments, I blend deep JavaScript expertise with DevOps automation and a growing passion for AI/ML—spanning RESTful APIs, containerized microservices, CI/CD pipelines, and LLM-powered applications. I document what I build and look for teams that value speed with quality.",
  contact: {
    email: "hemanthkumarhk100@gmail.com",
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    title: "MERN Stack",
    items: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "REST APIs", "TypeScript"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS", "Linux", "Nginx"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Scikit-learn", "Pandas"],
  },
  {
    title: "Generative AI",
    items: ["LLMs", "Prompt Engineering", "LangChain", "RAG", "OpenAI API", "Hugging Face"],
  },
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Tools & Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "Git", "VS Code", "Postman", "Docker"],
  },
];

export const projects = [
  {
    title: "SentinelScan — ML-Powered Secret Detector",
    description:
      "Full-stack credential leak detection system with a React dashboard, FastAPI backend, and BERT-based ML engine that scans codebases for hard-coded secrets using hybrid regex + deep learning.",
    stack: ["React", "FastAPI", "Python", "BERT", "Docker"],
    github: "",
    demo: "",
    impact: "Achieved high-accuracy detection combining semantic understanding with entropy analysis.",
  },
  {
    title: "DevFlow — CI/CD Pipeline Dashboard",
    description:
      "Real-time MERN dashboard for monitoring GitHub Actions workflows with live status updates, build logs, and deployment metrics across multiple repositories.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Docker", "GitHub API"],
    github: "",
    demo: "",
    impact: "Streamlined DevOps visibility with WebSocket-driven real-time pipeline monitoring.",
  },
  {
    title: "AI Study Companion",
    description:
      "Generative AI chatbot built with MERN and LangChain that enables contextual Q&A over uploaded documents using RAG (Retrieval-Augmented Generation).",
    stack: ["React", "Node.js", "LangChain", "OpenAI", "MongoDB", "Pinecone"],
    github: "",
    demo: "",
    impact: "Enabled students to query PDFs and notes with context-aware AI responses.",
  },
  {
    title: "Smart LED E-Commerce Store",
    description:
      "Production e-commerce platform with dynamic product management, admin dashboard, cart persistence via localStorage, and Firebase-backed real-time data.",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "",
    demo: "",
    impact: "Deployed full-featured storefront with admin CRUD and sorted product display.",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer — Freelance",
    timeline: "2024 – Present",
    bullets: [
      "Build and deploy MERN stack applications for clients with Docker-based containerized workflows.",
      "Implement CI/CD pipelines using GitHub Actions for automated testing and deployment.",
    ],
  },
  {
    title: "Hackathons & Workshops",
    timeline: "2023 – Present",
    bullets: [
      "Winner at Hack 2 Impact 2025; participated in IEEE Xtreme 18.0/19.0 and SIH 2024/2025.",
      "Built prototypes spanning AI, DevOps automation, and full-stack web applications.",
    ],
  },
  {
    title: "NSS Volunteer — Lendi Institute",
    timeline: "2024 – Present",
    bullets: [
      "Drive community welfare initiatives and coordinate logistics with student teams.",
      "Document outcomes and maintain clear stakeholder updates across projects.",
    ],
  },
];

export const certifications = [
  "Complete Web Development Bootcamp – Udemy",
  "MERN Stack Front To Back – Udemy",
  "Docker & Kubernetes: The Complete Guide – Udemy",
  "Introduction to Machine Learning – Coursera",
  "Generative AI with LLMs – DeepLearning.AI",
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
