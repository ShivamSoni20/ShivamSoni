"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedGradientProps {
    className?: string;
    colors?: string[];
    speed?: number;
}

/**
 * Animated gradient background component
 * Creates a smooth, flowing gradient effect inspired by Apple's design
 * 
 * @param colors - Array of gradient colors (defaults to purple/blue theme)
 * @param speed - Animation speed in seconds (default: 15)
 * 
 * @example
 * <AnimatedGradient className="absolute inset-0 -z-10" />
 */
export function AnimatedGradient({
    className = "",
    colors = [
        "hsl(262, 80%, 50%)",
        "hsl(263, 90%, 65%)",
        "hsl(220, 70%, 50%)",
        "hsl(262, 80%, 50%)",
    ],
    speed = 15,
}: AnimatedGradientProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            className={`pointer-events-none ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                background: `linear-gradient(-45deg, ${colors.join(", ")})`,
                backgroundSize: "400% 400%",
                animation: `gradient ${speed}s ease infinite`,
            }}
        />
    );
}
