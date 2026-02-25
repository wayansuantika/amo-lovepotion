"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { whatsappNumber } from "@/lib/site-data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const navItems = [
    { href: "/story", label: "Story", match: ["/story"] },
    {
      href: "/the-amo-love-potion",
      label: "Potion",
      match: ["/the-amo-love-potion", "/mini-amo-love-potion"],
    },
    {
      href: "/missing-moments-and-friends",
      label: "Journal",
      match: ["/missing-moments-and-friends", "/creating-something-new"],
    },
    {
      href: "/the-shop",
      label: "Shop",
      match: ["/the-shop", "/amo-love-potion-375ml", "/amo-love-potion-750ml"],
    },
  ];

  const flowRoutes = [
    "/",
    "/story",
    "/the-amo-love-potion",
    "/missing-moments-and-friends",
    "/the-shop",
    "/creating-something-new",
  ];

  const currentIndex = flowRoutes.indexOf(pathname);
  const previousRoute = currentIndex > 0 ? flowRoutes[currentIndex - 1] : null;
  const nextRoute =
    currentIndex >= 0 && currentIndex < flowRoutes.length - 1
      ? flowRoutes[currentIndex + 1]
      : null;

  const isActiveRoute = (routes: string[]) => routes.includes(pathname);

  return (
    <div className="amo-page">
      <header className="amo-header">
        <Link href="/" className="amo-brand">
          A M O
        </Link>
        <nav>
          {navItems.map((item) => {
            const active = isActiveRoute(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`amo-nav-link ${active ? "is-active" : ""}`.trim()}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main>{children}</main>

      <div className="amo-flow">
        {previousRoute ? <Link href={previousRoute}>Previous page</Link> : <span />}
        <Link href="/the-shop">Skip to shop</Link>
        {nextRoute ? <Link href={nextRoute}>Next page</Link> : <span />}
      </div>

      <footer className="amo-footer">
        <a
          href="https://instagram.com/amolovepotion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          +{whatsappNumber}
        </a>
        <a href="http://winetobe.com/" target="_blank" rel="noopener noreferrer">
          Winetobe
        </a>
        <a href="https://godrinks.com/" target="_blank" rel="noopener noreferrer">
          Godrinks
        </a>
      </footer>
    </div>
  );
}

type SectionProps = {
  kicker?: string;
  title: string;
  children?: ReactNode;
  hero?: boolean;
};

export function Section({ kicker, title, children, hero = false }: SectionProps) {
  return (
    <section className={`amo-section ${hero ? "amo-hero" : ""}`.trim()}>
      {kicker ? <p className="amo-kicker">{kicker}</p> : null}
      <h1 className={hero ? "amo-hero-title" : "amo-title"}>{title}</h1>
      {children}
    </section>
  );
}
