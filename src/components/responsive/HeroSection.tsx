import { useMemo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { BIRTHDAY_CONFIG, getBirthdayDate } from "@/lib/birthday-config";

interface HeroSectionProps {
  onReveal: () => void;
}

export function HeroSection({ onReveal }: HeroSectionProps) {
  const target = getBirthdayDate();

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-24 px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <Sparkles className="w-3 h-3 text-gold" />
          <span className="hidden sm:inline">A Premium Celebration</span>
          <span className="sm:hidden">Celebration</span>
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95]"
        >
          <span className="text-gradient">Countdown</span>
          <br />
          <span className="text-foreground">to {BIRTHDAY_CONFIG.name}'s Birthday</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {BIRTHDAY_CONFIG.tagline}
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <CountdownTimer target={target} onComplete={onReveal} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Background Effects Component
export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const balloons = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 20,
        size: 28 + Math.random() * 40,
        drift: (Math.random() - 0.5) * 200,
        hue: [300, 340, 240, 90][i % 4],
      })),
    [],
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        size: 1 + Math.random() * 2.5,
      })),
    [],
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="star bg-white rounded-full absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      ))}
      {balloons.map((b, i) => (
        <div
          key={`balloon-${i}`}
          className="balloon absolute"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
          }}
        >
          <div
            style={{
              width: b.size,
              height: b.size * 1.2,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, white, oklch(0.7 0.25 ${b.hue}))`,
              boxShadow: `0 0 40px oklch(0.7 0.25 ${b.hue} / 0.6)`,
            }}
          />
          <div className="mx-auto w-px h-16 bg-white/30" />
        </div>
      ))}
    </div>
  );
}