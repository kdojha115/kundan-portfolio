# Kundan Kumar Ojha — Portfolio

A premium, dark-themed portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Content is sourced entirely from the resume — nothing fabricated.

## Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS** — custom design tokens (see `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, hero animations, animated counters
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             Home (hero, metrics, previews, CTA)
  about/page.tsx        Engineering journey, philosophy, process
  experience/page.tsx    Full experience timeline
  projects/             Filterable/searchable project grid
  skills/page.tsx        Grouped skill cards
  achievements/page.tsx  Competitive programming + recognition
  resume/page.tsx        Embedded PDF viewer + download
  contact/page.tsx       Contact details + mailto-based form
  robots.ts / sitemap.ts SEO
components/            Reusable UI: Navbar, Footer, Hero, cards, timeline, etc.
lib/data.ts             Single source of truth for all resume content
public/resume.pdf       Auto-generated ATS-friendly resume (replace with your own anytime)
```

## Editing content

Everything — job history, project bullets, skills, achievements, contact
details — lives in **`lib/data.ts`**. Update that file and it propagates to
every page automatically. Update `profile.linkedin` and `profile.github` with
your real URLs before deploying (currently placeholders).

## Design tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

- Background `#0B1120`, primary accent `#3B82F6`, secondary accent `#06B6D4`
- Glassmorphism cards (`.glass`, `.glass-border-glow`)
- Signature visual: an animated **API service-mesh diagram** in the hero
  (`components/ServiceMesh.tsx`) — nodes/edges representing the
  microservices and API-gateway pattern from the experience section, with
  light pulses traveling the edges, rather than a generic particle field.
- Metrics are styled as terminal/log lines (monospace `metric.0N` labels) to
  reinforce the backend-engineer identity.

## What's implemented vs. simplified

Implemented: all 8 pages, animated hero with typing effect, scroll reveals,
animated counters, tech marquee, project search/filter, glassmorphism cards,
SEO metadata + JSON-LD + sitemap/robots, accessible focus states, reduced-motion
support, mobile-responsive nav.

Simplified / not included (optional future additions, kept out to avoid
scope creep and unnecessary flash):

- Command palette (⌘K navigation)
- Custom animated cursor
- Light mode (site is intentionally dark-only, per the design brief)
- Resume download analytics (needs a backend/analytics provider)
- Contact form backend (currently opens a pre-filled `mailto:` — wire up
  a route handler + email provider, e.g. Resend, if you want server-side
  delivery)

## Deployment

**Vercel (recommended)**

1. Push this project to a GitHub repo.
2. Import the repo at vercel.com/new.
3. No environment variables required for the current feature set.
4. Update `metadataBase`/`siteUrl` in `app/layout.tsx` and the sitemap once
   you have a real domain.

**Any Node host**

```bash
npm run build
npm start
```

## Before going live

- [ ] Replace `profile.linkedin` / `profile.github` placeholders in `lib/data.ts`
- [ ] Swap `public/resume.pdf` for your latest export if it changes
- [ ] Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- [ ] Add a real Open Graph image (`public/og.png`) and reference it in `metadata.openGraph.images`
