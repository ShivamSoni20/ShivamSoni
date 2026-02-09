"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
}

/**
 * Wrapper component for scroll-triggered animations
 * Reveals content when it enters the viewport
 * 
 * @param direction - Animation direction (default: "up")
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * 
 * @example
 * <ScrollReveal direction="up" delay={0.2}>
 *   <YourContent />
 * </ScrollReveal>
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
}: ScrollRevealProps) {
    const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 },
    };

    const offset = directions[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...offset,
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        x: 0,
                    }
                    : {}
            }
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
