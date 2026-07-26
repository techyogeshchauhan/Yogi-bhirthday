import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Mail, ChevronDown } from "lucide-react";

const LETTER_LINES = [
  "Pyare Yogesh,",
  "",
  "Aaj tera 25th birthday hai — aur main chahta hoon ki tu jaane",
  "ki yeh din kitna khaas hai. Sirf ek saal nahi badha tu,",
  "balki aur zyada mature, aur zyada brave, aur zyada amazing ban gaya.",
  "",
  "25 saal mein tune jo bhi seekha, jitne bhi gire aur uthhe —",
  "woh sab tujhe aaj ka tu banate hain. Aur aaj ka tu?",
  "Absolutely incredible hai.",
  "",
  "Jo log tujhe jaante hain, woh lucky hain. Teri smile,",
  "teri energy, tera dil — duniya thodi aur sundar hai",
  "sirf isliye ki tu ismein hai.",
  "",
  "Aaj celebrate kar — khulke, dil se, poori tarah se.",
  "Kyunki tu deserve karta hai har khushi jo aa rahi hai.",
  "",
  "Happy Birthday, King. 🎂👑",
  "",
  "— Dil se,",
  "Teri Birthday Website 🎉",
];

export function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!isOpen || !typing) return;
    if (lineIndex >= LETTER_LINES.length) { setTyping(false); return; }

    const currentLine = LETTER_LINES[lineIndex];

    if (currentLine === "") {
      setDisplayedLines(prev => [...prev, ""]);
      setLineIndex(li => li + 1);
      setCharIndex(0);
      return;
    }

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          if (next.length <= lineIndex) next.push("");
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex(ci => ci + 1);
      }, 28);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex(li => li + 1);
        setCharIndex(0);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, typing, lineIndex, charIndex]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setDisplayedLines([]);
    setLineIndex(0);
    setCharIndex(0);
    setTyping(true);
  };

  const skipToEnd = () => {
    setDisplayedLines(LETTER_LINES);
    setLineIndex(LETTER_LINES.length);
    setTyping(false);
  };

  return (
    <ResponsiveSection
      id="birthday-letter"
      title="📝 Birthday Letter"
      subtitle="Yogesh ke liye ek special handwritten letter — dil se likha hua"
    >
      <div className="flex flex-col items-center gap-6">
        {!isOpen ? (
          /* Sealed envelope */
          <motion.div
            className="cursor-pointer select-none"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpen}
          >
            <div
              className="relative rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center"
              style={{
                width: 280,
                height: 180,
                background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)",
              }}
            >
              {/* Envelope flap */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: 0,
                  borderLeft: "140px solid transparent",
                  borderRight: "140px solid transparent",
                  borderTop: "90px solid rgba(217,119,6,0.5)",
                }}
              />
              {/* Wax seal */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #dc2626, #991b1b)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-2xl">🎂</span>
              </motion.div>
              <p className="relative z-10 mt-3 text-amber-900 font-semibold text-sm">
                Yogesh ke liye — Click to open!
              </p>
              <Mail className="absolute bottom-3 right-3 w-5 h-5 text-amber-700/40" />
            </div>
          </motion.div>
        ) : (
          /* Opened letter */
          <motion.div
            initial={{ opacity: 0, rotateX: -30 }}
            animate={{ opacity: 1, rotateX: 0 }}
            className="w-full max-w-lg"
          >
            <div
              className="relative rounded-2xl shadow-2xl overflow-hidden p-8"
              style={{
                background: "linear-gradient(160deg, #fffdf5 0%, #fefce8 100%)",
                border: "1px solid #fde68a",
                minHeight: 420,
              }}
            >
              {/* Ruled lines */}
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0"
                  style={{
                    top: 80 + i * 32,
                    height: 1,
                    background: "rgba(147,197,253,0.3)",
                    marginLeft: 48,
                    marginRight: 24,
                  }}
                />
              ))}

              {/* Red margin line */}
              <div
                className="absolute top-0 bottom-0 left-14"
                style={{ width: 1, background: "rgba(239,68,68,0.3)" }}
              />

              {/* Letter content */}
              <div
                className="relative z-10 pl-8"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  color: "#1c1917",
                  lineHeight: "2",
                }}
              >
                {displayedLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${i === 0 ? "font-bold text-lg text-amber-800" : "text-sm"} ${
                      line.startsWith("—") ? "mt-2 text-amber-700 font-medium" : ""
                    } ${line === "" ? "h-4" : ""}`}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* Blinking cursor */}
                {typing && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-4 bg-amber-800 ml-0.5 align-middle"
                  />
                )}
              </div>

              {/* Skip button */}
              {typing && (
                <button
                  onClick={skipToEnd}
                  className="absolute bottom-4 right-4 text-xs text-amber-600 hover:text-amber-800 transition flex items-center gap-1"
                >
                  Skip to end <ChevronDown className="w-3 h-3" />
                </button>
              )}

              {/* Signature decoration when done */}
              {!typing && displayedLines.length === LETTER_LINES.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-4 right-4"
                >
                  <span className="text-2xl">💛</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </ResponsiveSection>
  );
}
