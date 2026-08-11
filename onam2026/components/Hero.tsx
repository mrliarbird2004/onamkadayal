"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Maveli from "./Maveli";
import { BananaLeaf, TraditionalLamp, Marigold } from "./DecorativeElements";
import FlowerParticles from "./FlowerParticles";

const MAPS_URL = "https://maps.app.goo.gl/PqFFMzVD9saSpXez5";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF9EC] via-[#FFF4D6] to-[#FCE6A8] pt-28 pb-16"
    >
      {/* background: sky + greenery */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="absolute -left-16 bottom-0 w-56 opacity-70 sm:w-72">
          <BananaLeaf className="w-full h-auto animate-sway" />
        </div>
        <div className="absolute -right-16 bottom-0 w-56 opacity-70 sm:w-72">
          <BananaLeaf className="w-full h-auto animate-sway" flip />
        </div>
      </motion.div>

      {/* middle: temple silhouette */}
      <motion.div style={{ y: midY }} className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <svg viewBox="0 0 800 220" className="w-full max-w-4xl opacity-90">
          <defs>
            <linearGradient id="templeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E98A17" />
              <stop offset="100%" stopColor="#C94232" />
            </linearGradient>
          </defs>
          <path d="M400 20 L440 70 L360 70 Z" fill="url(#templeGrad)" />
          <rect x="370" y="70" width="60" height="90" fill="#F4C542" opacity="0.85" />
          <rect x="250" y="120" width="80" height="70" fill="#E98A17" opacity="0.7" />
          <rect x="470" y="120" width="80" height="70" fill="#E98A17" opacity="0.7" />
          <rect x="150" y="150" width="70" height="60" fill="#C94232" opacity="0.55" />
          <rect x="580" y="150" width="70" height="60" fill="#C94232" opacity="0.55" />
        </svg>
      </motion.div>

      <FlowerParticles count={12} className="z-10" />

      {/* foreground content */}
      <motion.div style={{ y: fgY }} className="relative z-20 flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3 flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-deep-green ring-1 ring-kerala-green/20"
        >
          <Sparkles size={14} className="text-onam-orange" />
          Beaudouscamper Arts &amp; Sports Welfare Trust
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-7xl font-extrabold leading-none text-kerala-green text-shadow-onam sm:text-8xl md:text-9xl"
        >
          ONAM <span className="text-onam-orange">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 max-w-xl font-display text-xl font-semibold text-warm-brown sm:text-2xl"
        >
          Together in Tradition. United in Celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5"
        >
          <Maveli size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 flex flex-col items-center gap-1 font-body text-warm-brown"
        >
          <p className="text-lg font-bold sm:text-xl">26 AUGUST 2026 &middot; 8:30 AM &ndash; 9:30 PM</p>
          <p className="flex items-center gap-1 text-sm font-semibold text-kerala-green sm:text-base">
            <MapPin size={16} /> Sree Dharma Sastha Temple, Kadayal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-gradient-to-b from-festive-yellow to-onam-orange px-8 py-3.5 font-display font-bold text-white shadow-soft ring-2 ring-white/40 transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            VIEW CELEBRATION
          </button>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-ivory px-8 py-3.5 font-display font-bold text-kerala-green shadow-soft ring-2 ring-kerala-green/20 transition-transform hover:-translate-y-0.5"
          >
            <MapPin size={18} /> GET DIRECTIONS
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-6 hidden w-10 sm:block">
        <TraditionalLamp className="w-full h-auto" />
      </div>
      <div className="absolute bottom-10 right-8 hidden w-8 sm:block">
        <Marigold className="w-full h-auto animate-floatSlow" />
      </div>
    </section>
  );
}
