"use client";

import { motion } from "framer-motion";

/**
 * A tasteful, stylized 3D-look illustration of King Mahabali (Maveli),
 * built entirely from layered SVG shapes, gradients and highlights so it
 * reads as a friendly, dimensional animated-film character rather than a
 * flat icon. This is a placeholder for a true rendered 3D asset — drop a
 * PNG/WebP into /public/images/maveli/ and swap the <MaveliArt /> usage
 * for an <Image /> when real artwork is ready; the surrounding motion
 * wrapper (idle sway + breathing) can stay the same.
 */

export function MaveliArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="mv-skin" cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#F2B98A" />
          <stop offset="100%" stopColor="#C9895A" />
        </radialGradient>
        <linearGradient id="mv-mundu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF6" />
          <stop offset="100%" stopColor="#F4E9CE" />
        </linearGradient>
        <linearGradient id="mv-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE58A" />
          <stop offset="50%" stopColor="#F4C542" />
          <stop offset="100%" stopColor="#C98A1B" />
        </linearGradient>
        <linearGradient id="mv-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2604A" />
          <stop offset="100%" stopColor="#A93222" />
        </linearGradient>
        <radialGradient id="mv-cheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E86B83" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E86B83" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="200" cy="500" rx="120" ry="16" fill="#7A351F" opacity="0.15" />

      {/* body / mundu */}
      <path
        d="M120 300 C 110 380 100 440 90 495 L 310 495 C 300 440 290 380 280 300 Z"
        fill="url(#mv-mundu)"
      />
      {/* gold kasavu border on mundu */}
      <path
        d="M96 470 L304 470 L310 495 L90 495 Z"
        fill="url(#mv-gold)"
      />
      {/* red/gold waist cloth */}
      <path
        d="M115 295 C 150 330 250 330 285 295 L 275 350 C 240 370 160 370 125 350 Z"
        fill="url(#mv-red)"
      />
      <circle cx="200" cy="320" r="20" fill="url(#mv-gold)" />
      <circle cx="200" cy="320" r="20" fill="none" stroke="#7A351F" strokeOpacity="0.2" strokeWidth="2" />

      {/* torso */}
      <path d="M140 190 C 135 240 130 270 130 300 L 270 300 C 270 270 265 240 260 190 Z" fill="url(#mv-skin)" />
      {/* gold ornament necklace */}
      <path d="M150 200 Q200 230 250 200" stroke="url(#mv-gold)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M160 215 Q200 240 240 215" stroke="url(#mv-gold)" strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* shawl */}
      <path
        d="M130 195 C 90 230 80 300 100 360 C 108 320 118 260 140 205 Z"
        fill="url(#mv-red)"
        opacity="0.92"
      />
      <path
        d="M270 195 C 310 230 320 300 300 360 C 292 320 282 260 260 205 Z"
        fill="url(#mv-red)"
        opacity="0.92"
      />

      {/* arms */}
      <path d="M138 205 C 105 220 90 260 96 300 C 106 300 118 292 124 275 C 118 250 128 220 145 208 Z" fill="url(#mv-skin)" />
      <path d="M262 205 C 295 220 310 260 304 300 C 294 300 282 292 276 275 C 282 250 272 220 255 208 Z" fill="url(#mv-skin)" />
      {/* gold armlets */}
      <ellipse cx="107" cy="262" rx="10" ry="14" fill="url(#mv-gold)" />
      <ellipse cx="293" cy="262" rx="10" ry="14" fill="url(#mv-gold)" />

      {/* neck */}
      <rect x="182" y="150" width="36" height="45" fill="url(#mv-skin)" />

      {/* head */}
      <ellipse cx="200" cy="115" rx="62" ry="66" fill="url(#mv-skin)" />
      {/* cheeks */}
      <ellipse cx="165" cy="130" rx="16" ry="10" fill="url(#mv-cheek)" />
      <ellipse cx="235" cy="130" rx="16" ry="10" fill="url(#mv-cheek)" />

      {/* moustache */}
      <path
        d="M160 138 C 175 150 190 152 200 148 C 210 152 225 150 240 138 C 232 158 214 168 200 166 C 186 168 168 158 160 138 Z"
        fill="#3A2A1A"
      />

      {/* eyes - friendly */}
      <path d="M168 108 Q178 100 190 106" stroke="#3A2A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M210 106 Q222 100 232 108" stroke="#3A2A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="180" cy="112" r="3.5" fill="#3A2A1A" />
      <circle cx="220" cy="112" r="3.5" fill="#3A2A1A" />

      {/* eyebrows */}
      <path d="M164 96 Q178 88 194 94" stroke="#3A2A1A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M206 94 Q222 88 236 96" stroke="#3A2A1A" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* smile */}
      <path d="M182 148 Q200 158 218 148" stroke="#7A351F" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* crown */}
      <path
        d="M132 78 L145 30 L172 60 L200 20 L228 60 L255 30 L268 78 C 235 62 165 62 132 78 Z"
        fill="url(#mv-gold)"
        stroke="#B5790F"
        strokeWidth="2"
      />
      <circle cx="145" cy="30" r="7" fill="#C94232" />
      <circle cx="200" cy="20" r="8" fill="#E86B83" />
      <circle cx="255" cy="30" r="7" fill="#C94232" />
      <ellipse cx="200" cy="80" rx="70" ry="14" fill="url(#mv-gold)" />
      <ellipse cx="200" cy="80" rx="70" ry="14" fill="none" stroke="#B5790F" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

export default function Maveli({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = { sm: "w-40 sm:w-52", md: "w-64 sm:w-80", lg: "w-80 sm:w-[26rem]" };
  return (
    <motion.div
      className={`relative ${sizeMap[size]} ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <MaveliArt className="w-full h-auto drop-shadow-[0_25px_35px_rgba(122,53,31,0.35)]" />
    </motion.div>
  );
}
