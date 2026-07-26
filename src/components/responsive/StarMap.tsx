import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Star, Sparkles } from "lucide-react";

// Star positions for birthday night sky (July 31) — artistic representation
const CONSTELLATIONS = [
  {
    name: "Leo",
    emoji: "♌",
    stars: [
      { x: 20, y: 35, size: 3.5, brightness: 1 },
      { x: 26, y: 28, size: 2.5, brightness: 0.9 },
      { x: 34, y: 24, size: 3, brightness: 0.95 },
      { x: 38, y: 32, size: 2, brightness: 0.8 },
      { x: 32, y: 38, size: 2.5, brightness: 0.85 },
      { x: 24, y: 42, size: 2, brightness: 0.7 },
    ],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
    color: "#fbbf24",
    label: { x: 29, y: 50 },
  },
  {
    name: "Scorpius",
    emoji: "♏",
    stars: [
      { x: 60, y: 20, size: 3, brightness: 1 },
      { x: 65, y: 26, size: 2.5, brightness: 0.9 },
      { x: 68, y: 33, size: 3.5, brightness: 0.95 },
      { x: 72, y: 40, size: 2, brightness: 0.8 },
      { x: 76, y: 47, size: 2, brightness: 0.75 },
      { x: 73, y: 55, size: 2.5, brightness: 0.85 },
    ],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5]],
    color: "#f87171",
    label: { x: 68, y: 63 },
  },
  {
    name: "Virgo",
    emoji: "♍",
    stars: [
      { x: 45, y: 15, size: 4, brightness: 1 },
      { x: 50, y: 22, size: 2.5, brightness: 0.9 },
      { x: 44, y: 28, size: 2, brightness: 0.8 },
      { x: 52, y: 30, size: 3, brightness: 0.85 },
      { x: 47, y: 36, size: 2.5, brightness: 0.75 },
    ],
    lines: [[0,1],[1,2],[1,3],[3,4]],
    color: "#a78bfa",
    label: { x: 48, y: 43 },
  },
];

const BG_STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  opacity: Math.random() * 0.7 + 0.2,
  twinkleDuration: 2 + Math.random() * 4,
  delay: Math.random() * 5,
}));

const PLANETS = [
  { name: "Venus", x: 8, y: 12, size: 5, color: "#fde68a", glow: "#fbbf24" },
  { name: "Jupiter", x: 88, y: 18, size: 7, color: "#fb923c", glow: "#f97316" },
  { name: "Mars", x: 15, y: 72, size: 4, color: "#f87171", glow: "#ef4444" },
  { name: "Saturn", x: 82, y: 68, size: 5.5, color: "#c4b5fd", glow: "#a855f7" },
];

export function StarMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  const selectedConst = CONSTELLATIONS.find(c => c.name === selected);

  return (
    <ResponsiveSection
      id="star-map"
      title="🌟 Birthday Star Map"
      subtitle="31 July 2026 ki raat ka aasman — Yogesh ke janam din ki sky!"
    >
      <ResponsiveCard className="overflow-hidden p-0">
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: "16/9", minHeight: 320, background: "radial-gradient(ellipse at 50% 0%, #0d1b3e 0%, #020817 60%, #000 100%)" }}
        >
          {/* Milky way glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 30% at 50% 60%, rgba(100,80,200,0.12) 0%, transparent 70%)",
            }}
          />

          {/* SVG Layer */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background stars */}
            {BG_STARS.map(star => (
              <motion.circle
                key={star.id}
                cx={star.x}
                cy={star.y}
                r={star.size * 0.25}
                fill="white"
                animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
                transition={{ repeat: Infinity, duration: star.twinkleDuration, delay: star.delay }}
              />
            ))}

            {/* Planets */}
            {PLANETS.map(planet => (
              <g key={planet.name} style={{ cursor: "pointer" }} onClick={() => setHoveredPlanet(hoveredPlanet === planet.name ? null : planet.name)}>
                {/* Planet glow */}
                <motion.circle
                  cx={planet.x}
                  cy={planet.y}
                  r={planet.size * 0.65}
                  fill={planet.glow}
                  animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ transformOrigin: `${planet.x}px ${planet.y}px` }}
                />
                <circle cx={planet.x} cy={planet.y} r={planet.size * 0.35} fill={planet.color} />
                <text
                  x={planet.x}
                  y={planet.y + planet.size * 0.7}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="2"
                  fontFamily="sans-serif"
                >
                  {planet.name}
                </text>
              </g>
            ))}

            {/* Constellations */}
            {CONSTELLATIONS.map(constellation => (
              <g
                key={constellation.name}
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(selected === constellation.name ? null : constellation.name)}
              >
                {/* Constellation lines */}
                {constellation.lines.map(([a, b], li) => (
                  <motion.line
                    key={li}
                    x1={constellation.stars[a].x}
                    y1={constellation.stars[a].y}
                    x2={constellation.stars[b].x}
                    y2={constellation.stars[b].y}
                    stroke={constellation.color}
                    strokeWidth="0.3"
                    animate={{
                      opacity: selected === constellation.name ? [0.4, 0.9, 0.4] : [0.15, 0.35, 0.15],
                    }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  />
                ))}

                {/* Constellation stars */}
                {constellation.stars.map((star, si) => (
                  <g key={si}>
                    <motion.circle
                      cx={star.x}
                      cy={star.y}
                      r={selected === constellation.name ? star.size * 0.5 : star.size * 0.4}
                      fill={constellation.color}
                      animate={{
                        scale: selected === constellation.name ? [1, 1.3, 1] : [0.9, 1.1, 0.9],
                        opacity: [star.brightness * 0.7, star.brightness, star.brightness * 0.7],
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 + si * 0.2 }}
                      style={{ transformOrigin: `${star.x}px ${star.y}px` }}
                    />
                  </g>
                ))}

                {/* Label */}
                <text
                  x={constellation.label.x}
                  y={constellation.label.y}
                  textAnchor="middle"
                  fill={constellation.color}
                  fontSize="2.5"
                  fontFamily="sans-serif"
                  opacity={selected === constellation.name ? 1 : 0.5}
                >
                  {constellation.emoji} {constellation.name}
                </text>
              </g>
            ))}

            {/* Special birthday star */}
            <motion.g>
              <motion.circle
                cx="50" cy="50" r="1.5"
                fill="#ffd700"
                animate={{ scale: [1, 1.67, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ transformOrigin: "50px 50px" }}
              />
              <motion.circle
                cx="50" cy="50" r="3"
                fill="#ffd700"
                animate={{ scale: [1, 1.67, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ transformOrigin: "50px 50px" }}
              />
              <text x="50" y="55.5" textAnchor="middle" fill="#ffd700" fontSize="2.2" fontFamily="sans-serif" fontWeight="bold">
                ★ Yogesh's Star
              </text>
            </motion.g>
          </svg>

          {/* Info overlay */}
          <div className="absolute top-3 left-3 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
            🗓 July 31, 2026 • 12:00 AM IST • India
          </div>

          {/* Constellation info panel */}
          <AnimatePresence>
            {selectedConst && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-3 left-3 right-3 rounded-xl p-4 text-sm"
                style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)", border: `1px solid ${selectedConst.color}40` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: selectedConst.color }} className="text-2xl">{selectedConst.emoji}</span>
                  <div>
                    <h4 className="font-bold text-white">{selectedConst.name} Constellation</h4>
                    <p className="text-white/60 text-xs">Birthday night par visible — {selectedConst.stars.length} main stars</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          {!selected && (
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-white/40 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.4)" }}>
                ✨ Constellation click karo explore karne ke liye
              </span>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center p-4">
          {CONSTELLATIONS.map(c => (
            <button
              key={c.name}
              onClick={() => setSelected(selected === c.name ? null : c.name)}
              className="flex items-center gap-1.5 text-sm transition-opacity"
              style={{ opacity: selected && selected !== c.name ? 0.4 : 1 }}
            >
              <span style={{ color: c.color }}>{c.emoji}</span>
              <span className="text-muted-foreground">{c.name}</span>
            </button>
          ))}
          <div className="flex items-center gap-1.5 text-sm">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-muted-foreground">Yogesh's Star</span>
          </div>
        </div>
      </ResponsiveCard>
    </ResponsiveSection>
  );
}
