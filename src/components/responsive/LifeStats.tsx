import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { BIRTHDAY_CONFIG, getBirthdayDate } from "@/lib/birthday-config";

export function LifeStats() {
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

  const stats = [
    { label: "Age", value: years, format: (v: number) => v.toLocaleString() },
    { label: "Days lived", value: days, format: (v: number) => v.toLocaleString() },
    { label: "Hours lived", value: hours, format: (v: number) => v.toLocaleString() },
    { label: "Minutes lived", value: minutes, format: (v: number) => v.toLocaleString() },
    { label: "Seconds lived", value: seconds, format: (v: number) => v.toLocaleString() },
  ];

  return (
    <ResponsiveSection
      id="stats"
      title="Life in Numbers"
      subtitle="Every second counts."
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ResponsiveCard className="text-center py-4 sm:py-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold tabular-nums text-gradient" suppressHydrationWarning>
                {stat.format(stat.value)}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 sm:mt-2">
                {stat.label}
              </div>
            </ResponsiveCard>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 sm:mt-8 glass rounded-2xl p-4 sm:p-5">
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
          <span>Birthday year progress</span>
          <span className="font-medium text-gradient">{Math.round(progress * 100)}%</span>
        </div>
        <div className="h-2 sm:h-3 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--color-purple), var(--color-pink), var(--color-gold))",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </ResponsiveSection>
  );
}