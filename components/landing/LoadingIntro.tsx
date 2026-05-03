"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingIntroProps {
  onComplete: () => void;
}

export function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsFinished(true);
      // Small delay before notifying parent to allow for a smooth fade
      setTimeout(onComplete, 800);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onComplete]);

  // Fallback timer in case video fails to load or play
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFinished) {
        setIsFinished(true);
        setTimeout(onComplete, 800);
      }
    }, 4500); // Animation duration is roughly 3-4s

    return () => clearTimeout(timer);
  }, [isFinished, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f1f1ef] overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0 opacity-100 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1672' height='941' viewBox='0 0 1672 941' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='-29.5' width='1671' height='85' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='56.5' width='1671' height='116' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='173.5' width='1671' height='121' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='294.5' width='1671' height='120' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='415.5' width='1671' height='116' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='532.5' width='1671' height='126' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='0.5' y='657.5' width='1671' height='124' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='2.5' y='782.5' width='1671' height='128' stroke='black' stroke-opacity='0.05'/%3E%3Crect x='-21.0569' y='940.484' width='968.936' height='155.814' transform='rotate(-90 -21.0569 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='135.789' y='940.484' width='968.936' height='213.599' transform='rotate(-90 135.789 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='350.42' y='940.484' width='968.936' height='221.854' transform='rotate(-90 350.42 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='571.243' y='940.484' width='968.936' height='219.791' transform='rotate(-90 571.243 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='792.065' y='940.484' width='968.936' height='213.599' transform='rotate(-90 792.065 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='1006.7' y='940.484' width='968.936' height='231.141' transform='rotate(-90 1006.7 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='1234.74' y='940.484' width='968.936' height='227.014' transform='rotate(-90 1234.74 940.484)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3Crect x='1462.79' y='939.452' width='968.936' height='235.269' transform='rotate(-90 1462.79 939.452)' stroke='black' stroke-opacity='0.05' stroke-width='1.03188'/%3E%3C/svg%3E")`,
              backgroundSize: '1024px auto',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10 w-full max-w-5xl aspect-video flex items-center justify-center">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/diljresga/video/upload/v1777819134/videos/Civix_animation_1_fs8qds.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          {/* Subtle Skip Hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            whileHover={{ opacity: 0.8 }}
            onClick={() => setIsFinished(true)}
            className="absolute bottom-10 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors"
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
