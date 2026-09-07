import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/SectionBadge";
import { GRAND_PRIZE, REWARDS } from "@/config/matchday";

export const RewardsSection = () => (
  <section id="rewards" className="scroll-mt-20 bg-background py-20">
    <div className="section-x">
      <SectionBadge number={3} label="What winners get" className="mb-8" />

      <div className="mb-14 max-w-3xl">
        <h2 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
          One signed photo. One winner.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Nothing here is a voucher or a points balance you can't spend. This is the actual item
          leaving our hands when the final whistle goes — plus what everyone else plays for.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* The prize itself, shown at size — this is the thing being played for */}
        <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-dark p-6 shadow-card sm:p-8">
          <img
            src={GRAND_PRIZE.image}
            alt={GRAND_PRIZE.alt}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-xl object-contain shadow-2xl"
          />
          <div className="mt-7 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Premium grand prize · 1 of 1
            </p>
            <p className="mb-3 text-2xl font-black leading-tight text-white md:text-3xl">
              {GRAND_PRIZE.name}
            </p>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-white/70">
              {GRAND_PRIZE.detail}
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
