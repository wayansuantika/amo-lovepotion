import type { Metadata } from "next";
import Image from "next/image";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Mini AMO Love Potion",
  "Explore the 350 ml Mini AMO Love Potion with the same sparkling signature.",
  "/mini-amo-love-potion",
);

export default function MiniPotionPage() {
  return (
    <SiteShell>
      <Section kicker="350 ml" title="MINI AMO LOVE POTION">
        <div className="amo-mini-story-split">
          <Image
            src="/images/amo-325ml.avif"
            alt="Mini AMO Love Potion 350ml bottle"
            width={200}
            height={300}
            className="amo-story-image amo-mini-potion-image"
          />
          <div>
            <p>
              Open and fall in love with the same amazing sparkling wine, now
              available with a sipper in a 350 ml size.
            </p>
            <p>
              From start to end, we have put all our passion and expertise into
              selecting only the best Moscato grapes to obtain the freshness and
              delicate aromas of honey melon and passionfruit.
            </p>
            <p>All with the evolving and captivating presence of gold.</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
