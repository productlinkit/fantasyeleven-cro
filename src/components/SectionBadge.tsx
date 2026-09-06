import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  number: number;
  label: string;
  /** Flip to light treatment on dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}

export const SectionBadge = ({ number, label, tone = "dark", className }: SectionBadgeProps) => (
  <div className={cn("eyebrow", className)}>
    <span
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold",
        tone === "dark" ? "bg-foreground text-background" : "bg-white text-foreground",
      )}
    >
      {number}
    </span>
    <span
      className={cn(
        "rounded-full border-2 px-4 py-1.5 text-sm font-medium",
        tone === "dark" ? "border-foreground text-foreground" : "border-white text-white",
      )}
    >
      {label}
    </span>
  </div>
);
