# Supabase database workflow

The SQL migration directory is the source of truth for the database schema. Do not make production schema changes only through the Supabase Dashboard.

## Local development

1. Install Docker Desktop or Docker Engine.
2. Start the local Supabase stack: `npx supabase start`.
3. Apply migrations and reset local data: `npx supabase db reset`.
4. Regenerate application types after schema changes: `npx supabase gen types typescript --local > src/types/database.ts`.

The starter includes a minimal `public.profiles` table linked to `auth.users`. Row-level security restricts profile access to the authenticated owner. New Auth users receive a profile row through a database trigger.

## Production deployment

Use separate Supabase projects for development, staging and production. Review migrations before deployment and apply them through the Supabase CLI from a controlled release workflow. Never run destructive production resets. Keep service-role credentials in server-side secrets only; this starter does not require a service-role key for ordinary user-scoped operations.
