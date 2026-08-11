"use client";

import { motion } from "framer-motion";
import GuestCard, { GuestVariant } from "./GuestCard";

const GUESTS: { variant: GuestVariant; name: string; role: string[] }[] = [
  {
    variant: "male-formal",
    name: "Mr. A. Anand",
    role: [
      "Editor & Publisher (PTS News)",
      "State IT Wing President",
      "(Tamilnadu Press & Media Reporter's Union)",
      "Chennai",
    ],
  },
  {
    variant: "male-elder",
    name: "Mr. V. Asokakumar",
    role: [
      "Rtd. Headmaster & Principal, BVN School",
      "Chaithram, Kunnathukal,",
      "Karakonam P.O.",
    ],
  },
  {
    variant: "male-academic",
    name: "Mr. D. Rajkumar",
    role: ["Wisdom Academy Principal, Kadayal"],
  },
  {
    variant: "female-athlete",
    name: "Miss. M. Sameeha Barvin",
    role: [
      "10th Asia Pacific Deaf Games",
      "Gold and Silver Medalist",
      "2022 Olympics Participant",
    ],
  },
];

export default function ChiefGuests() {
  return (
    <section id="guests" className="relative bg-kasavu py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            OUR CHIEF GUESTS
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-warm-brown/70">
            Illustrated in the spirit of the celebration — not photographic likenesses.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUESTS.map((g, i) => (
            <GuestCard key={g.name} variant={g.variant} name={g.name} role={g.role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
