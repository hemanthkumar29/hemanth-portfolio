import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700",
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
