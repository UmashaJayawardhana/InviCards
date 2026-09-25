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
  const [guestName, setGuestName] = useState("");

  // Temporary value
  // We will get this from the URL in the next step
  const invitationType = "Couple";

  return (
    <main className="min-h-screen bg-[#f7f1e8]">

      <AnimatePresence>
        {!isOpen && (
          <Opening
            onOpen={(name) => {
              setGuestName(name);
              setIsOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <Hero />

          <InvitationMessage
            guestName={guestName}
            invitationType={invitationType}
          />

          <CoupleStory />

          <EventDetails />

          <Countdown />

          <WeddingGallery />

          <GuestWishes
  eventId={1}
  guestName={guestName}
/>
        </>
      )}

    </main>
  );
}