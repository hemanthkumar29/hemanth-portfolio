export const personal = {
  name: "Hemanth Kumar",
  headline: "Engineering Student · Software Developer · AI Builder",
  location: "Visakhapatnam, India",
  college: "Lendi Institute of Engineering & Technology",
  degree: "B.Tech — Electrical & Electronics Engineering",
  summary:
    "Building intelligent software for real-world impact. I blend engineering problem-solving with modern development to create scalable, meaningful digital experiences.",
  story: `I started my journey in Electrical & Electronics Engineering — learning circuits, systems, and how things work at a fundamental level. But somewhere between solving engineering problems and writing my first lines of code, I discovered a deeper passion: building software that solves real problems.

That curiosity led me from hardware to full-stack development, from static pages to intelligent AI-powered applications, from local scripts to cloud-deployed systems. Today, I build practical projects that combine software engineering with artificial intelligence — from safety analytics platforms to deepfake detection systems.

I'm not just learning to code — I'm learning to engineer solutions. Every project I build, every DSA problem I solve, and every system I design brings me closer to becoming the kind of developer who ships products that matter.`,
  contact: {
    email: "hemanthkumarhk100@gmail.com",
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
  resumeUrl: "/resume.pdf",
};

export const heroTaglines = [
  "Building intelligent software for real-world impact.",
  "Turning ideas into scalable digital experiences.",
  "Engineering software solutions with creativity and precision.",
  "Learning, building, and shipping modern tech products.",
];

export const achievements = [
  "Hack 2 Impact 2025 Winner",
  "IEEE Xtreme 18.0 / 19.0",
  "SIH Internal Winner 2024 / 2025",
];

export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  challenges: string[];
  futureWork: string[];
  github: string;
  demo: string;
  category: "ai-ml" | "full-stack" | "mobile";
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Women Safety Analytics Platform",
    slug: "women-safety-analytics",
    tagline: "AI-powered threat detection for real-time safety intelligence",
    description:
      "An intelligent safety monitoring platform that leverages AI and anomaly detection to identify potential threats and trigger real-time alerts, empowering communities with data-driven safety insights.",
    problem:
      "Women's safety remains a critical concern in urban and rural areas. Existing systems are reactive rather than proactive — they respond after incidents occur rather than preventing them. There's a need for intelligent, real-time monitoring that can detect anomalies and potential threats before they escalate.",
    solution:
      "Built an AI-powered analytics platform that processes environmental data to detect unusual patterns and potential safety threats. The system uses anomaly detection algorithms to identify risk scenarios and triggers intelligent alert workflows to notify authorities and trusted contacts in real-time.",
    architecture:
      "The platform follows a modular architecture with a data ingestion layer, AI processing pipeline for anomaly detection, real-time alert engine, and a monitoring dashboard. The threat detection module uses ML models trained on safety-related patterns to classify risk levels.",
    stack: ["Python", "Scikit-learn", "Flask", "React", "MongoDB", "WebSocket"],
    challenges: [
      "Training anomaly detection models with limited labeled safety data",
      "Minimizing false positive rates while maintaining high sensitivity",
      "Designing real-time alert workflows that balance urgency with accuracy",
    ],
    futureWork: [
      "Integration with IoT sensors for environmental monitoring",
      "Mobile companion app for personal safety alerts",
      "Expanding ML models with federated learning for privacy-preserving analysis",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "ai-ml",
    featured: true,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "Conversational Image Recognition Chatbot",
    slug: "image-recognition-chatbot",
    tagline: "Natural language meets computer vision in an intelligent chatbot",
    description:
      "An AI chatbot that combines computer vision with natural language processing, allowing users to upload images and have intelligent conversations about the visual content — from object recognition to scene understanding.",
    problem:
      "Traditional image recognition tools output raw labels and confidence scores that aren't user-friendly. Users need an intuitive way to interact with visual AI — asking questions about images in natural language and receiving conversational, contextual responses.",
    solution:
      "Developed a chatbot interface that accepts image uploads, processes them through computer vision models for object detection and scene analysis, and generates natural language responses. Users can ask follow-up questions about detected objects, colors, text, and spatial relationships within images.",
    architecture:
      "The system uses a pipeline architecture: image preprocessing → computer vision model inference (object detection, classification) → feature extraction → NLP response generation. The chatbot maintains conversation context to handle multi-turn image discussions.",
    stack: ["Python", "OpenCV", "TensorFlow", "NLP", "Flask", "React"],
    challenges: [
      "Bridging the gap between computer vision output and natural language generation",
      "Handling diverse image types and maintaining recognition accuracy",
      "Managing conversation context across multiple image-related queries",
    ],
    futureWork: [
      "Integration with large vision-language models for richer understanding",
      "Support for video analysis and real-time camera feeds",
      "Multi-language support for broader accessibility",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "ai-ml",
    featured: false,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Deep Fake Detection System",
    slug: "deepfake-detection",
    tagline: "AI-powered video authenticity analysis to combat misinformation",
    description:
      "A machine learning system designed to detect manipulated video content by analyzing facial inconsistencies, temporal artifacts, and frame-level anomalies — helping combat the spread of deepfake misinformation.",
    problem:
      "Deepfake technology has made it increasingly easy to create convincing fake videos, posing serious threats to information integrity, personal reputation, and even national security. Manual detection is nearly impossible at scale, demanding automated AI-driven solutions.",
    solution:
      "Built a deep learning pipeline that analyzes video frames for signs of manipulation. The system extracts facial landmarks, analyzes temporal consistency across frames, and uses trained CNN models to classify videos as authentic or manipulated with confidence scoring.",
    architecture:
      "Multi-stage pipeline: video frame extraction → face detection & alignment → feature extraction using CNNs → temporal consistency analysis → binary classification with confidence scores. The model is trained on public deepfake datasets with data augmentation techniques.",
    stack: ["Python", "TensorFlow", "OpenCV", "CNN", "NumPy", "Pandas"],
    challenges: [
      "Achieving high accuracy across different deepfake generation techniques",
      "Processing video data efficiently for near-real-time analysis",
      "Handling varying video quality, compression artifacts, and lighting conditions",
    ],
    futureWork: [
      "Real-time browser extension for on-the-fly video verification",
      "Expanding to audio deepfake detection",
      "Building a public API for third-party integration",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "ai-ml",
    featured: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Geo Attendance Tracking Application",
    slug: "geo-attendance",
    tagline: "Location-based attendance automation with secure authentication",
    description:
      "A cross-platform mobile application that automates attendance tracking using geolocation, featuring secure Firebase authentication, real-time check-in/check-out workflows, and automated working hours calculation.",
    problem:
      "Traditional attendance systems rely on manual processes prone to proxy attendance and inaccuracies. Organizations need a reliable, automated system that verifies physical presence through location data while providing real-time tracking and comprehensive reports.",
    solution:
      "Developed a Flutter-based mobile app with Node.js backend that uses Google Maps API for geofencing-based attendance. Users can only check in when physically present within designated zones. The system automatically calculates working hours, tracks attendance patterns, and generates reports.",
    architecture:
      "Cross-platform Flutter frontend communicating with Express.js REST API backend. MongoDB stores attendance records, user profiles, and geofence configurations. Firebase handles authentication, and Google Maps API provides geolocation services with geofencing logic.",
    stack: ["Flutter", "Node.js", "Express.js", "MongoDB", "Firebase", "Google Maps API"],
    challenges: [
      "Ensuring GPS accuracy across different devices and environments",
      "Implementing reliable geofencing that balances precision with battery efficiency",
      "Handling offline scenarios and syncing attendance when connectivity resumes",
    ],
    futureWork: [
      "Biometric verification layer for enhanced security",
      "Admin dashboard with analytics and attendance trend visualization",
      "Integration with HR management systems via APIs",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "mobile",
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Career Path Recommender Website",
    slug: "career-path-recommender",
    tagline: "Personalized career guidance through skills and interest matching",
    description:
      "A web platform that provides personalized career path recommendations by analyzing users' skills, interests, and academic background — helping students make informed decisions about their professional future.",
    problem:
      "Students often struggle to identify career paths that align with their unique combination of skills and interests. Generic career advice fails to account for individual strengths, and professional counseling is expensive and not widely accessible.",
    solution:
      "Built a responsive web application with a recommendation engine that matches user profiles against career path data. Users input their skills, interests, and academic background, and the system generates ranked career suggestions with detailed roadmaps and resource links.",
    architecture:
      "Frontend collects user data through an intuitive multi-step form, backend processes inputs through the recommendation algorithm, and results are displayed with interactive career cards showing match percentages, required skills, and learning resources.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    challenges: [
      "Designing a recommendation algorithm that produces meaningful, diverse results",
      "Creating an intuitive UX that captures complex user profile data without friction",
      "Keeping career path data current and comprehensive across industries",
    ],
    futureWork: [
      "ML-based recommendation engine trained on actual career outcome data",
      "Integration with job boards and online learning platforms",
      "Mentorship matching feature connecting students with industry professionals",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "full-stack",
    featured: false,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Alumni Association Platform",
    slug: "alumni-association",
    tagline: "Scalable full-stack platform for alumni networking and engagement",
    description:
      "A comprehensive alumni management platform featuring networking tools, donation workflows, event management, job portal, alumni directory, and engagement systems — designed with scalable full-stack architecture.",
    problem:
      "Educational institutions lack centralized platforms to maintain alumni relationships post-graduation. Scattered communication channels, manual donation tracking, and disconnected event management make it difficult to build a thriving alumni community.",
    solution:
      "Engineered a full-stack platform with modular features: searchable alumni directory, event creation and RSVP management, secure donation processing, job board for career opportunities, and engagement tools like forums and newsletters — all under a unified, scalable architecture.",
    architecture:
      "Modular full-stack architecture with feature-based code organization. RESTful API backend with role-based access control (admin, alumni, student). MongoDB collections designed for efficient queries across directories, events, donations, and job postings. Responsive frontend with dashboard views.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    challenges: [
      "Designing a scalable database schema that handles diverse feature requirements",
      "Implementing role-based access control across multiple user types",
      "Building a donation system with proper security and transaction handling",
    ],
    futureWork: [
      "Real-time chat and messaging between alumni",
      "AI-powered alumni matching based on shared interests and career paths",
      "Mobile app for on-the-go networking and event check-ins",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "full-stack",
    featured: false,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "EEE Hub Academic Platform",
    slug: "eee-hub",
    tagline: "Structured academic content system for EEE students",
    description:
      "An educational platform providing structured academic content for Electrical & Electronics Engineering students, featuring subject/unit/topic navigation, resource organization, and a user-focused academic interface.",
    problem:
      "EEE students often struggle to find organized, reliable study materials. Resources are scattered across different sources, lacking structure by subject, unit, and topic. There's no centralized platform that mirrors the academic curriculum for easy navigation.",
    solution:
      "Created a structured content platform that organizes academic materials following the EEE curriculum hierarchy: subjects → units → topics. The interface allows students to navigate directly to specific topics, access curated resources, and follow a logical learning progression.",
    architecture:
      "Content-first architecture with hierarchical data model (Subject → Unit → Topic → Resources). Server-side rendering for fast content delivery and SEO. Admin panel for content management. Responsive design optimized for reading and studying across devices.",
    stack: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Node.js"],
    challenges: [
      "Designing a flexible content hierarchy that accommodates varying curriculum structures",
      "Creating an intuitive navigation system for deeply nested academic content",
      "Balancing comprehensive content with clean, focused reading experience",
    ],
    futureWork: [
      "AI-powered study recommendations based on learning patterns",
      "Interactive quizzes and self-assessment tools per topic",
      "Collaborative note-sharing and discussion forums",
    ],
    github: "https://github.com/hemanthkumar29",
    demo: "",
    category: "full-stack",
    featured: false,
    gradient: "from-sky-500 to-cyan-500",
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication Systems"],
  },
  {
    title: "Database",
    items: ["MongoDB", "SQL Fundamentals"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS EC2", "Deployment Workflows", "GitHub", "CI/CD Concepts"],
  },
  {
    title: "AI / Machine Learning",
    items: ["Python", "Scikit-learn", "NLP", "Computer Vision", "ML Workflows"],
  },
  {
    title: "Mobile & Other",
    items: ["Flutter", "DSA", "Algorithms", "Problem Solving"],
  },
];

export const experiences = [
  {
    title: "NSS Volunteer",
    organization: "National Service Scheme — Lendi Institute",
    timeline: "2023 – Present",
    icon: "heart",
    bullets: [
      "Organized a free eye camp serving 200+ community members, coordinating logistics with medical teams and student volunteers",
      "Led teamwork initiatives promoting community service, social responsibility, and civic engagement among student groups",
      "Managed event coordination, volunteer scheduling, and post-event documentation for multiple social impact projects",
    ],
  },
  {
    title: "Energy Conservation Club Member",
    organization: "Lendi Institute of Engineering & Technology",
    timeline: "2023 – Present",
    icon: "zap",
    bullets: [
      "Promoted LED awareness campaigns across campus, educating students and staff on energy-efficient lighting solutions",
      "Participated in technical outreach programs focused on sustainability, renewable energy, and environmental consciousness",
      "Organized student awareness campaigns connecting engineering knowledge with real-world conservation impact",
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  verifyUrl: string;
  status: "completed" | "in-progress" | "planned";
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM via Coursera",
    verifyUrl: "",
    status: "completed",
    icon: "brain",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    verifyUrl: "",
    status: "completed",
    icon: "bar-chart",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    verifyUrl: "",
    status: "in-progress",
    icon: "cloud",
  },
  {
    title: "Advanced AI & Deep Learning",
    issuer: "Coming Soon",
    verifyUrl: "",
    status: "planned",
    icon: "sparkles",
  },
];

export const dsaStats = {
  problemsSolved: 100,
  categoriesMastered: [
    { name: "Arrays & Strings", progress: 80 },
    { name: "Linked Lists", progress: 70 },
    { name: "Trees & Graphs", progress: 60 },
    { name: "Dynamic Programming", progress: 50 },
    { name: "Sorting & Searching", progress: 85 },
    { name: "Stacks & Queues", progress: 75 },
  ],
  profiles: {
    leetcode: "https://leetcode.com/",
    github: "https://github.com/hemanthkumar29",
  },
};

export const currentlyLearning = [
  {
    title: "Advanced DSA",
    description: "Mastering complex algorithms and data structures for competitive programming and placements",
    icon: "code",
    progress: 60,
  },
  {
    title: "Backend Engineering",
    description: "Deepening knowledge in server architecture, API design patterns, and database optimization",
    icon: "server",
    progress: 50,
  },
  {
    title: "AWS Cloud Deployment",
    description: "Learning cloud infrastructure, EC2, S3, Lambda, and production deployment workflows",
    icon: "cloud",
    progress: 40,
  },
  {
    title: "System Design Fundamentals",
    description: "Studying scalable system architecture, load balancing, caching, and distributed systems",
    icon: "layers",
    progress: 35,
  },
  {
    title: "AI Engineering Workflows",
    description: "Building end-to-end ML pipelines, model deployment, and AI-powered application development",
    icon: "brain",
    progress: 55,
  },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#dsa", label: "DSA" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 3, suffix: "+", label: "Hackathons" },
  { value: 100, suffix: "+", label: "DSA Problems" },
];
