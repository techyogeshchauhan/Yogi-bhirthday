import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Globe, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: BIRTHDAY_CONFIG.socials.github, icon: Github, color: "hover:bg-gray-800" },
  { name: "LinkedIn", url: BIRTHDAY_CONFIG.socials.linkedin, icon: Linkedin, color: "hover:bg-blue-600" },
  { name: "Instagram", url: BIRTHDAY_CONFIG.socials.instagram, icon: Instagram, color: "hover:bg-pink-600" },
  { name: "YouTube", url: BIRTHDAY_CONFIG.socials.youtube, icon: Youtube, color: "hover:bg-red-600" },
  { name: "Portfolio", url: BIRTHDAY_CONFIG.socials.portfolio, icon: Globe, color: "hover:bg-purple-600" },
  { name: "WhatsApp", url: BIRTHDAY_CONFIG.socials.whatsapp, icon: MessageCircle, color: "hover:bg-green-500" },
  { name: "Email", url: BIRTHDAY_CONFIG.socials.email, icon: Mail, color: "hover:bg-yellow-500" },
];

export function SocialLinks() {
  return (
    <ResponsiveSection
      id="socials"
      title="Connect With Me"
      subtitle="Let's stay in touch!"
    >
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative flex items-center gap-2 sm:gap-3
                px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl
                bg-secondary/50 hover:bg-secondary
                border border-white/5 hover:border-white/10
                transition-all duration-300
              `}
            >
              <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm sm:text-base font-medium hidden sm:inline">{social.name}</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 text-center"
      >
        <p className="text-sm sm:text-base text-muted-foreground">
          Made with ❤️ for {BIRTHDAY_CONFIG.name}'s Birthday
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </motion.div>
    </ResponsiveSection>
  );
}