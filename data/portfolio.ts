export const personal = {
  name: "Hemanth Kumar",
  headline: "B.Tech EEE • AI, Quantum & Full-stack Engineer",
  location: "Visakhapatnam",
  summary:
    "Enthusiastic undergrad blending electrical engineering with software, AI, and quantum computing to build intelligent, reliable systems.",
  story:
    "Goal-driven builder who learns by shipping. From hackathons to NSS service, I mix analytical thinking with hands-on delivery—spanning quantum-enhanced ML, backend APIs, and smooth web experiences. I document what I learn and look for teams that value speed with rigor.",
  contact: {
    email: "hemanthkumarhk100@gmail.com",
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    title: "AI, Data & Quantum",
    items: ["Machine Learning", "NLP basics", "Computer Vision", "TensorFlow", "OpenCV", "Qiskit", "Reinforcement Learning"],
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "Express.js", "Flask", "APIs", "Caching & Queues", "Data Structures & Algorithms"],
  },
  {
    title: "Frontend & Mobile",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "UI Systems"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Linux", "Git & GitHub", "Firebase", "Google Cloud", "CI/CD", "Docker (basics)"]
  },
  {
    title: "Programming Languages",
    items: ["Python", "C", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Tools",
    items: ["VS Code", "PyCharm", "MongoDB", "Postman", "Google Colab", "Canva"]
  },
];

export const projects = [
  {
    title: "Quantum Rush – Hybrid Fraud Detection",
    description:
      "Hybrid quantum-classical pipeline using a 17-qubit variational circuit and actor-critic RL for financial fraud detection.",
    stack: ["Python", "Qiskit", "Reinforcement Learning", "PaySim Dataset"],
    github: "",
    demo: "",
    impact: "Boosted detection accuracy with superposition-based encoding and on-policy updates.",
  },
  {
    title: "Power Quality Analyzer",
    description:
      "ML-based analysis of voltage and current waveforms to classify sag, swell, interruptions, and harmonics.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "FFT"],
    github: "",
    demo: "",
    impact: "High detection accuracy using FFT feature extraction on real-world datasets.",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    description:
      "AI chatbot combining CNN-based image understanding with Transformer NLP, served via Flask for web access.",
    stack: ["Python", "TensorFlow", "OpenCV", "NLP", "Flask"],
    github: "",
    demo: "",
    impact: "Unified vision and language responses with a scalable backend.",
  },
  {
    title: "EEE Hub – Department Resource Website",
    description:
      "Academic hub for EEE students with structured topics, smooth animations, and streamlined navigation.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "",
    demo: "",
    impact: "Improved access to notes and units with organized content delivery.",
  },
];

export const experiences = [
  {
    title: "NSS Volunteer — Lendi Institute",
    timeline: "2024 – Present",
    bullets: [
      "Drive community welfare initiatives and logistics with student teams.",
      "Document outcomes and maintain clear stakeholder updates.",
    ],
  },
  {
    title: "Energy Conservation Club — Lendi Institute",
    timeline: "2024 – Present",
    bullets: [
      "Marketed energy-efficient LED bulbs built by the EEE department.",
      "Ran awareness drives on sustainable energy practices across campus.",
    ],
  },
  {
    title: "Hackathons & Workshops",
    timeline: "2023 – Present",
    bullets: [
      "Participated in national/regional hackathons including IEEE Xtreme 18.0/19.0.",
      "Built prototypes around AI, IoT, and cloud; collaborated with interdisciplinary teams.",
    ],
  },
];

export const certifications = [
  "Mastering Data Structures and Algorithms – Udemy",
  "Introduction to Machine Learning – Coursera",
  "Complete Web Development Bootcamp – Udemy",
  "Quantum Computing Fundamentals – IBM Qiskit",
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
