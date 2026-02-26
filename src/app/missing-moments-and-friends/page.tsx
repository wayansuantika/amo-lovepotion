import type { Metadata } from "next";
import Image from "next/image";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Missing Moments and Friends",
  "Read the story of nostalgia and inspiration behind AMO Love Potion.",
  "/missing-moments-and-friends",
);

export default function MissingMomentsPage() {
  return (
    <SiteShell>
      <Section kicker="1/1/2025 · 1 min read" title="Missing Moments and Friends">
        <p>
          David & Agnez Mo reflect on their time in America and the moments and
          friends they miss. Join them as they create something new to be proud
          of.
        </p>
        <p>
          In a nostalgic conversation, they realize that they miss the moments
          and friends from their time in America. Inspired by their choice of
          drinks, they set out to create AMO Love Potion.
        </p>
        <hr className="amo-divider" />
        <div className="amo-carousel">
          <div className="amo-carousel-item">
            <Image
              src="/images/amo-bottle.jpg"
              alt="AMO bottle classic"
              width={160}
              height={240}
              className="amo-carousel-image"
            />
          </div>
          <div className="amo-carousel-item">
            <Image
              src="/images/agenesmo-amo-bottle.avif"
              alt="AMO bottle"
              width={160}
              height={240}
              className="amo-carousel-image"
            />
          </div>
          <div className="amo-carousel-item">
            <Image
              src="/images/agenesmo-amolovepotion.avif"
              alt="AMO Love Potion"
              width={160}
              height={240}
              className="amo-carousel-image"
            />
          </div>
          <div className="amo-carousel-item">
            <Image
              src="/images/amo-ice-backet.avif"
              alt="AMO ice bucket"
              width={160}
              height={240}
              className="amo-carousel-image"
            />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
