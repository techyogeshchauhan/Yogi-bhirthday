import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Wine, Send, Heart } from "lucide-react";

interface Toast {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  clinking: boolean;
}

const INITIAL_TOASTS: Toast[] = [
  { id: 1, name: "Ananya", message: "Yogesh bhai, tu best hai! Cheers to 25! 🥂", timestamp: "2 min ago", clinking: false },
  { id: 2, name: "Rahul", message: "Happy Birthday dost — yeh saal toh kamaal ka hoga! 🎉", timestamp: "5 min ago", clinking: false },
  { id: 3, name: "Priya", message: "To Yogesh — may all your dreams come true! 🌟", timestamp: "8 min ago", clinking: false },
  { id: 4, name: "Dev", message: "25 saal ke ho gaye bhai! Cheers to many more! 🍾", timestamp: "12 min ago", clinking: false },
];

export function ToastWall() {
  const [toasts, setToasts] = useState<Toast[]>(INITIAL_TOASTS);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [bigClink, setBigClink] = useState(false);
  const nextId = useRef(INITIAL_TOASTS.length + 1);

  const handleClink = (id: number) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, clinking: true } : t));
    setTimeout(() => setToasts(prev => prev.map(t => t.id === id ? { ...t, clinking: false } : t)), 800);
    confetti({ particleCount: 25, spread: 40, origin: { y: 0.5 }, colors: ["#fbbf24", "#f97316", "#fde68a"] });
  };

  const handleBigClink = () => {
    setBigClink(true);
    setTimeout(() => setBigClink(false), 1200);
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.4 }, colors: ["#fbbf24", "#f97316", "#fde68a", "#fff", "#a855f7"] });
    toast.success("🥂 CHEERS! Everyone is toasting Yogesh!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const newToast: Toast = {
      id: nextId.current++,
      name: name.trim(),
      message: message.trim(),
      timestamp: "Just now",
      clinking: false,
    };
    setToasts(prev => [newToast, ...prev]);
    setName("");
    setMessage("");
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.5 } });
    toast.success(`🥂 ${newToast.name}'s toast added!`);
  };

  return (
    <ResponsiveSection
      id="toast-wall"
      title="🥂 Virtual Toast Wall"
      subtitle="Yogesh ke liye virtual toast raise karo — celebrations shuru ho jaaye!"
    >
      {/* Big Clink Button */}
      <div className="flex justify-center mb-8">
        <motion.button
          onClick={handleBigClink}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)" }}
        >
          <motion.span
            className="flex items-center gap-3"
            animate={bigClink ? { scale: [1, 1.2, 0.9, 1.1, 1], rotate: [-5, 5, -3, 3, 0] } : {}}
          >
            <span className="text-3xl">🥂</span>
            <span>Everyone Raise Your Glass!</span>
            <span className="text-3xl">🥂</span>
          </motion.span>
          {bigClink && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              className="absolute inset-0 rounded-2xl"
              style={{ background: "rgba(251,191,36,0.5)" }}
            />
          )}
        </motion.button>
      </div>

      {/* Add Toast Form */}
      <ResponsiveCard className="mb-6 p-4 sm:p-5">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Wine className="w-4 h-4 text-yellow-500" />
          Apna toast add karo
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Tumhara naam"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={30}
            className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
          />
          <textarea
            placeholder="Yogesh ke liye tumhara toast message... 🥂"
            value={message}
            onChange={e => setMessage(e.target.value)}
            maxLength={120}
            rows={2}
            className="w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
          />
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{message.length}/120</span>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              disabled={!name.trim() || !message.trim()}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #d97706, #f59e0b)" }}
            >
              <Send className="w-3.5 h-3.5" />
              Toast Karo! 🥂
            </motion.button>
          </div>
        </form>
      </ResponsiveCard>

      {/* Toast Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {toasts.map(t => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="group"
            >
              <ResponsiveCard className="p-4 cursor-pointer" hover onClick={() => handleClink(t.id)}>
                <div className="flex items-start gap-3">
                  {/* Glass */}
                  <motion.div
                    className="text-3xl flex-shrink-0"
                    animate={t.clinking ? { rotate: [-10, 10, -8, 8, 0], scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    🥂
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm">{t.name}</span>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{t.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.message}</p>
                    <p className="text-xs text-yellow-500/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      👆 Click to clink!
                    </p>
                  </div>
                </div>
              </ResponsiveCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-4">
        <Heart className="w-3.5 h-3.5 inline mr-1 text-pink-500" />
        {toasts.length} log Yogesh ko toast kar rahe hain!
      </p>
    </ResponsiveSection>
  );
}
