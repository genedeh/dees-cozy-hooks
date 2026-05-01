import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-cozy-dark">
      <section className="grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cozy-primary">
            404
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl lg:text-8xl">
            Page not found
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-cozy-dark/70 sm:text-lg">
            This cozy corner does not exist yet. Head back home to explore the
            pieces, categories, and contact details.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cozy-primary px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-cozy-secondary"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back Home
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-cozy-soft p-8 shadow-[0_28px_80px_rgba(91,47,181,0.12)]">
          <div className="absolute -left-14 top-8 h-52 w-52 rounded-full bg-cozy-accent/25 blur-3xl" />
          <div className="absolute -bottom-20 right-8 h-64 w-64 rounded-full bg-cozy-primary/15 blur-3xl" />
          <div className="relative z-10 flex h-full min-h-[304px] flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-cozy-primary shadow-[0_18px_44px_rgba(91,47,181,0.14)]">
              <SearchX className="h-12 w-12" strokeWidth={1.7} />
            </div>
            <p className="mt-8 max-w-sm text-lg font-medium leading-8 text-cozy-dark/75">
              The yarn trail ended here, but the homepage is just one click away.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
