<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` - verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md (NexGen)

## Project
Next.js 15 (App Router) + TypeScript + Tailwind CSS landing page untuk NexGen, dengan konten kegiatan (Our Activity) dari Sanity headless CMS. Deploy di Vercel.

## Commands
- `npm run dev` - dev server di http://localhost:3000
- `npm test` - Jest
- `npm run build` - production build
- `npm start` - preview build
- `npm run lint` - ESLint

## Architecture
- Entry: `app/page.tsx` (server component) -> Navbar, Hero, About, Sponsor, ActivityList, Office, Footer
- `app/layout.tsx`: metadata + Inter via next/font
- Section Our Activity fetch semua kegiatan dari Sanity via `lib/sanity.ts`, ISR `revalidate = 3600`
- Tampilan: `ActivityCarousel` (horizontal, scroll + panah) - semua fetch server-side (browser tak pernah akses Sanity langsung, jadi bebas masalah CORS)
- Layout kartu activity dihitung otomatis dari orientasi foto (1 foto portrait = sejajar, 1 landscape = atas-bawah, 2 foto = top row 50/50); crop admin di studio dihormati via `urlFor`
- Studio Sanity: `sanity/` (schema `activity`), seed: `sanity/seed.mjs`
- Animasi: framer-motion; marquee sponsor: CSS keyframes (`.marquee-track`)

## Config
- `next.config.ts`: remotePatterns `cdn.sanity.io` untuk next/image
- `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID=f230hrw7`, `NEXT_PUBLIC_SANITY_DATASET=production`
- Jest: `jest.config.js` (next/jest), `jest.setup.ts`
- eslint: `eslint.config.mjs` (FlatCompat next/core-web-vitals + typescript)

## Sanity
- Admin tambah/edit kegiatan via studio (`npx sanity dev sanity/`), tidak perlu deploy ulang (ISR 1 jam; kurangi via webhook `revalidateTag` nanti)
- Foto kegiatan di-upload masuk Sanity CDN; logo/sponsor tetap di `public/images/`

## Gotchas
- `package.json` name: `nextgenreact`
- Jangan commit `.env.local`; env di-seed di Vercel dashboard
- Vitest lama sudah diganti Jest; bootstrap/aos/react-fast-marquee sudah dihapus