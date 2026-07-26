import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX, X, ChevronDown, ChevronUp } from "lucide-react";

// YouTube Video ID from the provided URL
const YOUTUBE_VIDEO_ID = "6WFJCR4GKo4";
const START_TIME = 127; // seconds (t=127 from the URL)

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const [volume, setVolume] = useState(70);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player && containerRef.current) {
        playerRef.current = new window.YT.Player("yt-music-player-iframe", {
          height: "113",
          width: "200",
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            mute: 1,          // Start muted to bypass autoplay policy
            start: START_TIME,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            origin: window.location.origin,  // Fix postMessage origin mismatch
          },
          events: {
            onReady: (event: any) => {
              setPlayerReady(true);
              event.target.playVideo();
              // Unmute and set volume after a short delay (bypass autoplay policy)
              setTimeout(() => {
                event.target.unMute();
                event.target.setVolume(volume);
                setIsPlaying(true);
              }, 500);
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo(); // Manual loop fallback
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume);
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (playerRef.current) {
      playerRef.current.setVolume(val);
      if (val === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
        playerRef.current.unMute();
      }
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Hidden YouTube player — off-screen, proper size for YouTube API */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "200px",
          height: "113px",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
        aria-hidden="true"
      >
        <div id="yt-music-player-iframe" ref={containerRef} />
      </div>

      {/* Floating Music Player UI */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 left-4 z-50"
        style={{ maxWidth: isMinimized ? "56px" : "260px" }}
      >
        <AnimatePresence mode="wait">
          {isMinimized ? (
            /* Minimized pill */
            <motion.button
              key="minimized"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsMinimized(false)}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Open Music Player"
              aria-label="Open Music Player"
            >
              <Music className="w-6 h-6 text-white" />
              {isPlaying && (
                <motion.span
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              )}
            </motion.button>
          ) : (
            /* Full player card */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.3)",
                width: "260px",
              }}
            >
              {/* Header */}
              <div
                className="px-4 pt-3 pb-2 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(236,72,153,0.4))",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Music className="w-4 h-4 text-white" />
                    {isPlaying && (
                      <motion.span
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-white/90 tracking-wide">
                    🎵 Birthday Music
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 rounded-lg hover:bg-white/10 transition text-white/70 hover:text-white"
                    title="Minimize"
                    aria-label="Minimize player"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setIsVisible(false);
                      if (playerRef.current) playerRef.current.pauseVideo();
                    }}
                    className="p-1 rounded-lg hover:bg-white/10 transition text-white/70 hover:text-white"
                    title="Close"
                    aria-label="Close player"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Song Info */}
              <div className="px-4 py-3">
                <div className="flex items-center gap-3">
                  {/* Animated disc */}
                  <motion.div
                    className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={
                      isPlaying
                        ? { repeat: Infinity, duration: 4, ease: "linear" }
                        : { duration: 0 }
                    }
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: "rgba(0,0,0,0.5)" }}
                    />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="overflow-hidden">
                      <motion.p
                        className="text-sm font-semibold text-white truncate"
                        animate={isPlaying ? { x: [0, -5, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        Happy Birthday 🎂
                      </motion.p>
                    </div>
                    <p className="text-xs text-white/60 truncate">
                      Yogesh का Special Song 🎉
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {isPlaying
                        ? [1, 2, 3, 4].map((bar) => (
                            <motion.div
                              key={bar}
                              className="w-1 rounded-full"
                              style={{ background: "#a855f7" }}
                              animate={{
                                height: [4, 12, 4, 8, 4],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.8,
                                delay: bar * 0.15,
                                ease: "easeInOut",
                              }}
                            />
                          ))
                        : [1, 2, 3, 4].map((bar) => (
                            <div
                              key={bar}
                              className="w-1 h-1 rounded-full"
                              style={{ background: "rgba(168,85,247,0.4)" }}
                            />
                          ))}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4">
                  {/* Volume */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition text-white/60 hover:text-white"
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Play/Pause */}
                  <motion.button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    title={isPlaying ? "Pause" : "Play"}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                    disabled={!playerReady}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    )}
                  </motion.button>

                  {/* Volume slider */}
                  <div className="flex-1 ml-2 mr-1">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-1 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #a855f7 ${isMuted ? 0 : volume}%, rgba(255,255,255,0.2) ${isMuted ? 0 : volume}%)`,
                        accentColor: "#a855f7",
                      }}
                      aria-label="Volume"
                      title="Volume"
                    />
                  </div>
                </div>

                {!playerReady && (
                  <p className="text-center text-xs text-white/40 mt-2">
                    Loading...
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
