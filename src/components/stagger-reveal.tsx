"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerRevealProps {
    children: ReactNode[];
    className?: string;
    staggerDelay?: number;
    direction?: "up" | "down" | "left" | "right";
}

/**
 * StaggerReveal - Animate children in sequence
 * 
 * Creates a staggered animation effect where children appear
 * one after another with a delay between each.
 * 
 * @example
 * <StaggerReveal staggerDelay={0.1} direction="up">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </StaggerReveal>
 */
export function StaggerReveal({
    children,
    className = "",
    staggerDelay = 0.1,
    direction = "up",
}: StaggerRevealProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: 40, opacity: 0 };
            case "down":
                return { y: -40, opacity: 0 };
            case "left":
                return { x: 40, opacity: 0 };
            case "right":
                return { x: -40, opacity: 0 };
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const item = {
        hidden: getInitialPosition(),
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
        >
            {children.map((child, index) => (
                <motion.div key={index} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
