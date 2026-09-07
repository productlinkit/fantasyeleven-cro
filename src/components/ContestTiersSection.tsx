import { ArrowUpRight, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/SectionBadge";
import { CONTESTS, GRAND_PRIZE } from "@/config/matchday";
import { cn } from "@/lib/utils";

export const ContestTiersSection = () => (
  <section id="contests" className="scroll-mt-20 bg-background py-20">
    <div className="section-x">
      <SectionBadge number={1} label="Pick your entry" className="mb-8" />

      <div className="mb-14 max-w-3xl">
        <h2 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
          Start free. Move up when you're ready.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Both entries score the same way. Free pays cash to your e-wallet; premium adds more teams,
          sharper tools, and puts the signed Inzaghi photo on the line.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {CONTESTS.map((contest) => (
          <Card
            key={contest.id}
            className={cn(
              "relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-shadow",
              contest.highlight
                ? "border-primary bg-primary text-white shadow-purple ring-4 ring-primary/20"
                : "border-border bg-card shadow-card hover:shadow-xl",
            )}
          >
            {contest.highlight && (
              <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-lime-foreground">
                Most entered
              </span>
            )}

            <h3 className="text-2xl font-bold">{contest.name}</h3>
            <p
              className={cn(
                "mt-1 text-sm",
                contest.highlight ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {contest.tagline}
            </p>

            <div className="mb-6 mt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">{contest.price}</span>
                <span
                  className={cn(
                    "text-sm",
                    contest.highlight ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  {contest.priceNote}
                </span>
              </div>
            </div>

            <div
              className={cn(
                "mb-8 flex items-center gap-4 rounded-2xl p-5",
                contest.highlight ? "bg-white/10" : "bg-muted",
              )}
            >
              {contest.prizeKind === "item" && (
                <img
                  src={GRAND_PRIZE.image}
                  alt={GRAND_PRIZE.alt}
                  width={88}
                  height={120}
                  loading="lazy"
                  className="h-[120px] w-[88px] shrink-0 rounded-lg object-cover shadow-lg"
                />
              )}
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.16em]",
                    contest.highlight ? "text-white/60" : "text-muted-foreground",
                  )}
                >
                  {contest.prizeLabel}
                </p>
                <p
                  className={cn(
                    "mt-1 font-black",
                    contest.prizeKind === "item" ? "text-xl leading-tight" : "tabular text-3xl",
                    contest.highlight ? "text-accent" : "text-foreground",
                  )}
                >
                  {contest.prizeHeadline}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    contest.highlight ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  {contest.prizeNote}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    contest.highlight ? "text-white/70" : "text-muted-foreground",
                  )}
                >
                  {contest.slots}
                </p>
              </div>
            </div>

            <ul className="mb-8 flex-1 space-y-3.5">
              {contest.features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        contest.highlight ? "text-accent" : "text-primary",
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <Minus
                      className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/50"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cn(
                      "text-[15px]",
                      !feature.included && "text-muted-foreground/70 line-through",
                      feature.included && contest.highlight && "text-white/90",
                      feature.included && !contest.highlight && "text-foreground/80",
                    )}
                  >
                    {feature.text}
                  </span>
                  <span className="sr-only">{feature.included ? "included" : "not included"}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className={cn(
                "w-full rounded-full py-6 text-base font-bold",
                contest.highlight
                  ? "bg-accent text-accent-foreground shadow-gold hover:bg-accent/90"
                  : "bg-foreground text-background hover:bg-foreground/90",
              )}
            >
              {contest.cta}
              <ArrowUpRight className="ml-1 h-5 w-5" />
            </Button>

            <p
              className={cn(
                "mt-4 text-center text-xs",
                contest.highlight ? "text-white/75" : "text-muted-foreground",
              )}
            >
              {contest.highlight
                ? "Full refund in coins or to your card until the contest locks"
                : "No card required · takes about 3 minutes"}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
