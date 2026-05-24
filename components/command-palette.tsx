"use client";

import { useEffect, useState, useCallback } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { navLinks, projects } from "@/data/portfolio";
import { X, Link as LinkIcon, Search } from "lucide-react";
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
            className="mt-[15vh] w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111118]/95 backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CommandPrimitive label="Command Menu" className="w-full">
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                <Search className="h-4 w-4 text-zinc-500" />
                <CommandPrimitive.Input
                  autoFocus
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search sections or projects..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
                />
                <button
                  onClick={() => handleOpenChange(false)}
                  className="rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-zinc-500 transition hover:text-white"
                  aria-label="Close command menu"
                >
                  ESC
                </button>
              </div>
              <CommandPrimitive.List className="max-h-80 overflow-y-auto py-2 text-sm">
                <CommandPrimitive.Empty className="px-4 py-8 text-center text-zinc-500">
                  No results found.
                </CommandPrimitive.Empty>
                <CommandPrimitive.Group
                  heading="Navigate"
                  className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600"
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
                  className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600"
                >
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
        "group flex cursor-pointer items-start gap-3 rounded-lg mx-1 px-3 py-2.5 text-zinc-400 transition-colors data-[selected=true]:bg-white/[0.05] data-[selected=true]:text-white"
      )}
    >
      <LinkIcon className="mt-0.5 h-4 w-4 text-zinc-600 group-data-[selected=true]:text-accent" />
      <div className="space-y-0.5 overflow-hidden">
        <p className="text-sm font-medium truncate">{label}</p>
        {description ? (
          <p className="text-xs text-zinc-600 truncate group-data-[selected=true]:text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
    </CommandPrimitive.Item>
  );
}
