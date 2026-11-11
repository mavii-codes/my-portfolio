"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { CONTACT_CONTENT, SITE_CONFIG } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const contactChannels = [
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: SITE_CONFIG.socials.email,
    icon: Mail,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/mavii-codes",
    href: SITE_CONFIG.socials.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/barro-marvin",
    href: SITE_CONFIG.socials.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-slate-200/60 py-20 sm:py-28 dark:border-white/6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Message + Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
              {CONTACT_CONTENT.eyebrow}
            </span>
            <h2
              id="contact-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
            >
              {CONTACT_CONTENT.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {CONTACT_CONTENT.description}
            </p>

            {/* Contact Channels */}
            <div className="mt-8 space-y-3.5">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-4 shadow-2xs transition-all hover:border-blue-300/80 hover:bg-blue-50/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-blue-500/35 dark:hover:bg-slate-900"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-blue-50/80 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {channel.label}
                        </p>
                        <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
