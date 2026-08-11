"use client";

import { motion } from "framer-motion";
import Maveli from "./Maveli";
import Pookalam from "./Pookalam";
import { TraditionalLamp, Marigold } from "./DecorativeElements";

function DancerIllustration() {
  return (
    <svg viewBox="0 0 160 200" className="h-40 w-auto">
      <defs>
        <linearGradient id="dancer-skirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E86B83" />
          <stop offset="100%" stopColor="#C94232" />
        </linearGradient>
      </defs>
      <path d="M55 90 C30 130 20 170 30 190 L130 190 C140 170 130 130 105 90 Z" fill="url(#dancer-skirt)" />
      <path d="M60 90 L100 90 L110 190 L50 190 Z" fill="#FFF4D6" opacity="0.5" />
      <circle cx="80" cy="55" r="26" fill="#F2B98A" />
      <path d="M56 45 C56 25 104 25 104 45 C104 35 56 35 56 45 Z" fill="#3A2A1A" />
      <path d="M60 130 C40 140 30 160 35 180" stroke="#F2B98A" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M100 130 C120 140 130 160 125 180" stroke="#F2B98A" strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="30" r="6" fill="#F4C542" />
      <ellipse cx="80" cy="90" rx="34" ry="10" fill="#F4C542" />
    </svg>
  );
}

function RoadShowScene() {
  return (
    <div className="relative flex h-40 items-end justify-center">
      <div className="absolute bottom-0 left-2 w-10 opacity-70">
        <Marigold className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 right-2 w-10 opacity-70">
        <Marigold className="w-full h-auto" color="#E86B83" />
      </div>
      <Maveli size="sm" />
    </div>
  );
}

const PROGRAMS = [
  { title: "MAHABALI ROAD SHOW", desc: "Maveli walks through a decorated Kerala street, greeting every family.", art: <RoadShowScene /> },
  { title: "ATHAPOO COMPETITION", desc: "A large, colorful, layered Pookalam competition open to all ages.", art: <Pookalam interactive={false} className="mx-auto w-40" /> },
  { title: "DANCE PROGRAM", desc: "Stylized performers in Kerala-inspired dress light up the stage.", art: <div className="flex justify-center"><DancerIllustration /></div> },
];

export default function CulturalPrograms() {
  return (
    <section id="cultural" className="relative overflow-hidden bg-gradient-to-b from-ivory to-kasavu py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            THE HEART OF ONAM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col items-center rounded-[2.5rem] bg-ivory p-8 text-center shadow-soft ring-1 ring-onam-orange/10"
            >
              <div className="absolute -top-4 w-10">
                <TraditionalLamp className="w-full h-auto" />
              </div>
              <div className="mt-6">{p.art}</div>
              <h3 className="mt-5 font-display text-xl font-bold text-kerala-green">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-brown/90">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
