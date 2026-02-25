import type { Metadata } from "next";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { products, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata(
  "AMO Love Potion - 750ml",
  "Order AMO Love Potion 750ml directly via WhatsApp.",
  "/amo-love-potion-750ml",
);

export default function Product750Page() {
  const product = products.find((item) => item.slug === "amo-love-potion-750ml");

  if (!product) {
    return null;
  }

  return (
    <SiteShell>
      <Section title={product.title} kicker="750 ml">
        <div className="amo-product-detail">
          <img src={product.image} alt={product.title} />
          <div>
            <p className="amo-kicker">{product.subtitle}</p>
            <p className="amo-price">
              <span>{product.oldPrice}</span>
              <strong>{product.newPrice}</strong>
            </p>
            <a
              className="amo-cta"
              href={whatsappLink(`Hi AMO, I want to order ${product.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on WhatsApp
            </a>
            <p className="amo-trust">Official AMO channel • Fast response</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
