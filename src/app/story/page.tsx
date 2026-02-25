import Image from "next/image";
import type { Metadata } from "next";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { storyBody, storyIntro } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata(
  "The Beginning",
  "Discover the story behind AMO Love Potion and how David & Agnez Mo created it.",
  "/story",
);

export default function StoryPage() {
  const firstParagraph = `${storyIntro} ${storyBody[0]}`;

  return (
    <SiteShell>
      <Section kicker="The Beginning" title="The Love Potion AMO">
        <div className="amo-story-split">
          <Image
            src="/images/amo-foto-website-puzzle-3-love-potion.avif"
            alt="AMO Love Potion visual"
            width={900}
            height={1200}
            className="amo-story-image"
            priority
          />
          <div className="amo-story-copy">
            <p>{firstParagraph}</p>
            <p>{storyBody[1]}</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
