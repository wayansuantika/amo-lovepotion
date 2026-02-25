import type { Metadata } from "next";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata(
  "AMO Love Potion",
  "Experience Love in a Bottle with AMO Love Potion by David & Agnez Mo.",
  "/",
);

export default function Home() {
  return (
    <SiteShell>
      <Section kicker="Experience Love in a Bottle" title="AMO LOVE POTION" hero>
        <p className="amo-lead">
          A sparkling Moscato expression by David & Agnez Mo, inspired by
          moments, friends, and unforgettable nights.
        </p>
        <p>
          Through story, flavor, and craft, AMO transforms memory into a modern
          ritual of celebration.
        </p>
        <a
          className="amo-cta"
          href={whatsappLink("Hi AMO, I want to order AMO Love Potion.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order via WhatsApp
        </a>
        <p className="amo-trust">Official AMO channel • Fast WhatsApp response</p>
      </Section>
    </SiteShell>
  );
}
