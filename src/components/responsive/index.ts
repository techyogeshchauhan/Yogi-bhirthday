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
export { InteractiveBirthdayCake } from "./InteractiveBirthdayCake";

// Interactive Components
export { GuestBook } from "./GuestBook";
export { FriendWall } from "./FriendWall";
export { AIWishGenerator } from "./AIWishGenerator";
export { MemoryCapsule } from "./MemoryCapsule";
export { Poll } from "./Poll";
export { Quiz } from "./Quiz";
export { PhotoBooth } from "./PhotoBooth";
export { VirtualGiftBox } from "./VirtualGiftBox";
export { VideoMessages } from "./VideoMessages";

// Utility Components
export { Gifts } from "./Gifts";
export { SocialLinks } from "./SocialLinks";
export { FloatingWidgets } from "./FloatingWidgets";
export { VisitorCounter } from "./VisitorCounter";
export { MusicPlayer } from "./MusicPlayer";

// New Interactive Modules
export { BalloonPop } from "./BalloonPop";
export { ScratchCard } from "./ScratchCard";
export { StarMap } from "./StarMap";
export { FortuneCookie } from "./FortuneCookie";
export { ToastWall } from "./ToastWall";
export { BirthdayLetter } from "./BirthdayLetter";
export { WordCloud } from "./WordCloud";
export { FireworksLauncher } from "./FireworksLauncher";
export { PersonalityQuiz } from "./PersonalityQuiz";

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