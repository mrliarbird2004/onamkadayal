"use client";

import { useRef, useState, useEffect, type MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { TraditionalLamp } from "./DecorativeElements";

const RING_COLORS = [
  "#C94232", // outer red
  "#E98A17", // orange
  "#FFD84A", // yellow
  "#E86B83", // pink
  "#F4C542", // gold
];

function Ring({
  radius,
  petalCount,
  color,
  petalLength,
  delay,
  inView,
}: {
  radius: number;
  petalCount: number;
  color: string;
  petalLength: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      style={{ transformOrigin: "250px 250px" }}
    >
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (360 / petalCount) * i;
        return (
          <ellipse
            key={i}
            cx="250"
            cy={250 - radius}
            rx={petalLength * 0.42}
            ry={petalLength}
            fill={color}
            transform={`rotate(${angle} 250 250)`}
            opacity={0.94}
          />
        );
      })}
    </motion.g>
  );
}

export default function Pookalam({
  className = "",
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!interactive || isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setTilt({ x, y });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className={`relative select-none ${className}`}
    >
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-auto drop-shadow-[0_25px_40px_rgba(122,53,31,0.25)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: -tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
      >
        <Ring radius={195} petalCount={24} color={RING_COLORS[0]} petalLength={46} delay={0} inView={isInView} />
        <Ring radius={155} petalCount={20} color={RING_COLORS[1]} petalLength={40} delay={0.25} inView={isInView} />
        <Ring radius={115} petalCount={16} color={RING_COLORS[2]} petalLength={34} delay={0.5} inView={isInView} />
        <Ring radius={75} petalCount={12} color={RING_COLORS[3]} petalLength={28} delay={0.75} inView={isInView} />
        <Ring radius={35} petalCount={10} color={RING_COLORS[4]} petalLength={20} delay={1} inView={isInView} />
        <motion.circle
          cx="250"
          cy="250"
          r="22"
          fill="#7A351F"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.15 }}
        />
      </motion.svg>
      <motion.div
        className="absolute left-1/2 top-1/2 w-14 -translate-x-1/2 -translate-y-[85%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <TraditionalLamp className="w-full h-auto" lit={isInView} />
      </motion.div>
    </div>
  );
}
