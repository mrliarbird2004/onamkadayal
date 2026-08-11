"use client";

import { TraditionalLamp, Marigold, BananaLeaf } from "./DecorativeElements";
import Maveli from "./Maveli";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-green pb-10 pt-20 text-ivory">
      <div className="absolute -left-8 bottom-0 w-32 opacity-40 sm:w-44">
        <BananaLeaf className="w-full h-auto" />
      </div>
      <div className="absolute -right-8 bottom-0 w-32 opacity-40 sm:w-44">
        <BananaLeaf className="w-full h-auto" flip />
      </div>
      <div className="absolute left-1/2 top-2 w-8 -translate-x-1/2 opacity-70">
        <Marigold className="w-full h-auto" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Maveli size="sm" />

        <h2 className="mt-4 font-display text-4xl font-extrabold text-gold sm:text-5xl">
          ONAM 2026
        </h2>
        <p className="mt-2 font-body text-ivory/85">
          Celebrating tradition.
          <br />
          Celebrating togetherness.
        </p>

        <div className="my-6 flex items-center gap-4">
          <div className="w-8">
            <TraditionalLamp className="w-full h-auto" />
          </div>
          <div className="h-px w-16 bg-gold/40" />
          <div className="w-8">
            <TraditionalLamp className="w-full h-auto" />
          </div>
        </div>

        <p className="font-display text-sm font-bold tracking-widest text-festive-yellow">
          BEAUDOUSCAMPER ARTS &amp; SPORTS WELFARE TRUST
        </p>
        <p className="mt-2 text-sm text-ivory/75">26 August 2026</p>
        <p className="text-sm text-ivory/75">Sree Dharma Sastha Temple, Kadayal</p>

        <p className="mt-8 text-xs text-ivory/50">
          &copy; 2026 Beaudouscamper Arts &amp; Sports Welfare Trust. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
