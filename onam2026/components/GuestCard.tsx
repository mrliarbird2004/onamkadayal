"use client";

import { motion } from "framer-motion";
import { Marigold } from "./DecorativeElements";

export type GuestVariant = "male-formal" | "male-elder" | "male-academic" | "female-athlete";

/**
 * Generic, tasteful stylized 3D-look portrait illustrations. These are
 * NOT likenesses of the real chief guests — no photographs were provided,
 * so each character is an original illustrated placeholder distinguished
 * by hairstyle, pose and attire, sharing the same warm rendering style as
 * the Maveli artwork. Replace with real photography in
 * /public/images/guests/ whenever available.
 */
function GuestPortrait({ variant }: { variant: GuestVariant }) {
  const common = (
    <defs>
      <radialGradient id={`gp-skin-${variant}`} cx="40%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#F2B98A" />
        <stop offset="100%" stopColor="#C9895A" />
      </radialGradient>
    </defs>
  );

  if (variant === "male-formal") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {common}
        <circle cx="100" cy="100" r="100" fill="#FFF4D6" />
        <path d="M55 190 C55 150 70 130 100 130 C130 130 145 150 145 190 Z" fill="#168447" />
        <rect x="90" y="120" width="20" height="24" fill="#F2B98A" />
        <circle cx="100" cy="92" r="42" fill={`url(#gp-skin-${variant})`} />
        <path d="M62 78 Q100 50 138 78 L138 66 Q100 42 62 66 Z" fill="#2A2018" />
        <path d="M78 108 Q100 118 122 108" stroke="#7A351F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="90" r="3" fill="#2A2018" />
        <circle cx="115" cy="90" r="3" fill="#2A2018" />
        <rect x="86" y="128" width="28" height="8" fill="#C94232" />
      </svg>
    );
  }
  if (variant === "male-elder") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {common}
        <circle cx="100" cy="100" r="100" fill="#FFE9C7" />
        <path d="M55 190 C55 150 70 130 100 130 C130 130 145 150 145 190 Z" fill="#7A351F" />
        <rect x="90" y="120" width="20" height="24" fill="#EBC79A" />
        <circle cx="100" cy="92" r="42" fill={`url(#gp-skin-${variant})`} />
        <path d="M64 82 Q100 58 136 82 L134 72 Q100 52 66 72 Z" fill="#E5E5E5" />
        <path d="M76 112 Q100 120 124 112" stroke="#7A351F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M78 105 Q100 112 122 105" fill="#E5E5E5" opacity="0.85" />
        <circle cx="85" cy="90" r="3" fill="#2A2018" />
        <circle cx="115" cy="90" r="3" fill="#2A2018" />
        <rect x="80" y="128" width="40" height="10" rx="3" fill="#F4C542" />
      </svg>
    );
  }
  if (variant === "male-academic") {
    return (
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {common}
        <circle cx="100" cy="100" r="100" fill="#FDEFD9" />
        <path d="M55 190 C55 150 70 130 100 130 C130 130 145 150 145 190 Z" fill="#075C3A" />
        <rect x="90" y="120" width="20" height="24" fill="#EBC79A" />
        <circle cx="100" cy="92" r="42" fill={`url(#gp-skin-${variant})`} />
        <path d="M60 80 Q100 55 140 80 L140 70 Q100 48 60 70 Z" fill="#3A2A1A" />
        <rect x="78" y="82" width="18" height="12" rx="6" fill="none" stroke="#3A2A1A" strokeWidth="2.5" />
        <rect x="104" y="82" width="18" height="12" rx="6" fill="none" stroke="#3A2A1A" strokeWidth="2.5" />
        <line x1="96" y1="88" x2="104" y2="88" stroke="#3A2A1A" strokeWidth="2.5" />
        <path d="M78 112 Q100 120 122 112" stroke="#7A351F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="86" y="128" width="28" height="8" fill="#E98A17" />
      </svg>
    );
  }
  // female-athlete
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      {common}
      <circle cx="100" cy="100" r="100" fill="#FFEAF0" />
      <path d="M55 190 C55 150 70 130 100 130 C130 130 145 150 145 190 Z" fill="#E86B83" />
      <rect x="90" y="120" width="20" height="24" fill="#EBC79A" />
      <circle cx="100" cy="92" r="42" fill={`url(#gp-skin-${variant})`} />
      <path d="M60 90 C58 60 78 44 100 44 C122 44 142 60 140 90 C132 80 132 66 120 60 C112 72 88 72 80 60 C68 66 68 80 60 90 Z" fill="#3A2A1A" />
      <path d="M78 112 Q100 120 122 112" stroke="#7A351F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="85" cy="92" r="3" fill="#2A2018" />
      <circle cx="115" cy="92" r="3" fill="#2A2018" />
      <circle cx="100" cy="42" r="6" fill="#F4C542" />
      <rect x="86" y="128" width="28" height="8" fill="#F4C542" />
    </svg>
  );
}

export default function GuestCard({
  variant,
  name,
  role,
  index,
}: {
  variant: GuestVariant;
  name: string;
  role: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col items-center rounded-[2rem] bg-ivory p-6 text-center shadow-soft ring-1 ring-onam-orange/10 transition-shadow hover:shadow-lift"
    >
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full ring-4 ring-gold/50">
        <GuestPortrait variant={variant} />
      </div>
      <div className="absolute right-4 top-4 w-7 opacity-80">
        <Marigold className="w-full h-auto" />
      </div>
      <h3 className="font-display text-lg font-bold text-kerala-green">{name}</h3>
      <div className="mt-1 space-y-0.5">
        {role.map((line, i) => (
          <p key={i} className="text-xs leading-snug text-warm-brown/85">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
