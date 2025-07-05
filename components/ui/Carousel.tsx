'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

interface CarouselProps {
  items: {
    id: number;
    image: string;
    link: string;
    alt?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  showPreviews?: boolean;
  previewSize?: number;
  options?: EmblaOptionsType;
}

export default function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
  showPreviews = true,
  previewSize = 15, // percentage of container width
  options = {}
}: CarouselProps) {
  // Initialize Embla Carousel with options for showing previews
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    duration: 50,
    ...options
  });
  
  // We don't need to track visible slides separately as we can use selectedIndex
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Callbacks for navigation
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Setup and cleanup
  useEffect(() => {
    if (!emblaApi) return;

    // Get scroll snaps and set initial index
    const onSelect = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(currentIndex);
      
      // No need to track visible slides separately
    };
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, items.length]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;
    
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, interval);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay, interval, emblaApi]);

  if (!items.length) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="embla">
        {/* Main carousel container */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div key={item.id} className="embla__slide">
                <Link href={item.link} className="block w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.alt || `Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                      priority={index === 0}
                    />
                    {/* Add overlay with opacity for non-selected slides */}
                    {showPreviews && index !== selectedIndex && (
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] transition-opacity duration-300 rounded-lg"></div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="embla__prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="embla__next absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {showDots && items.length > 1 && (
          <div className="embla__dots absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`embla__dot w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add Embla Carousel CSS */}
      <style jsx>{`
        .embla {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .embla__viewport {
          overflow: hidden;
          width: 100%;
          height: 100%;
          ${showPreviews ? `padding: 0 ${previewSize/2}%;` : ''}
        }
        .embla__container {
          display: flex;
          height: 100%;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .embla__slide {
          position: relative;
          min-width: ${showPreviews ? `${100 - previewSize}%` : '100%'};
          padding: ${showPreviews ? '0 5px' : '0'};
          height: 100%;
        }
      `}</style>
    </div>
  );
}
