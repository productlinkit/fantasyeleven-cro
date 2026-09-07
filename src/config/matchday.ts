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

/**
 * Premium's grand prize is a physical item, not a cash pool.
 * Swap `image` for a new photo and the hero, rewards and leaderboard all follow.
 */
export const GRAND_PRIZE = {
  name: "Signed Filippo Inzaghi photo",
  subtitle: "Athens 2007 · framed",
  detail:
    "The Champions League final trophy lift, hand-signed by Inzaghi in black ink, framed and authenticated by Icons.com.",
  image: "/prize-inzaghi.jpg",
  alt: "Framed photograph of Filippo Inzaghi kissing the 2007 Champions League trophy, hand-signed in black ink",
};

/** Free contest pays cash straight to the winner's e-wallet. */
export const FREE_PRIZE_USD = 150;

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
    prizeKind: "cash",
    prizeLabel: "Prize",
    prizeHeadline: "$150",
    prizeNote: "straight to your e-wallet · split across the top 10",
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
    tagline: "One winner takes the signed photo",
    price: "$2.49",
    priceNote: "per entry · or 250 coins",
    prizeKind: "item",
    prizeLabel: "Grand prize",
    prizeHeadline: "Signed Filippo Inzaghi photo",
    prizeNote: "framed & authenticated · shipped to the winner",
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

/** Only the top of the premium board wins the signed photo — `prize` marks that row. */
export const LEADERBOARD = [
  { rank: 1, name: "Rizky Ananda", handle: "@rizkyfpl", points: 1284, prize: "Signed photo" },
  { rank: 2, name: "Sarah Kim", handle: "@sarahkim", points: 1251, prize: null },
  { rank: 3, name: "Ahmed Patel", handle: "@apatel11", points: 1230, prize: null },
  { rank: 4, name: "Marcus Rodriguez", handle: "@marcusrod", points: 1198, prize: null },
  { rank: 5, name: "Laura Chen", handle: "@laurac", points: 1176, prize: null },
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
    amount: "1 of 1",
    title: "Signed & framed Inzaghi photo",
    description:
      "The premium grand prize. Hand-signed, framed, authenticated by Icons.com, and shipped to the winner — there is exactly one.",
  },
  {
    amount: "$150",
    title: "Cash to your e-wallet",
    description:
      "The free contest still pays real money. Split across the top 10 and sent to your e-wallet within 72 hours of full time — no withdrawal fee.",
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
    a: "No. The free contest pays $150 to the top 10, straight to your e-wallet. A premium entry is what puts you in the running for the signed Inzaghi photo and lets you run up to five teams — but free contests still pay real money.",
  },
  {
    q: "How do payouts work?",
    a: "Cash prizes go to your registered e-wallet within 72 hours of the contest closing and final scores being verified — no withdrawal fee. The signed photo is shipped insured to the address on your account, and we cover delivery.",
  },
  {
    q: "Can I back out after paying for an entry?",
    a: "Any time before the contest locks. You get a full refund as coins or back to your original payment method — your choice.",
  },
];
