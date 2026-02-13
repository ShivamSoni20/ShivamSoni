"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressBarProps {
    className?: string;
    color?: string;
}

/**
 * ScrollProgressBar - Visual indicator of scroll position
 * 
 * Displays a thin line at the top of the page that fills
 * as the user scrolls, similar to reading progress indicators.
 * 
 * @example
 * <ScrollProgressBar color="hsl(var(--primary))" />
 */
/**
 * ScrollProgressBar component
 * Displays a thin progress bar at the top of the viewport reflecting the scroll position.
 */
export function ScrollProgressBar({
    className = "",
    color = "hsl(var(--primary))",
}: ScrollProgressBarProps) {
    const { scrollYProgress } = useScroll();

    // Add spring physics for smoother animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-1 origin-left z-50 ${className}`}
            style={{
                scaleX,
                backgroundColor: color,
            }}
        />
    );
}
