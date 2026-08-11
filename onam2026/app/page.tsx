"use client";

import { useState } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutOnam from "@/components/AboutOnam";
import EventInfo from "@/components/EventInfo";
import Countdown from "@/components/Countdown";
import GamesSection from "@/components/GamesSection";
import CulturalPrograms from "@/components/CulturalPrograms";
import MaveliSection from "@/components/MaveliSection";
import ChiefGuests from "@/components/ChiefGuests";
import Gallery from "@/components/Gallery";
import EventPhotos from "@/components/EventPhotos";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import FlowerCursor from "@/components/FlowerCursor";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative">
      <FlowerCursor />
      <OpeningScreen onEnter={() => setEntered(true)} />

      {entered && (
        <>
          <Navbar />
          <Hero />
          <AboutOnam />
          <EventInfo />
          <Countdown />
          <GamesSection />
          <CulturalPrograms />
          <MaveliSection />
          <ChiefGuests />
          <Gallery />
          <EventPhotos />
          <Location />
          <Contact />
          <Footer />
          <MusicPlayer shouldStart={entered} />
        </>
      )}
    </main>
  );
}
