"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/navbar").then((m) => m.Navbar), { ssr: false });
import { CommandPalette } from "@/components/command-palette";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), {
  ssr: false,
});

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden pt-20">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-55">
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          zIndex={-1}
        />
      </div>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main" className="space-y-12 sm:space-y-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
