# AMO Love Potion

Rebuild of amolovepotion.com with a Claygarden-inspired editorial layout. Built with Next.js App Router and WhatsApp-only CTAs for ordering.

## Features

- Multi-route editorial site (story, shop, potion, journal, product details)
- WhatsApp ordering flow, no cart or checkout
- Responsive layout with consistent spacing across pages
- SEO baseline with per-page metadata, sitemap, and robots
- Local AVIF images optimized via Next Image

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4 + custom CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

- src/app: App Router pages and route files
- src/components: Shared UI components
- src/lib: Data and SEO helpers
- public/images: Local AVIF images

## Notes

- WhatsApp number and product data live in src/lib/site-data.ts
- Global styles live in src/app/globals.css
