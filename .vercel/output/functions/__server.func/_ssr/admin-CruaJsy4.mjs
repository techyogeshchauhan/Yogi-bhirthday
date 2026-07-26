import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CLuT3uFz.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { s as useWindowSize, t as BIRTHDAY_CONFIG } from "./useDynamicData-D6xzX5mp.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { F as LogOut, G as Globe, I as Lock, J as Eye, O as Pin, Y as EyeOff, at as ChevronLeft, b as Search, c as Users, f as Trash2, it as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CruaJsy4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const navigate = useNavigate();
	const { width, hydrated } = useWindowSize();
	const isMobile = hydrated && width < 768;
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
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {});
}
//#endregion
export { AdminPage as component };
