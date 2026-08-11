"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Organizer workflow: add event-day photography to /public/images/events/
// using these filenames, or edit the list below. Uses next/image for
// automatic optimization; sizing is responsive, not hard-coded.
const EVENT_FILES = [
  "/images/events/event01.jpg",
  "/images/events/event02.jpg",
  "/images/events/event03.jpg",
];

function EventPhoto({ src, index }: { src: string; index: number }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-kasavu to-gold/30 text-sm font-semibold text-warm-brown/60">
        Event photo coming soon
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft ring-1 ring-onam-orange/10">
      <Image
        src={src}
        alt={`Onam 2026 event photography ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function EventPhotos() {
  return (
    <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
      {EVENT_FILES.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <EventPhoto src={src} index={i} />
        </motion.div>
      ))}
    </div>
  );
}
