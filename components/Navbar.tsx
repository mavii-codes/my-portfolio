"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      // Determine active section based on scroll position
      const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 180;

      if (window.scrollY < 100) {
        setActiveSection("#home");
        return;
      }

      // Check if reached bottom of page
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 40
      ) {
        setActiveSection("#contact");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPosition) {
            setActiveSection(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-slate-200/80 bg-[#F8FAFC]/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#070B14]/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#F8FAFC]/60 backdrop-blur-md dark:bg-[#070B14]/60"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between sm:h-[70px]">
          {/* Brand Logo: [ MB ] Marvin Barro */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold tracking-wider text-white shadow-sm transition-transform duration-200 group-hover:scale-105 dark:bg-blue-600 dark:shadow-blue-500/25">
              {SITE_CONFIG.initials}
            </span>
            <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-[15px] dark:text-white dark:group-hover:text-blue-400">
              {SITE_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex items-center rounded-xl px-2.5 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:px-3.5 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-xl bg-blue-50/90 ring-1 ring-blue-200/70 dark:bg-blue-500/15 dark:ring-blue-500/30"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Controls: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? (
                <X className="h-[18px] w-[18px]" strokeWidth={2} />
              ) : (
                <Menu className="h-[18px] w-[18px]" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-200/75 md:hidden dark:border-white/10"
            >
              <ul className="flex flex-col gap-1 p-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
                            : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
