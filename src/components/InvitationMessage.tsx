"use client";

import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

export default function InvitationMessage() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7f1] px-6 py-24">

      {/* Background decorative circle */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#d8c3a5] opacity-30" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full border border-[#d8c3a5] opacity-30" />

      {/* Top floral decoration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-4 top-5 md:left-16 md:top-10"
      >
        <div className="rotate-[-15deg] text-[#c89da5]">
          <Flower2 size={42} strokeWidth={1} />
        </div>

        <div className="absolute left-10 top-8 text-[#b99572]">
          <Flower2 size={25} strokeWidth={1} />
        </div>
      </motion.div>

      {/* Right floral decoration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-4 top-10 md:right-16"
      >
        <div className="rotate-[15deg] text-[#c89da5]">
          <Flower2 size={42} strokeWidth={1} />
        </div>

        <div className="absolute right-10 top-8 text-[#b99572]">
          <Flower2 size={25} strokeWidth={1} />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-[#92795c]"
        >
          With joyful hearts
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 font-serif text-4xl font-normal text-[#49382d] md:text-5xl"
        >
          We invite you
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-6 h-px bg-[#b89b72]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-base leading-8 text-[#715d4b] md:text-lg"
        >
          With the blessings of our families and loved ones,
          we joyfully invite you to join us as we begin
          this beautiful journey together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 font-serif text-xl italic text-[#8b7355]"
        >
          Your presence will make our celebration even more special.
        </motion.p>

        {/* Small flower */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex justify-center text-[#c89da5]"
        >
          <Flower2 size={28} strokeWidth={1} />
        </motion.div>

      </div>
    </section>
  );
}