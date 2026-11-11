import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 py-10 backdrop-blur-sm dark:border-white/8 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        {/* MB Logo + Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold tracking-wider text-white transition-transform duration-200 group-hover:scale-105 dark:bg-blue-600">
            {SITE_CONFIG.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Copyright */}
        <p className="text-center text-xs text-slate-500 sm:text-sm dark:text-slate-400">
          &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={SITE_CONFIG.socials.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Marvin Barro on Gmail"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/85 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={SITE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marvin Barro on GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/85 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE_CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marvin Barro on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/85 bg-slate-50 text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
