"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "positions",
  "contact",
] as const;

const navLabels: Record<(typeof SECTION_IDS)[number], string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  positions: "Positions",
  contact: "Contact",
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = isHome
    ? (SECTION_IDS.map((id) => ({ href: `#${id}`, id, label: navLabels[id] })) as {
        href: string;
        id: string;
        label: string;
      }[])
    : [];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-md border-b border-surface-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {isHome ? (
            <Logo size="md" onClick={() => scrollToSection("home")} />
          ) : (
            <Link href="/" aria-label="Go to homepage">
              <Logo size="md" />
            </Link>
          )}

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {isHome &&
              navLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                      activeSection === link.id
                        ? "text-accent"
                        : "text-surface-300 hover:text-surface-50"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
         
          </ul>

          <motion.button
            type="button"
            className="md:hidden p-2 rounded-lg text-surface-300 hover:text-surface-50 hover:bg-surface-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.92 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              className="md:hidden py-4 border-t border-surface-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isHome &&
                navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? "text-accent"
                          : "text-surface-300 hover:text-surface-50"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
            
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
