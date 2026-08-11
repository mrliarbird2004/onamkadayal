"use client";

import { motion } from "framer-motion";
import { Marigold, TraditionalLamp, JasmineCluster } from "./DecorativeElements";
import Pookalam from "./Pookalam";

export default function AboutOnam() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24">
      <div className="absolute left-0 top-10 w-16 opacity-70 sm:w-24">
        <Marigold className="w-full h-auto animate-floatSlow" />
      </div>
      <div className="absolute right-6 top-32 w-10 opacity-70 sm:w-16">
        <Marigold className="w-full h-auto animate-floatSlow" color="#E86B83" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-display text-sm font-bold uppercase tracking-widest text-onam-orange">
            The Spirit of
          </span>
          <h2 className="mt-1 font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            THE SPIRIT OF ONAM
          </h2>
          <div className="mt-4 w-24 kasavu-border" />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-warm-brown">
            Onam is a celebration of togetherness, joy and abundance. It brings
            families and communities together through flowers, traditional
            food, games, music, dance and cherished cultural traditions.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-warm-brown">
            This Onam, <span className="font-bold text-kerala-green">Beaudouscamper Arts and Sports
            Welfare Trust</span> invites everyone to come together and
            celebrate the spirit of unity, friendship and happiness.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10">
              <TraditionalLamp className="w-full h-auto" />
            </div>
            <JasmineCluster className="h-8 w-32 opacity-80" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-sm"
        >
          <Pookalam />
        </motion.div>
      </div>
    </section>
  );
}
