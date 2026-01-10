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
  title: "Hemanth Kumar | AI, Quantum & Full-Stack Developer Portfolio",
  description:
    "Portfolio of Hemanth Kumar — B.Tech EEE student specializing in AI/ML, Quantum Computing, Full-Stack Development, and Cloud Technologies. View projects in machine learning, quantum fraud detection, and web development.",
  url: "https://hemanth.dev",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
    "AI Developer",
    "Machine Learning Engineer",
    "Quantum Computing",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "TensorFlow",
    "Qiskit",
    "DevOps",
    "Cloud Computing",
    "Web Developer India",
    "B.Tech EEE",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Flask Developer",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "IEEE Xtreme",
    "Hackathon Winner",
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
        alt: `${siteConfig.name} - AI, Quantum & Full-Stack Developer Portfolio`,
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
        "@id": "https://hemanth.dev/#person",
        name: "Hemanth Kumar",
        url: "https://hemanth.dev",
        image: "https://hemanth.dev/og.jpg",
        sameAs: [
          "https://github.com/hemanthkumar29",
          "https://www.linkedin.com/in/hemanthkumar-ch/",
        ],
        jobTitle: "AI & Full-Stack Developer",
        worksFor: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Quantum Computing",
          "Full-Stack Development",
          "React",
          "Next.js",
          "Python",
          "TensorFlow",
          "Node.js",
          "Cloud Computing",
        ],
        description:
          "B.Tech EEE student specializing in AI/ML, Quantum Computing, and Full-Stack Development",
      },
      {
        "@type": "WebSite",
        "@id": "https://hemanth.dev/#website",
        url: "https://hemanth.dev",
        name: "Hemanth Kumar Portfolio",
        description:
          "Portfolio of Hemanth Kumar featuring projects in AI, Quantum Computing, and Full-Stack Development",
        publisher: {
          "@id": "https://hemanth.dev/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://hemanth.dev/#webpage",
        url: "https://hemanth.dev",
        name: "Hemanth Kumar | AI, Quantum & Full-Stack Developer Portfolio",
        isPartOf: {
          "@id": "https://hemanth.dev/#website",
        },
        about: {
          "@id": "https://hemanth.dev/#person",
        },
        description:
          "Explore Hemanth Kumar's portfolio showcasing projects in AI/ML, Quantum Computing, Full-Stack Development, and Cloud Technologies.",
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://hemanth.dev"],
          },
        ],
      },
      {
        "@type": "ProfilePage",
        dateCreated: "2024-01-01T00:00:00+00:00",
        dateModified: new Date().toISOString(),
        mainEntity: {
          "@id": "https://hemanth.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} bg-background text-foreground antialiased font-sans`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 backdrop-grid" />
        {children}
      </body>
    </html>
  );
}
