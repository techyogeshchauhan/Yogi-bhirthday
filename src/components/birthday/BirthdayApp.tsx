import { useState, useEffect } from "react";
import { Toaster } from "sonner";

// Responsive Layout and Core Components
import { 
  ResponsiveLayout, 
  useResponsive,
  BackgroundEffects,
  HeroSection,
  LifeStats,
  Timeline,
  Achievements,
  Gallery,
  InteractiveCake,
  GuestBook,
  FriendWall,
  AIWishGenerator,
  MemoryCapsule,
  Poll,
  Quiz,
  Gifts,
  SocialLinks,
  FloatingWidgets,
  VisitorCounter,
  BirthdayReveal
} from "../responsive";

// Re-export BirthdayReveal from CountdownTimer

function BirthdayAppContent() {
  const [showReveal, setShowReveal] = useState(false);
  const { isMobile } = useResponsive();

  // Check if birthday has passed
  useEffect(() => {
    const checkBirthday = () => {
      const now = new Date();
      const birthday = new Date("2026-07-31T00:00:00");
      if (now >= birthday) {
        setShowReveal(true);
      }
    };
    checkBirthday();
  }, []);

  const handleReveal = () => {
    setShowReveal(true);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Hero Section */}
      <HeroSection onReveal={handleReveal} />
      
      {/* Life Stats */}
      <LifeStats />
      
      {/* Timeline */}
      <Timeline />
      
      {/* Achievements */}
      <Achievements />
      
      {/* Gallery */}
      <Gallery />
      
      {/* Interactive Cake */}
      <InteractiveCake />
      
      {/* Guest Book - Wishes */}
      <GuestBook />
      
      {/* Friend Wall */}
      <FriendWall />
      
      {/* AI Wish Generator */}
      <AIWishGenerator />
      
      {/* Memory Capsule */}
      <MemoryCapsule />
      
      {/* Poll */}
      <Poll />
      
      {/* Quiz */}
      <Quiz />
      
      {/* Gifts */}
      <Gifts />
      
      {/* Visitor Counter */}
      <VisitorCounter />
      
      {/* Social Links */}
      <SocialLinks />
      
      {/* Floating Widgets (Desktop only) */}
      {!isMobile && <FloatingWidgets />}
      
      {/* Birthday Reveal Modal */}
      {showReveal && (
        <Suspense fallback={null}>
          <BirthdayReveal 
            name="Yogesh" 
            onClose={() => setShowReveal(false)} 
          />
        </Suspense>
      )}
    </>
  );
}

export default function BirthdayApp() {
  return (
    <ResponsiveLayout>
      <BirthdayAppContent />
    </ResponsiveLayout>
  );
}