"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, -20]);

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    const smoothOpacity = useSpring(opacity, springConfig);
    const smoothScale = useSpring(scale, springConfig);
    const smoothRotateX = useSpring(rotateX, springConfig);

    return (
        <div ref={containerRef} className="perspective-1000">
            <motion.div
                style={{
                    opacity: smoothOpacity,
                    scale: smoothScale,
                    rotateX: smoothRotateX,
                    transformPerspective: 1000,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
