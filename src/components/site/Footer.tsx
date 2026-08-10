import { navItems, site } from "@/config/site";
import { BookButton } from "./BookButton";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground text-xs font-bold">
                ▶
              </span>
              <span className="font-display text-base font-semibold">{site.brandName}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline} From raw footage to a polished, optimized YouTube presence.
            </p>
            <div className="mt-6">
              <BookButton size="sm" />
            </div>
          </div>

          <nav>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
              <li className="truncate">{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}