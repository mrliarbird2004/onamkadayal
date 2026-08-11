"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlowerParticles from "./FlowerParticles";

// Event start: 26 August 2026, 8:30 AM IST (Sree Dharma Sastha Temple, Kadayal is in India).
// IST is UTC+5:30, expressed here as a fixed-offset ISO string so every
// visitor's countdown resolves against the same real-world moment
// regardless of their local timezone.
const EVENT_START = new Date("2026-08-26T08:30:00+05:30").getTime();

function getRemaining() {
  const diff = EVENT_START - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Capsule({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-b from-white to-kasavu font-display text-3xl font-extrabold text-kerala-green shadow-capsule ring-2 ring-gold/40 sm:h-24 sm:w-24 sm:text-4xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 font-display text-xs font-bold uppercase tracking-widest text-warm-brown">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-deep-green py-20">
      <FlowerParticles count={8} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-extrabold text-gold sm:text-5xl"
        >
          COUNTDOWN TO ONAM
        </motion.h2>

        <div className="mt-10 flex items-center justify-center">
          {!mounted || !remaining ? (
            <p className="font-display text-2xl font-bold text-festive-yellow">
              {mounted ? "THE CELEBRATION IS HERE!" : "\u00A0"}
            </p>
          ) : (
            <div className="flex gap-4 sm:gap-8">
              <Capsule value={remaining.days} label="Days" />
              <Capsule value={remaining.hours} label="Hours" />
              <Capsule value={remaining.minutes} label="Minutes" />
              <Capsule value={remaining.seconds} label="Seconds" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
