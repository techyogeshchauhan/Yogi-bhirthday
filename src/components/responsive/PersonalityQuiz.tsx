import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { RefreshCw, Share2 } from "lucide-react";
import { toast } from "sonner";

interface Question {
  q: string;
  options: { text: string; value: string }[];
}

interface Personality {
  id: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  color: string;
  gradient: string;
}

const QUESTIONS: Question[] = [
  {
    q: "Friday night plan kya hai?",
    options: [
      { text: "🎮 Gaming session with friends", value: "gamer" },
      { text: "🎵 Concert ya live music", value: "vibe" },
      { text: "📚 Ek acchi book aur chai", value: "chill" },
      { text: "🚀 Spontaneous road trip!", value: "adventurer" },
    ],
  },
  {
    q: "Yogesh ka superpower kya hona chahiye?",
    options: [
      { text: "⚡ Instantly everything fix karna", value: "gamer" },
      { text: "🎤 Jo bhi bole, sab maan le", value: "vibe" },
      { text: "🧠 Sab kuch yaad reh jaaye", value: "chill" },
      { text: "🌍 Teleportation — kahin bhi jaao!", value: "adventurer" },
    ],
  },
  {
    q: "Birthday cake kaisi honi chahiye?",
    options: [
      { text: "🎮 Controller shape ka cake!", value: "gamer" },
      { text: "🎵 Ek badi concert stage wali", value: "vibe" },
      { text: "☁️ Simple magar bilkul perfect", value: "chill" },
      { text: "🗺️ Duniya ka map — explore karo!", value: "adventurer" },
    ],
  },
  {
    q: "Life ka sabse important cheez kya hai?",
    options: [
      { text: "🏆 Achievement aur success", value: "gamer" },
      { text: "❤️ Connection aur relationships", value: "vibe" },
      { text: "☮️ Peace aur balance", value: "chill" },
      { text: "🌟 New experiences aur growth", value: "adventurer" },
    ],
  },
  {
    q: "Tera theme song kaisa hoga?",
    options: [
      { text: "🎮 Epic battle music!", value: "gamer" },
      { text: "🎵 Groovy dance anthem", value: "vibe" },
      { text: "🎸 Acoustic chill indie track", value: "chill" },
      { text: "🚀 High-energy rock anthem", value: "adventurer" },
    ],
  },
];

const PERSONALITIES: Record<string, Personality> = {
  gamer: {
    id: "gamer",
    title: "The Strategic King 👑",
    emoji: "🎮",
    description: "Tu life ko ek game ki tarah khelata hai — strategy, patience, aur focus teri powers hain. Mushkil se mushkil level bhi tu crack kar leta hai!",
    traits: ["Strategic", "Patient", "Focused", "Determined"],
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)",
  },
  vibe: {
    id: "vibe",
    title: "The Vibe Master 🎵",
    emoji: "🎤",
    description: "Jahan tu hota hai, wahan energy alag hi hoti hai! Tere logon ko connect karne ka gift kamaal ka hai. Tu room mein aata hai aur sab muskura dete hain!",
    traits: ["Charismatic", "Fun", "Social", "Energetic"],
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)",
  },
  chill: {
    id: "chill",
    title: "The Zen Master 🧘",
    emoji: "☁️",
    description: "Tu woh anchor hai jo sab ko stable rakhta hai. Teri wisdom aur clarity sabse alag hai. Log tere paas advice ke liye aate hain — aur tu kabhi disappoint nahi karta!",
    traits: ["Wise", "Calm", "Reliable", "Thoughtful"],
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #15803d, #22c55e, #4ade80)",
  },
  adventurer: {
    id: "adventurer",
    title: "The Wild Adventurer 🌍",
    emoji: "🚀",
    description: "Teri zindagi ek non-stop adventure hai! Tu comfort zone ko challenge karta rehta hai. Tera courage aur curiosity duniya ko explore karne ke liye born hai!",
    traits: ["Bold", "Curious", "Fearless", "Free-spirited"],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #b45309, #f59e0b, #fcd34d)",
  },
};

export function PersonalityQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Personality | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      setSelected(null);

      if (currentQ + 1 >= QUESTIONS.length) {
        // Calculate result
        const counts: Record<string, number> = {};
        newAnswers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
        const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        setResult(PERSONALITIES[winner]);
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
      } else {
        setCurrentQ(q => q + 1);
      }
    }, 400);
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  };

  const shareResult = () => {
    if (!result) return;
    const text = `Main hoon "${result.title}" wala Yogesh! 🎂\n${result.description}\n\n#YogeshBirthday #BirthdayQuiz`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Result clipboard mein copy ho gaya!");
    }
  };

  const progress = result ? 100 : (currentQ / QUESTIONS.length) * 100;

  return (
    <ResponsiveSection
      id="personality-quiz"
      title="🌈 Which Yogesh Are You?"
      subtitle="5 questions mein pata karo — tum konse Yogesh ho!"
    >
      <div className="max-w-xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Question {Math.min(currentQ + 1, QUESTIONS.length)} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-secondary/60 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <ResponsiveCard className="p-5 sm:p-6">
                <h3 className="text-lg font-bold mb-6 text-center leading-snug">
                  {QUESTIONS[currentQ].q}
                </h3>
                <div className="space-y-3">
                  {QUESTIONS[currentQ].options.map((option, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleAnswer(option.value)}
                      disabled={selected !== null}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border"
                      style={{
                        background: selected === option.value
                          ? "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))"
                          : "rgba(255,255,255,0.04)",
                        borderColor: selected === option.value
                          ? "rgba(168,85,247,0.6)"
                          : "rgba(255,255,255,0.08)",
                        opacity: selected && selected !== option.value ? 0.5 : 1,
                      }}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </ResponsiveCard>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: result.gradient }}
              >
                {/* Result header */}
                <div className="p-8 text-center text-white">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-7xl mb-4"
                  >
                    {result.emoji}
                  </motion.div>
                  <p className="text-white/80 text-sm font-medium mb-2">Tu hai...</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{result.title}</h2>
                  <p className="text-white/90 text-sm leading-relaxed">{result.description}</p>
                </div>

                {/* Traits */}
                <div className="bg-black/20 px-6 py-4">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
                    Tere qualities:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.traits.map(trait => (
                      <span
                        key={trait}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: "rgba(255,255,255,0.2)" }}
                      >
                        ✨ {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-4">
                <ResponsiveButton
                  onClick={reset}
                  variant="secondary"
                  className="flex-1"
                >
                  <RefreshCw className="w-4 h-4 mr-2 inline" />
                  Dobara try karo
                </ResponsiveButton>
                <ResponsiveButton
                  onClick={shareResult}
                  className="flex-1"
                >
                  <Share2 className="w-4 h-4 mr-2 inline" />
                  Share karo!
                </ResponsiveButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ResponsiveSection>
  );
}
