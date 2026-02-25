import type { Metadata } from "next";

export const siteName = "AMO Love Potion";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://amolovepotion.com";

export const seoRoutes = [
  "/",
  "/story",
  "/the-shop",
  "/the-amo-love-potion",
  "/mini-amo-love-potion",
  "/amo-love-potion-375ml",
  "/amo-love-potion-750ml",
  "/missing-moments-and-friends",
  "/creating-something-new",
] as const;

export function toAbsoluteUrl(path: string) {
  const cleanPath = path === "/" ? "" : path;
  return `${siteUrl}${cleanPath}`;
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = toAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
