import { ArrowUpRight, Medal, TrendingUp, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/SectionBadge";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { CTA_LEADERBOARD, CURRENT_USER, LEADERBOARD } from "@/config/matchday";

const RANK_STYLES: Record<number, string> = {
  1: "bg-accent text-accent-foreground",
  2: "bg-white/80 text-foreground",
  3: "bg-[hsl(28_70%_55%)] text-white",
};

export const LeaderboardSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const pointsToGo = CURRENT_USER.nextRankPoints - CURRENT_USER.points;
  const animatedGap = useCountUp(pointsToGo, inView, 1100);
  const progressPercent = Math.round((CURRENT_USER.points / CURRENT_USER.nextRankPoints) * 100);

  return (
    <section id="leaderboard" className="scroll-mt-20 bg-gradient-dark py-20 text-white">
      <div ref={ref} className="section-x">
        <SectionBadge number={2} label="Where you stand" tone="light" className="mb-8" />

        <div className="mb-14 max-w-3xl">
          <h2 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            You're closer to the board than you think.
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            One good matchweek moves you hundreds of places. Here's the top of the table right now —
            and exactly what separates you from the next rank up.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Full leaderboard */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-2.5">
                <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-bold">Matchweek 6 · Premium contest</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Updating live
              </span>
            </div>

            <ul>
              {LEADERBOARD.map((entry) => (
                <li
                  key={entry.rank}
                  className="flex items-center gap-4 border-b border-white/5 px-6 py-4 transition-colors last:border-b-0 hover:bg-white/5"
                >
                  <span
                    className={`tabular flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                      RANK_STYLES[entry.rank] ?? "bg-white/10 text-white/70"
                    }`}
                  >
                    {entry.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{entry.name}</p>
                    <p className="truncate text-sm text-white/45">{entry.handle}</p>
                  </div>
                  <div className="text-right">
                    <p className="tabular font-bold">
                      {entry.points.toLocaleString("en-US")}
                      <span className="ml-1 text-xs font-normal text-white/45">pts</span>
                    </p>
                    <p className="text-sm font-semibold text-accent">{entry.prize}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* The visitor's own row, pinned below the fold of the table */}
            <div className="flex items-center gap-4 border-t-2 border-dashed border-white/15 bg-primary/20 px-6 py-4">
              <span className="tabular flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-3 text-sm font-black">
                {CURRENT_USER.rank.toLocaleString("en-US")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">You</p>
                <p className="text-sm text-white/45">Free entry · Matchweek 6</p>
              </div>
              <p className="tabular font-bold">
                {CURRENT_USER.points}
                <span className="ml-1 text-xs font-normal text-white/45">pts</span>
              </p>
            </div>
          </div>

          {/* Rank progress */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-2.5">
                <TrendingUp className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-bold">Your next rank</h3>
              </div>

              <p className="mb-1 text-5xl font-black leading-none text-accent">
                <span className="tabular">{animatedGap}</span>
                <span className="ml-2 text-xl font-bold text-white/70">points to go</span>
              </p>
              <p className="mb-6 text-sm text-white/60">
                That's roughly one strong matchweek — put you inside the top{" "}
                <span className="tabular font-semibold text-white">
                  {CURRENT_USER.nextRank.toLocaleString("en-US")}
                </span>
                .
              </p>

              <div className="mb-2 flex items-center justify-between text-xs font-medium text-white/60">
                <span className="tabular">Rank {CURRENT_USER.rank.toLocaleString("en-US")}</span>
                <span className="tabular">Rank {CURRENT_USER.nextRank.toLocaleString("en-US")}</span>
              </div>
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progress toward your next rank"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-light to-accent transition-[width] duration-1000 ease-out"
                  style={{ width: `${inView ? progressPercent : 0}%` }}
                />
              </div>
              <p className="tabular mt-2 text-xs text-white/45">
                {CURRENT_USER.points} / {CURRENT_USER.nextRankPoints} pts
              </p>
            </div>

            <div className="rounded-3xl border border-accent/25 bg-accent/10 p-7">
              <Medal className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
              <p className="mb-5 text-lg font-semibold leading-snug">
                The top 50 all get paid. Right now that line sits at{" "}
                <span className="tabular text-accent">982 pts</span>.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-accent py-6 font-bold text-accent-foreground shadow-gold hover:bg-accent/90"
              >
                <a href="#contests">
                  {CTA_LEADERBOARD}
                  <ArrowUpRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
