"use client";

import { useEffect, useState, useCallback } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { navLinks, projects } from "@/data/portfolio";
import { Search, Link as LinkIcon, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const handleOpenChange = useCallback(
    (value: boolean) => {
      if (!value) {
        setQuery("");
      }
      onOpenChange(value);
    },
    [onOpenChange]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        handleOpenChange(!open);
      }
      if (e.key === "Escape") {
        handleOpenChange(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, handleOpenChange]);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    handleOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleOpenChange(false)}
          aria-modal
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="mt-[15vh] w-full max-w-xl overflow-hidden rounded-2xl border border-[rgba(var(--border),0.1)] bg-[rgb(var(--bg-secondary))]/95 backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CommandPrimitive label="Command Menu" className="w-full">
              <div className="flex items-center gap-3 border-b border-[rgba(var(--border),0.06)] px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <CommandPrimitive.Input
                  autoFocus
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search sections, projects, or actions..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button
                  onClick={() => handleOpenChange(false)}
                  className="rounded-md border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] px-1.5 py-0.5 text-[10px] text-muted-foreground transition hover:text-foreground"
                  aria-label="Close command menu"
                >
                  ESC
                </button>
              </div>
              <CommandPrimitive.List className="max-h-80 overflow-y-auto py-2 text-sm">
                <CommandPrimitive.Empty className="px-4 py-8 text-center text-muted-foreground">
                  No results found.
                </CommandPrimitive.Empty>
                <CommandPrimitive.Group
                  heading="Navigate"
                  className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {navLinks.map((link) => (
                    <CommandItemLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      onOpenChange={handleOpenChange}
                    />
                  ))}
                </CommandPrimitive.Group>
                <CommandPrimitive.Group
                  heading="Projects"
                  className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {projects.map((project) => (
                    <CommandItemLink
                      key={project.title}
                      href="#projects"
                      label={project.title}
                      description={project.tagline}
                      onOpenChange={handleOpenChange}
                    />
                  ))}
                </CommandPrimitive.Group>
                <CommandPrimitive.Group
                  heading="Actions"
                  className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  <CommandPrimitive.Item
                    onSelect={toggleTheme}
                    className={cn(
                      "group flex cursor-pointer items-center gap-3 rounded-lg mx-1 px-3 py-2.5 text-muted transition-colors data-[selected=true]:bg-[rgba(var(--border),0.06)] data-[selected=true]:text-foreground"
                    )}
                  >
                    <Sun className="h-4 w-4 text-muted-foreground group-data-[selected=true]:text-accent" />
                    <span className="text-sm font-medium">Toggle Theme</span>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
              </CommandPrimitive.List>
            </CommandPrimitive>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

interface CommandItemLinkProps {
  href: string;
  label: string;
  description?: string;
  onOpenChange: (open: boolean) => void;
}

function CommandItemLink({ href, label, description, onOpenChange }: CommandItemLinkProps) {
  return (
    <CommandPrimitive.Item
      onSelect={() => {
        onOpenChange(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      className={cn(
        "group flex cursor-pointer items-start gap-3 rounded-lg mx-1 px-3 py-2.5 text-muted transition-colors data-[selected=true]:bg-[rgba(var(--border),0.06)] data-[selected=true]:text-foreground"
      )}
    >
      <LinkIcon className="mt-0.5 h-4 w-4 text-muted-foreground group-data-[selected=true]:text-accent" />
      <div className="space-y-0.5 overflow-hidden">
        <p className="text-sm font-medium truncate">{label}</p>
        {description ? (
          <p className="text-xs text-muted-foreground truncate group-data-[selected=true]:text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </CommandPrimitive.Item>
  );
}
