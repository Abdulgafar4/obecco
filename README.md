# Obecco

Next.js company site implemented from Claude Design [Obecco Site v2](https://claude.ai/design/p/e199712c-970e-4d91-a31b-1147f3c4f49c?file=Home.dc.html) (Industry design system, Barlow typography).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/services` | Services |
| `/products` | Products |
| `/about` | About |
| `/contact` | Contact |

Legacy product URLs redirect to `/products` anchors: `/toolferry`, `/lien`, `/clevermart`, `/cleverjobs`. `/work` redirects to `/services`.

## Structure

- `app/` — App Router pages, layout, and Industry design-system CSS
- `components/pages/` — page content converted from Claude Design `.dc.html` files
- `components/motion/` — scroll choreography wired to `lib/obecco-motion.js`
- `components/SiteNav.tsx` — fixed header from `SiteNav.dc.html`
- `components/ContactEnquiry.tsx` — contact form with sent/reset state
- `lib/` — motion helpers and style utilities
- `design-import/v2/` — source Claude Design files (reference)

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm start` — serve production build
