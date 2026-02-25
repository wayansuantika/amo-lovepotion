import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/seo";
import { products, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata(
  "The Shop",
  "Browse AMO Love Potion bottle sizes and order directly via WhatsApp.",
  "/the-shop",
);

export default function ShopPage() {
  return (
    <SiteShell>
      <Section kicker="The Shop" title="Choose Your Bottle">
        <div className="amo-products">
          {products.map((product) => (
            <article key={product.slug} className="amo-product-card">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={320}
                className="amo-product-image"
              />
              <h3>{product.title}</h3>
              <p className="amo-price">
                <span>{product.oldPrice}</span>
                <strong>{product.newPrice}</strong>
              </p>
              <div className="amo-actions">
                <a
                  className="amo-cta"
                  href={whatsappLink(`Hi AMO, I want to order ${product.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on WhatsApp
                </a>
                <Link className="amo-link" href={`/${product.slug}`}>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
