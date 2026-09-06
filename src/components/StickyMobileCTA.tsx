import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CTA_PRIMARY } from "@/config/matchday";
import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  kickoff: Date;
}

/** Keeps the entry action within thumb reach once the hero CTA scrolls off. */
export const StickyMobileCTA = ({ kickoff }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > window.innerHeight * 0.75);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-4px_24px_hsl(0_0%_0%/0.12)] backdrop-blur-md transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!isVisible}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Kickoff in
          </p>
          <CountdownTimer target={kickoff} variant="compact" className="text-foreground" />
        </div>
        <Button
          asChild
          className="ml-auto flex-1 rounded-full bg-accent font-bold text-accent-foreground shadow-gold hover:bg-accent/90"
          tabIndex={isVisible ? 0 : -1}
        >
          <a href="#contests">
            {CTA_PRIMARY}
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};
