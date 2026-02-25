export const whatsappNumber = "6281338854426";

export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    slug: "amo-love-potion-375ml",
    title: "AMO LOVE POTION - 375ml",
    oldPrice: "Rp329000.00",
    newPrice: "Rp249000.00",
    subtitle: "Love Potion in Bottle",
    image: "/images/Amo%20Small%20Bottle.png",
  },
  {
    slug: "amo-love-potion-750ml",
    title: "AMO LOVE POTION - 750ml",
    oldPrice: "Rp714000.00",
    newPrice: "Rp499000.00",
    subtitle: "Love Potion in Bottle",
    image: "/images/Amo%20Bottle.png",
  },
] as const;

export const storyIntro =
  "David & Agnez Mo met for a drink in Jakarta, and while talking, they agreed that something was missing.";

export const storyBody = [
  "They looked back on their time in America and missed those moments, those friends, and most importantly, their choice of drinks.",
  "So David & Agnez Mo joined forces to create something new they could be proud of.",
];

export const potionBody = [
  "AMO is the true potion of love captured in a bottle.",
  "Open and fall in love with this amazing sparkling wine.",
  "From start to end, we have put all our passion and expertise into selecting only the best Moscato grapes to obtain the freshness and delicate aromas of honey melon and passionfruit.",
  "All with the evolving and captivating presence of gold.",
];
