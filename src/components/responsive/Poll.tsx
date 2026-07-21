import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Users } from "lucide-react";
import { ResponsiveSection, ResponsiveCard } from "./ResponsiveSection";
import { usePoll } from "./useDynamicData";

interface PollOption {
  id: string;
  text: string;
}

const POLL_OPTIONS: PollOption[] = [
  { id: "colleague", text: "Colleague" },
  { id: "friend", text: "Friend" },
  { id: "student", text: "Student" },
  { id: "mentor", text: "Mentor" },
  { id: "family", text: "Family" },
  { id: "other", text: "Other" },
];

export function Poll() {
  const [mounted, setMounted] = useState(false);
  const { votes, userVoted, castVote, totalVotes } = usePoll("know_yogi", POLL_OPTIONS);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ResponsiveSection
      id="poll"
      title="How Do You Know Yogi?"
      subtitle="Cast your vote and see results live."
    >
      <div className="max-w-2xl mx-auto">
        <ResponsiveCard>
          <div className="space-y-3 sm:space-y-4">
            {POLL_OPTIONS.map((option) => {
              const optionVotes = votes[option.id] || 0;
              const percentage = totalVotes > 0 ? (optionVotes / totalVotes) * 100 : 0;
              const hasVoted = userVoted === option.id;

              return (
                <motion.button
                  key={option.id}
                  onClick={() => !userVoted && castVote(option.id)}
                  disabled={!!userVoted}
                  className={`
                    w-full relative overflow-hidden rounded-xl p-3 sm:p-4 text-left transition-all
                    ${userVoted 
                      ? "bg-secondary/50 cursor-default" 
                      : "hover:bg-secondary/70 cursor-pointer"
                    }
                    ${hasVoted ? "ring-2 ring-primary" : ""}
                  `}
                  whileHover={!userVoted ? { scale: 1.01 } : {}}
                  whileTap={!userVoted ? { scale: 0.99 } : {}}
                >
                  {/* Progress bar background */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Content */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {hasVoted && (
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      )}
                      <span className="font-medium text-sm sm:text-base">{option.text}</span>
                    </div>

                    {/* Vote count and percentage */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {totalVotes > 0 && (
                        <>
                          <span className="font-semibold">{Math.round(percentage)}%</span>
                          <span className="text-xs">({optionVotes})</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Total votes */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{totalVotes} {totalVotes === 1 ? "vote" : "votes"}</span>
          </div>

          {!userVoted && (
            <p className="mt-4 text-xs text-center text-muted-foreground">
              Click an option to vote
            </p>
          )}
        </ResponsiveCard>
      </div>
    </ResponsiveSection>
  );
}