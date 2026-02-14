"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const getScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      if (total <= 0) return 0;
      return scrollTop / total;
    };

    const handleScroll = () => setScrollY(getScrollProgress());

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    scaleX.set(scrollY);
  }, [scrollY, scaleX]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left pointer-events-none"
      aria-hidden
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
        style={{ scaleX }}
      />
    </div>
  );
}
