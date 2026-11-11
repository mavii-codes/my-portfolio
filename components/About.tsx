"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Layers, Layout } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

const iconMap = {
  Globe,
  Code2,
  Layout,
  Layers,
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
            {ABOUT_CONTENT.eyebrow}
          </span>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {ABOUT_CONTENT.title}
          </h2>
        </motion.div>

        {/* Main About Content + Stats */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative + Editable Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="text-lg leading-snug font-semibold text-slate-900 sm:text-xl dark:text-slate-100">
                {ABOUT_CONTENT.headline}
              </p>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Small Statistics Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {ABOUT_CONTENT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/85 bg-white/90 p-4 shadow-2xs transition-colors hover:border-blue-300/70 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-blue-500/35"
                >
                  <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl dark:from-blue-400 dark:to-sky-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {stat.helperText}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Interests Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {ABOUT_CONTENT.interests.map((interest, index) => {
              const IconComponent = iconMap[interest.iconName];
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className="group rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-2xs transition-colors hover:border-blue-300/80 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-blue-500/35"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200/70 bg-blue-50/80 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    <IconComponent className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {interest.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

