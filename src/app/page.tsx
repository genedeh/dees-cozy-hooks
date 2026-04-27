import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />

      <section
        id="contact"
        className="border-t border-cozy-lavender bg-cozy-soft px-6 py-12 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cozy-primary">
            Contact
          </p>
          <p className="max-w-2xl text-base leading-7 text-cozy-dark/75">
            Reach out to start a custom order or ask about available pieces for
            your next cozy corner.
          </p>
        </div>
      </section>
    </main>
  );
}
