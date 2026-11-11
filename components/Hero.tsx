"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Code2, Mail } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-12 lg:pt-36"
    >
      {/* Subtle Architectural Dot Grid */}
      <div
        aria-hidden="true"
        className="bg-subtle-grid pointer-events-none absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_55%,transparent_100%)]"
      />

      {/* Ambient Top & Portrait Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/4 h-[380px] w-[380px] rounded-full bg-blue-500/[0.07] blur-3xl dark:bg-blue-500/[0.12]" />
        <div className="absolute top-1/3 right-[8%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.09] blur-3xl dark:bg-blue-500/[0.16]" />
      </div>

      {/* Decorative Outlined Background Typography: "MARVIN BARRO" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 select-none flex-col items-center justify-center overflow-hidden px-2"
      >
        {/* Stacked on small screens to stay bold without overflow; single monumental line on sm+ */}
        <span className="text-outline-hero block text-center text-[4.1rem] leading-[0.92] font-extrabold tracking-tight uppercase sm:hidden">
          MARVIN
          <br />
          BARRO
        </span>
        <span className="text-outline-hero hidden whitespace-nowrap text-center font-extrabold tracking-tight uppercase sm:block sm:text-[5.5rem] md:text-[7.2rem] lg:text-[9.5rem] xl:text-[11.5rem] 2xl:text-[13rem]">
          {HERO_CONTENT.backgroundText}
        </span>
      </div>

      {/* Main Hero Content Grid */}
      <div className="mx-auto my-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left lg:col-span-7"
          >
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-blue-50/85 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700 shadow-xs backdrop-blur-xs sm:text-[13px] dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-65 motion-reduce:hidden dark:bg-blue-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </span>
              {HERO_CONTENT.badge}
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.35rem] dark:text-white">
              <span className="block">{HERO_CONTENT.greeting}</span>
              <span className="mt-1 block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text pb-1 text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-sky-300">
                {HERO_CONTENT.name}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-[19px] dark:text-slate-300">
              {HERO_CONTENT.description}
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
              <motion.a
                href={HERO_CONTENT.primaryCta.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-6px_rgba(37,99,235,0.45)] transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_14px_30px_-6px_rgba(37,99,235,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto dark:focus-visible:ring-offset-slate-950"
              >
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                href={HERO_CONTENT.secondaryCta.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-xs backdrop-blur-xs transition-colors hover:border-blue-300/80 hover:bg-blue-50/50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto dark:border-white/12 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-blue-500/40 dark:hover:bg-slate-800/90 dark:hover:text-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{HERO_CONTENT.secondaryCta.label}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Professional Portrait + Circular Decorative Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex w-full max-w-[300px] items-center justify-center sm:max-w-[380px] lg:col-span-5 lg:max-w-[420px]"
          >
            {/* Subtle Circular Gradients & Geometric Rings Behind Portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 flex items-center justify-center sm:-inset-8"
            >
              {/* Soft Radial Blue Halo */}
              <div className="h-[88%] w-[88%] rounded-full bg-gradient-to-tr from-blue-600/20 via-sky-400/15 to-transparent blur-2xl dark:from-blue-600/30 dark:via-blue-400/15 dark:to-transparent" />
              {/* Outer Hairline Orbit Ring */}
              <div className="absolute h-[96%] w-[96%] rounded-full border border-slate-300/55 dark:border-white/[0.08]" />
              {/* Inner Dashed Accent Ring */}
              <div className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-blue-400/35 dark:border-blue-400/25" />
            </div>

            {/* Studio Portrait Frame */}
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white/95 via-slate-50/90 to-slate-100/95 p-2.5 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-white/12 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-950/95 dark:shadow-[0_24px_70px_-15px_rgba(37,99,235,0.24)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-200/60 dark:bg-slate-800/70">
                <Image
                  src={HERO_CONTENT.portraitSrc}
                  alt={HERO_CONTENT.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                  className="object-cover object-[35%_85%] transition-transform duration-500 hover:scale-[1.03]"
                />
                {/* Subtle Bottom Studio Vignette for Depth */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent"
                />

                {/* Minimal Floating Developer Badge Inside Portrait Frame */}
                <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/65 px-3.5 py-2.5 text-white backdrop-blur-md">
                  <div>
                    <p className="text-xs font-semibold tracking-tight text-white">
                      {HERO_CONTENT.name}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {HERO_CONTENT.statusLabel}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/90 text-white shadow-xs">
                    <Code2 className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <a
          href="#about"
          aria-label="Scroll down to About Me section"
          className="group inline-flex flex-col items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium tracking-widest text-slate-500 uppercase transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <span>Scroll Down</span>
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 text-slate-600 shadow-2xs transition-colors group-hover:border-blue-300 group-hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 dark:group-hover:border-blue-500/40 dark:group-hover:text-blue-400"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}

