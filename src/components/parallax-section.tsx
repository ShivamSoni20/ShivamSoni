"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

/**
 * Section wrapper with parallax scrolling effect
 * Creates depth by moving content at different speeds
 * 
 * @param speed - Parallax speed multiplier (default: 0.5)
 * 
 * @example
 * <ParallaxSection speed={0.3}>
 *   <YourContent />
 * </ParallaxSection>
 */
export function ParallaxSection({
    children,
    className = "",
    speed = 0.5,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

    // Check for reduced motion
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        );
    }

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
