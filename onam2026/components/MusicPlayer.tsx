"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music2 } from "lucide-react";

const YT_VIDEO_ID = "Gw_RurnCslM";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlayer({ shouldStart }: { shouldStart: boolean }) {
  const playerRef = useRef<any>(null);
  const containerId = "onam-yt-player";
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    function createPlayer() {
      playerRef.current = new window.YT.Player(containerId, {
        videoId: YT_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            e.target.playVideo();
            setPlaying(true);
          },
          onStateChange: (e: any) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  }, [shouldStart]);

  function togglePlay() {
    if (!playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }

  function toggleMute() {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  }

  if (!shouldStart) return null;

  return (
    <>
      <div id={containerId} className="pointer-events-none fixed -bottom-full h-0 w-0 opacity-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-ivory/95 px-3 py-2 shadow-lift ring-1 ring-onam-orange/15 backdrop-blur"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-festive-yellow to-onam-orange text-white">
          <Music2 size={15} />
        </div>
        <span className="hidden font-display text-xs font-bold text-kerala-green sm:inline">
          ♫ ONAM MUSIC
        </span>

        {/* animated equalizer */}
        <div className="flex h-4 items-end gap-0.5" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="w-0.5 rounded-full bg-onam-orange"
              animate={
                playing
                  ? { height: ["30%", "100%", "50%", "80%", "30%"] }
                  : { height: "20%" }
              }
              transition={{
                duration: 1.1,
                repeat: playing ? Infinity : 0,
                delay: i * 0.12,
              }}
            />
          ))}
        </div>

        <button
          onClick={togglePlay}
          disabled={!ready}
          aria-label={playing ? "Pause music" : "Play music"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-kerala-green text-white disabled:opacity-50"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <button
          onClick={toggleMute}
          disabled={!ready}
          aria-label={muted ? "Unmute music" : "Mute music"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-kerala-green ring-1 ring-kerala-green/20 disabled:opacity-50"
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </motion.div>
    </>
  );
}
