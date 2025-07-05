'use client';

import { useState, useCallback, useEffect, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EmblaOptionsType } from 'embla-carousel';

interface ScrollContainerProps {
    title?: ReactNode;
    children: ReactNode;
    options?: EmblaOptionsType;
    className?: string;
}

export default function ScrollContainer({ 
    title, 
    children, 
    options = {
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    },
    className = ''
}: ScrollContainerProps) {
    // Initialize Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Update button states based on scroll position
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className={`flex flex-col gap-y-4 ${className}`}>
            {title && (
                <div className="flex justify-between items-center">
                    <div>{title}</div>
                    <div className="flex gap-2">
                        <button 
                            onClick={scrollPrev} 
                            disabled={!prevBtnEnabled}
                            className={`cursor-pointer ${!prevBtnEnabled ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            aria-label="Scroll to previous items"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={scrollNext} 
                            disabled={!nextBtnEnabled}
                            className={`cursor-pointer ${!nextBtnEnabled ? 'text-gray-300 border-gray-200' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            aria-label="Scroll to next items"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}
            
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {children}
                </div>
            </div>
        </div>
    );
}
