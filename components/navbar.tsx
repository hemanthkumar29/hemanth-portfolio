"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { navLinks, personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CommandPalette } from "@/components/command-palette";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <Link
            href="#hero"
            className="text-base font-bold gradient-text"
          >
            {personal.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-all duration-200 hover:text-white hover:bg-white/5"
                scroll={true}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Command palette trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500 transition-all duration-200 hover:border-accent/30 hover:text-zinc-300 sm:inline-flex"
              aria-label="Open command palette"
            >
              <Command className="h-3 w-3" />
              <span>⌘K</span>
            </button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a href="/api/resume" className="gap-2 text-xs sm:text-sm">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 transition-colors hover:text-white lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="absolute right-0 top-0 h-full w-72 border-l border-white/[0.06] bg-[#0a0a0f]/95 backdrop-blur-xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-white"
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base text-zinc-400 transition-all duration-200 hover:text-white hover:bg-white/5"
                      scroll={true}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <Button asChild variant="default" size="md" className="w-full">
                  <a href="/api/resume" className="gap-2">
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
