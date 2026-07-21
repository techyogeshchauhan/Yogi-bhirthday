import { motion } from "framer-motion";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { BookOpen, Rocket, Award, Trophy, Star, Github } from "lucide-react";

interface Achievement {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const achievementsData: Achievement[] = [
  { label: "Research Papers", value: "12+", icon: BookOpen },
  { label: "Projects Shipped", value: "40+", icon: Rocket },
  { label: "Certificates", value: "20", icon: Award },
  { label: "Awards", value: "6", icon: Trophy },
  { label: "Years Experience", value: "8", icon: Star },
  { label: "GitHub Commits", value: "3k+", icon: Github },
];

export function Achievements() {
  return (
    <ResponsiveSection
      id="achievements"
      title="Achievements"
      subtitle="A snapshot of the milestones."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {achievementsData.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, rotate: -0.5 }}
            >
              <ResponsiveCard 
                className="relative overflow-hidden group"
                hover={true}
              >
                {/* Background gradient blob */}
                <div className="absolute -top-10 -right-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 blur-2xl opacity-50 sm:opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-gold relative z-10" />
                <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-black text-gradient relative z-10">
                  {achievement.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground relative z-10">
                  {achievement.label}
                </div>
              </ResponsiveCard>
            </motion.div>
          );
        })}
      </div>
    </ResponsiveSection>
  );
}