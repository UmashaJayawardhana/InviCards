"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Opening from "@/components/Opening";
import Hero from "@/components/Hero";
import InvitationMessage from "@/components/InvitationMessage";
import CoupleStory from "@/components/CoupleStory";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import WeddingGallery from "@/components/WeddingGallery";
import GuestWishes from "@/components/GuestWishes";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f1e8]">

      <AnimatePresence>
        {!isOpen && (
          <Opening onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <Hero />
          <InvitationMessage />
           <CoupleStory />
            <EventDetails />
            <Countdown />
            <WeddingGallery />
           <GuestWishes eventId={1} />
        </>
      )}

    </main>
  );
}