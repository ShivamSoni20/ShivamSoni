"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    className?: string;
    gradient?: boolean;
}

/**
 * SectionDivider - Subtle divider between sections
 * 
 * Creates a minimal, elegant divider with optional gradient effect
 * to separate content sections, inspired by Apple's design.
 * 
 * @example
 * <SectionDivider gradient />
 */
/**
 * SectionDivider component
 * A subtle horizontal divider used to separate different sections of the page.
 * Supports an optional gradient effect.
 */
export function SectionDivider({
    className = "",
    gradient = false,
}: SectionDividerProps) {
    return (
        <motion.div
            className={`w-full my-16 ${className}`}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {gradient ? (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            ) : (
                <div className="h-px w-full bg-border" />
            )}
        </motion.div>
    );
}
