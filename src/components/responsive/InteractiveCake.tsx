import { useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveSection } from "./ResponsiveSection";

export function InteractiveCake() {
  const [lit, setLit] = useState(false);
  const [cut, setCut] = useState(false);

  const handleCakeClick = () => {
    if (!lit) {
      setLit(true);
    } else if (!cut) {
      setCut(true);
      // Fire confetti
      import("canvas-confetti").then((confetti) => {
        confetti.default({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
      });
    }
  };

  return (
    <ResponsiveSection
      id="cake"
      title="The Cake"
      subtitle="Click to light. Click again to cut."
    >
      <div className="glass rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center">
        <motion.button
          className="inline-block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] transition-transform hover:scale-110 relative"
          onClick={handleCakeClick}
          whileTap={{ scale: 0.95 }}
          aria-label={cut ? "Cake cut" : lit ? "Cut the cake" : "Light the candle"}
        >
          {cut ? "🍰" : "🎂"}
          {lit && !cut && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-2 sm:-top-4 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl"
              style={{ filter: "drop-shadow(0 0 20px gold)" }}
            >
              🔥
            </motion.span>
          )}
        </motion.button>

        <motion.p
          key={lit ? (cut ? "cut" : "lit") : "unlit"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground"
        >
          {!lit
            ? "Tap the cake to light the candle."
            : !cut
            ? "Now make a wish and tap again to cut."
            : "🎉 Wish made! Enjoy your slice."}
        </motion.p>
      </div>
    </ResponsiveSection>
  );
}