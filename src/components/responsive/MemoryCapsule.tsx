import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Lock, Unlock } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton, ResponsiveInput, ResponsiveTextarea } from "./ResponsiveSection";
import { getBirthdayDate } from "@/lib/birthday-config";
import { supabase } from "@/integrations/client";

export function MemoryCapsule() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const birthdayDate = getBirthdayDate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { error } = await supabase.from("capsule").insert({
        name: form.name,
        message: form.message,
        unlock_at: birthdayDate.toISOString(),
      });

      if (error) throw error;

      setSent(true);
      toast.success("Sealed until birthday 🔒");
    } catch (err) {
      toast.error("Couldn't seal the capsule");
    } finally {
      setSending(false);
    }
  };

  return (
    <ResponsiveSection
      id="capsule"
      title="Memory Capsule"
      subtitle="Write a future message. Sealed until the birthday."
    >
      <div className="glass rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto text-center">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 sm:py-12"
          >
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold/20 grid place-items-center mx-auto mb-4 sm:mb-6">
              <Lock className="w-8 sm:w-10 h-8 sm:h-10 text-gold" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3">
              Capsule Sealed! 🔒
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your message is sealed and will unlock on{" "}
              <span className="font-semibold text-foreground">
                {birthdayDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-5 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-gold" />
                <span className="text-sm text-muted-foreground">
                  This message will be revealed on the birthday
                </span>
              </div>
            </div>

            <ResponsiveInput
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your name"
              required
              label="Your Name"
            />

            <ResponsiveTextarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              placeholder="Message from the future…"
              required
              rows={4}
              label="Your Message"
            />

            <ResponsiveButton
              type="submit"
              disabled={sending || !form.name.trim() || !form.message.trim()}
              fullWidth
            >
              <Unlock className="w-4 h-4 mr-2 inline" />
              {sending ? "Sealing…" : "Seal Capsule 🔒"}
            </ResponsiveButton>
          </form>
        )}
      </div>
    </ResponsiveSection>
  );
}