import Image from "next/image";

const contactGroups = [
  {
    title: "WhatsApp",
    lines: [
      {
        label: "07079944180",
        href: "https://wa.me/2347079944180",
      },
    ],
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-white text-cozy-dark">
      <div className="grid min-h-[720px] lg:grid-cols-[minmax(0,0.72fr)_minmax(360px,0.28fr)]">
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-[clamp(4rem,13vw,12.5rem)] font-black uppercase leading-[0.78] tracking-normal text-cozy-dark">
              Contact
            </h2>

            <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(190px,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
              <p className="max-w-[24ch] text-lg font-medium leading-7 text-cozy-dark sm:text-xl">
                For any enquiries, custom orders, or just to say hello, get in
                touch with Dee&apos;s Cozy Hooks.
              </p>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {contactGroups.map((group) => (
                  <div key={group.title} className="min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cozy-primary/75">
                      {group.title}
                    </h3>
                    <div className="mt-3 space-y-1">
                      {group.lines.map((line) => (
                        <a
                          key={line.label}
                          href={line.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex break-words text-sm font-medium leading-6 text-cozy-dark underline decoration-cozy-primary/35 underline-offset-4 transition-colors hover:text-cozy-primary"
                        >
                          {line.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] bg-cozy-lavender lg:min-h-full">
          <Image
            src="/images/categories/CAT-3.png"
            alt="Cozy crochet decor piece"
            fill
            sizes="(min-width: 1024px) 28vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cozy-dark/20 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
