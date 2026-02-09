import { useEffect, useRef, useState } from "react";

interface MagneticState {
    x: number;
    y: number;
}

/**
 * Magnetic cursor effect hook
 * Creates a subtle attraction effect when cursor approaches an element
 * 
 * @param strength - Magnetic strength (0-1), default 0.3
 * @returns [ref, position] - Ref to attach and current magnetic offset
 * 
 * @example
 * const [ref, { x, y }] = useMagnetic(0.4);
 * <button ref={ref} style={{ transform: `translate(${x}px, ${y}px)` }}>
 *   Magnetic Button
 * </button>
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(
    strength: number = 0.3
): [React.RefObject<T>, MagneticState] {
    const ref = useRef<T>(null);
    const [position, setPosition] = useState<MagneticState>({ x: 0, y: 0 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Apply magnetic effect with strength multiplier
            const x = deltaX * strength;
            const y = deltaY * strength;

            setPosition({ x, y });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return [ref, position];
}
