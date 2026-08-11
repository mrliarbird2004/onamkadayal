import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kasavu: "#FFF4D6",
        ivory: "#FFF9EC",
        gold: "#F4C542",
        "festive-yellow": "#FFD84A",
        "onam-orange": "#E98A17",
        "onam-red": "#C94232",
        "festive-pink": "#E86B83",
        "kerala-green": "#168447",
        "deep-green": "#075C3A",
        "warm-brown": "#7A351F",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -8px rgba(122, 53, 31, 0.25)",
        lift: "0 20px 45px -12px rgba(7, 92, 58, 0.35)",
        capsule: "0 6px 0 0 rgba(122, 53, 31, 0.25)",
        glow: "0 0 40px rgba(244, 197, 66, 0.45)",
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 45% 55% 55%",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "45%": { opacity: "0.85", transform: "scaleY(0.96)" },
          "60%": { opacity: "0.95", transform: "scaleY(1.02)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(40px) rotate(180deg)", opacity: "0.4" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        flicker: "flicker 2.4s ease-in-out infinite",
        breathe: "breathe 5s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite",
        petalFall: "petalFall 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
