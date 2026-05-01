"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-cozy-soft px-6 py-16 text-cozy-dark">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-cozy-lavender bg-white p-8 text-center shadow-[0_28px_80px_rgba(91,47,181,0.14)] sm:p-12">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-cozy-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 right-8 h-56 w-56 rounded-full bg-cozy-primary/15 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cozy-primary text-white">
          <AlertTriangle className="h-8 w-8" strokeWidth={1.8} />
        </div>

        <p className="relative z-10 mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-cozy-primary">
          Something went wrong
        </p>
        <h1 className="relative z-10 mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          This stitch slipped.
        </h1>
        <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-cozy-dark/70 sm:text-lg">
          The page could not finish loading. You can try again or head back home
          to keep browsing Dee&apos;s Cozy Hooks.
        </p>

        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full bg-cozy-primary px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-cozy-secondary"
          >
            <RefreshCw className="h-4 w-4" strokeWidth={2} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border border-cozy-primary/30 bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-cozy-primary transition-colors hover:border-cozy-secondary hover:text-cozy-secondary"
          >
            <Home className="h-4 w-4" strokeWidth={2} />
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
