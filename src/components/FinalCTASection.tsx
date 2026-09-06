import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CTA_PRIMARY, FEATURED_MATCH } from "@/config/matchday";
import ctaBackground from "@/assets/cta-football-bg.jpg";

interface FinalCTASectionProps {
  kickoff: Date;
}

export const FinalCTASection = ({ kickoff }: FinalCTASectionProps) => (
  <section className="relative overflow-hidden">
    <img
      src={ctaBackground}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="section-x relative z-10 py-20 text-center md:py-28">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {FEATURED_MATCH.home} vs {FEATURED_MATCH.away} · {FEATURED_MATCH.venue}
      </p>

      <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-black leading-[1.08] text-white md:text-6xl">
        Entries close when the whistle goes.
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85">
        Three minutes to build a team. One matchweek to move up the board.
      </p>

      <div className="mx-auto mb-10 max-w-md">
        <CountdownTimer target={kickoff} />
      </div>

      <Button
        asChild
        size="lg"
        className="rounded-full bg-accent px-10 py-7 text-lg font-bold text-accent-foreground shadow-gold hover:bg-accent/90"
      >
        <a href="#contests">
          {CTA_PRIMARY}
          <ArrowUpRight className="ml-1 h-5 w-5" />
        </a>
      </Button>

      <p className="mt-5 text-sm text-white/70">
        Free entry available · no card required · full refund until lock-in
      </p>
    </div>
  </section>
);
