"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number; // 0-1, where 0.5 is half speed
    priority?: boolean;
}

/**
 * ParallaxImage - Image with scroll-based parallax effect
 * 
 * Creates a subtle parallax effect on images as the user scrolls,
 * similar to Apple's product pages.
 * 
 * @example
 * <ParallaxImage 
 *   src="/project.jpg" 
 *   alt="Project screenshot"
 *   speed={0.5}
 * />
 */
export function ParallaxImage({
    src,
    alt,
    className = "",
    speed = 0.5,
    priority = false,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Transform scroll progress to y-axis movement
    // Negative values move up, positive move down
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

    // Check for reduced motion preference
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                style={{
                    y: prefersReducedMotion ? 0 : y,
                }}
                className="relative h-full w-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
        </div>
    );
}
