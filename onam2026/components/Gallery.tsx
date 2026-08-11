"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ImageOff } from "lucide-react";
import GalleryLightbox from "./GalleryLightbox";
import { Marigold } from "./DecorativeElements";

// Organizer workflow: drop real photos into /public/images/gallery/ using
// these exact filenames (photo01.jpg ... photo08.jpg), or edit this list.
// Any filename that fails to load falls back to a decorative placeholder
// card automatically, so the gallery never breaks before real photos exist.
const GALLERY_FILES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.16%20AM%20%281%29-yOpVpvYuTqYOHhOaz7mjcZyhGJKaBa.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.16%20AM%20%283%29-HDDZvQ4dFjGw5lADRoOssArDV5lx5v.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%204.22.41%20PM-oJccsIwUdJpuest3BDKuTrRMkbKo0K.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.17%20AM%20%281%29-ArMZrFADyS5qZ6yLmg3PWDJeTTmVhf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.15%20AM%20%281%29-IF1F7oapbSK6LIsdCNDYJHjLOvxrkA.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%204.10.52%20PM-DZUp3YNJBRCPl0QLsmPJ9HcwjjgNSV.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.17%20AM-rONAYU0is7Zx8EZxVRE5of7so1G6nQ.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-11%20at%208.02.16%20AM-LRL1o9xKhBIPgC39g9hl1EYuOyBZYW.jpeg",
];

const ROTATIONS = ["-rotate-3", "rotate-2", "rotate-1", "-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-2"];

function PhotoFrame({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: () => void;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      onClick={onOpen}
      className={`relative aspect-square overflow-hidden rounded-2xl bg-ivory p-2 shadow-soft ring-1 ring-onam-orange/10 transition-transform ${ROTATIONS[index % ROTATIONS.length]}`}
      aria-label={`Open photo ${index + 1} in fullscreen`}
    >
      {!errored ? (
        // Organizer photos are plain static files, not Next/Image-optimized,
        // so a missing file degrades gracefully via onError instead of a 404 crash.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`Onam celebration memory ${index + 1}`}
          className="h-full w-full rounded-xl object-cover"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-gold/25 to-onam-orange/25 text-onam-orange">
          <ImageOff size={28} />
          <span className="px-2 text-center text-[10px] font-semibold text-warm-brown/70">
            Photo coming soon
          </span>
        </div>
      )}
    </motion.button>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-ivory py-24">
      <div className="absolute left-6 top-10 w-12 opacity-60">
        <Marigold className="w-full h-auto animate-floatSlow" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2 text-onam-orange">
            <Camera size={20} />
          </div>
          <h2 className="font-display text-5xl font-extrabold text-kerala-green sm:text-6xl">
            MEMORIES OF ONAM
          </h2>
          <p className="mt-3 text-lg text-warm-brown/80">Moments that become memories.</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {GALLERY_FILES.map((src, i) => (
            <PhotoFrame key={src} src={src} index={i} onOpen={() => setLightboxIndex(i)} />
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={GALLERY_FILES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </section>
  );
}
