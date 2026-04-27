"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headingText = "Empower Your Business's Financial Future Effortlessly";
const placeholderImageUrl =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";

const infoCards = [
  {
    title: "My Mission",
    body: "To deliver thoughtful crochet collections and custom pieces that bring softness, warmth, and personality into everyday spaces.",
    tone: "light",
  },
  {
    title: "My Vision",
    body: "To shape a cozy brand world where handmade texture feels elevated, personal, and unforgettable from first glance to final stitch.",
    tone: "dark",
  },
];

const aboutRingPositions = [
  { className: "-left-8 top-20 w-20 -rotate-[8deg] sm:w-24", spreadX: -96, spreadY: -62, delay: 0.76 },
  { className: "right-[10%] top-16 w-16 rotate-[12deg] sm:w-20", spreadX: 92, spreadY: -72, delay: 0.84 },
  { className: "left-[6%] bottom-[18%] w-14 rotate-[14deg] sm:w-16", spreadX: -76, spreadY: 58, delay: 0.92 },
  { className: "right-[8%] bottom-16 w-18 -rotate-[12deg] sm:w-20", spreadX: 88, spreadY: 64, delay: 1 },
];

const aboutCozyPositions = [
  { className: "left-[28%] -top-6 w-16 -rotate-[10deg] sm:w-20", spreadX: -42, spreadY: -90, delay: 0.9 },
  { className: "right-[24%] bottom-[10%] w-20 rotate-[10deg] sm:w-24", spreadX: 72, spreadY: 84, delay: 1.06 },
];

function AboutRingIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 479 479" fill="none" className="h-auto w-full">
        <g
          data-about-icon-stroke
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="13"
        >
          <path d="M408.852,70.148C363.616,24.913,303.473,0,239.5,0S115.384,24.913,70.148,70.148C24.913,115.384,0,175.527,0,239.5 s24.913,124.116,70.148,169.352C115.384,454.087,175.527,479,239.5,479s124.116-24.913,169.352-70.148 C454.087,363.616,479,303.473,479,239.5S454.087,115.384,408.852,70.148z M398.246,398.246C355.843,440.648,299.466,464,239.5,464 s-116.343-23.352-158.746-65.754C38.352,355.843,15,299.466,15,239.5S38.352,123.157,80.754,80.754 C123.157,38.352,179.534,15,239.5,15s116.343,23.352,158.746,65.754C440.648,123.157,464,179.534,464,239.5 S440.648,355.843,398.246,398.246z" />
          <path d="M239.5,32C125.084,32,32,125.084,32,239.5S125.084,447,239.5,447S447,353.916,447,239.5S353.916,32,239.5,32z M239.5,432 C133.355,432,47,345.645,47,239.5S133.355,47,239.5,47S432,133.355,432,239.5S345.645,432,239.5,432z" />
          <path d="M277.724,83.578c7.789,1.903,15.497,4.417,22.907,7.472" />
          <path d="M107.759,331.203c-2.37-3.397-7.045-4.229-10.442-1.86c-3.397,2.37-4.23,7.045-1.86,10.442 c3.215,4.609,6.691,9.115,10.331,13.391" />
          <path d="M239.5,400c-10.283,0-20.57-0.978-30.576-2.907c-26.98-5.203-52.357-17.413-73.387-35.31" />
          <path d="M405.025,181.038c-13.311-37.687-39.449-70.028-73.601-91.066" />
          <path d="M279.175,210.431c4.764,2.898,10.353,4.569,16.325,4.569c17.369,0,31.5-14.131,31.5-31.5S312.869,152,295.5,152 S264,166.131,264,183.5c0,5.972,1.671,11.561,4.569,16.325L239.5,228.894l-29.069-29.069c2.898-4.764,4.569-10.353,4.569-16.325 c0-17.369-14.131-31.5-31.5-31.5S152,166.131,152,183.5s14.131,31.5,31.5,31.5c5.972,0,11.561-1.671,16.325-4.569l29.069,29.069 l-29.069,29.069C195.061,265.671,189.472,264,183.5,264c-17.369,0-31.5,14.131-31.5,31.5s14.131,31.5,31.5,31.5 s31.5-14.131,31.5-31.5c0-5.972-1.671-11.561-4.569-16.325l29.069-29.069l29.069,29.069C265.671,283.939,264,289.528,264,295.5 c0,17.369,14.131,31.5,31.5,31.5s31.5-14.131,31.5-31.5S312.869,264,295.5,264c-5.972,0-11.561,1.671-16.325,4.569L250.106,239.5 L279.175,210.431z" />
        </g>
      </svg>
    </div>
  );
}

function AboutCozyIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 512 512" fill="none" className="h-auto w-full">
        <g
          data-about-icon-stroke
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12"
        >
          <path d="M119.182,469.779v27.364c0,3.777,3.829,6.841,8.551,6.841h256.534c4.722,0,8.551-3.063,8.551-6.841v-27.364H119.182z" />
          <path d="M461.228,438.841c0,3.239-1.83,6.2-4.727,7.648l-55.131,27.566V401.37h59.858V438.841z" />
          <path d="M50.772,438.841c0,3.239,1.83,6.2,4.727,7.648l63.683,31.841v-76.96H50.772V438.841z" />
          <path d="M462.547,97.641c-0.788-33.1-22.659-61.987-54.305-71.724L350.063,8.017H161.937l-58.179,17.901 c-31.646,9.737-53.517,38.623-54.305,71.724l-7.094,297.944c-0.083,3.493,1.968,6.686,5.18,8.063l54.54,23.375h1.097l-0.647,25.215 c-0.247,9.614,7.48,17.541,17.097,17.541h272.749c9.617,0,17.343-7.927,17.097-17.541l-0.647-25.215h1.097l54.539-23.374 c3.212-1.377,5.264-4.57,5.181-8.064L462.547,97.641z" />
          <path d="M161.937,8.017c0,51.949,42.112,94.063,94.063,94.063s94.063-42.113,94.063-94.063H161.937z" />
          <polyline points="403.311,212.011 379.691,221.795 338.405,204.693 297.148,221.795 255.926,204.693 214.71,221.795 173.482,204.693 132.254,221.795 108.689,212.019 107.82,245.865 132.254,256 173.482,238.898 214.71,256 255.926,238.898 297.148,256 338.405,238.898 379.691,256 404.18,245.856" />
          <polyline points="406.782,347.391 379.691,358.614 338.405,341.511 297.148,358.614 255.926,341.511 214.71,358.614 173.482,341.511 132.254,358.614 105.218,347.398 104.35,381.243 132.254,392.818 173.482,375.716 214.71,392.818 255.926,375.716 297.148,392.818 338.405,375.716 379.691,392.818 407.65,381.237" />
          <polyline points="407.433,372.776 379.691,384.267 338.405,367.165 297.148,384.267 255.926,367.165 214.71,384.267 173.481,367.165 132.254,384.267 104.567,372.781 103.699,406.626 132.254,418.472 173.481,401.37 214.71,418.472 255.926,401.37 297.148,418.472 338.405,401.37 379.691,418.472 408.301,406.621" />
        </g>
      </svg>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const headingTextRef = useRef<HTMLSpanElement | null>(null);
  const imageCardRef = useRef<HTMLDivElement | null>(null);
  const colorCardRefs = useRef<HTMLDivElement[]>([]);

  const headingChars = useMemo(() => headingText.length, []);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !panelRef.current ||
      !circleRef.current ||
      !headingTextRef.current
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.set(circleRef.current, {
        scale: 0.12,
        transformOrigin: "50% 50%",
      });

      gsap.set(panelRef.current, {
        yPercent: 34,
        y: 140,
        scale: 0.9,
        borderRadius: 56,
        boxShadow: "0 52px 140px rgba(91, 47, 181, 0.28)",
      });

      gsap.set(headingTextRef.current, {
        width: "0ch",
      });

      gsap.set("[data-about-reveal]", {
        y: 56,
        opacity: 0,
      });

      gsap.set("[data-about-icon]", {
        color: "#7B4BE0",
      });

      gsap.set("[data-about-icon-float]", {
        opacity: 0,
        scale: 0.72,
      });

      gsap.set([imageCardRef.current, ...colorCardRefs.current], {
        y: 84,
        scale: 0.88,
        opacity: 0,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 56%",
          scrub: 1,
        },
      });

      introTimeline.to(
        panelRef.current,
        {
          yPercent: 0,
          y: 0,
          scale: 1,
          borderRadius: 0,
          boxShadow: "0 0 0 rgba(91, 47, 181, 0)",
          ease: "none",
        },
        0,
      );

      const pinnedTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      pinnedTimeline.to(
        circleRef.current,
        {
          scale: 18,
          ease: "none",
        },
        0,
      );

      pinnedTimeline.to(
        "[data-about-icon]",
        {
          color: "#ffffff",
          ease: "none",
        },
        0.26,
      );

      pinnedTimeline.to(
        headingTextRef.current,
        {
          width: `${headingChars}ch`,
          ease: "none",
        },
        0.48,
      );

      pinnedTimeline.to(
        "[data-about-icon-float]",
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 0.86,
          stagger: 0.06,
          ease: "none",
        },
        0.5,
      );

      pinnedTimeline.to(
        "[data-about-reveal]",
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "none",
        },
        0.52,
      );

      pinnedTimeline.to(
        [imageCardRef.current, ...colorCardRefs.current],
        {
          y: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.12,
          ease: "none",
        },
        0.56,
      );

      pinnedTimeline.to(
        "[data-about-image-overlay]",
        {
          opacity: 0.5,
          ease: "none",
        },
        0.56,
      );

      colorCardRefs.current.forEach((card) => {
        const handleMove = (event: MouseEvent) => {
          const bounds = card.getBoundingClientRect();
          const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
          const rotateX = (0.5 - (event.clientY - bounds.top) / bounds.height) * 14;

          gsap.to(card, {
            rotateX,
            rotateY,
            y: -8,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 900,
            transformOrigin: "center",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        ScrollTrigger.addEventListener("refreshInit", handleLeave);

        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
          ScrollTrigger.removeEventListener("refreshInit", handleLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-about-icon-float]").forEach((node, index) => {
        const distance = Number(node.dataset.floatDistance ?? 10);
        const duration = Number(node.dataset.floatDuration ?? 5.2);

        gsap.to(node, {
          y: index % 2 === 0 ? -distance : distance,
          x: index % 3 === 0 ? 5 : -5,
          duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.45 + index * 0.08,
        });
      });
    }, sectionRef);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [headingChars]);

  const setColorCardRef = (index: number) => (element: HTMLDivElement | null) => {
    if (element) {
      colorCardRefs.current[index] = element;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-20 overflow-hidden bg-white"
    >
      <div
        ref={panelRef}
        className="relative flex min-h-[920px] w-full items-center justify-center overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16"
        style={{
          willChange: "transform, border-radius, box-shadow",
          transformOrigin: "50% 100%",
        }}
      >
        <div
          ref={circleRef}
          className="absolute left-1/2 top-[56%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cozy-primary"
        />

        {aboutRingPositions.map((item, index) => (
          <div
            key={`about-ring-${item.className}`}
            data-about-icon
            data-about-icon-float
            data-float-distance={index % 2 === 0 ? 12 : 8}
            data-float-duration={5.1 + index * 0.24}
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              transform: `translate3d(${item.spreadX}px, ${item.spreadY}px, 0) scale(0.72)`,
              willChange: "transform, opacity, color",
            }}
          >
            <AboutRingIcon className={item.className} />
          </div>
        ))}

        {aboutCozyPositions.map((item, index) => (
          <div
            key={`about-cozy-${item.className}`}
            data-about-icon
            data-about-icon-float
            data-float-distance={index % 2 === 0 ? 14 : 10}
            data-float-duration={5.8 + index * 0.3}
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              transform: `translate3d(${item.spreadX}px, ${item.spreadY}px, 0) scale(0.68)`,
              willChange: "transform, opacity, color",
            }}
          >
            <AboutCozyIcon className={item.className} />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:items-start xl:gap-16">
            <div className="max-w-2xl pr-0 lg:pr-6">
              <p
                data-about-reveal
                className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                About Us
              </p>

              <h2
                data-about-reveal
                className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl"
              >
                <span
                  ref={headingTextRef}
                  className="inline-block max-w-[13ch] overflow-hidden whitespace-normal align-top"
                  style={{ willChange: "width" }}
                >
                  {headingText}
                </span>
              </h2>

              <div className="mt-8">
                <a
                  href="#contact"
                  data-about-reveal
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-cozy-primary shadow-[0_18px_40px_rgba(255,255,255,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-cozy-lavender"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="max-w-xl justify-self-end">
              <p
                data-about-reveal
                className="text-base leading-8 text-white sm:text-lg"
              >
                Take control of your brand&apos;s visual story with handmade crochet
                design choices that feel calm, elevated, and personal. From soft
                decorative accents to statement custom work, every piece is built
                to make a space feel warmer and more memorable.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.22fr)_minmax(280px,0.78fr)]">
            <article
              ref={imageCardRef}
              className="group relative min-h-[440px] overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_70px_rgba(17,24,39,0.12)]"
              style={{ willChange: "transform, opacity" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={placeholderImageUrl}
                alt="Team gathered around a work table"
                className="h-full w-full object-cover"
              />
              <div
                data-about-image-overlay
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <h3 data-about-reveal className="text-2xl font-semibold text-white">
                  My Story
                </h3>
                <p
                  data-about-reveal
                  className="mt-3 max-w-xl text-base leading-7 text-white"
                >
                  Crochet-forward collections designed with texture, softness, and
                  a little bit of personality for homes that want comfort without
                  feeling ordinary.
                </p>
              </div>
            </article>

            <div className="grid gap-5">
              {infoCards.map((card, index) => {
                const isLight = card.tone === "light";

                return (
                  <article
                    key={card.title}
                    ref={setColorCardRef(index)}
                    data-about-card
                    data-about-light-card={isLight ? "true" : undefined}
                    data-about-dark-card={!isLight ? "true" : undefined}
                    className={`relative min-h-[208px] overflow-hidden rounded-[2rem] border p-8 shadow-[0_24px_64px_rgba(17,24,39,0.1)] transition-shadow duration-300 ${
                      isLight
                        ? "border-cozy-lavender bg-cozy-lavender text-cozy-dark"
                        : "border-cozy-primary bg-cozy-primary text-white"
                    }`}
                    style={{
                      willChange: "transform, opacity",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div style={{ transform: "translateZ(22px)" }}>
                      <h3
                        data-about-reveal
                        className={`text-3xl font-semibold leading-tight ${
                          isLight ? "text-cozy-dark" : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        data-about-reveal
                        className={`mt-4 max-w-sm text-base leading-7 ${
                          isLight ? "text-cozy-dark/80" : "text-white"
                        }`}
                      >
                        {card.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
