"use client";

import { Button } from "@/components/ui/button";
import { personal, heroTaglines, achievements } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, MapPin, Download, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AnimatedTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="block h-[1.5em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroTaglines[index]}
          className="block gradient-text"
          initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {heroTaglines[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    />
  );
}

/* Floating tech label */
function FloatingLabel({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute hidden lg:flex items-center gap-1.5 rounded-full border border-[rgba(var(--border),0.06)] bg-[rgba(var(--card-bg),0.04)] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm pointer-events-none ${className}`}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    >
      {text}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-[rgba(var(--border),0.06)]">
      {/* Floating gradient orbs */}
      <FloatingOrb className="top-20 -left-32 h-80 w-80 bg-accent" delay={0} />
      <FloatingOrb className="bottom-20 right-10 h-64 w-64 bg-accent-secondary" delay={2} />
      <FloatingOrb className="top-1/2 left-1/3 h-48 w-48 bg-violet-600" delay={4} />

      {/* Floating tech labels */}
      <FloatingLabel text="⚛ React" className="top-[15%] right-[15%]" delay={0.5} />
      <FloatingLabel text="🐍 Python" className="top-[30%] right-[8%]" delay={1.5} />
      <FloatingLabel text="☁ AWS" className="bottom-[25%] right-[20%]" delay={2.5} />
      <FloatingLabel text="🧠 AI/ML" className="top-[60%] right-[5%]" delay={3.5} />
      <FloatingLabel text="📱 Flutter" className="bottom-[15%] right-[12%]" delay={1} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <motion.div
          className="max-w-3xl space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badges */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </span>
            <span className="rounded-full border border-[rgba(var(--border),0.1)] bg-[rgba(var(--card-bg),0.05)] px-3 py-1 text-xs text-muted-foreground">
              {personal.degree}
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={childVariants} className="space-y-2">
            <p className="text-lg text-muted sm:text-xl font-medium">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              {personal.name}
            </h1>
          </motion.div>

          {/* Animated subtitle */}
          <motion.div variants={childVariants}>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">
              {personal.headline}
            </p>
            <p className="text-xl text-muted sm:text-2xl">
              <AnimatedTagline />
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p variants={childVariants} className="max-w-2xl leading-relaxed text-muted-foreground text-base sm:text-lg">
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#projects" className="gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/api/resume" className="gap-2">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#contact" className="gap-2">
                <Mail className="h-4 w-4" /> Contact
              </Link>
            </Button>
          </motion.div>

          {/* Socials & location */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center gap-5 text-muted-foreground">
            <Link
              href={personal.contact.github}
              className="rounded-lg p-2 transition-all duration-200 hover:text-foreground hover:bg-[rgba(var(--border),0.06)]"
              target="_blank"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={personal.contact.linkedin}
              className="rounded-lg p-2 transition-all duration-200 hover:text-foreground hover:bg-[rgba(var(--border),0.06)]"
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
                className="rounded-full border border-[rgba(var(--border),0.08)] bg-[rgba(var(--card-bg),0.03)] px-4 py-1.5 text-sm text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-foreground hover:shadow-glow"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Profile Card */}
        <motion.div
          className="card p-6 gradient-border"
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
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
              { label: "Focus Areas", value: "Full-Stack Dev, AI/ML & Cloud" },
              { label: "Current Goal", value: "Build production apps & land tech internships" },
              { label: "Education", value: personal.degree },
              { label: "Based In", value: personal.location },
            ].map((item) => (
              <div key={item.label} className="group">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-muted transition-colors">
                  {item.label}
                </p>
                <p className="mt-1.5 font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(var(--border),0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {["bg-violet-500", "bg-cyan-500", "bg-emerald-500", "bg-amber-500"].map((color) => (
                  <div key={color} className={`h-3 w-3 rounded-full ${color} ring-2 ring-[rgb(var(--bg-primary))]`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">7+ projects shipped across AI, web & mobile</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
