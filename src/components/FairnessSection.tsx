import { BarChart3, Eye, ShieldCheck, Scale } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/SectionBadge";
import { FAIRNESS_POINTS, FAQS } from "@/config/matchday";

const ICONS = [BarChart3, Scale, Eye, ShieldCheck];

export const FairnessSection = () => (
  <section id="fairness" className="scroll-mt-20 bg-muted/40 py-20">
    <div className="section-x">
      <SectionBadge number={4} label="Skill, not luck" className="mb-8" />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-5 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Built on football knowledge, not luck.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            This isn't a bookmaker and you're not playing against the house. You draft real players
            and your score is whatever they do on the pitch — the same rules for everyone on the
            board.
          </p>

          <div className="space-y-5">
            {FAIRNESS_POINTS.map((point, index) => {
              const Icon = ICONS[index] ?? ShieldCheck;
              return (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">{point.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Objection handling, kept next to the trust claims it backs up */}
        <div className="lg:pt-4">
          <h3 className="mb-6 text-xl font-bold">Before you enter</h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="rounded-2xl border-0 bg-card px-6 py-1 shadow-card"
              >
                <AccordionTrigger className="text-left text-[17px] font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);
