# Next.js SaaS Starter

A production-oriented foundation for SaaS products, internal business systems and authenticated web applications.

## Stack

- Next.js App Router, React and strict TypeScript
- Tailwind CSS for utility styling
- Supabase Auth with `@supabase/ssr` and PostgreSQL
- Zod validation, Vitest unit tests
- ESLint, Prettier and GitHub Actions
- Vercel deployment

## Requirements

- Node.js 22 or newer
- npm 10 or newer
- A Supabase project for hosted authentication, or Docker for local Supabase development
- A Vercel account for deployment

## Create an application from this template

In repository Settings → General, enable **Template repository** if it is not already enabled. Then use **Use this template** to create a new repository and clone it. Replace the starter name, metadata and visual identity with your product's own values.

## Install and configure

```bash
cp .env.example .env.local
npm ci
```

Set the following values in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_APP_URL`

All `NEXT_PUBLIC_` values are public client configuration. Never put service-role keys or other secrets in them.

## Supabase database

For local development, install Docker and run:

```bash
npx supabase start
npx supabase db reset
npx supabase gen types typescript --local > src/types/database.ts
```

The starter includes a `profiles` table linked to `auth.users`, owner-scoped RLS policies and an Auth user trigger. Migrations in `supabase/migrations` are the schema source of truth.

For a hosted project, apply reviewed migrations with the Supabase CLI and configure the Auth site URL and redirect URL to include `/auth/callback`.

## Run and validate

```bash
npm run dev
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

## Deploy to Vercel

Import the repository into Vercel and configure the three environment variables for Preview and Production. Add each deployed origin and `/auth/callback` to the Supabase Auth redirect allow list. Use separate Supabase projects for development and production.

## Included and intentionally excluded

Included: email/password auth, server-side session validation, protected dashboard route, safe auth callback redirects, typed profile schema, RLS and CI validation.

Not included: tenant billing, role/permission administration, business-specific domain tables, fake users, demo API responses or service-role credentials. Add those only when the application requirements are known and implement them fully.

See `docs/` and `TASKS.md` for architecture, database, security and implementation status.
