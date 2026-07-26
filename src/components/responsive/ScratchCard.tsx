import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { RefreshCw } from "lucide-react";

const SURPRISES = [
  { emoji: "🎂", title: "Birthday Cake!", message: "Ek bahut bada birthday cake tumhara wait kar raha hai! 🎂" },
  { emoji: "🎁", title: "Secret Gift!", message: "Tumhare liye ek special surprise plan ho raha hai! 🎁" },
  { emoji: "🌟", title: "Star of the Day!", message: "Aaj tum hi star ho — duniya tumhari hai! ⭐" },
  { emoji: "🚀", title: "25 & Unstoppable!", message: "25 saal ke ho gaye — ab koi rok nahi sakta! 🚀" },
  { emoji: "💖", title: "Loads of Love!", message: "Teri life mein khushiyan hi khushiyan hon! 💖" },
  { emoji: "👑", title: "Birthday King!", message: "Aaj ka din sirf tumhara hai — KING vibes only! 👑" },
];

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [currentSurprise] = useState(() => SURPRISES[Math.floor(Math.random() * SURPRISES.length)]);
  const [scratchPercent, setScratchPercent] = useState(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw scratch layer
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#a855f7");
    grad.addColorStop(0.5, "#ec4899");
    grad.addColorStop(1, "#8b5cf6");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text on scratch layer
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = `bold ${canvas.width * 0.06}px sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("🎁 Scratch Here! 🎁", canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = `${canvas.width * 0.04}px sans-serif`;
    ctx.fillText("Kahin kuch chhupa hai...", canvas.width / 2, canvas.height / 2 + 24);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
  };

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching || revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e, canvas);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.lineWidth = 44;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
    ctx.fill();
    lastPos.current = pos;

    // Check revealed percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] < 128) transparent++;
    }
    const pct = Math.round((transparent / (canvas.width * canvas.height)) * 100);
    setScratchPercent(pct);
    if (pct > 55 && !revealed) {
      setRevealed(true);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    }
  };

  const reset = () => {
    setRevealed(false);
    setScratchPercent(0);
    lastPos.current = null;
    setTimeout(initCanvas, 50);
  };

  return (
    <ResponsiveSection
      id="scratch-card"
      title="🃏 Scratch Card"
      subtitle="Scratch karo aur apna birthday surprise reveal karo!"
    >
      <div className="flex flex-col items-center gap-6">
        <ResponsiveCard className="w-full max-w-md p-2">
          <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            {/* Hidden content behind */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              }}
            >
              <motion.div
                animate={revealed ? { scale: [0.5, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-3"
              >
                {currentSurprise.emoji}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{currentSurprise.title}</h3>
              <p className="text-white/80 text-sm">{currentSurprise.message}</p>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)", color: "white" }}
                >
                  🎉 Happy Birthday Yogesh!
                </motion.div>
              )}
            </div>

            {/* Scratch canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full touch-none"
              style={{ cursor: revealed ? "default" : "crosshair" }}
              onMouseDown={(e) => { setIsScratching(true); lastPos.current = null; scratch(e); }}
              onMouseMove={scratch}
              onMouseUp={() => { setIsScratching(false); lastPos.current = null; }}
              onMouseLeave={() => { setIsScratching(false); lastPos.current = null; }}
              onTouchStart={(e) => { e.preventDefault(); setIsScratching(true); lastPos.current = null; scratch(e); }}
              onTouchMove={(e) => { e.preventDefault(); scratch(e); }}
              onTouchEnd={() => { setIsScratching(false); lastPos.current = null; }}
            />
          </div>

          {/* Progress & Reset */}
          <div className="flex items-center justify-between mt-3 px-2">
            <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden mr-3">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                animate={{ width: `${scratchPercent}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground mr-3">{scratchPercent}%</span>
            <button
              onClick={reset}
              className="p-1.5 rounded-lg hover:bg-secondary/50 transition text-muted-foreground hover:text-foreground"
              title="Reset card"
              aria-label="Reset scratch card"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </ResponsiveCard>

        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-muted-foreground text-sm"
          >
            🔄 Naya card try karne ke liye refresh button dabao!
          </motion.p>
        )}
      </div>
    </ResponsiveSection>
  );
}
