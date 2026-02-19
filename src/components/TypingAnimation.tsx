"use client";

import { useState, useEffect, useRef } from "react";

const ROLES = ["Tech Enthusiast", "Problem Solver"];

const TYPE_SPEED = 85;
const DELETE_SPEED = 55;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 600;

export default function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const delayRef = useRef(400);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          delayRef.current = TYPE_SPEED;
          return;
        }
        setIsDeleting(true);
        delayRef.current = PAUSE_AFTER_TYPE;
        return;
      }
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
        delayRef.current = DELETE_SPEED;
        return;
      }
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      delayRef.current = PAUSE_AFTER_DELETE;
    };

    const timeoutId = setTimeout(tick, delayRef.current);
    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex, currentRole]);

  return (
    <h2 className="text-xl sm:text-2xl text-accent-light font-medium mb-6 min-h-[2.5rem] flex items-center justify-center">
      <span className="tabular-nums">{displayText}</span>
      <span
        className="inline-block w-0.5 h-6 sm:h-7 bg-accent-light ml-0.5 animate-pulse"
        aria-hidden
      />
    </h2>
  );
}
