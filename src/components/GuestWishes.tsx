"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Flower2,
  Heart,
  Send,
  MessageCircleHeart,
} from "lucide-react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Wish {
  wish_id: number;
  guest_name: string;
  message: string;
  created_at: string;
}

interface GuestWishesProps {
  eventId: number;
}

export default function GuestWishes({
  eventId,
}: GuestWishesProps) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD ALL WISHES
  // =====================================================

const loadWishes = async () => {
  console.log("Loading wishes for event:", eventId);

  setLoading(true);

  const { data: wishes, error: wishError } = await supabase
    .from("wishes")
    .select("*")
    .eq("event_id", eventId);

  if (wishError) {
    console.error("Error loading wishes:", wishError);
    setError("Unable to load wishes.");
    setLoading(false);
    return;
  }

  console.log("Loaded wishes:", wishes);

  setWishes(wishes || []);
  setLoading(false);
};

  // =====================================================
  // LOAD WHEN PAGE OPENS
  // =====================================================

useEffect(() => {
  if (eventId) {
    loadWishes();
  }
}, [eventId]);

  // =====================================================
  // SEND WISH
  // =====================================================

const handleSubmit = async (
   e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!guestName.trim() || !message.trim()) {
    setError("Please enter your name and message.");
    return;
  }

  setSending(true);
  setError("");

  const { data, error } = await supabase
    .from("wishes")
    .insert([
      {
        event_id: eventId,
        guest_name: guestName.trim(),
        message: message.trim(),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error adding wish:", error);
    setError("Unable to send your wish. Please try again.");
    setSending(false);
    return;
  }

  console.log("Wish added:", data);

  setWishes((currentWishes) => [
    data,
    ...currentWishes,
  ]);

  setGuestName("");
  setMessage("");
  setSending(false);
};

  return (
    <section className="relative overflow-hidden bg-[#f7f1e8] px-6 py-24">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute -left-44 top-24 h-80 w-80 rounded-full border border-[#d8c3a5] opacity-25" />

      <div className="absolute -right-44 bottom-20 h-96 w-96 rounded-full border border-[#d8c3a5] opacity-25" />

      {/* =====================================================
          TOP LEFT FLOWER
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30, y: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-4 top-8 md:left-14"
      >
        <Flower2
          size={46}
          strokeWidth={1}
          className="rotate-[-15deg] text-[#c89da5]"
        />

        <Flower2
          size={26}
          strokeWidth={1}
          className="absolute left-10 top-8 text-[#b99572]"
        />
      </motion.div>

      {/* =====================================================
          BOTTOM RIGHT FLOWER
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-8 right-4 md:right-14"
      >
        <Flower2
          size={46}
          strokeWidth={1}
          className="rotate-[15deg] text-[#c89da5]"
        />

        <Flower2
          size={26}
          strokeWidth={1}
          className="absolute right-10 top-8 text-[#b99572]"
        />
      </motion.div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="text-center">

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-xs uppercase tracking-[0.4em] text-[#92795c]"
          >
            Leave a little love
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="mt-4 font-serif text-4xl font-normal text-[#49382d] md:text-5xl"
          >
            Guest Wishes
          </motion.h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 80,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mx-auto mt-6 h-px bg-[#b89b72]"
          />

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#92795c]"
          >
            Leave your wishes, blessings and beautiful
            messages for the happy couple.
          </motion.p>

        </div>

        {/* =================================================
            SEND WISH FORM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mx-auto mt-14 max-w-2xl rounded-[45px] border border-[#c8aa82] bg-[#fbf7f1] p-6 shadow-sm md:p-10"
        >

          <div className="mb-8 flex items-center justify-center gap-3">

            <MessageCircleHeart
              size={22}
              strokeWidth={1.2}
              className="text-[#c89da5]"
            />

            <p className="font-serif text-2xl text-[#49382d]">
              Send your wishes
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}

            <div>

              <label
                htmlFor="guestName"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#92795c]"
              >
                Your Name
              </label>

              <input
                id="guestName"
                type="text"
                value={guestName}
                onChange={(event) =>
                  setGuestName(event.target.value)
                }
                placeholder="Enter your name"
                disabled={sending}
                className="w-full rounded-2xl border border-[#d8c3a5] bg-[#f7f1e8] px-5 py-4 text-sm text-[#49382d] outline-none transition focus:border-[#b89b72] disabled:opacity-60"
              />

            </div>

            {/* Message */}

            <div>

              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#92795c]"
              >
                Your Message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Write your wishes..."
                rows={5}
                disabled={sending}
                className="w-full resize-none rounded-2xl border border-[#d8c3a5] bg-[#f7f1e8] px-5 py-4 text-sm leading-7 text-[#49382d] outline-none transition focus:border-[#b89b72] disabled:opacity-60"
              />

            </div>

            {/* Error */}

            {error && (
              <p className="text-center text-sm text-[#a36f6f]">
                {error}
              </p>
            )}

            {/* Submit */}

            <div className="flex justify-center pt-2">

              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-2 rounded-full border border-[#b89b72] bg-[#b89b72] px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#9d815c] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <Send
                  size={15}
                  strokeWidth={1.4}
                />

                {sending ? "Sending..." : "Send Wish"}

              </button>

            </div>

          </form>

        </motion.div>

        {/* =================================================
            ALL WISHES
        ================================================= */}

        <div className="mx-auto mt-16 max-w-3xl">

          <div className="mb-8 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#c8aa82]" />

            <Heart
              size={18}
              strokeWidth={1.2}
              className="text-[#c89da5]"
            />

            <div className="h-px w-12 bg-[#c8aa82]" />

          </div>

          <div className="mb-8 text-center">

            <p className="font-serif text-2xl text-[#49382d]">
              Messages from our loved ones
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#92795c]">
              {wishes.length} {wishes.length === 1 ? "wish" : "wishes"}
            </p>

          </div>

          {/* Loading */}

          {loading && (
            <div className="py-10 text-center">

              <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-[#d8c3a5] border-t-[#b89b72]" />

              <p className="mt-4 text-sm text-[#92795c]">
                Loading wishes...
              </p>

            </div>
          )}

          {/* No wishes */}

          {!loading && wishes.length === 0 && (
            <div className="rounded-[35px] border border-[#d8c3a5] bg-[#fbf7f1] px-6 py-10 text-center">

              <Heart
                size={24}
                strokeWidth={1}
                className="mx-auto text-[#c89da5]"
              />

              <p className="mt-4 font-serif text-xl text-[#49382d]">
                Be the first to leave a wish
              </p>

              <p className="mt-2 text-sm text-[#92795c]">
                Your message could be the first beautiful
                memory in our guest book.
              </p>

            </div>
          )}

          {/* Wish list */}

          {!loading && wishes.length > 0 && (
            <div className="space-y-5">

              {wishes.map((wish, index) => (

                <motion.div
                  key={wish.wish_id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="rounded-[35px] border border-[#d8c3a5] bg-[#fbf7f1] px-6 py-6 md:px-8"
                >

                  <div className="flex items-start gap-4">

                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8c3a5] bg-[#f7f1e8]">

                      <Heart
                        size={16}
                        strokeWidth={1.2}
                        className="text-[#c89da5]"
                      />

                    </div>

                    <div className="min-w-0">

                      <h3 className="font-serif text-xl text-[#49382d]">
                        {wish.guest_name}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#80694f]">
                        {wish.message}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>
          )}

        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 text-center"
        >

          <Heart
            size={24}
            strokeWidth={1}
            className="mx-auto text-[#c89da5]"
          />

          <p className="mt-4 font-serif text-xl italic text-[#80694f]">
            Thank you for being part of our story.
          </p>

        </motion.div>

      </div>
    </section>
  );
}