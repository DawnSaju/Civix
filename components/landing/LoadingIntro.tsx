"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingIntroProps {
  onComplete: () => void;
}

export function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isStarted) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().catch(err => {
      if (err.name !== 'AbortError') {
        // Silent ignore for all media errors
      }
    });

    const handleEnded = () => {
      setIsFinished(true);
      setTimeout(onComplete, 800);
    };

    video.addEventListener("ended", handleEnded);

    const timer = setTimeout(() => {
      if (!isFinished) {
        setIsFinished(true);
        setTimeout(onComplete, 800);
      }
    }, 5500);

    return () => {
      video.removeEventListener("ended", handleEnded);
      clearTimeout(timer);
    };
  }, [isStarted, isFinished, onComplete]);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f1f1ef] overflow-hidden cursor-pointer"
          onClick={!isStarted ? handleStart : undefined}
        >
          {/* Precise Grid Background matching the Cinematic Style */}
          <div
            className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`,
              backgroundSize: '80px 80px',
              backgroundPosition: 'center center',
            }}
          />

          <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center">
            {/* The Video Layer */}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/diljresga/video/upload/v1777819134/videos/Civix_animation_1_fs8qds.mp4"
              playsInline
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isStarted ? 'opacity-100' : 'opacity-0'}`}
            />

            {!isStarted && (
              <motion.div
                className="flex flex-col items-center justify-center pb-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.03, 1]
                }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <svg width="225" height="300" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                  <path d="M8.38886 9.71168C10.2463 9.56689 12.2436 9.7746 14.0823 9.65765C18.2 9.39577 22.1049 10.9269 24.0009 14.843C27.4057 21.8753 21.4822 27.5044 15.6511 30.3952C12.1672 31.8742 12.3904 31.7841 12.5397 28.343C9.20837 28.356 6.54303 28.5678 3.67828 26.3915C1.68021 24.8793 0.380251 22.6224 0.0749447 20.1358C-0.241472 17.6784 0.452399 15.1977 1.99813 13.2607C3.60243 11.2134 5.83051 10.0322 8.38886 9.71168Z" fill="#FE3DD5"></path>
                  <path d="M15.9902 15.4456C18.3293 15.3138 18.8161 17.1756 18.7247 19.1468C18.6478 20.8069 18.4887 21.7284 16.9339 22.4167C13.8368 22.5424 13.9538 18.9991 14.5592 16.8394C14.7695 16.0894 15.3236 15.7584 15.9902 15.4456Z" fill="#FBFAF9"></path>
                  <path d="M8.01994 15.4527C11.1246 15.2444 11.0341 18.8467 10.4598 20.9794C10.2435 21.7826 9.6761 22.1012 8.96975 22.4261C5.84152 22.5093 5.99801 18.9931 6.60602 16.7776C6.80023 16.0701 7.39177 15.7358 8.01994 15.4527Z" fill="#FBFAF9"></path>
                  <path d="M12.2241 0C12.5166 0.046617 12.6272 0.0933736 12.9075 0.195382C13.6912 0.924938 13.5671 4.59863 12.9199 5.44706C12.5165 5.42005 12.4566 5.41566 12.0898 5.24948C11.3387 4.48153 11.4678 0.901353 12.2241 0Z" fill="#FE3DD5"></path>
                  <path d="M3.95646 2.17864C4.10624 2.20346 4.34503 2.27613 4.49987 2.31753C5.35504 3.06313 6.62989 4.9843 6.96331 6.10434C6.87306 6.57229 6.86579 6.45493 6.42127 6.83458L5.98334 6.78248C5.31457 6.3303 3.63717 4.01261 3.46243 3.08342C3.39166 2.70678 3.70972 2.4641 3.95646 2.17864Z" fill="#FE3DD5"></path>
                  <path d="M20.6709 2.06389C21.0805 2.28313 21.3043 2.35374 21.4959 2.78577C21.5907 3.84123 19.7679 5.99549 19.0576 6.94839C17.2831 6.17455 18.5401 5.01283 19.2757 3.85659C19.6479 3.27141 20.2285 2.61685 20.6709 2.06389Z" fill="#FE3DD5"></path>
                </svg>
              </motion.div>
            )}
          </div>

          {/* Hidden Click Layer */}
          {!isStarted && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="text-[11px] font-bold uppercase tracking-[0.6em] text-black"
              >
                Click to Experience
              </motion.span>
            </div>
          )}

          {isStarted && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFinished(true);
              }}
              className="absolute bottom-10 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors z-30"
            >
              Skip Intro
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
