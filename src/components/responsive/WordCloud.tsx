import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Send, Cloud } from "lucide-react";

interface Word {
  id: number;
  text: string;
  size: number;
  color: string;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
}

const SEED_WORDS = [
  "Amazing", "Talented", "Kind", "Funny", "Loyal",
  "Creative", "Brave", "Smart", "Dost", "Legend",
  "Caring", "Awesome", "Chill", "Vibe", "Real",
  "Motivated", "Honest", "Hustler", "Gem", "Unique",
];

const COLORS = [
  "#a855f7", "#ec4899", "#3b82f6", "#22c55e",
  "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6",
  "#f97316", "#14b8a6", "#e11d48", "#7c3aed",
];

let wordIdCounter = SEED_WORDS.length + 1;

function buildWord(text: string, idx: number): Word {
  return {
    id: idx,
    text,
    size: 14 + Math.random() * 22,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    x: 5 + Math.random() * 80,
    y: 5 + Math.random() * 80,
    rotation: Math.random() * 30 - 15,
    duration: 4 + Math.random() * 5,
    delay: Math.random() * 3,
  };
}

const initialWords: Word[] = SEED_WORDS.map((w, i) => buildWord(w, i + 1));

export function WordCloud() {
  const [words, setWords] = useState<Word[]>(initialWords);
  const [input, setInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const nextId = useRef(wordIdCounter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().replace(/\s+/g, " ").slice(0, 20);
    if (!trimmed) return;

    setSubmitting(true);
    const newWord = buildWord(trimmed, nextId.current++);
    setWords(prev => [...prev, newWord]);
    setInput("");
    setSubmitting(false);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 }, scalar: 0.7 });
    toast.success(`✨ "${trimmed}" cloud mein add ho gaya!`);
  };

  return (
    <ResponsiveSection
      id="word-cloud"
      title="☁️ Word Cloud"
      subtitle="Ek word likho jo Yogesh ko describe karta hai — cloud mein udne do!"
    >
      {/* Cloud display */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-6"
        style={{
          minHeight: 320,
          background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.08) 0%, rgba(0,0,0,0) 70%)",
          border: "1px solid rgba(168,85,247,0.15)",
        }}
      >
        {/* Background cloud shapes */}
        {[
          { cx: "20%", cy: "50%", rx: "15%", ry: "8%" },
          { cx: "50%", cy: "30%", rx: "22%", ry: "10%" },
          { cx: "78%", cy: "60%", rx: "17%", ry: "9%" },
        ].map((ellipse, i) => (
          <svg
            key={i}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.04 }}
          >
            <ellipse cx={ellipse.cx} cy={ellipse.cy} rx={ellipse.rx} ry={ellipse.ry} fill="#a855f7" />
          </svg>
        ))}

        {/* Words */}
        <div className="relative w-full h-full" style={{ minHeight: 320 }}>
          <AnimatePresence>
            {words.map(word => (
              <motion.div
                key={word.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: 1,
                  y: [0, -8, 0],
                  rotate: [word.rotation - 2, word.rotation + 2, word.rotation - 2],
                }}
                exit={{ opacity: 0, scale: 0.4 }}
                transition={{
                  opacity: { repeat: Infinity, duration: word.duration, delay: word.delay },
                  y: { repeat: Infinity, duration: word.duration * 0.8, delay: word.delay, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: word.duration * 1.2, delay: word.delay, ease: "easeInOut" },
                  scale: { duration: 0.5, type: "spring" },
                }}
                className="absolute select-none pointer-events-none font-bold"
                style={{
                  left: `${word.x}%`,
                  top: `${word.y}%`,
                  fontSize: word.size,
                  color: word.color,
                  transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
                  textShadow: `0 2px 12px ${word.color}40`,
                  filter: `drop-shadow(0 0 6px ${word.color}30)`,
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {word.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Word count badge */}
        <div className="absolute top-3 right-3 text-xs text-muted-foreground px-2.5 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
          <Cloud className="w-3 h-3 inline mr-1" />
          {words.length} words
        </div>
      </div>

      {/* Input form */}
      <ResponsiveCard className="p-4 sm:p-5">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Ek word likho... (e.g. Vibe King, Legend)"
            value={input}
            onChange={e => setInput(e.target.value)}
            maxLength={20}
            className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
          <motion.button
            type="submit"
            disabled={!input.trim() || submitting}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
          >
            <Send className="w-3.5 h-3.5" />
            Cloud Mein Bhejo ☁️
          </motion.button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          Max 20 characters • Already {words.length} words from everyone!
        </p>
      </ResponsiveCard>
    </ResponsiveSection>
  );
}
