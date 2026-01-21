
import React, { useEffect, useState, useRef } from 'react';

interface StatProps {
    label: string;
    value: number;
    suffix?: string;
    duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ label, value, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const end = value;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [hasAnimated, value, duration]);

    return (
        <div ref={countRef} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-rebuttl-blue mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-600 font-medium">
                {label}
            </div>
        </div>
    );
};

export const AnimatedStatistics: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCounter label="Teams Empowered" value={500} suffix="+" />
                    <StatCounter label="EQ Assessments" value={25} suffix="k+" />
                    <StatCounter label="Success Rate" value={94} suffix="%" />
                    <StatCounter label="Countries" value={15} suffix="+" />
                </div>
            </div>
        </section>
    );
};

export default AnimatedStatistics;
