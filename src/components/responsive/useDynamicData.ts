import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/client";

// Types for Supabase data
export interface Wish {
  id: string;
  name: string;
  country: string | null;
  emoji: string | null;
  message: string;
  avatar_url: string | null;
  likes: number;
  pinned: boolean;
  approved: boolean;
  created_at: string;
}

export interface FriendWallPost {
  id: string;
  name: string;
  memory: string;
  photo_url: string | null;
  approved: boolean;
  created_at: string;
}

export interface Capsule {
  id: string;
  name: string;
  message: string;
  unlock_at: string;
  created_at: string;
}

export interface VisitorStats {
  total_visitors: number;
  country_stats: { country: string; count: number }[];
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

// Hook for fetching wishes
export function useWishes(options?: { 
  limit?: number; 
  approvedOnly?: boolean;
  includePinned?: boolean;
}) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWishes = useCallback(async () => {
    try {
      setLoading(true);
      let query = supabase
        .from("wishes")
        .select("*")
        .order("pinned", { ascending: false })
        .order("created_at", { ascending: false });

      if (options?.approvedOnly !== false) {
        query = query.eq("approved", true);
      }

      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error: err } = await query;

      if (err) throw err;
      setWishes(data as Wish[]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch wishes");
    } finally {
      setLoading(false);
    }
  }, [options?.limit, options?.approvedOnly]);

  useEffect(() => {
    fetchWishes();

    // Subscribe to real-time changes
    const channel = supabase
      .channel("wishes_realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "wishes" }, fetchWishes)
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [fetchWishes]);

  const addWish = async (wish: Omit<Wish, "id" | "created_at" | "likes" | "pinned" | "approved">) => {
    const { error: err } = await supabase.from("wishes").insert({
      name: wish.name,
      country: wish.country,
      emoji: wish.emoji,
      message: wish.message,
    });
    if (err) throw err;
  };

  const likeWish = async (id: string) => {
    await supabase.rpc("increment_wish_likes", { _wish_id: id });
  };

  return { wishes, loading, error, refetch: fetchWishes, addWish, likeWish };
}

// Hook for fetching friend wall posts
export function useFriendWall(limit = 30) {
  const [posts, setPosts] = useState<FriendWallPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error: err } = await supabase
        .from("friend_wall")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (err) throw err;
      setPosts(data as FriendWallPost[]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchPosts();

    const channel = supabase
      .channel("friend_wall_realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "friend_wall" }, fetchPosts)
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [fetchPosts]);

  const addPost = async (post: { name: string; memory: string; photo_url?: string }) => {
    const { error: err } = await supabase.from("friend_wall").insert({
      name: post.name,
      memory: post.memory,
      photo_url: post.photo_url || null,
    });
    if (err) throw err;
  };

  return { posts, loading, error, refetch: fetchPosts, addPost };
}

// Hook for visitor stats
export function useVisitorStats() {
  const [stats, setStats] = useState<VisitorStats>({ total_visitors: 0, country_stats: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: countData } = await supabase
          .from("visitors")
          .select("id", { count: "exact", head: true });

        const { data: countryData } = await supabase
          .from("visitors")
          .select("country")
          .not("country", "is", null);

        const countryStats: Record<string, number> = {};
        countryData?.forEach((v) => {
          if (v.country) {
            countryStats[v.country] = (countryStats[v.country] || 0) + 1;
          }
        });

        setStats({
          total_visitors: countData?.length || 0,
          country_stats: Object.entries(countryStats)
            .map(([country, count]) => ({ country, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10),
        });
      } catch (err) {
        console.error("Failed to fetch visitor stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    const channel = supabase
      .channel("visitors_realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "visitors" }, fetchStats)
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  return { stats, loading };
}

// Hook for local storage poll
export function usePoll(questionId: string, options: PollOption[]) {
  const [votes, setVotes] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem(`poll_${questionId}`);
    if (saved) return JSON.parse(saved);
    // Initialize with provided options
    const initial: Record<string, number> = {};
    options.forEach((opt) => {
      initial[opt.id] = 0;
    });
    return initial;
  });
  const [userVoted, setUserVoted] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(`poll_voted_${questionId}`);
  });

  const castVote = (optionId: string) => {
    setVotes((prev) => {
      const updated = { ...prev, [optionId]: (prev[optionId] || 0) + 1 };
      localStorage.setItem(`poll_${questionId}`, JSON.stringify(updated));
      return updated;
    });
    localStorage.setItem(`poll_voted_${questionId}`, optionId);
    setUserVoted(optionId);
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return { votes, userVoted, castVote, totalVotes };
}

// Hook for local storage quiz scores
export function useQuiz(quizId: string) {
  const [score, setScore] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const saved = localStorage.getItem(`quiz_score_${quizId}`);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [attempts, setAttempts] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const saved = localStorage.getItem(`quiz_attempts_${quizId}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const saveScore = (newScore: number) => {
    setScore(newScore);
    setAttempts((prev) => {
      const newAttempts = prev + 1;
      localStorage.setItem(`quiz_score_${quizId}`, String(newScore));
      localStorage.setItem(`quiz_attempts_${quizId}`, String(newAttempts));
      return newAttempts;
    });
  };

  const resetQuiz = () => {
    setScore(0);
    setAttempts(0);
    localStorage.removeItem(`quiz_score_${quizId}`);
    localStorage.removeItem(`quiz_attempts_${quizId}`);
  };

  return { score, attempts, saveScore, resetQuiz };
}

// Hook for window size
export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

// Hook for theme
export function useTheme() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(false);
    }
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  const toggle = () => setDarkMode(!darkMode);

  return { darkMode, toggle, mounted };
}

// Hook for media query
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Hook for lazy loading
export function useLazyLoad(options?: { threshold?: number; rootMargin?: string }) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearScreen(true);
          observer.disconnect();
        }
      },
      { threshold: options?.threshold || 0, rootMargin: options?.rootMargin || "100px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isNearScreen };
}