"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingIntro } from "../components/landing/LoadingIntro";
import { Navbar } from "../components/landing/Navbar";
import Link from "next/link";

export default function LandingPage() {
  const [showUI, setShowUI] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F7F4EF] text-neutral-900 overflow-hidden">
      {/* Intro Sequence */}
      <LoadingIntro onComplete={() => setShowUI(true)} />

      {/* Main Landing UI */}
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 flex flex-col min-h-screen grid-background"
          >
            <Navbar />

            {/* Hero Section - Exact Match to Reference Snippet */}
            <section className="flex-1 flex flex-col items-center justify-center px-6">
              <motion.div
                initial={{ scale: 0.98, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center gap-12"
              >
                {/* Logo and Wordmark Container */}
                <div className="flex items-center" role="img" aria-label="Civix logo" style={{ gap: "18px" }}>
                  <svg width="80" height="102" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8.38886 9.71168C10.2463 9.56689 12.2436 9.7746 14.0823 9.65765C18.2 9.39577 22.1049 10.9269 24.0009 14.843C27.4057 21.8753 21.4822 27.5044 15.6511 30.3952C12.1672 31.8742 12.3904 31.7841 12.5397 28.343C9.20837 28.356 6.54303 28.5678 3.67828 26.3915C1.68021 24.8793 0.380251 22.6224 0.0749447 20.1358C-0.241472 17.6784 0.452399 15.1977 1.99813 13.2607C3.60243 11.2134 5.83051 10.0322 8.38886 9.71168Z" fill="#FE3DD5"></path>
                    <path d="M15.9902 15.4456C18.3293 15.3138 18.8161 17.1756 18.7247 19.1468C18.6478 20.8069 18.4887 21.7284 16.9339 22.4167C13.8368 22.5424 13.9538 18.9991 14.5592 16.8394C14.7695 16.0894 15.3236 15.7584 15.9902 15.4456Z" fill="#FBFAF9"></path>
                    <path d="M8.01994 15.4527C11.1246 15.2444 11.0341 18.8467 10.4598 20.9794C10.2435 21.7826 9.6761 22.1012 8.96975 22.4261C5.84152 22.5093 5.99801 18.9931 6.60602 16.7776C6.80023 16.0701 7.39177 15.7358 8.01994 15.4527Z" fill="#FBFAF9"></path>
                    <path d="M12.2241 0C12.5166 0.046617 12.6272 0.0933736 12.9075 0.195382C13.6912 0.924938 13.5671 4.59863 12.9199 5.44706C12.5165 5.42005 12.4566 5.41566 12.0898 5.24948C11.3387 4.48153 11.4678 0.901353 12.2241 0Z" fill="#FE3DD5"></path>
                    <path d="M3.95646 2.17864C4.10624 2.20346 4.34503 2.27613 4.49987 2.31753C5.35504 3.06313 6.62989 4.9843 6.96331 6.10434C6.87306 6.57229 6.86579 6.45493 6.42127 6.83458L5.98334 6.78248C5.31457 6.3303 3.63717 4.01261 3.46243 3.08342C3.39166 2.70678 3.70972 2.4641 3.95646 2.17864Z" fill="#FE3DD5"></path>
                    <path d="M20.6709 2.06389C21.0805 2.28313 21.3043 2.35374 21.4959 2.78577C21.5907 3.84123 19.7679 5.99549 19.0576 6.94839C17.2831 6.17455 18.5401 5.01283 19.2757 3.85659C19.6479 3.27141 20.2285 2.61685 20.6709 2.06389Z" fill="#FE3DD5"></path>
                  </svg>
                  <span className="civix-wordmark">Civix</span>
                </div>

                {/* Subtext and Action */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-12"
                >
                  <p className="text-[19px] text-neutral-500 font-medium tracking-[-0.02em] max-w-md text-center leading-[1.6]">
                    The interactive election navigation assistant built for modern civic participation.
                  </p>

                  <Link
                    href="/assistant"
                    className="flex items-center justify-center no-underline"
                    style={{
                      width: '154px',
                      height: '48px',
                      backgroundImage: 'linear-gradient(to top, #FE3DD5 0%, #ff5fd9 80%, #ff7eec 100%)',
                      borderRadius: '30px',
                      border: 'none',
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'white',
                      textShadow: 'rgba(0,0,0,0.1) 0px 1px',
                      transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                      boxShadow: '0 4px 6px -1px rgba(254, 61, 213, 0.2), 0 2px 4px -1px rgba(254, 61, 213, 0.1)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(254, 61, 213, 0.3), 0 4px 6px -2px rgba(254, 61, 213, 0.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(254, 61, 213, 0.2), 0 2px 4px -1px rgba(254, 61, 213, 0.1)')}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'scale(0.96)';
                      e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(254, 61, 213, 0.3), 0 4px 6px -2px rgba(254, 61, 213, 0.2)';
                    }}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            {/* Subtle Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
