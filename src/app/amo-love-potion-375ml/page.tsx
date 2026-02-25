import type { Metadata } from "next";
import Image from "next/image";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { products, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata(
  "AMO Love Potion - 375ml",
  "Order AMO Love Potion 375ml directly via WhatsApp.",
  "/amo-love-potion-375ml",
);

export default function Product375Page() {
  const product = products.find((item) => item.slug === "amo-love-potion-375ml");

  if (!product) {
    return null;
  }

  return (
    <SiteShell>
      <Section title={product.title} kicker="375 ml">
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
      </Section>
    </SiteShell>
  );
}
