import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Upload, X, Camera, Play, Pause, Volume2, VolumeX, Download, Edit, Sparkles, Heart, Share2, RotateCw, Video, Square } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { useWishes, Wish } from "./useDynamicData";
import confetti from "canvas-confetti";

interface VideoMessage {
  id: string;
  file: File;
  preview: string;
  uploading: boolean;
  thumbnail?: string;
  duration?: number;
  uploaded: boolean;
}

export function VideoMessages() {
  const [videoMessages, setVideoMessages] = useState<VideoMessage[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setRecordedChunks((prev) => [...prev, e.data]);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(blob);
        
        const newMessage: VideoMessage = {
          id: Date.now().toString(),
          file: new File([blob], `video-${Date.now()}.mp4`, { type: "video/mp4" }),
          preview: videoUrl,
          uploading: true,
          uploaded: false,
        };
        
        setVideoMessages((prev) => [...prev, newMessage]);
        uploadVideo(newMessage.id, newMessage.file);
        
        stopRecording();
      };
      
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      toast.success("Recording started! Click Stop when done.", {
        description: "You have 30 seconds to record"
      });
      
      setTimeout(() => {
        if (isRecording) {
          stopRecording();
        }
      }, 30000);
      
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

  const uploadVideo = async (id: string, file: File) => {
    setVideoMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, uploading: true } : msg
      )
    );
    
    // Simulate upload delay
    setTimeout(() => {
      setVideoMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, uploading: false, uploaded: true } : msg
        )
      );
      toast.success("Video uploaded! It will appear live for everyone. 🎥");
      confetti({ particleCount: 30, spread: 40, origin: { y: 0.9 } });
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    if (!file.type.startsWith("video/")) {
      toast.error("Please upload a video file.");
      return;
    }
    
    const videoUrl = URL.createObjectURL(file);
    
    const newMessage: VideoMessage = {
      id: Date.now().toString(),
      file,
      preview: videoUrl,
      uploading: false,
      uploaded: false,
    };
    
    setVideoMessages((prev) => [...prev, newMessage]);
  };

  const removeVideo = (id: string) => {
    setVideoMessages((prev) => prev.filter((msg) => msg.id !== id));
    const message = videoMessages.find((msg) => msg.id === id);
    if (message?.preview) {
      URL.revokeObjectURL(message.preview);
    }
    toast.error("Video removed.");
  };

  const openInFullscreen = (videoUrl: string) => {
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

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <ResponsiveSection
      id="video-wishes"
      title="Video Messages"
      subtitle="Capture and share video wishes for Yogesh!"
    >
      <ResponsiveCard className="p-4 sm:p-6">
        <AnimatePresence>
          {videoMessages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 py-8"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue/20 to-purple/20 grid place-items-center mx-auto mb-4">
                <Video className="w-12 h-12 text-blue" />
              </div>
              
              <h3 className="text-xl font-bold">Record Your Video Wish</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Record a 30-second video message to Yogesh with your best wishes!
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Record Now</h4>
                  {isRecording ? (
                    <ResponsiveButton
                      onClick={stopRecording}
                      variant="destructive"
                      fullWidth
                    >
                      <Square className="w-4 h-4 mr-2 inline" />
                      Stop Recording
                    </ResponsiveButton>
                  ) : (
                    <ResponsiveButton
                      onClick={startRecording}
                      fullWidth
                    >
                      <Camera className="w-4 h-4 mr-2 inline" />
                      Start Recording (30s)
                    </ResponsiveButton>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Upload Video</h4>
                  <input
                    ref={uploadInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <ResponsiveButton
                    variant="secondary"
                    fullWidth
                    onClick={() => uploadInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2 inline" />
                    Upload Video
                  </ResponsiveButton>
                </div>
              </div>
              
              {isRecording && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-red-500"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Recording in progress...</span>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {videoMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative group"
                  >
                    <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
                      <video
                        src={message.preview}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        onClick={() => openInFullscreen(message.preview)}
                      />
                      
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => openInFullscreen(message.preview)}
                          className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30"
                        >
                          <Play className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => removeVideo(message.id)}
                          className="p-2 rounded-full bg-red/20 backdrop-blur text-white hover:bg-red/30"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <div className="text-white text-xs bg-black/50 backdrop-blur px-2 py-1 rounded">
                          Video Wish #{videoMessages.indexOf(message) + 1}
                        </div>
                        <div className="flex items-center gap-1">
                          {message.uploading ? (
                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                          ) : message.uploaded ? (
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                          )}
                          <span className="text-white text-xs">
                            {message.uploading ? "Uploading..." : 
                              message.uploaded ? "Live!" : "Draft"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex gap-2 justify-center">
                <ResponsiveButton
                  onClick={() => setVideoMessages([])}
                  variant="secondary"
                >
                  Clear All
                </ResponsiveButton>
                <ResponsiveButton
                  onClick={() => {
                    const hasUnuploaded = videoMessages.some((m) => !m.uploaded);
                    if (hasUnuploaded) {
                      toast.warning("Some videos are not uploaded yet!", {
                        description: "Click each one to upload manually"
                      });
                    }
                  }}
                  variant="secondary"
                >
                  Upload All
                </ResponsiveButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <video ref={videoRef} className="hidden" />
      </ResponsiveCard>
    </ResponsiveSection>
  );
}

export default VideoMessages;