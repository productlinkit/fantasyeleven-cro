import logo from "@/assets/logo.png";

const LINKS = [
  { label: "Contest rules", href: "#" },
  { label: "Scoring & payouts", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Responsible play", href: "#" },
  { label: "Support", href: "#" },
];

export const Footer = () => (
  <footer className="bg-foreground pb-24 pt-14 text-white md:pb-14">
    <div className="section-x">
      <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
        <img
          src={logo}
          alt="Fantasy Eleven"
          width={160}
          height={48}
          className="h-11 w-auto brightness-0 invert"
        />
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Fantasy Eleven. All rights reserved.</p>
        <p className="max-w-xl md:text-right">
          18+ only. Fantasy contests are games of skill. Play within your limits — daily entry caps
          and self-exclusion are available in your account settings.
        </p>
      </div>
    </div>
  </footer>
);
