"use client";

import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

const PHONES = ["9442079648", "9487827197"];
const INSTAGRAM_URL = "https://www.instagram.com/sreedharmasastha_kadayal";

export default function Contact() {
  return (
    <section className="relative bg-ivory py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl"
        >
          JOIN THE CELEBRATION
        </motion.h2>
        <p className="mt-3 font-display text-lg font-bold tracking-wide text-onam-orange">
          BEAUDOUSCAMPER ARTS &amp; SPORTS WELFARE TRUST
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {PHONES.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-kasavu px-6 py-3.5 font-display font-bold text-kerala-green shadow-soft ring-1 ring-kerala-green/15 transition-transform hover:-translate-y-0.5"
            >
              <Phone size={17} /> {phone}
            </a>
          ))}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-tr from-onam-red via-onam-orange to-festive-pink px-6 py-3.5 font-display font-bold text-white shadow-soft ring-2 ring-white/40 transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Instagram size={17} /> @sreedharmasastha_kadayal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
