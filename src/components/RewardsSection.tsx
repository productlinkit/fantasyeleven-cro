import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/SectionBadge";
import { REWARDS } from "@/config/matchday";
import winnerImage from "@/assets/winner-celebration.jpg";
import coinImage from "@/assets/coin-3d.png";

export const RewardsSection = () => (
  <section id="rewards" className="scroll-mt-20 bg-background py-20">
    <div className="section-x">
      <SectionBadge number={3} label="What winners get" className="mb-8" />

      <div className="mb-14 max-w-3xl">
        <h2 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
          Real money, real merch, every matchweek.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Nothing here is a voucher or a points balance you can't spend. Here's exactly what leaves
          our account when the final whistle goes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Winner photo with the headline number over it */}
        <Card className="relative overflow-hidden rounded-3xl border-0 shadow-card">
          <img
            src={winnerImage}
            alt="Fantasy Eleven contest winner celebrating"
            loading="lazy"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <img
            src={coinImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute right-6 top-6 h-20 w-20 rounded-full object-cover ring-4 ring-accent/40 drop-shadow-2xl md:h-24 md:w-24"
          />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Paid out last matchweek
            </p>
            <p className="tabular mb-2 text-5xl font-black text-white md:text-6xl">$2,500</p>
            <p className="text-sm text-white/75">
              Across 50 winners — largest single payout was $900 to Rizky Ananda.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2">
          {REWARDS.map((reward) => (
            <Card
              key={reward.title}
              className="flex flex-col rounded-3xl border-0 bg-card p-7 shadow-card transition-shadow hover:shadow-xl"
            >
              <p className="tabular mb-3 text-3xl font-black text-primary">{reward.amount}</p>
              <h3 className="mb-2 text-lg font-bold leading-snug">{reward.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reward.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
