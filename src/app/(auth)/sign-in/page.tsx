import { signIn } from "@/app/actions/auth";
import Link from "next/link";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params.error
    ? "Sign-in could not be completed. Check your details and try again."
    : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <form action={signIn} className="mt-8 grid gap-4">
        <input type="hidden" name="next" value={params.next ?? "/dashboard"} />
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required className="rounded-lg border p-3" />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required className="rounded-lg border p-3" />
        </label>
        {errorMessage ? <p role="alert" className="text-sm text-red-700">{errorMessage}</p> : null}
        <button className="rounded-lg bg-blue-700 p-3 text-white">Sign in</button>
      </form>
      <p className="mt-6 text-sm">
        No account? <Link className="text-blue-700 underline" href="/sign-up">Create one</Link>
      </p>
    </main>
  );
}
