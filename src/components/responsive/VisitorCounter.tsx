import { motion } from "framer-motion";
import { Users, Globe, TrendingUp } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, Skeleton } from "./ResponsiveSection";
import { useVisitorStats } from "./useDynamicData";

export function VisitorCounter() {
  const { stats, loading } = useVisitorStats();

  return (
    <ResponsiveSection
      id="visitors"
      title="Visitor Insights"
      subtitle="See who's celebrating with us!"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Total Visitors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <ResponsiveCard>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-purple/20 grid place-items-center">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-purple" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Visitors</p>
                {loading ? (
                  <Skeleton className="h-8 w-20 mt-1" />
                ) : (
                  <p className="text-2xl sm:text-3xl font-black text-gradient">
                    {stats.total_visitors.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span>Live counter</span>
            </div>
          </ResponsiveCard>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ResponsiveCard>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-pink/20 grid place-items-center">
                <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-pink" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Countries</p>
                <p className="text-2xl sm:text-3xl font-black text-gradient">
                  {loading ? "—" : stats.country_stats.length}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {loading ? (
                <>
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </>
              ) : (
                stats.country_stats.slice(0, 4).map((c) => (
                  <span
                    key={c.country}
                    className="px-2 py-1 rounded-full bg-secondary/50 text-xs"
                  >
                    {c.country}
                  </span>
                ))
              )}
            </div>
          </ResponsiveCard>
        </motion.div>

        {/* Top Country */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <ResponsiveCard>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gold/20 grid place-items-center">
                <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Top Country</p>
                {loading ? (
                  <Skeleton className="h-8 w-24 mt-1" />
                ) : (
                  <p className="text-xl sm:text-2xl font-black text-gradient">
                    {stats.country_stats[0]?.country || "—"}
                  </p>
                )}
              </div>
            </div>
            {loading ? (
              <Skeleton className="h-3 w-full rounded" />
            ) : stats.country_stats[0] ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{stats.country_stats[0].country}</span>
                  <span>{Math.round((stats.country_stats[0].count / stats.total_visitors) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple to-pink"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(stats.country_stats[0].count / stats.total_visitors) * 100}%` 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No data yet</p>
            )}
          </ResponsiveCard>
        </motion.div>
      </div>

      {/* All Countries List */}
      {!loading && stats.country_stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <ResponsiveCard>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">All Countries</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
              {stats.country_stats.map((country, index) => (
                <div
                  key={country.country}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/50 text-xs sm:text-sm"
                >
                  <span className="truncate">{country.country}</span>
                  <span className="font-semibold text-gold">{country.count}</span>
                </div>
              ))}
            </div>
          </ResponsiveCard>
        </motion.div>
      )}
    </ResponsiveSection>
  );
}