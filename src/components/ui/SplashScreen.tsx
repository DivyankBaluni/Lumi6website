import React, { useEffect, useState } from 'react';
import Logo from './logo';

type SplashScreenProps = {
    onComplete?: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'intro' | 'moving' | 'complete'>('intro');

    useEffect(() => {
        // Phase 1: Logo stays in center for 800ms
        const timer1 = setTimeout(() => {
            setPhase('moving');
        }, 800);

        // Phase 2: Logo moves to navbar position (1200ms animation)
        const timer2 = setTimeout(() => {
            setPhase('complete');
        }, 2000);

        // Phase 3: Call onComplete to show the page
        const timer3 = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${phase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* White background */}
            <div className="absolute inset-0 bg-white" />

            {/* Logo that moves from center to navbar position */}
            <div
                className={`absolute transition-all duration-1000 ease-in-out ${phase === 'intro'
                        ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                        : 'top-6 left-8 translate-x-0 translate-y-0 scale-100'
                    }`}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <Logo size="md" />
            </div>
        </div>
    );
};

export default SplashScreen;
