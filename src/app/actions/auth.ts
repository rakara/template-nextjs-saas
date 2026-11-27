"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { getEnv } from "@/lib/env";
const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
export async function signIn(formData: FormData) { const parsed = schema.safeParse({email:formData.get("email"),password:formData.get("password")}); if (!parsed.success) redirect("/sign-in?error=invalid-input"); const supabase = await createClient(); const {error} = await supabase.auth.signInWithPassword(parsed.data); if (error) redirect("/sign-in?error=authentication-failed"); redirect("/dashboard"); }
export async function signUp(formData: FormData) { const parsed = schema.safeParse({email:formData.get("email"),password:formData.get("password")}); if (!parsed.success) redirect("/sign-up?error=invalid-input"); const supabase = await createClient(); const {data,error} = await supabase.auth.signUp({ ...parsed.data, options: { emailRedirectTo: new URL("/auth/callback", getEnv().NEXT_PUBLIC_APP_URL).toString() } }); if (error) redirect("/sign-up?error=registration-failed"); if (data.session) redirect("/dashboard"); redirect("/sign-in?message=check-email"); }
export async function signOut() { const supabase = await createClient(); await supabase.auth.signOut(); redirect("/"); }
