import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { toast, Toaster } from "sonner";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
  MessageCircle,
  Mail,
  Music,
  Gift,
  Share2,
  Heart,
  Reply,
  Sparkles,
  Cake,
  Sun,
  Moon,
  Send,
  Lock,
  X,
  Copy,
  Trophy,
  Award,
  BookOpen,
  Rocket,
  GraduationCap,
  Code2,
  Brain,
  Star,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BIRTHDAY_CONFIG, getBirthdayDate } from "@/lib/birthday-config";
import { supabase } from "@/integrations/client";
import { generateWish } from "@/lib/ai-wish.functions";
import { useServerFn } from "@tanstack/react-start";

/* ---------- BACKGROUND FX ---------- */
function BackgroundFX() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const balloons = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 20,
        size: 28 + Math.random() * 40,
        drift: (Math.random() - 0.5) * 200,
        hue: [300, 340, 240, 90][i % 4],
      })),
    [],
  );
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        size: 1 + Math.random() * 2.5,
      })),
    [],
  );
  
  if (!mounted) return null;
  
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star bg-white rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      ))}
      {balloons.map((b, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
            // @ts-expect-error CSS var
            "--drift": `${b.drift}px`,
          }}
        >
          <div
            style={{
              width: b.size,
              height: b.size * 1.2,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, white, oklch(0.7 0.25 ${b.hue}))`,
              boxShadow: `0 0 40px oklch(0.7 0.25 ${b.hue} / 0.6)`,
            }}
          />
          <div className="mx-auto w-px h-16 bg-white/30" />
        </div>
      ))}
    </div>
  );
}

/* ---------- COUNTDOWN ---------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

function CountdownUnit({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass rounded-2xl px-4 py-5 md:px-8 md:py-7 min-w-[80px] md:min-w-[130px] text-center">
      <div className="text-4xl md:text-6xl font-black tabular-nums text-gradient" suppressHydrationWarning>
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero({
  onReveal,
}: {
  onReveal: () => void;
}) {
  const target = getBirthdayDate();
  const { days, hours, minutes, seconds, done } = useCountdown(target);
  const revealedRef = useRef(false);
  useEffect(() => {
    if (done && !revealedRef.current) {
      revealedRef.current = true;
      onReveal();
    }
  }, [done, onReveal]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
          <Sparkles className="w-3 h-3 text-gold" /> A Premium Celebration
        </span>
        <h1 className="mt-6 text-4xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
          <span className="text-gradient">Countdown</span>
          <br />
          <span className="text-foreground">to {BIRTHDAY_CONFIG.name}'s Birthday</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {BIRTHDAY_CONFIG.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <CountdownUnit label="Days" value={days} />
          <CountdownUnit label="Hours" value={hours} />
          <CountdownUnit label="Minutes" value={minutes} />
          <CountdownUnit label="Seconds" value={seconds} />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- BIRTHDAY REVEAL ---------- */
function BirthdayReveal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const end = Date.now() + 5000;
    const fire = () => {
      confetti({
        particleCount: 6,
        startVelocity: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      });
      confetti({
        particleCount: 6,
        startVelocity: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      });
      if (Date.now() < end) requestAnimationFrame(fire);
    };
    fire();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-center p-6 bg-background/70 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.7, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        className="glass glow-ring rounded-3xl p-8 md:p-12 max-w-lg text-center relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-6xl">🎂</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-black text-gradient">
          Happy Birthday {BIRTHDAY_CONFIG.name}!
        </h2>
        <p className="mt-4 text-muted-foreground">
          Thank you for being part of my journey ❤️
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ---------- LIFE WIDGETS ---------- */
function LifeStats() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const birth = new Date(BIRTHDAY_CONFIG.birthYear, 0, 1).getTime();
  const lived = now - birth;
  const years = Math.floor(lived / (365.25 * 86400000));
  const days = Math.floor(lived / 86400000);
  const hours = Math.floor(lived / 3600000);
  const minutes = Math.floor(lived / 60000);
  const seconds = Math.floor(lived / 1000);
  const next = getBirthdayDate().getTime();
  const yearLen = 365.25 * 86400000;
  const progress = Math.min(1, Math.max(0, 1 - (next - now) / yearLen));
  const items = [
    { label: "Age", value: years },
    { label: "Days lived", value: days },
    { label: "Hours lived", value: hours },
    { label: "Minutes lived", value: minutes },
    { label: "Seconds lived", value: seconds },
  ];
  return (
    <Section title="Life in Numbers" subtitle="Every second counts.">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((i) => (
          <div key={i.label} className="glass rounded-2xl p-4 text-center">
            <div className="text-xl md:text-2xl font-bold tabular-nums text-gradient" suppressHydrationWarning>
              {i.value.toLocaleString()}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              {i.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 glass rounded-2xl p-5">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Birthday year progress</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
        <div className="h-3 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-purple), var(--color-pink), var(--color-gold))",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- SECTION WRAPPER ---------- */
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gradient">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------- TIMELINE ---------- */
const TIMELINE = [
  { year: "2020", title: "Started BSc IT — DSVV, Haridwar", icon: Code2 },
  { year: "2023", title: "Graduated BSc Information Technology", icon: GraduationCap },
  { year: "2024", title: "Research Associate @ CAIR, DSVV", icon: Brain },
  { year: "2025", title: "Data Science Intern — Azure AI & YOLOv8", icon: Rocket },
  { year: "2026-1", title: "Published Research + MCA Data Science", icon: BookOpen },
  { year: "2026-2", title: "Lecturer @ Haridwar University (CSE)", icon: Trophy },
];
function Timeline() {
  return (
    <Section title="The Journey" subtitle="A short timeline of milestones.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-pink to-gold opacity-40" />
        <div className="space-y-8">
          {TIMELINE.map((t, i) => {
            const Icon = t.icon;
            const left = i % 2 === 0;
            const displayYear = t.year.split('-')[0]; // Remove the suffix for display
            return (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative pl-12 md:pl-0 md:w-1/2 ${
                  left ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <div className="absolute left-0 md:left-auto md:right-full md:mr-[-12px] top-4 w-6 h-6 rounded-full btn-luxury grid place-items-center"
                  style={left ? {} : { left: -12, right: "auto" }}
                >
                  <Icon className="w-3 h-3" />
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-xs text-gold tracking-widest font-mono">{displayYear}</div>
                  <div className="mt-1 text-lg font-bold">{t.title}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
const ACHIEVEMENTS = [
  { label: "Research Papers", value: "12+", icon: BookOpen },
  { label: "Projects Shipped", value: "40+", icon: Rocket },
  { label: "Certificates", value: "20", icon: Award },
  { label: "Awards", value: "6", icon: Trophy },
  { label: "Years Experience", value: "8", icon: Star },
  { label: "GitHub Commits", value: "3k+", icon: Github },
];
function Achievements() {
  return (
    <Section title="Achievements" subtitle="A snapshot of the milestones.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.label}
              whileHover={{ y: -6, rotate: -0.5 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple/30 to-pink/30 blur-2xl opacity-60 group-hover:opacity-100 transition" />
              <Icon className="w-6 h-6 text-gold" />
              <div className="mt-3 text-3xl font-black text-gradient">{a.value}</div>
              <div className="text-sm text-muted-foreground">{a.label}</div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- GALLERY ---------- */
const GALLERY = [
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
  "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800",
  "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?w=800",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800",
  "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=800",
  "https://images.unsplash.com/photo-1502035618-7b6c66eda9d3?w=800",
  "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800",
];
function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section title="Memories" subtitle="A visual timeline of moments.">
      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {GALLERY.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            onClick={() => setOpen(src)}
            className="mb-4 block w-full overflow-hidden rounded-2xl glass group"
          >
            <img
              src={src}
              alt="Memory"
              loading="lazy"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
            />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-xl p-4"
          >
            <motion.img
              layoutId={open}
              src={open}
              alt="Preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-h-[85vh] rounded-2xl glow-ring"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ---------- CAKE ---------- */
function InteractiveCake() {
  const [lit, setLit] = useState(false);
  const [cut, setCut] = useState(false);
  const fire = () => {
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
  };
  return (
    <Section title="The Cake" subtitle="Click to light. Click again to cut.">
      <div className="glass rounded-3xl p-10 md:p-16 text-center">
        <button
          className="inline-block text-9xl transition-transform hover:scale-110 relative"
          onClick={() => {
            if (!lit) setLit(true);
            else if (!cut) {
              setCut(true);
              fire();
            }
          }}
          aria-label="Cake"
        >
          {cut ? "🍰" : "🎂"}
          {lit && !cut && (
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-3xl"
              style={{ filter: "drop-shadow(0 0 20px gold)" }}
            >
              🔥
            </span>
          )}
        </button>
        <p className="mt-6 text-muted-foreground">
          {!lit
            ? "Tap the cake to light the candle."
            : !cut
            ? "Now make a wish and tap again to cut."
            : "🎉 Wish made! Enjoy your slice."}
        </p>
      </div>
    </Section>
  );
}

/* ---------- GUEST BOOK ---------- */
type Wish = {
  id: string;
  name: string;
  country: string | null;
  emoji: string | null;
  message: string;
  avatar_url: string | null;
  likes: number;
  pinned: boolean;
  created_at: string;
};
const COUNTRIES = ["🇺🇸 USA", "🇮🇳 India", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇩🇪 Germany", "🇫🇷 France", "🇯🇵 Japan", "🇧🇷 Brazil", "🌍 Other"];

function GuestBook() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [form, setForm] = useState({ name: "", country: COUNTRIES[0], emoji: "🎉", message: "" });
  const [sending, setSending] = useState(false);
  const load = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .eq("approved", true)
      .order("pinned", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(50);
    if (data) setWishes(data as Wish[]);
  };
  useEffect(() => {
    void load();
    const ch = supabase
      .channel("wishes_rt")
      .on("postgres_changes", { event: "*", schema: "public", table: "wishes" }, () => load())
      .subscribe();
    return () => {
      void supabase.removeChannel(ch);
    };
  }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSending(true);
    const { error } = await supabase.from("wishes").insert({
      name: form.name,
      country: form.country,
      emoji: form.emoji,
      message: form.message,
    });
    setSending(false);
    if (error) toast.error("Couldn't send. Try again.");
    else {
      toast.success("Wish sent 🎉");
      setForm({ ...form, name: "", message: "" });
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.9 } });
    }
  };
  const like = async (w: Wish) => {
    await supabase.rpc("increment_wish_likes", { _wish_id: w.id });
  };
  const share = async (w: Wish) => {
    const text = `"${w.message}" — ${w.name}`;
    if (navigator.share) await navigator.share({ text }).catch(() => {});
    else {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }
  };
  return (
    <Section title="Birthday Wishes" subtitle="Leave a birthday wish for Yogi. It appears live for everyone!">
      <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8 grid gap-4 md:grid-cols-2">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary"
          required
        />
        <select
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          className="rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary"
        >
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="md:col-span-2 flex gap-3">
          <input
            value={form.emoji}
            onChange={(e) => setForm({ ...form, emoji: e.target.value })}
            maxLength={4}
            className="w-20 text-2xl text-center rounded-xl bg-secondary/70 px-4 py-3 outline-none"
          />
          <input
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your birthday wish…"
            className="flex-1 rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary"
            required
          />
        </div>
        <button
          disabled={sending}
          className="btn-luxury rounded-xl px-5 py-3 font-semibold md:col-span-2 disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send wish ✨"}
        </button>
      </form>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <AnimatePresence initial={false}>
          {wishes.map((w) => (
            <motion.div
              key={w.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`glass rounded-2xl p-5 ${w.pinned ? "glow-ring" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full btn-luxury grid place-items-center font-bold">
                  {w.name[0]?.toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold truncate">{w.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {w.country} · {new Date(w.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="ml-auto text-2xl">{w.emoji}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed">{w.message}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => like(w)} className="rounded-lg bg-secondary/70 px-3 py-1.5 text-xs flex items-center gap-1 hover:bg-secondary">
                  <Heart className="w-3 h-3 text-pink" /> {w.likes}
                </button>
                <button className="rounded-lg bg-secondary/70 px-3 py-1.5 text-xs flex items-center gap-1">
                  <Reply className="w-3 h-3" /> Reply
                </button>
                <button onClick={() => share(w)} className="rounded-lg bg-secondary/70 px-3 py-1.5 text-xs flex items-center gap-1">
                  <Share2 className="w-3 h-3" /> Share
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ---------- FRIEND WALL ---------- */
type WallPost = { id: string; name: string; memory: string; photo_url: string | null; created_at: string };
function FriendWall() {
  const [posts, setPosts] = useState<WallPost[]>([]);
  const [form, setForm] = useState({ name: "", memory: "", photo_url: "" });
  const load = async () => {
    const { data } = await supabase.from("friend_wall").select("*").order("created_at", { ascending: false }).limit(30);
    if (data) setPosts(data as WallPost[]);
  };
  useEffect(() => {
    void load();
    const ch = supabase
      .channel("wall_rt")
      .on("postgres_changes", { event: "*", schema: "public", table: "friend_wall" }, () => load())
      .subscribe();
    return () => {
      void supabase.removeChannel(ch);
    };
  }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.memory.trim()) return;
    const { error } = await supabase.from("friend_wall").insert({
      name: form.name,
      memory: form.memory,
      photo_url: form.photo_url || null,
    });
    if (error) toast.error("Couldn't post");
    else {
      toast.success("Posted!");
      setForm({ name: "", memory: "", photo_url: "" });
    }
  };
  return (
    <Section title="Friend Wall" subtitle="Share a photo and a memory.">
      <form onSubmit={submit} className="glass rounded-3xl p-6 grid md:grid-cols-3 gap-3">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="rounded-xl bg-secondary/70 px-4 py-3 outline-none" required />
        <input value={form.photo_url} onChange={(e) => setForm({ ...form, photo_url: e.target.value })} placeholder="Photo URL (optional)" className="rounded-xl bg-secondary/70 px-4 py-3 outline-none md:col-span-2" />
        <textarea value={form.memory} onChange={(e) => setForm({ ...form, memory: e.target.value })} placeholder="A short memory…" className="rounded-xl bg-secondary/70 px-4 py-3 outline-none md:col-span-3 min-h-[80px]" required />
        <button className="btn-luxury rounded-xl px-4 py-3 font-semibold md:col-span-3">Post to wall</button>
      </form>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-2xl overflow-hidden">
            {p.photo_url && <img src={p.photo_url} alt={p.name} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.memory}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- AI WISH GENERATOR ---------- */
function AIWish() {
  const gen = useServerFn(generateWish);
  const [form, setForm] = useState({ name: "", relationship: "friend", tone: "warm" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await gen({ data: { ...form, recipient: BIRTHDAY_CONFIG.name } });
      setResult(r.message);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("429")) toast.error("Rate limited — try in a moment.");
      else if (msg.includes("402")) toast.error("AI credits exhausted.");
      else toast.error("Couldn't generate. Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section title="AI Wish Generator" subtitle="Stuck for words? Let AI draft one for you.">
      <form onSubmit={run} className="glass rounded-3xl p-6 grid md:grid-cols-3 gap-3">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="rounded-xl bg-secondary/70 px-4 py-3" required />
        <input value={form.relationship} onChange={(e) => setForm({ ...form, relationship: e.target.value })} placeholder="Relationship" className="rounded-xl bg-secondary/70 px-4 py-3" required />
        <select value={form.tone} onChange={(e) => setForm({ ...form, tone: e.target.value })} className="rounded-xl bg-secondary/70 px-4 py-3">
          {["warm", "funny", "poetic", "professional", "emotional"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <button disabled={loading} className="btn-luxury rounded-xl px-4 py-3 font-semibold md:col-span-3 disabled:opacity-60">
          {loading ? "Generating…" : "Generate wish ✨"}
        </button>
      </form>
      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 glass rounded-2xl p-6 glow-ring">
          <p className="italic">{result}</p>
          <button onClick={() => { navigator.clipboard.writeText(result); toast.success("Copied"); }} className="mt-3 text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <Copy className="w-3 h-3" /> Copy
          </button>
        </motion.div>
      )}
    </Section>
  );
}

/* ---------- MEMORY CAPSULE ---------- */
function MemoryCapsule() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("capsule").insert({
      name: form.name,
      message: form.message,
      unlock_at: getBirthdayDate().toISOString(),
    });
    if (error) toast.error("Couldn't seal");
    else {
      setSent(true);
      toast.success("Sealed until birthday 🔒");
    }
  };
  return (
    <Section title="Memory Capsule" subtitle="Write a future message. Sealed until the birthday.">
      <div className="glass rounded-3xl p-8 max-w-2xl mx-auto text-center">
        {sent ? (
          <div className="py-8">
            <Lock className="w-12 h-12 mx-auto text-gold" />
            <p className="mt-4 text-muted-foreground">Your message is sealed. It unlocks on {getBirthdayDate().toDateString()}.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="rounded-xl bg-secondary/70 px-4 py-3" required />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message from the future…" className="rounded-xl bg-secondary/70 px-4 py-3 min-h-[120px]" required />
            <button className="btn-luxury rounded-xl px-4 py-3 font-semibold flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Seal until birthday
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}

/* ---------- POLL ---------- */
function Poll() {
  const OPTIONS = ["College", "School", "Friend", "Family", "Internet"];
  const [mounted, setMounted] = useState(false);
  const [votes, setVotes] = useState<number[]>([12, 8, 15, 6, 20]);
  const [voted, setVoted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Load votes from localStorage after mount
    try {
      const stored = localStorage.getItem("poll_votes");
      if (stored) {
        setVotes(JSON.parse(stored));
      }
    } catch {
      // Keep default values
    }
  }, []);
  
  const total = votes.reduce((a, b) => a + b, 0);
  const vote = (i: number) => {
    if (voted) return;
    const next = [...votes];
    next[i] += 1;
    setVotes(next);
    setVoted(true);
    if (mounted) {
      localStorage.setItem("poll_votes", JSON.stringify(next));
    }
  };
  
  return (
    <Section title="How do you know me?" subtitle="Pick one — see the crowd.">
      <div className="glass rounded-3xl p-6 max-w-xl mx-auto space-y-3">
        {OPTIONS.map((o, i) => {
          const pct = total ? (votes[i] / total) * 100 : 0;
          return (
            <button
              key={o}
              onClick={() => vote(i)}
              disabled={voted}
              className="w-full text-left relative rounded-xl bg-secondary/70 overflow-hidden hover:bg-secondary transition disabled:cursor-default"
            >
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, var(--color-purple), var(--color-pink))",
                  opacity: 0.4,
                }}
                suppressHydrationWarning
              />
              <div className="relative flex justify-between px-4 py-3 text-sm">
                <span>{o}</span>
                <span className="tabular-nums" suppressHydrationWarning>{votes[i]} · {Math.round(pct)}%</span>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- QUIZ ---------- */
const QUIZ = [
  { q: `What's ${BIRTHDAY_CONFIG.name}'s true passion?`, opts: ["Web Development", "AI/ML & Data Science", "Networking", "Design"], a: 1 },
  { q: `Where did ${BIRTHDAY_CONFIG.name} complete his BSc IT?`, opts: ["Delhi University", "DSVV, Haridwar", "IIT Roorkee", "LPU"], a: 1 },
  { q: "Which tech stack does he love the most for AI?", opts: ["TensorFlow", "PyTorch & YOLOv8", "Keras", "Scikit-Learn"], a: 1 },
  { q: `If ${BIRTHDAY_CONFIG.name} had a superpower, what would it be?`, opts: ["Invisibility", "Time Travel to learn more", "Read minds of LLMs", "Teleportation"], a: 2 },
  { q: "What's his preferred fuel for coding?", opts: ["Chai ☕", "Coffee ☕", "Red Bull ⚡", "Water 💧"], a: 0 },
];
function Quiz() {
  const [step, setStep] = useState(-1);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState("");
  
  const startQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) setStep(0);
  };
  
  const answer = (i: number) => {
    if (i === QUIZ[step].a) setScore((s) => s + 1);
    setStep(step + 1);
  };
  
  const done = step >= QUIZ.length;
  
  return (
    <Section title="How Well Do You Know Yogi?" subtitle="Take this fun quiz to test your knowledge!">
      <div className="glass rounded-3xl p-8 max-w-xl mx-auto text-center">
        {step === -1 ? (
          <form onSubmit={startQuiz} className="space-y-4">
            <div className="text-4xl mb-4">🕵️‍♂️</div>
            <h3 className="text-xl font-bold">Enter your name to begin</h3>
            <input 
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary text-center"
              required
            />
            <button className="btn-luxury rounded-xl px-6 py-3 font-semibold w-full">
              Start Quiz 🚀
            </button>
          </form>
        ) : done ? (
          <>
            <div className="text-5xl">🏆</div>
            <h3 className="mt-4 text-2xl font-bold text-gradient">Hey {playerName}!</h3>
            <div className="mt-3 text-4xl font-black">{score} / {QUIZ.length}</div>
            <p className="mt-4 text-lg">
              {score === QUIZ.length ? "Wow! You are a true bestie! 🎉" : 
               score >= 3 ? "Not bad! You know Yogi pretty well! 👍" : 
               "Looks like you need to spend more time with Yogi! 😅"}
            </p>
            <button onClick={() => { setStep(-1); setScore(0); setPlayerName(""); }} className="mt-6 btn-luxury rounded-xl px-6 py-3 text-sm font-semibold">
              Retake Quiz
            </button>
          </>
        ) : (
          <>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-4">Question {step + 1} of {QUIZ.length}</div>
            <h3 className="mt-2 text-xl font-bold">{QUIZ[step].q}</h3>
            <div className="mt-6 grid gap-3">
              {QUIZ[step].opts.map((o, i) => (
                <button key={o} onClick={() => answer(i)} className="rounded-xl bg-secondary/70 hover:bg-secondary px-4 py-3 text-sm text-left transition-colors border border-transparent hover:border-primary/30">
                  {o}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
}

/* ---------- GIFTS ---------- */
function Gifts() {
  const [showQR, setShowQR] = useState(false);
  
  return (
    <>
      <Section title="Send a Gift" subtitle="Only if you insist ❤️">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Buy a coffee", emoji: "☕" },
            { label: "UPI", emoji: "💳" },
            { label: "PayPal", emoji: "💝" },
            { label: "Send a gift", emoji: "🎁" },
          ].map((g) => (
            <motion.button
              key={g.label}
              onClick={() => setShowQR(true)}
              whileHover={{ y: -6, rotate: -1 }}
              className="glass rounded-2xl p-6 text-center block w-full"
            >
              <div className="text-4xl">{g.emoji}</div>
              <div className="mt-2 font-semibold">{g.label}</div>
            </motion.button>
          ))}
        </div>
      </Section>

      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              <span className="text-gradient">Gift time! 🎁✨</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="glass rounded-2xl p-4 flex items-center justify-center">
              <img 
                src="/qrcode.jpeg" 
                alt="Payment QR Code" 
                className="w-full max-w-[280px] h-auto rounded-xl"
              />
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-gradient">
                🎉 Main gift le lunga! 🎉
              </p>
              <p className="text-sm text-muted-foreground">
                Tum bass paise daal do 😄💰
              </p>
              <p className="text-xs text-muted-foreground/80 mt-4">
                Scan karo aur surprise do! 🚀
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ---------- SOCIAL LINKS ---------- */
function Socials() {
  const s = BIRTHDAY_CONFIG.socials;
  const items = [
    { icon: Github, href: s.github, label: "GitHub" },
    { icon: Linkedin, href: s.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: s.instagram, label: "Instagram" },
    { icon: Youtube, href: s.youtube, label: "YouTube" },
    { icon: Globe, href: s.portfolio, label: "Portfolio" },
    { icon: MessageCircle, href: s.whatsapp, label: "WhatsApp" },
    { icon: Mail, href: s.email, label: "Email" },
  ];
  return (
    <Section title="Say Hello" subtitle="Reach out anywhere.">
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <motion.a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              className="glass rounded-2xl p-4 flex flex-col items-center gap-2 min-w-[100px]"
            >
              <Icon className="w-6 h-6 text-gradient" />
              <span className="text-xs text-muted-foreground">{it.label}</span>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- FLOATING WIDGETS ---------- */
function FloatingWidgets() {
  const [muted, setMuted] = useState(true);
  const [dark, setDark] = useState(true);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleMusic = () => {
    setMuted((m) => {
      const nm = !m;
      if (!audioRef.current) {
        // Upbeat festive birthday tune
        const a = new Audio("https://cdn.pixabay.com/download/audio/2022/01/18/audio_8dd9fbcaf0.mp3?filename=happy-birthday-to-you-bossa-nova-85558.mp3");
        a.loop = true;
        a.volume = 0.5;
        audioRef.current = a;
      }
      if (nm) audioRef.current.pause();
      else audioRef.current.play().catch(() => {});
      return nm;
    });
  };

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) await navigator.share({ url, title: `${BIRTHDAY_CONFIG.name}'s Birthday` }).catch(() => {});
    else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    }
  };

  const SURPRISES = [
    "The best is yet to come 🚀",
    "You're one of a kind. Truly.",
    "Fun fact: laughter adds days to your life.",
    "Wishing you a year of soft mornings and loud dreams.",
    "You inspire more people than you know.",
  ];
  const [surprise, setSurprise] = useState("");

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => { setSurprise(SURPRISES[Math.floor(Math.random() * SURPRISES.length)]); setSurpriseOpen(true); }} className="btn-luxury rounded-full w-14 h-14 grid place-items-center shadow-2xl">
          <Gift className="w-6 h-6" />
        </motion.button>
        <motion.button title="Play Birthday Song" whileHover={{ scale: 1.1 }} onClick={toggleMusic} className="glass rounded-full w-12 h-12 grid place-items-center relative group">
          <Music className={`w-5 h-5 ${muted ? "opacity-50" : "text-pink"}`} />
          {muted && <span className="absolute right-14 bg-background border border-border text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity font-medium shadow-xl">Play Song</span>}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => setDark((d) => !d)} className="glass rounded-full w-12 h-12 grid place-items-center">
          {dark ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} onClick={share} className="glass rounded-full w-12 h-12 grid place-items-center">
          <Share2 className="w-5 h-5" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => setChatOpen((v) => !v)} className="glass rounded-full w-12 h-12 grid place-items-center">
          <Sparkles className="w-5 h-5 text-purple" />
        </motion.button>
      </div>

      <AnimatePresence>
        {surpriseOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSurpriseOpen(false)} className="fixed inset-0 z-50 bg-background/70 backdrop-blur-xl grid place-items-center p-6">
            <motion.div initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }} onClick={(e) => e.stopPropagation()} className="glass glow-ring rounded-3xl p-10 max-w-md text-center">
              <div className="text-5xl">🎁</div>
              <h3 className="mt-3 text-2xl font-bold text-gradient">A little surprise</h3>
              <p className="mt-3">{surprise}</p>
              <button onClick={() => setSurpriseOpen(false)} className="mt-5 btn-luxury rounded-xl px-4 py-2 text-sm">Close</button>
            </motion.div>
          </motion.div>
        )}

        {chatOpen && <ChatBot onClose={() => setChatOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ---------- CHATBOT (simple local) ---------- */
const KB: Record<string, string> = {
  name: `They're ${BIRTHDAY_CONFIG.name}.`,
  birthday: `${BIRTHDAY_CONFIG.name}'s birthday is ${getBirthdayDate().toDateString()}.`,
  age: `They were born in ${BIRTHDAY_CONFIG.birthYear}.`,
  work: BIRTHDAY_CONFIG.tagline,
  hello: "Hi! Ask me anything about the birthday.",
};
function answer(q: string): string {
  const t = q.toLowerCase();
  if (/name/.test(t)) return KB.name;
  if (/birth|when|date/.test(t)) return KB.birthday;
  if (/age|old|year/.test(t)) return KB.age;
  if (/work|do|job|about/.test(t)) return KB.work;
  if (/hi|hello|hey/.test(t)) return KB.hello;
  return "I only know a little for now — try asking about the birthday, age, or what they do.";
}
function ChatBot({ onClose }: { onClose: () => void }) {
  const [msgs, setMsgs] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: `Hi! Ask me anything about ${BIRTHDAY_CONFIG.name}.` },
  ]);
  const [q, setQ] = useState("");
  const send = () => {
    if (!q.trim()) return;
    const user = q;
    setMsgs((m) => [...m, { role: "user", text: user }]);
    setQ("");
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: answer(user) }]), 300);
  };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm glass rounded-2xl overflow-hidden flex flex-col" style={{ height: 420 }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple" /> Ask me anything</div>
        <button onClick={onClose}><X className="w-4 h-4" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {msgs.map((m, i) => (
          <div key={i} className={`text-sm px-3 py-2 rounded-2xl max-w-[85%] ${m.role === "user" ? "ml-auto btn-luxury" : "bg-secondary/80"}`}>{m.text}</div>
        ))}
      </div>
      <div className="p-3 border-t border-border flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} className="flex-1 rounded-xl bg-secondary/70 px-3 py-2 text-sm outline-none" placeholder="Ask about the birthday…" />
        <button onClick={send} className="btn-luxury rounded-xl px-3"><Send className="w-4 h-4" /></button>
      </div>
    </motion.div>
  );
}

/* ---------- VISITOR COUNTER ---------- */
function VisitorCounter() {
  const [mounted, setMounted] = useState(false);
  const [total, setTotal] = useState(0);
  const [countries, setCountries] = useState(0);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    (async () => {
      const sid = localStorage.getItem("sid") || crypto.randomUUID();
      localStorage.setItem("sid", sid);
      if (!localStorage.getItem("visited_today")) {
        await supabase.from("visitors").insert({ session_id: sid });
        localStorage.setItem("visited_today", "1");
      }
      const { data } = await supabase.rpc("get_visitor_stats");
      const row = Array.isArray(data) ? data[0] : data;
      if (row) {
        setTotal(Number(row.total) || 0);
        setCountries(Number(row.countries) || 0);
      }
    })();
  }, [mounted]);
  
  if (!mounted) {
    return (
      <div className="fixed top-4 left-4 z-40 glass rounded-full px-4 py-2 text-xs flex items-center gap-3">
        <span>👀 0</span>
        <span className="opacity-60">·</span>
        <span>🌍 0</span>
      </div>
    );
  }
  
  return (
    <div className="fixed top-4 left-4 z-40 glass rounded-full px-4 py-2 text-xs flex items-center gap-3">
      <span suppressHydrationWarning>👀 {total.toLocaleString()}</span>
      <span className="opacity-60">·</span>
      <span suppressHydrationWarning>🌍 {countries}</span>
    </div>
  );
}

/* ---------- MAIN ---------- */
export default function BirthdayApp() {
  const [reveal, setReveal] = useState(false);
  return (
    <div className="aurora-bg min-h-screen relative overflow-hidden">
      <Toaster position="top-center" />
      <BackgroundFX />
      <VisitorCounter />

      <div className="relative z-10">
        <Hero onReveal={() => setReveal(true)} />
        <LifeStats />
        <Timeline />
        <Achievements />
        <Gallery />
        <InteractiveCake />
        <GuestBook />
        <AIWish />
        <FriendWall />
        <MemoryCapsule />
        <Poll />
        <Quiz />
        <Gifts />
        <Socials />

        <footer className="text-center py-10 text-xs text-muted-foreground">
          Made with ❤️ · <a href="/admin" className="underline hover:text-foreground">Admin</a>
        </footer>
      </div>

      <FloatingWidgets />

      <AnimatePresence>
        {reveal && <BirthdayReveal onClose={() => setReveal(false)} />}
      </AnimatePresence>
    </div>
  );
}