import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CLuT3uFz.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useQuiz, c as useWishes, i as usePoll, n as getBirthdayDate, o as useVisitorStats, r as useFriendWall, t as BIRTHDAY_CONFIG } from "./useDynamicData-D6xzX5mp.mjs";
import { D as isRedirect, _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { $ as Copy, A as Music, B as Instagram, C as Rocket, D as Play, E as QrCode, G as Globe, H as House, I as Lock, K as Github, L as LockOpen, M as MessageCircle, N as Menu, P as Mail, Q as Crown, R as LoaderCircle, S as RotateCcw, T as RefreshCw, U as Heart, V as Image, W as GraduationCap, X as ExternalLink, Z as Download, _ as Sparkles, a as VolumeX, c as Users, ct as ChartColumn, d as TrendingUp, dt as Book, et as Coffee, ft as BookOpen, g as SquarePen, h as Square, i as Wine, j as Moon, k as Pause, l as Upload, lt as Camera, m as Star, n as Youtube, nt as Cloud, o as Volume2, ot as ChevronDown, p as Sun, pt as Award, q as Gift, r as X, rt as Clock, s as Video, st as Check, t as Zap, tt as CodeXml, u as Trophy, ut as Brain, v as Share2, w as Reply, x as RotateCw, y as Send, z as Linkedin } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-uk5jDwc0.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmJpGKWz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const [width, setWidth] = (0, import_react.useState)(1024);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setWidth(window.innerWidth);
		setHydrated(true);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const isMobile = hydrated && width < 768;
	const isTablet = hydrated && width >= 768 && width < 1024;
	const isDesktop = !hydrated || width >= 1024;
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
				hydrated && isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
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
				hydrated && isTablet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
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
          ${hydrated && isMobile ? "pt-16" : ""}
          ${isDesktop ? "ml-64" : ""}
          ${hydrated && isTablet ? "ml-20" : ""}
          transition-all duration-300
        `,
					children
				}),
				hydrated && isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
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
	const [mounted, setMounted] = (0, import_react.useState)(false);
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
		value: "02",
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
var getInitialCandles = () => Array(10).fill(0).map((_, i) => ({
	id: i,
	height: 30,
	color: i % 2 === 0 ? "#ef4444" : "#fbbf24",
	lit: true
}));
function InteractiveBirthdayCake() {
	const [candles, setCandles] = (0, import_react.useState)(getInitialCandles());
	const [isBlown, setIsBlown] = (0, import_react.useState)(false);
	const [blowPressure, setBlowPressure] = (0, import_react.useState)(0);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [isBlowing, setIsBlowing] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setCandles(Array(10).fill(0).map((_, i) => ({
			id: i,
			height: 20 + Math.random() * 30,
			color: Math.random() > .5 ? "#ef4444" : "#fbbf24",
			lit: Math.random() > .3
		})));
	}, []);
	const handleBlow = (power) => {
		setIsBlowing(true);
		setBlowPressure(power);
		if (blowPressure > .7) {
			setIsBlown(true);
			setMessages((prev) => [...prev, "🎂 Wow! Your wish came true! The cake popped out!"]);
		}
	};
	const stopBlow = () => {
		setIsBlowing(false);
		setBlowPressure(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "interactive-cake",
		title: "Interactive Birthday Cake",
		subtitle: "Blow the candles and make a wish! 🎂",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, {
			className: "p-4 sm:p-6 lg:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "relative w-64 h-64 sm:w-80 sm:h-80 mx-auto cursor-pointer",
						whileHover: { scale: 1.05 },
						whileTap: { scale: .95 },
						animate: isBlown ? {
							rotate: [
								0,
								15,
								-15,
								0
							],
							transition: { duration: .5 }
						} : {},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 rounded-full bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 shadow-2xl border-4 border-yellow-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-2 rounded-full bg-gradient-to-br from-red-300 via-rose-300 to-pink-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl",
										children: "🎂"
									})
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-end gap-1 w-48",
							children: candles.map((candle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: candle.lit ? "animate-pulse" : "opacity-50",
								style: {
									height: candle.height,
									width: "4px",
									backgroundColor: candle.color
								},
								animate: isBlown ? {
									y: [
										-10,
										-30,
										-50
									],
									opacity: [
										1,
										.8,
										0
									],
									transition: { duration: .5 }
								} : {}
							}, candle.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-4 -right-4 bg-yellow-300 rounded-full p-2 shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-6 h-6 text-yellow-800" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl sm:text-2xl font-bold",
							children: isBlown ? "🎉 Wow! Your wish came true!" : "Blow out the candles!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted-foreground",
							children: ["💝 Messages: ", messages.length]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm mb-2",
									children: "Set your wish candle strength:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "0",
									max: "1",
									step: "0.1",
									value: blowPressure,
									onChange: (e) => handleBlow(parseFloat(e.target.value)),
									onMouseUp: stopBlow,
									onTouchEnd: stopBlow,
									className: "w-full max-w-md mx-auto",
									disabled: isBlown
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs text-muted-foreground max-w-md mx-auto px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Light 😊" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Medium 💨" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Strong 🎯" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: isBlowing ? "🔥 Blowing hard!" : isBlown ? "✅ Cake ready!" : "Slide to blow!"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 max-h-32 overflow-y-auto",
							children: messages.map((msg, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs bg-secondary/30 rounded-full px-3 py-1 inline-block mx-1",
								children: msg
							}, index))
						})
					]
				})]
			})
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
var QUESTIONS$1 = [
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
	const question = QUESTIONS$1[currentQuestion];
	const isCorrect = selectedAnswer === question.correct;
	const handleAnswer = (index) => {
		if (selectedAnswer !== null) return;
		setSelectedAnswer(index);
		setShowResult(true);
		setTimeout(() => {
			if (currentQuestion < QUESTIONS$1.length - 1) {
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
							QUESTIONS$1.length
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
							QUESTIONS$1.length
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
						animate: { width: `${(currentQuestion + 1) / QUESTIONS$1.length * 100}%` },
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
function PhotoBooth() {
	const [isCameraOpen, setIsCameraOpen] = (0, import_react.useState)(false);
	const [capturedPhotos, setCapturedPhotos] = (0, import_react.useState)([]);
	const [selectedFilter, setSelectedFilter] = (0, import_react.useState)("none");
	const [videoStream, setVideoStream] = (0, import_react.useState)(null);
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const filters = [
		{
			value: "none",
			label: "None"
		},
		{
			value: "retro",
			label: "Retro"
		},
		{
			value: "vintage",
			label: "Vintage"
		},
		{
			value: "polaroid",
			label: "Polaroid"
		},
		{
			value: "blink",
			label: "Blink"
		},
		{
			value: "grunge",
			label: "Grunge"
		}
	];
	const startCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			setVideoStream(stream);
			setIsCameraOpen(true);
			setTimeout(() => {
				if (videoRef.current) videoRef.current.srcObject = stream;
			}, 100);
		} catch (error) {
			toast.error("Camera access denied. Please check permissions.");
		}
	};
	const stopCamera = () => {
		if (videoStream) {
			videoStream.getTracks().forEach((track) => track.stop());
			setVideoStream(null);
		}
		setIsCameraOpen(false);
	};
	const capturePhoto = () => {
		if (!videoRef.current || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const video = videoRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		ctx?.drawImage(video, 0, 0);
		if (selectedFilter === "retro") {
			const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
			if (imageData) {
				for (let i = 0; i < imageData.data.length; i += 4) {
					const r = imageData.data[i];
					const g = imageData.data[i + 1];
					const b = imageData.data[i + 2];
					imageData.data[i] = r * .3;
					imageData.data[i + 1] = g * .6;
					imageData.data[i + 2] = b * .1;
				}
				ctx?.putImageData(imageData, 0, 0);
			}
		} else if (selectedFilter === "vintage") {
			const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
			if (imageData) {
				for (let i = 0; i < imageData.data.length; i += 4) {
					const r = imageData.data[i];
					const g = imageData.data[i + 1];
					const b = imageData.data[i + 2];
					imageData.data[i] = Math.min(255, r * 1.2);
					imageData.data[i + 1] = Math.min(255, g * .9);
					imageData.data[i + 2] = Math.min(255, b * .8);
				}
				ctx?.putImageData(imageData, 0, 0);
			}
		}
		const dataUrl = canvas.toDataURL("image/png");
		setCapturedPhotos((prev) => [...prev, dataUrl]);
		confetti_module_default({
			particleCount: 30,
			spread: 30,
			origin: { y: .9 }
		});
	};
	const retakePhoto = (index) => {
		setCapturedPhotos((prev) => prev.filter((_, i) => i !== index));
	};
	const savePhoto = async (photo, index) => {
		const link = document.createElement("a");
		link.download = `yob-photo-${index + 1}-${Date.now()}.png`;
		link.href = photo;
		link.click();
		toast.success("Photo saved!");
	};
	(0, import_react.useEffect)(() => {
		return () => stopCamera();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "photobooth",
		title: "Photo Booth",
		subtitle: "Take photos with fun filters and stickers!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, {
			className: "p-4 sm:p-6",
			children: capturedPhotos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: !isCameraOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-24 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 grid place-items-center mx-auto mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-12 h-12 text-purple" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: "Capture Your Moment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Choose a filter and start the camera to take photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2 mb-4",
							children: filters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedFilter(filter.value),
								className: `px-3 py-2 rounded-full text-sm transition-all ${selectedFilter === filter.value ? "bg-primary text-primary-foreground ring-2 ring-primary" : "bg-secondary/70 hover:bg-secondary"}`,
								children: filter.label
							}, filter.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: startCamera,
							fullWidth: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-4 h-4 mr-2 inline" }), "Start Camera"]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							ref: videoRef,
							autoPlay: true,
							playsInline: true,
							muted: true,
							className: "w-full rounded-xl aspect-video bg-black"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							className: "hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
								onClick: capturePhoto,
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-4 h-4 mr-2 inline" }), "Capture"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
								variant: "secondary",
								onClick: stopCamera,
								children: "Cancel"
							})]
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4",
				children: capturedPhotos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "relative group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo,
						alt: `Captured photo ${index + 1}`,
						className: "w-full rounded-xl aspect-[3/4] object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => savePhoto(photo, index),
							className: "p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => retakePhoto(index),
							className: "p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "w-4 h-4" })
						})]
					})]
				}, index))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
					onClick: () => setCapturedPhotos([]),
					variant: "secondary",
					fullWidth: true,
					children: "New Series"
				}), capturedPhotos.length >= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
					onClick: () => {
						const combinedDataUrl = capturedPhotos[0];
						const link = document.createElement("a");
						link.download = `yob-stitched-${Date.now()}.png`;
						link.href = combinedDataUrl;
						link.click();
						toast.success("Stitched photo saved!");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "w-4 h-4 mr-2 inline" }), "Stitch Photo"]
				})]
			})] })
		})
	});
}
var initialGifts = [
	{
		id: "1",
		name: "Theme Park Special",
		description: "Weekend pass for two to the local theme park with unlimited rides",
		type: "couple",
		price: 150,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1594738284582-17cbf85b547b?w=600&h=400&fit=crop",
		items: [
			"2-Day Pass",
			"Free Food Voucher",
			"Fast Track Access"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=THEMEPARK2026"
	},
	{
		id: "2",
		name: "Spa Day Deluxe",
		description: "60-minute couple massage with refreshments and aromatherapy",
		type: "couple",
		price: 200,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
		items: [
			"Couple Massage",
			"Sauna Access",
			"Fresh Juice Bar",
			"Aromatherapy"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SPADAY2026"
	},
	{
		id: "3",
		name: "VIP Concert Experience",
		description: "Front row seats for a local concert with backstage access",
		type: "friend",
		price: 250,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
		items: [
			"2 VIP Tickets",
			"Meet & Greet",
			"Limited Edition Merchandise",
			"Photo Op"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VIPCONCERT2026"
	},
	{
		id: "4",
		name: "Digital Photography Course",
		description: "Lifetime access to premium Photography & Photoshop tutorial course",
		type: "digital",
		price: 75,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=400&fit=crop",
		items: [
			"50+ Video Lessons",
			"Project Files",
			"Certificate",
			"Lifetime Updates"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DIGITALCOURSE2026"
	},
	{
		id: "5",
		name: "Fine Dining Experience",
		description: "$150 gift card for romantic dinner at premium restaurant",
		type: "couple",
		price: 150,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
		items: [
			"$150 Gift Card",
			"Complimentary Dessert",
			"Live Music"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DINNERCARD2026"
	},
	{
		id: "6",
		name: "Weekend Getaway Package",
		description: "2 nights luxury hotel stay with breakfast and spa access",
		type: "couple",
		price: 400,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
		items: [
			"2 Night Stay",
			"Breakfast Buffet",
			"Pool & Spa Access",
			"Late Checkout"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WEEKENDGETAWAY2026"
	},
	{
		id: "7",
		name: "Gaming Console Bundle",
		description: "Latest gaming console with 3 premium games",
		type: "physical",
		price: 500,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
		items: [
			"Gaming Console",
			"3 Premium Games",
			"Extra Controller",
			"1 Year Warranty"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GAMINGBUNDLE2026"
	},
	{
		id: "8",
		name: "Adventure Sports Package",
		description: "Bungee jumping, paragliding, and zip-lining experience",
		type: "friend",
		price: 180,
		opened: false,
		imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
		items: [
			"Bungee Jump",
			"Paragliding Session",
			"Zip-line Adventure",
			"Photos & Video"
		],
		qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ADVENTURE2026"
	}
];
function GiftCard({ gift }) {
	const getTypeIcon = (type) => {
		switch (type) {
			case "physical": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-5 h-5 text-blue" });
			case "digital": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 text-purple" });
			case "couple": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-5 h-5 text-pink" });
			case "friend": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-5 h-5 text-yellow" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-5 h-5 text-gold" });
		}
	};
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
		whileHover: {
			scale: 1.02,
			y: -5
		},
		whileTap: { scale: .98 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, {
			className: gift.opened ? "border-2 border-gold/50" : "",
			hover: !gift.opened,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					!gift.opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-2 right-2 z-10 bg-black/50 backdrop-blur rounded-full p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-white" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-lg mb-4 aspect-[4/3]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: gift.imageUrl,
								alt: gift.name,
								className: `w-full h-full object-cover transition-all duration-300 ${gift.opened ? "opacity-40 scale-110" : "hover:scale-105"}`
							}),
							gift.opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: 0,
									rotate: -180
								},
								animate: {
									scale: 1,
									rotate: 0
								},
								className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-yellow/20 backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "w-12 h-12 text-gold mx-auto mb-2 drop-shadow-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-bold text-sm bg-black/40 px-3 py-1 rounded-full",
										children: "Opened!"
									})]
								})
							}),
							!gift.opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg line-clamp-1",
							children: gift.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-lg bg-secondary/50 ml-2",
							children: getTypeIcon(gift.type)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mb-3 line-clamp-2",
						children: gift.description
					}),
					gift.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-lg font-bold text-gold mb-3",
						children: ["$", gift.price]
					}),
					gift.opened && gift.items && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold",
							children: "Items included:"
						}), gift.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-gold" }), item]
						}, index))]
					}),
					gift.opened && gift.qrCodeUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 mb-4 p-3 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-lg border border-gold/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-sm font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-4 h-4 text-gold" }), "Scan to Redeem:"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center p-4 bg-white rounded-lg shadow-inner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: gift.qrCodeUrl,
									alt: "Gift QR Code",
									className: "w-32 h-32"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-center text-muted-foreground",
								children: "Show this QR code to redeem your gift"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 mt-4",
						children: !gift.opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: () => onOpen(gift.id),
							fullWidth: true,
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-4 h-4 mr-2 inline" }), "Open Gift"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: () => onShare(gift),
							variant: "secondary",
							fullWidth: true,
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4 mr-2 inline" }), "Share Gift"]
						})
					})
				]
			})
		})
	});
}
function VirtualGiftBox() {
	const [gifts, setGifts] = (0, import_react.useState)(initialGifts);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const handleOpenGift = (id) => {
		const gift = gifts.find((g) => g.id === id);
		if (!gift) return;
		confetti_module_default({
			particleCount: 50,
			spread: 70,
			origin: { y: .6 }
		});
		setGifts((prev) => prev.map((g) => g.id === id ? {
			...g,
			opened: true
		} : g));
		toast.success(`You've opened ${gift.name}!`, { description: "Enjoy your special gift! 🎉" });
	};
	const handleShareGift = (gift) => {
		const text = `
    ✨ ${gift.name} ✨
    
    ${gift.description}
    
    Value: $${gift.price}
    
    #BirthdayGifts #${gift.type}
    `;
		if (navigator.share) navigator.share({ text });
		else {
			navigator.clipboard.writeText(text);
			toast.success("Gift details copied to clipboard!");
		}
	};
	const filteredGifts = gifts.filter((gift) => {
		if (filter === "all") return true;
		return gift.type === filter;
	});
	const visibleGifts = showAll ? filteredGifts : filteredGifts.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "virtual-gift-box",
		title: "Virtual Gift Box",
		subtitle: "Discover amazing gifts with real value!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: "p-4 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 mb-6 justify-center",
					children: [
						{
							value: "all",
							label: "All Gifts"
						},
						{
							value: "physical",
							label: "Physical"
						},
						{
							value: "digital",
							label: "Digital"
						},
						{
							value: "couple",
							label: "For Couple"
						},
						{
							value: "friend",
							label: "For Friend"
						}
					].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(type.value),
						className: `px-4 py-2 rounded-full text-sm font-medium transition-all $
                ${filter === type.value ? "bg-primary text-primary-foreground ring-2 ring-primary" : "bg-secondary/70 hover:bg-secondary"}
              `,
						children: type.label
					}, type.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: visibleGifts.map((gift) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftCard, {
							gift,
							onOpen: handleOpenGift,
							onShare: handleShareGift
						}, gift.id))
					})
				}),
				filteredGifts.length > 6 && !showAll && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
						onClick: () => setShowAll(true),
						variant: "secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-4 h-4 mr-2 inline" }),
							"View All Gifts (",
							filteredGifts.length,
							")"
						]
					})
				})
			]
		})
	});
}
function VideoMessages() {
	const [videoMessages, setVideoMessages] = (0, import_react.useState)([]);
	const [isRecording, setIsRecording] = (0, import_react.useState)(false);
	const [mediaRecorder, setMediaRecorder] = (0, import_react.useState)(null);
	const [recordedChunks, setRecordedChunks] = (0, import_react.useState)([]);
	const videoRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const uploadInputRef = (0, import_react.useRef)(null);
	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true
			});
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				videoRef.current.play();
			}
			const recorder = new MediaRecorder(stream);
			recorder.ondataavailable = (e) => {
				if (e.data.size > 0) setRecordedChunks((prev) => [...prev, e.data]);
			};
			recorder.onstop = () => {
				const blob = new Blob(recordedChunks, { type: "video/mp4" });
				const videoUrl = URL.createObjectURL(blob);
				const newMessage = {
					id: Date.now().toString(),
					file: new File([blob], `video-${Date.now()}.mp4`, { type: "video/mp4" }),
					preview: videoUrl,
					uploading: true,
					uploaded: false
				};
				setVideoMessages((prev) => [...prev, newMessage]);
				uploadVideo(newMessage.id, newMessage.file);
				stopRecording();
			};
			recorder.start();
			setMediaRecorder(recorder);
			setIsRecording(true);
			toast.success("Recording started! Click Stop when done.", { description: "You have 30 seconds to record" });
			setTimeout(() => {
				if (isRecording) stopRecording();
			}, 3e4);
		} catch (error) {
			toast.error("Camera/microphone access denied. Please check permissions.");
		}
	};
	const stopRecording = () => {
		if (mediaRecorder && isRecording) {
			mediaRecorder.stop();
			setIsRecording(false);
			setMediaRecorder(null);
			if (streamRef.current) {
				streamRef.current.getTracks().forEach((track) => track.stop());
				streamRef.current = null;
			}
		}
	};
	const uploadVideo = async (id, file) => {
		setVideoMessages((prev) => prev.map((msg) => msg.id === id ? {
			...msg,
			uploading: true
		} : msg));
		setTimeout(() => {
			setVideoMessages((prev) => prev.map((msg) => msg.id === id ? {
				...msg,
				uploading: false,
				uploaded: true
			} : msg));
			toast.success("Video uploaded! It will appear live for everyone. 🎥");
			confetti_module_default({
				particleCount: 30,
				spread: 40,
				origin: { y: .9 }
			});
		}, 2e3);
	};
	const handleFileUpload = (e) => {
		if (!e.target.files || e.target.files.length === 0) return;
		const file = e.target.files[0];
		if (!file.type.startsWith("video/")) {
			toast.error("Please upload a video file.");
			return;
		}
		const videoUrl = URL.createObjectURL(file);
		const newMessage = {
			id: Date.now().toString(),
			file,
			preview: videoUrl,
			uploading: false,
			uploaded: false
		};
		setVideoMessages((prev) => [...prev, newMessage]);
	};
	const removeVideo = (id) => {
		setVideoMessages((prev) => prev.filter((msg) => msg.id !== id));
		const message = videoMessages.find((msg) => msg.id === id);
		if (message?.preview) URL.revokeObjectURL(message.preview);
		toast.error("Video removed.");
	};
	const openInFullscreen = (videoUrl) => {
		const video = document.createElement("video");
		video.src = videoUrl;
		video.controls = true;
		video.autoplay = true;
		const overlay = document.createElement("div");
		const style = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 2rem;
    `;
		overlay.style.cssText = style;
		overlay.appendChild(video);
		document.body.appendChild(overlay);
		const close = () => {
			overlay.remove();
			video.pause();
		};
		overlay.onclick = close;
		video.onended = close;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "video-wishes",
		title: "Video Messages",
		subtitle: "Capture and share video wishes for Yogesh!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: "p-4 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: videoMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-center space-y-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-24 h-24 rounded-full bg-gradient-to-br from-blue/20 to-purple/20 grid place-items-center mx-auto mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-12 h-12 text-blue" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold",
						children: "Record Your Video Wish"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground max-w-md mx-auto",
						children: "Record a 30-second video message to Yogesh with your best wishes!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4 max-w-md mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold",
								children: "Record Now"
							}), isRecording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
								onClick: stopRecording,
								variant: "destructive",
								fullWidth: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4 mr-2 inline" }), "Stop Recording"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
								onClick: startRecording,
								fullWidth: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-4 h-4 mr-2 inline" }), "Start Recording (30s)"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold",
									children: "Upload Video"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: uploadInputRef,
									type: "file",
									accept: "video/*",
									onChange: handleFileUpload,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
									variant: "secondary",
									fullWidth: true,
									onClick: () => uploadInputRef.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4 mr-2 inline" }), "Upload Video"]
								})
							]
						})]
					}),
					isRecording && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						className: "flex items-center justify-center gap-2 text-red-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-red-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Recording in progress..."
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
					children: videoMessages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						className: "relative group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-xl overflow-hidden bg-black aspect-video",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: message.preview,
									className: "w-full h-full object-cover",
									muted: true,
									loop: true,
									onClick: () => openInFullscreen(message.preview)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => openInFullscreen(message.preview),
										className: "p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-5 h-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => removeVideo(message.id),
										className: "p-2 rounded-full bg-red/20 backdrop-blur text-white hover:bg-red/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-2 left-2 right-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-white text-xs bg-black/50 backdrop-blur px-2 py-1 rounded",
										children: ["Video Wish #", videoMessages.indexOf(message) + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [message.uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-yellow-400 animate-pulse" }) : message.uploaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-green-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-red-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white text-xs",
											children: message.uploading ? "Uploading..." : message.uploaded ? "Live!" : "Draft"
										})]
									})]
								})
							]
						})
					}, message.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
						onClick: () => setVideoMessages([]),
						variant: "secondary",
						children: "Clear All"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveButton, {
						onClick: () => {
							if (videoMessages.some((m) => !m.uploaded)) toast.warning("Some videos are not uploaded yet!", { description: "Click each one to upload manually" });
						},
						variant: "secondary",
						children: "Upload All"
					})]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "hidden"
			})]
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
var YOUTUBE_VIDEO_ID = "6WFJCR4GKo4";
var START_TIME = 127;
function MusicPlayer() {
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [isMinimized, setIsMinimized] = (0, import_react.useState)(false);
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	const [playerReady, setPlayerReady] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(70);
	const playerRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!window.YT) {
			const tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";
			const firstScriptTag = document.getElementsByTagName("script")[0];
			firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
		}
		const initPlayer = () => {
			if (window.YT && window.YT.Player && containerRef.current) playerRef.current = new window.YT.Player("yt-music-player-iframe", {
				height: "1",
				width: "1",
				videoId: YOUTUBE_VIDEO_ID,
				playerVars: {
					autoplay: 1,
					start: START_TIME,
					loop: 1,
					playlist: YOUTUBE_VIDEO_ID,
					controls: 0,
					disablekb: 1,
					fs: 0,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					iv_load_policy: 3
				},
				events: {
					onReady: (event) => {
						setPlayerReady(true);
						event.target.setVolume(volume);
						event.target.playVideo();
						setIsPlaying(true);
					},
					onStateChange: (event) => {
						if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
						else if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
					}
				}
			});
		};
		if (window.YT && window.YT.Player) initPlayer();
		else {
			const prev = window.onYouTubeIframeAPIReady;
			window.onYouTubeIframeAPIReady = () => {
				if (prev) prev();
				initPlayer();
			};
		}
		return () => {
			if (playerRef.current) playerRef.current.destroy();
		};
	}, []);
	const togglePlay = () => {
		if (!playerRef.current) return;
		if (isPlaying) playerRef.current.pauseVideo();
		else playerRef.current.playVideo();
		setIsPlaying(!isPlaying);
	};
	const toggleMute = () => {
		if (!playerRef.current) return;
		if (isMuted) {
			playerRef.current.unMute();
			playerRef.current.setVolume(volume);
		} else playerRef.current.mute();
		setIsMuted(!isMuted);
	};
	const handleVolumeChange = (e) => {
		const val = parseInt(e.target.value);
		setVolume(val);
		if (playerRef.current) {
			playerRef.current.setVolume(val);
			if (val === 0) setIsMuted(true);
			else {
				setIsMuted(false);
				playerRef.current.unMute();
			}
		}
	};
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		style: {
			position: "absolute",
			width: 1,
			height: 1,
			overflow: "hidden",
			opacity: 0,
			pointerEvents: "none"
		},
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "yt-music-player-iframe" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 100,
			scale: .8
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
			delay: 1
		},
		className: "fixed bottom-6 left-4 z-50",
		style: { maxWidth: isMinimized ? "56px" : "260px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .8
				},
				onClick: () => setIsMinimized(false),
				className: "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative",
				style: { background: "linear-gradient(135deg, #a855f7, #ec4899)" },
				whileHover: { scale: 1.1 },
				whileTap: { scale: .95 },
				title: "Open Music Player",
				"aria-label": "Open Music Player",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-6 h-6 text-white" }), isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400",
					animate: { scale: [
						1,
						1.3,
						1
					] },
					transition: {
						repeat: Infinity,
						duration: 1.5
					}
				})]
			}, "minimized") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .8,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .8,
					y: 20
				},
				className: "rounded-2xl shadow-2xl overflow-hidden",
				style: {
					background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 100%)",
					backdropFilter: "blur(20px)",
					border: "1px solid rgba(168,85,247,0.3)",
					width: "260px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 pt-3 pb-2 flex items-center justify-between",
					style: { background: "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(236,72,153,0.4))" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-4 h-4 text-white" }), isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400",
								animate: { scale: [
									1,
									1.4,
									1
								] },
								transition: {
									repeat: Infinity,
									duration: 1.2
								}
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-white/90 tracking-wide",
							children: "🎵 Birthday Music"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsMinimized(true),
							className: "p-1 rounded-lg hover:bg-white/10 transition text-white/70 hover:text-white",
							title: "Minimize",
							"aria-label": "Minimize player",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setIsVisible(false);
								if (playerRef.current) playerRef.current.pauseVideo();
							},
							className: "p-1 rounded-lg hover:bg-white/10 transition text-white/70 hover:text-white",
							title: "Close",
							"aria-label": "Close player",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
								style: { background: "linear-gradient(135deg, #a855f7, #ec4899)" },
								animate: isPlaying ? { rotate: 360 } : { rotate: 0 },
								transition: isPlaying ? {
									repeat: Infinity,
									duration: 4,
									ease: "linear"
								} : { duration: 0 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-4 h-4 rounded-full",
									style: { background: "rgba(0,0,0,0.5)" }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
											className: "text-sm font-semibold text-white truncate",
											animate: isPlaying ? { x: [
												0,
												-5,
												0
											] } : {},
											transition: {
												repeat: Infinity,
												duration: 3
											},
											children: "Happy Birthday 🎂"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/60 truncate",
										children: "Yogesh का Special Song 🎉"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5 mt-1",
										children: isPlaying ? [
											1,
											2,
											3,
											4
										].map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "w-1 rounded-full",
											style: { background: "#a855f7" },
											animate: { height: [
												4,
												12,
												4,
												8,
												4
											] },
											transition: {
												repeat: Infinity,
												duration: .8,
												delay: bar * .15,
												ease: "easeInOut"
											}
										}, bar)) : [
											1,
											2,
											3,
											4
										].map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-1 h-1 rounded-full",
											style: { background: "rgba(168,85,247,0.4)" }
										}, bar))
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: toggleMute,
									className: "p-1.5 rounded-lg hover:bg-white/10 transition text-white/60 hover:text-white",
									title: isMuted ? "Unmute" : "Mute",
									"aria-label": isMuted ? "Unmute" : "Mute",
									children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									onClick: togglePlay,
									className: "w-10 h-10 rounded-full flex items-center justify-center shadow-lg",
									style: { background: "linear-gradient(135deg, #a855f7, #ec4899)" },
									whileHover: { scale: 1.08 },
									whileTap: { scale: .95 },
									title: isPlaying ? "Pause" : "Play",
									"aria-label": isPlaying ? "Pause music" : "Play music",
									disabled: !playerReady,
									children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-4 h-4 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-4 h-4 text-white ml-0.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 ml-2 mr-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 100,
										value: isMuted ? 0 : volume,
										onChange: handleVolumeChange,
										className: "w-full h-1 rounded-full appearance-none cursor-pointer",
										style: {
											background: `linear-gradient(to right, #a855f7 ${isMuted ? 0 : volume}%, rgba(255,255,255,0.2) ${isMuted ? 0 : volume}%)`,
											accentColor: "#a855f7"
										},
										"aria-label": "Volume",
										title: "Volume"
									})
								})
							]
						}),
						!playerReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-white/40 mt-2",
							children: "Loading..."
						})
					]
				})]
			}, "expanded")
		})
	})] });
}
var MESSAGES = [
	"🎂 Happy Birthday Yogesh! You're absolutely amazing!",
	"🌟 25 looks great on you! Shine on forever!",
	"💪 Every year you level up — this one's no different!",
	"🎉 May all your dreams come true this year!",
	"🔥 You're not just older, you're legendary!",
	"💫 25 years of pure awesomeness!",
	"🎈 Keep smiling — the world is better with you in it!",
	"🚀 Your best chapter hasn't been written yet!",
	"🌈 You make every moment more colorful!",
	"👑 King vibes only — Happy Birthday!",
	"💝 Wishing you love, laughter & endless joy!",
	"⭐ Born to shine — Happy 25th!"
];
var COLORS$1 = [
	"#ef4444",
	"#f97316",
	"#eab308",
	"#22c55e",
	"#3b82f6",
	"#a855f7",
	"#ec4899",
	"#14b8a6",
	"#f43f5e",
	"#8b5cf6",
	"#06b6d4",
	"#84cc16"
];
function generateBalloons(count) {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		x: 5 + i % 10 * 9 + Math.random() * 5,
		color: COLORS$1[i % COLORS$1.length],
		size: 56 + Math.random() * 24,
		duration: 6 + Math.random() * 6,
		delay: Math.random() * 3,
		message: MESSAGES[i % MESSAGES.length],
		popped: false
	}));
}
function BalloonPop() {
	const [balloons, setBalloons] = (0, import_react.useState)(() => generateBalloons(12));
	const [poppedMessage, setPoppedMessage] = (0, import_react.useState)(null);
	const [allPopped, setAllPopped] = (0, import_react.useState)(false);
	const bgStars = (0, import_react.useMemo)(() => Array.from({ length: 30 }, () => ({
		w: Math.random() * 3 + 1,
		left: Math.random() * 100,
		top: Math.random() * 100,
		opacity: Math.random() * .7 + .3,
		dur: 2 + Math.random() * 3,
		delay: Math.random() * 2
	})), []);
	const popBalloon = (0, import_react.useCallback)((balloon) => {
		if (balloon.popped) return;
		confetti_module_default({
			particleCount: 30,
			spread: 50,
			startVelocity: 20,
			origin: {
				x: balloon.x / 100,
				y: .5
			},
			colors: [
				balloon.color,
				"#fff",
				"#ffd700"
			],
			scalar: .8
		});
		setBalloons((prev) => prev.map((b) => b.id === balloon.id ? {
			...b,
			popped: true
		} : b));
		setPoppedMessage({
			id: balloon.id,
			text: balloon.message,
			x: balloon.x
		});
		setTimeout(() => setPoppedMessage(null), 3e3);
	}, []);
	(0, import_react.useEffect)(() => {
		if (balloons.every((b) => b.popped)) {
			setAllPopped(true);
			setTimeout(() => {
				confetti_module_default({
					particleCount: 200,
					spread: 90,
					origin: { y: .5 }
				});
			}, 300);
		}
	}, [balloons]);
	const resetBalloons = () => {
		setBalloons(generateBalloons(12));
		setAllPopped(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "balloon-pop",
		title: "🎈 Pop the Balloons!",
		subtitle: "Har balloon mein ek special birthday message chhupa hai — pop karo!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full overflow-hidden rounded-2xl",
			style: {
				minHeight: 380,
				background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
			},
			children: [bgStars.map((star, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute rounded-full bg-white",
				style: {
					width: star.w,
					height: star.w,
					left: `${star.left}%`,
					top: `${star.top}%`,
					opacity: star.opacity
				},
				animate: { opacity: [
					.3,
					1,
					.3
				] },
				transition: {
					repeat: Infinity,
					duration: star.dur,
					delay: star.delay
				}
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full h-full",
				style: { minHeight: 380 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: balloons.map((balloon) => !balloon.popped && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute bottom-0 cursor-pointer select-none",
						style: { left: `${balloon.x}%` },
						initial: {
							y: 400,
							opacity: 0
						},
						animate: {
							y: -420,
							opacity: 1
						},
						exit: {
							scale: [
								1,
								1.4,
								0
							],
							opacity: 0
						},
						transition: {
							y: {
								duration: balloon.duration,
								delay: balloon.delay,
								ease: "linear",
								repeat: Infinity,
								repeatDelay: 1
							},
							opacity: {
								duration: .5,
								delay: balloon.delay
							}
						},
						onClick: () => popBalloon(balloon),
						whileHover: { scale: 1.15 },
						whileTap: { scale: 1.3 },
						title: "Pop me!",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: balloon.size,
							height: balloon.size * 1.3,
							viewBox: "0 0 60 80",
							style: { filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "30",
									cy: "28",
									rx: "24",
									ry: "27",
									fill: balloon.color
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "22",
									cy: "18",
									rx: "7",
									ry: "9",
									fill: "rgba(255,255,255,0.25)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M30 55 Q28 60 30 63 Q32 60 30 55Z",
									fill: balloon.color
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M30 63 Q25 72 30 80",
									stroke: "rgba(255,255,255,0.5)",
									strokeWidth: "1.5",
									fill: "none"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg pointer-events-none",
							style: { fontSize: balloon.size * .3 },
							children: "🎁"
						})]
					}, balloon.id)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: poppedMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20,
							scale: .8
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						exit: {
							opacity: 0,
							y: -20,
							scale: .8
						},
						className: "absolute z-20 px-5 py-3 rounded-2xl shadow-2xl max-w-xs text-center",
						style: {
							left: `${Math.min(Math.max(poppedMessage.x, 10), 70)}%`,
							top: "40%",
							transform: "translateX(-50%)",
							background: "rgba(255,255,255,0.97)",
							color: "#1a1a2e",
							backdropFilter: "blur(8px)",
							border: "2px solid rgba(168,85,247,0.4)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold leading-snug",
							children: poppedMessage.text
						})
					}, poppedMessage.id) }),
					allPopped && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						className: "absolute inset-0 flex flex-col items-center justify-center z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center px-6 py-8 rounded-3xl",
							style: {
								background: "rgba(0,0,0,0.7)",
								backdropFilter: "blur(12px)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-5xl mb-3",
									children: "🎉"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold text-white mb-2",
									children: "Saare Pop Ho Gaye!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/70 mb-4 text-sm",
									children: "All birthday messages discovered!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: resetBalloons,
									className: "px-6 py-2 rounded-full text-sm font-semibold text-white",
									style: { background: "linear-gradient(135deg, #a855f7, #ec4899)" },
									children: "🎈 Dobara Khelo"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white",
						style: {
							background: "rgba(0,0,0,0.5)",
							backdropFilter: "blur(8px)"
						},
						children: [balloons.filter((b) => !b.popped).length, " balloons left"]
					})
				]
			})]
		})
	});
}
var SURPRISES = [
	{
		emoji: "🎂",
		title: "Birthday Cake!",
		message: "Ek bahut bada birthday cake tumhara wait kar raha hai! 🎂"
	},
	{
		emoji: "🎁",
		title: "Secret Gift!",
		message: "Tumhare liye ek special surprise plan ho raha hai! 🎁"
	},
	{
		emoji: "🌟",
		title: "Star of the Day!",
		message: "Aaj tum hi star ho — duniya tumhari hai! ⭐"
	},
	{
		emoji: "🚀",
		title: "25 & Unstoppable!",
		message: "25 saal ke ho gaye — ab koi rok nahi sakta! 🚀"
	},
	{
		emoji: "💖",
		title: "Loads of Love!",
		message: "Teri life mein khushiyan hi khushiyan hon! 💖"
	},
	{
		emoji: "👑",
		title: "Birthday King!",
		message: "Aaj ka din sirf tumhara hai — KING vibes only! 👑"
	}
];
function ScratchCard() {
	const canvasRef = (0, import_react.useRef)(null);
	const [isScratching, setIsScratching] = (0, import_react.useState)(false);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [currentSurprise] = (0, import_react.useState)(() => SURPRISES[Math.floor(Math.random() * SURPRISES.length)]);
	const [scratchPercent, setScratchPercent] = (0, import_react.useState)(0);
	const lastPos = (0, import_react.useRef)(null);
	const initCanvas = (0, import_react.useCallback)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		grad.addColorStop(0, "#a855f7");
		grad.addColorStop(.5, "#ec4899");
		grad.addColorStop(1, "#8b5cf6");
		ctx.fillStyle = grad;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "rgba(255,255,255,0.25)";
		ctx.font = `bold ${canvas.width * .06}px sans-serif`;
		ctx.textAlign = "center";
		ctx.fillText("🎁 Scratch Here! 🎁", canvas.width / 2, canvas.height / 2 - 10);
		ctx.font = `${canvas.width * .04}px sans-serif`;
		ctx.fillText("Kahin kuch chhupa hai...", canvas.width / 2, canvas.height / 2 + 24);
	}, []);
	(0, import_react.useEffect)(() => {
		initCanvas();
		window.addEventListener("resize", initCanvas);
		return () => window.removeEventListener("resize", initCanvas);
	}, [initCanvas]);
	const getPos = (e, canvas) => {
		const rect = canvas.getBoundingClientRect();
		if ("touches" in e) return {
			x: e.touches[0].clientX - rect.left,
			y: e.touches[0].clientY - rect.top
		};
		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
	};
	const scratch = (e) => {
		if (!isScratching || revealed) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const pos = getPos(e, canvas);
		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		if (lastPos.current) {
			ctx.moveTo(lastPos.current.x, lastPos.current.y);
			ctx.lineTo(pos.x, pos.y);
			ctx.lineWidth = 44;
			ctx.lineCap = "round";
			ctx.stroke();
		}
		ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
		ctx.fill();
		lastPos.current = pos;
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		let transparent = 0;
		for (let i = 3; i < imageData.data.length; i += 4) if (imageData.data[i] < 128) transparent++;
		const pct = Math.round(transparent / (canvas.width * canvas.height) * 100);
		setScratchPercent(pct);
		if (pct > 55 && !revealed) {
			setRevealed(true);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			confetti_module_default({
				particleCount: 100,
				spread: 80,
				origin: { y: .5 }
			});
		}
	};
	const reset = () => {
		setRevealed(false);
		setScratchPercent(0);
		lastPos.current = null;
		setTimeout(initCanvas, 50);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "scratch-card",
		title: "🃏 Scratch Card",
		subtitle: "Scratch karo aur apna birthday surprise reveal karo!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
				className: "w-full max-w-md p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-xl overflow-hidden",
					style: { aspectRatio: "16/9" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6",
						style: { background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: revealed ? {
									scale: [
										.5,
										1.2,
										1
									],
									rotate: [
										0,
										-10,
										10,
										0
									]
								} : {},
								transition: { duration: .6 },
								className: "text-6xl mb-3",
								children: currentSurprise.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-white mb-2",
								children: currentSurprise.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/80 text-sm",
								children: currentSurprise.message
							}),
							revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "mt-4 px-4 py-1.5 rounded-full text-xs font-semibold",
								style: {
									background: "linear-gradient(90deg, #a855f7, #ec4899)",
									color: "white"
								},
								children: "🎉 Happy Birthday Yogesh!"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "absolute inset-0 w-full h-full touch-none",
						style: { cursor: revealed ? "default" : "crosshair" },
						onMouseDown: (e) => {
							setIsScratching(true);
							lastPos.current = null;
							scratch(e);
						},
						onMouseMove: scratch,
						onMouseUp: () => {
							setIsScratching(false);
							lastPos.current = null;
						},
						onMouseLeave: () => {
							setIsScratching(false);
							lastPos.current = null;
						},
						onTouchStart: (e) => {
							e.preventDefault();
							setIsScratching(true);
							lastPos.current = null;
							scratch(e);
						},
						onTouchMove: (e) => {
							e.preventDefault();
							scratch(e);
						},
						onTouchEnd: () => {
							setIsScratching(false);
							lastPos.current = null;
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mt-3 px-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden mr-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-full rounded-full",
								style: { background: "linear-gradient(90deg, #a855f7, #ec4899)" },
								animate: { width: `${scratchPercent}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground mr-3",
							children: [scratchPercent, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: reset,
							className: "p-1.5 rounded-lg hover:bg-secondary/50 transition text-muted-foreground hover:text-foreground",
							title: "Reset card",
							"aria-label": "Reset scratch card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4" })
						})
					]
				})]
			}), revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-center text-muted-foreground text-sm",
				children: "🔄 Naya card try karne ke liye refresh button dabao!"
			})]
		})
	});
}
var CONSTELLATIONS = [
	{
		name: "Leo",
		emoji: "♌",
		stars: [
			{
				x: 20,
				y: 35,
				size: 3.5,
				brightness: 1
			},
			{
				x: 26,
				y: 28,
				size: 2.5,
				brightness: .9
			},
			{
				x: 34,
				y: 24,
				size: 3,
				brightness: .95
			},
			{
				x: 38,
				y: 32,
				size: 2,
				brightness: .8
			},
			{
				x: 32,
				y: 38,
				size: 2.5,
				brightness: .85
			},
			{
				x: 24,
				y: 42,
				size: 2,
				brightness: .7
			}
		],
		lines: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 0]
		],
		color: "#fbbf24",
		label: {
			x: 29,
			y: 50
		}
	},
	{
		name: "Scorpius",
		emoji: "♏",
		stars: [
			{
				x: 60,
				y: 20,
				size: 3,
				brightness: 1
			},
			{
				x: 65,
				y: 26,
				size: 2.5,
				brightness: .9
			},
			{
				x: 68,
				y: 33,
				size: 3.5,
				brightness: .95
			},
			{
				x: 72,
				y: 40,
				size: 2,
				brightness: .8
			},
			{
				x: 76,
				y: 47,
				size: 2,
				brightness: .75
			},
			{
				x: 73,
				y: 55,
				size: 2.5,
				brightness: .85
			}
		],
		lines: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5]
		],
		color: "#f87171",
		label: {
			x: 68,
			y: 63
		}
	},
	{
		name: "Virgo",
		emoji: "♍",
		stars: [
			{
				x: 45,
				y: 15,
				size: 4,
				brightness: 1
			},
			{
				x: 50,
				y: 22,
				size: 2.5,
				brightness: .9
			},
			{
				x: 44,
				y: 28,
				size: 2,
				brightness: .8
			},
			{
				x: 52,
				y: 30,
				size: 3,
				brightness: .85
			},
			{
				x: 47,
				y: 36,
				size: 2.5,
				brightness: .75
			}
		],
		lines: [
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4]
		],
		color: "#a78bfa",
		label: {
			x: 48,
			y: 43
		}
	}
];
var BG_STARS = Array.from({ length: 120 }, (_, i) => ({
	id: i,
	x: Math.random() * 100,
	y: Math.random() * 100,
	size: Math.random() * 2 + .5,
	opacity: Math.random() * .7 + .2,
	twinkleDuration: 2 + Math.random() * 4,
	delay: Math.random() * 5
}));
var PLANETS = [
	{
		name: "Venus",
		x: 8,
		y: 12,
		size: 5,
		color: "#fde68a",
		glow: "#fbbf24"
	},
	{
		name: "Jupiter",
		x: 88,
		y: 18,
		size: 7,
		color: "#fb923c",
		glow: "#f97316"
	},
	{
		name: "Mars",
		x: 15,
		y: 72,
		size: 4,
		color: "#f87171",
		glow: "#ef4444"
	},
	{
		name: "Saturn",
		x: 82,
		y: 68,
		size: 5.5,
		color: "#c4b5fd",
		glow: "#a855f7"
	}
];
function StarMap() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [hoveredPlanet, setHoveredPlanet] = (0, import_react.useState)(null);
	const selectedConst = CONSTELLATIONS.find((c) => c.name === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "star-map",
		title: "🌟 Birthday Star Map",
		subtitle: "31 July 2026 ki raat ka aasman — Yogesh ke janam din ki sky!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: "overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full rounded-xl overflow-hidden",
				style: {
					aspectRatio: "16/9",
					minHeight: 320,
					background: "radial-gradient(ellipse at 50% 0%, #0d1b3e 0%, #020817 60%, #000 100%)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "radial-gradient(ellipse 80% 30% at 50% 60%, rgba(100,80,200,0.12) 0%, transparent 70%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute inset-0 w-full h-full",
						viewBox: "0 0 100 100",
						preserveAspectRatio: "xMidYMid meet",
						children: [
							BG_STARS.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
								cx: star.x,
								cy: star.y,
								r: star.size * .25,
								fill: "white",
								animate: { opacity: [
									star.opacity,
									star.opacity * .3,
									star.opacity
								] },
								transition: {
									repeat: Infinity,
									duration: star.twinkleDuration,
									delay: star.delay
								}
							}, star.id)),
							PLANETS.map((planet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								style: { cursor: "pointer" },
								onClick: () => setHoveredPlanet(hoveredPlanet === planet.name ? null : planet.name),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
										cx: planet.x,
										cy: planet.y,
										r: planet.size * .6,
										fill: planet.glow,
										animate: {
											r: [
												planet.size * .55,
												planet.size * .75,
												planet.size * .55
											],
											opacity: [
												.3,
												.6,
												.3
											]
										},
										transition: {
											repeat: Infinity,
											duration: 3
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: planet.x,
										cy: planet.y,
										r: planet.size * .35,
										fill: planet.color
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: planet.x,
										y: planet.y + planet.size * .7,
										textAnchor: "middle",
										fill: "rgba(255,255,255,0.6)",
										fontSize: "2",
										fontFamily: "sans-serif",
										children: planet.name
									})
								]
							}, planet.name)),
							CONSTELLATIONS.map((constellation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								style: { cursor: "pointer" },
								onClick: () => setSelected(selected === constellation.name ? null : constellation.name),
								children: [
									constellation.lines.map(([a, b], li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
										x1: constellation.stars[a].x,
										y1: constellation.stars[a].y,
										x2: constellation.stars[b].x,
										y2: constellation.stars[b].y,
										stroke: constellation.color,
										strokeWidth: "0.3",
										animate: { opacity: selected === constellation.name ? [
											.4,
											.9,
											.4
										] : [
											.15,
											.35,
											.15
										] },
										transition: {
											repeat: Infinity,
											duration: 2.5
										}
									}, li)),
									constellation.stars.map((star, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
										cx: star.x,
										cy: star.y,
										r: star.size * .4,
										fill: constellation.color,
										animate: {
											r: selected === constellation.name ? [
												star.size * .4,
												star.size * .6,
												star.size * .4
											] : [
												star.size * .35,
												star.size * .45,
												star.size * .35
											],
											opacity: [
												star.brightness * .7,
												star.brightness,
												star.brightness * .7
											]
										},
										transition: {
											repeat: Infinity,
											duration: 1.5 + si * .2
										}
									}) }, si)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
										x: constellation.label.x,
										y: constellation.label.y,
										textAnchor: "middle",
										fill: constellation.color,
										fontSize: "2.5",
										fontFamily: "sans-serif",
										opacity: selected === constellation.name ? 1 : .5,
										children: [
											constellation.emoji,
											" ",
											constellation.name
										]
									})
								]
							}, constellation.name)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: "50",
									cy: "50",
									r: "1.5",
									fill: "#ffd700",
									animate: {
										r: [
											1.5,
											2.5,
											1.5
										],
										opacity: [
											.8,
											1,
											.8
										]
									},
									transition: {
										repeat: Infinity,
										duration: 1.5
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
									cx: "50",
									cy: "50",
									r: "3",
									fill: "#ffd700",
									animate: {
										r: [
											3,
											5,
											3
										],
										opacity: [
											.3,
											0,
											.3
										]
									},
									transition: {
										repeat: Infinity,
										duration: 1.5
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "50",
									y: "55.5",
									textAnchor: "middle",
									fill: "#ffd700",
									fontSize: "2.2",
									fontFamily: "sans-serif",
									fontWeight: "bold",
									children: "★ Yogesh's Star"
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-3 left-3 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full",
						style: {
							background: "rgba(0,0,0,0.5)",
							backdropFilter: "blur(8px)"
						},
						children: "🗓 July 31, 2026 • 12:00 AM IST • India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedConst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: 20
						},
						className: "absolute bottom-3 left-3 right-3 rounded-xl p-4 text-sm",
						style: {
							background: "rgba(0,0,0,0.75)",
							backdropFilter: "blur(12px)",
							border: `1px solid ${selectedConst.color}40`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: selectedConst.color },
								className: "text-2xl",
								children: selectedConst.emoji
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-bold text-white",
								children: [selectedConst.name, " Constellation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-white/60 text-xs",
								children: [
									"Birthday night par visible — ",
									selectedConst.stars.length,
									" main stars"
								]
							})] })]
						})
					}) }),
					!selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 left-0 right-0 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/40 text-xs px-3 py-1.5 rounded-full",
							style: { background: "rgba(0,0,0,0.4)" },
							children: "✨ Constellation click karo explore karne ke liye"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-4 justify-center p-4",
				children: [CONSTELLATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSelected(selected === c.name ? null : c.name),
					className: "flex items-center gap-1.5 text-sm transition-opacity",
					style: { opacity: selected && selected !== c.name ? .4 : 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: c.color },
						children: c.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: c.name
					})]
				}, c.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 text-yellow-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Yogesh's Star"
					})]
				})]
			})]
		})
	});
}
var FORTUNES = [
	{
		text: "Tujhe aaj bahut bada surprise milne wala hai!",
		emoji: "🎁",
		color: "#f59e0b"
	},
	{
		text: "25 ki umar mein tere sapne poore honge — yaqeen rakh!",
		emoji: "🌟",
		color: "#a855f7"
	},
	{
		text: "Ek naya safar shuru hone wala hai tere liye.",
		emoji: "🚀",
		color: "#3b82f6"
	},
	{
		text: "Jo log tujhse pyar karte hain, aaj unhe yaad kar.",
		emoji: "💖",
		color: "#ec4899"
	},
	{
		text: "Tera aane wala saal sabse best hoga!",
		emoji: "🏆",
		color: "#eab308"
	},
	{
		text: "Kuch naya seekh, kuch naya ban — 25 mein duniya tere liye hai!",
		emoji: "🌈",
		color: "#22c55e"
	},
	{
		text: "Tu jahan bhi jayega, khushiyan tere peechhe aayengi.",
		emoji: "✨",
		color: "#f97316"
	},
	{
		text: "Aaj ka din tere liye likha gaya tha — enjoy kar!",
		emoji: "🎂",
		color: "#06b6d4"
	},
	{
		text: "Tere dost, teri family — ye hi teri sabse badi daulat hai.",
		emoji: "🤝",
		color: "#8b5cf6"
	},
	{
		text: "Har mushkil ke baad ek sunehri subah hoti hai — teri aa rahi hai!",
		emoji: "🌅",
		color: "#ef4444"
	}
];
function FortuneCookie() {
	const [phase, setPhase] = (0, import_react.useState)("closed");
	const [fortune, setFortune] = (0, import_react.useState)(null);
	const crack = () => {
		if (phase !== "closed") return;
		setPhase("cracking");
		const picked = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
		setFortune(picked);
		setTimeout(() => {
			setPhase("open");
			confetti_module_default({
				particleCount: 60,
				spread: 70,
				origin: { y: .6 },
				colors: [
					picked.color,
					"#fff",
					"#ffd700"
				]
			});
		}, 700);
	};
	const reset = () => {
		setPhase("closed");
		setFortune(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "fortune-cookie",
		title: "🔮 Fortune Cookie",
		subtitle: "Cookie todke apna birthday fortune pao — kya likha hai tere liye?",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-8 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center",
				style: { minHeight: 220 },
				children: [
					phase === "closed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "cursor-pointer select-none",
						whileHover: {
							scale: 1.08,
							rotate: 2
						},
						whileTap: { scale: .95 },
						onClick: crack,
						title: "Cookie todne ke liye click karo!",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "180",
							height: "160",
							viewBox: "0 0 180 160",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
									id: "cg1",
									cx: "50%",
									cy: "40%",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#fde68a"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#d97706"
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "90",
									cy: "95",
									rx: "72",
									ry: "50",
									fill: "url(#cg1)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "90",
									cy: "80",
									rx: "72",
									ry: "50",
									fill: "url(#cg1)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M18 80 Q90 110 162 80",
									stroke: "#b45309",
									strokeWidth: "3",
									fill: "none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "65",
									cy: "65",
									rx: "20",
									ry: "10",
									fill: "rgba(255,255,255,0.2)",
									transform: "rotate(-20,65,65)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "70",
									cy: "85",
									r: "4",
									fill: "#b45309",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "105",
									cy: "78",
									r: "3.5",
									fill: "#b45309",
									opacity: "0.45"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "90",
									cy: "95",
									r: "3",
									fill: "#b45309",
									opacity: "0.4"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "text-center text-muted-foreground text-sm mt-2",
							animate: { opacity: [
								.5,
								1,
								.5
							] },
							transition: {
								repeat: Infinity,
								duration: 2
							},
							children: "👆 Click to crack!"
						})]
					}),
					phase === "cracking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 1 },
						animate: {
							scale: [
								1,
								1.2,
								.9,
								1.1
							],
							rotate: [
								0,
								-8,
								8,
								-4,
								0
							]
						},
						transition: { duration: .7 },
						className: "text-8xl",
						children: "🥠"
					}),
					phase === "open" && fortune && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .5,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: {
							type: "spring",
							stiffness: 200
						},
						className: "flex flex-col items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									x: 0,
									rotate: 0
								},
								animate: {
									x: -30,
									rotate: -25
								},
								className: "text-5xl",
								children: "🥠"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									x: 0,
									rotate: 0
								},
								animate: {
									x: 30,
									rotate: 25
								},
								className: "text-5xl",
								children: "🥠"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								scaleY: 0,
								y: -20
							},
							animate: {
								scaleY: 1,
								y: 0
							},
							transition: {
								delay: .2,
								type: "spring"
							},
							className: "relative px-6 py-4 rounded-lg text-center max-w-xs shadow-2xl",
							style: {
								background: "#fffdf0",
								border: `2px dashed ${fortune.color}60`,
								transformOrigin: "top center"
							},
							children: [
								[
									1,
									2,
									3
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-px mb-3",
									style: { background: "#e5e7eb" }
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl mb-3",
									children: fortune.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium text-gray-800 leading-relaxed italic",
									children: [
										"\"",
										fortune.text,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-gray-400",
									children: "— Birthday Fortune"
								})
							]
						})]
					})
				]
			}), phase === "open" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				onClick: reset,
				className: "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition",
				style: {
					background: "rgba(168,85,247,0.15)",
					border: "1px solid rgba(168,85,247,0.3)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4" }), "Ek aur fortune try karo"]
			})]
		})
	});
}
var INITIAL_TOASTS = [
	{
		id: 1,
		name: "Ananya",
		message: "Yogesh bhai, tu best hai! Cheers to 25! 🥂",
		timestamp: "2 min ago",
		clinking: false
	},
	{
		id: 2,
		name: "Rahul",
		message: "Happy Birthday dost — yeh saal toh kamaal ka hoga! 🎉",
		timestamp: "5 min ago",
		clinking: false
	},
	{
		id: 3,
		name: "Priya",
		message: "To Yogesh — may all your dreams come true! 🌟",
		timestamp: "8 min ago",
		clinking: false
	},
	{
		id: 4,
		name: "Dev",
		message: "25 saal ke ho gaye bhai! Cheers to many more! 🍾",
		timestamp: "12 min ago",
		clinking: false
	}
];
function ToastWall() {
	const [toasts, setToasts] = (0, import_react.useState)(INITIAL_TOASTS);
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [bigClink, setBigClink] = (0, import_react.useState)(false);
	const nextId = (0, import_react.useRef)(INITIAL_TOASTS.length + 1);
	const handleClink = (id) => {
		setToasts((prev) => prev.map((t) => t.id === id ? {
			...t,
			clinking: true
		} : t));
		setTimeout(() => setToasts((prev) => prev.map((t) => t.id === id ? {
			...t,
			clinking: false
		} : t)), 800);
		confetti_module_default({
			particleCount: 25,
			spread: 40,
			origin: { y: .5 },
			colors: [
				"#fbbf24",
				"#f97316",
				"#fde68a"
			]
		});
	};
	const handleBigClink = () => {
		setBigClink(true);
		setTimeout(() => setBigClink(false), 1200);
		confetti_module_default({
			particleCount: 120,
			spread: 100,
			origin: { y: .4 },
			colors: [
				"#fbbf24",
				"#f97316",
				"#fde68a",
				"#fff",
				"#a855f7"
			]
		});
		toast.success("🥂 CHEERS! Everyone is toasting Yogesh!");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim() || !message.trim()) return;
		const newToast = {
			id: nextId.current++,
			name: name.trim(),
			message: message.trim(),
			timestamp: "Just now",
			clinking: false
		};
		setToasts((prev) => [newToast, ...prev]);
		setName("");
		setMessage("");
		confetti_module_default({
			particleCount: 40,
			spread: 60,
			origin: { y: .5 }
		});
		toast.success(`🥂 ${newToast.name}'s toast added!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "toast-wall",
		title: "🥂 Virtual Toast Wall",
		subtitle: "Yogesh ke liye virtual toast raise karo — celebrations shuru ho jaaye!",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					onClick: handleBigClink,
					whileHover: { scale: 1.06 },
					whileTap: { scale: .94 },
					className: "relative px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl overflow-hidden",
					style: { background: "linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						className: "flex items-center gap-3",
						animate: bigClink ? {
							scale: [
								1,
								1.2,
								.9,
								1.1,
								1
							],
							rotate: [
								-5,
								5,
								-3,
								3,
								0
							]
						} : {},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: "🥂"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Everyone Raise Your Glass!" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: "🥂"
							})
						]
					}), bigClink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: 0,
							opacity: 1
						},
						animate: {
							scale: 4,
							opacity: 0
						},
						className: "absolute inset-0 rounded-2xl",
						style: { background: "rgba(251,191,36,0.5)" }
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
				className: "mb-6 p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-semibold mb-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wine, { className: "w-4 h-4 text-yellow-500" }), "Apna toast add karo"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Tumhara naam",
							value: name,
							onChange: (e) => setName(e.target.value),
							maxLength: 30,
							className: "w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							placeholder: "Yogesh ke liye tumhara toast message... 🥂",
							value: message,
							onChange: (e) => setMessage(e.target.value),
							maxLength: 120,
							rows: 2,
							className: "w-full px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [message.length, "/120"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								type: "submit",
								whileHover: { scale: 1.04 },
								whileTap: { scale: .96 },
								disabled: !name.trim() || !message.trim(),
								className: "flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed",
								style: { background: "linear-gradient(135deg, #d97706, #f59e0b)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5" }), "Toast Karo! 🥂"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							y: -20,
							scale: .9
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: .8
						},
						className: "group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveCard, {
							className: "p-4 cursor-pointer",
							hover: true,
							onClick: () => handleClink(t.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "text-3xl flex-shrink-0",
									animate: t.clinking ? {
										rotate: [
											-10,
											10,
											-8,
											8,
											0
										],
										scale: [
											1,
											1.3,
											1
										]
									} : {},
									transition: { duration: .6 },
									children: "🥂"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-sm",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground flex-shrink-0",
												children: t.timestamp
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground leading-relaxed",
											children: t.message
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-yellow-500/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity",
											children: "👆 Click to clink!"
										})
									]
								})]
							})
						})
					}, t.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-muted-foreground text-sm mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-3.5 h-3.5 inline mr-1 text-pink-500" }),
					toasts.length,
					" log Yogesh ko toast kar rahe hain!"
				]
			})
		]
	});
}
var LETTER_LINES = [
	"Pyare Yogesh,",
	"",
	"Aaj tera 25th birthday hai — aur main chahta hoon ki tu jaane",
	"ki yeh din kitna khaas hai. Sirf ek saal nahi badha tu,",
	"balki aur zyada mature, aur zyada brave, aur zyada amazing ban gaya.",
	"",
	"25 saal mein tune jo bhi seekha, jitne bhi gire aur uthhe —",
	"woh sab tujhe aaj ka tu banate hain. Aur aaj ka tu?",
	"Absolutely incredible hai.",
	"",
	"Jo log tujhe jaante hain, woh lucky hain. Teri smile,",
	"teri energy, tera dil — duniya thodi aur sundar hai",
	"sirf isliye ki tu ismein hai.",
	"",
	"Aaj celebrate kar — khulke, dil se, poori tarah se.",
	"Kyunki tu deserve karta hai har khushi jo aa rahi hai.",
	"",
	"Happy Birthday, King. 🎂👑",
	"",
	"— Dil se,",
	"Teri Birthday Website 🎉"
];
function BirthdayLetter() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [displayedLines, setDisplayedLines] = (0, import_react.useState)([]);
	const [lineIndex, setLineIndex] = (0, import_react.useState)(0);
	const [charIndex, setCharIndex] = (0, import_react.useState)(0);
	const [typing, setTyping] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isOpen || !typing) return;
		if (lineIndex >= LETTER_LINES.length) {
			setTyping(false);
			return;
		}
		const currentLine = LETTER_LINES[lineIndex];
		if (currentLine === "") {
			setDisplayedLines((prev) => [...prev, ""]);
			setLineIndex((li) => li + 1);
			setCharIndex(0);
			return;
		}
		if (charIndex < currentLine.length) {
			const timeout = setTimeout(() => {
				setDisplayedLines((prev) => {
					const next = [...prev];
					if (next.length <= lineIndex) next.push("");
					next[lineIndex] = currentLine.slice(0, charIndex + 1);
					return next;
				});
				setCharIndex((ci) => ci + 1);
			}, 28);
			return () => clearTimeout(timeout);
		} else {
			const timeout = setTimeout(() => {
				setLineIndex((li) => li + 1);
				setCharIndex(0);
			}, 80);
			return () => clearTimeout(timeout);
		}
	}, [
		isOpen,
		typing,
		lineIndex,
		charIndex
	]);
	const handleOpen = () => {
		if (isOpen) return;
		setIsOpen(true);
		setDisplayedLines([]);
		setLineIndex(0);
		setCharIndex(0);
		setTyping(true);
	};
	const skipToEnd = () => {
		setDisplayedLines(LETTER_LINES);
		setLineIndex(LETTER_LINES.length);
		setTyping(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "birthday-letter",
		title: "📝 Birthday Letter",
		subtitle: "Yogesh ke liye ek special handwritten letter — dil se likha hua",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-center gap-6",
			children: !isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "cursor-pointer select-none",
				whileHover: {
					scale: 1.05,
					y: -4
				},
				whileTap: { scale: .97 },
				onClick: handleOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center",
					style: {
						width: 280,
						height: 180,
						background: "linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 left-0 right-0",
							style: {
								height: 0,
								borderLeft: "140px solid transparent",
								borderRight: "140px solid transparent",
								borderTop: "90px solid rgba(217,119,6,0.5)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg",
							style: { background: "linear-gradient(135deg, #dc2626, #991b1b)" },
							animate: { scale: [
								1,
								1.05,
								1
							] },
							transition: {
								repeat: Infinity,
								duration: 2
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: "🎂"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative z-10 mt-3 text-amber-900 font-semibold text-sm",
							children: "Yogesh ke liye — Click to open!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute bottom-3 right-3 w-5 h-5 text-amber-700/40" })
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					rotateX: -30
				},
				animate: {
					opacity: 1,
					rotateX: 0
				},
				className: "w-full max-w-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl shadow-2xl overflow-hidden p-8",
					style: {
						background: "linear-gradient(160deg, #fffdf5 0%, #fefce8 100%)",
						border: "1px solid #fde68a",
						minHeight: 420
					},
					children: [
						Array.from({ length: 16 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 right-0",
							style: {
								top: 80 + i * 32,
								height: 1,
								background: "rgba(147,197,253,0.3)",
								marginLeft: 48,
								marginRight: 24
							}
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 bottom-0 left-14",
							style: {
								width: 1,
								background: "rgba(239,68,68,0.3)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 pl-8",
							style: {
								fontFamily: "'Georgia', 'Times New Roman', serif",
								color: "#1c1917",
								lineHeight: "2"
							},
							children: [displayedLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								className: `${i === 0 ? "font-bold text-lg text-amber-800" : "text-sm"} ${line.startsWith("—") ? "mt-2 text-amber-700 font-medium" : ""} ${line === "" ? "h-4" : ""}`,
								children: line
							}, i)), typing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								animate: { opacity: [
									1,
									0,
									1
								] },
								transition: {
									repeat: Infinity,
									duration: .8
								},
								className: "inline-block w-0.5 h-4 bg-amber-800 ml-0.5 align-middle"
							})]
						}),
						typing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: skipToEnd,
							className: "absolute bottom-4 right-4 text-xs text-amber-600 hover:text-amber-800 transition flex items-center gap-1",
							children: ["Skip to end ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3 h-3" })]
						}),
						!typing && displayedLines.length === LETTER_LINES.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							className: "absolute bottom-4 right-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: "💛"
							})
						})
					]
				})
			})
		})
	});
}
var SEED_WORDS = [
	"Amazing",
	"Talented",
	"Kind",
	"Funny",
	"Loyal",
	"Creative",
	"Brave",
	"Smart",
	"Dost",
	"Legend",
	"Caring",
	"Awesome",
	"Chill",
	"Vibe",
	"Real",
	"Motivated",
	"Honest",
	"Hustler",
	"Gem",
	"Unique"
];
var COLORS = [
	"#a855f7",
	"#ec4899",
	"#3b82f6",
	"#22c55e",
	"#f59e0b",
	"#ef4444",
	"#06b6d4",
	"#8b5cf6",
	"#f97316",
	"#14b8a6",
	"#e11d48",
	"#7c3aed"
];
var wordIdCounter = SEED_WORDS.length + 1;
function buildWord(text, idx) {
	return {
		id: idx,
		text,
		size: 14 + Math.random() * 22,
		color: COLORS[Math.floor(Math.random() * COLORS.length)],
		x: 5 + Math.random() * 80,
		y: 5 + Math.random() * 80,
		rotation: Math.random() * 30 - 15,
		duration: 4 + Math.random() * 5,
		delay: Math.random() * 3
	};
}
var initialWords = SEED_WORDS.map((w, i) => buildWord(w, i + 1));
function WordCloud() {
	const [words, setWords] = (0, import_react.useState)(initialWords);
	const [input, setInput] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const nextId = (0, import_react.useRef)(wordIdCounter);
	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmed = input.trim().replace(/\s+/g, " ").slice(0, 20);
		if (!trimmed) return;
		setSubmitting(true);
		const newWord = buildWord(trimmed, nextId.current++);
		setWords((prev) => [...prev, newWord]);
		setInput("");
		setSubmitting(false);
		confetti_module_default({
			particleCount: 30,
			spread: 50,
			origin: { y: .7 },
			scalar: .7
		});
		toast.success(`✨ "${trimmed}" cloud mein add ho gaya!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "word-cloud",
		title: "☁️ Word Cloud",
		subtitle: "Ek word likho jo Yogesh ko describe karta hai — cloud mein udne do!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full rounded-2xl overflow-hidden mb-6",
			style: {
				minHeight: 320,
				background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.08) 0%, rgba(0,0,0,0) 70%)",
				border: "1px solid rgba(168,85,247,0.15)"
			},
			children: [
				[
					{
						cx: "20%",
						cy: "50%",
						rx: "15%",
						ry: "8%"
					},
					{
						cx: "50%",
						cy: "30%",
						rx: "22%",
						ry: "10%"
					},
					{
						cx: "78%",
						cy: "60%",
						rx: "17%",
						ry: "9%"
					}
				].map((ellipse, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "absolute inset-0 w-full h-full pointer-events-none",
					style: { opacity: .04 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: ellipse.cx,
						cy: ellipse.cy,
						rx: ellipse.rx,
						ry: ellipse.ry,
						fill: "#a855f7"
					})
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-full h-full",
					style: { minHeight: 320 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: words.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .4
						},
						animate: {
							opacity: [
								.7,
								1,
								.7
							],
							scale: 1,
							y: [
								0,
								-8,
								0
							],
							rotate: [
								word.rotation - 2,
								word.rotation + 2,
								word.rotation - 2
							]
						},
						exit: {
							opacity: 0,
							scale: .4
						},
						transition: {
							opacity: {
								repeat: Infinity,
								duration: word.duration,
								delay: word.delay
							},
							y: {
								repeat: Infinity,
								duration: word.duration * .8,
								delay: word.delay,
								ease: "easeInOut"
							},
							rotate: {
								repeat: Infinity,
								duration: word.duration * 1.2,
								delay: word.delay,
								ease: "easeInOut"
							},
							scale: {
								duration: .5,
								type: "spring"
							}
						},
						className: "absolute select-none pointer-events-none font-bold",
						style: {
							left: `${word.x}%`,
							top: `${word.y}%`,
							fontSize: word.size,
							color: word.color,
							transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
							textShadow: `0 2px 12px ${word.color}40`,
							filter: `drop-shadow(0 0 6px ${word.color}30)`,
							fontFamily: "'Inter', sans-serif",
							whiteSpace: "nowrap"
						},
						children: word.text
					}, word.id)) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 right-3 text-xs text-muted-foreground px-2.5 py-1 rounded-full",
					style: {
						background: "rgba(0,0,0,0.4)",
						backdropFilter: "blur(8px)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-3 h-3 inline mr-1" }),
						words.length,
						" words"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col sm:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Ek word likho... (e.g. Vibe King, Legend)",
					value: input,
					onChange: (e) => setInput(e.target.value),
					maxLength: 20,
					className: "flex-1 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "submit",
					disabled: !input.trim() || submitting,
					whileHover: { scale: 1.04 },
					whileTap: { scale: .96 },
					className: "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0",
					style: { background: "linear-gradient(135deg, #a855f7, #ec4899)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5" }), "Cloud Mein Bhejo ☁️"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground mt-2",
				children: [
					"Max 20 characters • Already ",
					words.length,
					" words from everyone!"
				]
			})]
		})]
	});
}
var FIREWORK_COLORS = [
	"#ff0080",
	"#ff6600",
	"#ffdd00",
	"#00ff88",
	"#00ccff",
	"#cc00ff",
	"#ff3366",
	"#ffaa00",
	"#ffffff",
	"#ff88cc",
	"#88ffcc",
	"#aaccff"
];
function FireworksLauncher() {
	const canvasRef = (0, import_react.useRef)(null);
	const particlesRef = (0, import_react.useRef)([]);
	const animFrameRef = (0, import_react.useRef)(0);
	const [clickCount, setClickCount] = (0, import_react.useState)(0);
	const [hint, setHint] = (0, import_react.useState)(true);
	const explode = (0, import_react.useCallback)((x, y) => {
		const count = 60 + Math.floor(Math.random() * 40);
		const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
		const color2 = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
		for (let i = 0; i < count; i++) {
			const angle = i / count * Math.PI * 2;
			const speed = 1.5 + Math.random() * 4;
			const useColor = Math.random() > .5 ? color : color2;
			particlesRef.current.push({
				x,
				y,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				life: 1,
				maxLife: .6 + Math.random() * .5,
				color: useColor,
				size: 1.5 + Math.random() * 2.5,
				trail: []
			});
		}
		for (let i = 0; i < 8; i++) {
			const angle = i / 8 * Math.PI * 2;
			particlesRef.current.push({
				x,
				y,
				vx: Math.cos(angle) * (6 + Math.random() * 3),
				vy: Math.sin(angle) * (6 + Math.random() * 3),
				life: 1,
				maxLife: .4 + Math.random() * .3,
				color: "#ffffff",
				size: 2.5 + Math.random() * 2,
				trail: []
			});
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const resize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};
		resize();
		window.addEventListener("resize", resize);
		const loop = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			particlesRef.current = particlesRef.current.filter((p) => p.life > 0);
			for (const p of particlesRef.current) {
				p.trail.push({
					x: p.x,
					y: p.y
				});
				if (p.trail.length > 5) p.trail.shift();
				p.x += p.vx;
				p.y += p.vy;
				p.vy += .06;
				p.vx *= .98;
				p.life -= .018 / p.maxLife;
				for (let t = 0; t < p.trail.length - 1; t++) {
					const alpha = t / p.trail.length * p.life * .5;
					ctx.beginPath();
					ctx.moveTo(p.trail[t].x, p.trail[t].y);
					ctx.lineTo(p.trail[t + 1].x, p.trail[t + 1].y);
					ctx.strokeStyle = p.color;
					ctx.globalAlpha = alpha;
					ctx.lineWidth = p.size * .6;
					ctx.stroke();
				}
				ctx.globalAlpha = Math.max(0, p.life);
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = p.color;
				ctx.shadowBlur = 8;
				ctx.shadowColor = p.color;
				ctx.fill();
				ctx.shadowBlur = 0;
				ctx.globalAlpha = 1;
			}
			animFrameRef.current = requestAnimationFrame(loop);
		};
		loop();
		return () => {
			cancelAnimationFrame(animFrameRef.current);
			window.removeEventListener("resize", resize);
		};
	}, []);
	const handleClick = (0, import_react.useCallback)((e) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		explode(x, y);
		setClickCount((c) => c + 1);
		setHint(false);
	}, [explode]);
	const handleTouch = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		Array.from(e.touches).forEach((touch) => {
			explode(touch.clientX - rect.left, touch.clientY - rect.top);
		});
		setClickCount((c) => c + 1);
		setHint(false);
	}, [explode]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const timer = setTimeout(() => {
			const w = canvas.offsetWidth;
			const h = canvas.offsetHeight;
			[
				[w * .3, h * .4],
				[w * .7, h * .35],
				[w * .5, h * .5]
			].forEach(([x, y]) => {
				setTimeout(() => explode(x, y), Math.random() * 800);
			});
		}, 600);
		return () => clearTimeout(timer);
	}, [explode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveSection, {
		id: "fireworks-launcher",
		title: "🎆 Fireworks Launcher",
		subtitle: "Kahan bhi click karo — birthday fireworks blast!",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full rounded-2xl overflow-hidden",
			style: { background: "#000" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "w-full block",
					style: {
						minHeight: 340,
						cursor: "crosshair",
						touchAction: "none"
					},
					onClick: handleClick,
					onTouchStart: handleTouch
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 flex items-center justify-center pointer-events-none",
					animate: { opacity: [
						.6,
						1,
						.6
					] },
					transition: {
						repeat: Infinity,
						duration: 2
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center px-6 py-4 rounded-2xl",
						style: { background: "rgba(0,0,0,0.5)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl mb-2",
								children: "🎆"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/80 text-sm font-medium",
								children: "Click anywhere to launch fireworks!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/40 text-xs mt-1",
								children: "Tap karo — celebration shuru ho!"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5",
					style: {
						background: "rgba(0,0,0,0.6)",
						backdropFilter: "blur(8px)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3 text-yellow-400" }),
						clickCount,
						" blasts!"
					]
				}),
				clickCount >= 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white",
					style: { background: "linear-gradient(90deg, #a855f7, #ec4899)" },
					children: "🎉 Happy Birthday Yogesh!"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-center text-muted-foreground text-sm mt-3",
			children: [
				"🖱 Click multiple times for a bigger show! (",
				clickCount,
				" fireworks launched)"
			]
		})]
	});
}
var QUESTIONS = [
	{
		q: "Friday night plan kya hai?",
		options: [
			{
				text: "🎮 Gaming session with friends",
				value: "gamer"
			},
			{
				text: "🎵 Concert ya live music",
				value: "vibe"
			},
			{
				text: "📚 Ek acchi book aur chai",
				value: "chill"
			},
			{
				text: "🚀 Spontaneous road trip!",
				value: "adventurer"
			}
		]
	},
	{
		q: "Yogesh ka superpower kya hona chahiye?",
		options: [
			{
				text: "⚡ Instantly everything fix karna",
				value: "gamer"
			},
			{
				text: "🎤 Jo bhi bole, sab maan le",
				value: "vibe"
			},
			{
				text: "🧠 Sab kuch yaad reh jaaye",
				value: "chill"
			},
			{
				text: "🌍 Teleportation — kahin bhi jaao!",
				value: "adventurer"
			}
		]
	},
	{
		q: "Birthday cake kaisi honi chahiye?",
		options: [
			{
				text: "🎮 Controller shape ka cake!",
				value: "gamer"
			},
			{
				text: "🎵 Ek badi concert stage wali",
				value: "vibe"
			},
			{
				text: "☁️ Simple magar bilkul perfect",
				value: "chill"
			},
			{
				text: "🗺️ Duniya ka map — explore karo!",
				value: "adventurer"
			}
		]
	},
	{
		q: "Life ka sabse important cheez kya hai?",
		options: [
			{
				text: "🏆 Achievement aur success",
				value: "gamer"
			},
			{
				text: "❤️ Connection aur relationships",
				value: "vibe"
			},
			{
				text: "☮️ Peace aur balance",
				value: "chill"
			},
			{
				text: "🌟 New experiences aur growth",
				value: "adventurer"
			}
		]
	},
	{
		q: "Tera theme song kaisa hoga?",
		options: [
			{
				text: "🎮 Epic battle music!",
				value: "gamer"
			},
			{
				text: "🎵 Groovy dance anthem",
				value: "vibe"
			},
			{
				text: "🎸 Acoustic chill indie track",
				value: "chill"
			},
			{
				text: "🚀 High-energy rock anthem",
				value: "adventurer"
			}
		]
	}
];
var PERSONALITIES = {
	gamer: {
		id: "gamer",
		title: "The Strategic King 👑",
		emoji: "🎮",
		description: "Tu life ko ek game ki tarah khelata hai — strategy, patience, aur focus teri powers hain. Mushkil se mushkil level bhi tu crack kar leta hai!",
		traits: [
			"Strategic",
			"Patient",
			"Focused",
			"Determined"
		],
		color: "#3b82f6",
		gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)"
	},
	vibe: {
		id: "vibe",
		title: "The Vibe Master 🎵",
		emoji: "🎤",
		description: "Jahan tu hota hai, wahan energy alag hi hoti hai! Tere logon ko connect karne ka gift kamaal ka hai. Tu room mein aata hai aur sab muskura dete hain!",
		traits: [
			"Charismatic",
			"Fun",
			"Social",
			"Energetic"
		],
		color: "#ec4899",
		gradient: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)"
	},
	chill: {
		id: "chill",
		title: "The Zen Master 🧘",
		emoji: "☁️",
		description: "Tu woh anchor hai jo sab ko stable rakhta hai. Teri wisdom aur clarity sabse alag hai. Log tere paas advice ke liye aate hain — aur tu kabhi disappoint nahi karta!",
		traits: [
			"Wise",
			"Calm",
			"Reliable",
			"Thoughtful"
		],
		color: "#22c55e",
		gradient: "linear-gradient(135deg, #15803d, #22c55e, #4ade80)"
	},
	adventurer: {
		id: "adventurer",
		title: "The Wild Adventurer 🌍",
		emoji: "🚀",
		description: "Teri zindagi ek non-stop adventure hai! Tu comfort zone ko challenge karta rehta hai. Tera courage aur curiosity duniya ko explore karne ke liye born hai!",
		traits: [
			"Bold",
			"Curious",
			"Fearless",
			"Free-spirited"
		],
		color: "#f59e0b",
		gradient: "linear-gradient(135deg, #b45309, #f59e0b, #fcd34d)"
	}
};
function PersonalityQuiz() {
	const [currentQ, setCurrentQ] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [result, setResult] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const handleAnswer = (value) => {
		setSelected(value);
		setTimeout(() => {
			const newAnswers = [...answers, value];
			setAnswers(newAnswers);
			setSelected(null);
			if (currentQ + 1 >= QUESTIONS.length) {
				const counts = {};
				newAnswers.forEach((a) => {
					counts[a] = (counts[a] || 0) + 1;
				});
				const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
				setResult(PERSONALITIES[winner]);
				confetti_module_default({
					particleCount: 150,
					spread: 100,
					origin: { y: .5 }
				});
			} else setCurrentQ((q) => q + 1);
		}, 400);
	};
	const reset = () => {
		setCurrentQ(0);
		setAnswers([]);
		setResult(null);
		setSelected(null);
	};
	const shareResult = () => {
		if (!result) return;
		const text = `Main hoon "${result.title}" wala Yogesh! 🎂\n${result.description}\n\n#YogeshBirthday #BirthdayQuiz`;
		if (navigator.share) navigator.share({ text });
		else {
			navigator.clipboard.writeText(text);
			toast.success("Result clipboard mein copy ho gaya!");
		}
	};
	const progress = result ? 100 : currentQ / QUESTIONS.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveSection, {
		id: "personality-quiz",
		title: "🌈 Which Yogesh Are You?",
		subtitle: "5 questions mein pata karo — tum konse Yogesh ho!",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-xs text-muted-foreground mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Question ",
						Math.min(currentQ + 1, QUESTIONS.length),
						" of ",
						QUESTIONS.length
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progress), "% complete"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 bg-secondary/60 rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full rounded-full",
						style: { background: "linear-gradient(90deg, #a855f7, #ec4899)" },
						animate: { width: `${progress}%` },
						transition: { duration: .4 }
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: !result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 40
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -40
					},
					transition: { duration: .3 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveCard, {
						className: "p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold mb-6 text-center leading-snug",
							children: QUESTIONS[currentQ].q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: QUESTIONS[currentQ].options.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								onClick: () => handleAnswer(option.value),
								disabled: selected !== null,
								whileHover: {
									scale: 1.02,
									x: 4
								},
								whileTap: { scale: .98 },
								className: "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border",
								style: {
									background: selected === option.value ? "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))" : "rgba(255,255,255,0.04)",
									borderColor: selected === option.value ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.08)",
									opacity: selected && selected !== option.value ? .5 : 1
								},
								children: option.text
							}, i))
						})]
					})
				}, currentQ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						type: "spring",
						stiffness: 200
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl overflow-hidden shadow-2xl",
						style: { background: result.gradient },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 text-center text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: {
										scale: [
											1,
											1.15,
											1
										],
										rotate: [
											0,
											-5,
											5,
											0
										]
									},
									transition: {
										repeat: Infinity,
										duration: 3
									},
									className: "text-7xl mb-4",
									children: result.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 text-sm font-medium mb-2",
									children: "Tu hai..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl sm:text-3xl font-bold mb-4",
									children: result.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/90 text-sm leading-relaxed",
									children: result.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-black/20 px-6 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/70 text-xs font-semibold uppercase tracking-wider mb-3",
								children: "Tere qualities:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: result.traits.map((trait) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-3 py-1 rounded-full text-xs font-semibold text-white",
									style: { background: "rgba(255,255,255,0.2)" },
									children: ["✨ ", trait]
								}, trait))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: reset,
							variant: "secondary",
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4 mr-2 inline" }), "Dobara try karo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveButton, {
							onClick: shareResult,
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4 mr-2 inline" }), "Share karo!"]
						})]
					})]
				}, "result")
			})]
		})
	});
}
function BirthdayAppContent() {
	const [showReveal, setShowReveal] = (0, import_react.useState)(false);
	const { isMobile } = useResponsive();
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
	}, []);
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBirthdayCake, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoBooth, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualGiftBox, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoMessages, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestBook, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FriendWall, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIWishGenerator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryCapsule, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gifts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorCounter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {}),
		hydrated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastWall, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordCloud, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayLetter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FortuneCookie, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalloonPop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScratchCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarMap, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FireworksLauncher, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalityQuiz, {}),
			!isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWidgets, {})
		] }),
		showReveal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
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
var SplitComponent = BirthdayApp;
//#endregion
export { SplitComponent as component };
