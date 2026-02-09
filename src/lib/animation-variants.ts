import { Variants } from "framer-motion";

/**
 * Centralized Framer Motion animation variants
 * Provides consistent animations across the application
 * All animations respect prefers-reduced-motion
 */

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
        },
    },
};

// Fade in with no movement
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// Scale up with fade
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Slide in from left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Slide in from right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Character reveal (for text animations)
export const characterReveal: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// Card hover effect
export const cardHover: Variants = {
    rest: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Magnetic button effect
export const magneticButton: Variants = {
    rest: {
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
            ease: "easeOut",
        },
    },
};

// Glow effect (for borders/shadows)
export const glowEffect: Variants = {
    rest: {
        boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)",
    },
    hover: {
        boxShadow: "0 0 20px 2px rgba(139, 92, 246, 0.3)",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// Reduced motion variants (fallback)
export const reducedMotion: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
