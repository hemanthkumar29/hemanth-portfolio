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
  title: "Hemanth Kumar | Engineering Student · Software Developer · AI Builder",
  description:
    "Portfolio of Hemanth Kumar — Engineering student building intelligent software for real-world impact. Full-stack development, AI/ML applications, and cloud-deployed systems. View projects in React, Node.js, Python, and machine learning.",
  url: "https://hemanthkumar.dev",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/hemanthkumar29",
    linkedin: "https://www.linkedin.com/in/hemanthkumar-ch/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
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
    "Engineering Student",
    "Software Developer",
    "AI Builder",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "AI Engineer",
    "Flutter Developer",
    "MongoDB",
    "Express.js",
    "AWS",
    "Cloud Computing",
    "DSA",
    "Data Structures",
    "Algorithms",
    "Software Engineer Intern",
    "EEE Student",
    "Visakhapatnam Developer",
    "Lendi Institute",
    "Women Safety AI",
    "Deepfake Detection",
    "Web Developer India",
    "Hackathon Winner",
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
        alt: `${siteConfig.name} - Engineering Student · Software Developer · AI Builder`,
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
        jobTitle: "Engineering Student & Software Developer",
        worksFor: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Lendi Institute of Engineering and Technology",
        },
        knowsAbout: [
          "Full-Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Python",
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "Flutter",
          "AWS",
          "Cloud Computing",
          "Data Structures & Algorithms",
        ],
        description:
          "Engineering student building intelligent software for real-world impact — full-stack development, AI/ML applications, and cloud-deployed systems.",
      },
      {
        "@type": "WebSite",
        "@id": "https://hemanthkumar.dev/#website",
        url: "https://hemanthkumar.dev",
        name: "Hemanth Kumar Portfolio",
        description:
          "Portfolio of Hemanth Kumar featuring projects in full-stack development, AI/ML, and mobile applications.",
        publisher: {
          "@id": "https://hemanthkumar.dev/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://hemanthkumar.dev/#webpage",
        url: "https://hemanthkumar.dev",
        name: "Hemanth Kumar | Engineering Student · Software Developer · AI Builder",
        isPartOf: {
          "@id": "https://hemanthkumar.dev/#website",
        },
        about: {
          "@id": "https://hemanthkumar.dev/#person",
        },
        description:
          "Explore Hemanth Kumar's portfolio showcasing projects in full-stack development, AI/ML applications, and mobile solutions.",
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
        dateModified: "2026-05-25T00:00:00+00:00",
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
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
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
