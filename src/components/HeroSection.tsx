"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

const ribbonCharmPositions = [
  { className: "-left-8 top-24 w-20 sm:w-24 lg:w-28", spreadX: -96, spreadY: -56, delay: 0.72 },
  { className: "right-[16%] -top-4 w-16 -rotate-[14deg] sm:w-20", spreadX: 112, spreadY: -72, delay: 0.78 },
  { className: "left-[8%] bottom-10 w-14 rotate-[12deg] sm:w-16", spreadX: -88, spreadY: 64, delay: 0.84 },
  { className: "-right-6 top-[30%] w-14 -rotate-[18deg] sm:w-16", spreadX: 104, spreadY: 18, delay: 0.9 },
  { className: "left-[38%] -top-6 w-12 rotate-[10deg] sm:w-14", spreadX: -24, spreadY: -92, delay: 0.96 },
  { className: "right-[8%] bottom-[12%] w-12 rotate-[22deg] sm:w-14", spreadX: 82, spreadY: 58, delay: 1.02 },
];

const yarnBallPositions = [
  { className: "-right-10 bottom-20 w-24 rotate-[10deg] sm:w-28 lg:w-32", spreadX: 124, spreadY: 76, delay: 0.92 },
  { className: "-left-10 bottom-[26%] w-20 -rotate-[16deg] sm:w-24", spreadX: -118, spreadY: 42, delay: 0.98 },
  { className: "right-[2%] top-[14%] w-16 rotate-[18deg] sm:w-20", spreadX: 96, spreadY: -46, delay: 1.04 },
  { className: "left-[18%] -top-10 w-14 -rotate-[8deg] sm:w-16", spreadX: -74, spreadY: -104, delay: 1.1 },
];

const categoryHighlights = ["Blankets", "Flowers", "Amigurumi", "Custom Pieces"];

const contentGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const popUpVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      delay: 0.36,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function RibbonCharm({ className = "" }: { className?: string }) {
  return (
    <div className={`edge-charm absolute ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="h-auto w-full">
        <path
          d="M15.82,8.16a3.86,3.86,0,0,1-2.53,3.6,3.89,3.89,0,0,1-2.58,0A3.82,3.82,0,0,1,9.58,5.21a3.8,3.8,0,0,1,4.84,0A3.85,3.85,0,0,1,15.82,8.16Z"
          className="edge-charm-stroke"
        />
        <path
          d="M14.42,5.21l3.48-3a2.81,2.81,0,0,1,1.82-.68A2.77,2.77,0,0,1,22.5,4.25v7.81a2.77,2.77,0,0,1-4.6,2.09l-3.48-3"
          className="edge-charm-stroke"
        />
        <path
          d="M9.58,11.11l-3.48,3a2.77,2.77,0,0,1-4.6-2.09V4.25A2.77,2.77,0,0,1,4.28,1.48a2.81,2.81,0,0,1,1.82.68L9.58,5.21"
          className="edge-charm-stroke"
        />
        <polyline
          points="4.54 14.83 2.46 18.66 5.32 18.66 7.23 21.52 10.71 11.76"
          className="edge-charm-stroke"
        />
        <polyline
          points="19.45 14.83 21.55 18.66 18.68 18.66 16.77 21.52 13.29 11.76"
          className="edge-charm-stroke"
        />
        <line x1="4.36" y1="8.16" x2="8.18" y2="8.16" className="edge-charm-stroke" />
        <line x1="15.82" y1="8.16" x2="19.64" y2="8.16" className="edge-charm-stroke" />
      </svg>
    </div>
  );
}

function YarnBallCharm({ className = "" }: { className?: string }) {
  return (
    <div className={`edge-charm absolute ${className}`}>
      <svg viewBox="0 0 487.002 487.002" fill="none" className="h-auto w-full">
        <path
          d="M416.854,74.149C371.618,28.914,311.475,4.001,247.502,4.001S123.386,28.914,78.15,74.149 C35.216,117.083,10.606,173.45,8.212,233.771c-0.227,0.96-0.263,1.953-0.107,2.924c-0.063,2.264-0.103,4.532-0.103,6.806 c0,63.973,24.913,124.116,70.148,169.352c12.405,12.405,25.938,23.271,40.356,32.524c-8.769-3.357-16.844-6.776-24.497-10.02 C63.562,422.455,39.513,412.264,5.784,420.2c-4.032,0.949-6.532,4.986-5.583,9.019c0.949,4.033,4.988,6.531,9.019,5.583 c28.955-6.813,49.92,2.071,78.936,14.367c35.569,15.073,79.835,33.832,159.346,33.832c63.973,0,124.116-24.913,169.352-70.148 c45.235-45.236,70.148-105.379,70.148-169.352S462.089,119.385,416.854,74.149z M421.065,385.926L228.892,467.23 c-13.553-1.105-26.86-3.414-39.797-6.875l254.722-107.767C437.296,364.284,429.701,375.442,421.065,385.926z M393.928,413.695 c-35.626,30.746-79.424,49.25-126.214,53.398L393.928,413.695z M453.855,332.19c-0.429,0.097-0.856,0.226-1.276,0.404 L167.277,453.299c-9.202-3.515-18.159-7.646-26.829-12.362l323.303-136.782C461.082,313.727,457.77,323.086,453.855,332.19z M467.98,286.078L124.52,431.388c-7.03-4.622-13.828-9.657-20.362-15.098l367.174-155.343 C470.684,269.43,469.558,277.815,467.98,286.078z M54.01,357.506l410.063-173.488c1.945,7.125,3.537,14.363,4.772,21.694 L66.255,376.039C61.852,370.045,57.769,363.861,54.01,357.506z M37.922,324.313l212.463-89.888c0.024-0.01,0.047-0.02,0.071-0.03 l200.972-85.027c3.057,6.612,5.785,13.37,8.176,20.253L46.768,344.283C43.491,337.772,40.54,331.109,37.922,324.313z M39.681,158.286l104.7,104.7l-25.579,10.822c-0.305-1.322-0.965-2.58-1.996-3.61L30.867,184.26 C33.271,175.414,36.214,166.742,39.681,158.286z M58.943,121.549l124.788,124.788l-24.445,10.342L46.295,143.688 C50.073,136.091,54.296,128.703,58.943,121.549z M105.029,279.634l-24.445,10.342l-57.322-57.322 c0.498-10.531,1.73-20.927,3.651-31.136L105.029,279.634z M23.243,253.849l42.434,42.434l-32.67,13.822 C27.419,292.029,24.114,273.161,23.243,253.849z M94.157,79.549c8.163-7.647,16.8-14.618,25.845-20.886v46.731L94.157,79.549z M135.002,49.131c8.078-4.694,16.425-8.865,25-12.493v108.757l-25-25V49.131z M175.002,30.924c8.171-2.779,16.515-5.084,25-6.903 v161.373l-25-25V30.924z M215.002,21.33c8.233-1.187,16.577-1.917,25-2.191V222.53l-2.013,0.851l-22.987-22.987V21.33z M400.002,154.838l-25,10.577V58.664c8.734,6.052,17.087,12.761,25,20.1V154.838z M360.002,171.761l-25,10.577v-145.7 c8.575,3.628,16.922,7.8,25,12.493V171.761z M320.002,188.684l-25,10.577V24.022c8.485,1.819,16.829,4.124,25,6.903V188.684z M280.002,205.607l-25,10.577V19.138c8.423,0.275,16.767,1.005,25,2.191V205.607z M444.661,135.944l-29.659,12.548V94.029 C426.571,106.961,436.491,121.018,444.661,135.944z M83.55,90.156l139.533,139.533l-24.445,10.342L67.668,109.06 C72.582,102.515,77.882,96.206,83.55,90.156z M75.894,388.248l395.013-167.121c0.726,7.388,1.094,14.853,1.094,22.374 c0,0.294-0.01,0.586-0.011,0.88L91.81,405.227c-1.023-0.986-2.046-1.973-3.054-2.98C84.247,397.737,79.967,393.061,75.894,388.248z"
          className="edge-charm-stroke edge-charm-fill"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-visual]", {
        y: -10,
        duration: 5.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.85,
      });

      gsap.utils.toArray<HTMLElement>("[data-hero-float]").forEach((node, index) => {
        const distance = Number(node.dataset.floatDistance ?? 10);
        const duration = Number(node.dataset.floatDuration ?? 4.8);
        const entranceDelay = Number(node.dataset.entranceDelay ?? 0.9);

        gsap.to(node, {
          y: index % 2 === 0 ? -distance : distance,
          x: index % 3 === 0 ? 4 : -4,
          duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: entranceDelay + 0.18,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      className="hero-gradient relative overflow-hidden"
    >
      <div className="hero-gradient-shimmer" aria-hidden="true" />

      {ribbonCharmPositions.map((item, index) => (
        <motion.div
          key={`ribbon-${item.className}`}
          initial={{
            opacity: 0,
            x: item.spreadX,
            y: item.spreadY,
            scale: 0.72,
            rotate: index % 2 === 0 ? -8 : 8,
          }}
          animate={{
            opacity: 0.82,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            delay: item.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          data-hero-float
          data-float-distance={index % 2 === 0 ? 12 : 8}
          data-float-duration={5 + index * 0.2}
          data-entrance-delay={item.delay}
          className="pointer-events-none absolute inset-0 z-10"
          style={{ willChange: "transform, opacity" }}
        >
          <RibbonCharm className={item.className} />
        </motion.div>
      ))}

      {yarnBallPositions.map((item, index) => (
        <motion.div
          key={`yarn-${item.className}`}
          initial={{
            opacity: 0,
            x: item.spreadX,
            y: item.spreadY,
            scale: 0.68,
            rotate: index % 2 === 0 ? 10 : -10,
          }}
          animate={{
            opacity: 0.82,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.08,
            delay: item.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          data-hero-float
          data-float-distance={index % 2 === 0 ? 14 : 10}
          data-float-duration={5.6 + index * 0.24}
          data-entrance-delay={item.delay}
          className="pointer-events-none absolute inset-0 z-10"
          style={{ willChange: "transform, opacity" }}
        >
          <YarnBallCharm className={item.className} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-4">
          <motion.div
            variants={contentGroupVariants}
            className="order-2 flex max-w-xl flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
          >
            <motion.div
              variants={popUpVariants}
              className="relative mb-10 w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[520px]"
            >
              <Image
                src="/images/dee'sCozy.png"
                alt="Dee's Cozy"
                width={129775}
                height={34000}
                priority
                className="h-auto w-full"
              />

              <Image
                src="/images/hooks.png"
                alt="Hooks"
                width={67349}
                height={17000}
                priority
                className="absolute bottom-[-75%] left-[10%] h-auto w-[68%] sm:left-[12%] sm:w-[64%]"
              />

              <Image
                src="/images/yarn.png"
                alt="Yarn graphic"
                width={237560}
                height={237560}
                priority
                className="absolute right-[-4%] top-[8%] h-auto w-[22%] sm:right-[-6%] sm:top-[62%] sm:w-[24%]"
              />
            </motion.div>

            <motion.p
              variants={popUpVariants}
              className="mt-10 max-w-md text-base leading-7 text-cozy-dark/75 sm:text-lg"
            >
              Handmade crochet pieces, warm textures, and soft statement details
              made to bring a little extra comfort into your everyday space.
            </motion.p>

            <motion.div
              variants={popUpVariants}
              className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <a
                className="shimmer-button inline-flex h-12 min-w-[168px] items-center justify-center rounded-full bg-cozy-primary px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-cozy-secondary"
                href="#contact"
              >
                Contact Us
              </a>
              <a
                className="inline-flex h-12 min-w-[168px] items-center justify-center rounded-full border border-cozy-primary/35 bg-white/60 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-cozy-primary shadow-[0_14px_34px_rgba(91,47,181,0.12)] backdrop-blur-sm transition-all hover:border-cozy-secondary hover:bg-white/85 hover:text-cozy-secondary"
                href="#categories"
              >
                View Categories
              </a>
            </motion.div>

            <motion.div
              id="categories"
              variants={popUpVariants}
              className="mt-8 flex scroll-mt-24 flex-wrap justify-center gap-3 lg:justify-start"
            >
              {categoryHighlights.map((category) => (
                <span
                  key={category}
                  className="inline-flex h-10 items-center rounded-full border border-cozy-primary/20 bg-white/70 px-4 text-sm font-medium text-cozy-dark/80 shadow-[0_10px_24px_rgba(91,47,181,0.08)] backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="order-1 flex items-center justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[960px]" data-hero-visual>
              <div className="absolute inset-x-8 bottom-8 h-16 rounded-full bg-cozy-cream/45 blur-md sm:inset-x-16 sm:h-20" />
              <div className="relative rounded-[2rem] bg-transparent">
                <Image
                  src="/images/heroImage.png"
                  alt="Woman knitting in a cozy chair"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
