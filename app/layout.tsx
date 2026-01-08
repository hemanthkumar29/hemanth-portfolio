import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hemanth.dev"),
  title: "Hemanth Kumar | DevOps & Cloud Enthusiast",
  description:
    "Portfolio of Hemanth Kumar — aspiring software developer focusing on DevOps, cloud fundamentals, backend systems, and polished product experiences.",
  keywords: [
    "Hemanth Kumar",
    "DevOps",
    "Cloud",
    "Next.js",
    "Portfolio",
    "Software Developer",
  ],
  openGraph: {
    title: "Hemanth Kumar | DevOps & Cloud Enthusiast",
    description:
      "Projects across cloud, automation, AI/ML, and backend systems. Built with Next.js 14, Tailwind, and Framer Motion.",
    url: "https://hemanth.dev",
    siteName: "Hemanth Kumar Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hemanth Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Kumar | DevOps & Cloud Enthusiast",
    description:
      "Projects across cloud, automation, AI/ML, and backend systems. Built with Next.js 14, Tailwind, and Framer Motion.",
    images: ["/og.jpg"],
  },
  authors: [{ name: "Hemanth Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} bg-background text-foreground antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 backdrop-grid" />
        {children}
      </body>
    </html>
  );
}
