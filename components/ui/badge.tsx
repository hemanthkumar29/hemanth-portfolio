import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "secondary" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-200",
        {
          "border border-[rgba(var(--border),var(--border-opacity))] bg-[rgba(var(--card-bg),var(--card-bg-opacity))] text-muted-foreground hover:border-accent/30 hover:text-foreground hover:bg-[rgba(var(--card-bg),var(--card-hover-opacity))]":
            variant === "default",
          "border border-accent/20 bg-accent/10 text-accent":
            variant === "accent",
          "border border-accent-secondary/20 bg-accent-secondary/10 text-accent-secondary":
            variant === "secondary",
          "border border-[rgba(var(--border),var(--border-opacity))] text-muted-foreground":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
