# Security

Use publishable keys with RLS. Never expose service-role credentials. Use `auth.getUser()` for trusted server identity checks. Proxy redirects are navigation UX, not access control. Re-check permissions in Server Actions, Route Handlers and data-access functions. Validate all untrusted input.
