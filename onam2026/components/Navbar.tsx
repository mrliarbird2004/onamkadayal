"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Marigold } from "./DecorativeElements";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "cultural", label: "Cultural" },
  { id: "guests", label: "Guests" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <a
        href="#home"
        aria-label="Onam 2026 home"
        className="fixed left-4 top-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ivory/90 p-1 shadow-lift ring-1 ring-onam-orange/10 backdrop-blur md:left-6 md:top-5 md:h-16 md:w-16"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZRTn5ycQouqQib1CJlINJ8e5sT5IJF.png"
          alt="Beaudouscamper Arts and Sports Welfare Trust logo"
          className="h-full w-full object-contain mix-blend-screen"
        />
      </a>
      <nav
        className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-ivory/90 px-2 py-2 shadow-lift ring-1 ring-onam-orange/10 backdrop-blur md:flex"
        aria-label="Main navigation"
      >
        {LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => goTo(link.id)}
            className={`relative rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
              active === link.id ? "text-onam-orange" : "text-kerala-green hover:text-onam-orange"
            }`}
          >
            {active === link.id && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-gold/20"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {active === link.id && <Marigold className="h-3.5 w-3.5" />}
              {link.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile */}
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-festive-yellow to-onam-orange text-white shadow-lift"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 top-20 z-50 w-52 rounded-3xl bg-ivory p-3 shadow-lift ring-1 ring-onam-orange/10 md:hidden"
          >
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left font-display text-sm font-semibold ${
                  active === link.id ? "bg-gold/20 text-onam-orange" : "text-kerala-green"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
