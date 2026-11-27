# Next.js SaaS Starter

Production-oriented starter for full-stack SaaS and business applications.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS, Supabase Auth/PostgreSQL, Zod, Vitest, Playwright, npm and Vercel.

## Setup

1. Copy `.env.example` to `.env.local` and configure a Supabase project.
2. Run `npm install`.
3. Run `npm run dev`.

See `docs/` and `TASKS.md` for implementation notes. Run `npx supabase start` and `npx supabase db reset` to start the local database and apply migrations. No fake users, mocked authentication or hard-coded credentials are shipped.
