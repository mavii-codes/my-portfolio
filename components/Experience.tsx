"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { JOURNEY_ITEMS } from "@/lib/constants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-slate-200/60 bg-slate-100/45 py-20 sm:py-28 dark:border-white/6 dark:bg-slate-900/25"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-left sm:text-center"
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
            Academic &amp; Developer Progression
          </span>
          <h2
            id="experience-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            My Journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400">
            A steady progression of learning software fundamentals, modern web frameworks, and full-stack system development.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative mt-14">
          {/* Vertical Spine */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-blue-600/60 via-slate-300 to-transparent sm:left-1/2 sm:-translate-x-1/2 dark:from-blue-500/60 dark:via-white/15"
          />

          <div className="space-y-8 sm:space-y-10">
            {JOURNEY_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex flex-col pl-12 sm:pl-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  } sm:items-center`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute top-1 left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-white shadow-sm sm:left-1/2 sm:-translate-x-1/2 dark:border-slate-950 dark:bg-blue-500">
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.25rem)] ${
                      isEven ? "sm:pr-2" : "sm:pl-2"
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-200/85 bg-white p-5 shadow-2xs transition-colors hover:border-blue-300/80 sm:p-6 dark:border-white/10 dark:bg-slate-900/75 dark:hover:border-blue-500/35">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-lg bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                          {item.year}
                        </span>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Current Focus
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-200/90 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

