import { cn } from "@/lib/utils";
import { useCountdown } from "@/hooks/useCountdown";

interface CountdownTimerProps {
  target: Date;
  /** "hero" = big glass tiles, "compact" = one inline row for the sticky bar */
  variant?: "hero" | "compact";
  className?: string;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const CountdownTimer = ({ target, variant = "hero", className }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(target);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  const liveLabel = isExpired
    ? "Entries for this contest are closed"
    : `${days} days ${hours} hours ${minutes} minutes until kickoff`;

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-1.5", className)} aria-label={liveLabel}>
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
        </span>
        <span className="tabular text-sm font-bold" aria-hidden="true">
          {days > 0 && `${days}d `}
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className="grid grid-cols-4 gap-2 sm:gap-3"
        role="timer"
        aria-live="off"
        aria-label={liveLabel}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center backdrop-blur-md sm:px-4 sm:py-4"
          >
            <div
              className="tabular text-3xl font-black leading-none text-white sm:text-4xl md:text-5xl"
              aria-hidden="true"
            >
              {pad(unit.value)}
            </div>
            <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <p className="sr-only">{liveLabel}</p>
    </div>
  );
};
