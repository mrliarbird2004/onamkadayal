"use client";

import { useEffect, useState } from "react";
import { Petal } from "./DecorativeElements";

const COLORS = ["#E86B83", "#F4C542", "#E98A17", "#C94232", "#FFD84A"];

export default function FlowerParticles({
  count = 14,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [particles, setParticles] = useState<
    { left: number; delay: number; duration: number; size: number; color: string }[]
  >([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const n = isMobile ? Math.max(4, Math.floor(count / 2.5)) : count;
    setParticles(
      Array.from({ length: n }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 8,
        size: 14 + Math.random() * 16,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute top-0 animate-petalFall motion-reduce:hidden"
          style={{
            left: `${p.left}%`,
            width: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <Petal color={p.color} className="w-full h-auto opacity-70" />
        </div>
      ))}
    </div>
  );
}
