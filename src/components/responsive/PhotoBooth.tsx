import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Upload, X, Camera, Play, Pause, Volume2, VolumeX, Download, Edit, Sparkles, Heart, Share2, RotateCw } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { useWishes, Wish } from "./useDynamicData";
import confetti from "canvas-confetti";

interface VideoMessage {
  id: string;
  file: File;
  preview: string;
  uploading: boolean;
  thumbnail?: string;
}

export function PhotoBooth() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const filters = [
    { value: "none", label: "None" },
    { value: "retro", label: "Retro" },
    { value: "vintage", label: "Vintage" },
    { value: "polaroid", label: "Polaroid" },
    { value: "blink", label: "Blink" },
    { value: "grunge", label: "Grunge" },
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setIsCameraOpen(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
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
    
    // Apply filter effects
    if (selectedFilter === "retro") {
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (imageData) {
        for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          imageData.data[i] = r * 0.3;
          imageData.data[i + 1] = g * 0.6;
          imageData.data[i + 2] = b * 0.1;
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
          imageData.data[i + 1] = Math.min(255, g * 0.9);
          imageData.data[i + 2] = Math.min(255, b * 0.8);
        }
        ctx?.putImageData(imageData, 0, 0);
      }
    }
    
    const dataUrl = canvas.toDataURL("image/png");
    setCapturedPhotos((prev) => [...prev, dataUrl]);
    confetti({ particleCount: 30, spread: 30, origin: { y: 0.9 } });
  };

  const retakePhoto = (index: number) => {
    setCapturedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const savePhoto = async (photo: string, index: number) => {
    const link = document.createElement("a");
    link.download = `yob-photo-${index + 1}-${Date.now()}.png`;
    link.href = photo;
    link.click();
    toast.success("Photo saved!");
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <ResponsiveSection
      id="photobooth"
      title="Photo Booth"
      subtitle="Take photos with fun filters and stickers!"
    >
      <ResponsiveCard className="p-4 sm:p-6">
        {capturedPhotos.length === 0 ? (
          <div className="space-y-6">
            {!isCameraOpen ? (
              <div className="text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 grid place-items-center mx-auto mb-4">
                  <Camera className="w-12 h-12 text-purple" />
                </div>
                <h3 className="text-xl font-bold">Capture Your Moment</h3>
                <p className="text-muted-foreground">Choose a filter and start the camera to take photos</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setSelectedFilter(filter.value)}
                      className={`px-3 py-2 rounded-full text-sm transition-all ${
                        selectedFilter === filter.value
                          ? "bg-primary text-primary-foreground ring-2 ring-primary"
                          : "bg-secondary/70 hover:bg-secondary"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                
                <ResponsiveButton onClick={startCamera} fullWidth>
                  <Camera className="w-4 h-4 mr-2 inline" />
                  Start Camera
                </ResponsiveButton>
              </div>
            ) : (
              <div className="space-y-4">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full rounded-xl aspect-video bg-black"
                />
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <ResponsiveButton onClick={capturePhoto} className="flex-1">
                    <Camera className="w-4 h-4 mr-2 inline" />
                    Capture
                  </ResponsiveButton>
                  <ResponsiveButton variant="secondary" onClick={stopCamera}>
                    Cancel
                  </ResponsiveButton>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {capturedPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative group"
                >
                  <img
                    src={photo}
                    alt={`Captured photo ${index + 1}`}
                    className="w-full rounded-xl aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => savePhoto(photo, index)}
                      className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => retakePhoto(index)}
                      className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2">
              <ResponsiveButton
                onClick={() => setCapturedPhotos([])}
                variant="secondary"
                fullWidth
              >
                New Series
              </ResponsiveButton>
              {capturedPhotos.length >= 1 && (
                <ResponsiveButton
                  onClick={() => {
                    const combinedDataUrl = capturedPhotos[0];
                    const link = document.createElement("a");
                    link.download = `yob-stitched-${Date.now()}.png`;
                    link.href = combinedDataUrl;
                    link.click();
                    toast.success("Stitched photo saved!");
                  }}
                >
                  <Edit className="w-4 h-4 mr-2 inline" />
                  Stitch Photo
                </ResponsiveButton>
              )}
            </div>
          </div>
        )}
      </ResponsiveCard>
    </ResponsiveSection>
  );
}