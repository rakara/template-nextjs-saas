# Architecture

Server Components and Server Actions use the server Supabase client; browser interactions use the browser client. Proxy refreshes cookies and provides early navigation redirects only. It is not an authorization boundary. Validate identity and permissions at every protected data operation and enforce data isolation with PostgreSQL RLS. Do not add tenant or RBAC models until implemented end-to-end.
