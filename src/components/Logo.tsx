"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

const logoContent = (size: "sm" | "md" | "lg") => (
  <>
    <span
      className="absolute -inset-3 rounded-xl opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
      }}
      aria-hidden
    />
    <span
      className={`relative flex items-baseline ${sizeClasses[size]}`}
      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <span className="text-surface-50 font-bold tracking-[-0.02em]">
        aditi
      </span>
      <span
        className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text font-bold text-transparent tracking-[-0.02em] transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_8px_rgba(99,102,241,0.35))]"
        style={{ backgroundSize: "200% 100%" }}
      >
        .portfolio
      </span>
    </span>
  </>
);

export default function Logo({ className = "", size = "md", onClick }: LogoProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="group relative inline-flex items-baseline font-bold tracking-tight antialiased outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 rounded cursor-pointer bg-transparent border-none p-0"
          aria-label="aditi.portfolio – Home"
        >
          {logoContent(size)}
        </button>
      ) : (
        <Link
          href="/"
          className="group relative inline-flex items-baseline font-bold tracking-tight antialiased no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 rounded"
          aria-label="aditi.portfolio – Home"
        >
          {logoContent(size)}
        </Link>
      )}
    </motion.div>
  );
}
