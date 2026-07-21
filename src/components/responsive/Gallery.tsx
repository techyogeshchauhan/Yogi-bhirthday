import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveSection } from "./ResponsiveSection";
import { X } from "lucide-react";

// Dynamic gallery images - can be fetched from API in the future
const defaultImages = [
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
  "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=800",
  "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?w=800",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800",
  "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=800",
  "https://images.unsplash.com/photo-1502035618-7b6c66eda9d3?w=800",
  "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800",
];

interface GalleryProps {
  images?: string[];
}

export function Gallery({ images = defaultImages }: GalleryProps) {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => {
    setOpenImage(src);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setOpenImage(null);
    document.body.style.overflow = "";
  }, []);

  // Handle keyboard navigation
  const currentIndex = openImage ? images.indexOf(openImage) : -1;
  const showPrev = currentIndex > 0;
  const showNext = currentIndex < images.length - 1;

  const goToPrev = useCallback(() => {
    if (showPrev) setOpenImage(images[currentIndex - 1]);
  }, [showPrev, images, currentIndex]);

  const goToNext = useCallback(() => {
    if (showNext) setOpenImage(images[currentIndex + 1]);
  }, [showNext, images, currentIndex]);

  return (
    <ResponsiveSection
      id="gallery"
      title="Memories"
      subtitle="A visual timeline of moments."
    >
      {/* Masonry-style grid */}
      <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
        {images.map((src, index) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 6) * 0.05, duration: 0.4 }}
            onClick={() => openLightbox(src)}
            className="mb-3 sm:mb-4 block w-full overflow-hidden rounded-xl sm:rounded-2xl glass group cursor-pointer"
          >
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              loading="lazy"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10"
              aria-label="Close"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Previous button */}
            {showPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10"
                aria-label="Previous"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {showNext && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-secondary/80 hover:bg-secondary transition z-10"
                aria-label="Next"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.img
              layoutId={openImage}
              src={openImage}
              alt="Preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] rounded-xl sm:rounded-2xl glow-ring"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/80 text-xs sm:text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResponsiveSection>
  );
}