import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Enhanced intersection observer hook
 * Detects when an element enters the viewport
 * 
 * @param options - Configuration options
 * @returns [ref, isInView] - Ref to attach to element and visibility state
 * 
 * @example
 * const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
 * <div ref={ref}>{isInView ? 'Visible!' : 'Hidden'}</div>
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
    options: UseInViewOptions = {}
): [React.RefObject<T>, boolean] {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;

                if (triggerOnce) {
                    if (inView && !hasTriggered.current) {
                        setIsInView(true);
                        hasTriggered.current = true;
                    }
                } else {
                    setIsInView(inView);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isInView];
}
