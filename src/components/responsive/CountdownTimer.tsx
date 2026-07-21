import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CountdownTimerProps {
  target: Date;
  onComplete?: () => void;
}

interface TimeUnit {
  value: number;
  label: string;
}

function CountdownUnit({ unit, index }: { unit: TimeUnit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      className="glass rounded-2xl px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-7 
                 min-w-[65px] sm:min-w-[90px] md:min-w-[120px] lg:min-w-[130px] 
                 text-center flex-1"
    >
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tabular-nums text-gradient" suppressHydrationWarning>
        {String(unit.value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
        {unit.label}
      </div>
    </motion.div>
  );
}

export function CountdownTimer({ target, onComplete }: CountdownTimerProps) {
  const [now, setNow] = useState(() => Date.now());
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  
  useEffect(() => {
    if (diff === 0 && !completed) {
      setCompleted(true);
      onComplete?.();
    }
  }, [diff, completed, onComplete]);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const units: TimeUnit[] = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
    >
      {units.map((unit, index) => (
        <CountdownUnit key={unit.label} unit={unit} index={index} />
      ))}
    </motion.div>
  );
}

// Simple countdown for other uses
export function SimpleCountdown({ target }: { target: Date }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  if (diff === 0) return <span>🎉 Today!</span>;

  return (
    <span className="tabular-nums">
      {days}d {hours}h {minutes}m {seconds}s
    </span>
  );
}

// Birthday Reveal Overlay
interface BirthdayRevealProps {
  onClose: () => void;
  name: string;
}

export function BirthdayReveal({ onClose, name }: BirthdayRevealProps) {
  useEffect(() => {
    import("canvas-confetti").then((confetti) => {
      const end = Date.now() + 5000;
      const fire = () => {
        confetti.default({
          particleCount: 6,
          startVelocity: 30,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
        });
        confetti.default({
          particleCount: 6,
          startVelocity: 30,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
        });
        if (Date.now() < end) requestAnimationFrame(fire);
      };
      fire();
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 bg-background/70 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.7, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="glass glow-ring rounded-3xl p-8 sm:p-10 md:p-12 max-w-md lg:max-lg text-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-xl hover:bg-secondary/50 transition"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-5xl sm:text-6xl md:text-7xl">🎂</div>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient">
          Happy Birthday {name}!
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
          Thank you for being part of my journey ❤️
        </p>
      </motion.div>
    </motion.div>
  );
}

// Countdown Badge for mini display
export function CountdownBadge({ target }: { target: Date }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);

  if (diff === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
        <Sparkles className="w-4 h-4" /> Today!
      </span>
    );
  }

  return (
    <span className="text-sm tabular-nums">
      {days}d {hours}h
    </span>
  );
}