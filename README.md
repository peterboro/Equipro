# Equipro Group Website

Official website for Equipro Investments (K) Ltd, a Kenyan engineering company specializing in HVAC systems, industrial refrigeration, cold rooms, facility maintenance, automation, mechanical services and electrical services.

The site is built with Next.js, Tailwind CSS and Framer Motion. It includes company information, services, products, client portfolio, project gallery, blog/news pages and contact calls to action.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```text
equipro/
├── app/                  # Next.js App Router pages and route layouts
├── components/           # Shared UI sections and page components
├── lib/                  # Shared utilities and data helpers
├── public/               # Static assets, logo, gallery, client logos and product images
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Scripts and dependencies
```

## Main Pages

- Home
- About Us
- Services
- Products and Equipment
- Freon Gases
- Clients
- Gallery
- Blog / News
- Contact

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Brand & Content Notes

- The website uses a black, white, grey and light-blue visual direction.
- The company logo is used in the navbar and favicon metadata.
- Project images live in `public/images/gallery`.
- Client logos live in `public/images/logos`.
- Freon product images live in `public/images/products/freon`.

## Useful Commands

```bash
npm run dev
npm run build
npm run start
```

## SEO Deployment Checklist

- Run `npm run build` before deploying.
- Deploy this Next.js version to production.
- Verify `/sitemap.xml` loads.
- Verify `/robots.txt` loads.
- Verify important service and product pages return 200.
- Submit the sitemap to Google Search Console.
- Connect and verify the Google Business Profile.
- Request client reviews.
- Monitor indexing and search queries in Google Search Console.

## Maintenance

When adding new services, products or clients, follow the existing page and component patterns so navigation, sidebars and cards stay consistent across the site.
