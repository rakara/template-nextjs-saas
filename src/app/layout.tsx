import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "SaaS Starter", template: "%s | SaaS Starter" },
  description: "A Next.js and Supabase application starter.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
