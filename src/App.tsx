import { useMemo } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ContestTiersSection } from "@/components/ContestTiersSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { RewardsSection } from "@/components/RewardsSection";
import { FairnessSection } from "@/components/FairnessSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Footer } from "@/components/Footer";
import { CTA_PRIMARY, getNextKickoff } from "@/config/matchday";

const App = () => {
  // Resolved once per page load so every timer on the page counts to the same instant.
  const kickoff = useMemo(() => getNextKickoff(), []);

  return (
    <>
      <Header kickoff={kickoff} ctaLabel={CTA_PRIMARY} />
      <main>
        <HeroSection kickoff={kickoff} />
        <ContestTiersSection />
        <LeaderboardSection />
        <RewardsSection />
        <FairnessSection />
        <FinalCTASection kickoff={kickoff} />
      </main>
      <Footer />
      <StickyMobileCTA kickoff={kickoff} />
    </>
  );
};

export default App;
