"use client";

import { motion } from "framer-motion";
import { Database, Monitor, Server, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills";

const categoryIcons = {
  Monitor,
  Server,
  Database,
  Wrench,
} as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-slate-200/60 py-20 sm:py-28 dark:border-white/6"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
            Technical Stack
          </span>
          <h2
            id="skills-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Core languages, frameworks, databases, and developer tools I use to design and build modern web systems.
          </p>
        </motion.div>

        {/* 4 Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = categoryIcons[category.iconName];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.07 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-slate-200/85 bg-white/95 p-6 shadow-2xs transition-colors hover:border-blue-300/80 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-blue-500/35"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200/75 bg-blue-50/80 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      <IconComponent className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-500 sm:text-[13px] dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="hidden rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-500 sm:inline-block dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-400">
                    {category.skills.length} items
                  </span>
                </div>

                {/* Clean Skill Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-slate-50/85 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50/70 hover:text-blue-700 sm:text-[13px] dark:border-white/10 dark:bg-slate-800/75 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-600/80 dark:bg-blue-400"
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

