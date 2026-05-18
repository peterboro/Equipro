# Frigosys — Industrial Cold Room & Equipment Clone

A production-ready, pixel-close clone of [frigosys.com](https://www.frigosys.com/) built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
frigosys/
├── app/
│   ├── globals.css          # Global styles + Google Fonts import
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── Navbar.tsx           # Sticky navbar with dropdown menus + mobile
│   ├── Hero.tsx             # Full-width hero with stats bar
│   ├── Products.tsx         # 3-card product grid
│   ├── About.tsx            # 2-column about section
│   ├── Services.tsx         # 6-card services grid (dark bg)
│   ├── WhyUs.tsx            # 4 feature highlights
│   ├── Blog.tsx             # 3-card blog/news section
│   ├── CTA.tsx              # Contact call-to-action banner
│   └── Footer.tsx           # 4-column footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── next.config.mjs
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.3 | App Router, SSR, routing |
| React | 18 | UI framework |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Scroll animations, hover effects |
| Lucide React | 0.383 | Icons |
| TypeScript | 5 | Type safety |

---

## 🎨 Design System

### Colors
- **Primary Dark**: `#0f2242` — top bar, footer
- **Primary**: `#1a3a6c` — headings, navbar logo, buttons
- **Accent**: `#1e88e5` — CTAs, highlights, links
- **Accent Light**: `#42a5f5` — dark-bg accent text
- **Background Alt**: `#f7f9fc` — section alternation

### Typography
- **Display font**: Barlow Condensed (headings, stats, section titles)
- **Body font**: Poppins (navigation, body text, descriptions)

### Animations (Framer Motion)
- Fade + slide-up on scroll (`whileInView`)
- Staggered card reveals (`staggerChildren`)
- Card hover lift (`whileHover: y: -6`)
- Navbar slide-in on load
- Hero content cascade with delays
- Icon scale on card hover

---

## 📐 Sections Implemented

1. **Top Info Bar** — phone numbers, email, social links
2. **Navbar** — sticky, dropdown menus, mobile hamburger, CTA button
3. **Hero** — full viewport, industrial image, stats counter row, dual CTAs
4. **Products** — 3 product cards with image, description, review button
5. **About** — 2-column layout, floating stat card, highlights checklist
6. **Services** — 6 service cards on dark blue background with icon gradients
7. **Why Us** — 4 feature highlight cards
8. **Blog / News** — 3 blog post cards with category tags and dates
9. **CTA Banner** — contact section with phone and email buttons
10. **Footer** — 4-column: brand, quick links, products, contact

---

## 📦 Required Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18",
  "framer-motion": "^11.2.10",
  "lucide-react": "^0.383.0",
  "clsx": "^2.1.1",
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.0.1",
  "postcss": "^8",
  "typescript": "^5"
}
```

---

## 🔧 Customization

### Replace placeholder images
Images are sourced from Unsplash. Replace with real product photos in each component:

- `Hero.tsx` — `src="https://images.unsplash.com/..."` → your industrial facility photo
- `Products.tsx` — product card images
- `About.tsx` — company facility image
- `Blog.tsx` — blog post thumbnails

### Update contact info
In `Navbar.tsx`, `CTA.tsx`, and `Footer.tsx`, update:
- Phone numbers
- Email address
- Physical address
- Social media links

### Add real routing
Replace `href="#"` links with actual Next.js `<Link href="/page">` routes as you build out inner pages.

---

## ✅ Features

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Sticky navbar with scroll detection
- [x] Mobile hamburger menu with animation
- [x] Dropdown navigation menus
- [x] Smooth scroll-triggered animations
- [x] Card hover effects
- [x] Lazy-loaded images
- [x] SEO metadata in layout
- [x] Semantic HTML structure
- [x] Accessible link/button labels
- [x] Dark hero section with gradient overlay
- [x] Industrial/corporate design language
- [x] Google Fonts (Poppins + Barlow Condensed)
