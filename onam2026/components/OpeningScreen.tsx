"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Maveli from "./Maveli";
import Pookalam from "./Pookalam";
import { BananaLeaf, TraditionalLamp } from "./DecorativeElements";
import FlowerParticles from "./FlowerParticles";

export default function OpeningScreen({ onEnter }: { onEnter: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [bursting, setBursting] = useState(false);

  function handleEnter() {
    setBursting(true);
    setTimeout(() => setExiting(true), 550);
    setTimeout(() => onEnter(), 1250);
  }

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF4D6] via-[#FFE9B8] to-[#F7D98A]"
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* backdrop greenery */}
          <div className="absolute -left-10 bottom-0 w-40 opacity-80 sm:w-56">
            <BananaLeaf className="w-full h-auto animate-sway" />
          </div>
          <div className="absolute -right-10 bottom-0 w-40 opacity-80 sm:w-56">
            <BananaLeaf className="w-full h-auto animate-sway" flip />
          </div>
          <div className="absolute inset-0 bg-radial-gold" />
          <FlowerParticles count={10} />

          {/* sun glow */}
          <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-gold/60 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mb-2 text-center"
          >
            <p className="font-display text-sm font-semibold tracking-[0.3em] text-deep-green sm:text-base">
              BEAUDOUSCAMPER ARTS &amp; SPORTS WELFARE TRUST
            </p>
            <p className="mt-1 font-display text-xs font-semibold tracking-[0.4em] text-onam-orange">
              PRESENTS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: bursting ? 1.06 : 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative z-10 text-center"
          >
            <h1 className="font-display text-6xl font-extrabold leading-none text-kerala-green text-shadow-onam sm:text-8xl">
              ONAM <span className="text-onam-orange">2026</span>
            </h1>
          </motion.div>

          {/* Maveli + Pookalam scene */}
          <div className="relative z-10 mt-4 flex w-full max-w-3xl items-end justify-center">
            <motion.div
              className="absolute bottom-0 w-40 sm:w-52"
              animate={bursting ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Pookalam interactive={false} />
            </motion.div>
            <motion.div
              animate={bursting ? { x: -30, y: -10 } : { x: 0, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Maveli size="md" />
            </motion.div>
            <div className="absolute -right-2 bottom-6 hidden w-10 sm:block">
              <TraditionalLamp className="w-full h-auto" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 mt-2 text-center font-body text-warm-brown"
          >
            <p className="text-lg font-bold sm:text-xl">26 AUGUST 2026</p>
            <p className="text-sm sm:text-base">8:30 AM &ndash; 9:30 PM</p>
            <p className="mt-1 text-sm font-semibold text-kerala-green sm:text-base">
              SREE DHARMA SASTHA TEMPLE, KADAYAL
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95, y: 2 }}
            onClick={handleEnter}
            className="relative z-10 mt-8 rounded-full bg-gradient-to-b from-festive-yellow to-onam-orange px-10 py-4 font-display text-lg font-bold text-white shadow-soft ring-4 ring-white/40 transition-shadow hover:shadow-glow sm:text-xl"
          >
            ENTER THE CELEBRATION
          </motion.button>

          {/* burst flowers */}
          <AnimatePresence>
            {bursting && (
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (360 / 18) * i;
                  const distance = 260 + Math.random() * 140;
                  return (
                    <motion.div
                      key={i}
                      className="absolute h-4 w-4 rounded-full"
                      style={{
                        background: ["#F4C542", "#E98A17", "#C94232", "#E86B83", "#FFD84A"][i % 5],
                      }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
                      animate={{
                        x: Math.cos((angle * Math.PI) / 180) * distance,
                        y: Math.sin((angle * Math.PI) / 180) * distance,
                        opacity: 0,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
