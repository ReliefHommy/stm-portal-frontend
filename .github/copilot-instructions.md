# STM Portal Frontend - AI Coding Guidelines

## Overview
This is a Next.js 15 marketplace app for Thai culture (food, games, wellness) with a creator studio for AI-powered content generation. Uses App Router, TypeScript, Tailwind CSS, and Framer Motion.
- **Platform Vision**: "Pinterest for Intent-Driven Shopping" (Passive Discovery → High-Intent Purchase).

## Subdomain Strategy
- **food.somtammarket.com**: Content-first discovery. Consumes `Studio.Pillar=foods`,
`Studio.DesignTemplate`, `Studio.Campaign`, `Studio.CampaignPost`,`Studio.Theme`,`Studio.topic`,
Studio.asset`. No cart. Redirects to store for purchase.
- **wellness.somtammarket.com** : Niche vertical discovery sites. Consumes `Studio.pillar=wellness`.
- **games.somtammarket.com**: Niche vertical discovery sites. Consumes `Studio.Post`(pillar=games).
- **store.somtammarket.com**: E-commerce engine. Consumes `thefood.Product`, `PartnerStore`. Handles cart/checkout.

## Architecture
- **App Router Structure**: Pages in `app/`, API routes in `app/api/`, components in `app/components/`
- **Feature Organization**: Components grouped by domain (e.g., `food/`, `studio/`, `reuse/`)
- **External API Integration**: Proxies to backend via `process.env.NEXT_PUBLIC_API_BASE`
- **Studio Section**: Protected creator tools at `/studio/*` with AI campaign generation
- **Auth**: JWT via httpOnly cookies (`stm_token`). Cross-subdomain enabled via `.somtammarket.com` cookie domain.

## Authentication
- JWT-based auth with cookies (`stm_token`, `stm_refresh`)
- Middleware protects `/studio/*`, redirects to `/` on no token
- Auto-refresh on 401 in `lib/fetcher.ts` using `/api/auth/refresh`
- Login/logout via API routes that set/clear httpOnly cookies

## Data Fetching
- Server-side: Use `apiGet()` from `lib/fetcher.ts` for authenticated calls (handles token + auto-refresh)
- Client-side: Local storage for drafts (e.g., `localCampaigns.ts`)
- Images: Allowed from `pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev` in `next.config.mjs`

## Component Patterns
- **Masonry Grids**: Use CSS columns (e.g., `FoodMasonryGridComponent.tsx`) with `FadeIn` animation
- **Icons**: Lucide React (e.g., `LayoutDashboard` from 'lucide-react')
- **Client Components**: Mark with `'use client'` for interactivity (e.g., navigation, forms)
- **Suspense Boundaries**: Wrap async content in studio layout
- **I18n**: Dictionaries in `lib/dictionaries/` (en, sv, th) for translations

## Development Workflow
- **Dev Server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (Turbopack enabled)
- **Lint**: `npm run lint` (ESLint)
- **Imports**: Use `@/*` paths (configured in `tsconfig.json`)
- **Environment**: `.env.local` for `NEXT_PUBLIC_API_BASE`, `OPENAI_API_KEY`

## Key Files
- `middleware.ts`: Auth protection for studio
- `lib/auth.ts`: Token helpers
- `lib/fetcher.ts`: API client with refresh logic
- `app/studio/layout.tsx`: Studio UI structure
- `app/components/studio/Sidebar.tsx`: Navigation with active state
- `app/api/studio/campaign/route.ts`: OpenAI integration for campaigns

## Conventions
- API routes return `NextResponse` with status codes
- Components use Tailwind classes for styling
- Server-only imports in data fetching files
- Use `lucide-react` for icons.
- Images must use the R2 CDN: `pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev`.
- Campaign data stored locally before saving to backend</content>
<parameter name="filePath">c:\Users\ratan\stm_marketPlace\stm-portal-frontend\.github\copilot-instructions.md