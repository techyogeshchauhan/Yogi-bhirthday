import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CLuT3uFz.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useDynamicData-D6xzX5mp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var BIRTHDAY_CONFIG = {
	name: "Yogesh",
	birthday: "2026-07-31T00:00:00",
	birthYear: 2001,
	tagline: "Lecturer • AI Researcher • Building the future with LLMs, RAG & Vision.",
	socials: {
		github: "https://github.com/techyogeshchauhan",
		linkedin: "https://linkedin.com/in/yogesh-chauhan",
		instagram: "https://instagram.com/",
		youtube: "https://youtube.com/",
		portfolio: "https://example.com",
		whatsapp: "https://wa.me/918057743479",
		email: "mailto:yogesh.chauhan.ai@gmail.com"
	},
	adminPassword: "birthday2026"
};
function getBirthdayDate() {
	return new Date(BIRTHDAY_CONFIG.birthday);
}
function useWishes(options) {
	const [wishes, setWishes] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchWishes = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			let query = supabase.from("wishes").select("*").order("pinned", { ascending: false }).order("created_at", { ascending: false });
			if (options?.approvedOnly !== false) query = query.eq("approved", true);
			if (options?.limit) query = query.limit(options.limit);
			const { data, error: err } = await query;
			if (err) throw err;
			setWishes(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch wishes");
		} finally {
			setLoading(false);
		}
	}, [options?.limit, options?.approvedOnly]);
	(0, import_react.useEffect)(() => {
		fetchWishes();
		const channel = supabase.channel("wishes_realtime").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "wishes"
		}, fetchWishes).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [fetchWishes]);
	const addWish = async (wish) => {
		const { error: err } = await supabase.from("wishes").insert({
			name: wish.name,
			country: wish.country,
			emoji: wish.emoji,
			message: wish.message
		});
		if (err) throw err;
	};
	const likeWish = async (id) => {
		await supabase.rpc("increment_wish_likes", { _wish_id: id });
	};
	return {
		wishes,
		loading,
		error,
		refetch: fetchWishes,
		addWish,
		likeWish
	};
}
function useFriendWall(limit = 30) {
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchPosts = (0, import_react.useCallback)(async () => {
		try {
			setLoading(true);
			const { data, error: err } = await supabase.from("friend_wall").select("*").eq("approved", true).order("created_at", { ascending: false }).limit(limit);
			if (err) throw err;
			setPosts(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch posts");
		} finally {
			setLoading(false);
		}
	}, [limit]);
	(0, import_react.useEffect)(() => {
		fetchPosts();
		const channel = supabase.channel("friend_wall_realtime").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "friend_wall"
		}, fetchPosts).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [fetchPosts]);
	const addPost = async (post) => {
		const { error: err } = await supabase.from("friend_wall").insert({
			name: post.name,
			memory: post.memory,
			photo_url: post.photo_url || null
		});
		if (err) throw err;
	};
	return {
		posts,
		loading,
		error,
		refetch: fetchPosts,
		addPost
	};
}
function useVisitorStats() {
	const [stats, setStats] = (0, import_react.useState)({
		total_visitors: 0,
		country_stats: []
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const fetchStats = async () => {
			try {
				const { data: countData } = await supabase.from("visitors").select("id", {
					count: "exact",
					head: true
				});
				const { data: countryData } = await supabase.from("visitors").select("country").not("country", "is", null);
				const countryStats = {};
				countryData?.forEach((v) => {
					if (v.country) countryStats[v.country] = (countryStats[v.country] || 0) + 1;
				});
				setStats({
					total_visitors: countData?.length || 0,
					country_stats: Object.entries(countryStats).map(([country, count]) => ({
						country,
						count
					})).sort((a, b) => b.count - a.count).slice(0, 10)
				});
			} catch (err) {
				console.error("Failed to fetch visitor stats:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchStats();
		const channel = supabase.channel("visitors_realtime").on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "visitors"
		}, fetchStats).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, []);
	return {
		stats,
		loading
	};
}
function usePoll(questionId, options) {
	const [votes, setVotes] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return {};
		const saved = localStorage.getItem(`poll_${questionId}`);
		if (saved) return JSON.parse(saved);
		const initial = {};
		options.forEach((opt) => {
			initial[opt.id] = 0;
		});
		return initial;
	});
	const [userVoted, setUserVoted] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		return localStorage.getItem(`poll_voted_${questionId}`);
	});
	const castVote = (optionId) => {
		setVotes((prev) => {
			const updated = {
				...prev,
				[optionId]: (prev[optionId] || 0) + 1
			};
			localStorage.setItem(`poll_${questionId}`, JSON.stringify(updated));
			return updated;
		});
		localStorage.setItem(`poll_voted_${questionId}`, optionId);
		setUserVoted(optionId);
	};
	return {
		votes,
		userVoted,
		castVote,
		totalVotes: Object.values(votes).reduce((a, b) => a + b, 0)
	};
}
function useQuiz(quizId) {
	const [score, setScore] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return 0;
		const saved = localStorage.getItem(`quiz_score_${quizId}`);
		return saved ? parseInt(saved, 10) : 0;
	});
	const [attempts, setAttempts] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return 0;
		const saved = localStorage.getItem(`quiz_attempts_${quizId}`);
		return saved ? parseInt(saved, 10) : 0;
	});
	const saveScore = (newScore) => {
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
	return {
		score,
		attempts,
		saveScore,
		resetQuiz
	};
}
function useWindowSize() {
	const [size, setSize] = (0, import_react.useState)({
		width: 1024,
		height: 768
	});
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
		setSize({
			width: window.innerWidth,
			height: window.innerHeight
		});
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return {
		...size,
		hydrated
	};
}
//#endregion
export { useQuiz as a, useWishes as c, usePoll as i, getBirthdayDate as n, useVisitorStats as o, useFriendWall as r, useWindowSize as s, BIRTHDAY_CONFIG as t };
