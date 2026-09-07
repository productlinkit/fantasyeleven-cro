import { ArrowUpRight, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  CTA_PRIMARY,
  CTA_SECONDARY,
  ENTRIES_TAKEN,
  ENTRIES_TOTAL,
  FEATURED_MATCH,
  GRAND_PRIZE,
  LEADERBOARD,
  PLAYERS_ENTERED_TODAY,
} from "@/config/matchday";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";

interface HeroSectionProps {
  kickoff: Date;
}

/** Lives in /public so index.html can preload it — this is the LCP element. */
const HERO_IMAGE = "/hero-matchday.jpg";

const AVATARS = [member1, member2, member3];

export const HeroSection = ({ kickoff }: HeroSectionProps) => {
  const slotsLeft = ENTRIES_TOTAL - ENTRIES_TAKEN;
  const filledPercent = Math.round((ENTRIES_TAKEN / ENTRIES_TOTAL) * 100);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="section-x relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — the pitch */}
          <div>
            <div className="eyebrow mb-6 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Entries close at kickoff
              </span>
            </div>

            <h1 className="mb-5 text-[34px] font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Matchday Is Live&nbsp;&mdash;<br />
              Get In Before Kickoff
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Join this week's featured contest, climb the leaderboard, and play for a signed
              Filippo Inzaghi photo with a premium entry.
            </p>

            <div className="mb-8 max-w-lg">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {FEATURED_MATCH.home} vs {FEATURED_MATCH.away} · {FEATURED_MATCH.competition}
              </p>
              <CountdownTimer target={kickoff} />
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-gold hover:bg-accent/90"
              >
                <a href="#contests">
                  {CTA_PRIMARY}
                  <ArrowUpRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white/50 bg-transparent px-8 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white"
              >
                <a href="#contests">{CTA_SECONDARY}</a>
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">
                <span className="tabular font-bold text-white">
                  {PLAYERS_ENTERED_TODAY.toLocaleString("en-US")}
                </span>{" "}
                players entered today
              </p>
            </div>
          </div>

          {/* Right — grand prize + live leaderboard */}
          <div className="animate-fade-in rounded-3xl border border-white/15 bg-white/10 p-5 shadow-purple backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center gap-4 rounded-2xl bg-gradient-purple p-4 sm:p-5">
              <img
                src={GRAND_PRIZE.image}
                alt={GRAND_PRIZE.alt}
                width={96}
                height={130}
                className="h-[104px] w-[78px] shrink-0 rounded-lg object-cover shadow-lg sm:h-[130px] sm:w-24"
              />
              <div className="min-w-0">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  This week's grand prize
                </p>
                <p className="text-xl font-black leading-tight text-accent sm:text-2xl">
                  {GRAND_PRIZE.name}
                </p>
                <p className="mt-1.5 text-sm text-white/70">
                  {GRAND_PRIZE.subtitle} · one winner
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Live leaderboard
                </h2>
              </div>
              <span className="text-xs text-white/60">Matchweek 6</span>
            </div>

            <ul className="mb-6 space-y-1.5">
              {LEADERBOARD.slice(0, 4).map((entry) => (
                <li
                  key={entry.rank}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                >
                  <span
                    className={`tabular flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                      entry.rank === 1
                        ? "bg-accent text-accent-foreground"
                        : "bg-white/15 text-white"
                    }`}
                  >
                    {entry.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{entry.name}</p>
                    <p className="truncate text-xs text-white/50">{entry.handle}</p>
                  </div>
                  <div className="text-right">
                    <p className="tabular text-sm font-bold text-white">{entry.points}</p>
                    {entry.prize && (
                      <p className="text-xs font-medium text-accent">{entry.prize}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Scarcity — real slot count, not a fake bar */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                  Premium contest filling up
                </span>
                <span className="tabular font-bold text-accent">
                  {slotsLeft.toLocaleString("en-US")} left
                </span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-white/15"
                role="progressbar"
                aria-valuenow={filledPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Premium contest slots filled"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-destructive"
                  style={{ width: `${filledPercent}%` }}
                />
              </div>
              <p className="tabular mt-2 text-xs text-white/60">
                {ENTRIES_TAKEN.toLocaleString("en-US")} of{" "}
                {ENTRIES_TOTAL.toLocaleString("en-US")} entries taken
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
