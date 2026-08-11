"use client";

import { motion } from "framer-motion";
import Maveli from "./Maveli";
import FlowerParticles from "./FlowerParticles";

export default function MaveliSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-onam-orange/90 via-onam-red/80 to-deep-green py-28">
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <FlowerParticles count={10} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-extrabold text-ivory drop-shadow-lg sm:text-6xl"
        >
          WHEN MAVELI RETURNS&hellip;
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="my-10"
        >
          <Maveli size="lg" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-lg italic leading-relaxed text-ivory/95 sm:text-xl"
        >
          &ldquo;Legend tells us that King Mahabali returns every year to see
          his people celebrating together.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
