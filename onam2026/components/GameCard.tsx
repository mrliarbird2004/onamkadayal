"use client";

import { motion } from "framer-motion";
import { Marigold } from "./DecorativeElements";

export type GameKind = "cricket" | "chess" | "carrom" | "marathon" | "children" | "adults";

function GameIcon({ kind }: { kind: GameKind }) {
  switch (kind) {
    case "cricket":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <ellipse cx="50" cy="88" rx="30" ry="6" fill="#7A351F" opacity="0.15" />
          <circle cx="34" cy="66" r="12" fill="#C94232" />
          <path d="M28 60 Q34 66 40 60" stroke="#FFF4D6" strokeWidth="1.5" fill="none" />
          <rect x="52" y="18" width="10" height="52" rx="4" fill="#E9A857" transform="rotate(18 57 44)" />
          <rect x="48" y="14" width="16" height="10" rx="3" fill="#7A351F" transform="rotate(18 56 19)" />
        </svg>
      );
    case "chess":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <ellipse cx="50" cy="88" rx="26" ry="6" fill="#7A351F" opacity="0.15" />
          <defs>
            <linearGradient id="king-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE58A" />
              <stop offset="100%" stopColor="#C98A1B" />
            </linearGradient>
          </defs>
          <rect x="34" y="70" width="32" height="10" rx="3" fill="url(#king-g)" />
          <path d="M32 70 L68 70 L60 40 L40 40 Z" fill="url(#king-g)" />
          <rect x="38" y="26" width="24" height="14" rx="4" fill="url(#king-g)" />
          <rect x="46" y="10" width="8" height="20" rx="2" fill="url(#king-g)" />
          <rect x="40" y="16" width="20" height="8" rx="2" fill="url(#king-g)" />
        </svg>
      );
    case "carrom":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <rect x="14" y="14" width="72" height="72" rx="10" fill="#E9A857" />
          <rect x="22" y="22" width="56" height="56" rx="6" fill="#F4E1B8" />
          <circle cx="50" cy="50" r="8" fill="#C94232" />
          <circle cx="34" cy="34" r="6" fill="#FFF4D6" stroke="#7A351F" strokeWidth="1.5" />
          <circle cx="66" cy="34" r="6" fill="#3A2A1A" />
          <circle cx="34" cy="66" r="6" fill="#3A2A1A" />
          <circle cx="66" cy="66" r="6" fill="#FFF4D6" stroke="#7A351F" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="5" fill="#7A351F" />
          <circle cx="82" cy="18" r="5" fill="#7A351F" />
          <circle cx="18" cy="82" r="5" fill="#7A351F" />
          <circle cx="82" cy="82" r="5" fill="#7A351F" />
        </svg>
      );
    case "marathon":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <ellipse cx="50" cy="88" rx="28" ry="6" fill="#7A351F" opacity="0.15" />
          <path
            d="M20 66 C20 56 30 54 40 56 L70 60 C78 61 80 68 74 72 L30 74 C22 74 20 70 20 66 Z"
            fill="#168447"
          />
          <path d="M30 56 L36 40 L52 40 L48 56 Z" fill="#F4C542" />
          <ellipse cx="26" cy="76" rx="14" ry="4" fill="#075C3A" />
          <path d="M22 74 Q26 66 34 66" stroke="#FFF4D6" strokeWidth="3" fill="none" />
        </svg>
      );
    case "children":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <circle cx="35" cy="40" r="16" fill="#FFD84A" />
          <circle cx="65" cy="55" r="12" fill="#E86B83" />
          <circle cx="50" cy="70" r="10" fill="#168447" />
          <path d="M35 24 L38 34 L48 34 L40 40 L43 50 L35 44 L27 50 L30 40 L22 34 L32 34 Z" fill="#E98A17" />
        </svg>
      );
    case "adults":
      return (
        <svg viewBox="0 0 100 100" className="h-20 w-20">
          <rect x="30" y="50" width="40" height="14" rx="7" fill="#E9A857" />
          <circle cx="30" cy="57" r="12" fill="#F4C542" />
          <circle cx="70" cy="57" r="12" fill="#C94232" />
          <rect x="46" y="30" width="8" height="26" rx="3" fill="#7A351F" />
        </svg>
      );
  }
}

export default function GameCard({
  kind,
  title,
  text,
  index,
}: {
  kind: GameKind;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-kasavu p-6 shadow-soft ring-1 ring-onam-orange/10 transition-shadow hover:shadow-lift"
    >
      <div className="pointer-events-none absolute -right-3 -top-3 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Marigold className="h-full w-full animate-floatSlow" />
      </div>
      <motion.div
        className="mb-4 flex h-24 w-24 items-center justify-center rounded-3xl bg-gold/15"
        whileHover={{ rotate: 6, scale: 1.05 }}
      >
        <GameIcon kind={kind} />
      </motion.div>
      <h3 className="font-display text-xl font-bold text-kerala-green">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-warm-brown/90">{text}</p>
    </motion.div>
  );
}
