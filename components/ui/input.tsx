import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
        <input
          type={type}
          className={cn(
            "w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
            className
          )}
          ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
