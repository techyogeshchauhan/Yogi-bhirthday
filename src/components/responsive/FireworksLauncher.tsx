import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Zap } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  trail: { x: number; y: number }[];
}

const FIREWORK_COLORS = [
  "#ff0080", "#ff6600", "#ffdd00", "#00ff88",
  "#00ccff", "#cc00ff", "#ff3366", "#ffaa00",
  "#ffffff", "#ff88cc", "#88ffcc", "#aaccff",
];

export function FireworksLauncher() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const [clickCount, setClickCount] = useState(0);
  const [hint, setHint] = useState(true);

  const explode = useCallback((x: number, y: number) => {
    const count = 60 + Math.floor(Math.random() * 40);
    const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
    const color2 = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4;
      const useColor = Math.random() > 0.5 ? color : color2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.5,
        color: useColor,
        size: 1.5 + Math.random() * 2.5,
        trail: [],
      });
    }
    // Stars burst
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * (6 + Math.random() * 3),
        vy: Math.sin(angle) * (6 + Math.random() * 3),
        life: 1,
        maxLife: 0.4 + Math.random() * 0.3,
        color: "#ffffff",
        size: 2.5 + Math.random() * 2,
        trail: [],
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      for (const p of particlesRef.current) {
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // gravity
        p.vx *= 0.98; // friction
        p.life -= 0.018 / p.maxLife;

        // Draw trail
        for (let t = 0; t < p.trail.length - 1; t++) {
          const alpha = (t / p.trail.length) * p.life * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.trail[t].x, p.trail[t].y);
          ctx.lineTo(p.trail[t + 1].x, p.trail[t + 1].y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = p.size * 0.6;
          ctx.stroke();
        }

        // Draw particle
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode(x, y);
    setClickCount(c => c + 1);
    setHint(false);
  }, [explode]);

  const handleTouch = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    Array.from(e.touches).forEach(touch => {
      explode(touch.clientX - rect.left, touch.clientY - rect.top);
    });
    setClickCount(c => c + 1);
    setHint(false);
  }, [explode]);

  // Auto-launch a few fireworks on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const timer = setTimeout(() => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      [[w * 0.3, h * 0.4], [w * 0.7, h * 0.35], [w * 0.5, h * 0.5]].forEach(([x, y]) => {
        setTimeout(() => explode(x, y), Math.random() * 800);
      });
    }, 600);
    return () => clearTimeout(timer);
  }, [explode]);

  return (
    <ResponsiveSection
      id="fireworks-launcher"
      title="🎆 Fireworks Launcher"
      subtitle="Kahan bhi click karo — birthday fireworks blast!"
    >
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ background: "#000" }}>
        <canvas
          ref={canvasRef}
          className="w-full block"
          style={{ minHeight: 340, cursor: "crosshair", touchAction: "none" }}
          onClick={handleClick}
          onTouchStart={handleTouch}
        />

        {/* Hint */}
        {hint && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="text-center px-6 py-4 rounded-2xl" style={{ background: "rgba(0,0,0,0.5)" }}>
              <div className="text-4xl mb-2">🎆</div>
              <p className="text-white/80 text-sm font-medium">Click anywhere to launch fireworks!</p>
              <p className="text-white/40 text-xs mt-1">Tap karo — celebration shuru ho!</p>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
          <Zap className="w-3 h-3 text-yellow-400" />
          {clickCount} blasts!
        </div>

        {/* Birthday message overlay */}
        {clickCount >= 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white"
            style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
          >
            🎉 Happy Birthday Yogesh!
          </motion.div>
        )}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-3">
        🖱 Click multiple times for a bigger show! ({clickCount} fireworks launched)
      </p>
    </ResponsiveSection>
  );
}
