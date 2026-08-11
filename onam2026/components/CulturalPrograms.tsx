"use client";

import { motion } from "framer-motion";
import Maveli from "./Maveli";
import { TraditionalLamp, Marigold } from "./DecorativeElements";

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
  {
    title: "ATHAPOO COMPETITION",
    desc: "A large, colorful, layered Pookalam competition open to all ages.",
    art: (
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94top%20view%203d%20multicolored%20onam_22543448.png-GaprQlKkWi8Ys4UOv2nqcfys5T4PiA.png"
        alt="Colorful Athapookolam flower arrangement"
        className="h-40 w-40 object-contain"
      />
    ),
  },
  {
    title: "DANCE PROGRAM",
    desc: "Stylized performers in Kerala-inspired dress light up the stage.",
    art: (
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94graceful%203d%20mohiniyattam%20dancer%20in_22543432.png-bVvufWoT4W8wOd3kEP0hogwb3LJDs2.png"
        alt="Mohiniyattam dancer in traditional Kerala attire"
        className="h-40 w-40 object-contain"
      />
    ),
  },
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
