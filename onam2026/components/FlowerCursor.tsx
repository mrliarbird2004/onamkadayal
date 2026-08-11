"use client";

import { useEffect, useRef, useState } from "react";

export default function FlowerCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"idle" | "hover" | "active">("idle");

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || prefersReduced) return;
    setEnabled(true);
    document.body.classList.add("petal-cursor");

    function move(e: MouseEvent) {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setVariant("hover");
      } else {
        setVariant("idle");
      }
    }
    function down() {
      setVariant("active");
    }
    function up() {
      setVariant("idle");
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.classList.remove("petal-cursor");
    };
  }, []);

  if (!enabled) return null;

  const scale = variant === "hover" ? 1.5 : variant === "active" ? 0.8 : 1;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" width="22" height="22">
        <g>
          {Array.from({ length: 5 }).map((_, i) => (
            <ellipse
              key={i}
              cx="10"
              cy="6"
              rx="2.6"
              ry="4.4"
              fill="#E86B83"
              opacity="0.9"
              transform={`rotate(${i * 72} 10 10)`}
            />
          ))}
          <circle cx="10" cy="10" r="2.2" fill="#F4C542" />
        </g>
      </svg>
      {variant === "active" && (
        <svg viewBox="0 0 20 20" width="10" height="10" className="absolute -right-1 -top-1">
          <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="#FFD84A" />
        </svg>
      )}
    </div>
  );
}
