import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast, Toaster } from "sonner";
import { 
  Lock, LogOut, Pin, Eye, EyeOff, Trash2, Users, Globe,
  Search, Filter, ChevronLeft, ChevronRight, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";
import { supabase } from "@/integrations/client";
import { useWindowSize } from "./useDynamicData";

interface Wish {
  id: string;
  name: string;
  country: string | null;
  message: string;
  emoji: string | null;
  pinned: boolean;
  approved: boolean;
  created_at: string;
}

interface Stats {
  total: number;
  approved: number;
  pinned: number;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const { width, hydrated } = useWindowSize();
  const isMobile = hydrated && width < 768;
  
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, approved: 0, pinned: 0 });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 5 : 10;

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) {
      setWishes(data as Wish[]);
      setStats({
        total: data.length,
        approved: data.filter(w => w.approved).length,
        pinned: data.filter(w => w.pinned).length,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (ok) void load();
  }, [ok]);

  // Filter wishes
  const filteredWishes = wishes.filter(wish => {
    const matchesSearch = 
      wish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wish.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "approved") return matchesSearch && wish.approved;
    if (filter === "pending") return matchesSearch && !wish.approved;
    return matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredWishes.length / itemsPerPage);
  const paginatedWishes = filteredWishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const del = async (id: string) => {
    await supabase.from("wishes").delete().eq("id", id);
    setWishes((w) => w.filter((x) => x.id !== id));
    toast.success("Wish deleted");
    void load();
  };
  
  const pin = async (id: string, p: boolean) => {
    await supabase.from("wishes").update({ pinned: !p }).eq("id", id);
    toast.success(p ? "Unpinned" : "Pinned");
    void load();
  };
  
  const approve = async (id: string, a: boolean) => {
    await supabase.from("wishes").update({ approved: !a }).eq("id", id);
    toast.success(a ? "Hidden" : "Approved");
    void load();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === BIRTHDAY_CONFIG.adminPassword) {
      setOk(true);
      toast.success("Welcome back! 👋");
    } else {
      toast.error("Wrong password! 🔒");
    }
  };

  const handleLogout = () => {
    setOk(false);
    setPw("");
    navigate({ to: "/" });
    toast.success("Logged out");
  };

  // Login Form
  if (!ok) {
    return (
      <div className="aurora-bg min-h-screen flex items-center justify-center p-4">
        <Toaster position="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <form
            onSubmit={handleLogin}
            className="glass rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-purple to-pink mx-auto grid place-items-center">
                <Lock className="w-7 sm:w-8 h-7 sm:h-8" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gradient">Admin Panel</h1>
              <p className="text-sm text-muted-foreground">
                Enter password to manage birthday wishes
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <input
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-xl bg-secondary/50 px-4 py-3 outline-none focus:ring-2 ring-primary transition"
                  autoFocus
                />
              </div>
              
              <button 
                type="submit"
                className="btn-luxury rounded-xl px-6 py-3 w-full font-semibold"
              >
                Unlock Dashboard
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="aurora-bg min-h-screen">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="glass border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-gradient">Admin Dashboard</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
              Managing birthday wishes for {BIRTHDAY_CONFIG.name}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="glass rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-secondary transition text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-purple/20 grid place-items-center">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-purple" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gradient">{stats.total}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Wishes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-green-500/20 grid place-items-center">
                <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gradient">{stats.approved}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Approved</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gold/20 grid place-items-center">
                <Pin className="w-5 sm:w-6 h-5 sm:h-6 text-gold" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gradient">{stats.pinned}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pinned</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-lg sm:text-xl font-bold">All Wishes</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 rounded-xl bg-secondary/50 text-sm outline-none focus:ring-2 ring-primary w-full sm:w-48"
                />
              </div>
              
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value as any);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 rounded-xl bg-secondary/50 text-sm outline-none focus:ring-2 ring-primary"
              >
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {loading ? (
            // Loading skeletons
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="glass rounded-2xl p-4 sm:p-5 animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary" />
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-secondary rounded mb-2" />
                      <div className="h-3 w-48 bg-secondary/50 rounded mb-3" />
                      <div className="h-3 bg-secondary/50 rounded w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredWishes.length === 0 ? (
            <div className="glass rounded-2xl p-8 sm:p-12 text-center">
              <p className="text-muted-foreground">No wishes found 🎂</p>
            </div>
          ) : (
            <>
              {/* Wishes */}
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {paginatedWishes.map((w, i) => (
                    <motion.div
                      key={w.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: i * 0.05 }}
                      className={`glass rounded-2xl p-4 sm:p-5 ${!w.approved ? 'opacity-60' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Content */}
                        <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-2xl sm:text-3xl">{w.emoji || "💝"}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-gradient text-sm sm:text-base truncate">{w.name}</span>
                                {w.country && (
                                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Globe className="w-3 h-3" />
                                    {w.country}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {new Date(w.created_at).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                            {w.pinned && (
                              <span className="text-gold text-xl">📌</span>
                            )}
                            {!w.approved && (
                              <span className="px-2 py-1 rounded-lg bg-destructive/20 text-destructive text-xs font-semibold">
                                Hidden
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{w.message}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex sm:flex-col gap-2 shrink-0">
                          <button
                            onClick={() => pin(w.id, w.pinned)}
                            className={`rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition flex items-center gap-1.5 sm:gap-2 justify-center ${
                              w.pinned
                                ? 'bg-gold/20 text-gold hover:bg-gold/30'
                                : 'bg-secondary hover:bg-secondary/80'
                            }`}
                            title={w.pinned ? "Unpin" : "Pin"}
                          >
                            <Pin className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                            <span className="hidden sm:inline">{w.pinned ? 'Unpin' : 'Pin'}</span>
                          </button>
                          
                          <button
                            onClick={() => approve(w.id, w.approved)}
                            className={`rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition flex items-center gap-1.5 sm:gap-2 justify-center ${
                              w.approved
                                ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                                : 'bg-secondary hover:bg-secondary/80'
                            }`}
                            title={w.approved ? "Hide" : "Show"}
                          >
                            {w.approved ? <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> : <EyeOff className="w-3.5 sm:w-4 h-3.5 sm:h-4" />}
                            <span className="hidden sm:inline">{w.approved ? 'Hide' : 'Show'}</span>
                          </button>
                          
                          <button
                            onClick={() => {
                              if (confirm('Delete this wish?')) del(w.id);
                            }}
                            className="rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-destructive/20 text-destructive hover:bg-destructive/30 transition flex items-center gap-1.5 sm:gap-2 justify-center"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                            <span className="hidden sm:inline">Delete</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 rounded-lg text-sm font-medium transition ${
                            currentPage === pageNum
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/50 hover:bg-secondary"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}