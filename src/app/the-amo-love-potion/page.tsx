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
              src="/images/Amo%20Bottle.png"
              alt="AMO Love Potion 750ml bottle"
              width={900}
              height={1200}
              className="amo-story-image amo-potion-image"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <div className="amo-story-copy">
              <p className="amo-chapter-label">01</p>
              <h3 className="amo-chapter-title">AMO LOVE POTION</h3>
              {potion750Copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="amo-product-details">
                <h4 className="amo-details-title">Details</h4>
                <div className="amo-details-icons">
                  <div className="amo-detail-item">
                    <Image src="/box.svg" alt="750ml" width={20} height={20} className="amo-detail-icon" />
                    <span>750ml</span>
                  </div>
                  <div className="amo-detail-item">
                    <Image src="/grape.svg" alt="Moscato" width={20} height={20} className="amo-detail-icon" />
                    <span>Moscato</span>
                  </div>
                  <div className="amo-detail-item">
                    <Image src="/fruit.svg" alt="Fruit notes" width={20} height={20} className="amo-detail-icon" />
                    <span>Fruity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="amo-story-split amo-story-split-secondary">
            <Image
              src="/images/Amo%20Small%20Bottle.png"
              alt="AMO Love Potion 350ml bottle"
              width={900}
              height={1200}
              className="amo-story-image amo-potion-image"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="amo-story-copy">
              <p className="amo-chapter-label">02</p>
              <h3 className="amo-chapter-title">MINI AMO LOVE POTION</h3>
              {potion350Copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="amo-product-details">
                <h4 className="amo-details-title">Details</h4>
                <div className="amo-details-icons">
                  <div className="amo-detail-item">
                    <Image src="/box.svg" alt="375ml" width={20} height={20} className="amo-detail-icon" />
                    <span>375ml</span>
                  </div>
                  <div className="amo-detail-item">
                    <Image src="/grape.svg" alt="Moscato" width={20} height={20} className="amo-detail-icon" />
                    <span>Moscato</span>
                  </div>
                  <div className="amo-detail-item">
                    <Image src="/fruit.svg" alt="Fruit notes" width={20} height={20} className="amo-detail-icon" />
                    <span>Fruity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
