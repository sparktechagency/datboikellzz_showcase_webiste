import React, { useState, useEffect, useRef } from 'react';
import { useInView, UseInViewOptions } from 'framer-motion';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}
interface CustomUseInViewOptions extends UseInViewOptions {
    threshold?: number;
}


const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2,
    suffix = '',
    prefix = ''
}) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 } as CustomUseInViewOptions);
    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;

            const animate = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration, hasAnimated]);

    return (
        <span ref={ref}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
