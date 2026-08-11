"use client";

/**
 * A small library of hand-built SVG "3D-leaning" decorative assets used
 * throughout the site: marigolds, jasmine, banana leaf, traditional lamp,
 * gold ribbon. Kept as pure, styleable components so the same look repeats
 * everywhere the brief calls for it.
 */

export function Marigold({ className = "", color = "#F4C542" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`marigold-${color}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff8e1" stopOpacity="0.9" />
          <stop offset="45%" stopColor={color} />
          <stop offset="100%" stopColor="#c94232" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="28"
          rx="13"
          ry="20"
          fill={`url(#marigold-${color})`}
          transform={`rotate(${i * 36} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="12" fill="#E98A17" />
      <circle cx="50" cy="50" r="12" fill="url(#marigold-center)" opacity="0.5" />
    </svg>
  );
}

export function JasmineCluster({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      {[10, 30, 50, 70, 90, 110].map((cx, i) => (
        <g key={i} transform={`translate(${cx} ${i % 2 === 0 ? 15 : 30})`}>
          {Array.from({ length: 5 }).map((_, p) => (
            <ellipse
              key={p}
              cx="0"
              cy="-6"
              rx="4.5"
              ry="7"
              fill="#FFF9EC"
              stroke="#F4C542"
              strokeWidth="0.5"
              transform={`rotate(${p * 72})`}
            />
          ))}
          <circle r="2.5" fill="#F4C542" />
        </g>
      ))}
    </svg>
  );
}

export function BananaLeaf({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 400"
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E9C5A" />
          <stop offset="55%" stopColor="#168447" />
          <stop offset="100%" stopColor="#075C3A" />
        </linearGradient>
      </defs>
      <path
        d="M100 10 C 40 60, 10 160, 30 260 C 45 330, 80 380, 100 395 C 120 380, 155 330, 170 260 C 190 160, 160 60, 100 10 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M100 20 C 100 130, 100 280, 100 390"
        stroke="#0d6b3b"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M100 ${50 + i * 42} C 70 ${55 + i * 42}, 40 ${60 + i * 42}, 25 ${70 + i * 42}`}
          stroke="#0d6b3b"
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={`r${i}`}
          d={`M100 ${50 + i * 42} C 130 ${55 + i * 42}, 160 ${60 + i * 42}, 175 ${70 + i * 42}`}
          stroke="#0d6b3b"
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
        />
      ))}
    </svg>
  );
}

export function TraditionalLamp({ className = "", lit = true }: { className?: string; lit?: boolean }) {
  return (
    <svg viewBox="0 0 100 160" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lampGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD84A" />
          <stop offset="100%" stopColor="#B5790F" />
        </linearGradient>
      </defs>
      {lit && (
        <g className="animate-flicker" style={{ transformOrigin: "50px 40px" }}>
          <ellipse cx="50" cy="34" rx="7" ry="16" fill="#FFD84A" opacity="0.9" />
          <ellipse cx="50" cy="30" rx="4" ry="10" fill="#FFF4D6" />
        </g>
      )}
      <path d="M35 50 Q50 62 65 50 L60 58 Q50 66 40 58 Z" fill="url(#lampGold)" />
      <path d="M20 62 Q50 80 80 62 L74 72 Q50 88 26 72 Z" fill="url(#lampGold)" />
      <rect x="46" y="72" width="8" height="30" fill="url(#lampGold)" />
      <ellipse cx="50" cy="104" rx="26" ry="8" fill="url(#lampGold)" />
      <path d="M18 112 Q50 130 82 112 L88 122 Q50 144 12 122 Z" fill="url(#lampGold)" />
      <ellipse cx="50" cy="140" rx="16" ry="7" fill="#B5790F" />
    </svg>
  );
}

export function GoldRibbon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 20" className={className} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F4C542" />
          <stop offset="50%" stopColor="#E98A17" />
          <stop offset="100%" stopColor="#F4C542" />
        </linearGradient>
      </defs>
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10"
        stroke="url(#ribbonGrad)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Petal({ className = "", color = "#E86B83" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 28" className={className} aria-hidden="true">
      <path d="M10 0 C 18 6 18 22 10 28 C 2 22 2 6 10 0 Z" fill={color} />
    </svg>
  );
}
