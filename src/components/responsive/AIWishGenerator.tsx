import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Copy, Sparkles, Loader2 } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton, ResponsiveInput, ResponsiveSelect } from "./ResponsiveSection";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";
import { useServerFn } from "@tanstack/react-start";
import { generateWish } from "@/lib/ai-wish.functions";

const TONES = [
  { value: "warm", label: "Warm" },
  { value: "funny", label: "Funny" },
  { value: "poetic", label: "Poetic" },
  { value: "professional", label: "Professional" },
  { value: "emotional", label: "Emotional" },
];

const RELATIONSHIPS = [
  { value: "friend", label: "Friend" },
  { value: "colleague", label: "Colleague" },
  { value: "family", label: "Family" },
  { value: "mentor", label: "Mentor" },
  { value: "student", label: "Student" },
];

export function AIWishGenerator() {
  const generateWishFn = useServerFn(generateWish);
  const [form, setForm] = useState({
    name: "",
    relationship: "friend",
    tone: "warm",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await generateWishFn({
        data: {
          ...form,
          recipient: BIRTHDAY_CONFIG.name,
        },
      });
      setResult(response.message);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("429")) {
        toast.error("Rate limited — try in a moment.");
      } else if (msg.includes("402")) {
        toast.error("AI credits exhausted.");
      } else {
        toast.error("Couldn't generate. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  return (
    <ResponsiveSection
      id="ai-wish"
      title="AI Wish Generator"
      subtitle="Stuck for words? Let AI draft one for you."
    >
      {/* Generator Form */}
      <form onSubmit={handleGenerate} className="glass rounded-3xl p-5 sm:p-6 md:p-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ResponsiveInput
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="Your name"
            required
            label="Your Name"
          />
          <ResponsiveSelect
            value={form.relationship}
            onChange={(v) => setForm({ ...form, relationship: v })}
            options={RELATIONSHIPS}
            label="Relationship"
          />
          <ResponsiveSelect
            value={form.tone}
            onChange={(v) => setForm({ ...form, tone: v })}
            options={TONES}
            label="Tone"
          />
        </div>

        <div className="mt-5">
          <ResponsiveButton
            type="submit"
            disabled={loading || !form.name.trim()}
            fullWidth
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 inline animate-spin" />
                Generating…
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Generate wish ✨
              </>
            )}
          </ResponsiveButton>
        </div>
      </form>

      {/* Generated Result */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <ResponsiveCard glow={true}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <p className="text-base sm:text-lg leading-relaxed italic">
                "{result}"
              </p>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </ResponsiveCard>
        </motion.div>
      )}
    </ResponsiveSection>
  );
}