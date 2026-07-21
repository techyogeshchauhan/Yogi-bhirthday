import { s as __toESM, t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bg9DSdsn.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BpgqxZjr.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as supabase } from "./client-CLuT3uFz.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createFileRoute, d as useNavigate, f as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, p as isRedirect, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { A as House, B as Coffee, C as LogOut, D as Linkedin, E as LoaderCircle, F as Gift, G as Check, H as Clock, I as Eye, J as Book, K as ChartColumn, L as EyeOff, M as GraduationCap, N as Globe, O as Instagram, P as Github, R as ExternalLink, S as Mail, T as LockOpen, U as ChevronRight, V as CodeXml, W as ChevronLeft, X as Award, Y as BookOpen, _ as Pin, a as TrendingUp, b as MessageCircle, c as Star, d as Send, f as Search, g as QrCode, h as Reply, i as Trophy, j as Heart, k as Image, l as Sparkles, m as Rocket, n as X, o as Trash2, p as RotateCcw, q as Brain, r as Users, s as Sun, t as Youtube, u as Share2, v as Music, w as Lock, x as Menu, y as Moon, z as Copy } from "../_libs/lucide-react.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHapBFt1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BNkVdZZs.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Countdown to My Birthday — A Premium Celebration" },
			{
				name: "description",
				content: "A luxury, interactive birthday countdown with wishes, memories, timeline, and a memory capsule. Join the celebration."
			},
			{
				name: "author",
				content: "Birthday Countdown"
			},
			{
				property: "og:title",
				content: "Countdown to My Birthday — A Premium Celebration"
			},
			{
				property: "og:description",
				content: "A luxury, interactive birthday countdown with wishes, memories, timeline, and a memory capsule. Join the celebration."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Countdown to My Birthday — A Premium Celebration"
			},
			{
				name: "twitter:description",
				content: "A luxury, interactive birthday countdown with wishes, memories, timeline, and a memory capsule. Join the celebration."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/82823694-bb72-4de5-80ec-d1805934c1c6"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/82823694-bb72-4de5-80ec-d1805934c1c6"
			}
		],
		links: [{
			rel: "icon",
			href: "/favicon.ico"
		}, {
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "dark",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var ResponsiveContext = (0, import_react.createContext)(null);
function useResponsive() {
	const context = (0, import_react.useContext)(ResponsiveContext);
	if (!context) throw new Error("useResponsive must be used within ResponsiveLayout");
	return context;
}
var navItems = [
	{
		id: "hero",
		label: "Home",
		icon: House
	},
	{
		id: "stats",
		label: "Life Stats",
		icon: ChartColumn
	},
	{
		id: "timeline",
		label: "Journey",
		icon: Clock
	},
	{
		id: "achievements",
		label: "Achievements",
		icon: Award
	},
	{
		id: "gallery",
		label: "Memories",
		icon: Image
	},
	{
		id: "cake",
		label: "The Cake",
		icon: Gift
	},
	{
		id: "wishes",
		label: "Wishes",
		icon: MessageCircle
	},
	{
		id: "wall",
		label: "Friend Wall",
		icon: Users
	},
	{
		id: "ai-wish",
		label: "AI Wishes",
		icon: Brain
	},
	{
		id: "capsule",
		label: "Capsule",
		icon: Clock
	},
	{
		id: "quiz",
		label: "Quiz",
		icon: Sparkles
	},
	{
		id: "gifts",
		label: "Gifts",
		icon: Gift
	}
];
function ResponsiveLayout({ children }) {
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	const [darkMode, setDarkMode] = (0, import_react.useState)(true);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) setDarkMode(false);
		const saved = localStorage.getItem("darkMode");
		if (saved !== null) setDarkMode(JSON.parse(saved));
	}, []);
	(0, import_react.useEffect)(() => {
		if (mounted) {
			localStorage.setItem("darkMode", JSON.stringify(darkMode));
			document.documentElement.classList.toggle("dark", darkMode);
		}
	}, [darkMode, mounted]);
	const toggleDarkMode = () => setDarkMode(!darkMode);
	const [width, setWidth] = (0, import_react.useState)(typeof window !== "undefined" ? window.innerWidth : 1024);
	(0, import_react.useEffect)(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const isMobile = width < 768;
	const isTablet = width >= 768 && width < 1024;
	const isDesktop = width >= 1024;
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setSidebarOpen(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContext.Provider, {
		value: {
			isMobile,
			isTablet,
			isDesktop,
			sidebarOpen,
			setSidebarOpen,
			darkMode,
			toggleDarkMode
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen aurora-bg",
			children: [
				isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSidebarOpen(true),
								className: "p-2 rounded-xl hover:bg-secondary/50 transition",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-gradient text-lg",
								children: "Yogesh's Birthday"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggleDarkMode,
								className: "p-2 rounded-xl hover:bg-secondary/50 transition",
								"aria-label": "Toggle dark mode",
								children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-5 h-5" })
							})
						]
					})
				}),
				isDesktop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "fixed left-0 top-0 bottom-0 w-64 z-40 glass border-r border-white/10 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 border-b border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-black text-xl text-gradient",
									children: "Navigation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: "Explore the celebration"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex-1 overflow-y-auto p-4 space-y-1",
								children: navItems.map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => scrollToSection(item.id),
										className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-secondary/50 transition group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-muted-foreground group-hover:text-purple transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: item.label
										})]
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 border-t border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: toggleDarkMode,
									className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 hover:bg-secondary transition",
									children: [darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: darkMode ? "Light Mode" : "Dark Mode"
									})]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isMobile && sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					onClick: () => setSidebarOpen(false),
					className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.aside, {
					initial: { x: "-100%" },
					animate: { x: 0 },
					exit: { x: "-100%" },
					transition: {
						type: "spring",
						damping: 25,
						stiffness: 300
					},
					className: "fixed left-0 top-0 bottom-0 w-72 z-50 glass border-r border-white/10 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4 border-b border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-black text-lg text-gradient",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Jump to section"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSidebarOpen(false),
								className: "p-2 rounded-xl hover:bg-secondary/50 transition",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 overflow-y-auto p-4 space-y-2",
							children: navItems.map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => scrollToSection(item.id),
									className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-secondary/50 transition group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-muted-foreground group-hover:text-purple transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: item.label
									})]
								}, item.id);
							})
						})]
					})
				})] }) }),
				isTablet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "fixed left-0 top-0 bottom-0 w-20 z-40 glass border-r border-white/10 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col h-full items-center py-6 gap-4",
						children: [
							navItems.slice(0, 8).map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => scrollToSection(item.id),
									className: "p-3 rounded-xl hover:bg-secondary/50 transition group",
									title: item.label,
									"aria-label": item.label,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-muted-foreground group-hover:text-purple transition" })
								}, item.id);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggleDarkMode,
								className: "p-3 rounded-xl hover:bg-secondary/50 transition",
								title: darkMode ? "Light Mode" : "Dark Mode",
								"aria-label": "Toggle dark mode",
								children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-5 h-5" })
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: `
          ${isMobile ? "pt-16" : ""}
          ${isDesktop ? "ml-64" : ""}
          ${isTablet ? "ml-20" : ""}
          transition-all duration-300
        `,
					children
				}),
				isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/10 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-around py-2 px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex flex-col items-center gap-1 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Home"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								className: "flex flex-col items-center gap-1 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Admin"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									document.getElementById("wishes")?.scrollIntoView({ behavior: "smooth" });
								},
								className: "flex flex-col items-center gap-1 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Wishes"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									document.getElementById("gifts")?.scrollIntoView({ behavior: "smooth" });
								},
								className: "flex flex-col items-center gap-1 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Gift"
								})]
							})
						]
					})
				})
			]
		})
	});
}
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
		width: typeof window !== "undefined" ? window.innerWidth : 1024,
		height: typeof window !== "undefined" ? window.innerHeight : 768
	});
	(0, import_react.useEffect)(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return size;
}
function AdminDashboard() {
	const navigate = useNavigate();
	const { width } = useWindowSize();
	const isMobile = width < 768;
	const [ok, setOk] = (0, import_react.useState)(false);
	const [pw, setPw] = (0, import_react.useState)("");
	const [wishes, setWishes] = (0, import_react.useState)([]);
	const [stats, setStats] = (0, import_react.useState)({
		total: 0,
		approved: 0,
		pinned: 0
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = isMobile ? 5 : 10;
	const load = async () => {
		setLoading(true);
		const { data } = await supabase.from("wishes").select("*").order("created_at", { ascending: false });
		if (data) {
			setWishes(data);
			setStats({
				total: data.length,
				approved: data.filter((w) => w.approved).length,
				pinned: data.filter((w) => w.pinned).length
			});
		}
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		if (ok) load();
	}, [ok]);
	const filteredWishes = wishes.filter((wish) => {
		const matchesSearch = wish.name.toLowerCase().includes(searchTerm.toLowerCase()) || wish.message.toLowerCase().includes(searchTerm.toLowerCase());
		if (filter === "approved") return matchesSearch && wish.approved;
		if (filter === "pending") return matchesSearch && !wish.approved;
		return matchesSearch;
	});
	const totalPages = Math.ceil(filteredWishes.length / itemsPerPage);
	const paginatedWishes = filteredWishes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const del = async (id) => {
		await supabase.from("wishes").delete().eq("id", id);
		setWishes((w) => w.filter((x) => x.id !== id));
		toast.success("Wish deleted");
		load();
	};
	const pin = async (id, p) => {
		await supabase.from("wishes").update({ pinned: !p }).eq("id", id);
		toast.success(p ? "Unpinned" : "Pinned");
		load();
	};
	const approve = async (id, a) => {
		await supabase.from("wishes").update({ approved: !a }).eq("id", id);
		toast.success(a ? "Hidden" : "Approved");
		load();
	};
	const handleLogin = (e) => {
		e.preventDefault();
		if (pw === BIRTHDAY_CONFIG.adminPassword) {
			setOk(true);
			toast.success("Welcome back! 👋");
		} else toast.error("Wrong password! 🔒");
	};
	const handleLogout = () => {
		setOk(false);
		setPw("");
		navigate({ to: "/" });
		toast.success("Logged out");
	};
	if (!ok) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "aurora-bg min-h-screen flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "glass rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-purple to-pink mx-auto grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-7 sm:w-8 h-7 sm:h-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl sm:text-3xl font-black text-gradient",
							children: "Admin Panel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Enter password to manage birthday wishes"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium text-muted-foreground",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: pw,
							onChange: (e) => setPw(e.target.value),
							placeholder: "Enter admin password",
							className: "w-full rounded-xl bg-secondary/50 px-4 py-3 outline-none focus:ring-2 ring-primary transition",
							autoFocus: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-luxury rounded-xl px-6 py-3 w-full font-semibold",
						children: "Unlock Dashboard"
					})]
				})]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "aurora-bg min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "glass border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl sm:text-2xl font-black text-gradient",
						children: "Admin Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1",
						children: ["Managing birthday wishes for ", BIRTHDAY_CONFIG.name]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						className: "glass rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-secondary transition text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Logout"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							className: "glass rounded-2xl p-4 sm:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-purple/20 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-5 sm:w-6 h-5 sm:h-6 text-purple" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl sm:text-3xl font-black text-gradient",
									children: stats.total
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground",
									children: "Total Wishes"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .2 },
							className: "glass rounded-2xl p-4 sm:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-green-500/20 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-5 sm:w-6 h-5 sm:h-6 text-green-500" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl sm:text-3xl font-black text-gradient",
									children: stats.approved
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground",
									children: "Approved"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 },
							className: "glass rounded-2xl p-4 sm:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gold/20 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "w-5 sm:w-6 h-5 sm:h-6 text-gold" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl sm:text-3xl font-black text-gradient",
									children: stats.pinned
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground",
									children: "Pinned"
								})] })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg sm:text-xl font-bold",
							children: "All Wishes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-2 sm:gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchTerm,
									onChange: (e) => {
										setSearchTerm(e.target.value);
										setCurrentPage(1);
									},
									placeholder: "Search...",
									className: "pl-9 pr-4 py-2 rounded-xl bg-secondary/50 text-sm outline-none focus:ring-2 ring-primary w-full sm:w-48"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: filter,
								onChange: (e) => {
									setFilter(e.target.value);
									setCurrentPage(1);
								},
								className: "px-4 py-2 rounded-xl bg-secondary/50 text-sm outline-none focus:ring-2 ring-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "approved",
										children: "Approved"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "pending",
										children: "Pending"
									})
								]
							})]
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							1,
							2,
							3,
							4,
							5
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass rounded-2xl p-4 sm:p-5 animate-pulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 rounded-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-32 bg-secondary rounded mb-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-48 bg-secondary/50 rounded mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-secondary/50 rounded w-full" })
									]
								})]
							})
						}, i))
					}) : filteredWishes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-2xl p-8 sm:p-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "No wishes found 🎂"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "popLayout",
							children: paginatedWishes.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: 20
								},
								transition: { delay: i * .05 },
								className: `glass rounded-2xl p-4 sm:p-5 ${!w.approved ? "opacity-60" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0 space-y-2 sm:space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xl sm:text-3xl",
													children: w.emoji || "💝"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 flex-wrap",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold text-gradient text-sm sm:text-base truncate",
															children: w.name
														}), w.country && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-xs text-muted-foreground flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3 h-3" }), w.country]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: new Date(w.created_at).toLocaleDateString("en-US", {
															month: "short",
															day: "numeric",
															year: "numeric",
															hour: "2-digit",
															minute: "2-digit"
														})
													})]
												}),
												w.pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold text-xl",
													children: "📌"
												}),
												!w.approved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 py-1 rounded-lg bg-destructive/20 text-destructive text-xs font-semibold",
													children: "Hidden"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed line-clamp-2 sm:line-clamp-none",
											children: w.message
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex sm:flex-col gap-2 shrink-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => pin(w.id, w.pinned),
												className: `rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition flex items-center gap-1.5 sm:gap-2 justify-center ${w.pinned ? "bg-gold/20 text-gold hover:bg-gold/30" : "bg-secondary hover:bg-secondary/80"}`,
												title: w.pinned ? "Unpin" : "Pin",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "w-3.5 sm:w-4 h-3.5 sm:h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: w.pinned ? "Unpin" : "Pin"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => approve(w.id, w.approved),
												className: `rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition flex items-center gap-1.5 sm:gap-2 justify-center ${w.approved ? "bg-green-500/20 text-green-500 hover:bg-green-500/30" : "bg-secondary hover:bg-secondary/80"}`,
												title: w.approved ? "Hide" : "Show",
												children: [w.approved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 sm:w-4 h-3.5 sm:h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-3.5 sm:w-4 h-3.5 sm:h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: w.approved ? "Hide" : "Show"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													if (confirm("Delete this wish?")) del(w.id);
												},
												className: "rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-destructive/20 text-destructive hover:bg-destructive/30 transition flex items-center gap-1.5 sm:gap-2 justify-center",
												title: "Delete",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 sm:w-4 h-3.5 sm:h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: "Delete"
												})]
											})
										]
									})]
								})
							}, w.id))
						})
					}), totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
								disabled: currentPage === 1,
								className: "p-2 rounded-xl bg-secondary/50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1",
								children: Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
									let pageNum;
									if (totalPages <= 5) pageNum = i + 1;
									else if (currentPage <= 3) pageNum = i + 1;
									else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
									else pageNum = currentPage - 2 + i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setCurrentPage(pageNum),
										className: `w-8 h-8 rounded-lg text-sm font-medium transition ${currentPage === pageNum ? "bg-primary text-primary-foreground" : "bg-secondary/50 hover:bg-secondary"}`,
										children: pageNum
									}, pageNum);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
								disabled: currentPage === totalPages,
								className: "p-2 rounded-xl bg-secondary/50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })
							})
						]
					})] })]
				})]
			})
		]
	});
}
function ResponsiveSection({ id, title, subtitle, children, className = "", fullWidth = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `
        relative py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8
        ${className}
      `,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: fullWidth ? "w-full max-w-full" : "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "text-center mb-8 md:mb-12 lg:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto",
					children: subtitle
				})]
			}), children]
		})
	});
}
function ResponsiveCard({ children, className = "", glow = false, hover = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `
        glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8
        ${glow ? "glow-ring" : ""}
        ${hover ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" : ""}
        ${className}
      `,
		children
	});
}
function ResponsiveButton({ children, onClick, type = "button", variant = "primary", size = "md", disabled = false, className = "", fullWidth = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: `
        font-semibold transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${{
			primary: "btn-luxury text-white",
			secondary: "bg-secondary hover:bg-secondary/80 text-foreground",
			ghost: "hover:bg-secondary/50 text-foreground",
			danger: "bg-destructive/20 hover:bg-destructive/30 text-destructive"
		}[variant]}
        ${{
			sm: "px-3 py-1.5 text-sm rounded-lg",
			md: "px-4 py-2.5 text-base rounded-xl",
			lg: "px-6 py-3 text-lg rounded-2xl"
		}[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `,
		children
	});
}
function ResponsiveInput({ value, onChange, placeholder, type = "text", required = false, disabled = false, label, error, className = "", icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 ${className}`,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm font-medium text-muted-foreground",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive ml-1",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type,
					value,
					onChange: (e) => onChange(e.target.value),
					placeholder,
					required,
					disabled,
					className: `
            w-full rounded-xl bg-secondary/70 px-4 py-3 
            outline-none focus:ring-2 ring-primary transition
            disabled:opacity-50 disabled:cursor-not-allowed
            ${icon ? "pl-10" : ""}
            ${error ? "ring-destructive" : ""}
          `
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				children: error
			})
		]
	});
}
function ResponsiveTextarea({ value, onChange, placeholder, required = false, disabled = false, label, error, rows = 4, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 ${className}`,
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm font-medium text-muted-foreground",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive ml-1",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				required,
				disabled,
				rows,
				className: `
          w-full rounded-xl bg-secondary/70 px-4 py-3 
          outline-none focus:ring-2 ring-primary transition
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
          ${error ? "ring-destructive" : ""}
        `
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				children: error
			})
		]
	});
}
function ResponsiveSelect({ value, onChange, options, label, required = false, disabled = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 ${className}`,
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "block text-sm font-medium text-muted-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive ml-1",
				children: "*"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			required,
			disabled,
			className: "w-full rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary transition disabled:opacity-50",
			children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: opt.value,
				children: opt.label
			}, opt.value))
		})]
	});
}
function Skeleton({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `animate-pulse bg-secondary/50 rounded-lg ${className}` });
}
function CountdownUnit({ unit, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			delay: index * .1,
			type: "spring",
			stiffness: 200
		},
		className: "glass rounded-2xl px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-7 \r\n                 min-w-[65px] sm:min-w-[90px] md:min-w-[120px] lg:min-w-[130px] \r\n                 text-center flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tabular-nums text-gradient",
			suppressHydrationWarning: true,
			children: String(unit.value).padStart(2, "0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground",
			children: unit.label
		})]
	});
}
function CountdownTimer({ target, onComplete }) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [completed, setCompleted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const diff = Math.max(0, target.getTime() - now);
	(0, import_react.useEffect)(() => {
		if (diff === 0 && !completed) {
			setCompleted(true);
			onComplete?.();
		}
	}, [
		diff,
		completed,
		onComplete
	]);
	const days = Math.floor(diff / 864e5);
	const hours = Math.floor(diff % 864e5 / 36e5);
	const minutes = Math.floor(diff % 36e5 / 6e4);
	const seconds = Math.floor(diff % 6e4 / 1e3);
	const units = [
		{
			value: days,
			label: "Days"
		},
		{
			value: hours,
			label: "Hours"
		},
		{
			value: minutes,
			label: "Minutes"
		},
		{
			value: seconds,
			label: "Seconds"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4",
		children: units.map((unit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownUnit, {
			unit,
			index
		}, unit.label))
	});
}
function BirthdayReveal({ onClose, name }) {
	(0, import_react.useEffect)(() => {
		import("../_libs/canvas-confetti.mjs").then((n) => n.n).then((confetti) => {
			const end = Date.now() + 5e3;
			const fire = () => {
				confetti.default({
					particleCount: 6,
					startVelocity: 30,
					angle: 60,
					spread: 55,
					origin: {
						x: 0,
						y: .7
					}
				});
				confetti.default({
					particleCount: 6,
					startVelocity: 30,
					angle: 120,
					spread: 55,
					origin: {
						x: 1,
						y: .7
					}
				});
				if (Date.now() < end) requestAnimationFrame(fire);
			};
			fire();
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 bg-background/70 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .7,
				y: 40
			},
			animate: {
				scale: 1,
				y: 0
			},
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 300
			},
			className: "glass glow-ring rounded-3xl p-8 sm:p-10 md:p-12 max-w-md lg:max-lg text-center relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-xl hover:bg-secondary/50 transition",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-5 h-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M6 18L18 6M6 6l12 12"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-5xl sm:text-6xl md:text-7xl",
					children: "🎂"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient",
					children: [
						"Happy Birthday ",
						name,
						"!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground",
					children: "Thank you for being part of my journey ❤️"
				})
			]
		})
	});
}
function HeroSection({ onReveal }) {
	const target = getBirthdayDate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-24 px-4 sm:px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .8,
				ease: "easeOut"
			},
			className: "max-w-4xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: .2 },
					className: "inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "A Premium Celebration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Celebration"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .3,
						duration: .8
					},
					className: "mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Countdown"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-foreground",
							children: [
								"to ",
								BIRTHDAY_CONFIG.name,
								"'s Birthday"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .5 },
					className: "mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto",
					children: BIRTHDAY_CONFIG.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .7 },
					className: "mt-8 sm:mt-10 md:mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTimer, {
						target,
						onComplete: onReveal
					})
				})
			]
		})
	});
}
function BackgroundEffects() {
	const [mounted, setMounted] = useState(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const balloons = (0, import_react.useMemo)(() => Array.from({ length: 14 }).map((_, i) => ({
		left: Math.random() * 100,
		delay: Math.random() * 20,
		duration: 18 + Math.random() * 20,
		size: 28 + Math.random() * 40,
		drift: (Math.random() - .5) * 200,
		hue: [
			300,
			340,
			240,
			90
		][i % 4]
	})), []);
	const stars = (0, import_react.useMemo)(() => Array.from({ length: 60 }).map(() => ({
		left: Math.random() * 100,
		top: Math.random() * 100,
		delay: Math.random() * 5,
		duration: 2 + Math.random() * 4,
		size: 1 + Math.random() * 2.5
	})), []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 overflow-hidden z-0",
		children: [stars.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "star bg-white rounded-full absolute",
			style: {
				left: `${s.left}%`,
				top: `${s.top}%`,
				width: s.size,
				height: s.size,
				animationDuration: `${s.duration}s`,
				animationDelay: `${s.delay}s`,
				boxShadow: "0 0 8px rgba(255,255,255,0.8)"
			}
		}, `star-${i}`)), balloons.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "balloon absolute",
			style: {
				left: `${b.left}%`,
				animationDuration: `${b.duration}s`,
				animationDelay: `-${b.delay}s`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: b.size,
				height: b.size * 1.2,
				borderRadius: "50%",
				background: `radial-gradient(circle at 30% 30%, white, oklch(0.7 0.25 ${b.hue}))`,
				boxShadow: `0 0 40px oklch(0.7 0.25 ${b.hue} / 0.6)`
			} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto w-px h-16 bg-white/30" })]
		}, `balloon-${i}`))]
	});
}
function LifeStats() {
	const [now, setNow] = (0, import_react.useState)(Date.now());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const lived = now - new Date(BIRTHDAY_CONFIG.birthYear, 0, 1).getTime();
	const years = Math.floor(lived / (365.25 * 864e5));
	const days = Math.floor(lived / 864e5);
	const hours = Math.floor(lived / 36e5);
	const minutes = Math.floor(lived / 6e4);
	const seconds = Math.floor(lived / 1e3);
	const next = getBirthdayDate().getTime();
	const progress = Math.min(1, Math.max(0, 1 - (next - now) / (365.25 * 864e5)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "stats",
		title: "Life in Numbers",
		subtitle: "Every second counts.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4",
			children: [
				{
					label: "Age",
					value: years,
					format: (v) => v.toLocaleString()
				},
				{
					label: "Days lived",
					value: days,
					format: (v) => v.toLocaleString()
				},
				{
					label: "Hours lived",
					value: hours,
					format: (v) => v.toLocaleString()
				},
				{
					label: "Minutes lived",
					value: minutes,
					format: (v) => v.toLocaleString()
				},
				{
					label: "Seconds lived",
					value: seconds,
					format: (v) => v.toLocaleString()
				}
			].map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: index * .1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
					className: "text-center py-4 sm:py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xl sm:text-2xl md:text-3xl font-bold tabular-nums text-gradient",
						suppressHydrationWarning: true,
						children: stat.format(stat.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 sm:mt-2",
						children: stat.label
					})]
				})
			}, stat.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 sm:mt-8 glass rounded-2xl p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Birthday year progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium text-gradient",
					children: [Math.round(progress * 100), "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 sm:h-3 rounded-full bg-secondary overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full rounded-full",
					style: { background: "linear-gradient(90deg, var(--color-purple), var(--color-pink), var(--color-gold))" },
					initial: { width: 0 },
					animate: { width: `${progress * 100}%` },
					transition: {
						duration: 1.2,
						ease: "easeOut"
					}
				})
			})]
		})]
	});
}
var timelineData = [
	{
		year: "2020",
		title: "Started BSc IT — DSVV, Haridwar",
		icon: CodeXml
	},
	{
		year: "2023",
		title: "Graduated BSc Information Technology",
		icon: GraduationCap
	},
	{
		year: "2024",
		title: "Research Associate @ CAIR, DSVV",
		icon: Brain
	},
	{
		year: "2025",
		title: "Data Science Intern — Azure AI & YOLOv8",
		icon: Rocket
	},
	{
		year: "2026-1",
		title: "Published Research + MCA Data Science",
		icon: BookOpen
	},
	{
		year: "2026-2",
		title: "Lecturer @ Haridwar University (CSE)",
		icon: Trophy
	}
];
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "timeline",
		title: "The Journey",
		subtitle: "A short timeline of milestones.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-pink to-gold opacity-30 md:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8 sm:space-y-10",
				children: timelineData.map((item, index) => {
					const Icon = item.icon;
					const isLeft = index % 2 === 0;
					const displayYear = item.year.split("-")[0];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: isLeft ? -30 : 30
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .5,
							ease: "easeOut"
						},
						className: `
                  relative pl-10 sm:pl-0 sm:w-1/2 
                  ${isLeft ? "sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"}
                `,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `
                    absolute left-4 sm:left-auto sm:right-full sm:mr-[-12px] top-4 
                    w-6 h-6 sm:w-7 sm:h-7 rounded-full btn-luxury grid place-items-center
                    ${!isLeft ? "sm:left-0 sm:right-auto sm:ml-[-12px] sm:mr-0" : ""}
                  `,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
							className: "inline-block w-full text-left sm:text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs sm:text-sm text-gold tracking-widest font-mono",
									children: displayYear
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 sm:mt-2 text-base sm:text-lg font-semibold",
									children: item.title
								}),
								item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.description
								})
							]
						})]
					}, item.year);
				})
			})]
		})
	});
}
var achievementsData = [
	{
		label: "Research Papers",
		value: "12+",
		icon: BookOpen
	},
	{
		label: "Projects Shipped",
		value: "40+",
		icon: Rocket
	},
	{
		label: "Certificates",
		value: "20",
		icon: Award
	},
	{
		label: "Awards",
		value: "6",
		icon: Trophy
	},
	{
		label: "Years Experience",
		value: "8",
		icon: Star
	},
	{
		label: "GitHub Commits",
		value: "3k+",
		icon: Github
	}
];
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "achievements",
		title: "Achievements",
		subtitle: "A snapshot of the milestones.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6",
			children: achievementsData.map((achievement, index) => {
				const Icon = achievement.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: index * .1,
						duration: .5
					},
					whileHover: {
						y: -6,
						rotate: -.5
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
						className: "relative overflow-hidden group",
						hover: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 blur-2xl opacity-50 sm:opacity-60 group-hover:opacity-100 transition-opacity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 sm:w-6 h-5 sm:h-6 text-gold relative z-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 sm:mt-4 text-2xl sm:text-3xl font-black text-gradient relative z-10",
								children: achievement.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm sm:text-base text-muted-foreground relative z-10",
								children: achievement.label
							})
						]
					})
				}, achievement.label);
			})
		})
	});
}
var defaultImages = [
	"https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
	"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
	"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
	"https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800",
	"https://images.unsplash.com/photo-1470162656305-6f429ba817bf?w=800",
	"https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800",
	"https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=800",
	"https://images.unsplash.com/photo-1502035618-7b6c66eda9d3?w=800",
	"https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800"
];
function Gallery({ images = defaultImages }) {
	const [openImage, setOpenImage] = (0, import_react.useState)(null);
	const openLightbox = (0, import_react.useCallback)((src) => {
		setOpenImage(src);
		document.body.style.overflow = "hidden";
	}, []);
	const closeLightbox = (0, import_react.useCallback)(() => {
		setOpenImage(null);
		document.body.style.overflow = "";
	}, []);
	const currentIndex = openImage ? images.indexOf(openImage) : -1;
	const showPrev = currentIndex > 0;
	const showNext = currentIndex < images.length - 1;
	const goToPrev = (0, import_react.useCallback)(() => {
		if (showPrev) setOpenImage(images[currentIndex - 1]);
	}, [
		showPrev,
		images,
		currentIndex
	]);
	const goToNext = (0, import_react.useCallback)(() => {
		if (showNext) setOpenImage(images[currentIndex + 1]);
	}, [
		showNext,
		images,
		currentIndex
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "gallery",
		title: "Memories",
		subtitle: "A visual timeline of moments.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-2 sm:columns-3 gap-3 sm:gap-4 [column-fill:_balance]",
			children: images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					delay: index % 6 * .05,
					duration: .4
				},
				onClick: () => openLightbox(src),
				className: "mb-3 sm:mb-4 block w-full overflow-hidden rounded-xl sm:rounded-2xl glass group cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `Memory ${index + 1}`,
					loading: "lazy",
					className: "w-full h-auto transition-transform duration-500 group-hover:scale-110",
					sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
				})
			}, src))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4",
			onClick: closeLightbox,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: closeLightbox,
					className: "absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 sm:w-6 h-5 sm:h-6" })
				}),
				showPrev && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						goToPrev();
					},
					className: "absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10",
					"aria-label": "Previous",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-5 sm:w-6 h-5 sm:h-6",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M15 19l-7-7 7-7"
						})
					})
				}),
				showNext && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						goToNext();
					},
					className: "absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10",
					"aria-label": "Next",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-5 sm:w-6 h-5 sm:h-6",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M9 5l7 7-7 7"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					layoutId: openImage,
					src: openImage,
					alt: "Preview",
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .8,
						opacity: 0
					},
					transition: {
						type: "spring",
						damping: 25,
						stiffness: 300
					},
					className: "max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] rounded-xl sm:rounded-2xl glow-ring",
					onClick: (e) => e.stopPropagation()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/80 text-xs sm:text-sm",
					children: [
						currentIndex + 1,
						" / ",
						images.length
					]
				})
			]
		}) })]
	});
}
function InteractiveCake() {
	const [lit, setLit] = (0, import_react.useState)(false);
	const [cut, setCut] = (0, import_react.useState)(false);
	const handleCakeClick = () => {
		if (!lit) setLit(true);
		else if (!cut) {
			setCut(true);
			import("../_libs/canvas-confetti.mjs").then((n) => n.n).then((confetti) => {
				confetti.default({
					particleCount: 200,
					spread: 90,
					origin: { y: .6 }
				});
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "cake",
		title: "The Cake",
		subtitle: "Click to light. Click again to cut.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				className: "inline-block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] transition-transform hover:scale-110 relative",
				onClick: handleCakeClick,
				whileTap: { scale: .95 },
				"aria-label": cut ? "Cake cut" : lit ? "Cut the cake" : "Light the candle",
				children: [cut ? "🍰" : "🎂", lit && !cut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "absolute -top-2 sm:-top-4 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl",
					style: { filter: "drop-shadow(0 0 20px gold)" },
					children: "🔥"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground",
				children: !lit ? "Tap the cake to light the candle." : !cut ? "Now make a wish and tap again to cut." : "🎉 Wish made! Enjoy your slice."
			}, lit ? cut ? "cut" : "lit" : "unlit")]
		})
	});
}
var COUNTRIES = [
	{
		value: "🇺🇸 USA",
		label: "🇺🇸 USA"
	},
	{
		value: "🇮🇳 India",
		label: "🇮🇳 India"
	},
	{
		value: "🇬🇧 UK",
		label: "🇬🇧 UK"
	},
	{
		value: "🇨🇦 Canada",
		label: "🇨🇦 Canada"
	},
	{
		value: "🇦🇺 Australia",
		label: "🇦🇺 Australia"
	},
	{
		value: "🇩🇪 Germany",
		label: "🇩🇪 Germany"
	},
	{
		value: "🇫🇷 France",
		label: "🇫🇷 France"
	},
	{
		value: "🇯🇵 Japan",
		label: "🇯🇵 Japan"
	},
	{
		value: "🇧🇷 Brazil",
		label: "🇧🇷 Brazil"
	},
	{
		value: "🌍 Other",
		label: "🌍 Other"
	}
];
var EMOJIS = [
	"🎉",
	"🎊",
	"🥳",
	"🎈",
	"💝",
	"❤️",
	"🎁",
	"✨",
	"🌟",
	"💖"
];
function WishCard({ wish, onLike, onShare }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		layout: true,
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: { opacity: 0 },
		transition: { duration: .3 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: wish.pinned ? "glow-ring" : "",
			hover: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 sm:w-12 h-10 sm:h-12 rounded-full btn-luxury grid place-items-center font-bold text-lg shrink-0",
							children: wish.name[0]?.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-sm sm:text-base truncate",
									children: wish.name
								}), wish.pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg",
									children: "📌"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs sm:text-sm text-muted-foreground truncate",
								children: [
									wish.country,
									" · ",
									new Date(wish.created_at).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
										hour: "2-digit",
										minute: "2-digit"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl sm:text-3xl shrink-0",
							children: wish.emoji || "💝"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed",
					children: wish.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 sm:mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onLike(wish.id),
							className: "rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-3 sm:w-4 h-3 sm:h-4 text-pink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: wish.likes || 0 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reply, { className: "w-3 sm:w-4 h-3 sm:h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Reply"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onShare(wish),
							className: "rounded-lg bg-secondary/70 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-secondary transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-3 sm:w-4 h-3 sm:h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Share"
							})]
						})
					]
				})
			]
		})
	});
}
function WishForm({ onSubmit, sending }) {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		country: COUNTRIES[0].value,
		emoji: "🎉",
		message: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.message.trim()) return;
		onSubmit(form);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "glass rounded-3xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
					value: form.name,
					onChange: (v) => setForm({
						...form,
						name: v
					}),
					placeholder: "Your name",
					required: true,
					label: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSelect, {
					value: form.country,
					onChange: (v) => setForm({
						...form,
						country: v
					}),
					options: COUNTRIES,
					label: "Country"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 sm:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-muted-foreground",
						children: "Emoji"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5 sm:gap-2",
						children: EMOJIS.map((emoji) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setForm({
								...form,
								emoji
							}),
							className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-lg sm:text-xl transition-all ${form.emoji === emoji ? "bg-primary/20 ring-2 ring-primary" : "bg-secondary/50 hover:bg-secondary"}`,
							children: emoji
						}, emoji))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
						value: form.message,
						onChange: (v) => setForm({
							...form,
							message: v
						}),
						placeholder: "Your birthday wish…",
						required: true,
						label: "Message"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
				type: "submit",
				disabled: sending || !form.name.trim() || !form.message.trim(),
				fullWidth: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4 mr-2 inline" }), sending ? "Sending…" : "Send wish ✨"]
			})
		]
	});
}
function GuestBook() {
	const { wishes, loading, addWish, likeWish } = useWishes({ limit: 50 });
	const [sending, setSending] = (0, import_react.useState)(false);
	const handleSubmit = async (data) => {
		setSending(true);
		try {
			await addWish({
				name: data.name,
				country: data.country,
				emoji: data.emoji,
				message: data.message
			});
			toast.success("Wish sent 🎉");
			confetti_module_default({
				particleCount: 80,
				spread: 60,
				origin: { y: .9 }
			});
		} catch (err) {
			toast.error("Couldn't send. Try again.");
		} finally {
			setSending(false);
		}
	};
	const handleLike = async (id) => {
		await likeWish(id);
	};
	const handleShare = async (wish) => {
		const text = `"${wish.message}" — ${wish.name}`;
		if (navigator.share) try {
			await navigator.share({ text });
		} catch {}
		else {
			await navigator.clipboard.writeText(text);
			toast.success("Copied to clipboard");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "wishes",
		title: "Birthday Wishes",
		subtitle: "Leave a birthday wish for Yogesh. It appears live for everyone!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishForm, {
			onSubmit: handleSubmit,
			sending
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 sm:mt-10 md:mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6",
					children: [
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5 animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 rounded-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-24 bg-secondary rounded mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-32 bg-secondary/50 rounded" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-secondary/50 rounded w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-secondary/50 rounded w-3/4" })]
						})]
					}, i))
				}) : wishes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl p-8 sm:p-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "No wishes yet. Be the first! 🎂"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6",
					children: wishes.map((wish) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishCard, {
						wish,
						onLike: handleLike,
						onShare: handleShare
					}, wish.id))
				})
			})
		})]
	});
}
function FriendWallForm({ onSubmit, sending }) {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		memory: "",
		photo_url: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.memory.trim()) return;
		onSubmit({
			name: form.name,
			memory: form.memory,
			photo_url: form.photo_url || void 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "glass rounded-3xl p-5 sm:p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
					value: form.name,
					onChange: (v) => setForm({
						...form,
						name: v
					}),
					placeholder: "Your name",
					required: true,
					label: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
					value: form.photo_url,
					onChange: (v) => setForm({
						...form,
						photo_url: v
					}),
					placeholder: "Photo URL (optional)",
					label: "Photo URL"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveTextarea, {
					value: form.memory,
					onChange: (v) => setForm({
						...form,
						memory: v
					}),
					placeholder: "Share a memory with Yogesh…",
					required: true,
					rows: 3,
					label: "Memory"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
					type: "submit",
					disabled: sending || !form.name.trim() || !form.memory.trim(),
					fullWidth: true,
					children: sending ? "Posting…" : "Post to wall"
				})
			})
		]
	});
}
function WallPostCard({ post }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		layout: true,
		initial: {
			opacity: 0,
			scale: .9
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: { duration: .3 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: "overflow-hidden !p-0",
			hover: true,
			children: [post.photo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-40 sm:h-48 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.photo_url,
					alt: post.name,
					className: "w-full h-full object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-base sm:text-lg",
						children: post.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-muted-foreground",
						children: post.memory
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: new Date(post.created_at).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric"
						})
					})
				]
			})]
		})
	});
}
function FriendWall() {
	const { posts, loading, addPost } = useFriendWall(30);
	const [sending, setSending] = (0, import_react.useState)(false);
	const handleSubmit = async (data) => {
		setSending(true);
		try {
			await addPost({
				name: data.name,
				memory: data.memory,
				photo_url: data.photo_url
			});
			toast.success("Posted to the wall!");
			setForm({
				name: "",
				memory: "",
				photo_url: ""
			});
		} catch (err) {
			toast.error("Couldn't post. Try again.");
		} finally {
			setSending(false);
		}
	};
	const [, setForm] = (0, import_react.useState)({
		name: "",
		memory: "",
		photo_url: ""
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "wall",
		title: "Friend Wall",
		subtitle: "Share a photo and a memory.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FriendWallForm, {
			onSubmit: handleSubmit,
			sending
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 sm:mt-10 md:mt-12",
			children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6",
				children: [
					1,
					2,
					3,
					4,
					5,
					6
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl overflow-hidden animate-pulse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 sm:h-48 bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-24 bg-secondary rounded mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-secondary/50 rounded w-full mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-secondary/50 rounded w-2/3" })
						]
					})]
				}, i))
			}) : posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-2xl p-8 sm:p-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "No memories yet. Share yours!"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WallPostCard, { post }, post.id))
			})
		})]
	});
}
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = objectType({
	name: stringType().min(1).max(60),
	relationship: stringType().min(1).max(60),
	tone: stringType().min(1).max(40),
	recipient: stringType().min(1).max(60)
});
var generateWish = createServerFn({ method: "POST" }).inputValidator((data) => Input.parse(data)).handler(createSsrRpc("de597d87596197ce066297efdc261ffb228db17374929a4c5b33fef940704724"));
var TONES = [
	{
		value: "warm",
		label: "Warm"
	},
	{
		value: "funny",
		label: "Funny"
	},
	{
		value: "poetic",
		label: "Poetic"
	},
	{
		value: "professional",
		label: "Professional"
	},
	{
		value: "emotional",
		label: "Emotional"
	}
];
var RELATIONSHIPS = [
	{
		value: "friend",
		label: "Friend"
	},
	{
		value: "colleague",
		label: "Colleague"
	},
	{
		value: "family",
		label: "Family"
	},
	{
		value: "mentor",
		label: "Mentor"
	},
	{
		value: "student",
		label: "Student"
	}
];
function AIWishGenerator() {
	const generateWishFn = useServerFn(generateWish);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		relationship: "friend",
		tone: "warm"
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)("");
	const handleGenerate = async (e) => {
		e.preventDefault();
		setLoading(true);
		setResult("");
		try {
			const response = await generateWishFn({ data: {
				...form,
				recipient: BIRTHDAY_CONFIG.name
			} });
			setResult(response.message);
		} catch (err) {
			const msg = err instanceof Error ? err.message : "";
			if (msg.includes("429")) toast.error("Rate limited — try in a moment.");
			else if (msg.includes("402")) toast.error("AI credits exhausted.");
			else toast.error("Couldn't generate. Try again.");
		} finally {
			setLoading(false);
		}
	};
	const handleCopy = async () => {
		await navigator.clipboard.writeText(result);
		toast.success("Copied to clipboard!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "ai-wish",
		title: "AI Wish Generator",
		subtitle: "Stuck for words? Let AI draft one for you.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleGenerate,
			className: "glass rounded-3xl p-5 sm:p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
						value: form.name,
						onChange: (v) => setForm({
							...form,
							name: v
						}),
						placeholder: "Your name",
						required: true,
						label: "Your Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSelect, {
						value: form.relationship,
						onChange: (v) => setForm({
							...form,
							relationship: v
						}),
						options: RELATIONSHIPS,
						label: "Relationship"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSelect, {
						value: form.tone,
						onChange: (v) => setForm({
							...form,
							tone: v
						}),
						options: TONES,
						label: "Tone"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
					type: "submit",
					disabled: loading || !form.name.trim(),
					fullWidth: true,
					children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 mr-2 inline animate-spin" }), "Generating…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 mr-2 inline" }), "Generate wish ✨"] })
				})
			})]
		}), result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .4 },
			className: "mt-6 sm:mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, {
				glow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base sm:text-lg leading-relaxed italic",
						children: [
							"\"",
							result,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleCopy,
						className: "shrink-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), "Copy"]
					})]
				})
			})
		})]
	});
}
function MemoryCapsule() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const birthdayDate = getBirthdayDate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		try {
			const { error } = await supabase.from("capsule").insert({
				name: form.name,
				message: form.message,
				unlock_at: birthdayDate.toISOString()
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "capsule",
		title: "Memory Capsule",
		subtitle: "Write a future message. Sealed until the birthday.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto text-center",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "py-8 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold/20 grid place-items-center mx-auto mb-4 sm:mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-8 sm:w-10 h-8 sm:h-10 text-gold" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl sm:text-2xl font-bold text-gradient mb-3",
						children: "Capsule Sealed! 🔒"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground max-w-md mx-auto",
						children: [
							"Your message is sealed and will unlock on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: birthdayDate.toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric"
								})
							})
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "grid gap-4 sm:gap-5 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "This message will be revealed on the birthday"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveInput, {
						value: form.name,
						onChange: (v) => setForm({
							...form,
							name: v
						}),
						placeholder: "Your name",
						required: true,
						label: "Your Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveTextarea, {
						value: form.message,
						onChange: (v) => setForm({
							...form,
							message: v
						}),
						placeholder: "Message from the future…",
						required: true,
						rows: 4,
						label: "Your Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
						type: "submit",
						disabled: sending || !form.name.trim() || !form.message.trim(),
						fullWidth: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "w-4 h-4 mr-2 inline" }), sending ? "Sealing…" : "Seal Capsule 🔒"]
					})
				]
			})
		})
	});
}
var POLL_OPTIONS = [
	{
		id: "colleague",
		text: "Colleague"
	},
	{
		id: "friend",
		text: "Friend"
	},
	{
		id: "student",
		text: "Student"
	},
	{
		id: "mentor",
		text: "Mentor"
	},
	{
		id: "family",
		text: "Family"
	},
	{
		id: "other",
		text: "Other"
	}
];
function Poll() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const { votes, userVoted, castVote, totalVotes } = usePoll("know_yogi", POLL_OPTIONS);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "poll",
		title: "How Do You Know Yogi?",
		subtitle: "Cast your vote and see results live.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 sm:space-y-4",
					children: POLL_OPTIONS.map((option) => {
						const optionVotes = votes[option.id] || 0;
						const percentage = totalVotes > 0 ? optionVotes / totalVotes * 100 : 0;
						const hasVoted = userVoted === option.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							onClick: () => !userVoted && castVote(option.id),
							disabled: !!userVoted,
							className: `
                    w-full relative overflow-hidden rounded-xl p-3 sm:p-4 text-left transition-all
                    ${userVoted ? "bg-secondary/50 cursor-default" : "hover:bg-secondary/70 cursor-pointer"}
                    ${hasVoted ? "ring-2 ring-primary" : ""}
                  `,
							whileHover: !userVoted ? { scale: 1.01 } : {},
							whileTap: !userVoted ? { scale: .99 } : {},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute inset-0 bg-primary/10",
								initial: { width: 0 },
								animate: { width: `${percentage}%` },
								transition: {
									duration: .5,
									ease: "easeOut"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [hasVoted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-primary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-sm sm:text-base",
										children: option.text
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: totalVotes > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [Math.round(percentage), "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs",
										children: [
											"(",
											optionVotes,
											")"
										]
									})] })
								})]
							})]
						}, option.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						totalVotes,
						" ",
						totalVotes === 1 ? "vote" : "votes"
					] })]
				}),
				!userVoted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-center text-muted-foreground",
					children: "Click an option to vote"
				})
			] })
		})
	});
}
var QUESTIONS = [
	{
		id: 1,
		question: "What is Yogesh's primary area of expertise?",
		options: [
			"Web Development",
			"Data Science & AI",
			"Mobile Apps",
			"Cloud Computing"
		],
		correct: 1
	},
	{
		id: 2,
		question: "Where did Yogesh complete his BSc in IT?",
		options: [
			"IIT Delhi",
			"DSVV Haridwar",
			"MIT Chennai",
			"BITS Pilani"
		],
		correct: 1
	},
	{
		id: 3,
		question: "What is one of Yogesh's research interests?",
		options: [
			"Blockchain",
			"LLMs & RAG & Vision",
			"Quantum Computing",
			"Robotics"
		],
		correct: 1
	},
	{
		id: 4,
		question: "What tool did Yogesh use for YOLOv8 research?",
		options: [
			"Google Cloud AI",
			"Microsoft Azure AI",
			"AWS SageMaker",
			"IBM Watson"
		],
		correct: 1
	},
	{
		id: 5,
		question: "What is Yogesh's current role in 2026?",
		options: [
			"Software Engineer",
			"Data Scientist",
			"Lecturer @ Haridwar University",
			"Research Director"
		],
		correct: 2
	}
];
function Quiz() {
	const { score, attempts, saveScore, resetQuiz } = useQuiz("yogi_quiz");
	const [currentQuestion, setCurrentQuestion] = (0, import_react.useState)(0);
	const [selectedAnswer, setSelectedAnswer] = (0, import_react.useState)(null);
	const [showResult, setShowResult] = (0, import_react.useState)(false);
	const [quizComplete, setQuizComplete] = (0, import_react.useState)(false);
	const question = QUESTIONS[currentQuestion];
	const isCorrect = selectedAnswer === question.correct;
	const handleAnswer = (index) => {
		if (selectedAnswer !== null) return;
		setSelectedAnswer(index);
		setShowResult(true);
		setTimeout(() => {
			if (currentQuestion < QUESTIONS.length - 1) {
				setCurrentQuestion((prev) => prev + 1);
				setSelectedAnswer(null);
				setShowResult(false);
			} else {
				const finalScore = isCorrect ? score + 1 : score;
				saveScore(finalScore);
				setQuizComplete(true);
			}
		}, 1500);
	};
	const handleRestart = () => {
		setCurrentQuestion(0);
		setSelectedAnswer(null);
		setShowResult(false);
		setQuizComplete(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "quiz",
		title: "How Well Do You Know Yogi?",
		subtitle: "Test your knowledge with this fun quiz!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, { children: quizComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "text-center py-6 sm:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold/20 grid place-items-center mx-auto mb-4 sm:mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-8 sm:w-10 h-8 sm:h-10 text-gold" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl font-black text-gradient mb-2",
						children: "Quiz Complete!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mb-6",
						children: [
							"You scored",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-foreground",
								children: isCorrect ? score + 1 : score
							}),
							" ",
							"out of ",
							QUESTIONS.length
						]
					}),
					attempts > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-6",
						children: [
							"Best score: ",
							score,
							" | Attempts: ",
							attempts
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: handleRestart,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4 mr-2 inline" }), "Play Again"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							variant: "secondary",
							onClick: resetQuiz,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 mr-2 inline" }), "Reset Score"]
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6 sm:mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground",
						children: [
							"Question ",
							currentQuestion + 1,
							" of ",
							QUESTIONS.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-medium text-gold",
						children: ["Score: ", score]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden mb-6 sm:mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full bg-gradient-to-r from-purple to-pink",
						initial: { width: 0 },
						animate: { width: `${(currentQuestion + 1) / QUESTIONS.length * 100}%` },
						transition: { duration: .3 }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -20
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg sm:text-xl font-semibold mb-4 sm:mb-6",
							children: question.question
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: question.options.map((option, index) => {
								const isSelected = selectedAnswer === index;
								const isCorrectAnswer = index === question.correct;
								const showCorrect = showResult && isCorrectAnswer;
								const showWrong = showResult && isSelected && !isCorrectAnswer;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									onClick: () => handleAnswer(index),
									disabled: selectedAnswer !== null,
									className: `
                            w-full relative overflow-hidden rounded-xl p-3 sm:p-4 text-left transition-all
                            ${!selectedAnswer ? "hover:bg-secondary/70 cursor-pointer" : "cursor-default"}
                            ${showCorrect ? "bg-green-500/20 ring-2 ring-green-500" : ""}
                            ${showWrong ? "bg-destructive/20 ring-2 ring-destructive" : ""}
                            ${isSelected && !showResult ? "ring-2 ring-primary" : ""}
                          `,
									whileHover: !selectedAnswer ? { scale: 1.01 } : {},
									whileTap: !selectedAnswer ? { scale: .99 } : {},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `
                              w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium
                              ${showCorrect ? "bg-green-500 text-white" : ""}
                              ${showWrong ? "bg-destructive text-white" : ""}
                              ${!showResult && isSelected ? "bg-primary text-white" : ""}
                              ${!isSelected && !showResult ? "bg-secondary" : ""}
                            `,
											children: showCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : showWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }) : String.fromCharCode(65 + index)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm sm:text-base",
											children: option
										})]
									})
								}, index);
							})
						})]
					}, question.id)
				})
			] }) })
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var giftOptions = [
	{
		id: "upi",
		title: "UPI Payment",
		description: "Send a gift via UPI",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-6 h-6" })
	},
	{
		id: "coffee",
		title: "Buy me a coffee",
		description: "Support my work",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "w-6 h-6" })
	},
	{
		id: "amazon",
		title: "Amazon Wishlist",
		description: "Pick a gift from my wishlist",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-6 h-6" })
	},
	{
		id: "book",
		title: "Book Recommendation",
		description: "Share a book idea",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "w-6 h-6" })
	}
];
function Gifts() {
	const [showQR, setShowQR] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "gifts",
		title: "Send a Gift",
		subtitle: "Your generosity makes a difference!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6",
			children: giftOptions.map((gift, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: index * .1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
					className: "text-center cursor-pointer",
					hover: true,
					onClick: () => {
						if (gift.id === "upi") setShowQR(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-pink/20 grid place-items-center mx-auto mb-3 sm:mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-purple",
								children: gift.icon
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-base sm:text-lg mb-1 sm:mb-2",
							children: gift.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: gift.description
						})
					]
				})
			}, gift.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: showQR,
			onOpenChange: setShowQR,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-sm sm:max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg sm:text-xl font-semibold",
								children: "Scan to Pay"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white p-4 rounded-2xl inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-48 h-48 sm:w-56 sm:h-56 bg-gray-100 rounded-xl flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/qrcode.jpeg",
									alt: "Payment QR Code",
									className: "w-full h-full object-contain",
									onError: (e) => {
										e.target.style.display = "none";
									}
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "Scan the QR code to send a gift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4 text-pink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thank you for your support!" })]
						})
					]
				})
			})
		})]
	});
}
var socialLinks = [
	{
		name: "GitHub",
		url: BIRTHDAY_CONFIG.socials.github,
		icon: Github,
		color: "hover:bg-gray-800"
	},
	{
		name: "LinkedIn",
		url: BIRTHDAY_CONFIG.socials.linkedin,
		icon: Linkedin,
		color: "hover:bg-blue-600"
	},
	{
		name: "Instagram",
		url: BIRTHDAY_CONFIG.socials.instagram,
		icon: Instagram,
		color: "hover:bg-pink-600"
	},
	{
		name: "YouTube",
		url: BIRTHDAY_CONFIG.socials.youtube,
		icon: Youtube,
		color: "hover:bg-red-600"
	},
	{
		name: "Portfolio",
		url: BIRTHDAY_CONFIG.socials.portfolio,
		icon: Globe,
		color: "hover:bg-purple-600"
	},
	{
		name: "WhatsApp",
		url: BIRTHDAY_CONFIG.socials.whatsapp,
		icon: MessageCircle,
		color: "hover:bg-green-500"
	},
	{
		name: "Email",
		url: BIRTHDAY_CONFIG.socials.email,
		icon: Mail,
		color: "hover:bg-yellow-500"
	}
];
function SocialLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "socials",
		title: "Connect With Me",
		subtitle: "Let's stay in touch!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap justify-center gap-3 sm:gap-4",
			children: socialLinks.map((social, index) => {
				const Icon = social.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: social.url,
					target: "_blank",
					rel: "noopener noreferrer",
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { delay: index * .1 },
					whileHover: { scale: 1.1 },
					whileTap: { scale: .95 },
					className: `
                group relative flex items-center gap-2 sm:gap-3
                px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl
                bg-secondary/50 hover:bg-secondary
                border border-white/5 hover:border-white/10
                transition-all duration-300
              `,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground group-hover:text-foreground transition-colors" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm sm:text-base font-medium hidden sm:inline",
							children: social.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3 text-muted-foreground absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" })
					]
				}, social.name);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			whileInView: { opacity: 1 },
			viewport: { once: true },
			className: "mt-12 sm:mt-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm sm:text-base text-muted-foreground",
				children: [
					"Made with ❤️ for ",
					BIRTHDAY_CONFIG.name,
					"'s Birthday"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs sm:text-sm text-muted-foreground mt-2",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" All rights reserved"
				]
			})]
		})]
	});
}
function FloatingWidgets({ onShare }) {
	const { isMobile } = useResponsive();
	const [darkMode, setDarkMode] = (0, import_react.useState)(true);
	const [showChat, setShowChat] = (0, import_react.useState)(false);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark", !darkMode);
		localStorage.setItem("darkMode", JSON.stringify(!darkMode));
	};
	const handleSurprise = () => {
		confetti_module_default({
			particleCount: 150,
			spread: 70,
			origin: { y: .6 },
			colors: [
				"#a855f7",
				"#ec4899",
				"#eab308",
				"#3b82f6"
			]
		});
	};
	const handleShare = async () => {
		const text = `Countdown to ${BIRTHDAY_CONFIG.name}'s Birthday! 🎂`;
		if (navigator.share) try {
			await navigator.share({ text });
		} catch {}
		else await navigator.clipboard.writeText(text);
	};
	const widgets = [
		{
			icon: Sparkles,
			label: "Surprise",
			onClick: handleSurprise
		},
		{
			icon: Music,
			label: "Music",
			onClick: () => setIsPlaying(!isPlaying)
		},
		{
			icon: darkMode ? Sun : Moon,
			label: "Theme",
			onClick: toggleDarkMode
		},
		{
			icon: Share2,
			label: "Share",
			onClick: handleShare
		},
		{
			icon: MessageCircle,
			label: "Chat",
			onClick: () => setShowChat(!showChat)
		}
	];
	if (isMobile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			x: 20
		},
		animate: {
			opacity: 1,
			x: 0
		},
		className: "fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2",
		children: widgets.map((widget, index) => {
			const Icon = widget.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					x: 20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: index * .1 },
				onClick: widget.onClick,
				className: "w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary/80 transition group",
				whileHover: { scale: 1.1 },
				whileTap: { scale: .95 },
				title: widget.label,
				"aria-label": widget.label,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-muted-foreground group-hover:text-foreground transition" })
			}, widget.label);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showChat && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .9,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .9,
			y: 20
		},
		className: "fixed right-20 top-1/2 -translate-y-1/2 w-72 sm:w-80 z-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold text-sm",
					children: "Quick Chat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setShowChat(false),
					className: "p-1 rounded-lg hover:bg-secondary/50 transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: [
					{
						q: "When is the birthday?",
						a: "July 31st, 2026! 🎂"
					},
					{
						q: "How old is Yogesh turning?",
						a: "Turning 25 years old!"
					},
					{
						q: "Can I leave a wish?",
						a: "Yes! Scroll down to the wishes section."
					}
				].map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "cursor-pointer text-sm font-medium list-none flex items-center justify-between",
						children: [faq.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground group-open:rotate-180 transition-transform",
							children: "▼"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: faq.a
					})]
				}, i))
			})]
		})
	}) })] });
}
function VisitorCounter() {
	const { stats, loading } = useVisitorStats();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "visitors",
		title: "Visitor Insights",
		subtitle: "See who's celebrating with us!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .1 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-purple/20 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-5 sm:w-6 h-5 sm:h-6 text-purple" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Total Visitors"
						}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-20 mt-1" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl sm:text-3xl font-black text-gradient",
							children: stats.total_visitors.toLocaleString()
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3 h-3 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live counter" })]
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .2 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-pink/20 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-5 sm:w-6 h-5 sm:h-6 text-pink" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Countries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl sm:text-3xl font-black text-gradient",
							children: loading ? "—" : stats.country_stats.length
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16 rounded-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16 rounded-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-16 rounded-full" })
						] }) : stats.country_stats.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 py-1 rounded-full bg-secondary/50 text-xs",
							children: c.country
						}, c.country))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .3 },
					className: "sm:col-span-2 lg:col-span-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gold/20 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-5 sm:w-6 h-5 sm:h-6 text-gold" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Top Country"
						}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-24 mt-1" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl sm:text-2xl font-black text-gradient",
							children: stats.country_stats[0]?.country || "—"
						})] })]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-full rounded" }) : stats.country_stats[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stats.country_stats[0].country }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(stats.country_stats[0].count / stats.total_visitors * 100), "%"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-secondary overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-full bg-gradient-to-r from-purple to-pink",
								initial: { width: 0 },
								animate: { width: `${stats.country_stats[0].count / stats.total_visitors * 100}%` },
								transition: {
									duration: 1,
									delay: .5
								}
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No data yet"
					})] })
				})
			]
		}), !loading && stats.country_stats.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { delay: .4 },
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-semibold mb-4 text-sm sm:text-base",
				children: "All Countries"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3",
				children: stats.country_stats.map((country, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-3 py-2 rounded-lg bg-secondary/50 text-xs sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: country.country
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-gold",
						children: country.count
					})]
				}, country.country))
			})] })
		})]
	});
}
function BirthdayAppContent() {
	const [showReveal, setShowReveal] = (0, import_react.useState)(false);
	const { isMobile } = useResponsive();
	(0, import_react.useEffect)(() => {
		const checkBirthday = () => {
			if (/* @__PURE__ */ new Date() >= /* @__PURE__ */ new Date("2026-07-31T00:00:00")) setShowReveal(true);
		};
		checkBirthday();
	}, []);
	const handleReveal = () => {
		setShowReveal(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundEffects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { onReveal: handleReveal }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeStats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveCake, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestBook, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FriendWall, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIWishGenerator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryCapsule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gifts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorCounter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {}),
		!isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWidgets, {}),
		showReveal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayReveal, {
				name: "Yogesh",
				onClose: () => setShowReveal(false)
			})
		})
	] });
}
function BirthdayApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayAppContent, {}) });
}
var Route$1 = createFileRoute("/")({ component: BirthdayApp });
var Route = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — Birthday Countdown" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: AdminPage
});
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {});
}
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	AdminRoute: Route.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
