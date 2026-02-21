// @ts-expect-error — no type declarations for react-responsive-masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { GalleryItem } from './GalleryItem';
import { GalleryLightbox } from './GalleryLightbox';
import type { GalleryImage } from './GalleryItem';

export type { GalleryImage };

interface CaseStudyGalleryProps {
  heading?: string;
  images: GalleryImage[];
  variant?: 'default' | 'muted';
  lightboxIndex: number | null;
  onImageClick: (index: number) => void;
  onClose: () => void;
}

export function CaseStudyGallery({
  heading = 'Gallery',
  images,
  variant = 'default',
  lightboxIndex,
  onImageClick,
  onClose,
}: CaseStudyGalleryProps) {
  return (
    <>
      <Section variant={variant}>
        <AnimatedSection>
          <h2>{heading}</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 2, 768: 3 }}
            className="mt-10"
          >
            <Masonry gutter="16px">
              {images.map((image, index) => (
                <GalleryItem
                  key={index}
                  image={image}
                  index={index}
                  onClick={onImageClick}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </AnimatedSection>
      </Section>

      <GalleryLightbox
        images={images}
        initialIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={onClose}
      />
    </>
  );
}
