export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}

export function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      className="group relative overflow-hidden rounded-lg cursor-pointer w-full text-left"
      onClick={() => onClick(index)}
      aria-label={`View "${image.caption}" in lightbox`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />

      {/* Caption overlay */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 pt-12
          bg-gradient-to-t from-black/65 to-transparent
          opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
          transition-opacity duration-200 ease-out"
      >
        <p className="text-sm text-white font-medium">{image.caption}</p>
      </div>
    </button>
  );
}
