"use client";

import { motion } from "framer-motion";

const MAVELI_IMAGE_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maveli-90FCyZQBOKFQI6bUJkWs9gMyAKUi55.png";

export function MaveliArt({ className = "" }: { className?: string }) {
  return (
    <img
      src={MAVELI_IMAGE_URL}
      alt="Maveli, the welcoming King Mahabali, in traditional Kerala attire"
      className={className}
    />
  );
}

export default function Maveli({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = { sm: "w-40 sm:w-52", md: "w-64 sm:w-80", lg: "w-80 sm:w-[26rem]" };
  return (
    <motion.div
      className={`relative ${sizeMap[size]} ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <MaveliArt className="w-full h-auto drop-shadow-[0_25px_35px_rgba(122,53,31,0.35)]" />
    </motion.div>
  );
}
