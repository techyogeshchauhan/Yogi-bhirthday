import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { RefreshCw } from "lucide-react";

const FORTUNES = [
  { text: "Tujhe aaj bahut bada surprise milne wala hai!", emoji: "🎁", color: "#f59e0b" },
  { text: "25 ki umar mein tere sapne poore honge — yaqeen rakh!", emoji: "🌟", color: "#a855f7" },
  { text: "Ek naya safar shuru hone wala hai tere liye.", emoji: "🚀", color: "#3b82f6" },
  { text: "Jo log tujhse pyar karte hain, aaj unhe yaad kar.", emoji: "💖", color: "#ec4899" },
  { text: "Tera aane wala saal sabse best hoga!", emoji: "🏆", color: "#eab308" },
  { text: "Kuch naya seekh, kuch naya ban — 25 mein duniya tere liye hai!", emoji: "🌈", color: "#22c55e" },
  { text: "Tu jahan bhi jayega, khushiyan tere peechhe aayengi.", emoji: "✨", color: "#f97316" },
  { text: "Aaj ka din tere liye likha gaya tha — enjoy kar!", emoji: "🎂", color: "#06b6d4" },
  { text: "Tere dost, teri family — ye hi teri sabse badi daulat hai.", emoji: "🤝", color: "#8b5cf6" },
  { text: "Har mushkil ke baad ek sunehri subah hoti hai — teri aa rahi hai!", emoji: "🌅", color: "#ef4444" },
];

export function FortuneCookie() {
  const [phase, setPhase] = useState<"closed" | "cracking" | "open">("closed");
  const [fortune, setFortune] = useState<typeof FORTUNES[0] | null>(null);

  const crack = () => {
    if (phase !== "closed") return;
    setPhase("cracking");
    const picked = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
    setFortune(picked);
    setTimeout(() => {
      setPhase("open");
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 }, colors: [picked.color, "#fff", "#ffd700"] });
    }, 700);
  };

  const reset = () => {
    setPhase("closed");
    setFortune(null);
  };

  return (
    <ResponsiveSection
      id="fortune-cookie"
      title="🔮 Fortune Cookie"
      subtitle="Cookie todke apna birthday fortune pao — kya likha hai tere liye?"
    >
      <div className="flex flex-col items-center gap-8 py-4">
        {/* Cookie area */}
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: 220 }}
        >
          {phase === "closed" && (
            <motion.div
              className="cursor-pointer select-none"
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={crack}
              title="Cookie todne ke liye click karo!"
            >
              {/* Cookie SVG */}
              <svg width="180" height="160" viewBox="0 0 180 160">
                <defs>
                  <radialGradient id="cg1" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="100%" stopColor="#d97706" />
                  </radialGradient>
                </defs>
                {/* Cookie body */}
                <ellipse cx="90" cy="95" rx="72" ry="50" fill="url(#cg1)" />
                <ellipse cx="90" cy="80" rx="72" ry="50" fill="url(#cg1)" />
                {/* Crease line */}
                <path d="M18 80 Q90 110 162 80" stroke="#b45309" strokeWidth="3" fill="none" />
                {/* Shine */}
                <ellipse cx="65" cy="65" rx="20" ry="10" fill="rgba(255,255,255,0.2)" transform="rotate(-20,65,65)" />
                {/* Dots */}
                <circle cx="70" cy="85" r="4" fill="#b45309" opacity="0.5" />
                <circle cx="105" cy="78" r="3.5" fill="#b45309" opacity="0.45" />
                <circle cx="90" cy="95" r="3" fill="#b45309" opacity="0.4" />
              </svg>
              <motion.p
                className="text-center text-muted-foreground text-sm mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                👆 Click to crack!
              </motion.p>
            </motion.div>
          )}

          {phase === "cracking" && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 0.9, 1.1], rotate: [0, -8, 8, -4, 0] }}
              transition={{ duration: 0.7 }}
              className="text-8xl"
            >
              🥠
            </motion.div>
          )}

          {phase === "open" && fortune && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-5"
            >
              {/* Two broken halves */}
              <div className="flex gap-4 mb-2">
                <motion.div
                  initial={{ x: 0, rotate: 0 }}
                  animate={{ x: -30, rotate: -25 }}
                  className="text-5xl"
                >
                  🥠
                </motion.div>
                <motion.div
                  initial={{ x: 0, rotate: 0 }}
                  animate={{ x: 30, rotate: 25 }}
                  className="text-5xl"
                >
                  🥠
                </motion.div>
              </div>

              {/* Fortune paper */}
              <motion.div
                initial={{ scaleY: 0, y: -20 }}
                animate={{ scaleY: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="relative px-6 py-4 rounded-lg text-center max-w-xs shadow-2xl"
                style={{
                  background: "#fffdf0",
                  border: `2px dashed ${fortune.color}60`,
                  transformOrigin: "top center",
                }}
              >
                {/* Paper texture lines */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-full h-px mb-3" style={{ background: "#e5e7eb" }} />
                ))}
                <div className="text-4xl mb-3">{fortune.emoji}</div>
                <p className="text-sm font-medium text-gray-800 leading-relaxed italic">
                  "{fortune.text}"
                </p>
                <p className="mt-3 text-xs text-gray-400">— Birthday Fortune</p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {phase === "open" && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={reset}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition"
            style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}
          >
            <RefreshCw className="w-4 h-4" />
            Ek aur fortune try karo
          </motion.button>
        )}
      </div>
    </ResponsiveSection>
  );
}
