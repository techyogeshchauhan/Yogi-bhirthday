import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Users, Clock, TrendingUp, Share2 } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { useQuiz } from "./useDynamicData";

type Reaction = {
  id: string;
  emoji: string;
  x: number;
  y: number;
  color: string;
  createdAt: number;
};

const REACTION_COLORS: Record<string, string> = {
  "🎉": "#fbbf24",
  "🎊": "#ec4899",
  "🥳": "#a855f7",
  "❤️": "#ef4444",
  "✨": "#60a5fa",
  "💖": "#f43f5e",
  "🌟": "#fbbf24",
  "🔥": "#f97316",
  "🎈": "#a855f7",
  "🎁": "#10b981",
};

function ReactionCircle({ reaction }: { reaction: Reaction }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="absolute pointer-events-none"
      style={{ left: reaction.x, top: reaction.y }}
      animate={{ y: reaction.y - 50, opacity: 0, scale: 1.5 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div
        className="text-2xl"
        style={{ color: reaction.color }}
      >
        {reaction.emoji}
      </div>
    </motion.div>
  );
}

export function EmojiReactions() {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [reactionCount, setReactionCount] = useState(0);
  const lastReactionTime = useRef<number>(0);

  const addReaction = (emoji: string) => {
    const now = Date.now();
    const timeSinceLast = now - lastReactionTime.current;
    
    if (timeSinceLast < 300) return; // Prevent too many rapid reactions
    
    const newReaction: Reaction = {
      id: Math.random().toString(36).substr(2, 9),
      emoji,
      x: Math.random() * 80 + 10, // Random x position within 10-90% of container width
      y: Math.random() * 60 + 20, // Random y position within 20-80% of container height
      color: REACTION_COLORS[emoji] || "#fbbf24",
      createdAt: now,
    };
    
    setReactions(prev => [...prev, newReaction]);
    setReactionCount(prev => prev + 1);
    lastReactionTime.current = now;
  };

  const emojis = Object.keys(REACTION_COLORS);

  useEffect(() => {
    const cleanup = () => {
      setReactions([]);
    };
    
    window.addEventListener("beforeunload", cleanup);
    return () => window.removeEventListener("beforeunload", cleanup);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReactions(prev => prev.filter(r => r.createdAt > Date.now() - 3000));
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [reactions]);

  return {
    addReaction,
    reactionCount,
    ReactionComponent: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {reactions.map((reaction) => (
            <ReactionCircle key={reaction.id} reaction={reaction} />
          ))}
        </AnimatePresence>
      </div>
    ),
  };
}