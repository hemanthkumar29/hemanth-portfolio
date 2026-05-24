import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 shadow-soft transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] hover:shadow-glow gradient-border",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
