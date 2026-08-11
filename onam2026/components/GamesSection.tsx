"use client";

import { motion } from "framer-motion";
import GameCard, { GameKind } from "./GameCard";

const GAMES: { kind: GameKind; title: string; text: string }[] = [
  { kind: "cricket", title: "Cricket", text: "Bring your team and your Onam spirit." },
  { kind: "chess", title: "Chess", text: "Strategy meets celebration." },
  { kind: "carrom", title: "Carrom", text: "A classic game for everyone." },
  { kind: "marathon", title: "Marathon", text: "Run together. Celebrate together." },
  { kind: "children", title: "Games for Children", text: "Fun-filled activities for our little champions." },
  { kind: "adults", title: "Games for Adults", text: "Onam fun has no age limit." },
];

export default function GamesSection() {
  return (
    <section className="relative bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            LET THE GAMES BEGIN
          </h2>
          <p className="mt-3 text-lg text-warm-brown/80">
            Fun, friendship and a little friendly competition.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g, i) => (
            <GameCard key={g.kind} kind={g.kind} title={g.title} text={g.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
