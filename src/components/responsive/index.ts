// Layout Components
export { ResponsiveLayout, useResponsive } from "./ResponsiveLayout";
export { AdminDashboard } from "./AdminDashboard";
export { 
  ResponsiveSection, 
  ResponsiveCard, 
  ResponsiveGrid, 
  ResponsiveButton, 
  ResponsiveInput, 
  ResponsiveTextarea, 
  ResponsiveSelect,
  Skeleton,
  LoadingSpinner,
  PageLoader 
} from "./ResponsiveSection";

// Countdown Components
export { CountdownTimer, SimpleCountdown, BirthdayReveal, CountdownBadge } from "./CountdownTimer";

// Hero Section
export { HeroSection, BackgroundEffects } from "./HeroSection";

// Feature Components
export { LifeStats } from "./LifeStats";
export { Timeline } from "./Timeline";
export { Achievements } from "./Achievements";
export { Gallery } from "./Gallery";
export { InteractiveCake } from "./InteractiveCake";

// Interactive Components
export { GuestBook } from "./GuestBook";
export { FriendWall } from "./FriendWall";
export { AIWishGenerator } from "./AIWishGenerator";
export { MemoryCapsule } from "./MemoryCapsule";
export { Poll } from "./Poll";
export { Quiz } from "./Quiz";

// Utility Components
export { Gifts } from "./Gifts";
export { SocialLinks } from "./SocialLinks";
export { FloatingWidgets } from "./FloatingWidgets";
export { VisitorCounter } from "./VisitorCounter";

// Hooks
export { 
  useWishes, 
  useFriendWall, 
  useVisitorStats, 
  usePoll, 
  useQuiz, 
  useWindowSize, 
  useTheme, 
  useMediaQuery, 
  useLazyLoad 
} from "./useDynamicData";

export type { Wish, FriendWallPost, Capsule, VisitorStats, PollOption } from "./useDynamicData";