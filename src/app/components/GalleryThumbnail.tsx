import { Image } from 'lucide-react';
import type { GalleryImage } from './GalleryItem';

interface GalleryThumbnailProps {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}

export function GalleryThumbnail({ image, index, onClick }: GalleryThumbnailProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className="group inline-block rounded-lg overflow-hidden border border-[var(--border-light)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer text-left max-w-[240px]"
      aria-label={`View "${image.caption}" in gallery`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />

        {/* Hover hint overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
            bg-black/40
            opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
            transition-opacity duration-200 ease-out"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/50 rounded-full px-3 py-1.5 backdrop-blur-sm">
            <Image className="w-3 h-3" />
            View in gallery
          </span>
        </div>
      </div>

      <div className="px-3 py-2 bg-white">
        <p className="text-xs text-[var(--text-secondary)]">{image.caption}</p>
      </div>
    </button>
  );
}
