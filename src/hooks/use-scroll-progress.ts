import { useEffect, useState } from "react";

/**
 * Custom hook to track scroll progress
 * Returns a normalized value (0-1) representing scroll position
 * 
 * @param target - Optional ref to track scroll within a specific element
 * @returns Scroll progress from 0 to 1
 * 
 * @example
 * const scrollProgress = useScrollProgress();
 * // Use scrollProgress to drive animations
 */
export function useScrollProgress(target?: React.RefObject<HTMLElement>) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const element = target?.current || window;
        const isWindow = element === window;

        const updateScrollProgress = () => {
            if (isWindow) {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollTop = window.scrollY;
                const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            } else {
                const el = element as HTMLElement;
                const scrollHeight = el.scrollHeight - el.clientHeight;
                const scrollTop = el.scrollTop;
                const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            }
        };

        updateScrollProgress();

        if (isWindow) {
            window.addEventListener("scroll", updateScrollProgress, { passive: true });
            window.addEventListener("resize", updateScrollProgress, { passive: true });
        } else {
            (element as HTMLElement).addEventListener("scroll", updateScrollProgress, { passive: true });
        }

        return () => {
            if (isWindow) {
                window.removeEventListener("scroll", updateScrollProgress);
                window.removeEventListener("resize", updateScrollProgress);
            } else {
                (element as HTMLElement).removeEventListener("scroll", updateScrollProgress);
            }
        };
    }, [target]);

    return scrollProgress;
}
