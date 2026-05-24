import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
        <input
          type={type}
          className={cn(
            "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-500 transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/[0.05] backdrop-blur-sm",
            className
          )}
          ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
