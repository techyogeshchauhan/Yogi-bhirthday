import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { Heart, Reply, Share2, Send } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton, ResponsiveInput, ResponsiveSelect } from "./ResponsiveSection";
import { useWishes, Wish } from "./useDynamicData";

const COUNTRIES = [
  { value: "🇺🇸 USA", label: "🇺🇸 USA" },
  { value: "🇮🇳 India", label: "🇮🇳 India" },
  { value: "🇬🇧 UK", label: "🇬🇧 UK" },
  { value: "🇨🇦 Canada", label: "🇨🇦 Canada" },
  { value: "🇦🇺 Australia", label: "🇦🇺 Australia" },
  { value: "🇩🇪 Germany", label: "🇩🇪 Germany" },
  { value: "🇫🇷 France", label: "🇫🇷 France" },
  { value: "🇯🇵 Japan", label: "🇯🇵 Japan" },
  { value: "🇧🇷 Brazil", label: "🇧🇷 Brazil" },
  { value: "🌍 Other", label: "🌍 Other" },
];

const EMOJIS = ["🎉", "🎊", "🥳", "🎈", "💝", "❤️", "🎁", "✨", "🌟", "💖"];

function WishCard({ wish, onLike, onShare }: { wish: Wish; onLike: (id: string) => void; onShare: (wish: Wish) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ResponsiveCard className={wish.pinned ? "glow-ring" : ""} hover={true}>
        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Avatar */}
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full btn-luxury grid place-items-center font-bold text-lg shrink-0">
            {wish.name[0]?.toUpperCase()}
          </div>
          
          {/* Name & Meta */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm sm:text-base truncate">{wish.name}</span>
              {wish.pinned && <span className="text-lg">📌</span>}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground truncate">
              {wish.country} · {new Date(wish.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>

          {/* Emoji */}
          <div className="text-2xl sm:text-3xl shrink-0">
            {wish.emoji || "💝"}
          </div>
        </div>

        {/* Message */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          {wish.message}
        </p>

        {/* Actions */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => onLike(wish.id)}
            className="rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition"
          >
            <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-pink" />
            <span>{wish.likes || 0}</span>
          </button>
          <button className="rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition">
            <Reply className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="hidden sm:inline">Reply</span>
          </button>
          <button
            onClick={() => onShare(wish)}
            className="rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition"
          >
            <Share2 className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </ResponsiveCard>
    </motion.div>
  );
}

function WishForm({ onSubmit, sending }: { onSubmit: (data: { name: string; country: string; emoji: string; message: string }) => void; sending: boolean }) {
  const [form, setForm] = useState({
    name: "",
    country: COUNTRIES[0].value,
    emoji: "🎉",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <ResponsiveInput
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Your name"
          required
          label="Name"
        />
        <ResponsiveSelect
          value={form.country}
          onChange={(v) => setForm({ ...form, country: v })}
          options={COUNTRIES}
          label="Country"
        />
      </div>

      <div className="flex gap-3 sm:gap-4">
        {/* Emoji picker */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Emoji</label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {EMOJIS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setForm({ ...form, emoji })}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-lg sm:text-xl transition-all ${
                  form.emoji === emoji
                    ? "bg-primary/20 ring-2 ring-primary"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <ResponsiveInput
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
            placeholder="Your birthday wish…"
            required
            label="Message"
          />
        </div>
      </div>

      <ResponsiveButton
        type="submit"
        disabled={sending || !form.name.trim() || !form.message.trim()}
        fullWidth
      >
        <Send className="w-4 h-4 mr-2 inline" />
        {sending ? "Sending…" : "Send wish ✨"}
      </ResponsiveButton>
    </form>
  );
}

export function GuestBook() {
  const { wishes, loading, addWish, likeWish } = useWishes({ limit: 50 });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (data: { name: string; country: string; emoji: string; message: string }) => {
    setSending(true);
    try {
      await addWish({
        name: data.name,
        country: data.country,
        emoji: data.emoji,
        message: data.message,
      });
      toast.success("Wish sent 🎉");
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.9 } });
    } catch (err) {
      toast.error("Couldn't send. Try again.");
    } finally {
      setSending(false);
    }
  };

  const handleLike = async (id: string) => {
    await likeWish(id);
  };

  const handleShare = async (wish: Wish) => {
    const text = `"${wish.message}" — ${wish.name}`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }
  };

  return (
    <ResponsiveSection
      id="wishes"
      title="Birthday Wishes"
      subtitle="Leave a birthday wish for Yogesh. It appears live for everyone!"
    >
      {/* Wish Form */}
      <WishForm onSubmit={handleSubmit} sending={sending} />

      {/* Wishes Grid */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        <AnimatePresence mode="popLayout">
          {loading ? (
            // Loading skeletons
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass rounded-2xl p-5 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary" />
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-secondary rounded mb-2" />
                      <div className="h-3 w-32 bg-secondary/50 rounded" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 bg-secondary/50 rounded w-full" />
                    <div className="h-3 bg-secondary/50 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : wishes.length === 0 ? (
            <div className="glass rounded-2xl p-8 sm:p-12 text-center">
              <p className="text-muted-foreground">No wishes yet. Be the first! 🎂</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {wishes.map((wish) => (
                <WishCard
                  key={wish.id}
                  wish={wish}
                  onLike={handleLike}
                  onShare={handleShare}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </ResponsiveSection>
  );
}