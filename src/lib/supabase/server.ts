import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { env } from "@/lib/env";
export async function createClient() {
 const store = await cookies();
 return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => store.getAll(), setAll: (items) => { try { items.forEach(({name,value,options}) => store.set(name,value,options)); } catch { /* Server Components cannot write cookies; Proxy refreshes them. */ } } } });
}
