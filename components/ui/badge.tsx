import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-accent/30 hover:bg-accent/10 hover:text-white",
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
