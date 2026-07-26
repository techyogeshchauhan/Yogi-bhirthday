import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ResponsiveSection } from "./ResponsiveSection";

interface Balloon {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  message: string;
  popped: boolean;
}

const MESSAGES = [
  "🎂 Happy Birthday Yogesh! You're absolutely amazing!",
  "🌟 25 looks great on you! Shine on forever!",
  "💪 Every year you level up — this one's no different!",
  "🎉 May all your dreams come true this year!",
  "🔥 You're not just older, you're legendary!",
  "💫 25 years of pure awesomeness!",
  "🎈 Keep smiling — the world is better with you in it!",
  "🚀 Your best chapter hasn't been written yet!",
  "🌈 You make every moment more colorful!",
  "👑 King vibes only — Happy Birthday!",
  "💝 Wishing you love, laughter & endless joy!",
  "⭐ Born to shine — Happy 25th!",
];

const COLORS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e",
  "#3b82f6", "#a855f7", "#ec4899", "#14b8a6",
  "#f43f5e", "#8b5cf6", "#06b6d4", "#84cc16",
];

function generateBalloons(count: number): Balloon[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + (i % 10) * 9 + Math.random() * 5,
    color: COLORS[i % COLORS.length],
    size: 56 + Math.random() * 24,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 3,
    message: MESSAGES[i % MESSAGES.length],
    popped: false,
  }));
}

export function BalloonPop() {
  const [balloons, setBalloons] = useState<Balloon[]>(() => generateBalloons(12));
  const [poppedMessage, setPoppedMessage] = useState<{ id: number; text: string; x: number } | null>(null);
  const [allPopped, setAllPopped] = useState(false);

  // Pre-compute star positions once (avoids Math.random() in JSX render causing SSR crash)
  const bgStars = useMemo(() =>
    Array.from({ length: 30 }, () => ({
      w: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      dur: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    })),
  []);


  const popBalloon = useCallback((balloon: Balloon) => {
    if (balloon.popped) return;

    confetti({
      particleCount: 30,
      spread: 50,
      startVelocity: 20,
      origin: { x: balloon.x / 100, y: 0.5 },
      colors: [balloon.color, "#fff", "#ffd700"],
      scalar: 0.8,
    });

    setBalloons(prev =>
      prev.map(b => b.id === balloon.id ? { ...b, popped: true } : b)
    );
    setPoppedMessage({ id: balloon.id, text: balloon.message, x: balloon.x });

    setTimeout(() => setPoppedMessage(null), 3000);
  }, []);

  useEffect(() => {
    if (balloons.every(b => b.popped)) {
      setAllPopped(true);
      setTimeout(() => {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.5 } });
      }, 300);
    }
  }, [balloons]);

  const resetBalloons = () => {
    setBalloons(generateBalloons(12));
    setAllPopped(false);
  };

  return (
    <ResponsiveSection
      id="balloon-pop"
      title="🎈 Pop the Balloons!"
      subtitle="Har balloon mein ek special birthday message chhupa hai — pop karo!"
    >
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ minHeight: 380, background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>

        {/* Stars in background */}
        {bgStars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.w,
              height: star.w,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: star.dur, delay: star.delay }}
          />
        ))}

        {/* Balloons */}
        <div className="relative w-full h-full" style={{ minHeight: 380 }}>
          <AnimatePresence>
            {balloons.map(balloon => !balloon.popped && (
              <motion.div
                key={balloon.id}
                className="absolute bottom-0 cursor-pointer select-none"
                style={{ left: `${balloon.x}%` }}
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: -420, opacity: 1 }}
                exit={{ scale: [1, 1.4, 0], opacity: 0 }}
                transition={{
                  y: { duration: balloon.duration, delay: balloon.delay, ease: "linear", repeat: Infinity, repeatDelay: 1 },
                  opacity: { duration: 0.5, delay: balloon.delay },
                }}
                onClick={() => popBalloon(balloon)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.3 }}
                title="Pop me!"
              >
                {/* Balloon SVG */}
                <svg
                  width={balloon.size}
                  height={balloon.size * 1.3}
                  viewBox="0 0 60 80"
                  style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }}
                >
                  {/* Balloon body */}
                  <ellipse cx="30" cy="28" rx="24" ry="27" fill={balloon.color} />
                  {/* Shine */}
                  <ellipse cx="22" cy="18" rx="7" ry="9" fill="rgba(255,255,255,0.25)" />
                  {/* Knot */}
                  <path d="M30 55 Q28 60 30 63 Q32 60 30 55Z" fill={balloon.color} />
                  {/* String */}
                  <path d="M30 63 Q25 72 30 80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
                </svg>

                {/* Emoji on balloon */}
                <div
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg pointer-events-none"
                  style={{ fontSize: balloon.size * 0.3 }}
                >
                  🎁
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Popped message toast */}
          <AnimatePresence>
            {poppedMessage && (
              <motion.div
                key={poppedMessage.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                className="absolute z-20 px-5 py-3 rounded-2xl shadow-2xl max-w-xs text-center"
                style={{
                  left: `${Math.min(Math.max(poppedMessage.x, 10), 70)}%`,
                  top: "40%",
                  transform: "translateX(-50%)",
                  background: "rgba(255,255,255,0.97)",
                  color: "#1a1a2e",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(168,85,247,0.4)",
                }}
              >
                <p className="text-sm font-semibold leading-snug">{poppedMessage.text}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* All popped state */}
          {allPopped && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
            >
              <div className="text-center px-6 py-8 rounded-3xl" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}>
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">Saare Pop Ho Gaye!</h3>
                <p className="text-white/70 mb-4 text-sm">All birthday messages discovered!</p>
                <button
                  onClick={resetBalloons}
                  className="px-6 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                >
                  🎈 Dobara Khelo
                </button>
              </div>
            </motion.div>
          )}

          {/* Counter */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
            {balloons.filter(b => !b.popped).length} balloons left
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
}
