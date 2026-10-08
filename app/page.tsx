"use client";

import { useRef, useState } from "react";
import { Heart, Sparkles, Mail, X, ChevronDown } from "lucide-react";

export default function HomePage() {
  const [opened, setOpened] = useState(false);

  const letterRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // OPEN LETTER
  // =========================================================

  const openLetter = () => {
    setOpened(true);

    // On smaller mobile screens the letter opens above the
    // button. Bring the opened letter into view automatically.
    setTimeout(() => {
      letterRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  };

  // =========================================================
  // CLOSE LETTER
  // =========================================================

  const closeLetter = () => {
    setOpened(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf7f5] text-[#352b29]">
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#ead8d5]/50 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#e5deda]/60 blur-3xl" />
      </div>

      {/* =========================================
          MAIN
      ========================================= */}

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-20 pt-7 sm:px-8 sm:pt-12">
        {/* =====================================
            INTRO
        ===================================== */}

        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Sparkles size={14} className="text-[#b88782]" />

            <span className="text-xs font-medium text-[#8b6863]">
              You have something special
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            A little letter for you
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-stone-500 sm:text-base">
            Someone left you a little something.
            <br className="hidden sm:block" />
            Take a moment and open it. 💌
          </p>
        </div>

        {/* =====================================
            LETTER / ENVELOPE AREA
        ===================================== */}

        <div
          className={`relative mt-12 w-full max-w-[430px] transition-[height] duration-500 sm:mt-16 sm:h-[470px] ${
            opened ? "h-[520px]" : "h-[430px]"
          }`}
        >
          {/* Decorative elements */}

          <Heart
            size={17}
            className={`absolute left-[8%] top-[15%] fill-[#d5aaa5] text-[#d5aaa5] transition-all duration-700 ${
              opened
                ? "-translate-y-8 scale-125 opacity-100"
                : "animate-pulse opacity-50"
            }`}
          />

          <Heart
            size={12}
            className={`absolute right-[10%] top-[21%] fill-[#c9a49e] text-[#c9a49e] transition-all duration-700 ${
              opened ? "-translate-y-8 scale-125 opacity-100" : "opacity-40"
            }`}
          />

          <Sparkles
            size={15}
            className={`absolute left-[18%] top-[5%] text-[#b88782] transition-all duration-700 ${
              opened ? "-translate-y-8 rotate-12 opacity-100" : "opacity-40"
            }`}
          />

          <Sparkles
            size={12}
            className={`absolute right-[18%] top-[8%] text-[#c9a49e] transition-all duration-700 ${
              opened ? "-translate-y-8 -rotate-12 opacity-100" : "opacity-40"
            }`}
          />

          {/* =====================================
              PERSON
          ===================================== */}

          <div
            className={`absolute left-1/2 top-[8%] -translate-x-1/2 transition-all duration-700 ${
              opened ? "-translate-y-6" : "translate-y-6"
            }`}
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#faf7f5] bg-[#b88782] text-xl font-semibold text-white shadow-lg sm:h-20 sm:w-20 sm:text-2xl">
              S
              <div className="absolute -right-3 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
                <Heart size={12} className="fill-[#9f5f5a] text-[#9f5f5a]" />
              </div>
            </div>

            <div className="mx-auto mt-[-2px] h-14 w-24 rounded-t-[2rem] bg-[#c9a49e] sm:h-16 sm:w-28" />
          </div>

          {/* =====================================
              LETTER

              Mobile fix:
              - Smaller upward movement on phones.
              - ref allows us to scroll the opened letter
                into view automatically.
          ===================================== */}

          <div
            ref={letterRef}
            className={`absolute left-1/2 top-[22%] z-[60] w-[88%] max-w-[360px] -translate-x-1/2 transition-all duration-700 ease-out ${
              opened
                ? "-translate-y-[65px] opacity-100 sm:-translate-y-[125px]"
                : "translate-y-[130px] opacity-0"
            }`}
          >
            <div className="rounded-[1.25rem] bg-[#fffefa] p-6 shadow-[0_25px_60px_rgba(72,49,44,0.2)] sm:p-7">
              {/* Letter heading */}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b88782]">
                    Open when you miss me
                  </p>

                  <h2 className="mt-3 font-serif text-2xl italic text-[#493a37]">
                    Hey you ❤️
                  </h2>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5e9e5]">
                  <Heart size={14} className="fill-[#b88782] text-[#b88782]" />
                </div>
              </div>

              {/* Letter content */}

              <div className="mt-5 space-y-3 text-sm leading-6 text-[#705c57]">
                <p>
                  I know we can&apos;t always be in the same place, but I hope
                  you know that you&apos;re never very far from my thoughts.
                </p>

                <p>
                  So if you opened this because you&apos;re missing me, consider
                  this your little reminder that I&apos;m thinking about you
                  too.
                </p>

                <p>Until I can give you a real hug, keep this one here. 🫶</p>
              </div>

              {/* Signature */}

              <div className="mt-6 border-t border-[#eee4df] pt-4">
                <p className="text-xs text-[#9b817b]">Always yours,</p>

                <p className="mt-1 font-serif text-lg italic text-[#604945]">
                  Sage ❤️
                </p>
              </div>
            </div>
          </div>

          {/* =====================================
              ENVELOPE
          ===================================== */}

          <div
            className={`absolute bottom-[5%] left-1/2 h-[190px] w-[330px] max-w-[84vw] -translate-x-1/2 transition-transform duration-700 sm:h-[210px] sm:w-[370px] ${
              opened ? "translate-y-8" : ""
            }`}
          >
            {/* Shadow */}

            <div className="absolute -bottom-5 left-[5%] h-8 w-[90%] rounded-full bg-[#8f6560]/20 blur-xl" />

            {/* Back */}

            <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-[#c58f88] shadow-[0_18px_40px_rgba(78,50,45,0.18)]">
              <div className="absolute bottom-0 left-[-18%] h-[135%] w-[72%] rotate-[29deg] bg-[#b9817a]" />

              <div className="absolute bottom-0 right-[-18%] h-[135%] w-[72%] -rotate-[29deg] bg-[#b9817a]" />
            </div>

            {/* Letter sticking out */}

            <div
              className={`absolute left-[8%] right-[8%] top-3 h-[140px] rounded-xl bg-[#fffefa] shadow-sm transition-all duration-700 ${
                opened ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <Mail size={24} className="text-[#c49a94]" />

                <span className="text-[10px] uppercase tracking-[0.15em] text-[#b88782]">
                  For you
                </span>
              </div>
            </div>

            {/* Front panel */}

            <div className="absolute bottom-0 left-0 right-0 h-[115px] overflow-hidden rounded-b-[1.25rem] bg-[#c58f88] sm:h-[125px]">
              <div className="absolute -left-[20%] top-[-65px] h-[170px] w-[85%] rotate-[26deg] border-b-2 border-[#b9817a]" />

              <div className="absolute -right-[20%] top-[-65px] h-[170px] w-[85%] -rotate-[26deg] border-b-2 border-[#b9817a]" />
            </div>

            {/* ==================================
                FLAP
            ================================== */}

            <div
              className={`pointer-events-none absolute left-0 top-0 z-40 h-[110px] w-full origin-top transition-all duration-500 ${
                opened
                  ? "-translate-y-5 -rotate-6 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-l-[165px] border-r-[165px] border-t-[108px] border-l-transparent border-r-transparent border-t-[#d19c95] sm:border-l-[185px] sm:border-r-[185px] sm:border-t-[118px]" />
            </div>

            {/* ==================================
                ENVELOPE CLICK TARGET
            ================================== */}

            {!opened && (
              <button
                type="button"
                aria-label="Open letter"
                onClick={openLetter}
                className="absolute left-1/2 top-[75px] z-[50] flex h-14 w-14 -translate-x-1/2 touch-manipulation select-none items-center justify-center rounded-full bg-[#9f5f5a] text-white shadow-[0_7px_18px_rgba(95,55,50,0.25)] transition-transform active:scale-95 sm:top-[82px]"
              >
                <Heart size={22} className="fill-white" />
              </button>
            )}
          </div>
        </div>

        {/* =====================================
            MAIN BUTTON
        ===================================== */}

        <div className="relative z-[100] mt-3 flex w-full justify-center">
          {!opened ? (
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={openLetter}
                className="touch-manipulation select-none rounded-full bg-[#9f5f5a] px-7 py-4 text-sm font-medium text-white shadow-[0_8px_25px_rgba(120,70,65,0.18)] transition-transform active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Open my letter
                  <ChevronDown size={16} />
                </span>
              </button>

              <p className="mt-3 text-[11px] text-stone-400">
                Tap to open your letter
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={closeLetter}
              className="touch-manipulation select-none rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-[#76524e] shadow-sm transition-transform active:scale-95"
            >
              <span className="flex items-center gap-2">
                <X size={15} />
                Close the letter
              </span>
            </button>
          )}
        </div>

        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="mt-14 text-center">
          <div className="mx-auto flex w-fit items-center gap-2">
            <div className="h-px w-8 bg-[#dfcfca]" />

            <Heart size={13} className="fill-[#b88782] text-[#b88782]" />

            <div className="h-px w-8 bg-[#dfcfca]" />
          </div>

          <p className="mt-4 text-xs text-stone-400">
            Some things are better written down.
          </p>
        </div>
      </section>
    </main>
  );
}
