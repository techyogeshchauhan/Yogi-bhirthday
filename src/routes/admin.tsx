import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/client";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";
import { toast, Toaster } from "sonner";
import { Lock, LogOut, Pin, Eye, EyeOff, Trash2, Users, Calendar, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Birthday Countdown" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Wish = {
  id: string;
  name: string;
  country: string | null;
  message: string;
  emoji: string | null;
  pinned: boolean;
  approved: boolean;
  created_at: string;
};

function AdminPage() {
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [stats, setStats] = useState({ total: 0, approved: 0, pinned: 0 });

  const load = async () => {
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
  };

  useEffect(() => {
    if (ok) void load();
  }, [ok]);

  if (!ok) {
    return (
      <div className="aurora-bg min-h-screen grid place-items-center px-4">
        <Toaster position="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pw === BIRTHDAY_CONFIG.adminPassword) {
                setOk(true);
                toast.success("Welcome back! 👋");
              } else {
                toast.error("Wrong password! 🔒");
              }
            }}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-pink mx-auto grid place-items-center">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-black text-gradient">Admin Panel</h1>
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

  return (
    <div className="aurora-bg min-h-screen">
      <Toaster position="top-center" />
      
      {/* Header */}
      <div className="glass border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gradient">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Managing birthday wishes for {BIRTHDAY_CONFIG.name}
            </p>
          </div>
          <button
            onClick={() => {
              setOk(false);
              setPw("");
              toast.success("Logged out");
            }}
            className="glass rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-secondary transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple/20 grid place-items-center">
                <Users className="w-6 h-6 text-purple" />
              </div>
              <div>
                <p className="text-2xl font-black text-gradient">{stats.total}</p>
                <p className="text-sm text-muted-foreground">Total Wishes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 grid place-items-center">
                <Eye className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-black text-gradient">{stats.approved}</p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/20 grid place-items-center">
                <Pin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-2xl font-black text-gradient">{stats.pinned}</p>
                <p className="text-sm text-muted-foreground">Pinned</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wishes List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">All Wishes</h2>
            <p className="text-sm text-muted-foreground">
              {wishes.length} {wishes.length === 1 ? 'wish' : 'wishes'}
            </p>
          </div>

          {wishes.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center">
              <p className="text-muted-foreground">No wishes yet 🎂</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {wishes.map((w, i) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`glass rounded-2xl p-5 ${!w.approved ? 'opacity-60' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-3xl">{w.emoji || "💝"}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-gradient">{w.name}</span>
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
                      
                      <p className="text-sm leading-relaxed">{w.message}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col gap-2 shrink-0">
                      <button
                        onClick={() => pin(w.id, w.pinned)}
                        className={`rounded-xl px-4 py-2 text-sm font-medium transition flex items-center gap-2 justify-center ${
                          w.pinned
                            ? 'bg-gold/20 text-gold hover:bg-gold/30'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                        title={w.pinned ? "Unpin" : "Pin"}
                      >
                        <Pin className="w-4 h-4" />
                        <span className="hidden sm:inline">{w.pinned ? 'Unpin' : 'Pin'}</span>
                      </button>
                      
                      <button
                        onClick={() => approve(w.id, w.approved)}
                        className={`rounded-xl px-4 py-2 text-sm font-medium transition flex items-center gap-2 justify-center ${
                          w.approved
                            ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                        title={w.approved ? "Hide" : "Show"}
                      >
                        {w.approved ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        <span className="hidden sm:inline">{w.approved ? 'Hide' : 'Show'}</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          if (confirm('Delete this wish?')) del(w.id);
                        }}
                        className="rounded-xl px-4 py-2 text-sm font-medium bg-destructive/20 text-destructive hover:bg-destructive/30 transition flex items-center gap-2 justify-center"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}