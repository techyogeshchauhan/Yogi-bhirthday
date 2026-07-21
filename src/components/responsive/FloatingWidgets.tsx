import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Music, Sun, Moon, Share2, MessageCircle, 
  X, Volume2, VolumeX, Heart, Gift 
} from "lucide-react";
import { useResponsive } from "./ResponsiveLayout";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";
import confetti from "canvas-confetti";

interface FloatingWidgetsProps {
  onShare?: () => void;
}

export function FloatingWidgets({ onShare }: FloatingWidgetsProps) {
  const { isMobile } = useResponsive();
  const [darkMode, setDarkMode] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const handleSurprise = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#ec4899", "#eab308", "#3b82f6"],
    });
  };

  const handleShare = async () => {
    const text = `Countdown to ${BIRTHDAY_CONFIG.name}'s Birthday! 🎂`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const widgets = [
    { icon: Sparkles, label: "Surprise", onClick: handleSurprise },
    { icon: Music, label: "Music", onClick: () => setIsPlaying(!isPlaying) },
    { icon: darkMode ? Sun : Moon, label: "Theme", onClick: toggleDarkMode },
    { icon: Share2, label: "Share", onClick: handleShare },
    { icon: MessageCircle, label: "Chat", onClick: () => setShowChat(!showChat) },
  ];

  if (isMobile) return null; // Use bottom nav on mobile instead

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2"
      >
        {widgets.map((widget, index) => {
          const Icon = widget.icon;
          return (
            <motion.button
              key={widget.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={widget.onClick}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary/80 transition group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={widget.label}
              aria-label={widget.label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </motion.button>
          );
        })}
      </motion.div>

      {/* Mini Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed right-20 top-1/2 -translate-y-1/2 w-72 sm:w-80 z-30"
          >
            <div className="glass rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm">Quick Chat</h4>
                <button
                  onClick={() => setShowChat(false)}
                  className="p-1 rounded-lg hover:bg-secondary/50 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {[
                  { q: "When is the birthday?", a: "July 31st, 2026! 🎂" },
                  { q: "How old is Yogesh turning?", a: "Turning 25 years old!" },
                  { q: "Can I leave a wish?", a: "Yes! Scroll down to the wishes section." },
                ].map((faq, i) => (
                  <details key={i} className="group">
                    <summary className="cursor-pointer text-sm font-medium list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-xs text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}