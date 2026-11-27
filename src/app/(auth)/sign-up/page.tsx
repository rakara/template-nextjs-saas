import { signUp } from "@/app/actions/auth";
import Link from "next/link";

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params.error
    ? "Registration could not be completed. Check your details and try again."
    : null;
  const confirmationMessage =
    params.message === "check-email"
      ? "Check your inbox to confirm your email address."
      : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="text-3xl font-bold">Create account</h1>
      <form action={signUp} className="mt-8 grid gap-4">
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-lg border p-3"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            minLength={8}
            autoComplete="new-password"
            required
            className="rounded-lg border p-3"
          />
        </label>
        {errorMessage ? (
          <p role="alert" className="text-sm text-red-700">
            {errorMessage}
          </p>
        ) : null}
        {confirmationMessage ? (
          <p role="status" className="text-sm text-green-700">
            {confirmationMessage}
          </p>
        ) : null}
        <button className="rounded-lg bg-blue-700 p-3 text-white">
          Create account
        </button>
      </form>
      <p className="mt-6 text-sm">
        Already registered?{" "}
        <Link className="text-blue-700 underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </main>
  );
}
