"use client";

import { motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Smooth scroll indicator with bounce animation
 * Auto-hides when user starts scrolling
 * 
 * @example
 * <ScrollIndicator />
 */
export function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            if (latest > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        });

        return () => unsubscribe();
    }, [scrollY]);

    // Check for reduced motion
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={() => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                });
            }}
        >
            <motion.div
                animate={
                    prefersReducedMotion
                        ? {}
                        : {
                            y: [0, 8, 0],
                        }
                }
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <span className="text-sm font-medium">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </motion.div>
    );
}
