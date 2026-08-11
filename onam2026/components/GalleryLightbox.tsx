"use client";

import { useEffect, type TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, images.length, onClose, onNavigate]);

  let touchStartX = 0;
  function onTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  function onTouchEnd(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (index === null) return;
    if (delta > 50) onNavigate((index - 1 + images.length) % images.length);
    if (delta < -50) onNavigate((index + 1) % images.length);
  }

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-warm-brown/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-ivory/90 text-warm-brown shadow-soft"
          >
            <X size={22} />
          </button>

          <button
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-warm-brown shadow-soft sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.img
            key={images[index]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={images[index]}
            alt={`Onam celebration photo ${index + 1}`}
            className="max-h-[80vh] max-w-[88vw] rounded-2xl object-contain shadow-lift"
          />

          <button
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-warm-brown shadow-soft sm:right-8"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
