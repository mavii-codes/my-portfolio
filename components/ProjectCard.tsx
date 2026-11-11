"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, FolderGit2, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = Boolean(project.featured && !project.isPlaceholder);

  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_40px_-15px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-blue-300/90 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.16)] lg:col-span-2 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)] dark:hover:border-blue-500/40 dark:hover:shadow-[0_20px_55px_-15px_rgba(37,99,235,0.22)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Project Image Preview */}
          <div className="bg-subtle-grid relative flex min-h-[260px] flex-col justify-center overflow-hidden border-b border-slate-200/75 bg-gradient-to-br from-slate-100/95 via-slate-50 to-blue-50/65 p-4 sm:min-h-[340px] sm:p-6 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-7 dark:border-white/8 dark:from-slate-900 dark:via-slate-950/95 dark:to-blue-950/35">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs backdrop-blur-md dark:border-white/12 dark:bg-slate-900/85 dark:text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Featured System
              </span>
            </div>

            {project.image ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18)] transition-transform duration-500 ease-out group-hover:scale-[1.015] dark:border-white/12 dark:bg-slate-900 dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]">
                {/* Clean Browser Mockup Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/95 px-3.5 py-2 dark:border-white/10 dark:bg-slate-900/95">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
                  </div>
                  <span className="rounded-md border border-slate-200/80 bg-white px-2.5 py-0.5 font-mono text-[10px] text-slate-500 sm:text-[11px] dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-400">
                    {project.previewUrl ?? project.title.toLowerCase()}
                  </span>
                  <div className="w-10" aria-hidden="true" />
                </div>

                {/* Full Uncropped Web App Viewport */}
                <Image
                  src={project.image}
                  alt={`${project.title} web application interface`}
                  width={1014}
                  height={490}
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="block h-auto w-full"
                />
              </div>
            ) : (
              <div className="flex min-h-[240px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-slate-900">
                <Layers className="h-12 w-12 text-blue-400" />
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
            <div>
              <p className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:text-[15px] dark:text-slate-300">
                {project.description}
              </p>

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-[13px] dark:text-slate-400"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-blue-200/70 bg-blue-50/75 px-2.5 py-1 font-mono text-xs font-medium text-blue-700 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-sm dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:text-sm dark:border-white/12 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: 0.08 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
        project.isPlaceholder
          ? "border-dashed border-slate-300/90 bg-slate-50/70 hover:border-blue-300/80 hover:bg-white dark:border-white/15 dark:bg-slate-900/40 dark:hover:border-blue-500/35 dark:hover:bg-slate-900/65"
          : "border-slate-200/90 bg-white shadow-xs hover:border-blue-300/80 hover:shadow-md dark:border-white/10 dark:bg-slate-900/75 dark:hover:border-blue-500/35"
      }`}
    >
      <div>
        {/* Image / Placeholder Header */}
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/60 dark:border-white/10 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/30">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="bg-subtle-grid flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-blue-600 shadow-2xs dark:border-white/10 dark:bg-slate-800 dark:text-blue-400">
                <FolderGit2 className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-amber-300/70 bg-amber-50/90 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
                Placeholder Card • Easy to Replace
              </span>
            </div>
          )}
        </div>

        {/* Title & Summary */}
        <p className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
          {project.category}
        </p>
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200/90 bg-white/90 px-2.5 py-0.5 font-mono text-xs text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-slate-200/70 pt-4 dark:border-white/8">
        {project.isPlaceholder ? (
          <>
            <span
              aria-disabled="true"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100/80 px-3.5 py-1.5 text-xs font-medium text-slate-400 select-none dark:border-white/8 dark:bg-slate-800/50 dark:text-slate-500"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub (TBD)</span>
            </span>
            <span
              aria-disabled="true"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-100/80 px-3.5 py-1.5 text-xs font-medium text-slate-400 select-none dark:border-white/8 dark:bg-slate-800/50 dark:text-slate-500"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live Demo (TBD)</span>
            </span>
          </>
        ) : (
          <>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-white/12 dark:bg-slate-800 dark:text-slate-200"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </>
        )}
      </div>
    </motion.article>
  );
}
