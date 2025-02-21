"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function BirthdayPage() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(200); // Start with 200 pieces
  const { width, height } = useWindowSize();

  // Function to add more confetti each time the cake is clicked
  const triggerConfetti = () => {
    setConfettiPieces(confettiPieces + 150); // Increase confetti count
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white text-center p-6 transition-all duration-500 overflow-hidden">
      {/* Floating Balloons */}
      {showSurprise && (
        <>
          {["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈"].map(
            (balloon, index) => (
              <motion.div
                key={index}
                className="absolute text-6xl"
                initial={{ y: 300, x: -100 }}
                animate={{ y: [-50, -150, -50], x: [0, 50, -50, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                {balloon}
              </motion.div>
            )
          )}
        </>
      )}

      {/* Sparkles Rotating Around */}
      {showSurprise && (
        <motion.div
          className="absolute text-4xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          ✨
        </motion.div>
      )}

      {/* Confetti */}
      {showSurprise && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={confettiPieces} // Confetti amount increases
          gravity={0.2}
        />
      )}

      {/* Initial Greeting */}
      {!showSurprise ? (
        <>
          <motion.h1
            className="text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            yo chica ! 🎉
          </motion.h1>
          <motion.p
            className="text-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A special surprise from your boy, Sánchez ! 🎁
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-purple-900 font-bold text-lg rounded-full shadow-lg hover:scale-110 transition-all"
            onClick={() => setShowSurprise(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Open Your Gift! 🎀
          </motion.button>
        </>
      ) : (
        <>
          {/* Title Animation */}
          <motion.h1
            className="text-2xl font-bold mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, scale: [1, 0.9, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Some birthdays last one day… but yours deserves extra time! 🎂
          </motion.h1>

          {/* Message Animation */}
          <motion.p
            className="text-sm mt-20 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Keep pushing with your Honours! <br /> I know you&apos;ll do GREAT 🫶
          </motion.p>
          <div className="text-xs opacity-40">
            psstt..click on the cake for more confetti
          </div>

          {/* Magic Cake - Triggers Confetti */}

          {/* 🫶 Finger Heart Animation */}
          <motion.div
            className="mt-8 text-6xl cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                "0px 0px 10px white",
                "0px 0px 20px pink",
                "0px 0px 10px white",
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={triggerConfetti}
          >
            🎂
          </motion.div>
        </>
      )}
    </div>
  );
}
