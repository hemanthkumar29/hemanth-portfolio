import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-stone-400 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
