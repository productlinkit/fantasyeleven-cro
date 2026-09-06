# Fantasy Eleven — CRO Landing Page (Convert)

Post-signup / warm-traffic page. Goal: get a new user to complete their first entry,
and introduce the paid contest tier.

Stack: Vite 5 · React 18 · TypeScript · Tailwind 3 · a small subset of shadcn/ui.

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # type-check + production build to dist/
npm run preview
```

## Where to change things

**`src/config/matchday.ts` is the only file you need for a copy or pricing experiment.**
Headlines, CTA labels, prize pools, contest features, leaderboard rows, rewards, fairness
points and FAQs all live there. A variant should be a diff on that file alone.

Kickoff time comes from `getNextKickoff()` in the same file. It currently resolves to the
upcoming Saturday 19:45 in the visitor's local time so the countdown is always live in demo.
Swap it for the real fixture time before launch:

```ts
export const getNextKickoff = () => new Date("2026-09-12T19:45:00+07:00");
```

Every timer on the page is fed the same `Date` from `App.tsx`, so they never drift apart.

## Page structure

| # | Section | File |
|---|---------|------|
| — | Sticky header, mini countdown appears on scroll | `components/Header.tsx` |
| 1 | Hero — urgency headline, live countdown, prize pool, leaderboard, scarcity | `components/HeroSection.tsx` |
| 2 | Contest tiers, Free vs Premium | `components/ContestTiersSection.tsx` |
| 3 | Leaderboard + "points to next rank" progress | `components/LeaderboardSection.tsx` |
| 4 | Rewards showcase | `components/RewardsSection.tsx` |
| 5 | Fairness / skill-based trust + objection FAQs | `components/FairnessSection.tsx` |
| 6 | Final CTA banner with the countdown repeated | `components/FinalCTASection.tsx` |
| — | Sticky mobile CTA bar, appears past the hero | `components/StickyMobileCTA.tsx` |

## Design system

Tokens live in `src/index.css` and are registered in `tailwind.config.ts` — inherited from
the main Fantasy Eleven landing page, with the drift cleaned up:

- `--primary` brand purple, plus `--primary-light` / `--primary-dark`
- `--accent` gold — the primary CTA colour on this page
- `--lime` — was hardcoded `#d4ff00` on the main LP, now a token
- `--destructive` — urgency only (countdown pulse, scarcity bar)
- Gradients and shadows (`bg-gradient-hero`, `shadow-gold`, …) are real Tailwind utilities
  here rather than unused CSS variables

Never hardcode a hex in a component — add a token instead.

## Notes

- `hero-matchday.jpg` sits in `public/` (not `src/assets/`) so `index.html` can `preload` it.
  It is the LCP element; keep it there.
- Source images were recompressed from the main LP (hero 1.6 MB → 275 KB, CTA 1.7 MB → 307 KB).
- The page is `noindex` — it is a post-signup destination, not an acquisition page.
- Reduced-motion is respected: the count-up, countdown pulse and progress fills all fall back
  to their end state.
