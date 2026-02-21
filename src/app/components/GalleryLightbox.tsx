import { useEffect, useCallback, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from './GalleryItem';

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex, isOpen, onClose }: GalleryLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: false,
  });

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Jump to the clicked image when lightbox opens
  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(initialIndex, true);
    }
  }, [isOpen, initialIndex, emblaApi]);

  // Track current slide and scroll ability
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        emblaApi?.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        emblaApi?.scrollNext();
      }
    },
    [emblaApi],
  );

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>
            {/* Backdrop */}
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content asChild onKeyDown={handleKeyDown}>
              <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center outline-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* Accessible title (hidden) */}
                <DialogPrimitive.Title className="sr-only">
                  Image gallery — {images[currentIndex]?.caption}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Navigate through gallery images using arrow keys or buttons
                </DialogPrimitive.Description>

                {/* Top bar: counter + close */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-10">
                  <span className="text-sm text-white/60" aria-live="polite">
                    {currentIndex + 1} / {images.length}
                  </span>
                  <DialogPrimitive.Close asChild>
                    <button
                      className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                      aria-label="Close lightbox"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </DialogPrimitive.Close>
                </div>

                {/* Carousel */}
                <div className="w-full max-w-[90vw] lg:max-w-[80vw] overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-4"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Image ${index + 1} of ${images.length}: ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="max-h-[70vh] lg:max-h-[80vh] max-w-full object-contain rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-sm text-white/80 text-center mt-4 px-6 min-h-[1.5em]">
                  {images[currentIndex]?.caption}
                </p>

                {/* Navigation arrows */}
                {canScrollPrev && (
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                {canScrollNext && (
                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
