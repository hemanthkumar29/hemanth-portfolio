"use client";

import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "MERN Stack Developer",
  "DevOps Engineer",
  "AI/ML Enthusiast",
  "Full-Stack Builder",
];

function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="inline-block gradient-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FloatingOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

const achievements = [
  "Hack 2 Impact 2025 Winner",
  "IEEE Xtreme 18.0 / 19.0",
  "SIH Internal Winner 2024 / 2025",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/[0.06]">
      {/* Floating gradient orbs */}
      <FloatingOrb className="top-20 -left-32 h-72 w-72 bg-accent animate-float" />
      <FloatingOrb className="bottom-20 right-10 h-60 w-60 bg-accent-secondary animate-float-slow" />
      <FloatingOrb className="top-1/2 left-1/3 h-40 w-40 bg-violet-600 animate-float-slower" />

      <div className="container relative z-10 grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <motion.div
          className="max-w-3xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status & tags */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
              B.Tech EEE @ Lendi Institute
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={childVariants} className="space-y-2">
            <p className="text-lg text-zinc-400 sm:text-xl">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {personal.name}
            </h1>
          </motion.div>

          {/* Animated role */}
          <motion.p variants={childVariants} className="text-xl text-zinc-400 sm:text-2xl">
            <AnimatedRoles />
          </motion.p>

          {/* Summary */}
          <motion.p variants={childVariants} className="max-w-2xl leading-relaxed text-zinc-500 text-base sm:text-lg">
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects" className="gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/api/resume" className="gap-2">
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Socials & location */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-5 text-zinc-500">
            <Link
              href={personal.contact.github}
              className="rounded-lg p-2 transition-all duration-200 hover:text-white hover:bg-white/5"
              target="_blank"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={personal.contact.linkedin}
              className="rounded-lg p-2 transition-all duration-200 hover:text-white hover:bg-white/5"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="h-3.5 w-3.5" />
              {personal.location}
            </span>
          </motion.div>

          {/* Achievement badges */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-3">
            {achievements.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-400 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-zinc-200 hover:shadow-glow"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Profile Card */}
        <motion.div
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm shadow-soft transition-all duration-500 hover:shadow-glow hover:border-accent/20 gradient-border"
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text">
              Quick Profile
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-accent-secondary/50 to-transparent" />
          </div>

          <div className="space-y-6">
            {[
              { label: "Focus Areas", value: "MERN Stack, DevOps, AI/ML & GenAI" },
              { label: "Current Goal", value: "Build production apps and grow through internships" },
              { label: "Based In", value: personal.location },
            ].map((item) => (
              <div key={item.label} className="group">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {item.label}
                </p>
                <p className="mt-1.5 font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {["bg-violet-500", "bg-cyan-500", "bg-emerald-500"].map((color) => (
                  <div key={color} className={`h-3 w-3 rounded-full ${color} ring-2 ring-[#0a0a0f]`} />
                ))}
              </div>
              <p className="text-xs text-zinc-500">4+ production projects shipped</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
