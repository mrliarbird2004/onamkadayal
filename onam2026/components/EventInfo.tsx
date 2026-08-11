"use client";

import { motion } from "framer-motion";
import { TraditionalLamp } from "./DecorativeElements";

function Card3DIcon({ kind }: { kind: "calendar" | "clock" | "venue" | "lamp" }) {
  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <defs>
          <linearGradient id="cal-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE58A" />
            <stop offset="100%" stopColor="#E98A17" />
          </linearGradient>
        </defs>
        <rect x="10" y="18" width="60" height="52" rx="10" fill="url(#cal-g)" />
        <rect x="10" y="18" width="60" height="16" rx="8" fill="#C94232" />
        <rect x="20" y="8" width="6" height="16" rx="3" fill="#7A351F" />
        <rect x="54" y="8" width="6" height="16" rx="3" fill="#7A351F" />
        <text x="40" y="58" textAnchor="middle" fontSize="24" fontWeight="800" fill="#7A351F" fontFamily="sans-serif">
          26
        </text>
      </svg>
    );
  }
  if (kind === "clock") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <defs>
          <radialGradient id="clock-g" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FFF4D6" />
            <stop offset="100%" stopColor="#F4C542" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="42" r="30" fill="url(#clock-g)" stroke="#E98A17" strokeWidth="4" />
        <rect x="16" y="8" width="48" height="8" rx="4" fill="#C94232" />
        <line x1="40" y1="42" x2="40" y2="24" stroke="#7A351F" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="42" x2="54" y2="48" stroke="#7A351F" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="42" r="3.5" fill="#7A351F" />
      </svg>
    );
  }
  if (kind === "venue") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <defs>
          <linearGradient id="pin-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E86B83" />
            <stop offset="100%" stopColor="#C94232" />
          </linearGradient>
        </defs>
        <path d="M40 8 C24 8 12 20 12 36 C12 56 40 74 40 74 C40 74 68 56 68 36 C68 20 56 8 40 8 Z" fill="url(#pin-g)" />
        <circle cx="40" cy="35" r="13" fill="#FFF4D6" />
        <circle cx="40" cy="35" r="7" fill="#F4C542" />
      </svg>
    );
  }
  return <TraditionalLamp className="h-16 w-16" />;
}

const ITEMS = [
  { kind: "calendar" as const, label: "DATE", value: "26 August 2026" },
  { kind: "clock" as const, label: "TIME", value: "8:30 AM – 9:30 PM" },
  { kind: "venue" as const, label: "VENUE", value: "Sree Dharma Sastha Temple, Kadayal" },
  { kind: "lamp" as const, label: "ORGANIZED BY", value: "Beaudouscamper Arts & Sports Welfare Trust" },
];

export default function EventInfo() {
  return (
    <section id="events" className="relative bg-gradient-to-b from-kasavu to-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            THE CELEBRATION
          </h2>
          <div className="mx-auto mt-4 w-24 kasavu-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center rounded-[2rem] bg-ivory p-7 text-center shadow-soft ring-1 ring-onam-orange/10 transition-shadow hover:shadow-lift"
            >
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15">
                <Card3DIcon kind={item.kind} />
              </div>
              <p className="font-display text-xs font-bold tracking-widest text-onam-orange">
                {item.label}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-kerala-green">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
