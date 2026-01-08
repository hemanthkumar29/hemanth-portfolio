import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-white/25",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
