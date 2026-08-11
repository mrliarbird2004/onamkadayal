"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Organizer workflow: add event-day photography to /public/images/events/
// using these filenames, or edit the list below. Uses next/image for
// automatic optimization; sizing is responsive, not hard-coded.
const EVENT_FILES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%204.22.40%20PM-1WiklxUnLx9qN03IRa9O9YQDVM0cLh.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.16%20AM%20%283%29-HDDZvQ4dFjGw5lADRoOssArDV5lx5v.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%204.10.51%20PM-FADQEHi1JeQiLJZMEsb5SOUrqA06j4.jpeg",
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
        {/* The uploaded artwork uses black as its backdrop; screen blending lets the page show through it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`Onam 2026 event photography ${index + 1}`}
          className="h-full w-full object-cover"
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
