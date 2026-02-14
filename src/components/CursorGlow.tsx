"use client";

import { useEffect, useState, useRef } from "react";

const GLOW_SIZE = 520;
const SMOOTHING = 0.12;
const OPACITY = 0.22;

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const handleMove = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;

      const animate = () => {
        if (!mountedRef.current) return;

        smoothRef.current.x += (targetX - smoothRef.current.x) * SMOOTHING;
        smoothRef.current.y += (targetY - smoothRef.current.y) * SMOOTHING;

        setPosition({
          x: smoothRef.current.x,
          y: smoothRef.current.y,
        });

        const dx = Math.abs(targetX - smoothRef.current.x);
        const dy = Math.abs(targetY - smoothRef.current.y);
        if (dx > 0.5 || dy > 0.5) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      mountedRef.current = false;
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute rounded-full transition-opacity duration-300"
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.08) 35%, transparent 70%)",
          opacity: OPACITY,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
