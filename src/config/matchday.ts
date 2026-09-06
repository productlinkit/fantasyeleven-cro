/**
 * Every number and line of copy that gets tuned during CRO experiments lives here,
 * so an A/B variant only has to swap this file — never the components.
 */

export const CTA_PRIMARY = "Enter This Week's Contest";
export const CTA_SECONDARY = "Play Your First Matchday";
export const CTA_LEADERBOARD = "Claim Your Spot on the Leaderboard";

/**
 * Next kickoff.
 * Default: the upcoming Saturday 19:45 in the visitor's local time, so the countdown
 * is always live in demo. In production, feed this from the fixture API instead:
 *   export const getNextKickoff = () => new Date("2026-09-12T19:45:00+07:00");
 */
export function getNextKickoff(from: Date = new Date()): Date {
  const KICKOFF_DAY = 6; // Saturday
  const KICKOFF_HOUR = 19;
  const KICKOFF_MINUTE = 45;

  const target = new Date(from);
  target.setHours(KICKOFF_HOUR, KICKOFF_MINUTE, 0, 0);

  let daysAhead = (KICKOFF_DAY - from.getDay() + 7) % 7;
  // Kickoff day but the whistle already blew — roll to next week.
  if (daysAhead === 0 && target.getTime() <= from.getTime()) daysAhead = 7;

  target.setDate(target.getDate() + daysAhead);
  return target;
}

export const FEATURED_MATCH = {
  competition: "Premier League · Matchweek 6",
  home: "Arsenal",
  away: "Man City",
  venue: "Emirates Stadium",
};

export const PRIZE_POOL_USD = 2_650;
export const ENTRIES_TOTAL = 5_000;
export const ENTRIES_TAKEN = 4_213;
export const PLAYERS_ENTERED_TODAY = 1_284;

export const CONTESTS = [
  {
    id: "free",
    name: "Free Entry",
    tagline: "Build confidence first",
    price: "$0",
    priceNote: "Free, always",
    prizePool: "$150",
    prizePoolNote: "shared across the top 10",
    slots: "Unlimited slots",
    highlight: false,
    cta: CTA_SECONDARY,
    features: [
      { text: "Every free contest, every matchweek", included: true },
      { text: "One fantasy team per contest", included: true },
      { text: "Basic player statistics", included: true },
      { text: "10 coins per day", included: true },
      { text: "Auto-pick lineup", included: false },
      { text: "Transfer Boost", included: false },
      { text: "Ad-free experience", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium Entry",
    tagline: "This week's biggest prize pool",
    price: "$2.49",
    priceNote: "per entry · or 250 coins",
    prizePool: "$2,500",
    prizePoolNote: "shared across the top 50",
    slots: "787 slots left",
    highlight: true,
    cta: CTA_PRIMARY,
    features: [
      { text: "Everything in Free Entry", included: true },
      { text: "Up to 5 teams per contest", included: true },
      { text: "Auto-pick & Transfer Boost", included: true },
      { text: "Full stats + opponent analysis", included: true },
      { text: "AI predictions with confidence ratings", included: true },
      { text: "100 coins/day + 500 on upgrade", included: true },
      { text: "Ad-free & priority support", included: true },
    ],
  },
] as const;

export const LEADERBOARD = [
  { rank: 1, name: "Rizky Ananda", handle: "@rizkyfpl", points: 1284, prize: "$900" },
  { rank: 2, name: "Sarah Kim", handle: "@sarahkim", points: 1251, prize: "$480" },
  { rank: 3, name: "Ahmed Patel", handle: "@apatel11", points: 1230, prize: "$300" },
  { rank: 4, name: "Marcus Rodriguez", handle: "@marcusrod", points: 1198, prize: "$150" },
  { rank: 5, name: "Laura Chen", handle: "@laurac", points: 1176, prize: "$90" },
];

/** The visitor's own standing — comes from the session in production. */
export const CURRENT_USER = {
  rank: 1_842,
  points: 340,
  nextRank: 1_500,
  nextRankPoints: 415,
};

export const REWARDS = [
  {
    amount: "$2,500",
    title: "Cash, paid out in 72 hours",
    description:
      "Split across the top 50 finishers every matchweek. Straight to your bank or e-wallet once final scores are verified — no withdrawal fee.",
  },
  {
    amount: "120+ items",
    title: "Official jerseys & merch",
    description:
      "Authentic club shirts, match balls, and limited-edition Fantasy Eleven drops for weekly winners.",
  },
  {
    amount: "2,500 coins",
    title: "Coins & Transfer Boosts",
    description:
      "Coins pay for your next premium entry. Win once and the following matchweeks cost you nothing.",
  },
  {
    amount: "$15,000+",
    title: "A seat at the season final",
    description:
      "Finish the season in the top 100 and you're automatically seeded into the Grand Final and its annual prize pool.",
  },
];

export const FAIRNESS_POINTS = [
  {
    title: "Scored on real performance",
    description:
      "Points come from official match data — goals, assists, clean sheets, tackles. Not a random number, not a bookmaker's odds.",
  },
  {
    title: "One board, same rules",
    description:
      "Nobody can buy points. A premium entry buys you more teams and better analysis tools; it never touches your score.",
  },
  {
    title: "Every point auditable",
    description:
      "Trace any score down to the player and the fixture. Full history opens to all entrants after the final whistle.",
  },
  {
    title: "18+ and built for pacing",
    description:
      "Daily entry limits and automatic reminders are on by default. Lock your account any time from settings.",
  },
];

export const FAQS = [
  {
    q: "How is this different from a betting app?",
    a: "You're not guessing outcomes against a bookmaker. You draft real players and compete against other entrants — your score comes from how those players actually perform. The best football read wins, not the luckiest guess.",
  },
  {
    q: "I just signed up. Can I still make this matchweek?",
    a: "Yes, as long as the countdown above hasn't hit zero. Entries close at the first kickoff whistle, and building a team takes about three minutes.",
  },
  {
    q: "Do I have to pay to win anything?",
    a: "No. The free contest carries its own $150 prize pool. A premium entry unlocks a far bigger pool and lets you run up to five teams, but free contests still pay real money.",
  },
  {
    q: "How do payouts work?",
    a: "Straight to your registered bank account or e-wallet within 72 hours of the contest closing and final scores being verified. There's no withdrawal fee.",
  },
  {
    q: "Can I back out after paying for an entry?",
    a: "Any time before the contest locks. You get a full refund as coins or back to your original payment method — your choice.",
  },
];
