import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface HeaderProps {
  kickoff: Date;
  ctaLabel: string;
}

export const Header = ({ kickoff, ctaLabel }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 shadow-lg backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-12">
        <img
          src={logo}
          alt="Fantasy Eleven"
          width={160}
          height={48}
          className={cn(
            "h-9 w-auto transition-all duration-300 md:h-11",
            isScrolled ? "" : "brightness-0 invert",
          )}
        />

        <div className="flex items-center gap-3 md:gap-5">
          {/* The countdown only joins the bar once the hero's own timer scrolls away. */}
          <div
            className={cn(
              "hidden items-center gap-2 transition-opacity duration-300 sm:flex",
              isScrolled ? "text-foreground opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Kickoff in
            </span>
            <CountdownTimer target={kickoff} variant="compact" />
          </div>

          <Button
            asChild
            size="sm"
            className={cn(
              "rounded-full font-semibold transition-all",
              isScrolled
                ? "bg-accent text-accent-foreground shadow-gold hover:bg-accent/90"
                : "bg-white text-primary hover:bg-white/90",
            )}
          >
            <a href="#contests">
              <span className="hidden sm:inline">{ctaLabel}</span>
              <span className="sm:hidden">Enter now</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
