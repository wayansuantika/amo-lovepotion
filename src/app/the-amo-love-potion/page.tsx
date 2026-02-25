import type { Metadata } from "next";
import Image from "next/image";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "The AMO Love Potion",
  "Learn about the AMO Love Potion sparkling wine profile and craft.",
  "/the-amo-love-potion",
);

export default function ThePotionPage() {
  const potion750Copy = [
    "A MO is the true potion of love captured in a bottle.",
    "Open and fall in love with this amazing Sparkling wine.",
    "From start to end, we have put all our passion and expertise into selecting only the best Moscato grapes to obtain the freshness and delicate aromas of honey melon and passionfruit.",
    "All with the evolving and captivating presence of gold.",
  ];

  const potion350Copy = [
    "Open and fall in love with the same amazing Sparkling wine as now it comes with a sipper and 375 ml size.",
    "From start to end, we have put all our passion and expertise into selecting only the best Moscato grapes to obtain the freshness and delicate aromas of honey melon and passionfruit.",
    "All with the evolving and captivating presence of gold..",
  ];

  return (
    <SiteShell>
      <Section kicker="THE POTION" title="AMO LOVE POTION">
        <div className="amo-potion-layout">
          <div className="amo-story-split">
            <Image
              src="/images/amo-750ml.avif"
              alt="AMO Love Potion 750ml bottle"
              width={900}
              height={1200}
              className="amo-story-image amo-potion-image"
              priority
            />
            <div className="amo-story-copy">
              <p className="amo-chapter-label">01</p>
              <h3 className="amo-chapter-title">AMO LOVE POTION</h3>
              {potion750Copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="amo-story-split amo-story-split-secondary">
            <Image
              src="/images/amo-325ml.avif"
              alt="AMO Love Potion 350ml bottle"
              width={900}
              height={1200}
              className="amo-story-image amo-potion-image"
            />
            <div className="amo-story-copy">
              <p className="amo-chapter-label">02</p>
              <h3 className="amo-chapter-title">MINI AMO LOVE POTION</h3>
              {potion350Copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
