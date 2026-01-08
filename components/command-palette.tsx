"use client";

import { useEffect, useState, useCallback } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { navLinks, projects } from "@/data/portfolio";
import { X, Link as LinkIcon } from "lucide-react";
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

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-card/95 shadow-soft"
          >
            <CommandPrimitive label="Command Menu" className="w-full">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <CommandPrimitive.Input
                  autoFocus
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search sections or projects"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                />
                <button
                  onClick={() => handleOpenChange(false)}
                  className="text-white/60 transition hover:text-white"
                  aria-label="Close command menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <CommandPrimitive.List className="max-h-96 overflow-y-auto py-2 text-sm text-white/90">
                <CommandPrimitive.Empty className="px-4 py-3 text-white/50">
                  No results found.
                </CommandPrimitive.Empty>
                <CommandPrimitive.Group heading="Navigate" className="px-2 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  {navLinks.map((link) => (
                    <CommandItemLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      onOpenChange={handleOpenChange}
                    />
                  ))}
                </CommandPrimitive.Group>
                <CommandPrimitive.Group heading="Projects" className="px-2 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  {projects.map((project) => (
                    <CommandItemLink
                      key={project.title}
                      href="#projects"
                      label={project.title}
                      description={project.description}
                      onOpenChange={handleOpenChange}
                    />
                  ))}
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
        "group flex cursor-pointer items-start gap-3 px-4 py-3 text-white/80 data-[selected=true]:bg-white/10"
      )}
    >
      <LinkIcon className="mt-0.5 h-4 w-4 text-white/50" />
      <div className="space-y-1">
        <p className="text-sm font-medium text-white">{label}</p>
        {description ? <p className="text-xs text-white/60">{description}</p> : null}
      </div>
    </CommandPrimitive.Item>
  );
}
