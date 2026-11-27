# Tasks

## Implemented
- [x] Next.js App Router, React, strict TypeScript and Tailwind foundation.
- [x] ESLint flat configuration and Vitest unit-test setup.
- [x] Supabase browser/server clients with deferred environment validation.
- [x] Next.js 16 Proxy session refresh and protected dashboard.
- [x] Email/password registration, sign-in, sign-out and email confirmation callback.
- [x] Safe post-auth redirect validation with unit tests.
- [x] Supabase CLI config, profiles migration, owner-scoped RLS policies and typed database schema.
- [x] CI checks for lint, TypeScript, unit tests, high/critical dependency vulnerabilities and production build.
- [x] CI job for local Supabase migration reset and database lint.
- [x] Architecture, database, development, deployment, environment and security documentation.

## Pending
- [x] Commit and use the generated npm package-lock.json in CI.
- [ ] Add Playwright browser tests against a configured Supabase test project.
- [ ] Verify Vercel Preview and Production deployments.
- [ ] Add tenant and role modules only when a real application requires them; no fake multi-tenancy is included.

## Validation
- GitHub Actions has passed the application lint, typecheck, unit-test, dependency-audit and production-build job on the current starter implementation.
- GitHub Actions has also passed the local Supabase migration reset and database lint job.
- Authentication requires the adopter's own Supabase URL, publishable key and Auth redirect configuration.
