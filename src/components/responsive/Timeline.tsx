import { motion } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { Code2, GraduationCap, Brain, Rocket, BookOpen, Trophy } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const timelineData: TimelineItem[] = [
  { year: "2020", title: "Started BSc IT — DSVV, Haridwar", icon: Code2 },
  { year: "2023", title: "Graduated BSc Information Technology", icon: GraduationCap },
  { year: "2024", title: "Research Associate @ CAIR, DSVV", icon: Brain },
  { year: "2025", title: "Data Science Intern — Azure AI & YOLOv8", icon: Rocket },
  { year: "2026-1", title: "Published Research + MCA Data Science", icon: BookOpen },
  { year: "2026-2", title: "Lecturer @ Haridwar University (CSE)", icon: Trophy },
];

export function Timeline() {
  return (
    <ResponsiveSection
      id="timeline"
      title="The Journey"
      subtitle="A short timeline of milestones."
    >
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-pink to-gold opacity-30 md:opacity-40" />
        
        <div className="space-y-8 sm:space-y-10">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            const displayYear = item.year.split("-")[0];

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                  relative pl-10 sm:pl-0 sm:w-1/2 
                  ${isLeft ? "sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"}
                `}
              >
                {/* Dot on timeline */}
                <div
                  className={`
                    absolute left-4 sm:left-auto sm:right-full sm:mr-[-12px] top-4 
                    w-6 h-6 sm:w-7 sm:h-7 rounded-full btn-luxury grid place-items-center
                    ${!isLeft ? "sm:left-0 sm:right-auto sm:ml-[-12px] sm:mr-0" : ""}
                  `}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                <ResponsiveCard className="inline-block w-full text-left sm:text-left">
                  <div className="text-xs sm:text-sm text-gold tracking-widest font-mono">
                    {displayYear}
                  </div>
                  <div className="mt-1 sm:mt-2 text-base sm:text-lg font-semibold">
                    {item.title}
                  </div>
                  {item.description && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </ResponsiveCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ResponsiveSection>
  );
}