"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CivixIcon } from "../Icons";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-[#F7F4EF]/80 backdrop-blur-md border-b border-neutral-200/30"
    >
      <Link href="/" className="flex items-center group">
        <div className="pl-4">
          <CivixIcon size={50} />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-[14px] font-medium text-neutral-600 hover:text-black transition-colors">How it works</Link>
        <Link href="#" className="text-[14px] font-medium text-neutral-600 hover:text-black transition-colors">Resources</Link>
        <Link href="#" className="text-[14px] font-medium text-neutral-600 hover:text-black transition-colors">About</Link>
      </div>

      <Link
        href="/assistant"
        className="px-5 py-2.5 rounded-full bg-black text-white text-[13px] font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.97] shadow-md"
      >
        Get Started
      </Link>
    </motion.nav>
  );
}
