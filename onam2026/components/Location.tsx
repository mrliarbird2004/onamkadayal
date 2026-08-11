"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { BananaLeaf, TraditionalLamp, Marigold } from "./DecorativeElements";

const MAPS_URL = "https://maps.app.goo.gl/PqFFMzVD9saSpXez5";

export default function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-gradient-to-b from-kasavu to-ivory py-24">
      <div className="absolute -left-10 bottom-0 w-40 opacity-60 sm:w-56">
        <BananaLeaf className="w-full h-auto animate-sway" />
      </div>
      <div className="absolute -right-10 bottom-0 w-40 opacity-60 sm:w-56">
        <BananaLeaf className="w-full h-auto animate-sway" flip />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl"
        >
          COME CELEBRATE WITH US
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-10 flex max-w-2xl flex-col items-center rounded-[2.5rem] bg-ivory p-10 shadow-lift ring-1 ring-onam-orange/10"
        >
          <div className="absolute -top-8 w-14">
            <TraditionalLamp className="w-full h-auto" />
          </div>
          <svg viewBox="0 0 200 140" className="mb-4 w-40">
            <defs>
              <linearGradient id="loc-temple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F4C542" />
                <stop offset="100%" stopColor="#C94232" />
              </linearGradient>
            </defs>
            <path d="M100 10 L125 45 L75 45 Z" fill="url(#loc-temple)" />
            <rect x="80" y="45" width="40" height="55" fill="#E98A17" />
            <rect x="55" y="75" width="25" height="25" fill="#F4C542" opacity="0.85" />
            <rect x="120" y="75" width="25" height="25" fill="#F4C542" opacity="0.85" />
            <rect x="60" y="100" width="80" height="10" fill="#7A351F" opacity="0.5" />
          </svg>

          <p className="font-display text-2xl font-bold text-kerala-green">
            SREE DHARMA SASTHA TEMPLE
          </p>
          <p className="font-display text-lg font-semibold text-onam-orange">KADAYAL</p>

          <div className="mt-4 flex flex-col items-center gap-1 text-warm-brown">
            <p className="font-semibold">26 August 2026</p>
            <p>8:30 AM &ndash; 9:30 PM</p>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex items-center gap-2 rounded-full bg-gradient-to-b from-festive-yellow to-onam-orange px-8 py-3.5 font-display font-bold text-white shadow-soft ring-2 ring-white/40 transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Navigation size={18} /> GET DIRECTIONS
          </a>

          <div className="absolute -right-5 -top-5 w-9 opacity-80">
            <Marigold className="w-full h-auto animate-floatSlow" />
          </div>
        </motion.div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-warm-brown/70">
          <MapPin size={14} /> Tap &ldquo;Get Directions&rdquo; to open the location in Google Maps
        </p>
      </div>
    </section>
  );
}
