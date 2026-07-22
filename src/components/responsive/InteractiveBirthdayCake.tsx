import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Crown } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";

// Static initial candles for SSR
const getInitialCandles = () => Array(10).fill(0).map((_, i) => ({
  id: i,
  height: 30,
  color: i % 2 === 0 ? "#ef4444" : "#fbbf24",
  lit: true,
}));

export function InteractiveBirthdayCake() {
  const [candles, setCandles] = useState(getInitialCandles());
  const [isBlown, setIsBlown] = useState(false);
  const [blowPressure, setBlowPressure] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [isBlowing, setIsBlowing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Randomize candles only on client side after mount
  useEffect(() => {
    setMounted(true);
    setCandles(
      Array(10).fill(0).map((_, i) => ({
        id: i,
        height: 20 + Math.random() * 30,
        color: Math.random() > 0.5 ? "#ef4444" : "#fbbf24",
        lit: Math.random() > 0.3,
      }))
    );
  }, []);

  const handleBlow = (power: number) => {
    setIsBlowing(true);
    setBlowPressure(power);
    
    if (blowPressure > 0.7) {
      setIsBlown(true);
      setMessages(prev => [
        ...prev,
        "🎂 Wow! Your wish came true! The cake popped out!"
      ]);
    }
  };

  const stopBlow = () => {
    setIsBlowing(false);
    setBlowPressure(0);
  };

  return (
    <ResponsiveSection
      id="interactive-cake"
      title="Interactive Birthday Cake"
      subtitle="Blow the candles and make a wish! 🎂"
    >
      <ResponsiveCard className="p-4 sm:p-6 lg:p-8">
        <div className="text-center space-y-6">
          <div className="relative">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isBlown ? { rotate: [0, 15, -15, 0], transition: { duration: 0.5 } } : {}}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 shadow-2xl border-4 border-yellow-300">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-300 via-rose-300 to-pink-300">
                  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                      🎂
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-end gap-1 w-48">
                {candles.map((candle) => (
                  <motion.div
                    key={candle.id}
                    className={candle.lit ? "animate-pulse" : "opacity-50"}
                    style={{ height: candle.height, width: "4px", backgroundColor: candle.color }}
                    animate={isBlown ? { y: [-10, -30, -50], opacity: [1, 0.8, 0], transition: { duration: 0.5 } } : {}}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-300 rounded-full p-2 shadow-lg">
              <Crown className="w-6 h-6 text-yellow-800" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              {isBlown ? "🎉 Wow! Your wish came true!" : "Blow out the candles!"}
            </h3>
            
            <div className="text-sm text-muted-foreground">
              💝 Messages: {messages.length}
            </div>
            
            <div className="space-y-3">
              <div className="font-semibold text-sm mb-2">Set your wish candle strength:</div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={blowPressure}
                onChange={(e) => handleBlow(parseFloat(e.target.value))}
                onMouseUp={stopBlow}
                onTouchEnd={stopBlow}
                className="w-full max-w-md mx-auto"
                disabled={isBlown}
              />
              <div className="flex justify-between text-xs text-muted-foreground max-w-md mx-auto px-2">
                <span>Light 😊</span>
                <span>Medium 💨</span>
                <span>Strong 🎯</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {isBlowing ? "🔥 Blowing hard!" : isBlown ? "✅ Cake ready!" : "Slide to blow!"}
              </p>
            </div>
            
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className="text-xs bg-secondary/30 rounded-full px-3 py-1 inline-block mx-1">
                  {msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ResponsiveCard>
    </ResponsiveSection>
  );
}