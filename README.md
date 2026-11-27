# Next.js SaaS Starter

Production-oriented starter for full-stack SaaS and business applications.

## Stack

- Next.js App Router, React, TypeScript (strict)
- Tailwind CSS utilities + CSS Modules for complex component styles
- Supabase Auth, PostgreSQL and `@supabase/ssr`
- Zod, Vitest and Playwright
- npm, GitHub Actions and Vercel

## Status

Initial repository bootstrap. See `TASKS.md` for implementation status and `docs/` for architecture, development, deployment, environment and security guidance.

## Quick start

The complete setup instructions will be maintained here as implementation lands. Copy `.env.example` to `.env.local`, configure a Supabase project, then install dependencies with `npm ci`.

## Scope

Includes real authentication/session handling, server-side authorization patterns, database migrations and RLS examples. Does not include fake users, mocked authentication, or hard-coded credentials.
