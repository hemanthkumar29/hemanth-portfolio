"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowX = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden pb-12 pt-20 sm:pt-28"
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-x-10 top-8 h-64 rounded-full bg-gradient-to-r from-accent/25 via-accent2/20 to-accent/25 blur-[100px]"
          style={{ y: glowY, x: glowX }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <div className="container relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-foreground/70">
            <span className="rounded-full bg-white/5 px-3 py-1">AI • Quantum • Full-stack</span>
            <span className="text-foreground/60">EEE @ Lendi Institute</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient" itemProp="name">{personal.name}</span>
          </h1>
          <p className="text-lg text-foreground/80 sm:text-xl" itemProp="jobTitle">
            {personal.headline}
          </p>
          <p className="text-foreground/75 leading-relaxed" itemProp="description">
            {personal.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects" className="gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link href={personal.resumeUrl} target="_blank" rel="noopener" download>
                Download Resume
              </Link>
            </Button>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-foreground/70" aria-label="Social links">
            <Link
              href={personal.contact.github}
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              itemProp="sameAs"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href={personal.contact.linkedin}
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              itemProp="sameAs"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
            <span className="text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              Based in <span itemProp="addressLocality">{personal.location}</span>
            </span>
          </nav>
          <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Hack 2 Impact ’25 Winner</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">IEEE Xtreme 18.0/19.0</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SIH Internal Winner ’24/’25</span>
          </div>
        </motion.div>
        <motion.div
          className="relative ml-auto flex h-80 w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute -left-10 -top-6 h-28 w-28 rounded-full bg-accent/25 blur-3xl"
            style={{ y: bubbleY }}
            animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-accent2/25 blur-3xl"
            style={{ y: bubbleY }}
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-soft">
            <div className="absolute inset-0 backdrop-grid opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-white/2" />
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
              EEE • B.Tech
            </div>
            <div className="absolute bottom-6 left-6 space-y-2">
              <p className="text-sm text-white/70">AI • Quantum • Systems</p>
              <p className="text-xl font-semibold text-white">Builder & Collaborator</p>
            </div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-10 rounded-2xl border border-white/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
