"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type CategoryItem = {
  title: string;
  label: string;
  image: string;
  description: string;
};

type SlotConfig = {
  left: string;
  top: string;
  width: string;
  height: string;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

const categoryItems: CategoryItem[] = [
  {
    title: "Cozy Wearables",
    label: "Clothing",
    description:
      "Hand-knitted fashion pieces including sweaters, scarves, beanies, and everyday wear designed for comfort, warmth, and style.",
    image: '/images/categories/CAT-1.png',
  },
  {
    title: "Thoughtful Gift Items",
    label: "Gifts",
    description:
      "Small handcrafted knitted items like plush toys, hearts, and keepsakes perfect for gifting and expressing love.",
    image: '/images/categories/CAT-2.png',
  },
  {
    title: "Home & Cozy Decor",
    label: "Decor",
    description:
      "Aesthetic knitted pieces such as blankets, cushion covers, and decorative accents that bring warmth and personality to any space.",
    image: '/images/categories/CAT-3.png',
  },
  {
    title: "Custom Creations",
    label: "Custom",
    description:
      "Personalized knitted designs made to your request, allowing you to bring your unique ideas and inspirations to life.",
    image: '/images/categories/CAT-4.png',
  },
  {
    title: "Special Occasion Pieces",
    label: "Occasions",
    description:
      "Knitted items crafted for events like birthdays, baby showers, and celebrations, adding a soft and memorable touch.",
    image: '/images/categories/CAT-5.png',
  },
  {
    title: "Everyday Accessories",
    label: "Accessories",
    description:
      "Functional knitted items such as bags, scrunchies, headbands, and pouches designed for daily use with a stylish twist.",
    image: '/images/categories/CAT-6.png',
  },
  {
    title: "Baby & Kids Collection",
    label: "Kids",
    description:
      "Soft and gentle knitted items including baby shoes, caps, tiny sweaters, and plush toys made with care for little ones.",
    image: '/images/categories/CAT-7.png',
  },
];
const desktopSlots: Record<number, SlotConfig> = {
  [-2]: {
    left: "11%",
    top: "12%",
    width: "18%",
    height: "72%",
    rotate: -5,
    scale: 0.92,
    opacity: 1,
    zIndex: 20,
  },
  [-1]: {
    left: "28%",
    top: "9%",
    width: "22%",
    height: "82%",
    rotate: 5,
    scale: 0.96,
    opacity: 1,
    zIndex: 30,
  },
  [0]: {
    left: "50%",
    top: "7%",
    width: "34%",
    height: "88%",
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 60,
  },
  [1]: {
    left: "72%",
    top: "9%",
    width: "22%",
    height: "82%",
    rotate: -5,
    scale: 0.96,
    opacity: 1,
    zIndex: 30,
  },
  [2]: {
    left: "89%",
    top: "12%",
    width: "18%",
    height: "72%",
    rotate: 5,
    scale: 0.92,
    opacity: 1,
    zIndex: 20,
  },
};

const mobileSlots: Record<number, SlotConfig> = {
  [-2]: {
    left: "10%",
    top: "17%",
    width: "28%",
    height: "60%",
    rotate: -5,
    scale: 0.9,
    opacity: 0.68,
    zIndex: 20,
  },
  [-1]: {
    left: "28%",
    top: "13%",
    width: "37%",
    height: "70%",
    rotate: 5,
    scale: 0.94,
    opacity: 0.9,
    zIndex: 30,
  },
  [0]: {
    left: "50%",
    top: "9%",
    width: "72%",
    height: "82%",
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 60,
  },
  [1]: {
    left: "72%",
    top: "13%",
    width: "37%",
    height: "70%",
    rotate: -5,
    scale: 0.94,
    opacity: 0.9,
    zIndex: 30,
  },
  [2]: {
    left: "90%",
    top: "17%",
    width: "28%",
    height: "60%",
    rotate: 5,
    scale: 0.9,
    opacity: 0.68,
    zIndex: 20,
  },
};

const hiddenLeftSlot: SlotConfig = {
  left: "-14%",
  top: "31%",
  width: "14%",
  height: "48%",
  rotate: -8,
  scale: 0.78,
  opacity: 0,
  zIndex: 0,
};

const hiddenRightSlot: SlotConfig = {
  left: "114%",
  top: "31%",
  width: "14%",
  height: "48%",
  rotate: 8,
  scale: 0.78,
  opacity: 0,
  zIndex: 0,
};

const prevIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M15 6L9 12L15 18M15 12H15.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const nextIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M9 6L15 12L9 18M9 12H9.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

function getSlot(offset: number, slots: Record<number, SlotConfig>) {
  if (offset < -2) {
    return hiddenLeftSlot;
  }

  if (offset > 2) {
    return hiddenRightSlot;
  }

  return slots[offset];
}

function CategoryCard({
  item,
  index,
  slot,
  active,
  ready,
  onSelect,
}: {
  item: CategoryItem;
  index: number;
  slot: SlotConfig;
  active: boolean;
  ready: boolean;
  onSelect: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;

    if (!node || !active) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const bounds = node.getBoundingClientRect();
      const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 9;
      const rotateX = (0.5 - (event.clientY - bounds.top) / bounds.height) * 7;

      node.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      node.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [active]);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 90,
        scale: 0.82,
      }}
      animate={{
        left: slot.left,
        top: slot.top,
        width: slot.width,
        height: slot.height,
        rotate: ready ? slot.rotate : slot.rotate,
        scale: ready ? slot.scale : 0.82,
        opacity: ready ? slot.opacity : 0,
        zIndex: slot.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 22,
        mass: 0.8,
      }}
      className="absolute -translate-x-1/2"
      style={{
        transformOrigin: "50% 88%",
        willChange: "left, top, width, height, transform, opacity",
      }}
      onClick={() => onSelect(index)}
    >
      <div
        ref={cardRef}
        className={`relative h-full w-full overflow-hidden rounded-[1.55rem] bg-cozy-cream shadow-2xl transition-transform duration-300 ${
          active ? "cursor-pointer" : "cursor-pointer"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cozy-dark/75 via-cozy-dark/15 to-transparent" />

        {active ? (
          <span className="absolute left-5 top-5 rounded-full bg-cozy-lavender px-3 py-1 text-[11px] font-medium text-cozy-primary">
            {item.label}
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-white sm:text-sm">
            The {item.title}
          </p>
          {active ? (
            <p className="mt-2 max-w-[23ch] text-sm leading-6 text-white/90">
              {item.description}
            </p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function CategoriesSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slots = isMobile ? mobileSlots : desktopSlots;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < categoryItems.length - 1;
  const textRevealTransition = {
    duration: 0.95,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const cards = useMemo(
    () =>
      categoryItems.map((item, index) => ({
        item,
        index,
        offset: index - activeIndex,
      })),
    [activeIndex],
  );

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative overflow-hidden bg-cozy-soft px-6 py-20 text-cozy-dark sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cozy-primary/15 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 translate-x-1/3 rounded-full bg-cozy-accent/20 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cozy-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={textRevealTransition}
            className="max-w-[20ch] text-sm italic leading-6 text-cozy-dark/70"
          >
            Cozy combinations of custom pieces and soft textures made to feel
            warm, personal, and memorable.
          </motion.p>

          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
              transition={{ ...textRevealTransition, delay: 0.08 }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-cozy-primary"
            >
              Categories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 48, scale: 0.98, filter: "blur(12px)" }}
              animate={
                inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined
              }
              transition={{ ...textRevealTransition, duration: 1.05, delay: 0.16 }}
              className="text-5xl font-semibold uppercase leading-[0.92] tracking-[0.04em] text-cozy-dark sm:text-7xl lg:text-8xl"
            >
              Our Works
            </motion.h2>
          </div>
        </div>

        <div className="relative min-h-[47rem] overflow-visible px-0 py-8 sm:min-h-[51rem] lg:min-h-[54rem]">
          <div className="absolute inset-x-0 top-[13%] h-px bg-cozy-primary/20" />

          <div className="relative z-20 h-[42rem] overflow-visible sm:h-[46rem] lg:h-[49rem]">
            {cards.map(({ item, index, offset }) => (
              <CategoryCard
                key={item.title}
                item={item}
                index={index}
                slot={getSlot(offset, slots)}
                active={index === activeIndex}
                ready={inView}
                onSelect={setActiveIndex}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
            transition={{ ...textRevealTransition, delay: 0.32 }}
            className="relative z-[80] mt-8 flex items-center justify-center gap-3 sm:mt-10 lg:mt-12"
          >
            <button
              type="button"
              aria-label="Previous category"
              onClick={() => {
                if (canGoPrev) {
                  setActiveIndex((index) => index - 1);
                }
              }}
              disabled={!canGoPrev}
              className={`group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border transition-all ${
                canGoPrev
                  ? "border-cozy-primary bg-white text-cozy-primary shadow-lg"
                  : "cursor-not-allowed border-cozy-primary/15 bg-cozy-soft text-cozy-primary/25"
              }`}
            >
              {canGoPrev ? (
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cozy-primary transition-all duration-300 ease-out group-hover:h-16 group-hover:w-16" />
              ) : null}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  canGoPrev ? "group-hover:text-white" : ""
                }`}
              >
                {prevIcon}
              </span>
            </button>

            <button
              type="button"
              aria-label="Next category"
              onClick={() => {
                if (canGoNext) {
                  setActiveIndex((index) => index + 1);
                }
              }}
              disabled={!canGoNext}
              className={`group relative inline-flex h-12 min-w-[3.5rem] items-center justify-center overflow-hidden rounded-full border px-4 transition-all ${
                canGoNext
                  ? "border-cozy-primary bg-white text-cozy-primary shadow-lg"
                  : "cursor-not-allowed border-cozy-primary/15 bg-cozy-soft text-cozy-primary/25"
              }`}
            >
              {canGoNext ? (
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cozy-primary transition-all duration-300 ease-out group-hover:h-16 group-hover:w-16" />
              ) : null}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  canGoNext ? "group-hover:text-white" : ""
                }`}
              >
                {nextIcon}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
