import type { Metadata } from "next";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Creating Something New",
  "Follow the journey of David & Agnez Mo creating AMO Love Potion.",
  "/creating-something-new",
);

export default function CreatingNewPage() {
  return (
    <SiteShell>
      <Section kicker="1/1/2025 · 1 min read" title="Creating Something New">
        <p>
          David & Agnez Mo embark on a journey to create something new that
          reflects their love for moments, friends, and their choice of drinks.
        </p>
        <p>
          Inspired by their time in America, they wanted to bring back the
          moments, friends, and drinks they missed. This became the story behind
          AMO Love Potion.
        </p>
      </Section>
    </SiteShell>
  );
}
