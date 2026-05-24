import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Site configuration for SEO
const siteConfig = {
  name: "Hemanth Kumar",
  title: "Hemanth Kumar | MERN Stack Developer, DevOps & AI/ML Portfolio",
  description:
    "Portfolio of Hemanth Kumar — MERN Stack Developer specializing in full-stack web applications, DevOps automation, and AI/ML & Generative AI. View projects in React, Node.js, Docker, and machine learning.",
  url: "https://hemanthkumar.dev",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hemanth Kumar",
    "Hemanth Kumar Portfolio",
    "MERN Stack Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "AI Developer",
    "Machine Learning Engineer",
    "Generative AI",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Python Developer",
    "TensorFlow",
    "LangChain",
    "LLMs",
    "Cloud Computing",
    "Web Developer India",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "REST APIs",
    "Microservices",
    "Deep Learning",
    "Visakhapatnam Developer",
    "Lendi Institute",
    "Hire Developer India",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - MERN Stack Developer, DevOps & AI/ML Portfolio`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@hemanthkumar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hemanthkumar.dev/#person",
        name: "Hemanth Kumar",
        url: "https://hemanthkumar.dev",
        image: "https://hemanthkumar.dev/og.jpg",
        sameAs: [
          "https://github.com/hemanthkumar29",
          "https://www.linkedin.com/in/hemanthkumar-ch/",
        ],
        jobTitle: "MERN Stack Developer & DevOps Engineer",
        worksFor: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        knowsAbout: [
          "MERN Stack",
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "DevOps",
          "Docker",
          "CI/CD",
          "Artificial Intelligence",
          "Machine Learning",
          "Generative AI",
          "LLMs",
          "Python",
          "Cloud Computing",
        ],
        description:
          "MERN Stack Developer specializing in full-stack web applications, DevOps automation, and AI/ML & Generative AI",
      },
      {
        "@type": "WebSite",
        "@id": "https://hemanthkumar.dev/#website",
        url: "https://hemanthkumar.dev",
        name: "Hemanth Kumar Portfolio",
        description:
          "Portfolio of Hemanth Kumar featuring projects in MERN Stack, DevOps, and AI/ML",
        publisher: {
          "@id": "https://hemanthkumar.dev/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://hemanthkumar.dev/#webpage",
        url: "https://hemanthkumar.dev",
        name: "Hemanth Kumar | MERN Stack Developer, DevOps & AI/ML Portfolio",
        isPartOf: {
          "@id": "https://hemanthkumar.dev/#website",
        },
        about: {
          "@id": "https://hemanthkumar.dev/#person",
        },
        description:
          "Explore Hemanth Kumar's portfolio showcasing projects in MERN Stack development, DevOps automation, and AI/ML & Generative AI.",
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://hemanthkumar.dev"],
          },
        ],
      },
      {
        "@type": "ProfilePage",
        dateCreated: "2024-01-01T00:00:00+00:00",
        dateModified: "2025-05-24T00:00:00+00:00",
        mainEntity: {
          "@id": "https://hemanthkumar.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} bg-background text-foreground antialiased font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        {children}
      </body>
    </html>
  );
}
