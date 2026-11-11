"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-slate-200/60 bg-slate-100/45 py-20 sm:py-28 dark:border-white/6 dark:bg-slate-900/25"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
              Selected Work
            </span>
            <h2
              id="projects-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
            >
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Practical full-stack web applications designed with clean interfaces and structured operational logic.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

