# NexGen Landing Page (Next.js)

Landing page NexGen: Next.js 15 (App Router) + TypeScript + Tailwind CSS + Sanity (headless CMS).

## Commands

- `npm run dev` - dev server di http://localhost:3000
- `npm test` - Jest (smoke test Navbar)
- `npm run build` - production build
- `npm start` - preview production build
- `npm run lint` - ESLint

## Struktur

- `app/layout.tsx` - metadata + font Inter
- `app/page.tsx` - server component, fetch activities (ISR, revalidate 3600s)
- `components/` - Navbar, Hero, About, Sponsor, ActivityList, Office, Footer
- `lib/sanity.ts` - client Sanity + query activities
- `sanity/` - studio schema (`activity`) + `seed.mjs`

## Sanity

- Project ID: `f230hrw7`, dataset: `production` (`.env.local`)
- Schema `activity`: title, description, tag, date, layout (`duo`/`single`), images (max 2), published
- Studio: `npx sanity dev sanity/` (perlu login)
- Seed data awal: `SANITY_TOKEN=<token> node sanity/seed.mjs` (token: sanity.io/manage -> API)

## Deploy

Vercel (auto-deploy dari GitHub). Env Vercel wajib:
- `NEXT_PUBLIC_SANITY_PROJECT_ID=f230hrw7`
- `NEXT_PUBLIC_SANITY_DATASET=production`

CORS di Sanity (sanity.io/manage -> API -> CORS): tambahkan domain Vercel & `http://localhost:3000`.

## Gotchas

- Konten aktivitas dikelola admin lewat Sanity studio - situs tidak perlu deploy ulang (ISR 1 jam).
- Foto aktivitas hidup di Sanity CDN; foto logo/sponsor tetap di `public/images/`.