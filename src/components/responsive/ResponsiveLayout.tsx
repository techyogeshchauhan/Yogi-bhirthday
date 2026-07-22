import { useState, createContext, useContext, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, Home, Gift, MessageCircle, Users, Image, Music, Brain, Clock, Award, Sparkles, Send, BarChart3, Sun, Moon, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

export function useResponsive() {
  const context = useContext(ResponsiveContext);
  if (!context) throw new Error("useResponsive must be used within ResponsiveLayout");
  return context;
}

interface ResponsiveLayoutProps {
  children: ReactNode;
}

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "stats", label: "Life Stats", icon: BarChart3 },
  { id: "timeline", label: "Journey", icon: Clock },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "gallery", label: "Memories", icon: Image },
  { id: "cake", label: "The Cake", icon: Gift },
  { id: "wishes", label: "Wishes", icon: MessageCircle },
  { id: "wall", label: "Friend Wall", icon: Users },
  { id: "ai-wish", label: "AI Wishes", icon: Brain },
  { id: "capsule", label: "Capsule", icon: Clock },
  { id: "quiz", label: "Quiz", icon: Sparkles },
  { id: "gifts", label: "Gifts", icon: Gift },
];

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(false);
    }
    // Check saved preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Responsive breakpoints - avoid hydration mismatch
  const [width, setWidth] = useState(1024); // Default to desktop for SSR
  const [hydrated, setHydrated] = useState(false);
  
  useEffect(() => {
    // Set actual width after hydration
    setWidth(window.innerWidth);
    setHydrated(true);
    
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = hydrated && width < 768;
  const isTablet = hydrated && width >= 768 && width < 1024;
  const isDesktop = !hydrated || width >= 1024; // Default to desktop during SSR

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop, sidebarOpen, setSidebarOpen, darkMode, toggleDarkMode }}>
      <div className="min-h-screen aurora-bg">
        {/* Mobile Navigation Header - Only show after hydration */}
        {hydrated && isMobile && (
          <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-xl hover:bg-secondary/50 transition"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <span className="font-bold text-gradient text-lg">Yogesh's Birthday</span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-secondary/50 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </header>
        )}

        {/* Desktop Sidebar - Show by default for SSR */}
        {isDesktop && (
          <aside className="fixed left-0 top-0 bottom-0 w-64 z-40 glass border-r border-white/10 backdrop-blur-xl">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-white/10">
                <h2 className="font-black text-xl text-gradient">Navigation</h2>
                <p className="text-xs text-muted-foreground mt-1">Explore the celebration</p>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-secondary/50 transition group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-purple transition" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-white/10">
                <button
                  onClick={toggleDarkMode}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 hover:bg-secondary transition"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="text-sm font-medium">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>
            </div>
          </aside>
        )}

        {/* Mobile Slide-out Drawer */}
        <AnimatePresence>
          {isMobile && sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-0 top-0 bottom-0 w-72 z-50 glass border-r border-white/10 backdrop-blur-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div>
                      <h2 className="font-black text-lg text-gradient">Menu</h2>
                      <p className="text-xs text-muted-foreground">Jump to section</p>
                    </div>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 rounded-xl hover:bg-secondary/50 transition"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-secondary/50 transition group"
                        >
                          <Icon className="w-5 h-5 text-muted-foreground group-hover:text-purple transition" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Tablet Mini Sidebar - Only show after hydration */}
        {hydrated && isTablet && (
          <aside className="fixed left-0 top-0 bottom-0 w-20 z-40 glass border-r border-white/10 backdrop-blur-xl">
            <div className="flex flex-col h-full items-center py-6 gap-4">
              {navItems.slice(0, 8).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-3 rounded-xl hover:bg-secondary/50 transition group"
                    title={item.label}
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-purple transition" />
                  </button>
                );
              })}
              <div className="flex-1" />
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl hover:bg-secondary/50 transition"
                title={darkMode ? "Light Mode" : "Dark Mode"}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className={`
          ${hydrated && isMobile ? "pt-16" : ""}
          ${isDesktop ? "ml-64" : ""}
          ${hydrated && isTablet ? "ml-20" : ""}
          transition-all duration-300
        `}>
          {children}
        </main>

        {/* Mobile Floating Navigation - Only show after hydration */}
        {hydrated && isMobile && (
          <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-around py-2 px-4">
              <Link to="/" className="flex flex-col items-center gap-1 p-2">
                <Home className="w-5 h-5" />
                <span className="text-xs">Home</span>
              </Link>
              <Link to="/admin" className="flex flex-col items-center gap-1 p-2">
                <Award className="w-5 h-5" />
                <span className="text-xs">Admin</span>
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById("wishes");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col items-center gap-1 p-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs">Wishes</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("gifts");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col items-center gap-1 p-2"
              >
                <Gift className="w-5 h-5" />
                <span className="text-xs">Gift</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </ResponsiveContext.Provider>
  );
}