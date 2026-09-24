"use client";

import { motion } from "framer-motion";

interface OpeningProps {
  onOpen: () => void;
}

export default function Opening({ onOpen }: OpeningProps) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#f7f1e8]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="px-6 text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#8b7355]">
          Together with their families
        </p>

        <h1 className="mt-6 font-serif text-5xl text-[#4b3a2f] md:text-6xl">
          Our Wedding
        </h1>

        <p className="mt-4 text-[#8b7355]">
          You are warmly invited
        </p>

        <button
          onClick={onOpen}
          className="mt-8 rounded-full border border-[#b89b72] px-8 py-3 text-xs tracking-[0.25em] text-[#5c4635] transition-all duration-300 hover:bg-[#b89b72] hover:text-white"
        >
          OPEN INVITATION
        </button>
      </motion.div>
    </motion.section>
  );
}