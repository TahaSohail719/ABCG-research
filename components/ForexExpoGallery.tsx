"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EXPO_IMAGES = [
    "/forex-expo/gallery-1.jpg",
    "/forex-expo/gallery-2.jpg",
    "/forex-expo/gallery-3.jpg",
    "/forex-expo/gallery-4.jpg",
    "/forex-expo/gallery-5.jpg",
];

export function ForexExpoGallery() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!scrollerRef.current) return;
        setStart(true);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full relative py-8">
            <div
                ref={scrollerRef}
                className="flex items-center gap-4 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {EXPO_IMAGES.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden snap-center flex-shrink-0 border border-border/50 shadow-md group"
                    >
                        <Image
                            src={src}
                            alt={`ABCG at Forex Expo 2025 - Image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
            {/* Navigation Arrows */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg text-foreground/80 hover:bg-background hover:text-foreground transition-all duration-300 disabled:opacity-0"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg text-foreground/80 hover:bg-background hover:text-foreground transition-all duration-300"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fade overflow indicators */}
            <div className="absolute top-8 bottom-14 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute top-8 bottom-14 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
    );
}
